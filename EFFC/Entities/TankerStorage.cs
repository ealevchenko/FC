namespace EFFC.Entities
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("TankerStorage")]
    public partial class TankerStorage
    {
        public int Id { get; set; }

        [Required]
        [StringLength(50)]
        public string TankerNo { get; set; }

        [StringLength(50)]
        public string Debitor { get; set; }

        public int? FuelType { get; set; }

        [Column(TypeName = "numeric")]
        public decimal FuelVolume { get; set; }
    }
}
