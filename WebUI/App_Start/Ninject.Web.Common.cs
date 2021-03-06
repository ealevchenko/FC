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
            //***********************************************************************************************
            // ���
            kernel.Bind<EFFC.Abstract.IRepository<EFFC.Entities.Cards>>().To<EFFC.Concrete.EFCards>();
            kernel.Bind<EFFC.Abstract.IRepository<EFFC.Entities.azsCards>>().To<EFFC.Concrete.EFazsCards>();
            kernel.Bind<EFFC.Abstract.IRepository<EFFC.Entities.azsDeparts>>().To<EFFC.Concrete.EFazsDeparts>();
            kernel.Bind<EFFC.Abstract.IRepository<EFFC.Entities.azsTankStates>>().To<EFFC.Concrete.EFazsTankStates>();
            kernel.Bind<EFFC.Abstract.IRepository<EFFC.Entities.azsFuelSale>>().To<EFFC.Concrete.EFazsFuelSale>();
            kernel.Bind<EFFC.Abstract.IRepository<EFFC.Entities.FuelSale>>().To<EFFC.Concrete.EFFuelSale>();
            kernel.Bind<EFFC.Abstract.IRepository<EFFC.Entities.TankStates>>().To<EFFC.Concrete.EFTankStates>();

            kernel.Bind<EFFC.Abstract.IRepository<EFFC.Entities.Daily_Accounting_Report_AZS>>().To<EFFC.Concrete.EFDaily_Accounting_Report_AZS>();
            kernel.Bind<EFFC.Abstract.IRepository<EFFC.Entities.Daily_Accounting_Detali_Report_AZS>>().To<EFFC.Concrete.EFDaily_Accounting_Detali_Report_AZS>();
            kernel.Bind<EFFC.Abstract.IRepository<EFFC.Entities.RemainsTanks_AZS>>().To<EFFC.Concrete.EFRemainsTanks_AZS>();
            kernel.Bind<EFFC.Abstract.IRepository<EFFC.Entities.ReceivingTanks_AZS>>().To<EFFC.Concrete.EFReceivingTanks_AZS>();
            kernel.Bind<EFFC.Abstract.IRepository<EFFC.Entities.DeliveryTanks_AZS>>().To<EFFC.Concrete.EFDeliveryTanks_AZS>();
            kernel.Bind<EFFC.Abstract.IRepository<EFFC.Entities.Cat_TRK_AZS>>().To<EFFC.Concrete.EFCat_TRK_AZS>();
            //***********************************************************************************************
            // ���������

            kernel.Bind<EFOC.Abstract.IRepository<EFOC.Entities.Outcomes>>().To<EFOC.Concrete.EFOutcomes>();
            kernel.Bind<EFOC.Abstract.IRepository<EFOC.Entities.Incomes>>().To<EFOC.Concrete.EFIncomes>();

            kernel.Bind<EFFC.Abstract.IRepository<EFFC.Entities.FuelSale_TSK>>().To<EFFC.Concrete.EFFuelSale_TSK>();
            kernel.Bind<EFFC.Abstract.IRepository<EFFC.Entities.ReceivingFuel_TSK>>().To<EFFC.Concrete.EFReceivingFuel_TSK>();
            kernel.Bind<EFFC.Abstract.IRepository<EFFC.Entities.Remains_TSK>>().To<EFFC.Concrete.EFRemains_TSK>();

            kernel.Bind<EFFC.Abstract.IRepository<EFFC.Entities.Daily_Accounting_Report_TSK>>().To<EFFC.Concrete.EFDaily_Accounting_Report_TSK>();
            kernel.Bind<EFFC.Abstract.IRepository<EFFC.Entities.Daily_Accounting_Detali_Report_TSK>>().To<EFFC.Concrete.EFDaily_Accounting_Detali_Report_TSK>();
            kernel.Bind<EFFC.Abstract.IRepository<EFFC.Entities.RemainsTanks_TSK>>().To<EFFC.Concrete.EFRemainsTanks_TSK>();
            kernel.Bind<EFFC.Abstract.IRepository<EFFC.Entities.ReceivingTanks_TSK>>().To<EFFC.Concrete.EFReceivingTanks_TSK>();
            kernel.Bind<EFFC.Abstract.IRepository<EFFC.Entities.DeliveryTanks_TSK>>().To<EFFC.Concrete.EFDeliveryTanks_TSK>();

            //***********************************************************************************************
            // ����������            
            kernel.Bind<EFFC.Abstract.IRepository<EFFC.Entities.RemainsTanks_OIL>>().To<EFFC.Concrete.EFRemainsTanks_OIL>();
            kernel.Bind<EFFC.Abstract.IRepository<EFFC.Entities.Oil_Transfer>>().To<EFFC.Concrete.EFOil_Transfer>();
            kernel.Bind<EFFC.Abstract.IRepository<EFFC.Entities.Receipts_OIL>>().To<EFFC.Concrete.EFReceipts_OIL>();
            kernel.Bind<EFFC.Abstract.IRepository<EFFC.Entities.OilSale>>().To<EFFC.Concrete.EFOilSale>();
            //***********************************************************************************************
            // ������            
            kernel.Bind<EFFC.Abstract.IRepository<EFFC.Entities.Daily_Report_Benzene>>().To<EFFC.Concrete.EFDaily_Report_Benzene>();
            kernel.Bind<EFFC.Abstract.IRepository<EFFC.Entities.Remains_Benzene>>().To<EFFC.Concrete.EFRemains_Benzene>();
            kernel.Bind<EFFC.Abstract.IRepository<EFFC.Entities.Sales_Benzine>>().To<EFFC.Concrete.EFSales_Benzine>();
        }        
    }
}