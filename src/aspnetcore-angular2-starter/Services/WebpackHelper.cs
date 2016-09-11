﻿using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Angular2WebpackVisualStudio.Services
{
    public class WebpackHelper
    {
        public static JObject GetWebpackAssetsJson(string applicationBasePath)
        {
            JObject webpackAssetsJson = null;
            string packageJsonFilePath = $"{applicationBasePath}\\{"package.json"}";

            using (StreamReader packageJsonFile = File.OpenText(packageJsonFilePath))
            {
                using (JsonTextReader packageJsonReader = new JsonTextReader(packageJsonFile))
                {
                    JObject packageJson = (JObject)JToken.ReadFrom(packageJsonReader);
                    JObject webpackConfigJson = (JObject)packageJson["customConfig"]["webpackConfig"];
                    string webpackAssetsFileName = webpackConfigJson["assetsFileName"].Value<string>();
                    string webpackBuildDirectory = webpackConfigJson["buildDirectory"].Value<string>();
                    string webpackAssetsFilePath = $"{applicationBasePath}\\{webpackBuildDirectory}\\{webpackAssetsFileName}";

                    using (StreamReader webpackAssetsFile = File.OpenText(webpackAssetsFilePath))
                    {
                        using (JsonTextReader webpackAssetsReader = new JsonTextReader(webpackAssetsFile))
                        {
                            webpackAssetsJson = (JObject)JToken.ReadFrom(webpackAssetsReader);
                        }
                    }
                }
            }
            return webpackAssetsJson;
        }
    }
}
