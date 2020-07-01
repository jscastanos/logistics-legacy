using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace LMIS_Web.Models
{
    public class tUsers
    {
        [Key]
        public Int64 UserId { get; set; }
        public string UserCode { get; set; }
        public Int64 RoleId { get; set; }
        public Int64 BranchId { get; set; }
        public DateTime DateCreated { get; set; }
        public bool IsActive { get; set; }
        public bool IsEmployee { get; set; }
        public string Username { get; set; }
        public string Password { get; set; }
        //[ForeignKey("BranchId")]
        //public virtual tBranch Branch{ get; set; }
    }
}
