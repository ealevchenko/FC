//using EFFC.Entities;
//using EFFC.Concrete;
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
    public class CardsController : ApiController
    {

        protected IRepository<Cards> ef_cards;

        public CardsController(IRepository<Cards> cards)
        {
            this.ef_cards = cards;  
        }

        // GET: api/cards
        [Route("cards")]
        [ResponseType(typeof(Cards))]
        public IHttpActionResult GetCards()
        {
            try
            {
                List<Cards> list = this.ef_cards.Get().ToList();
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
