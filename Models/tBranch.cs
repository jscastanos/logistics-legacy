using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace LMIS_Web.Models
{
    public class tBranch
    {
        [Key]
        public Int64 BranchId { get; set; }
        public Int64 BranchManagerId { get; set; }
        public string BranchCode { get; set; }
        public string BranchAddress { get; set; }
        public string BranchName { get; set; }
        public string BranchContactNo { get; set; }
        public DateTime DateCreated { get; set; }
        public bool IsActive { get; set; }
    }
}
