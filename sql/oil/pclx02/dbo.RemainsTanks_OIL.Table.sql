USE [KRR-PA-CNT-Oil]
GO
/****** Object:  Table [dbo].[RemainsTanks_OIL]    Script Date: 14.08.2019 9:38:03 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[RemainsTanks_OIL](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[Timestamp] [datetime] NULL,
	[bak] [int] NULL,
	[Temp] [float] NULL,
	[Volume] [float] NULL,
	[Water] [float] NULL,
	[Dens] [float] NULL,
	[Level] [float] NULL,
	[Mass] [float] NULL,
	[oil_type] [nvarchar](50) NULL,
 CONSTRAINT [PK_RemainsTanks_OIL] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
