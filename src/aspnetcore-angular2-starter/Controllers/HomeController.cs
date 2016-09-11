using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json.Linq;
using Angular2WebpackVisualStudio.Services;
using Microsoft.Extensions.Configuration;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Authorization;

namespace Angular2WebpackVisualStudio.Controllers
{
    [Authorize]
    public class HomeController : Controller
    {
        private IHostingEnvironment _config;

        public HomeController(IHostingEnvironment config)
        {
            _config = config;
        }

        public IActionResult Index()
        {
            return View();
        }
    }
}
