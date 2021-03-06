USE [KRR-PA-CNT-Oil]
GO
/****** Object:  Table [dbo].[Oil_Transfer]    Script Date: 14.08.2019 9:38:03 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Oil_Transfer](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[dt] [datetime] NOT NULL,
	[OilType] [nvarchar](50) NOT NULL,
	[out_tank] [nvarchar](10) NOT NULL,
	[out_dv] [real] NULL,
	[out_dens] [real] NULL,
	[out_dm_calc] [real] NULL,
	[in_tank] [nvarchar](10) NOT NULL,
	[in_dv] [real] NULL,
	[in_dens] [real] NULL,
	[in_dm_calc] [real] NULL,
	[delta_v] [real] NULL,
	[delta_m_calc] [real] NULL,
 CONSTRAINT [PK_Oil_Transfer] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
