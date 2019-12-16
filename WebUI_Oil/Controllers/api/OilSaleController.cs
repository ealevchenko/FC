using EFOC.Abstract;
using EFOC.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;

namespace WebUI_Oil.Controllers.api
{
    public class OilSale
    {
        public int id { get; set; }
        public string user { get; set; }
        public DateTime create { get; set; }
        public string oil_type { get; set; }
        public string tank_num { get; set; }
        public double dose { get; set; }
        public long? volume { get; set; }
        public double? dens { get; set; }
        public double? mass { get; set; }
        public double? temp { get; set; }
        public int outcome_type { get; set; }
        public string receiver { get; set; }
        public string operator_started { get; set; }
        public string pump_used { get; set; }
        public DateTime? start_datetime { get; set; }
        public double? start_level { get; set; }
        public double? start_volume { get; set; }
        public double? start_density { get; set; }
        public double? start_mass { get; set; }
        public double? start_temp { get; set; }
        public double? start_water_level { get; set; }
        public long? start_counter { get; set; }
        public DateTime? stop_datetime { get; set; }
        public double? stop_level { get; set; }
        public double? stop_volume { get; set; }
        public double? stop_density { get; set; }
        public double? stop_mass { get; set; }
        public double? stop_temp { get; set; }
        public double? stop_water_level { get; set; }
        public long? stop_counter { get; set; }

        public int? FLAG_R { get; set; }
        public string LOGIN_EXP { get; set; }
        public string N_POST { get; set; }
        public string TRANSP_FAKT { get; set; }
        public string N_TREB { get; set; }
        public string LGORT { get; set; }
        public string WERKS { get; set; }
        public int sended { get; set; }
        public string OZM_TREB { get; set; }
        public string OZM_BAK { get; set; }
        public int? N_POS { get; set; }
    }

    [RoutePrefix("api/oil")]
    public class OilSaleController : ApiController
    {
        protected IRepository<Outcomes> ef_outcomes;

        public OilSaleController(IRepository<Outcomes> outcomes)
        {
            this.ef_outcomes = outcomes;
        }

        // GET: api/oil/oilsale/start/2019-07-24T00:00:00/stop/2019-07-246T23:00:00
        [Route("oilsale/start/{start:datetime}/stop/{stop:datetime}")]
        [ResponseType(typeof(OilSale))]
        public IHttpActionResult GetOilSale(DateTime start, DateTime stop)
        {
            try
            {
                string sql = "select * from get_oilsale(Convert(datetime,'"+ start.ToString("yyyy-MM-dd HH:mm:ss")+ "',120), Convert(datetime,'"+stop.ToString("yyyy-MM-dd HH:mm:ss")+"',120))";
                
                List<OilSale> list = this.ef_outcomes.Database.SqlQuery<OilSale>(sql)
                .OrderBy(c => c.start_datetime)
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
