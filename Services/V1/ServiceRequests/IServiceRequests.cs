using LMIS_Web.Messages.V1.ServiceRequests.Responses;
using LMIS_Web.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace LMIS_Web.Services.V1.ServiceRequests
{
    public interface IServiceRequests
    {
        Task<List<tServiceRequests>> GetServiceRequestByBranchAsync(Int64 branchId);
    }
}
