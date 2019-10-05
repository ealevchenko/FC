namespace EFOC.Concrete
{
    using System;
    using System.Data.Entity;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Linq;
    using EFOC.Entities;

    public partial class EFDbContext : DbContext
    {
        public EFDbContext()
            : base("name=oil_wincc")
        {
        }

        public virtual DbSet<Cat_Depots> Cat_Depots { get; set; }
        public virtual DbSet<Cat_OZM> Cat_OZM { get; set; }
        public virtual DbSet<Cat_Werks> Cat_Werks { get; set; }
        public virtual DbSet<Incomes> Incomes { get; set; }
        public virtual DbSet<Oil_Types> Oil_Types { get; set; }
        public virtual DbSet<Outcomes> Outcomes { get; set; }

        public virtual DbSet<RemainsTanks> RemainsTanks { get; set; }

        public virtual DbSet<Perek_Rep_View> Perek_Rep_View { get; set; }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Incomes>()
                .Property(e => e.DensStop)
                .HasPrecision(4, 1);

            modelBuilder.Entity<Outcomes>()
                .Property(e => e.OperatorCreated)
                .IsFixedLength();

            modelBuilder.Entity<Outcomes>()
                .Property(e => e.OilType)
                .IsFixedLength();

            modelBuilder.Entity<Outcomes>()
                .Property(e => e.TankNo)
                .IsFixedLength();

            modelBuilder.Entity<Outcomes>()
                .Property(e => e.Receiver)
                .IsFixedLength();

            modelBuilder.Entity<Outcomes>()
                .Property(e => e.OperatorStarted)
                .IsFixedLength();

            modelBuilder.Entity<Perek_Rep_View>()
                .Property(e => e.out_tank)
                .IsFixedLength();

            modelBuilder.Entity<Perek_Rep_View>()
                .Property(e => e.OilType)
                .IsFixedLength();

            modelBuilder.Entity<Perek_Rep_View>()
                .Property(e => e.out_dv)
                .HasPrecision(10, 3);

            modelBuilder.Entity<Perek_Rep_View>()
                .Property(e => e.out_dens)
                .HasPrecision(10, 1);

            modelBuilder.Entity<Perek_Rep_View>()
                .Property(e => e.out_dm_real)
                .HasPrecision(10, 3);

            modelBuilder.Entity<Perek_Rep_View>()
                .Property(e => e.out_dm_calc)
                .HasPrecision(10, 3);

            modelBuilder.Entity<Perek_Rep_View>()
                .Property(e => e.in_dv)
                .HasPrecision(10, 3);

            modelBuilder.Entity<Perek_Rep_View>()
                .Property(e => e.in_dens)
                .HasPrecision(10, 3);

            modelBuilder.Entity<Perek_Rep_View>()
                .Property(e => e.in_dm_real)
                .HasPrecision(10, 3);

            modelBuilder.Entity<Perek_Rep_View>()
                .Property(e => e.in_dm_calc)
                .HasPrecision(10, 3);

            modelBuilder.Entity<Perek_Rep_View>()
                .Property(e => e.delta_v)
                .HasPrecision(10, 3);

            modelBuilder.Entity<Perek_Rep_View>()
                .Property(e => e.delta_m_real)
                .HasPrecision(10, 3);

            modelBuilder.Entity<Perek_Rep_View>()
                .Property(e => e.delta_m_calc)
                .HasPrecision(10, 3);
        }
    }
}
