namespace EFFC.Entities
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("FuelIncome")]
    public partial class FuelIncome
    {
        public int Id { get; set; }

        public int OrderId { get; set; }

        public int AzsNo { get; set; }

        public int TankNo { get; set; }

        [Column(TypeName = "numeric")]
        public decimal StartLevel { get; set; }

        [Column(TypeName = "numeric")]
        public decimal StartVolume { get; set; }

        [Column(TypeName = "numeric")]
        public decimal StartTemperature { get; set; }

        [Column(TypeName = "numeric")]
        public decimal StartDensity { get; set; }

        [Column(TypeName = "numeric")]
        public decimal StartMass { get; set; }

        [Column(TypeName = "numeric")]
        public decimal StartWaterLevel { get; set; }

        [Column(TypeName = "numeric")]
        public decimal StartWaterVolume { get; set; }

        [Column(TypeName = "numeric")]
        public decimal StopLevel { get; set; }

        [Column(TypeName = "numeric")]
        public decimal StopVolume { get; set; }

        [Column(TypeName = "numeric")]
        public decimal StopTemperature { get; set; }

        [Column(TypeName = "numeric")]
        public decimal StopDensity { get; set; }

        [Column(TypeName = "numeric")]
        public decimal StopMass { get; set; }

        [Column(TypeName = "numeric")]
        public decimal StopWaterLevel { get; set; }

        [Column(TypeName = "numeric")]
        public decimal StopWaterVolume { get; set; }

        [Required]
        [StringLength(50)]
        public string OperatorName { get; set; }

        [Column(TypeName = "date")]
        public DateTime DateStartWork { get; set; }

        public TimeSpan TimeStartWork { get; set; }

        [Column(TypeName = "date")]
        public DateTime? DateStart { get; set; }

        public TimeSpan? TimeStart { get; set; }

        [Column(TypeName = "date")]
        public DateTime? DateStop { get; set; }

        public TimeSpan? TimeStop { get; set; }
    }
}
