using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using WebUI.Infrastructure;

namespace WebUI.Areas.Benzene.Controllers
{
    public class HomeController : Controller
    {
        // GET: Benzene/Home
        public ActionResult Index()
        {
            return View();
        }

        /// <summary>
        /// Заправочная ведомость жд трансп.
        /// </summary>
        /// <returns></returns>
        //[ViewAuthorize(Roles = @"EUROPE\KRR-LG-Fuel_site_user", Users = @"HP_EDIK\lev75,EUROPE\ealevchenko,EUROPE\iishkurka")]
        public ActionResult FuelSale()
        {
            return View();
        }

        //[ViewAuthorize(Roles = @"EUROPE\KRR-LG-Fuel_site_user", Users = @"HP_EDIK\edik,EUROPE\ealevchenko,EUROPE\iishkurka")]
        public ActionResult DailyReport()
        {
            return View();
        }

        public ActionResult InformationDayReport()
        {
            return View();
        }

        public ActionResult RemainsTanks()
        {
            return View();
        }
    }
}