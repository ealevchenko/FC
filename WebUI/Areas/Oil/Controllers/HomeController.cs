using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace WebUI.Areas.Oil.Controllers
{
    public class HomeController : Controller
    {
        // GET: Oil/Home
        public ActionResult Index()
        {
            return View();
        }
        public ActionResult Sales()
        {
            return View();
        }
        public ActionResult Receipt()
        {
            return View();
        }

        public ActionResult RemainsTanks()
        {
            return View();
        }
    }
}