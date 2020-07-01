using LMIS_Web.Messages.V1.ServiceRequests.Responses;
using LMIS_Web.Models;
using System;
using Microsoft.EntityFrameworkCore;
using System.Linq;
using System.Threading.Tasks;
using System.Collections.Generic;

namespace LMIS_Web.Services.V1.ServiceRequests
{
    public class ServiceRequests : IServiceRequests
    {
        private readonly LMISContext _lmisContext;
        public ServiceRequests(LMISContext lmisContext)
        {
            _lmisContext = lmisContext;
        }
        public Task<List<tServiceRequests>> GetServiceRequestByBranchAsync(Int64 branchId)
        {
            var services =_lmisContext.tServiceRequests.Where(x => x.BranchId == branchId).ToListAsync();
            return services;
        }
    }
}
