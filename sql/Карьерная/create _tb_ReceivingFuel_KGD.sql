
	CREATE TABLE [KRR-PA-CNT-Oil].[dbo].[ReceivingFuel_KGD](
		[id] [int] IDENTITY(1,1) NOT NULL,
		[operator_name] [nvarchar](50) NOT NULL,
		[smena_num] [int] NULL,
		[smena_datetime] [datetime] NULL,

		[railway_num_nak] [nvarchar](20) NOT NULL,
		[railway_num_tanker] [nvarchar](20) NOT NULL,
		[railway_level] real NULL,
		[railway_volume] real NULL,
		[railway_dens] real NULL,
		[railway_mass] real NULL,
		[railway_temp] real NULL,
		[railway_water_level] real NULL,
		[railway_water_volume] real NULL,
		[railway_volume15] real NULL,
		[railway_dens15] real NULL,
		[railway_mass15] real NULL,

		[start_datetime] [datetime] NULL,
		[start_level] real NULL,
		[start_volume] real NULL,
		[start_dens] real NULL,
		[start_mass] real NULL,
		[start_temp] real NULL,
		[start_water_level] real NULL,

		[stop_datetime] [datetime] NULL,
		[stop_level] real NULL,
		[stop_volume] real NULL,
		[stop_dens] real NULL,
		[stop_mass] real NULL,
		[stop_temp] real NULL,
		[stop_water_level] real NULL,

	 CONSTRAINT [PK_ReceivingFuel_KGD] PRIMARY KEY CLUSTERED 
	(
		[id] ASC
	)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
	) ON [PRIMARY]