namespace EFFC.Concrete
{
    using System;
    using System.Data.Entity;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Linq;
    using EFFC.Entities;

    public partial class EFDbContext : DbContext
    {
        public EFDbContext()
            : base("name=oil")
        {
        }
        public virtual DbSet<Azs> Azs { get; set; }
        public virtual DbSet<azsCards> azsCards { get; set; }
        public virtual DbSet<azsDelta> azsDelta { get; set; }
        public virtual DbSet<azsDeparts> azsDeparts { get; set; }
        public virtual DbSet<azsFuelIncome> azsFuelIncome { get; set; }
        public virtual DbSet<azsFuelSale> azsFuelSale { get; set; }
        public virtual DbSet<azsFuelSale_bak_20170612> azsFuelSale_bak_20170612 { get; set; }
        public virtual DbSet<AzsPlan> AzsPlan { get; set; }
        public virtual DbSet<azsTankStates> azsTankStates { get; set; }
        public virtual DbSet<azsUsers> azsUsers { get; set; }
        public virtual DbSet<Cards> Cards { get; set; }
        public virtual DbSet<Delta> Delta { get; set; }
        public virtual DbSet<FuelIncome> FuelIncome { get; set; }
        public virtual DbSet<FuelSale> FuelSale { get; set; }
        public virtual DbSet<Lokomotives> Lokomotives { get; set; }
        public virtual DbSet<TankerStorage> TankerStorage { get; set; }
        public virtual DbSet<TankStates> TankStates { get; set; }
        public virtual DbSet<TrainTankerOrder> TrainTankerOrder { get; set; }

        public virtual DbSet<Daily_Report_KGD> Daily_Report_KGD { get; set; }
        public virtual DbSet<FuelSale_KGD> FuelSale_KGD { get; set; }
        public virtual DbSet<ReceivingFuel_KGD> ReceivingFuel_KGD { get; set; }
        public virtual DbSet<RemainsTanks_KGD> RemainsTanks_KGD { get; set; }

        public virtual DbSet<Daily_Report_AZS> Daily_Report_AZS { get; set; }

        public virtual DbSet<RemainsTanks_OIL> RemainsTanks_OIL { get; set; }
        public virtual DbSet<Oil_Transfer> Oil_Transfer { get; set; }

        public virtual DbSet<FuelSale_OIL> FuelSale_OIL { get; set; }
        public virtual DbSet<Receipts_OIL> Receipts_OIL { get; set; }


