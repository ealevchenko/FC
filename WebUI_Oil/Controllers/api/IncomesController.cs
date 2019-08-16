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
    [RoutePrefix("api/oil")]
    public class IncomesController : ApiController
    {
        protected IRepository<Incomes> ef_incomes;

        public IncomesController(IRepository<Incomes> incomes)
        {
            this.ef_incomes = incomes;
        }

        // GET: api/oil/incomes/start/2019-01-01T00:00:00/stop/2019-08-016T00:00:00
        [Route("incomes/start/{start:datetime}/stop/{stop:datetime}")]
        [ResponseType(typeof(Incomes))]
        public IHttpActionResult GetIncomes(DateTime start, DateTime stop)
        {
            try
            {
                List<Incomes> list = this.ef_incomes.Get()
                .Where(i=>i.DateStarted >= start & i.DateStarted<=stop)
                .OrderBy(c=>c.DateStarted)
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
