using System.Web.Mvc;

namespace WebUI.Areas.FuelAZS
{
    public class FuelAZSAreaRegistration : AreaRegistration 
    {
        public override string AreaName 
        {
            get 
            {
                return "FuelAZS";
            }
        }

        public override void RegisterArea(AreaRegistrationContext context) 
        {
            context.MapRoute(
                "FuelAZS_default",
                "FuelAZS/{controller}/{action}/{id}",
                new { action = "Index", id = UrlParameter.Optional },
                namespaces: new[] { "WebUI.Areas.FuelAZS.Controllers" }
            );
        }
    }
}