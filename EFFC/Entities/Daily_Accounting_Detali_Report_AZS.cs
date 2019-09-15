namespace EFFC.Entities
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    public partial class Daily_Accounting_Detali_Report_AZS
    {
        public int id { get; set; }

        public DateTime? dt_start { get; set; }

        public DateTime? dt_stop { get; set; }

        public int? fuel_type { get; set; }

        [StringLength(11)]
        public string tank { get; set; }

        public DateTime? dt_actual_remains_start { get; set; }

        public double? level_remains_start { get; set; }

        public double? volume_remains_start { get; set; }

        public double? dens_remains_start { get; set; }

        public double? dens_avg_remains_start { get; set; }

        public double? mass_remains_start { get; set; }

        public double? temp_remains_start { get; set; }

        public double? relation_remains_start { get; set; }

        public double? ratio_vd_remains_start { get; set; }

        public double? ratio_tv_remains_start { get; set; }

        public double? dens15_remains_start { get; set; }

        public double? volume15_remains_start { get; set; }

        public double? mass15_remains_start { get; set; }

        public double? volume_received { get; set; }

        public double? mass_received { get; set; }

        public double? dens_received { get; set; }

        public double? temp_received { get; set; }

        public double? volume15_received { get; set; }

        public double? mass15_received { get; set; }

        public double? dens15_received { get; set; }

        public int? count_tanks_delivery { get; set; }

        public double? volume_delivery { get; set; }

        public double? mass_delivery { get; set; }

        public double? dens_delivery { get; set; }

        public double? temp_delivery { get; set; }

        public double? volume15_delivery { get; set; }

        public double? mass15_delivery { get; set; }

        public double? dens15_delivery { get; set; }

        public DateTime? dt_actual_remains_stop { get; set; }

        public double? level_remains_stop { get; set; }

        public double? volume_remains_stop { get; set; }

        public double? dens_remains_stop { get; set; }

        public double? dens_avg_remains_stop { get; set; }

        public double? mass_remains_stop { get; set; }

        public double? temp_remains_stop { get; set; }

        public double? relation_remains_stop { get; set; }

        public double? ratio_vd_remains_stop { get; set; }

        public double? ratio_tv_remains_stop { get; set; }

        public double? dens15_remains_stop { get; set; }

        public double? volume15_remains_stop { get; set; }

        public double? mass15_remains_stop { get; set; }

        public double? permissible_error { get; set; }
    }
}
