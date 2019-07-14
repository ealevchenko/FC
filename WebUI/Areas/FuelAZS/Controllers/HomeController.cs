using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using WebUI.Infrastructure;

namespace WebUI.Areas.FuelAZS.Controllers
{
    public class HomeController : Controller
    {
        // GET: FuelAZS/Home
        public ActionResult Index()
        {
            return View();
        }
        /// <summary>
        /// Состояние склада ГСМ АЗС
        /// </summary>
        /// <returns></returns>
        [ViewAuthorize(Roles = @"EUROPE\KRR-LG-Fuel_site_user", Users = @"HP_EDIK\lev75,EUROPE\ealevchenko")]
        public ActionResult TankStates()
        {
            return View();
        }
        /// <summary>
        /// Заправочная ведомость
        /// </summary>
        /// <returns></returns>
        [ViewAuthorize(Roles = @"EUROPE\KRR-LG-Fuel_site_user", Users = @"HP_EDIK\lev75,EUROPE\ealevchenko")]
        public ActionResult FuelSale()
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