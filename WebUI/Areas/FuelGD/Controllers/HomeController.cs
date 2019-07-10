using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using WebUI.Infrastructure;

namespace WebUI.Areas.FuelGD.Controllers
{
    public class HomeController : Controller
    {
        // GET: FuelGD/Home
        public ActionResult Index()
        {
            return View();
        }
        [ViewAuthorize(Roles = @"EUROPE\KRR-LG-Fuel_site_user", Users = @"HP_EDIK\lev75,EUROPE\ealevchenko")]
        public ActionResult TankStates()
        {
            return View();
        }
        /// <summary>
        /// Заправочная ведомость жд трансп.
        /// </summary>
        /// <returns></returns>
        [ViewAuthorize(Roles = @"EUROPE\KRR-LG-Fuel_site_user", Users = @"HP_EDIK\lev75,EUROPE\ealevchenko")]
        public ActionResult FuelSale()
        {
            return View();
        }

        [ViewAuthorize(Roles = @"EUROPE\KRR-LG-Fuel_site_user", Users = @"HP_EDIK\lev75,EUROPE\ealevchenko")]
        public ActionResult ReceivingFuel()
        {
            return View();
        }

        [ViewAuthorize(Roles = @"EUROPE\KRR-LG-Fuel_site_user", Users = @"HP_EDIK\lev75,EUROPE\ealevchenko")]
        public ActionResult RemainsTanks()
        {
            return View();
        }

        [ViewAuthorize(Roles = @"EUROPE\KRR-LG-Fuel_site_user", Users = @"HP_EDIK\lev75,EUROPE\ealevchenko")]
        public ActionResult DailyReport()
        {
            return View();
        }

    }
}