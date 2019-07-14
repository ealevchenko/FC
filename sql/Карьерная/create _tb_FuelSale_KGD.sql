
	CREATE TABLE [KRR-PA-CNT-Oil].[dbo].[FuelSale_KGD](
		[id] [int] IDENTITY(1,1) NOT NULL,
		[operator_name] [nvarchar](50) NOT NULL,
		[smena_num] [int] NULL,
		[smena_datetime] [datetime] NULL,
		[num] [int] NOT NULL,
		[fuel_type] [int] NOT NULL,
		[tank_num] [int] NOT NULL,
		[number_card] [nvarchar](20) NOT NULL,
		[id_card] [int] NULL,
		[dose] [numeric](9, 3) NULL,
		[passage] [char](1) NOT NULL,
		[volume] [int] NULL,
		[mass] [numeric](10, 3) NULL,
		[dens] [numeric](9, 5) NULL,
		[temp] [numeric](3, 1) NULL,
		[volume15] [int] NULL,
		[mass15] [numeric](10, 3) NULL,
		[dens15] [numeric](9, 5) NULL,

		[start_datetime] [datetime] NULL,
		[start_level] [numeric](7, 1) NULL,
		[start_volume] [numeric](9, 1) NULL,
		[start_dens] [numeric](9, 5) NULL,
		[start_mass] [numeric](9, 1) NULL,
		[start_temp] [numeric](3, 1) NULL,
		[start_water_level] [numeric](6, 1) NULL,
		[start_counter] [int] NULL,

		[stop_datetime] [datetime] NULL,
		[stop_level] [numeric](7, 1) NULL,
		[stop_volume] [numeric](9, 1) NULL,
		[stop_density] [numeric](9, 5) NULL,
		[stop_mass] [numeric](9, 1) NULL,
		[stop_temp] [numeric](3, 1) NULL,
		[stop_water_level] [numeric](6, 1) NULL,
		[stop_counter] [int] NULL,
		[auto_number] [nvarchar](20) NULL
	 CONSTRAINT [PK_FuelSale_KGD] PRIMARY KEY CLUSTERED 
	(
		[id] ASC
	)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
	) ON [PRIMARY]