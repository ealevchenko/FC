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
    [RoutePrefix("api/azs")]
    public class azsTankStatesController : ApiController
    {
        protected IRepository<azsTankStates> ef_ts;

        public azsTankStatesController(IRepository<azsTankStates> ts)
        {
            this.ef_ts = ts;
        }

        // GET: api/azs/tankstates/last
        [Route("TankStates/last")]
        [ResponseType(typeof(azsTankStates))]
        public IHttpActionResult GetLastTankStates()
        {
            try
            {
                string sql = "SELECT max (ts.[Id]) as id "+
	                  ",[AzsNo] = (select [AzsNo] from [KRR-PA-CNT-Oil].[dbo].[azsTankStates] where [Id] = max (ts.[Id])) "+
	                  ",ts.[TankNo] "+
	                  ",[Date] = (select [Date] from [KRR-PA-CNT-Oil].[dbo].[azsTankStates] where [Id] = max (ts.[Id])) "+
	                  ",[Time] = (select [Time] from [KRR-PA-CNT-Oil].[dbo].[azsTankStates] where [Id] = max (ts.[Id])) "+
	                  ",[FuelType] = (select [FuelType] from [KRR-PA-CNT-Oil].[dbo].[azsTankStates] where [Id] = max (ts.[Id])) "+
	                  ",[FuelLevel] = (select [FuelLevel] from [KRR-PA-CNT-Oil].[dbo].[azsTankStates] where [Id] = max (ts.[Id])) "+
	                  ",[FuelVolume] = (select [FuelVolume] from [KRR-PA-CNT-Oil].[dbo].[azsTankStates] where [Id] = max (ts.[Id])) "+
	                  ",[Density] = (select [Density] from [KRR-PA-CNT-Oil].[dbo].[azsTankStates] where [Id] = max (ts.[Id])) "+
	                  ",[Mass] = (select [Mass] from [KRR-PA-CNT-Oil].[dbo].[azsTankStates] where [Id] = max (ts.[Id])) "+
	                  ",[Temperature] = (select [Temperature] from [KRR-PA-CNT-Oil].[dbo].[azsTankStates] where [Id] = max (ts.[Id])) "+
	                  ",[WaterLevel] = (select [WaterLevel] from [KRR-PA-CNT-Oil].[dbo].[azsTankStates] where [Id] = max (ts.[Id])) "+
	                  ",[OperatorName] = (select [OperatorName] from [KRR-PA-CNT-Oil].[dbo].[azsTankStates] where [Id] = max (ts.[Id])) "+
	                  ",[DateStartWork] = (select [DateStartWork] from [KRR-PA-CNT-Oil].[dbo].[azsTankStates] where [Id] = max (ts.[Id])) "+
	                  ",[TimeStartWork] = (select [TimeStartWork] from [KRR-PA-CNT-Oil].[dbo].[azsTankStates] where [Id] = max (ts.[Id])) "+
                  "FROM [KRR-PA-CNT-Oil].[dbo].[azsTankStates] as ts  "+
                  "where ts.[TankNo] in (1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,38,39,102,103,109,111,116,117,118,119,120) "+
                  "group by ts.[TankNo] " +
                  "order by [TankNo]";

                List<azsTankStates> last = this.ef_ts.Database.SqlQuery<azsTankStates>(sql).ToList();
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
