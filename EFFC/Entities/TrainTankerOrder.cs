namespace EFFC.Entities
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("TrainTankerOrder")]
    public partial class TrainTankerOrder
    {
        public int Id { get; set; }

        [Required]
        [StringLength(50)]
        public string No { get; set; }

        [Required]
        [StringLength(50)]
        public string TrainNo { get; set; }

        [Column(TypeName = "date")]
        public DateTime Date { get; set; }

        public int FuelType { get; set; }

        [Required]
        [StringLength(50)]
        public string Supplier { get; set; }

        [Required]
        [StringLength(50)]
        public string TankerType { get; set; }

        [Required]
        [StringLength(50)]
        public string TankerNo { get; set; }

        [Column(TypeName = "numeric")]
        public decimal DocLevel { get; set; }

        [Column(TypeName = "numeric")]
        public decimal DocVolume { get; set; }

        [Column(TypeName = "numeric")]
        public decimal DocTemperature { get; set; }

        [Column(TypeName = "numeric")]
        public decimal DocDensity { get; set; }

        [Column(TypeName = "numeric")]
        public decimal DocMass { get; set; }

        [Column(TypeName = "numeric")]
        public decimal DocWaterLevel { get; set; }

        [Column(TypeName = "numeric")]
        public decimal DocWaterVolume { get; set; }

        [Column(TypeName = "numeric")]
        public decimal FactLevel { get; set; }

        [Column(TypeName = "numeric")]
        public decimal FactVolume { get; set; }

        [Column(TypeName = "numeric")]
        public decimal FactTemperature { get; set; }

        [Column(TypeName = "numeric")]
        public decimal FactDensity { get; set; }

        [Column(TypeName = "numeric")]
        public decimal FactMass { get; set; }

        [Column(TypeName = "numeric")]
        public decimal FactWaterLevel { get; set; }

        [Column(TypeName = "numeric")]
        public decimal FactWaterVolume { get; set; }

        public int AzsNo { get; set; }

        [StringLength(50)]
        public string OperatorName { get; set; }

        [Column(TypeName = "date")]
        public DateTime? DateStart { get; set; }

        public TimeSpan? TimeStart { get; set; }

        [Column(TypeName = "date")]
        public DateTime? DateStop { get; set; }

        public TimeSpan? TimeStop { get; set; }

        [Column(TypeName = "numeric")]
        public decimal? IncomeVolume { get; set; }

        [Column(TypeName = "numeric")]
        public decimal? IncomeTemperature { get; set; }

        [Column(TypeName = "numeric")]
        public decimal? IncomeDensity { get; set; }

        [Column(TypeName = "numeric")]
        public decimal? IncomeMass { get; set; }
    }
}
