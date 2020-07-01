using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace LMIS_Web.CustomRoutes.V1
{
    public static class ApiRoutes
    {
        public const string Root = "api";
        public const string Version = "v1";
        public const string Base = Root + "/" + Version;

        public static class ServiceRequest
        {
            public const string GetAll = Base + "/servicerequests";
            public const string GetByBranchId = Base + "/servicerequests/{branchId}";
        }
        //public static class User
        //{
        //    public const string GetAll = Base + "/user";
        //    public const string Get = Base + "/user/{userId}";
        //    public const string Create = Base + "/user";
        //}

    }
}
