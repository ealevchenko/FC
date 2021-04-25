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
    //public class Remains_Benzene_all
    //{

    //    public int tank { get; set; }

    //    public DateTime? start_dt { get; set; }

    //    public DateTime? stop_dt { get; set; }

    //    public double? start_volume { get; set; }

    //    public double? start_volume15 { get; set; }

    //    public double? start_mass { get; set; }

    //    public double? start_dens { get; set; }

    //    public double? start_dens15 { get; set; }

    //    public double? stop_volume { get; set; }

    //    public double? stop_volume15 { get; set; }

    //    public double? stop_mass { get; set; }

    //    public double? stop_dens { get; set; }

    //    public double? stop_dens15 { get; set; }

    //    public double? dispensing_volume { get; set; }

    //    public double? dispensing_volume15 { get; set; }

    //    public double? dispensing_mass { get; set; }

    //    public double? dispensing_dens { get; set; }

    //    public double? dispensing_dens15 { get; set; }

    //    public double? deliverys_volume { get; set; }

    //    public double? deliverys_volume15 { get; set; }

    //    public double? deliverys_mass { get; set; }

    //    public double? deliverys_dens { get; set; }

    //    public double? deliverys_dens15 { get; set; }
    //}

    [RoutePrefix("api/dar_benzene")]
    public class DCRemains_BenzeneController : ApiController
    {

        protected IRepository<Remains_Benzene> ef_drb;

        public DCRemains_BenzeneController(IRepository<Remains_Benzene> drb)
        {
            this.ef_drb = drb;
        }

        // GET: api/dar_benzene/remains_benzene/period/start/2021-04-01T00:00:00/stop/2021-04-31T23:59:59
        [Route("remains_benzene/period/start/{start:datetime}/stop/{stop:datetime}")]
        [ResponseType(typeof(Remains_Benzene))]
        public IHttpActionResult GetRemainsBenzenePeriod(DateTime start, DateTime stop)
        {
            try
            {
                //this.ef_contex.Database.CommandTimeout = 300;

                EFRemains_Benzene ef_daily = new EFRemains_Benzene();

                List<Remains_Benzene> list = ef_daily.Context.Where(d => d.dt >= start && d.dt <= stop).ToList();
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
