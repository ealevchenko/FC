namespace EFFC.Entities
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("AzsPlan")]
    public partial class AzsPlan
    {
        public int id { get; set; }

        public int? CardId { get; set; }

        public string RFId { get; set; }

        public DateTime? dtstart { get; set; }

        public DateTime? dtend { get; set; }

        public int? FuelType { get; set; }

        public float? VolumePlan { get; set; }

        public float? VolumeFact { get; set; }
    }
}
