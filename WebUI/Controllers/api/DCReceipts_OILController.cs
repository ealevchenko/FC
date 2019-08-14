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
    public class DCReceipts_OILController : ApiController
    {
        protected IRepository<Receipts_OIL> ef_rc;

        public DCReceipts_OILController(IRepository<Receipts_OIL> rc)
        {
            this.ef_rc = rc;
        }

        // GET: api/oil/receipts/start/2019-01-01T00:00:00/stop/2019-08-12T23:59:59
        [Route("receipts/start/{start:datetime}/stop/{stop:datetime}")]
        [ResponseType(typeof(Receipts_OIL))]
        public IHttpActionResult GetReceipts(DateTime start, DateTime stop)
        {
            try
            {
                List<Receipts_OIL> list = this.ef_rc.Get()
                    .Where(t => t.DateStarted >= start && t.DateStarted <= stop)
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
