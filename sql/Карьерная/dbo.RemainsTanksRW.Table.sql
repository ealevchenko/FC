USE [ASUTSK]
GO
/****** Object:  Table [dbo].[RemainsTanksRW]    Script Date: 07.07.2019 23:36:13 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[RemainsTanksRW](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[date] [datetime] NULL,
	[level] [float] NULL,
	[volume] [float] NULL,
	[mass] [float] NULL,
	[dens_avg] [float] NULL,
	[temp_avg] [float] NULL,
	[water] [float] NULL,
	[volume15] [float] NULL,
	[mass15] [float] NULL,
	[dens15] [float] NULL,
 CONSTRAINT [PK_RemainsTanksRW] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
SET IDENTITY_INSERT [dbo].[RemainsTanksRW] ON 

INSERT [dbo].[RemainsTanksRW] ([id], [date], [level], [volume], [mass], [dens_avg], [temp_avg], [water], [volume15], [mass15], [dens15]) VALUES (1, CAST(N'2019-07-07T12:00:00.000' AS DateTime), 3066.86, 174.074, 144.638, 830.9, 26.715, 11.5, 175.79192472475219, 147.50702105666514, 839.10009681972372)
INSERT [dbo].[RemainsTanksRW] ([id], [date], [level], [volume], [mass], [dens_avg], [temp_avg], [water], [volume15], [mass15], [dens15]) VALUES (2, CAST(N'2019-07-07T13:00:00.000' AS DateTime), 3931.99, 223.321, 185.446, 830.4, 27.418, 11.5, 225.65681382021188, 189.34536575846383, 839.08552351236085)
INSERT [dbo].[RemainsTanksRW] ([id], [date], [level], [volume], [mass], [dens_avg], [temp_avg], [water], [volume15], [mass15], [dens15]) VALUES (3, CAST(N'2019-07-07T14:00:00.000' AS DateTime), 3939.16, 223.73, 185.606, 829.6, 27.875, 11.5, 226.15774799018206, 189.65638251142843, 838.6021889449562)
INSERT [dbo].[RemainsTanksRW] ([id], [date], [level], [volume], [mass], [dens_avg], [temp_avg], [water], [volume15], [mass15], [dens15]) VALUES (4, CAST(N'2019-07-07T15:00:00.000' AS DateTime), 3385.31, 192.207, 159.398, 829.3, 27.995, 11.5, 194.31276902533384, 162.90902576221765, 838.38559132970886)
INSERT [dbo].[RemainsTanksRW] ([id], [date], [level], [volume], [mass], [dens_avg], [temp_avg], [water], [volume15], [mass15], [dens15]) VALUES (5, CAST(N'2019-07-07T16:00:00.000' AS DateTime), 3385.3, 192.207, 159.378, 829.2, 28.112, 11.5, 194.3317262610332, 162.9211662653131, 838.36627914513383)
INSERT [dbo].[RemainsTanksRW] ([id], [date], [level], [volume], [mass], [dens_avg], [temp_avg], [water], [volume15], [mass15], [dens15]) VALUES (6, CAST(N'2019-07-07T17:00:00.000' AS DateTime), 3385.32, 192.208, 159.36, 829.1, 28.223, 11.5, 194.35073959356228, 162.93254856658496, 838.34282754631693)
INSERT [dbo].[RemainsTanksRW] ([id], [date], [level], [volume], [mass], [dens_avg], [temp_avg], [water], [volume15], [mass15], [dens15]) VALUES (7, CAST(N'2019-07-07T18:00:00.000' AS DateTime), 3385.36, 192.21, 159.362, 829.1, 28.355, 11.5, 194.37376988603751, 162.96946965392945, 838.43344577552523)
INSERT [dbo].[RemainsTanksRW] ([id], [date], [level], [volume], [mass], [dens_avg], [temp_avg], [water], [volume15], [mass15], [dens15]) VALUES (8, CAST(N'2019-07-07T19:00:00.000' AS DateTime), 3385.5, 192.218, 159.349, 829, 28.465, 11.5, 194.39970136240092, 162.98651106887209, 838.40926671503371)
INSERT [dbo].[RemainsTanksRW] ([id], [date], [level], [volume], [mass], [dens_avg], [temp_avg], [water], [volume15], [mass15], [dens15]) VALUES (9, CAST(N'2019-07-07T20:00:00.000' AS DateTime), 3359.66, 190.747, 158.129, 829, 28.495, 11.5, 192.91674183181155, 161.74715530148583, 838.42985199542727)
INSERT [dbo].[RemainsTanksRW] ([id], [date], [level], [volume], [mass], [dens_avg], [temp_avg], [water], [volume15], [mass15], [dens15]) VALUES (10, CAST(N'2019-07-07T21:00:00.000' AS DateTime), 2923.72, 165.923, 137.501, 828.7, 28.775, 11.5, 167.84970763046542, 140.71225586686617, 838.3229131185351)
INSERT [dbo].[RemainsTanksRW] ([id], [date], [level], [volume], [mass], [dens_avg], [temp_avg], [water], [volume15], [mass15], [dens15]) VALUES (11, CAST(N'2019-07-07T22:00:00.000' AS DateTime), 2923.56, 165.914, 137.493, 828.7, 28.745, 11.5, 167.836484407356, 140.69771780787312, 838.30234114285679)
SET IDENTITY_INSERT [dbo].[RemainsTanksRW] OFF
