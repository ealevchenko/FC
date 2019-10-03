namespace EFOC.Entities
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    public partial class Perek_Rep_View
    {
        [Key]
        [Column(Order = 0)]
        [StringLength(10)]
        public string in_tank { get; set; }

        [Key]
        [Column(Order = 1)]
        [StringLength(10)]
        public string out_tank { get; set; }

        [Key]
        [Column(Order = 2)]
        [StringLength(50)]
        public string OilType { get; set; }

        [Key]
        [Column(Order = 3)]
        public DateTime dt { get; set; }

        public decimal? out_dv { get; set; }

        public decimal? out_dens { get; set; }

        public decimal? out_dm_real { get; set; }

        public decimal? out_dm_calc { get; set; }

        public decimal? in_dv { get; set; }

        public decimal? in_dens { get; set; }

        public decimal? in_dm_real { get; set; }

        public decimal? in_dm_calc { get; set; }

        public decimal? delta_v { get; set; }

        public decimal? delta_m_real { get; set; }

        public decimal? delta_m_calc { get; set; }
    }
}
