using EFOC.Abstract;
using EFOC.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;

namespace WebUI_Oil.Controllers.api
{
    [RoutePrefix("api/oil")]
    public class RemainsTanksController : ApiController
    {
        protected IRepository<RemainsTanks> ef_rt;

        public RemainsTanksController(IRepository<RemainsTanks> rt)
        {
            this.ef_rt = rt;
        }

        // GET: api/oil/remains_tanks/date/2019-10-03T20:00:00
        [Route("remains_tanks/date/{date:datetime}")]
        [ResponseType(typeof(RemainsTanks))]
        public IHttpActionResult GetRemainsTanks(DateTime date)
        {
            try
            {
                DateTime stop = date.AddSeconds(1);
                List<RemainsTanks> list = this.ef_rt.Get()
                .Where(r => r.Timestamp > date && r.Timestamp < stop)
                .OrderBy(c => c.oil_type)
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
