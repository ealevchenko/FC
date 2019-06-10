namespace EFOC.Entities
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    public partial class Cat_Werks
    {
        [StringLength(4)]
        public string id { get; set; }

        [Required]
        [StringLength(4)]
        public string name { get; set; }
    }
}
