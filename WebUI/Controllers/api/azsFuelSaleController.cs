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
    public class azsFuelSaleController : ApiController
    {
        protected IRepository<azsFuelSale> ef_fs;

        public azsFuelSaleController(IRepository<azsFuelSale> fs)
        {
            this.ef_fs = fs;
        }

        // GET: api/azs/fuelsale/2018-11-26T19:00:00.000Z/2018-11-27T06:59:59.000Z
        // GET: api/azs/fuelsale/2018-11-26T19:00:00/2018-11-27T06:59:59
        [Route("fuelsale/{start:datetime}/{stop:datetime}")]
        [ResponseType(typeof(azsFuelSale))]
        public IHttpActionResult GetFuelSale(DateTime start, DateTime stop)
        {
            string sql = "SELECT [Id],[AzsNo],[FuelType],[LokomotiveId],[Name],[UsageVolume],[UsageMass],[TankNo],[FuelLevel],[FuelVolume],[Density],[Mass] "+
                        ",[Temperature],[WaterLevel],[TechnicalSale],[OperatorName],[DateStartWork],[TimeStartWork],[DateStart],[TimeStart],[DateStop] "+
                        ",[TimeStop],[CardId],[StartLevel],[StartVolume],[StartDensity],[StartMass],[StartTemperature],[StartWaterLevel],[StopLevel] "+
                        ",[StopVolume],[StopDensity],[StopMass],[StopTemperature],[StopWaterLevel],[UsageDensity]  FROM [KRR-PA-CNT-Oil].[dbo].[azsFuelSale] " +
                        "WHERE CONVERT(datetime,CAST([DateStart] AS char(10))+ ' '+CAST(TimeStart AS char(8)),120)>=CONVERT(datetime,'"+start.ToString("yyyy-MM-dd HH:mm:ss")+"',120) and "+
                        "CONVERT(datetime,CAST([DateStart] AS char(10))+ ' '+CAST(TimeStart AS char(8)),120)<=CONVERT(datetime,'" + stop.ToString("yyyy-MM-dd HH:mm:ss") + "',120)";

            List<azsFuelSale> list = this.ef_fs.Database.SqlQuery<azsFuelSale>(sql).ToList();
            
            //List<azsFuelSale> list = this.ef_fs.Get().Where(f => f.DateStart >= start && f.DateStart <= stop).OrderBy(f => f.DateStart).ToList();
            if (list == null)
            {
                return NotFound();
            }
            return Ok(list);
        }

    }
}
