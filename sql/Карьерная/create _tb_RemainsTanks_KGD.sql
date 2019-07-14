		CREATE TABLE [KRR-PA-CNT-Oil].[dbo].[RemainsTanks_KGD](
			[id] [int] IDENTITY(1,1) NOT NULL,
			[date] [datetime] NULL,
			[level] float NULL,
			[volume] float NULL,
			[mass] float NULL,
			[dens_avg] float NULL,
			[temp_avg] float NULL,
			[water] float NULL,
			[volume15] float NULL,
			[mass15] float NULL,
			[dens15] float NULL,
		 CONSTRAINT [PK_RemainsTanks_KGD] PRIMARY KEY CLUSTERED 
		(
			[id] ASC
		)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
		) ON [PRIMARY]