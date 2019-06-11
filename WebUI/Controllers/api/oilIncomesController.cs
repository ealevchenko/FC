
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
    public class Incomes_report : Incomes
    {
        public string Invent { get; set; }
    }


    [RoutePrefix("api/oil")]
    public class oilIncomesController : ApiController
    {
        protected IRepository<Incomes> ef_incomes;

        public oilIncomesController(IRepository<Incomes> incomes)
        {
            this.ef_incomes = incomes;
        }

        // GET: api/oil/incomes/all
        [Route("incomes/all")]
        [ResponseType(typeof(Incomes))]
        public IHttpActionResult GetIncomes()
        {
            try
            {
                List<Incomes> list = this.ef_incomes.Get().ToList();
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

        // GET: api/oil/incomes/start/2019-06-04T07:00:00/stop/2019-06-04T18:59:59
        [Route("incomes/start/{start:datetime}/stop/{stop:datetime}")]
        [ResponseType(typeof(Incomes_report))]
        public IHttpActionResult GetIncomes(DateTime start, DateTime stop)
        {
            try
            {
                string sql = "SELECT i.[Id] , i.[DateCreated] ,i.[OperatorCreated] ,i.[OilType] ,i.[TankNo] ,i.[CreatedLevel] ,i.[CreatedVolume] ,i.[CreatedMass] " +
                ",i.[CreatedTemp] ,i.[CreatedDens] ,i.[CreatedWater] ,i.[OrderId] ,i.[DateStarted] ,i.[OperatorStarted] ,i.[LevelStart] ,i.[VolumeStart] ,i.[MassStart] " +
                ",i.[TempStart] ,i.[DensStart]  ,i.[WaterStart] ,i.[DateStop] ,i.[LevelStop] ,i.[VolumeStop] ,i.[MassStop] ,i.[TempStop] ,i.[DensStop] ,i.[WaterStop], t.Invent " +
                "FROM dbo.Incomes as i INNER JOIN dbo.Oil_Types as t ON i.OilType = t.name " +
                "where i.[DateStarted] >= convert(datetime,'" + start.ToString("yyyy-MM-dd HH:mm:ss") + "',120) and i.[DateStarted] <= convert(datetime,'" + stop.ToString("yyyy-MM-dd HH:mm:ss") + "',120) order by i.[DateStarted]";
                List<Incomes_report> list = this.ef_incomes.Database.SqlQuery<Incomes_report>(sql).ToList();
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
