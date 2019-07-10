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
    [RoutePrefix("api/daily_report_rw")]
    public class Daily_ReportRWController : ApiController
    {
        protected IRepository<Daily_ReportRW> ef_dr;

        public Daily_ReportRWController(IRepository<Daily_ReportRW> dr)
        {
            this.ef_dr = dr;
        }

        // GET: api/daily_report_rw/local/start/2019-07-01T00:00:00/stop/2019-07-10T00:00:00
        [Route("local/start/{start:datetime}/stop/{stop:datetime}")]
        [ResponseType(typeof(Daily_ReportRW))]
        public IHttpActionResult GetDaily_ReportRW(DateTime start, DateTime stop)
        {
            try
            {
                List<Daily_ReportRW> list = this.ef_dr
                    .Get()
                    .Where(s => s.date_start >= start && s.date_start <= stop)
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
