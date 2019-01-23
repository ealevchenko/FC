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
    [RoutePrefix("api")]
    public class TankStatesController : ApiController
    {
        protected IRepository<TankStates> ef_ts;

        public TankStatesController(IRepository<TankStates> ts)
        {
            this.ef_ts = ts;
        }

        // GET: api/tankstates/last
        [Route("TankStates/last")]
        [ResponseType(typeof(TankStates))]
        public IHttpActionResult GetLastTankStates()
        {
            try
            {
                string sql = "SELECT max (ts.[Id]) as id "+
	                  ",[AzsNo] = (select [AzsNo] from [KRR-PA-CNT-Oil].[dbo].[TankStates] where [Id] = max (ts.[Id])) "+
	                  ",ts.[TankNo] "+
	                  ",[Date] = (select [Date] from [KRR-PA-CNT-Oil].[dbo].[TankStates] where [Id] = max (ts.[Id])) "+
	                  ",[Time] = (select [Time] from [KRR-PA-CNT-Oil].[dbo].[TankStates] where [Id] = max (ts.[Id])) "+
	                  ",[FuelType] = (select [FuelType] from [KRR-PA-CNT-Oil].[dbo].[TankStates] where [Id] = max (ts.[Id])) "+
	                  ",[FuelLevel] = (select [FuelLevel] from [KRR-PA-CNT-Oil].[dbo].[TankStates] where [Id] = max (ts.[Id])) "+
	                  ",[FuelVolume] = (select [FuelVolume] from [KRR-PA-CNT-Oil].[dbo].[TankStates] where [Id] = max (ts.[Id])) "+
	                  ",[Density] = (select [Density] from [KRR-PA-CNT-Oil].[dbo].[TankStates] where [Id] = max (ts.[Id])) "+
	                  ",[Mass] = (select [Mass] from [KRR-PA-CNT-Oil].[dbo].[TankStates] where [Id] = max (ts.[Id])) "+
	                  ",[Temperature] = (select [Temperature] from [KRR-PA-CNT-Oil].[dbo].[TankStates] where [Id] = max (ts.[Id])) "+
	                  ",[WaterLevel] = (select [WaterLevel] from [KRR-PA-CNT-Oil].[dbo].[TankStates] where [Id] = max (ts.[Id])) "+
	                  ",[OperatorName] = (select [OperatorName] from [KRR-PA-CNT-Oil].[dbo].[TankStates] where [Id] = max (ts.[Id])) "+
	                  ",[DateStartWork] = (select [DateStartWork] from [KRR-PA-CNT-Oil].[dbo].[TankStates] where [Id] = max (ts.[Id])) "+
	                  ",[TimeStartWork] = (select [TimeStartWork] from [KRR-PA-CNT-Oil].[dbo].[TankStates] where [Id] = max (ts.[Id])) "+
                  "FROM [KRR-PA-CNT-Oil].[dbo].[TankStates] as ts  "+
                  "where ts.[TankNo] in (1,2,3,4,8,9) "+
                  "group by ts.[TankNo] " +
                  "order by [TankNo]";

                List<TankStates> last = this.ef_ts.Database.SqlQuery<TankStates>(sql).ToList();
                if (last == null)
                {
                    return NotFound();
                }
                return Ok(last);
            }
            catch (Exception e)
            {
                return InternalServerError(e);
            }
        }

        // GET: api/tankstates/last/tank/9
        [Route("TankStates/last/tank/{num:int}")]
        [ResponseType(typeof(TankStates))]
        public IHttpActionResult GetLastTankStates(int num)
        {
            try
            {
                string sql = "SELECT max (ts.[Id]) as id "+
	                  ",[AzsNo] = (select [AzsNo] from [KRR-PA-CNT-Oil].[dbo].[TankStates] where [Id] = max (ts.[Id])) "+
	                  ",ts.[TankNo] "+
	                  ",[Date] = (select [Date] from [KRR-PA-CNT-Oil].[dbo].[TankStates] where [Id] = max (ts.[Id])) "+
	                  ",[Time] = (select [Time] from [KRR-PA-CNT-Oil].[dbo].[TankStates] where [Id] = max (ts.[Id])) "+
	                  ",[FuelType] = (select [FuelType] from [KRR-PA-CNT-Oil].[dbo].[TankStates] where [Id] = max (ts.[Id])) "+
	                  ",[FuelLevel] = (select [FuelLevel] from [KRR-PA-CNT-Oil].[dbo].[TankStates] where [Id] = max (ts.[Id])) "+
	                  ",[FuelVolume] = (select [FuelVolume] from [KRR-PA-CNT-Oil].[dbo].[TankStates] where [Id] = max (ts.[Id])) "+
	                  ",[Density] = (select [Density] from [KRR-PA-CNT-Oil].[dbo].[TankStates] where [Id] = max (ts.[Id])) "+
	                  ",[Mass] = (select [Mass] from [KRR-PA-CNT-Oil].[dbo].[TankStates] where [Id] = max (ts.[Id])) "+
	                  ",[Temperature] = (select [Temperature] from [KRR-PA-CNT-Oil].[dbo].[TankStates] where [Id] = max (ts.[Id])) "+
	                  ",[WaterLevel] = (select [WaterLevel] from [KRR-PA-CNT-Oil].[dbo].[TankStates] where [Id] = max (ts.[Id])) "+
	                  ",[OperatorName] = (select [OperatorName] from [KRR-PA-CNT-Oil].[dbo].[TankStates] where [Id] = max (ts.[Id])) "+
	                  ",[DateStartWork] = (select [DateStartWork] from [KRR-PA-CNT-Oil].[dbo].[TankStates] where [Id] = max (ts.[Id])) "+
	                  ",[TimeStartWork] = (select [TimeStartWork] from [KRR-PA-CNT-Oil].[dbo].[TankStates] where [Id] = max (ts.[Id])) "+
                  "FROM [KRR-PA-CNT-Oil].[dbo].[TankStates] as ts  "+
                  "where ts.[TankNo] = " + num +
                  "group by ts.[TankNo] " +
                  "order by [TankNo]";

                List<TankStates> last = this.ef_ts.Database.SqlQuery<TankStates>(sql).ToList();
                if (last == null)
                {
                    return NotFound();
                }
                return Ok(last);
            }
            catch (Exception e)
            {
                return InternalServerError(e);
            }
        }
    }
}
