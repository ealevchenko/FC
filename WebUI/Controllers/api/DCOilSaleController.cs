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
    public class DCOilSaleController : ApiController
    {
        protected IRepository<OilSale> ef_fs;

        public DCOilSaleController(IRepository<OilSale> fs)
        {
            this.ef_fs = fs;
        }

        // GET: api/oil/fuel_sale/start/2019-12-16T00:00:00/stop/2019-12-16T23:59:59
        [Route("fuel_sale/start/{start:datetime}/stop/{stop:datetime}")]
        [ResponseType(typeof(OilSale))]
        public IHttpActionResult GetOilSale(DateTime start, DateTime stop)
        {
            try
            {
                List<OilSale> list = this.ef_fs.Get()
                    .Where(t => t.start_datetime >= start && t.stop_datetime <= stop)
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
