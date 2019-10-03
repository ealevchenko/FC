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
    public class OutcomesController : ApiController
    {
        protected IRepository<Outcomes> ef_outcomes;

        public OutcomesController(IRepository<Outcomes> outcomes)
        {
            this.ef_outcomes = outcomes;
        }

        // GET: api/oil/outcomes/start/2019-01-01T00:00:00/stop/2019-08-016T00:00:00
        [Route("outcomes/start/{start:datetime}/stop/{stop:datetime}")]
        [ResponseType(typeof(Outcomes))]
        public IHttpActionResult GetOutcomes(DateTime start, DateTime stop)
        {
            try
            {
                List<Outcomes> list = this.ef_outcomes.Get()
                .Where(i => i.DateStarted >= start & i.DateStarted <= stop)
                .OrderBy(c => c.DateStarted)
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
