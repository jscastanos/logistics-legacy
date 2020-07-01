using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace LMIS_Web.Models
{
    public class LMISContext : DbContext
    {
        public DbSet<tClients> tClients { get; set; }
        public DbSet<tUsers> tUsers { get; set; }
        public DbSet<tServiceRequests> tServiceRequests { get; set; }
        public DbSet<tBranch> tBranch { get; set; }

        public LMISContext()
        {

        }
        public LMISContext(DbContextOptions<LMISContext> options)
            : base(options)
        {

        }
    }
}
