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
    public class TransferController : ApiController
    {
        protected IRepository<Perek_Rep_View> ef_tr;

        public TransferController(IRepository<Perek_Rep_View> tr)
        {
            this.ef_tr = tr;
        }

        // GET: api/oil/transfer/start/2019-01-01T00:00:00/stop/2019-08-016T00:00:00
        [Route("transfer/start/{start:datetime}/stop/{stop:datetime}")]
        [ResponseType(typeof(Perek_Rep_View))]
        public IHttpActionResult GetTransfer(DateTime start, DateTime stop)
        {
            try
            {
                List<Perek_Rep_View> list = this.ef_tr.Get()
                .Where(i => i.dt >= start & i.dt <= stop)
                .OrderBy(c => c.dt)
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
