namespace EFOC.Entities
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    public partial class Incomes
    {
        public long Id { get; set; }

        public DateTime DateCreated { get; set; }

        [Required]
        [StringLength(50)]
        public string OperatorCreated { get; set; }

        [Required]
        [StringLength(50)]
        public string OilType { get; set; }

        [Required]
        [StringLength(10)]
        public string TankNo { get; set; }

        public double CreatedLevel { get; set; }

        public double CreatedVolume { get; set; }

        public double CreatedMass { get; set; }

        public double CreatedTemp { get; set; }

        public double CreatedDens { get; set; }

        public double CreatedWater { get; set; }

        [Required]
        [StringLength(50)]
        public string OrderId { get; set; }

        public DateTime? DateStarted { get; set; }

        [StringLength(50)]
        public string OperatorStarted { get; set; }

        public double? LevelStart { get; set; }

        public double? VolumeStart { get; set; }

        public double? MassStart { get; set; }

        public double? TempStart { get; set; }

        public double? DensStart { get; set; }

        public double? WaterStart { get; set; }

        public DateTime? DateStop { get; set; }

        public double? LevelStop { get; set; }

        public double? VolumeStop { get; set; }

        public double? MassStop { get; set; }

        public double? TempStop { get; set; }

        public decimal? DensStop { get; set; }

        public double? WaterStop { get; set; }
    }
}
