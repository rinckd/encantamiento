﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;

namespace Angular2WebpackVisualStudio.Models
{
    public class QuickstartContext : IdentityDbContext<QuickStartUser>
    {
        private readonly IConfigurationRoot _config;
        private readonly IHostingEnvironment _env;

        public QuickstartContext(IConfigurationRoot config, IHostingEnvironment env, DbContextOptions options)
            : base()
        {
            _env = env;
            _config = config;
        }

        public DbSet<Trip> Trips { get; set; }
        public DbSet<Stop> Stops { get; set; }
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            base.OnConfiguring(optionsBuilder);

            {
                optionsBuilder.UseSqlServer(_config["ConnectionStrings:DefaultConnection"]);
            }

        }
    }
}
