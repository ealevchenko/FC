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
    [RoutePrefix("api/dar_azs")]
    public class DCDailyAccountingReport_AZSController : ApiController
    {
        protected IRepository<Daily_Accounting_Report_AZS> ef_dar;
        protected IRepository<Daily_Accounting_Detali_Report_AZS> ef_dadr;
        protected IRepository<RemainsTanks_AZS> ef_remt;
        protected IRepository<ReceivingTanks_AZS> ef_rect;
        protected IRepository<DeliveryTanks_AZS> ef_dt;
        public DCDailyAccountingReport_AZSController(IRepository<Daily_Accounting_Report_AZS> dar, 
            IRepository<Daily_Accounting_Detali_Report_AZS> dadr,
            IRepository<RemainsTanks_AZS> remt,
            IRepository<ReceivingTanks_AZS> rect,
            IRepository<DeliveryTanks_AZS> dt)
        {
            this.ef_dar = dar;
            this.ef_dadr = dadr;
            this.ef_remt = remt;
            this.ef_rect = rect;
            this.ef_dt = dt;

        }

        // GET: api/dar_azs/daily_accounting_report/start/2019-09-01T00:00:00/stop/2019-09-15T00:00:00
        [Route("daily_accounting_report/start/{start:datetime}/stop/{stop:datetime}")]
        [ResponseType(typeof(Daily_Accounting_Report_AZS))]
        public IHttpActionResult GetDailyAccountingReport(DateTime start, DateTime stop)
        {
            try
            {
                List<Daily_Accounting_Report_AZS> list = this.ef_dar
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

        // GET: api/dar_azs/daily_accounting_detali_report/date/2019-09-01T00:00:00/fuel/107000022
        [Route("daily_accounting_detali_report/date/{date:datetime}/fuel/{fuel:int}")]
        [ResponseType(typeof(Daily_Accounting_Detali_Report_AZS))]
        public IHttpActionResult GetDailyAccountingDetaliReport(DateTime date, int fuel)
        {
            try
            {
                List<Daily_Accounting_Detali_Report_AZS> list = this.ef_dadr
                    .Get()
                    .Where(s => s.dt_start == date && s.fuel_type == fuel)
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
