namespace EFFC.Entities
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("OilSale")]
    public partial class OilSale
    {
        public int id { get; set; }

        [Required]
        [StringLength(50)]
        public string user { get; set; }

        public DateTime create { get; set; }

        [Required]
        [StringLength(50)]
        public string oil_type { get; set; }

        [Required]
        [StringLength(10)]
        public string tank_num { get; set; }

        public double dose { get; set; }

        public long? volume { get; set; }

        public double? dens { get; set; }

        public double? mass { get; set; }

        public double? temp { get; set; }

        public int outcome_type { get; set; }

        [Required]
        [StringLength(100)]
        public string receiver { get; set; }

        [StringLength(50)]
        public string operator_started { get; set; }

        [StringLength(5)]
        public string pump_used { get; set; }

        public DateTime? start_datetime { get; set; }

        public double? start_level { get; set; }

        public double? start_volume { get; set; }

        public double? start_density { get; set; }

        public double? start_mass { get; set; }

        public double? start_temp { get; set; }

        public double? start_water_level { get; set; }

        public long? start_counter { get; set; }

        public DateTime? stop_datetime { get; set; }

        public double? stop_level { get; set; }

        public double? stop_volume { get; set; }

        public double? stop_density { get; set; }

        public double? stop_mass { get; set; }

        public double? stop_temp { get; set; }

        public double? stop_water_level { get; set; }

        public long? stop_counter { get; set; }

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
