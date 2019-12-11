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
    [RoutePrefix("api/fuel_sale_kgd")]
    public class DCFuelSale_TSKController : ApiController
    {
        protected IRepository<FuelSale_TSK> ef_fs;

        public DCFuelSale_TSKController(IRepository<FuelSale_TSK> fs)
        {
            this.ef_fs = fs;
        }

        // GET: api/fuel_sale_kgd/start/2019-12-10T00:00:00/stop/2019-12-10T23:59:59
        [Route("start/{start:datetime}/stop/{stop:datetime}")]
        [ResponseType(typeof(FuelSale_TSK))]
        public IHttpActionResult GetFuelSale_TSK(DateTime start, DateTime stop)
        {
            try
            {
                List<FuelSale_TSK> list = this.ef_fs
                    .Get()
                    .Where(s => s.Start_Date >= start && s.End_Date <= stop)
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
