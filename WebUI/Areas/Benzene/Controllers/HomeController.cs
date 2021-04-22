using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace WebUI.Areas.Benzene.Controllers
{
    public class HomeController : Controller
    {
        // GET: Benzene/Home
        public ActionResult Index()
        {
            return View();
        }

        //[ViewAuthorize(Roles = @"EUROPE\KRR-LG-Fuel_site_user", Users = @"HP_EDIK\edik,EUROPE\ealevchenko,EUROPE\iishkurka")]
        public ActionResult DailyReport()
        {
            return View();
        }
    }
}