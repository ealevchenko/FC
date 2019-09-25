namespace EFFC.Entities
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    public partial class DeliveryTanks_AZS
    {
        public int id { get; set; }

        public DateTime dt { get; set; }

        public int id_table { get; set; }

        public int trk_num { get; set; }

        public bool side { get; set; }

        public int num { get; set; }

        public int fuel_type { get; set; }

        [Required]
        [StringLength(200)]
        public string tank_num { get; set; }

        public double? dose { get; set; }

        [Required]
        [StringLength(1)]
        public string passage { get; set; }

        public double? volume { get; set; }

        public double? mass { get; set; }

        public DateTime start_datetime { get; set; }

        public double? start_volume { get; set; }

        public double? start_dens_avg { get; set; }

        public double? start_mass { get; set; }

        public double start_temp { get; set; }

        public int start_counter { get; set; }

        public DateTime? stop_datetime { get; set; }

        public double? stop_volume { get; set; }

        public double? stop_dens_avg { get; set; }

        public double? stop_mass { get; set; }

        public double? stop_temp { get; set; }

        public int? stop_counter { get; set; }

        public double? dens_avg_delivery { get; set; }

        public double? volume_delivery { get; set; }

        public double? mass_delivery { get; set; }

        public double? temp_delivery { get; set; }

        public double? relation { get; set; }

        public double? ratio_vd { get; set; }

        public double? ratio_tv { get; set; }

        public double? dens15 { get; set; }

        public double? volume15 { get; set; }

        public double? mass15 { get; set; }
    }
}