use [KRR-PA-CNT-Oil]

	CREATE TABLE [dbo].[Daily_Report_KGD](
		[id] [int] IDENTITY(1,1) NOT NULL,
		[type] [nvarchar](10) NULL,
		[date_start] [datetime] NULL,
		[date_stop] [datetime] NULL,
		[volume_start] [int] NULL,
		[mass_start] [float] NULL,
		[dens_start] [float] NULL,
		[temp_start] [float] NULL,
		[volume15_start] [int] NULL,
		[mass15_start] [float] NULL,
		[dens15_start] [float] NULL,
		[volume_coming] [int] NULL,
		[mass_coming] [float] NULL,
		[dens_coming] [float] NULL,
		[temp_coming] [float] NULL,
		[volume15_coming] [int] NULL,
		[mass15_coming] [float] NULL,
		[dens15_coming] [float] NULL,
		[volume_consumption] [int] NULL,
		[mass_consumption] [float] NULL,
		[dens_consumption] [float] NULL,
		[temp_consumption] [float] NULL,
		[volume15_consumption] [int] NULL,
		[mass15_consumption] [float] NULL,
		[dens15_consumption] [float] NULL,
		[volume_stop] [int] NULL,
		[mass_stop] [float] NULL,
		[dens_stop] [float] NULL,
		[temp_stop] [float] NULL,
		[volume15_stop] [int] NULL,
		[mass15_stop] [float] NULL,
		[dens15_stop] [float] NULL,
		[send] [datetime] NULL,
	 CONSTRAINT [PK_Daily_Report_KGD] PRIMARY KEY CLUSTERED 
	(
		[id] ASC
	)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
	) ON [PRIMARY]	