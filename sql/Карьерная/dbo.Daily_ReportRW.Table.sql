USE [ASUTSK]
GO
/****** Object:  Table [dbo].[Daily_ReportRW]    Script Date: 10.07.2019 21:12:08 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Daily_ReportRW](
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
 CONSTRAINT [PK_Daily_Report_15] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
SET IDENTITY_INSERT [dbo].[Daily_ReportRW] ON 

INSERT [dbo].[Daily_ReportRW] ([id], [type], [date_start], [date_stop], [volume_start], [mass_start], [dens_start], [temp_start], [volume15_start], [mass15_start], [dens15_start], [volume_coming], [mass_coming], [dens_coming], [temp_coming], [volume15_coming], [mass15_coming], [dens15_coming], [volume_consumption], [mass_consumption], [dens_consumption], [temp_consumption], [volume15_consumption], [mass15_consumption], [dens15_consumption], [volume_stop], [mass_stop], [dens_stop], [temp_stop], [volume15_stop], [mass15_stop], [dens15_stop], [send]) VALUES (1, N'107000024', CAST(N'2019-07-01T00:00:00.000' AS DateTime), CAST(N'2019-07-02T00:00:00.000' AS DateTime), 227, 188.557, 829.9, 26.002, 229, 192.07772315246839, 837.61113011432951, 59882, 49374, 824.52155906616338, 28, 60543, 50470.215225307831, 833.62593900711613, 63490, 52634.620888888887, 829.02222222222224, 26.326277777777776, 64097, 53646.602581878062, 836.95964837477663, 163, 135.084, 828, 27.767, 164, 138.01368657277055, 836.9330026316444, NULL)
INSERT [dbo].[Daily_ReportRW] ([id], [type], [date_start], [date_stop], [volume_start], [mass_start], [dens_start], [temp_start], [volume15_start], [mass15_start], [dens15_start], [volume_coming], [mass_coming], [dens_coming], [temp_coming], [volume15_coming], [mass15_coming], [dens15_coming], [volume_consumption], [mass_consumption], [dens_consumption], [temp_consumption], [volume15_consumption], [mass15_consumption], [dens15_consumption], [volume_stop], [mass_stop], [dens_stop], [temp_stop], [volume15_stop], [mass15_stop], [dens15_stop], [send]) VALUES (2, N'107000024', CAST(N'2019-07-02T00:00:00.000' AS DateTime), CAST(N'2019-07-03T00:00:00.000' AS DateTime), 163, 135.084, 828, 27.767, 164, 138.01368657277055, 836.9330026316444, 141064, 116519, 826.00096410140077, 28, 142618, 119100.37345370569, 835.1005725343623, 81000, 66982.95, 826.95, 28.5837, 81930, 68530.147030756256, 836.44754095882149, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL)
INSERT [dbo].[Daily_ReportRW] ([id], [type], [date_start], [date_stop], [volume_start], [mass_start], [dens_start], [temp_start], [volume15_start], [mass15_start], [dens15_start], [volume_coming], [mass_coming], [dens_coming], [temp_coming], [volume15_coming], [mass15_coming], [dens15_coming], [volume_consumption], [mass_consumption], [dens_consumption], [temp_consumption], [volume15_consumption], [mass15_consumption], [dens15_consumption], [volume_stop], [mass_stop], [dens_stop], [temp_stop], [volume15_stop], [mass15_stop], [dens15_stop], [send]) VALUES (3, N'107000024', CAST(N'2019-07-03T00:00:00.000' AS DateTime), CAST(N'2019-07-04T00:00:00.000' AS DateTime), NULL, NULL, NULL, NULL, NULL, NULL, NULL, 70705, 58402, 825.99533272045824, 28, 71483, 59695.092974605446, 835.09495928550075, 79800, 65909.812500000015, 825.93750000000011, 29.490687500000003, 80778, 67535.292627979376, 836.06046978112079, 200, 165.898, 825.8, 29.715, 203, 170.05316415784264, 836.07707397263266, NULL)
INSERT [dbo].[Daily_ReportRW] ([id], [type], [date_start], [date_stop], [volume_start], [mass_start], [dens_start], [temp_start], [volume15_start], [mass15_start], [dens15_start], [volume_coming], [mass_coming], [dens_coming], [temp_coming], [volume15_coming], [mass15_coming], [dens15_coming], [volume_consumption], [mass_consumption], [dens_consumption], [temp_consumption], [volume15_consumption], [mass15_consumption], [dens15_consumption], [volume_stop], [mass_stop], [dens_stop], [temp_stop], [volume15_stop], [mass15_stop], [dens15_stop], [send]) VALUES (4, N'107000024', CAST(N'2019-07-04T00:00:00.000' AS DateTime), CAST(N'2019-07-05T00:00:00.000' AS DateTime), 200, 165.898, 825.8, 29.715, 203, 170.05316415784264, 836.07707397263266, 145606, 120271, 826.00304932489041, 28, 147210, 122935.46126016506, 835.10265104384928, 101559, 83922.644906250018, 826.34375000000011, 28.682125000000003, 102734, 85876.4688843135, 835.91088524065538, 174, 144.56, 826.1, 28.92, 177, 147.98586668842361, 835.83119278391621, NULL)
INSERT [dbo].[Daily_ReportRW] ([id], [type], [date_start], [date_stop], [volume_start], [mass_start], [dens_start], [temp_start], [volume15_start], [mass15_start], [dens15_start], [volume_coming], [mass_coming], [dens_coming], [temp_coming], [volume15_coming], [mass15_coming], [dens15_coming], [volume_consumption], [mass_consumption], [dens_consumption], [temp_consumption], [volume15_consumption], [mass15_consumption], [dens15_consumption], [volume_stop], [mass_stop], [dens_stop], [temp_stop], [volume15_stop], [mass15_stop], [dens15_stop], [send]) VALUES (5, N'107000024', CAST(N'2019-07-05T00:00:00.000' AS DateTime), CAST(N'2019-07-06T00:00:00.000' AS DateTime), 174, 144.56, 826.1, 28.92, 177, 147.98586668842361, 835.83119278391621, 69894, 57733, 826.00795490313908, 28, 70663, 59011.204157475557, 835.10754082724418, 89050, 73605.761666666673, 826.56666666666672, 28.116166666666668, 90038, 75248.74686089548, 835.74431752033013, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL)
INSERT [dbo].[Daily_ReportRW] ([id], [type], [date_start], [date_stop], [volume_start], [mass_start], [dens_start], [temp_start], [volume15_start], [mass15_start], [dens15_start], [volume_coming], [mass_coming], [dens_coming], [temp_coming], [volume15_coming], [mass15_coming], [dens15_coming], [volume_consumption], [mass_consumption], [dens_consumption], [temp_consumption], [volume15_consumption], [mass15_consumption], [dens15_consumption], [volume_stop], [mass_stop], [dens_stop], [temp_stop], [volume15_stop], [mass15_stop], [dens15_stop], [send]) VALUES (6, N'107000024', CAST(N'2019-07-06T00:00:00.000' AS DateTime), CAST(N'2019-07-07T00:00:00.000' AS DateTime), NULL, NULL, NULL, NULL, NULL, NULL, NULL, 76121, 63637, 835.99795063123179, 25, 76758, 64707.074267299904, 843.00104571901181, 33700, 27877.482500000002, 827.225, 27.4495, 34055, 28468.003350274874, 835.9419571362464, 145, 121.053, 829.9, 27.532, 147, 123.62401669870675, 838.66546396730257, NULL)
INSERT [dbo].[Daily_ReportRW] ([id], [type], [date_start], [date_stop], [volume_start], [mass_start], [dens_start], [temp_start], [volume15_start], [mass15_start], [dens15_start], [volume_coming], [mass_coming], [dens_coming], [temp_coming], [volume15_coming], [mass15_coming], [dens15_coming], [volume_consumption], [mass_consumption], [dens_consumption], [temp_consumption], [volume15_consumption], [mass15_consumption], [dens15_consumption], [volume_stop], [mass_stop], [dens_stop], [temp_stop], [volume15_stop], [mass15_stop], [dens15_stop], [send]) VALUES (7, N'107000024', CAST(N'2019-07-07T00:00:00.000' AS DateTime), CAST(N'2019-07-08T00:00:00.000' AS DateTime), 145, 121.053, 829.9, 27.532, 147, 123.62401669870675, 838.66546396730257, 132850, 110266, 830.00376364320664, 24, 133862, 111952.61113254646, 836.32854082970857, 8000, 6648, 831, 26.66075, 8078, 6778.7540984668713, 839.162428629224, 165, 137.504, 828.9, 28.564, 167, 140.66695464991543, 838.37752415399109, NULL)
INSERT [dbo].[Daily_ReportRW] ([id], [type], [date_start], [date_stop], [volume_start], [mass_start], [dens_start], [temp_start], [volume15_start], [mass15_start], [dens15_start], [volume_coming], [mass_coming], [dens_coming], [temp_coming], [volume15_coming], [mass15_coming], [dens15_coming], [volume_consumption], [mass_consumption], [dens_consumption], [temp_consumption], [volume15_consumption], [mass15_consumption], [dens15_consumption], [volume_stop], [mass_stop], [dens_stop], [temp_stop], [volume15_stop], [mass15_stop], [dens15_stop], [send]) VALUES (8, N'107000024', CAST(N'2019-07-08T00:00:00.000' AS DateTime), CAST(N'2019-07-09T00:00:00.000' AS DateTime), 165, 137.504, 828.9, 28.564, 167, 140.66695464991543, 838.37752415399109, 0, 0, 0, 0, 0, 0, 0, 6000, 4976.4000000000005, 829.4, 25.695, 6054, 5066.5949779246566, 836.90039278570475, 72, 60.0435, 829.9, 25.02, 72, 61.065382247107209, 836.93215565866331, NULL)
INSERT [dbo].[Daily_ReportRW] ([id], [type], [date_start], [date_stop], [volume_start], [mass_start], [dens_start], [temp_start], [volume15_start], [mass15_start], [dens15_start], [volume_coming], [mass_coming], [dens_coming], [temp_coming], [volume15_coming], [mass15_coming], [dens15_coming], [volume_consumption], [mass_consumption], [dens_consumption], [temp_consumption], [volume15_consumption], [mass15_consumption], [dens15_consumption], [volume_stop], [mass_stop], [dens_stop], [temp_stop], [volume15_stop], [mass15_stop], [dens15_stop], [send]) VALUES (9, N'107000024', CAST(N'2019-07-09T00:00:00.000' AS DateTime), CAST(N'2019-07-10T00:00:00.000' AS DateTime), 72, 60.0435, 829.9, 25.02, 72, 61.065382247107209, 836.93215565866331, 216571, 179105, 827.00361544251075, 25, 218410, 182160.32319974969, 834.0292257669048, 10500, 8701.875, 828.75, 23.8295, 10578, 8832.19840453101, 834.95919876451217, 183, 152.19, 828.9, 23.614, 184, 154.423276173823, 834.95909334865, NULL)
SET IDENTITY_INSERT [dbo].[Daily_ReportRW] OFF
