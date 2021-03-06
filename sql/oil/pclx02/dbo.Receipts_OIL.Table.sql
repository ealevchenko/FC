USE [KRR-PA-CNT-Oil]
GO
/****** Object:  Table [dbo].[Receipts_OIL]    Script Date: 14.08.2019 9:38:03 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Receipts_OIL](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[DateCreated] [datetime] NOT NULL,
	[OperatorCreated] [nvarchar](50) NOT NULL,
	[OilType] [nvarchar](50) NOT NULL,
	[TankNo] [nvarchar](10) NOT NULL,
	[CreatedLevel] [float] NOT NULL,
	[CreatedVolume] [float] NOT NULL,
	[CreatedMass] [float] NOT NULL,
	[CreatedTemp] [float] NOT NULL,
	[CreatedDens] [float] NOT NULL,
	[CreatedWater] [float] NOT NULL,
	[OrderId] [nvarchar](50) NOT NULL,
	[DateStarted] [datetime] NULL,
	[OperatorStarted] [nvarchar](50) NULL,
	[LevelStart] [float] NULL,
	[VolumeStart] [float] NULL,
	[MassStart] [float] NULL,
	[TempStart] [float] NULL,
	[DensStart] [float] NULL,
	[WaterStart] [float] NULL,
	[DateStop] [datetime] NULL,
	[LevelStop] [float] NULL,
	[VolumeStop] [float] NULL,
	[MassStop] [float] NULL,
	[TempStop] [float] NULL,
	[DensStop] [decimal](4, 1) NULL,
	[WaterStop] [float] NULL,
 CONSTRAINT [PK_Receipts_OIL] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
