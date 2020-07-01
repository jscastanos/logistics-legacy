using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace LMIS_Web.Models
{
    public class tClients
    {
        [Key]
        public Int64 ClientId { get; set; }
        public string ClientCode { get; set; }
        public string ClientName { get; set; }
        public string ClientAddress { get; set; }
        public string ClientContactNo { get; set; }
        public DateTime DateCreated { get; set; }
        public Int64 UserId { get; set; }

        //[ForeignKey("UserId")]
        //public virtual tUsers Users { get; set; }
    }
}
