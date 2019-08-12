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
    public class oilTransferController : ApiController
    {
        protected IRepository<Oil_Transfer> ef_ot;

        public oilTransferController(IRepository<Oil_Transfer> ot)
        {
            this.ef_ot = ot;
        }

        // GET: api/oil/transfer/start/2019-01-01T00:00:00/stop/2019-08-12T23:59:59
        [Route("transfer/start/{start:datetime}/stop/{stop:datetime}")]
        [ResponseType(typeof(Oil_Transfer))]
        public IHttpActionResult GetTransfer(DateTime start, DateTime stop)
        {
            try
            {
                List<Oil_Transfer> list = this.ef_ot.Get()
                    .Where(t => t.dt >= start && t.dt <= stop)
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
