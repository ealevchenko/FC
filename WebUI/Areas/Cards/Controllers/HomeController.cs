using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using WebUI.Infrastructure;

namespace WebUI.Areas.Cards.Controllers
{
    public class HomeController : Controller
    {
        // GET: Cards/Home
        public ActionResult Index()
        {
            return View();
        }
        /// <summary>
        /// RFID Карты
        /// </summary>
        /// <returns></returns>
        [ViewAuthorize(Roles = @"EUROPE\KRR-LG-Fuel_CardRFID_user,EUROPE\KRR-LG-Fuel_CardRFID_admin", Users = @"EUROPE\iishkurka")]
        public ActionResult Cards()
        {
            return View();
        }
        /// <summary>
        /// 
        /// </summary>
        /// <returns></returns>
        [ViewAuthorize(Roles = @"EUROPE\KRR-LG-Fuel_CardRFID_admin")]
        public ActionResult CardsAdmin()
        {
            return View();
        }
    }
}