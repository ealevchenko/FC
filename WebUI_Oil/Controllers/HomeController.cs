﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace WebUI_Oil.Controllers
{
    public class HomeController : Controller
    {
        // GET: Oil/Home
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult Receipts()
        {
            return View();
        }
    }
}