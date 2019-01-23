namespace EFFC.Entities
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    public partial class Lokomotives
    {
        public int Id { get; set; }

        public int? LokomotiveId { get; set; }

        [Required]
        [StringLength(50)]
        public string Number { get; set; }

        [Required]
        [StringLength(50)]
        public string NumberOfFrame { get; set; }

        [StringLength(255)]
        public string Note { get; set; }

        [Column(TypeName = "date")]
        public DateTime? CreateDate { get; set; }

        public TimeSpan? CreateTime { get; set; }

        [Column(TypeName = "date")]
        public DateTime? UpdateDate { get; set; }

        public TimeSpan? UpdateTime { get; set; }

        [StringLength(255)]
        public string Owner { get; set; }
    }
}
