namespace EFOC.Entities
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    public partial class RemainsTanks
    {
        public int id { get; set; }

        public DateTime? Timestamp { get; set; }

        public int? bak { get; set; }

        public double? Temp { get; set; }

        public double? Volume { get; set; }

        public double? Water { get; set; }

        public double? Dens { get; set; }

        public double? Level { get; set; }

        public double? Mass { get; set; }

        [StringLength(50)]
        public string oil_type { get; set; }
    }
}