        public virtual DbSet<Daily_Accounting_Report_AZS> Daily_Accounting_Report_AZS { get; set; }
        public virtual DbSet<Daily_Accounting_Detali_Report_AZS> Daily_Accounting_Detali_Report_AZS { get; set; }
        public virtual DbSet<DeliveryTanks_AZS> DeliveryTanks_AZS { get; set; }
        public virtual DbSet<ReceivingTanks_AZS> ReceivingTanks_AZS { get; set; }
        public virtual DbSet<RemainsTanks_AZS> RemainsTanks_AZS { get; set; }


        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {

            modelBuilder.Entity<DeliveryTanks_AZS>()
                .Property(e => e.passage)
                .IsFixedLength()
                .IsUnicode(false);

            modelBuilder.Entity<azsDelta>()
                .Property(e => e.UsageVolume)
                .HasPrecision(9, 1);

            modelBuilder.Entity<azsDelta>()
                .Property(e => e.UsageMass)
                .HasPrecision(9, 1);

            modelBuilder.Entity<azsDelta>()
                .Property(e => e.FuelLevel)
                .HasPrecision(6, 1);

            modelBuilder.Entity<azsDelta>()
                .Property(e => e.FuelVolume)
                .HasPrecision(9, 1);

            modelBuilder.Entity<azsDelta>()
                .Property(e => e.Density)
                .HasPrecision(4, 1);

            modelBuilder.Entity<azsDelta>()
                .Property(e => e.Mass)
                .HasPrecision(9, 1);

            modelBuilder.Entity<azsDelta>()
                .Property(e => e.Temperature)
                .HasPrecision(3, 1);

            modelBuilder.Entity<azsDelta>()
                .Property(e => e.WaterLevel)
                .HasPrecision(6, 1);

            modelBuilder.Entity<azsDelta>()
                .Property(e => e.TechnicalSale)
                .IsFixedLength()
                .IsUnicode(false);

            modelBuilder.Entity<azsDeparts>()
                .Property(e => e.id)
                .IsUnicode(false);

            modelBuilder.Entity<azsFuelIncome>()
                .Property(e => e.StartLevel)
                .HasPrecision(6, 1);

            modelBuilder.Entity<azsFuelIncome>()
                .Property(e => e.StartVolume)
                .HasPrecision(9, 1);

            modelBuilder.Entity<azsFuelIncome>()
                .Property(e => e.StartTemperature)
                .HasPrecision(3, 1);

            modelBuilder.Entity<azsFuelIncome>()
                .Property(e => e.StartDensity)
                .HasPrecision(4, 1);

            modelBuilder.Entity<azsFuelIncome>()
                .Property(e => e.StartMass)
                .HasPrecision(9, 1);

            modelBuilder.Entity<azsFuelIncome>()
                .Property(e => e.StartWaterLevel)
                .HasPrecision(6, 1);

            modelBuilder.Entity<azsFuelIncome>()
                .Property(e => e.StartWaterVolume)
                .HasPrecision(9, 1);

            modelBuilder.Entity<azsFuelIncome>()
                .Property(e => e.StopLevel)
                .HasPrecision(6, 1);

            modelBuilder.Entity<azsFuelIncome>()
                .Property(e => e.StopVolume)
                .HasPrecision(9, 1);

            modelBuilder.Entity<azsFuelIncome>()
                .Property(e => e.StopTemperature)
                .HasPrecision(3, 1);

            modelBuilder.Entity<azsFuelIncome>()
                .Property(e => e.StopDensity)
                .HasPrecision(4, 1);

            modelBuilder.Entity<azsFuelIncome>()
                .Property(e => e.StopMass)
                .HasPrecision(9, 1);

            modelBuilder.Entity<azsFuelIncome>()
                .Property(e => e.StopWaterLevel)
                .HasPrecision(6, 1);

            modelBuilder.Entity<azsFuelIncome>()
                .Property(e => e.StopWaterVolume)
                .HasPrecision(9, 1);

            modelBuilder.Entity<azsFuelSale>()
                .Property(e => e.UsageVolume)
                .HasPrecision(9, 3);

            modelBuilder.Entity<azsFuelSale>()
                .Property(e => e.UsageMass)
                .HasPrecision(9, 3);

            modelBuilder.Entity<azsFuelSale>()
                .Property(e => e.FuelLevel)
                .HasPrecision(6, 1);

            modelBuilder.Entity<azsFuelSale>()
                .Property(e => e.FuelVolume)
                .HasPrecision(9, 1);

            modelBuilder.Entity<azsFuelSale>()
                .Property(e => e.Density)
                .HasPrecision(4, 1);

            modelBuilder.Entity<azsFuelSale>()
                .Property(e => e.Mass)
                .HasPrecision(9, 1);

            modelBuilder.Entity<azsFuelSale>()
                .Property(e => e.Temperature)
                .HasPrecision(3, 1);

            modelBuilder.Entity<azsFuelSale>()
                .Property(e => e.WaterLevel)
                .HasPrecision(6, 1);

            modelBuilder.Entity<azsFuelSale>()
                .Property(e => e.TechnicalSale)
                .IsFixedLength()
                .IsUnicode(false);

            modelBuilder.Entity<azsFuelSale>()
                .Property(e => e.StartLevel)
                .HasPrecision(6, 1);

            modelBuilder.Entity<azsFuelSale>()
                .Property(e => e.StartVolume)
                .HasPrecision(9, 1);

            modelBuilder.Entity<azsFuelSale>()
                .Property(e => e.StartDensity)
                .HasPrecision(4, 1);

            modelBuilder.Entity<azsFuelSale>()
                .Property(e => e.StartMass)
                .HasPrecision(9, 1);

            modelBuilder.Entity<azsFuelSale>()
                .Property(e => e.StartTemperature)
                .HasPrecision(3, 1);

            modelBuilder.Entity<azsFuelSale>()
                .Property(e => e.StartWaterLevel)
                .HasPrecision(6, 1);

            modelBuilder.Entity<azsFuelSale>()
                .Property(e => e.StopLevel)
                .HasPrecision(6, 1);

            modelBuilder.Entity<azsFuelSale>()
                .Property(e => e.StopVolume)
                .HasPrecision(9, 1);

            modelBuilder.Entity<azsFuelSale>()
                .Property(e => e.StopDensity)
                .HasPrecision(4, 1);

            modelBuilder.Entity<azsFuelSale>()
                .Property(e => e.StopMass)
                .HasPrecision(9, 1);

            modelBuilder.Entity<azsFuelSale>()
                .Property(e => e.StopTemperature)
                .HasPrecision(3, 1);

            modelBuilder.Entity<azsFuelSale>()
                .Property(e => e.StopWaterLevel)
                .HasPrecision(6, 1);

            modelBuilder.Entity<azsFuelSale>()
                .Property(e => e.UsageDensity)
                .HasPrecision(9, 5);

            modelBuilder.Entity<azsFuelSale_bak_20170612>()
                .Property(e => e.UsageVolume)
                .HasPrecision(9, 1);

            modelBuilder.Entity<azsFuelSale_bak_20170612>()
                .Property(e => e.UsageMass)
                .HasPrecision(9, 1);

            modelBuilder.Entity<azsFuelSale_bak_20170612>()
                .Property(e => e.FuelLevel)
                .HasPrecision(6, 1);

            modelBuilder.Entity<azsFuelSale_bak_20170612>()
                .Property(e => e.FuelVolume)
                .HasPrecision(9, 1);

            modelBuilder.Entity<azsFuelSale_bak_20170612>()
                .Property(e => e.Density)
                .HasPrecision(4, 1);

            modelBuilder.Entity<azsFuelSale_bak_20170612>()
                .Property(e => e.Mass)
                .HasPrecision(9, 1);

            modelBuilder.Entity<azsFuelSale_bak_20170612>()
                .Property(e => e.Temperature)
                .HasPrecision(3, 1);

            modelBuilder.Entity<azsFuelSale_bak_20170612>()
                .Property(e => e.WaterLevel)
                .HasPrecision(6, 1);

            modelBuilder.Entity<azsFuelSale_bak_20170612>()
                .Property(e => e.TechnicalSale)
                .IsFixedLength()
                .IsUnicode(false);

            modelBuilder.Entity<azsFuelSale_bak_20170612>()
                .Property(e => e.StartLevel)
                .HasPrecision(6, 1);

            modelBuilder.Entity<azsFuelSale_bak_20170612>()
                .Property(e => e.StartVolume)
                .HasPrecision(9, 1);

            modelBuilder.Entity<azsFuelSale_bak_20170612>()
                .Property(e => e.StartDensity)
                .HasPrecision(4, 1);

            modelBuilder.Entity<azsFuelSale_bak_20170612>()
                .Property(e => e.StartMass)
                .HasPrecision(9, 1);

            modelBuilder.Entity<azsFuelSale_bak_20170612>()
                .Property(e => e.StartTemperature)
                .HasPrecision(3, 1);

            modelBuilder.Entity<azsFuelSale_bak_20170612>()
                .Property(e => e.StartWaterLevel)
                .HasPrecision(6, 1);

            modelBuilder.Entity<azsFuelSale_bak_20170612>()
                .Property(e => e.StopLevel)
                .HasPrecision(6, 1);

            modelBuilder.Entity<azsFuelSale_bak_20170612>()
                .Property(e => e.StopVolume)
                .HasPrecision(9, 1);

            modelBuilder.Entity<azsFuelSale_bak_20170612>()
                .Property(e => e.StopDensity)
                .HasPrecision(4, 1);

            modelBuilder.Entity<azsFuelSale_bak_20170612>()
                .Property(e => e.StopMass)
                .HasPrecision(9, 1);

            modelBuilder.Entity<azsFuelSale_bak_20170612>()
                .Property(e => e.StopTemperature)
                .HasPrecision(3, 1);

            modelBuilder.Entity<azsFuelSale_bak_20170612>()
                .Property(e => e.StopWaterLevel)
                .HasPrecision(6, 1);

            modelBuilder.Entity<azsTankStates>()
                .Property(e => e.FuelLevel)
                .HasPrecision(6, 1);

            modelBuilder.Entity<azsTankStates>()
                .Property(e => e.FuelVolume)
                .HasPrecision(9, 1);

            modelBuilder.Entity<azsTankStates>()
                .Property(e => e.Density)
                .HasPrecision(4, 1);

            modelBuilder.Entity<azsTankStates>()
                .Property(e => e.Mass)
                .HasPrecision(9, 1);

            modelBuilder.Entity<azsTankStates>()
                .Property(e => e.Temperature)
                .HasPrecision(3, 1);

            modelBuilder.Entity<azsTankStates>()
                .Property(e => e.WaterLevel)
                .HasPrecision(6, 1);

            modelBuilder.Entity<Delta>()
                .Property(e => e.UsageVolume)
                .HasPrecision(9, 1);

            modelBuilder.Entity<Delta>()
                .Property(e => e.UsageMass)
                .HasPrecision(9, 1);

            modelBuilder.Entity<Delta>()
                .Property(e => e.FuelLevel)
                .HasPrecision(6, 1);

            modelBuilder.Entity<Delta>()
                .Property(e => e.FuelVolume)
                .HasPrecision(9, 1);

            modelBuilder.Entity<Delta>()
                .Property(e => e.Density)
                .HasPrecision(4, 1);

            modelBuilder.Entity<Delta>()
                .Property(e => e.Mass)
                .HasPrecision(9, 1);

            modelBuilder.Entity<Delta>()
                .Property(e => e.Temperature)
                .HasPrecision(3, 1);

            modelBuilder.Entity<Delta>()
                .Property(e => e.WaterLevel)
                .HasPrecision(6, 1);

            modelBuilder.Entity<Delta>()
                .Property(e => e.TechnicalSale)
                .IsFixedLength()
                .IsUnicode(false);

            modelBuilder.Entity<FuelIncome>()
                .Property(e => e.StartLevel)
                .HasPrecision(6, 1);

            modelBuilder.Entity<FuelIncome>()
                .Property(e => e.StartVolume)
                .HasPrecision(9, 1);

            modelBuilder.Entity<FuelIncome>()
                .Property(e => e.StartTemperature)
                .HasPrecision(3, 1);

            modelBuilder.Entity<FuelIncome>()
                .Property(e => e.StartDensity)
                .HasPrecision(4, 1);

            modelBuilder.Entity<FuelIncome>()
                .Property(e => e.StartMass)
                .HasPrecision(9, 1);

            modelBuilder.Entity<FuelIncome>()
                .Property(e => e.StartWaterLevel)
                .HasPrecision(6, 1);

            modelBuilder.Entity<FuelIncome>()
                .Property(e => e.StartWaterVolume)
                .HasPrecision(9, 1);

            modelBuilder.Entity<FuelIncome>()
                .Property(e => e.StopLevel)
                .HasPrecision(6, 1);

            modelBuilder.Entity<FuelIncome>()
                .Property(e => e.StopVolume)
                .HasPrecision(9, 1);

            modelBuilder.Entity<FuelIncome>()
                .Property(e => e.StopTemperature)
                .HasPrecision(3, 1);

            modelBuilder.Entity<FuelIncome>()
                .Property(e => e.StopDensity)
                .HasPrecision(4, 1);

            modelBuilder.Entity<FuelIncome>()
                .Property(e => e.StopMass)
                .HasPrecision(9, 1);

            modelBuilder.Entity<FuelIncome>()
                .Property(e => e.StopWaterLevel)
                .HasPrecision(6, 1);

            modelBuilder.Entity<FuelIncome>()
                .Property(e => e.StopWaterVolume)
                .HasPrecision(9, 1);

            modelBuilder.Entity<FuelSale>()
                .Property(e => e.UsageVolume)
                .HasPrecision(9, 1);

            modelBuilder.Entity<FuelSale>()
                .Property(e => e.UsageMass)
                .HasPrecision(9, 1);

            modelBuilder.Entity<FuelSale>()
                .Property(e => e.FuelLevel)
                .HasPrecision(6, 1);

            modelBuilder.Entity<FuelSale>()
                .Property(e => e.FuelVolume)
                .HasPrecision(9, 1);

            modelBuilder.Entity<FuelSale>()
                .Property(e => e.Density)
                .HasPrecision(4, 1);

            modelBuilder.Entity<FuelSale>()
                .Property(e => e.Mass)
                .HasPrecision(9, 1);

            modelBuilder.Entity<FuelSale>()
                .Property(e => e.Temperature)
                .HasPrecision(3, 1);

            modelBuilder.Entity<FuelSale>()
                .Property(e => e.WaterLevel)
                .HasPrecision(6, 1);

            modelBuilder.Entity<FuelSale>()
                .Property(e => e.TechnicalSale)
                .IsFixedLength()
                .IsUnicode(false);

            modelBuilder.Entity<FuelSale>()
                .Property(e => e.StartLevel)
                .HasPrecision(6, 1);

            modelBuilder.Entity<FuelSale>()
                .Property(e => e.StartVolume)
                .HasPrecision(9, 1);

            modelBuilder.Entity<FuelSale>()
                .Property(e => e.StartDensity)
                .HasPrecision(4, 1);

            modelBuilder.Entity<FuelSale>()
                .Property(e => e.StartMass)
                .HasPrecision(9, 1);

            modelBuilder.Entity<FuelSale>()
                .Property(e => e.StartTemperature)
                .HasPrecision(3, 1);

            modelBuilder.Entity<FuelSale>()
                .Property(e => e.StartWaterLevel)
                .HasPrecision(6, 1);

            modelBuilder.Entity<FuelSale>()
                .Property(e => e.StopLevel)
                .HasPrecision(6, 1);

            modelBuilder.Entity<FuelSale>()
                .Property(e => e.StopVolume)
                .HasPrecision(9, 1);

            modelBuilder.Entity<FuelSale>()
                .Property(e => e.StopDensity)
                .HasPrecision(4, 1);

            modelBuilder.Entity<FuelSale>()
                .Property(e => e.StopMass)
                .HasPrecision(9, 1);

            modelBuilder.Entity<FuelSale>()
                .Property(e => e.StopTemperature)
                .HasPrecision(3, 1);

            modelBuilder.Entity<FuelSale>()
                .Property(e => e.StopWaterLevel)
                .HasPrecision(6, 1);

            modelBuilder.Entity<TankerStorage>()
                .Property(e => e.FuelVolume)
                .HasPrecision(10, 2);

            modelBuilder.Entity<TankStates>()
                .Property(e => e.FuelLevel)
                .HasPrecision(6, 1);

            modelBuilder.Entity<TankStates>()
                .Property(e => e.FuelVolume)
                .HasPrecision(9, 1);

            modelBuilder.Entity<TankStates>()
                .Property(e => e.Density)
                .HasPrecision(4, 1);

            modelBuilder.Entity<TankStates>()
                .Property(e => e.Mass)
                .HasPrecision(9, 1);

            modelBuilder.Entity<TankStates>()
                .Property(e => e.Temperature)
                .HasPrecision(3, 1);

            modelBuilder.Entity<TankStates>()
                .Property(e => e.WaterLevel)
                .HasPrecision(6, 1);

            modelBuilder.Entity<TrainTankerOrder>()
                .Property(e => e.DocLevel)
                .HasPrecision(6, 1);

            modelBuilder.Entity<TrainTankerOrder>()
                .Property(e => e.DocVolume)
                .HasPrecision(9, 1);

            modelBuilder.Entity<TrainTankerOrder>()
                .Property(e => e.DocTemperature)
                .HasPrecision(3, 1);

            modelBuilder.Entity<TrainTankerOrder>()
                .Property(e => e.DocDensity)
                .HasPrecision(4, 1);

            modelBuilder.Entity<TrainTankerOrder>()
                .Property(e => e.DocMass)
                .HasPrecision(9, 1);

            modelBuilder.Entity<TrainTankerOrder>()
                .Property(e => e.DocWaterLevel)
                .HasPrecision(6, 1);

            modelBuilder.Entity<TrainTankerOrder>()
                .Property(e => e.DocWaterVolume)
                .HasPrecision(9, 1);

            modelBuilder.Entity<TrainTankerOrder>()
                .Property(e => e.FactLevel)
                .HasPrecision(6, 1);

            modelBuilder.Entity<TrainTankerOrder>()
                .Property(e => e.FactVolume)
                .HasPrecision(9, 1);

            modelBuilder.Entity<TrainTankerOrder>()
                .Property(e => e.FactTemperature)
                .HasPrecision(3, 1);

            modelBuilder.Entity<TrainTankerOrder>()
                .Property(e => e.FactDensity)
                .HasPrecision(4, 1);

            modelBuilder.Entity<TrainTankerOrder>()
                .Property(e => e.FactMass)
                .HasPrecision(9, 1);

            modelBuilder.Entity<TrainTankerOrder>()
                .Property(e => e.FactWaterLevel)
                .HasPrecision(6, 1);

            modelBuilder.Entity<TrainTankerOrder>()
                .Property(e => e.FactWaterVolume)
                .HasPrecision(9, 1);

            modelBuilder.Entity<TrainTankerOrder>()
                .Property(e => e.IncomeVolume)
                .HasPrecision(9, 1);

            modelBuilder.Entity<TrainTankerOrder>()
                .Property(e => e.IncomeTemperature)
                .HasPrecision(3, 1);

            modelBuilder.Entity<TrainTankerOrder>()
                .Property(e => e.IncomeDensity)
                .HasPrecision(4, 1);

            modelBuilder.Entity<TrainTankerOrder>()
                .Property(e => e.IncomeMass)
                .HasPrecision(9, 1);
            modelBuilder.Entity<FuelSale_KGD>()
                .Property(e => e.dose)
                .HasPrecision(9, 3);

            modelBuilder.Entity<FuelSale_KGD>()
                .Property(e => e.passage)
                .IsFixedLength()
                .IsUnicode(false);

            modelBuilder.Entity<FuelSale_KGD>()
                .Property(e => e.mass)
                .HasPrecision(10, 3);

            modelBuilder.Entity<FuelSale_KGD>()
                .Property(e => e.dens)
                .HasPrecision(9, 5);

            modelBuilder.Entity<FuelSale_KGD>()
                .Property(e => e.temp)
                .HasPrecision(3, 1);

            modelBuilder.Entity<FuelSale_KGD>()
                .Property(e => e.mass15)
                .HasPrecision(10, 3);

            modelBuilder.Entity<FuelSale_KGD>()
                .Property(e => e.dens15)
                .HasPrecision(9, 5);

            modelBuilder.Entity<FuelSale_KGD>()
                .Property(e => e.start_level)
                .HasPrecision(7, 1);

            modelBuilder.Entity<FuelSale_KGD>()
                .Property(e => e.start_volume)
                .HasPrecision(9, 1);

            modelBuilder.Entity<FuelSale_KGD>()
                .Property(e => e.start_dens)
                .HasPrecision(9, 5);

            modelBuilder.Entity<FuelSale_KGD>()
                .Property(e => e.start_mass)
                .HasPrecision(9, 1);

            modelBuilder.Entity<FuelSale_KGD>()
                .Property(e => e.start_temp)
                .HasPrecision(3, 1);

            modelBuilder.Entity<FuelSale_KGD>()
                .Property(e => e.start_water_level)
                .HasPrecision(6, 1);

            modelBuilder.Entity<FuelSale_KGD>()
                .Property(e => e.stop_level)
                .HasPrecision(7, 1);

            modelBuilder.Entity<FuelSale_KGD>()
                .Property(e => e.stop_volume)
                .HasPrecision(9, 1);

            modelBuilder.Entity<FuelSale_KGD>()
                .Property(e => e.stop_density)
                .HasPrecision(9, 5);

            modelBuilder.Entity<FuelSale_KGD>()
                .Property(e => e.stop_mass)
                .HasPrecision(9, 1);

            modelBuilder.Entity<FuelSale_KGD>()
                .Property(e => e.stop_temp)
                .HasPrecision(3, 1);

            modelBuilder.Entity<FuelSale_KGD>()
                .Property(e => e.stop_water_level)
                .HasPrecision(6, 1);

            modelBuilder.Entity<FuelSale_OIL>()
                .Property(e => e.OperatorCreated)
                .IsFixedLength();

            modelBuilder.Entity<FuelSale_OIL>()
                .Property(e => e.OilType)
                .IsFixedLength();

            modelBuilder.Entity<FuelSale_OIL>()
                .Property(e => e.TankNo)
                .IsFixedLength();

            modelBuilder.Entity<FuelSale_OIL>()
                .Property(e => e.Receiver)
                .IsFixedLength();

            modelBuilder.Entity<FuelSale_OIL>()
                .Property(e => e.OperatorStarted)
                .IsFixedLength();

            modelBuilder.Entity<Receipts_OIL>()
                .Property(e => e.DensStop)
                .HasPrecision(4, 1);
        }
    }
}
