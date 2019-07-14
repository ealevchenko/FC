
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
    [RoutePrefix("api/receiving_fuel_kgd")]
    public class DCReceivingFuel_KGDController : ApiController
    {
        protected IRepository<ReceivingFuel_KGD> ef_rf;

        public DCReceivingFuel_KGDController(IRepository<ReceivingFuel_KGD> rf)
        {
            this.ef_rf = rf;
        }

        // GET: api/receiving_fuel_kgd/start/2019-07-03T00:00:00/stop/2019-07-03T23:59:59
        [Route("start/{start:datetime}/stop/{stop:datetime}")]
        [ResponseType(typeof(ReceivingFuel_KGD))]
        public IHttpActionResult GetReceivingFuel_KGD(DateTime start, DateTime stop)
        {
            try
            {
                List<ReceivingFuel_KGD> list = this.ef_rf
                    .Get()
                    .Where(s => s.start_datetime >= start && s.start_datetime <= stop)
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
