using System.Web.Mvc;

namespace WebUI.Areas.Oil
{
    public class OilAreaRegistration : AreaRegistration 
    {
        public override string AreaName 
        {
            get 
            {
                return "Oil";
            }
        }

        public override void RegisterArea(AreaRegistrationContext context) 
        {
            context.MapRoute(
                "Oil_default",
                "Oil/{controller}/{action}/{id}",
                new { action = "Index", id = UrlParameter.Optional },
                namespaces: new[] { "WebUI.Areas.Oil.Controllers" }
            );
        }
    }
}