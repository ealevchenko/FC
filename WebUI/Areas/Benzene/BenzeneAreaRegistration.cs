using System.Web.Mvc;

namespace WebUI.Areas.Benzene
{
    public class BenzeneAreaRegistration : AreaRegistration 
    {
        public override string AreaName 
        {
            get 
            {
                return "Benzene";
            }
        }

        public override void RegisterArea(AreaRegistrationContext context) 
        {
            context.MapRoute(
                "Benzene_default",
                "Benzene/{controller}/{action}/{id}",
                new { action = "Index", id = UrlParameter.Optional },
                namespaces: new[] { "WebUI.Areas.Benzene.Controllers" }
            );
        }
    }
}