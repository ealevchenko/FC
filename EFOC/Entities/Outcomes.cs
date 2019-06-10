namespace EFOC.Entities
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    public partial class Outcomes
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

        public double TargetMass { get; set; }

        public double TargetVolume { get; set; }

        public double CreatedLevel { get; set; }

        public double CreatedVolume { get; set; }

        public double CreatedMass { get; set; }

        public double CreatedTemp { get; set; }

        public double CreatedDens { get; set; }

        public double CreatedWater { get; set; }

        public int OutcomeType { get; set; }

        [Required]
        [StringLength(100)]
        public string Receiver { get; set; }

        public DateTime? DateStarted { get; set; }

        [StringLength(50)]
        public string OperatorStarted { get; set; }

        [StringLength(5)]
        public string Pump_Used { get; set; }

        public long? CounterStart { get; set; }

        public double? LevelStart { get; set; }

        public double? VolumeStart { get; set; }

        public double? MassStart { get; set; }

        public double? TempStart { get; set; }

        public double? DensStart { get; set; }

        public double? WaterStart { get; set; }

        public DateTime? DateStop { get; set; }

        public long? CounterStop { get; set; }

        public double? LevelStop { get; set; }

        public double? VolumeStop { get; set; }

        public double? MassStop { get; set; }

        public double? TempStop { get; set; }

        public double? DensStop { get; set; }

        public double? WaterStop { get; set; }

        public int? FLAG_R { get; set; }

        [StringLength(50)]
        public string LOGIN_EXP { get; set; }

        [StringLength(50)]
        public string N_POST { get; set; }

        [StringLength(50)]
        public string TRANSP_FAKT { get; set; }

        [StringLength(50)]
        public string N_TREB { get; set; }

        [StringLength(50)]
        public string LGORT { get; set; }

        [StringLength(50)]
        public string WERKS { get; set; }

        public int sended { get; set; }

        [StringLength(18)]
        public string OZM_TREB { get; set; }

        [StringLength(18)]
        public string OZM_BAK { get; set; }

        public int? N_POS { get; set; }
    }
}
