using System.Web.Mvc;

namespace WebUI.Areas.FuelGD
{
    public class FuelGDAreaRegistration : AreaRegistration 
    {
        public override string AreaName 
        {
            get 
            {
                return "FuelGD";
            }
        }

        public override void RegisterArea(AreaRegistrationContext context) 
        {
            context.MapRoute(
                "FuelGD_default",
                "FuelGD/{controller}/{action}/{id}",
                new { action = "Index", id = UrlParameter.Optional },
                namespaces: new[] { "WebUI.Areas.FuelGD.Controllers" }
            );
        }
    }
}