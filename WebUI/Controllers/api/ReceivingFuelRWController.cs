using EFFCK.Abstract;
using EFFCK.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;

namespace WebUI.Controllers.api
{
    [RoutePrefix("api/receiving_fuel_rw")]
    public class ReceivingFuelRWController : ApiController
    {
        protected IRepository<ReceivingFuelRW> ef_rf;

        public ReceivingFuelRWController(IRepository<ReceivingFuelRW> rf)
        {
            this.ef_rf = rf;
        }

        // GET: api/receiving_fuel_rw/local/start/2019-07-03T00:00:00/stop/2019-07-03T23:59:59
        [Route("local/start/{start:datetime}/stop/{stop:datetime}")]
        [ResponseType(typeof(ReceivingFuelRW))]
        public IHttpActionResult GetFuelSaleLocalRW(DateTime start, DateTime stop)
        {
            try
            {
                List<ReceivingFuelRW> list = this.ef_rf
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
