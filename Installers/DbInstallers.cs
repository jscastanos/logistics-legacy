using LMIS_Web.Models;
using LMIS_Web.Services.V1.ServiceRequests;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace LMIS_Web.Installers
{
    public class DbInstallers : IInstaller
    {
        public void InstallServices(IServiceCollection services, IConfiguration configuration)
        {
            services.AddDbContext<LMISContext>(
                options => options.UseSqlServer(
                    configuration.GetConnectionString("LMIS")));
            //services.AddScoped<IUserServices, UserServices>();
            services.AddScoped<IServiceRequests, ServiceRequests>();
        }
    }
}
