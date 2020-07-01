using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using LMIS_Web.CustomRoutes.V1;
using LMIS_Web.Messages.V1.ServiceRequests.Responses;
using LMIS_Web.Services.V1.ServiceRequests;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace LMIS_Web.Controllers.V1
{
    [ApiController]
    public class ServiceRequestController : ControllerBase
    {
        private readonly IServiceRequests _serviceRequests;

        public ServiceRequestController(IServiceRequests serviceRequests)
        {
            _serviceRequests = serviceRequests;
        }

        [HttpGet(ApiRoutes.ServiceRequest.GetByBranchId)]
        public async Task<IActionResult> GetByBranch(Int64 branchId)
        {
            var services = await _serviceRequests.GetServiceRequestByBranchAsync(branchId);

            if (services == null)
                return NotFound();
            var response = services.Select(s => new GetServiceRequestByBranchResponse()
            {
                ClientId = s.ClientId,
                Comment = s.Comment,
                Description = s.Description,
                Destination = s.Destination,
                EndDate = s.EndDate,
                Origin = s.Origin,
                ServiceReqId = s.ServiceReqId,
                ServiceRequestStatus = s.ServiceRequestStatus,
                StartDate = s.StartDate
            });
            return Ok(response);
        }
    }
}