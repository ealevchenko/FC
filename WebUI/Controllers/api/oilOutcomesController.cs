
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
    }
}
