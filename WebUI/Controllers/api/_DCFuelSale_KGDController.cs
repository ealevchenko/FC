//using EFFC.Abstract;
//using EFFC.Entities;
//using System;
//using System.Collections.Generic;
//using System.Linq;
//using System.Net;
//using System.Net.Http;
//using System.Web.Http;
//using System.Web.Http.Description;

//namespace WebUI.Controllers.api
//{
//    [RoutePrefix("api/fuel_sale_kgd")]
//    public class DCFuelSale_KGDController : ApiController
//    {
//        protected IRepository<FuelSale_KGD> ef_fs;

//        public DCFuelSale_KGDController(IRepository<FuelSale_KGD> fs)
//        {
//            this.ef_fs = fs;
//        }

//        // GET: api/fuel_sale_kgd/start/2019-07-03T00:00:00/stop/2019-07-03T23:59:59
//        [Route("start/{start:datetime}/stop/{stop:datetime}")]
//        [ResponseType(typeof(FuelSale_KGD))]
//        public IHttpActionResult GetFuelSale_KGD(DateTime start, DateTime stop)
//        {
//            try
//            {
//                List<FuelSale_KGD> list = this.ef_fs
//                    .Get()
//                    .Where(s => s.start_datetime >= start && s.start_datetime <= stop)
//                    .ToList();
//                if (list == null)
//                {
//                    return NotFound();
//                }
//                return Ok(list);
//            }
//            catch (Exception e)
//            {
//                return NotFound();
//            }
//        }

//    }
//}
