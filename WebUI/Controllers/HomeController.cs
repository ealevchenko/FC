using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using WebUI.Infrastructure;

namespace WebUI.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        /// <summary>
        /// RFID Карты
        /// </summary>
        /// <returns></returns>
        [ViewAuthorize(Roles = @"EUROPE\KRR-LG-Fuel_CardRFID_user,EUROPE\KRR-LG-Fuel_CardRFID_admin")]
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
        /// <summary>
        /// Состояние склада ГСМ АЗС
        /// </summary>
        /// <returns></returns>
        //[ViewAuthorize(Roles = @"EUROPE\KRR-LG-Fuel_site_user")]
        public ActionResult TankStates()
        {
            return View();
        }
        /// <summary>
        /// Заправочная ведомость
        /// </summary>
        /// <returns></returns>
        [ViewAuthorize(Roles = @"EUROPE\KRR-LG-Fuel_site_user")]
        public ActionResult FuelSale()
        {
            return View();
        }
        [ViewAuthorize(Roles = @"EUROPE\KRR-LG-Fuel_site_user")]
        public ActionResult RWTankStates()
        {
            return View();
        }
        /// <summary>
        /// Заправочная ведомость жд трансп.
        /// </summary>
        /// <returns></returns>
        [ViewAuthorize(Roles = @"EUROPE\KRR-LG-Fuel_site_user")]
        public ActionResult RWFuelSale()
        {
            return View();
        }


        public ActionResult ChangeCulture(string lang)
        {
            string returnUrl = Request.UrlReferrer.AbsolutePath;

            List<string> cultures = new List<string>() { "ru", "en" };
            if (!cultures.Contains(lang))
            {
                lang = "ru";
            }
            // Сохраняем выбранную культуру в куки
            HttpCookie cookie = Request.Cookies["lang"];
            if (cookie != null)
                cookie.Value = lang;   // если куки уже установлено, то обновляем значение
            else
            {
                cookie = new HttpCookie("lang");
                cookie.HttpOnly = false;
                cookie.Value = lang;
                cookie.Expires = DateTime.Now.AddYears(1);
            }
            Response.Cookies.Add(cookie);
            return Redirect(returnUrl);
        }
    }
}
