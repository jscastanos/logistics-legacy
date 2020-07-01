using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace LMIS_Web.Models
{
    public class tServiceRequests
    {
        [Key]
        public Int64 ServiceReqId { get; set; }
        public Int64 BranchId { get; set; }
        public Int64 ClientId { get; set; }
        public string Origin { get; set; }
        public string Destination { get; set; }
        public DateTime StartDate { get; set; }
        public DateTime EndDate { get; set; }
        public int ServiceRequestStatus { get; set; }
        public DateTime DateCreated { get; set; }
        public string Description { get; set; }
        public string Comment { get; set; }
        //[ForeignKey("ClientId")]
        //public virtual tClients Clients { get; set; }

    }
}
