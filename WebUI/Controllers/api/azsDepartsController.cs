using EFFC.Abstract;
using EFFC.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;

namespace WebUI.Controllers.api
{
    [RoutePrefix("api/azs")]
    public class azsDepartsController : ApiController
    {
        protected IRepository<azsDeparts> ef_departs;

        public azsDepartsController(IRepository<azsDeparts> departs)
        {
            this.ef_departs = departs;
        }

        // GET: api/azs/departs
        [Route("departs")]
        [ResponseType(typeof(azsDeparts))]
        public IHttpActionResult GetDeparts()
        {
            try
            {
                List<azsDeparts> list = this.ef_departs.Get().ToList();
                if (list == null || list.Count() == 0)
                {
                    return NotFound();
                }
                return Ok(list);
            }
            catch (Exception e)
            {
                return NotFound();
            }
        }
    }
}
