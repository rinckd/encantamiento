using System;
using System.Linq;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Angular2WebpackVisualStudio.Models;
using AutoMapper;
using Angular2WebpackVisualStudio.ViewModels;
using Angular2WebpackVisualStudio.Services;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;

namespace Angular2WebpackVisualStudio
{
    public class Startup
    {
        private readonly IConfigurationRoot _config;
        private readonly IHostingEnvironment _env;

        public Startup(IHostingEnvironment env)
        {
            var builder = new ConfigurationBuilder()
                .SetBasePath(env.ContentRootPath)
                .AddJsonFile("appsettings.json", optional: true, reloadOnChange: true)
                .AddJsonFile($"appsettings.{env.EnvironmentName}.json", optional: true)
                .AddEnvironmentVariables();
            _config = builder.Build();
            _env = env;
        }


        // This method gets called by the runtime. Use this method to add services to the container.
        // This is the dependency injection layer of ASP.NET MVC
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddSingleton(_config);
            services.AddDbContext<QuickstartContext>();

            services.AddIdentity<QuickStartUser, IdentityRole>(config =>
            {
                config.User.RequireUniqueEmail = true;
                config.Password.RequiredLength = 8;
                config.Cookies.ApplicationCookie.LoginPath = "/Auth/Login";
            })
            .AddEntityFrameworkStores<QuickstartContext>();
            services.AddScoped<IQuickStartRepository, QuickStartRepository>();
            services.AddTransient<QuickstartContextSeedData>(); // Created every time we need it.
            services.AddTransient<GeoCoordsService>();
            services.AddLogging();
            services.AddMvc();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env, 
            ILoggerFactory loggerFactory, QuickstartContextSeedData seeder)
        {
            Mapper.Initialize(config =>
            {
                config.CreateMap<StopViewModel, Stop>().ReverseMap();
                config.CreateMap<TripViewModel, Trip>().ReverseMap();
            });
            if (env.IsEnvironment("Development"))
            {
                app.UseDeveloperExceptionPage();
                loggerFactory.AddConsole(_config.GetSection("Logging"));
                loggerFactory.AddDebug(LogLevel.Information);
                loggerFactory.AddDebug();
            }
            else
            {
                loggerFactory.AddDebug(LogLevel.Error);
            }

            var angularRoutes = new[] {
                 "/home"
             };

            //app.Use(async (context, next) =>
            //{
            //    if (context.Request.Path.HasValue && null != angularRoutes.FirstOrDefault(
            //        (ar) => context.Request.Path.Value.StartsWith(ar, StringComparison.OrdinalIgnoreCase)))
            //    {
            //        context.Request.Path = new PathString("/");
            //    }

            //    await next();
            //});
            //app.UseDefaultFiles();
            app.UseStaticFiles();
            app.UseIdentity();
            app.UseMvc(routes =>
            {
                routes.MapRoute(
                    name: "default",
                    template: "{controller}/{action}/{id?}",
                    defaults: new { controller = "Home", action = "Index" });
            });
            seeder.EnsureSeedData().Wait();
        }
    }
}
