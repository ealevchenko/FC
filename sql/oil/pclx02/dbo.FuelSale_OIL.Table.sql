USE [KRR-PA-CNT-Oil]
GO
/****** Object:  Table [dbo].[FuelSale_OIL]    Script Date: 14.08.2019 9:38:02 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[FuelSale_OIL](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[DateCreated] [datetime] NOT NULL,
	[OperatorCreated] [nchar](50) NOT NULL,
	[OilType] [nchar](50) NOT NULL,
	[TankNo] [nchar](10) NOT NULL,
	[TargetMass] [float] NOT NULL,
	[TargetVolume] [float] NOT NULL,
	[CreatedLevel] [float] NOT NULL,
	[CreatedVolume] [float] NOT NULL,
	[CreatedMass] [float] NOT NULL,
	[CreatedTemp] [float] NOT NULL,
	[CreatedDens] [float] NOT NULL,
	[CreatedWater] [float] NOT NULL,
	[OutcomeType] [int] NOT NULL,
	[Receiver] [nchar](100) NOT NULL,
	[DateStarted] [datetime] NULL,
	[OperatorStarted] [nchar](50) NULL,
	[Pump_Used] [nvarchar](5) NULL,
	[CounterStart] [bigint] NULL,
	[LevelStart] [float] NULL,
	[VolumeStart] [float] NULL,
	[MassStart] [float] NULL,
	[TempStart] [float] NULL,
	[DensStart] [float] NULL,
	[WaterStart] [float] NULL,
	[DateStop] [datetime] NULL,
	[CounterStop] [bigint] NULL,
	[LevelStop] [float] NULL,
	[VolumeStop] [float] NULL,
	[MassStop] [float] NULL,
	[TempStop] [float] NULL,
	[DensStop] [float] NULL,
	[WaterStop] [float] NULL,
	[FLAG_R] [int] NULL,
	[LOGIN_EXP] [nvarchar](50) NULL,
	[N_POST] [nvarchar](50) NULL,
	[TRANSP_FAKT] [nvarchar](50) NULL,
	[N_TREB] [nvarchar](50) NULL,
	[LGORT] [nvarchar](50) NULL,
	[WERKS] [nvarchar](50) NULL,
	[sended] [int] NOT NULL,
	[OZM_TREB] [nvarchar](18) NULL,
	[OZM_BAK] [nvarchar](18) NULL,
	[N_POS] [int] NULL,
 CONSTRAINT [PK_Outcomes] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
