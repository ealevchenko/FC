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
    [RoutePrefix("api/oil")]
    public class DCRemainsTanks_OILController : ApiController
    {
        protected IRepository<RemainsTanks_OIL> ef_rt;

        public DCRemainsTanks_OILController(IRepository<RemainsTanks_OIL> rt)
        {
            this.ef_rt = rt;
        }

        // GET: api/oil/remains_tanks/date/2019-08-11T07:00:00
        [Route("remains_tanks/date/{date:datetime}")]
        [ResponseType(typeof(RemainsTanks_OIL))]
        public IHttpActionResult GetRemainsTanks(DateTime date)
        {
            try
            {
                DateTime stop = date.AddSeconds(1); 
                List<RemainsTanks_OIL> list = this.ef_rt.Get()
                    .Where(r=>r.Timestamp > date && r.Timestamp < stop)
                    .ToList();

                if (list == null)
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
