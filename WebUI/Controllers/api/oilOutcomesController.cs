
using EFOC.Abstract;
using EFOC.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;

namespace WebUI.Controllers.api
{
    public class Outcomes_report : Outcomes  {
        public string Invent { get; set; }
    }


    [RoutePrefix("api/oil")]
    public class oilOutcomesController : ApiController
    {
        protected IRepository<Outcomes> ef_outcomes;

        public oilOutcomesController(IRepository<Outcomes> outcomes)
        {
            this.ef_outcomes = outcomes;
        }

        // GET: api/oil/outcomes/all
        [Route("outcomes/all")]
        [ResponseType(typeof(Outcomes))]
        public IHttpActionResult GetOutcomes()
        {
            try
            {
                List<Outcomes> list = this.ef_outcomes.Get().ToList();
                if (list == null || list.Count() == 0)
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

        // GET: api/oil/outcomes/start/2019-06-04T07:00:00/stop/2019-06-04T18:59:59
        [Route("outcomes/start/{start:datetime}/stop/{stop:datetime}")]
        [ResponseType(typeof(Outcomes_report))]
        public IHttpActionResult GetOutcomes(DateTime start, DateTime stop)
        {
            try
            {
                string sql = "SELECT o.[Id] ,o.[DateCreated] ,o.[OperatorCreated] ,o.[OilType] ,o.[TankNo] ,o.[TargetMass] ,o.[TargetVolume] ,o.[CreatedLevel] ,o.[CreatedVolume] ,o.[CreatedMass] " +
                    ",o.[CreatedTemp] ,o.[CreatedDens] ,o.[CreatedWater] ,o.[OutcomeType] ,o.[Receiver] ,o.[DateStarted] ,o.[OperatorStarted] ,o.[Pump_Used] ,o.[CounterStart] ,o.[LevelStart] ,o.[VolumeStart] " +
                    ",o.[MassStart] ,o.[TempStart] ,o.[DensStart] ,o.[WaterStart] ,o.[DateStop] ,o.[CounterStop] ,o.[LevelStop] ,o.[VolumeStop] ,o.[MassStop] ,o.[TempStop] ,o.[DensStop] ,o.[WaterStop] " +
                    ",o.[FLAG_R] ,o.[LOGIN_EXP] ,o.[N_POST] ,o.[TRANSP_FAKT] ,o.[N_TREB] ,o.[LGORT] ,o.[WERKS] ,o.[sended] ,o.[OZM_TREB] ,o.[OZM_BAK] ,o.[N_POS], t.Invent FROM dbo.Outcomes as o INNER JOIN dbo.Oil_Types as t ON o.OilType = t.name " +
                    "where o.[DateStarted] >= convert(datetime,'" + start.ToString("yyyy-MM-dd HH:mm:ss") + "',120) and o.[DateStarted] <= convert(datetime,'" + stop.ToString("yyyy-MM-dd HH:mm:ss") + "',120) order by o.[DateStarted]";
                List<Outcomes_report> list = this.ef_outcomes.Database.SqlQuery<Outcomes_report>(sql).ToList();

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
