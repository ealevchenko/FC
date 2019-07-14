using EFFC.Entities;
using EFFC.Abstract;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;

namespace WebUI.Controllers.api
{
    [RoutePrefix("api/daily_report_azs")]
    public class DCDaily_Report_AZSController : ApiController
    {
        protected IRepository<Daily_Report_AZS> ef_dr;

        public DCDaily_Report_AZSController(IRepository<Daily_Report_AZS> dr)
        {
            this.ef_dr = dr;
        }

        // GET: api/daily_report_azs/start/2019-07-01T00:00:00/stop/2019-07-10T00:00:00
        [Route("start/{start:datetime}/stop/{stop:datetime}")]
        [ResponseType(typeof(Daily_Report_AZS))]
        public IHttpActionResult GetDaily_Report_AZS(DateTime start, DateTime stop)
        {
            try
            {
                List<Daily_Report_AZS> list = this.ef_dr
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
