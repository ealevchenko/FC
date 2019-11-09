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
//    [RoutePrefix("api/remains_tanks_rw")]
//    public class RemainsTanksRWController : ApiController
//    {
//        protected IRepository<RemainsTanksRW> ef_rt;

//        public RemainsTanksRWController(IRepository<RemainsTanksRW> rt)
//        {
//            this.ef_rt = rt;
//        }

//        // GET: api/remains_tanks_rw/local/start/2019-07-07T00:00:00/stop/2019-07-07T23:59:59
//        [Route("local/start/{start:datetime}/stop/{stop:datetime}")]
//        [ResponseType(typeof(RemainsTanksRW))]
//        public IHttpActionResult GetRemainsTanksRW(DateTime start, DateTime stop)
//        {
//            try
//            {
//                List<RemainsTanksRW> list = this.ef_rt
//                    .Get()
//                    .Where(s => s.date >= start && s.date <= stop)
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
