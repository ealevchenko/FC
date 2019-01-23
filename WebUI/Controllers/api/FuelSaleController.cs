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
    public class FuelSaleController : ApiController
    {
        protected IRepository<FuelSale> ef_fs;

        public FuelSaleController(IRepository<FuelSale> fs)
        {
            this.ef_fs = fs;
        }

        // GET: api/fuelsale/2017-06-26T00:00:00/2017-06-27T23:59:59
        [Route("fuelsale/{start:datetime}/{stop:datetime}")]
        [ResponseType(typeof(FuelSale))]
        public IHttpActionResult GetFuelSale(DateTime start, DateTime stop)
        {
            string sql = "SELECT [Id],[AzsNo],[FuelType],[LokomotiveId],[Name],[UsageVolume],[UsageMass],[TankNo],[FuelLevel],[FuelVolume],[Density],[Mass] "+
                        ",[Temperature],[WaterLevel],[TechnicalSale],[OperatorName],[DateStartWork],[TimeStartWork],[DateStart],[TimeStart],[DateStop] "+
                        ",[TimeStop],[CardId],[StartLevel],[StartVolume],[StartDensity],[StartMass],[StartTemperature],[StartWaterLevel],[StopLevel] "+
                        ",[StopVolume],[StopDensity],[StopMass],[StopTemperature],[StopWaterLevel]  FROM [KRR-PA-CNT-Oil].[dbo].[FuelSale] "+
                        "WHERE CONVERT(datetime,CAST([DateStart] AS char(10))+ ' '+CAST(TimeStart AS char(8)),120)>=CONVERT(datetime,'"+start.ToString("yyyy-MM-dd HH:mm:ss")+"',120) and "+
                        "CONVERT(datetime,CAST([DateStart] AS char(10))+ ' '+CAST(TimeStart AS char(8)),120)<=CONVERT(datetime,'" + stop.ToString("yyyy-MM-dd HH:mm:ss") + "',120)";

            List<FuelSale> list = this.ef_fs.Database.SqlQuery<FuelSale>(sql).ToList();

            if (list == null)
            {
                return NotFound();
            }
            return Ok(list);
        }

    }
}
