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
    public class Daily_Report_Benzene_all
    {

        public int tank { get; set; }

        public DateTime? start_dt { get; set; }

        public DateTime? stop_dt { get; set; }

        public double? start_volume { get; set; }

        public double? start_volume15 { get; set; }

        public double? start_mass { get; set; }

        public double? start_dens { get; set; }

        public double? start_dens15 { get; set; }

        public double? stop_volume { get; set; }

        public double? stop_volume15 { get; set; }

        public double? stop_mass { get; set; }

        public double? stop_dens { get; set; }

        public double? stop_dens15 { get; set; }

        public double? dispensing_volume { get; set; }

        public double? dispensing_volume15 { get; set; }

        public double? dispensing_mass { get; set; }

        public double? dispensing_dens { get; set; }

        public double? dispensing_dens15 { get; set; }

        public double? deliverys_volume { get; set; }

        public double? deliverys_volume15 { get; set; }

        public double? deliverys_mass { get; set; }

        public double? deliverys_dens { get; set; }

        public double? deliverys_dens15 { get; set; }
    }

    [RoutePrefix("api/dar_benzene")]
    public class DCDailyReport_BenzeneController : ApiController
    {

        protected IRepository<Daily_Report_Benzene> ef_drb;

        public DCDailyReport_BenzeneController(IRepository<Daily_Report_Benzene> drb)
        {
            this.ef_drb = drb;
        }


        // GET: api/dar_benzene/daily_report/period/start/2021-04-01T00:00:00/stop/2021-04-31T23:59:59
        [Route("daily_report/period/start/{start:datetime}/stop/{stop:datetime}")]
        [ResponseType(typeof(Daily_Report_Benzene_all))]
        public IHttpActionResult GetDailyReportPeriod(DateTime start, DateTime stop)
        {
            try
            {
                //this.ef_contex.Database.CommandTimeout = 300;
                string sql = "select * from [dbo].[get_benzene_daily_report](CONVERT(datetime, '" + start.ToString("yyyy-MM-dd HH:mm:ss") + "' ,120), CONVERT(datetime, '" + stop.ToString("yyyy-MM-dd HH:mm:ss") + "' ,120))";
                List<Daily_Report_Benzene_all> list = this.ef_drb.Database.SqlQuery<Daily_Report_Benzene_all>(sql).ToList();
                //this.ef_contex.Database.CommandTimeout = null;
                return Ok(list);
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }

        // GET: api/dar_benzene/daily_report/tanks/period/start/2021-04-01T00:00:00/stop/2021-04-31T23:59:59
        [Route("daily_report/tanks/period/start/{start:datetime}/stop/{stop:datetime}")]
        [ResponseType(typeof(Daily_Report_Benzene))]
        public IHttpActionResult GetDailyReportTanksPeriod(DateTime start, DateTime stop)
        {
            try
            {
                //this.ef_contex.Database.CommandTimeout = 300;

                EFDaily_Report_Benzene ef_daily = new EFDaily_Report_Benzene();

                List<Daily_Report_Benzene> list = ef_daily.Context.Where(d => d.start_dt >= start && d.stop_dt <= stop).ToList();
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
