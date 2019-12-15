
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
    [RoutePrefix("api/remains_tanks_kgd")]
    public class DCRemainsTanks_TSKController : ApiController
    {
        protected IRepository<Remains_TSK> ef_rt;

        public DCRemainsTanks_TSKController(IRepository<Remains_TSK> rt)
        {
            this.ef_rt = rt;
        }

        // GET: api/remains_tanks_kgd/start/2019-07-07T00:00:00/stop/2019-07-07T23:59:59
        [Route("start/{start:datetime}/stop/{stop:datetime}")]
        [ResponseType(typeof(Remains_TSK))]
        public IHttpActionResult GetRemainsTanks_KGD(DateTime start, DateTime stop)
        {
            try
            {
                List<Remains_TSK> list = this.ef_rt
                    .Get()
                    .Where(s => s.date >= start && s.date <= stop)
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
