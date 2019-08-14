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
    public class DCFuelSale_OILController : ApiController
    {
        protected IRepository<FuelSale_OIL> ef_fs;

        public DCFuelSale_OILController(IRepository<FuelSale_OIL> fs)
        {
            this.ef_fs = fs;
        }

        // GET: api/oil/fuel_sale/start/2019-01-01T00:00:00/stop/2019-08-12T23:59:59
        [Route("fuel_sale/start/{start:datetime}/stop/{stop:datetime}")]
        [ResponseType(typeof(FuelSale_OIL))]
        public IHttpActionResult GetFuelSale(DateTime start, DateTime stop)
        {
            try
            {
                List<FuelSale_OIL> list = this.ef_fs.Get()
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
