USE [KRR-PA-CNT-Oil]
GO

/****** Object:  Table [dbo].[Remains_Benzene]    Script Date: 25.04.2021 21:25:26 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[Remains_Benzene](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[tank] [int] NOT NULL,
	[dt] [datetime] NULL,
	[dens] [float] NULL,
	[dens15] [float] NULL,
	[level] [float] NULL,
	[mass] [float] NULL,
	[volume] [float] NULL,
	[volume15] [float] NULL,
	[temp] [float] NULL,
	[total_level] [float] NULL,
	[water_level] [float] NULL,
 CONSTRAINT [PK_Remains_Benzene] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO


