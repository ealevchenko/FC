using EFFC.Abstract;
using EFFC.Concrete;
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

    [RoutePrefix("api/dar_benzene")]
    public class DCFuelSale_BenzeneController : ApiController
    {

        protected IRepository<Sales_Benzine> ef_sb;

        public DCFuelSale_BenzeneController(IRepository<Sales_Benzine> sb)
        {
            this.ef_sb = sb;
        }

        // GET: api/dar_benzene/sales_benzine/period/start/2021-04-01T00:00:00/stop/2021-04-31T23:59:59
        [Route("sales_benzine/period/start/{start:datetime}/stop/{stop:datetime}")]
        [ResponseType(typeof(Sales_Benzine))]
        public IHttpActionResult GetSalesBenzinePeriod(DateTime start, DateTime stop)
        {
            try
            {
                //this.ef_contex.Database.CommandTimeout = 300;

                EFSales_Benzine ef_sales = new EFSales_Benzine();

                List<Sales_Benzine> list = ef_sales.Context.Where(d => d.start >= start && d.start <= stop).ToList();
                //this.ef_contex.Database.CommandTimeout = null;
                return Ok(list);
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }

    }
}
