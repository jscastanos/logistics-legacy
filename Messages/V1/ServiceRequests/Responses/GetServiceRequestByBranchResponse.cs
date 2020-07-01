using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace LMIS_Web.Messages.V1.ServiceRequests.Responses
{
    public class GetServiceRequestByBranchResponse
    {
        public Int64 ServiceReqId { get; set; }
        public string Origin { get; set; }
        public string Destination { get; set; }
        public DateTime StartDate { get; set; }
        public DateTime EndDate { get; set; }
        public Int64 ClientId { get; set; }
        public int ServiceRequestStatus { get; set; }
        public string Description { get; set; }
        public string Comment { get; set; }
    }
}
