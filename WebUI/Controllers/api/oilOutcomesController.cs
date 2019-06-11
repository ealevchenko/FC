
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
        [ResponseType(typeof(Outcomes))]
        public IHttpActionResult GetOutcomes(DateTime start, DateTime stop)
        {
            try
            {
                string sql = "SELECT TOP 1000 [Id] ,[DateCreated] ,[OperatorCreated] ,[OilType] ,[TankNo] ,[TargetMass] ,[TargetVolume] ,[CreatedLevel] ,[CreatedVolume] ,[CreatedMass] " +
                    ",[CreatedTemp] ,[CreatedDens] ,[CreatedWater] ,[OutcomeType] ,[Receiver] ,[DateStarted] ,[OperatorStarted] ,[Pump_Used] ,[CounterStart] ,[LevelStart] ,[VolumeStart] " +
                    ",[MassStart] ,[TempStart] ,[DensStart] ,[WaterStart] ,[DateStop] ,[CounterStop] ,[LevelStop] ,[VolumeStop] ,[MassStop] ,[TempStop] ,[DensStop] ,[WaterStop] " +
                    ",[FLAG_R] ,[LOGIN_EXP] ,[N_POST] ,[TRANSP_FAKT] ,[N_TREB] ,[LGORT] ,[WERKS] ,[sended] ,[OZM_TREB] ,[OZM_BAK] ,[N_POS] FROM [dbo].[Outcomes] " +
                    "where [DateStarted] >= convert(datetime,'" + start.ToString("yyyy-MM-dd HH:mm:ss") + "',120) and [DateStarted] <= convert(datetime,'" + stop.ToString("yyyy-MM-dd HH:mm:ss") + "',120) order by [DateStarted]";
                List<Outcomes> list = this.ef_outcomes.Database.SqlQuery<Outcomes>(sql).ToList();

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
