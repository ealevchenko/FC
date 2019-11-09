//using EFFCK.Abstract;
//using EFFCK.Entities;
//using System;
//using System.Collections.Generic;
//using System.Linq;
//using System.Net;
//using System.Net.Http;
//using System.Web.Http;
//using System.Web.Http.Description;

//namespace WebUI.Controllers.api
//{
//    [RoutePrefix("api/fuel_sale_rw")]
//    public class FuelSaleRWController : ApiController
//    {
//        protected IRepository<FuelSaleRW> ef_fs;

//        public FuelSaleRWController(IRepository<FuelSaleRW> fs)
//        {
//            this.ef_fs = fs;
//        }

//        // GET: api/fuel_sale_rw/local/start/2019-07-03T00:00:00/stop/2019-07-03T23:59:59
//        [Route("local/start/{start:datetime}/stop/{stop:datetime}")]
//        [ResponseType(typeof(FuelSaleRW))]
//        public IHttpActionResult GetFuelSaleLocalRW(DateTime start, DateTime stop)
//        {
//            try
//            {
//                List<FuelSaleRW> list = this.ef_fs
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
