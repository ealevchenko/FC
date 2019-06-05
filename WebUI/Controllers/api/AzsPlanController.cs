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
    public class AzsPlanController : ApiController
    {

        protected IRepository<AzsPlan> ef_plan;

        public AzsPlanController(IRepository<AzsPlan> plan)
        {
            this.ef_plan = plan;
        }

        // GET: api/azs/plan
        [Route("plan")]
        [ResponseType(typeof(AzsPlan))]
        public IHttpActionResult GetAzsPlan()
        {
            try
            {
                List<AzsPlan> list = this.ef_plan.Get().ToList();
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

        // GET: api/azs/plan/901
        [Route("plan/{id:int}")]
        [ResponseType(typeof(AzsPlan))]
        public IHttpActionResult GetAzsPlan(int id)
        {
            try
            {
                AzsPlan plan = this.ef_plan.Get(id);
                if (plan == null)
                {
                    return NotFound();
                }
                return Ok(plan);
            }
            catch (Exception e)
            {
                return NotFound();
            }
        }

        // POST api/azs/plan
        [HttpPost]
        [Route("AzsPlan")]
        public int PostCards([FromBody]AzsPlan value)
        {
            try
            {
                this.ef_plan.Add(value);
                this.ef_plan.Save();
                return value.id;
            }
            catch (Exception e)
            {
                return -1;
            }
        }

        // PUT api/azs/plan/5
        [HttpPut]
        [Route("plan/{id:int}")]
        public int PutAzsPlan(int id, [FromBody]AzsPlan value)
        {
            try
            {
                this.ef_plan.Update(value);
                return this.ef_plan.Save();
            }
            catch (Exception e)
            {
                return -1;
            }
        }

        // PUT api/azs/plan/5
        [HttpDelete]
        [Route("plan/{id:int}")]
        public int DeleteAzsPlan(int id)
        {
            try
            {
                this.ef_plan.Delete(id);
                return this.ef_plan.Save();
            }
            catch (Exception e)
            {
                return -1;
            }
        }

    }
}
