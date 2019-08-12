namespace EFFC.Entities
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    public partial class Oil_Transfer
    {
        public int id { get; set; }

        public DateTime dt { get; set; }

        [Required]
        [StringLength(50)]
        public string OilType { get; set; }

        [Required]
        [StringLength(10)]
        public string out_tank { get; set; }

        public float? out_dv { get; set; }

        public float? out_dens { get; set; }

        public float? out_dm_calc { get; set; }

        [Required]
        [StringLength(10)]
        public string in_tank { get; set; }

        public float? in_dv { get; set; }

        public float? in_dens { get; set; }

        public float? in_dm_calc { get; set; }

        public float? delta_v { get; set; }

        public float? delta_m_calc { get; set; }
    }
}
