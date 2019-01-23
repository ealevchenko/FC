namespace EFFC.Entities
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    public partial class TankStates
    {
        public int Id { get; set; }

        public int AzsNo { get; set; }

        [Column(TypeName = "date")]
        public DateTime Date { get; set; }

        public TimeSpan? Time { get; set; }

        public int FuelType { get; set; }

        public int TankNo { get; set; }

        [Column(TypeName = "numeric")]
        public decimal FuelLevel { get; set; }

        [Column(TypeName = "numeric")]
        public decimal FuelVolume { get; set; }

        [Column(TypeName = "numeric")]
        public decimal Density { get; set; }

        [Column(TypeName = "numeric")]
        public decimal Mass { get; set; }

        [Column(TypeName = "numeric")]
        public decimal Temperature { get; set; }

        [Column(TypeName = "numeric")]
        public decimal WaterLevel { get; set; }

        [Required]
        [StringLength(50)]
        public string OperatorName { get; set; }

        [Column(TypeName = "date")]
        public DateTime DateStartWork { get; set; }

        public TimeSpan TimeStartWork { get; set; }
    }
}
