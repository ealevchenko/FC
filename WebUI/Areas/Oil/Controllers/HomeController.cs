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
        public ActionResult FuelSale()
        {
            return View();
        }
        public ActionResult Receipts()
        {
            return View();
        }

        public ActionResult RemainsTanks()
        {
            return View();
        }
        public ActionResult Transfer()
        {
            return View();
        }

    }
}