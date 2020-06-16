using Microsoft.AspNetCore.Mvc;

namespace LMIS_Web.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class SampleController : ControllerBase
    {


        [HttpGet]
        public IActionResult Get()
        {
            return Ok("Get method was called");
        }
    }
}
