using System;
using System.Linq;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;

namespace Angular2WebpackVisualStudio.Models
{
    public class QuickStartUser : IdentityUser
    {
        public DateTime FirstTrip { get; set; }

    }


}