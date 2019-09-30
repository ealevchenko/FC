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
    public class DeliveryTanksGroupNum {
        public DateTime dt { get; set; }
        public string name_trk { get; set;  }
        public int num { get;  set; }
        public string name_gas_station { get;  set; }
        public string serial_number_flowmeter { get;  set; }
        public string identification_number_flowmeter { get;  set; }
        public int fuel_type { get;  set; }
        public string ukt_zed { get;  set; }
        public string fuel_name { get;  set; }
        public double volume_delivery { get;  set; }
        public double volume15 { get;  set; }
    }

    public class DeliveryTanksGroupFuel {
        public DateTime dt { get; set; }
        public int fuel_type { get;  set; }
        public string ukt_zed { get;  set; }
        public string fuel_name { get;  set; }
        public double volume_delivery { get;  set; }
        public double volume15 { get;  set; }
    }

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

        // GET: api/dar_azs/daily_accounting_report/date/2019-09-01T00:00:00
        [Route("daily_accounting_report/date/{date:datetime}")]
        [ResponseType(typeof(Daily_Accounting_Report_AZS))]
        public IHttpActionResult GetDailyAccountingReport(DateTime date)
        {
            try
            {
                List<Daily_Accounting_Report_AZS> list = this.ef_dar
                    .Get()
                    .Where(s => s.date_start == date)
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

        // GET: api/dar_azs/daily_accounting_detali_report/date/2019-09-01T00:00:00
        [Route("daily_accounting_detali_report/date/{date:datetime}")]
        [ResponseType(typeof(Daily_Accounting_Detali_Report_AZS))]
        public IHttpActionResult GetDailyAccountingDetaliReport(DateTime date)
        {
            try
            {
                List<Daily_Accounting_Detali_Report_AZS> list = this.ef_dadr
                    .Get()
                    .Where(s => s.dt_start == date)
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

        // GET: api/dar_azs/delivery_tanks/group_num/date/2019-09-01T00:00:00
        [Route("delivery_tanks/group_num/date/{date:datetime}")]
        [ResponseType(typeof(DeliveryTanksGroupNum))]
        public IHttpActionResult GetDeliveryTanksReportGroupNum(DateTime date)
        {
            try
            {
                string sql = "Select " +
                    "min([dt]) as [dt] " +
                    ",min([name_trk]) as [name_trk] " +
                    ",min([num]) as [num] " +
                    ",min([name_gas_station]) as [name_gas_station] " +
                    ",min([serial_number_flowmeter]) as [serial_number_flowmeter] " +
                    ",min([identification_number_flowmeter]) as [identification_number_flowmeter] " +
                    ",min([fuel_type]) as [fuel_type] " +
                    ",min([ukt_zed]) as [ukt_zed] " +
                    ",min([fuel_name]) as [fuel_name] " +
                    ",sum([volume_delivery]) as [volume_delivery] " +
                    ",sum([volume15]) as [volume15] " +
                    "FROM [dbo].[DeliveryTanks_AZS] " +
                    "where[dt] = convert(datetime, '"+ date.ToString("yyyy-MM-dd HH:mm:ss")+ "', 120) "+
                    "group by [trk_num],[side],[num]";
                List<DeliveryTanksGroupNum> list = this.ef_dt.Database.SqlQuery<DeliveryTanksGroupNum>(sql).ToList();
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

        // GET: api/dar_azs/delivery_tanks/group_fuel/date/2019-09-01T00:00:00
        [Route("delivery_tanks/group_fuel/date/{date:datetime}")]
        [ResponseType(typeof(DeliveryTanksGroupFuel))]
        public IHttpActionResult GetDeliveryTanksReportGroupFuel(DateTime date)
        {
            try
            {
                string sql = "Select " +
                    "min([dt]) as [dt] " +
                    ",min([fuel_type]) as [fuel_type] " +
                    ",min([ukt_zed]) as [ukt_zed] " +
                    ",min([fuel_name]) as [fuel_name] " +
                    ",sum([volume_delivery]) as [volume_delivery] " +
                    ",sum([volume15]) as [volume15] " +
                    "FROM [dbo].[DeliveryTanks_AZS] " +
                    "where[dt] = convert(datetime, '"+ date.ToString("yyyy-MM-dd HH:mm:ss")+ "', 120) "+
                    "group by [fuel_type]";
                List<DeliveryTanksGroupFuel> list = this.ef_dt.Database.SqlQuery<DeliveryTanksGroupFuel>(sql).ToList();
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
