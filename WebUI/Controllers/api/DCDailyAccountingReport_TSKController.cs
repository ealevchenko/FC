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
    public class DeliveryTanksGroupNumTSK {
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

    public class DeliveryTanksGroupFuelTSK {
        public DateTime dt { get; set; }
        public int fuel_type { get;  set; }
        public string ukt_zed { get;  set; }
        public string fuel_name { get;  set; }
        public double volume_delivery { get;  set; }
        public double volume15 { get;  set; }
    }

    [RoutePrefix("api/dar_tsk")]
    public class DCDailyAccountingReport_TSKController : ApiController
    {
        protected IRepository<Daily_Accounting_Report_TSK> ef_dar;
        protected IRepository<Daily_Accounting_Detali_Report_TSK> ef_dadr;
        protected IRepository<RemainsTanks_TSK> ef_remt;
        protected IRepository<ReceivingTanks_TSK> ef_rect;
        protected IRepository<DeliveryTanks_TSK> ef_dt;
        //protected IRepository<Cat_TRK_TSK> ef_ctrk;
        public DCDailyAccountingReport_TSKController(IRepository<Daily_Accounting_Report_TSK> dar, 
            IRepository<Daily_Accounting_Detali_Report_TSK> dadr,
            IRepository<RemainsTanks_TSK> remt,
            IRepository<ReceivingTanks_TSK> rect,
            IRepository<DeliveryTanks_TSK> dt//,
             //IRepository<Cat_TRK_AZS> ctrk
            )
        {
            this.ef_dar = dar;
            this.ef_dadr = dadr;
            this.ef_remt = remt;
            this.ef_rect = rect;
            this.ef_dt = dt;
            //this.ef_ctrk = ctrk;
        }

        //// GET: api/dar_tsk/catalog/trk/all
        //[Route("catalog/trk/all")]
        //[ResponseType(typeof(Cat_TRK_AZS))]
        //public IHttpActionResult GetCatalogTRK()
        //{
        //    try
        //    {
        //        List<Cat_TRK_AZS> list = this.ef_ctrk
        //            .Get()
        //            .ToList();
        //        if (list == null)
        //        {
        //            return NotFound();
        //        }
        //        return Ok(list);
        //    }
        //    catch (Exception e)
        //    {
        //        return NotFound();
        //    }
        //}

        // GET: api/dar_tsk/daily_accounting_report/start/2019-09-01T00:00:00/stop/2019-09-15T00:00:00
        [Route("daily_accounting_report/start/{start:datetime}/stop/{stop:datetime}")]
        [ResponseType(typeof(Daily_Accounting_Report_TSK))]
        public IHttpActionResult GetDailyAccountingReport(DateTime start, DateTime stop)
        {
            try
            {
                List<Daily_Accounting_Report_TSK> list = this.ef_dar
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

        // GET: api/dar_tsk/daily_accounting_report/date/2019-09-01T00:00:00
        [Route("daily_accounting_report/date/{date:datetime}")]
        [ResponseType(typeof(Daily_Accounting_Report_TSK))]
        public IHttpActionResult GetDailyAccountingReport(DateTime date)
        {
            try
            {
                List<Daily_Accounting_Report_TSK> list = this.ef_dar
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

        // GET: api/dar_tsk/daily_accounting_detali_report/date/2019-09-01T00:00:00/fuel/107000022
        [Route("daily_accounting_detali_report/date/{date:datetime}/fuel/{fuel:int}")]
        [ResponseType(typeof(Daily_Accounting_Detali_Report_TSK))]
        public IHttpActionResult GetDailyAccountingDetaliReport(DateTime date, int fuel)
        {
            try
            {
                List<Daily_Accounting_Detali_Report_TSK> list = this.ef_dadr
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

        // GET: api/dar_tsk/daily_accounting_detali_report/date/2019-09-01T00:00:00
        [Route("daily_accounting_detali_report/date/{date:datetime}")]
        [ResponseType(typeof(Daily_Accounting_Detali_Report_TSK))]
        public IHttpActionResult GetDailyAccountingDetaliReport(DateTime date)
        {
            try
            {
                List<Daily_Accounting_Detali_Report_TSK> list = this.ef_dadr
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

        // GET: api/dar_tsk/delivery_tanks/group_num/date/2019-09-01T00:00:00
        [Route("delivery_tanks/group_num/date/{date:datetime}")]
        [ResponseType(typeof(DeliveryTanksGroupNumTSK))]
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
                    "FROM [dbo].[DeliveryTanks_TSK] " +
                    "where[dt] = convert(datetime, '"+ date.ToString("yyyy-MM-dd HH:mm:ss")+ "', 120) "+
                    "group by [num]";
                List<DeliveryTanksGroupNumTSK> list = this.ef_dt.Database.SqlQuery<DeliveryTanksGroupNumTSK>(sql).ToList();
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

        // GET: api/dar_tsk/delivery_tanks/group_fuel/date/2019-09-01T00:00:00
        [Route("delivery_tanks/group_fuel/date/{date:datetime}")]
        [ResponseType(typeof(DeliveryTanksGroupFuelTSK))]
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
                    "FROM [dbo].[DeliveryTanks_TSK] " +
                    "where[dt] = convert(datetime, '"+ date.ToString("yyyy-MM-dd HH:mm:ss")+ "', 120) "+
                    "group by [fuel_type]";
                List<DeliveryTanksGroupFuelTSK> list = this.ef_dt.Database.SqlQuery<DeliveryTanksGroupFuelTSK>(sql).ToList();
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
