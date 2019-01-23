namespace EFFC.Entities
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    public partial class azsUsers
    {
        public int id { get; set; }

        [Required]
        [StringLength(50)]
        public string UserLogin { get; set; }

        public bool Admin { get; set; }

        public bool Edit { get; set; }
    }
}
