[assembly: WebActivatorEx.PreApplicationStartMethod(typeof(WebUI.App_Start.NinjectWebCommon), "Start")]
[assembly: WebActivatorEx.ApplicationShutdownMethodAttribute(typeof(WebUI.App_Start.NinjectWebCommon), "Stop")]

namespace WebUI.App_Start
{
    using System;
    using System.Web;

    using Microsoft.Web.Infrastructure.DynamicModuleHelper;

    using Ninject;
    using Ninject.Web.Common;
    using Ninject.Web.Common.WebHost;
    using Ninject.Web.WebApi;
    using System.Web.Http;
    //using EFFC.Abstract;
    //using EFFC.Entities;
    //using EFFC.Concrete;
    //using EFOC.Entities;

    public static class NinjectWebCommon 
    {
        private static readonly Bootstrapper bootstrapper = new Bootstrapper();

        /// <summary>
        /// Starts the application
        /// </summary>
        public static void Start() 
        {
            DynamicModuleUtility.RegisterModule(typeof(OnePerRequestHttpModule));
            DynamicModuleUtility.RegisterModule(typeof(NinjectHttpModule));
            bootstrapper.Initialize(CreateKernel);
        }
        
        /// <summary>
        /// Stops the application.
        /// </summary>
        public static void Stop()
        {
            bootstrapper.ShutDown();
        }
        
        /// <summary>
        /// Creates the kernel that will manage your application.
        /// </summary>
        /// <returns>The created kernel.</returns>
        private static IKernel CreateKernel()
        {
            var kernel = new StandardKernel();
            try
            {
                kernel.Bind<Func<IKernel>>().ToMethod(ctx => () => new Bootstrapper().Kernel);
                kernel.Bind<IHttpModule>().To<HttpApplicationInitializationHttpModule>();
                RegisterServices(kernel);
                GlobalConfiguration.Configuration.DependencyResolver = new NinjectDependencyResolver(kernel);
                return kernel;

            }
            catch
            {
                kernel.Dispose();
                throw;
            }
        }

        /// <summary>
        /// Load your modules or register your services here!
        /// </summary>
        /// <param name="kernel">The kernel.</param>
        private static void RegisterServices(IKernel kernel)
        {
            kernel.Bind<EFFC.Abstract.IRepository<EFFC.Entities.Cards>>().To<EFFC.Concrete.EFCards>();
            kernel.Bind<EFFC.Abstract.IRepository<EFFC.Entities.azsCards>>().To<EFFC.Concrete.EFazsCards>();
            kernel.Bind<EFFC.Abstract.IRepository<EFFC.Entities.azsDeparts>>().To<EFFC.Concrete.EFazsDeparts>();
            kernel.Bind<EFFC.Abstract.IRepository<EFFC.Entities.azsTankStates>>().To<EFFC.Concrete.EFazsTankStates>();
            kernel.Bind<EFFC.Abstract.IRepository<EFFC.Entities.azsFuelSale>>().To<EFFC.Concrete.EFazsFuelSale>();
            kernel.Bind<EFFC.Abstract.IRepository<EFFC.Entities.FuelSale>>().To<EFFC.Concrete.EFFuelSale>();
            kernel.Bind<EFFC.Abstract.IRepository<EFFC.Entities.TankStates>>().To<EFFC.Concrete.EFTankStates>();

            kernel.Bind<EFOC.Abstract.IRepository<EFOC.Entities.Outcomes>>().To<EFOC.Concrete.EFOutcomes>();
            kernel.Bind<EFOC.Abstract.IRepository<EFOC.Entities.Incomes>>().To<EFOC.Concrete.EFIncomes>();

            kernel.Bind<EFFCK.Abstract.IRepository<EFFCK.Entities.FuelSaleRW>>().To<EFFCK.Concrete.EFFuelSaleRW>();
            kernel.Bind<EFFCK.Abstract.IRepository<EFFCK.Entities.ReceivingFuelRW>>().To<EFFCK.Concrete.EFReceivingFuelRW>();
            kernel.Bind<EFFCK.Abstract.IRepository<EFFCK.Entities.RemainsTanksRW>>().To<EFFCK.Concrete.EFRemainsTanksRW>();
            kernel.Bind<EFFCK.Abstract.IRepository<EFFCK.Entities.Daily_ReportRW>>().To<EFFCK.Concrete.EFDaily_ReportRW>();

            kernel.Bind<EFFC.Abstract.IRepository<EFFC.Entities.FuelSale_KGD>>().To<EFFC.Concrete.EFFuelSale_KGD>();
            kernel.Bind<EFFC.Abstract.IRepository<EFFC.Entities.ReceivingFuel_KGD>>().To<EFFC.Concrete.EFReceivingFuel_KGD>();
            kernel.Bind<EFFC.Abstract.IRepository<EFFC.Entities.RemainsTanks_KGD>>().To<EFFC.Concrete.EFRemainsTanks_KGD>();
            kernel.Bind<EFFC.Abstract.IRepository<EFFC.Entities.Daily_Report_KGD>>().To<EFFC.Concrete.EFDaily_Report_KGD>();

        }        
    }
}