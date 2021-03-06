USE [ASUCSM]
GO
/****** Object:  Table [dbo].[TypeOil_Tanks]    Script Date: 11.08.2019 21:51:44 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[TypeOil_Tanks](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[tank_num] [int] NOT NULL,
	[datetime] [datetime] NOT NULL,
	[inventory_number] [nvarchar](50) NOT NULL,
 CONSTRAINT [PK_TypeOil_Tanks] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
SET IDENTITY_INSERT [dbo].[TypeOil_Tanks] ON 

INSERT [dbo].[TypeOil_Tanks] ([id], [tank_num], [datetime], [inventory_number]) VALUES (1, 132, CAST(N'2018-05-23T08:39:51.000' AS DateTime), N'310008401')
INSERT [dbo].[TypeOil_Tanks] ([id], [tank_num], [datetime], [inventory_number]) VALUES (2, 132, CAST(N'2018-02-15T07:54:52.000' AS DateTime), N'310008401')
INSERT [dbo].[TypeOil_Tanks] ([id], [tank_num], [datetime], [inventory_number]) VALUES (3, 132, CAST(N'2017-12-27T12:22:15.000' AS DateTime), N'310008400')
INSERT [dbo].[TypeOil_Tanks] ([id], [tank_num], [datetime], [inventory_number]) VALUES (4, 135, CAST(N'2017-12-21T11:30:55.000' AS DateTime), N'310008400')
INSERT [dbo].[TypeOil_Tanks] ([id], [tank_num], [datetime], [inventory_number]) VALUES (5, 138, CAST(N'2017-12-26T08:47:43.000' AS DateTime), N'310008401')
INSERT [dbo].[TypeOil_Tanks] ([id], [tank_num], [datetime], [inventory_number]) VALUES (6, 139, CAST(N'2018-05-07T08:47:48.000' AS DateTime), N'310008400')
INSERT [dbo].[TypeOil_Tanks] ([id], [tank_num], [datetime], [inventory_number]) VALUES (7, 141, CAST(N'2019-07-19T10:05:42.000' AS DateTime), N'310008401')
INSERT [dbo].[TypeOil_Tanks] ([id], [tank_num], [datetime], [inventory_number]) VALUES (8, 141, CAST(N'2017-11-27T13:16:31.000' AS DateTime), N'310008401')
INSERT [dbo].[TypeOil_Tanks] ([id], [tank_num], [datetime], [inventory_number]) VALUES (9, 142, CAST(N'2018-01-10T12:20:46.000' AS DateTime), N'310008400')
INSERT [dbo].[TypeOil_Tanks] ([id], [tank_num], [datetime], [inventory_number]) VALUES (10, 142, CAST(N'2017-12-21T08:53:40.000' AS DateTime), N'310008399')
INSERT [dbo].[TypeOil_Tanks] ([id], [tank_num], [datetime], [inventory_number]) VALUES (11, 144, CAST(N'2018-01-01T00:00:00.000' AS DateTime), N'310008400')
INSERT [dbo].[TypeOil_Tanks] ([id], [tank_num], [datetime], [inventory_number]) VALUES (12, 225, CAST(N'2019-05-30T11:20:10.000' AS DateTime), N'310008438')
INSERT [dbo].[TypeOil_Tanks] ([id], [tank_num], [datetime], [inventory_number]) VALUES (13, 225, CAST(N'2019-02-12T19:57:33.000' AS DateTime), N'310008413')
INSERT [dbo].[TypeOil_Tanks] ([id], [tank_num], [datetime], [inventory_number]) VALUES (14, 225, CAST(N'2017-12-06T10:32:57.000' AS DateTime), N'310008438')
INSERT [dbo].[TypeOil_Tanks] ([id], [tank_num], [datetime], [inventory_number]) VALUES (15, 228, CAST(N'2019-08-01T00:00:00.000' AS DateTime), N'310008438')
INSERT [dbo].[TypeOil_Tanks] ([id], [tank_num], [datetime], [inventory_number]) VALUES (16, 228, CAST(N'2019-06-12T11:57:43.000' AS DateTime), N'310008401')
INSERT [dbo].[TypeOil_Tanks] ([id], [tank_num], [datetime], [inventory_number]) VALUES (17, 228, CAST(N'2018-02-01T08:09:23.000' AS DateTime), N'310008438')
INSERT [dbo].[TypeOil_Tanks] ([id], [tank_num], [datetime], [inventory_number]) VALUES (18, 229, CAST(N'2019-07-22T13:18:45.000' AS DateTime), N'310008407')
INSERT [dbo].[TypeOil_Tanks] ([id], [tank_num], [datetime], [inventory_number]) VALUES (19, 229, CAST(N'2019-07-08T13:22:54.000' AS DateTime), N'310008407')
INSERT [dbo].[TypeOil_Tanks] ([id], [tank_num], [datetime], [inventory_number]) VALUES (20, 229, CAST(N'2018-05-10T14:25:16.000' AS DateTime), N'310008400')
INSERT [dbo].[TypeOil_Tanks] ([id], [tank_num], [datetime], [inventory_number]) VALUES (21, 231, CAST(N'2019-07-24T08:35:52.000' AS DateTime), N'310008400')
INSERT [dbo].[TypeOil_Tanks] ([id], [tank_num], [datetime], [inventory_number]) VALUES (22, 231, CAST(N'2019-02-20T12:37:59.000' AS DateTime), N'310008400')
INSERT [dbo].[TypeOil_Tanks] ([id], [tank_num], [datetime], [inventory_number]) VALUES (23, 231, CAST(N'2019-02-12T09:04:06.000' AS DateTime), N'310008413')
INSERT [dbo].[TypeOil_Tanks] ([id], [tank_num], [datetime], [inventory_number]) VALUES (24, 231, CAST(N'2018-09-17T08:15:47.000' AS DateTime), N'310008400')
INSERT [dbo].[TypeOil_Tanks] ([id], [tank_num], [datetime], [inventory_number]) VALUES (25, 231, CAST(N'2017-12-22T08:26:50.000' AS DateTime), N'310008401')
INSERT [dbo].[TypeOil_Tanks] ([id], [tank_num], [datetime], [inventory_number]) VALUES (26, 301, CAST(N'2018-10-22T11:06:31.000' AS DateTime), N'310008413')
INSERT [dbo].[TypeOil_Tanks] ([id], [tank_num], [datetime], [inventory_number]) VALUES (27, 304, CAST(N'2017-12-26T10:27:13.000' AS DateTime), N'310008413')
INSERT [dbo].[TypeOil_Tanks] ([id], [tank_num], [datetime], [inventory_number]) VALUES (28, 307, CAST(N'2018-03-21T08:28:20.000' AS DateTime), N'310008413')
INSERT [dbo].[TypeOil_Tanks] ([id], [tank_num], [datetime], [inventory_number]) VALUES (29, 310, CAST(N'2018-01-12T08:08:35.000' AS DateTime), N'310008413')
INSERT [dbo].[TypeOil_Tanks] ([id], [tank_num], [datetime], [inventory_number]) VALUES (30, 313, CAST(N'2017-12-05T13:26:32.000' AS DateTime), N'310008413')
INSERT [dbo].[TypeOil_Tanks] ([id], [tank_num], [datetime], [inventory_number]) VALUES (31, 316, CAST(N'2017-12-11T10:38:33.000' AS DateTime), N'310008413')
INSERT [dbo].[TypeOil_Tanks] ([id], [tank_num], [datetime], [inventory_number]) VALUES (32, 319, CAST(N'2019-07-24T10:36:40.000' AS DateTime), N'310008407')
INSERT [dbo].[TypeOil_Tanks] ([id], [tank_num], [datetime], [inventory_number]) VALUES (33, 319, CAST(N'2019-05-23T07:59:36.000' AS DateTime), N'310008407')
INSERT [dbo].[TypeOil_Tanks] ([id], [tank_num], [datetime], [inventory_number]) VALUES (34, 319, CAST(N'2019-01-29T10:58:16.000' AS DateTime), N'310008413')
INSERT [dbo].[TypeOil_Tanks] ([id], [tank_num], [datetime], [inventory_number]) VALUES (35, 319, CAST(N'2019-01-03T09:35:00.000' AS DateTime), N'310038031')
INSERT [dbo].[TypeOil_Tanks] ([id], [tank_num], [datetime], [inventory_number]) VALUES (36, 319, CAST(N'2017-12-29T09:37:27.000' AS DateTime), N'310008413')
INSERT [dbo].[TypeOil_Tanks] ([id], [tank_num], [datetime], [inventory_number]) VALUES (37, 322, CAST(N'2019-05-21T11:11:57.000' AS DateTime), N'310008413')
INSERT [dbo].[TypeOil_Tanks] ([id], [tank_num], [datetime], [inventory_number]) VALUES (38, 322, CAST(N'2018-12-26T19:39:33.000' AS DateTime), N'310008438')
INSERT [dbo].[TypeOil_Tanks] ([id], [tank_num], [datetime], [inventory_number]) VALUES (39, 322, CAST(N'2017-11-28T13:32:14.000' AS DateTime), N'310008413')
INSERT [dbo].[TypeOil_Tanks] ([id], [tank_num], [datetime], [inventory_number]) VALUES (40, 420, CAST(N'2019-07-30T12:43:22.000' AS DateTime), N'310008398')
INSERT [dbo].[TypeOil_Tanks] ([id], [tank_num], [datetime], [inventory_number]) VALUES (41, 420, CAST(N'2017-12-22T13:23:28.000' AS DateTime), N'310008398')
INSERT [dbo].[TypeOil_Tanks] ([id], [tank_num], [datetime], [inventory_number]) VALUES (42, 421, CAST(N'2019-07-30T10:41:52.000' AS DateTime), N'310008399')
INSERT [dbo].[TypeOil_Tanks] ([id], [tank_num], [datetime], [inventory_number]) VALUES (43, 421, CAST(N'2018-01-03T11:40:19.000' AS DateTime), N'310008399')
INSERT [dbo].[TypeOil_Tanks] ([id], [tank_num], [datetime], [inventory_number]) VALUES (44, 423, CAST(N'2018-02-07T08:07:41.000' AS DateTime), N'310008399')
INSERT [dbo].[TypeOil_Tanks] ([id], [tank_num], [datetime], [inventory_number]) VALUES (45, 424, CAST(N'2018-04-05T11:52:26.000' AS DateTime), N'310008398')
INSERT [dbo].[TypeOil_Tanks] ([id], [tank_num], [datetime], [inventory_number]) VALUES (46, 503, CAST(N'2018-03-16T11:50:48.000' AS DateTime), N'310008411')
INSERT [dbo].[TypeOil_Tanks] ([id], [tank_num], [datetime], [inventory_number]) VALUES (47, 506, CAST(N'2018-03-09T09:30:49.000' AS DateTime), N'310008411')
INSERT [dbo].[TypeOil_Tanks] ([id], [tank_num], [datetime], [inventory_number]) VALUES (48, 509, CAST(N'2018-01-01T00:00:00.000' AS DateTime), N'310008412')
INSERT [dbo].[TypeOil_Tanks] ([id], [tank_num], [datetime], [inventory_number]) VALUES (49, 512, CAST(N'2018-01-23T08:36:00.000' AS DateTime), N'310008412')
INSERT [dbo].[TypeOil_Tanks] ([id], [tank_num], [datetime], [inventory_number]) VALUES (50, 515, CAST(N'2017-11-27T10:30:55.000' AS DateTime), N'310008412')
INSERT [dbo].[TypeOil_Tanks] ([id], [tank_num], [datetime], [inventory_number]) VALUES (51, 518, CAST(N'2018-01-01T00:00:00.000' AS DateTime), N'310008411')
INSERT [dbo].[TypeOil_Tanks] ([id], [tank_num], [datetime], [inventory_number]) VALUES (52, 9189, CAST(N'2017-12-21T10:17:39.000' AS DateTime), N'310008401')
INSERT [dbo].[TypeOil_Tanks] ([id], [tank_num], [datetime], [inventory_number]) VALUES (53, 9190, CAST(N'2018-02-21T12:58:13.000' AS DateTime), N'310008398')
INSERT [dbo].[TypeOil_Tanks] ([id], [tank_num], [datetime], [inventory_number]) VALUES (54, 9191, CAST(N'2018-02-21T14:06:52.000' AS DateTime), N'310008399')
INSERT [dbo].[TypeOil_Tanks] ([id], [tank_num], [datetime], [inventory_number]) VALUES (55, 9192, CAST(N'2018-02-23T13:32:59.000' AS DateTime), N'310008400')
INSERT [dbo].[TypeOil_Tanks] ([id], [tank_num], [datetime], [inventory_number]) VALUES (56, 9193, CAST(N'2018-06-08T09:40:46.000' AS DateTime), N'310008412')
INSERT [dbo].[TypeOil_Tanks] ([id], [tank_num], [datetime], [inventory_number]) VALUES (57, 9193, CAST(N'2018-02-21T13:15:43.000' AS DateTime), N'310008401')
INSERT [dbo].[TypeOil_Tanks] ([id], [tank_num], [datetime], [inventory_number]) VALUES (58, 195, CAST(N'2018-01-05T11:10:07.000' AS DateTime), N'310008413')
INSERT [dbo].[TypeOil_Tanks] ([id], [tank_num], [datetime], [inventory_number]) VALUES (59, 196, CAST(N'2019-06-20T09:43:07.000' AS DateTime), N'310008413')
INSERT [dbo].[TypeOil_Tanks] ([id], [tank_num], [datetime], [inventory_number]) VALUES (60, 196, CAST(N'2018-11-05T12:25:07.000' AS DateTime), N'310008400')
INSERT [dbo].[TypeOil_Tanks] ([id], [tank_num], [datetime], [inventory_number]) VALUES (61, 196, CAST(N'2018-05-31T11:23:46.000' AS DateTime), N'310008413')
INSERT [dbo].[TypeOil_Tanks] ([id], [tank_num], [datetime], [inventory_number]) VALUES (62, 196, CAST(N'2018-01-30T12:00:55.000' AS DateTime), N'310008400')
INSERT [dbo].[TypeOil_Tanks] ([id], [tank_num], [datetime], [inventory_number]) VALUES (63, 197, CAST(N'2018-11-16T10:42:35.000' AS DateTime), N'310008413')
INSERT [dbo].[TypeOil_Tanks] ([id], [tank_num], [datetime], [inventory_number]) VALUES (64, 197, CAST(N'2018-04-11T08:50:44.000' AS DateTime), N'310038031')
INSERT [dbo].[TypeOil_Tanks] ([id], [tank_num], [datetime], [inventory_number]) VALUES (65, 197, CAST(N'2018-01-05T11:31:54.000' AS DateTime), N'310008413')
INSERT [dbo].[TypeOil_Tanks] ([id], [tank_num], [datetime], [inventory_number]) VALUES (66, 198, CAST(N'2018-09-25T14:19:38.000' AS DateTime), N'310008413')
INSERT [dbo].[TypeOil_Tanks] ([id], [tank_num], [datetime], [inventory_number]) VALUES (67, 198, CAST(N'2018-08-01T13:10:28.000' AS DateTime), N'310038031')
INSERT [dbo].[TypeOil_Tanks] ([id], [tank_num], [datetime], [inventory_number]) VALUES (68, 198, CAST(N'2018-05-10T12:49:16.000' AS DateTime), N'310038031')
INSERT [dbo].[TypeOil_Tanks] ([id], [tank_num], [datetime], [inventory_number]) VALUES (69, 199, CAST(N'2018-03-09T11:23:41.000' AS DateTime), N'310038031')
INSERT [dbo].[TypeOil_Tanks] ([id], [tank_num], [datetime], [inventory_number]) VALUES (70, 200, CAST(N'2019-06-26T08:34:41.000' AS DateTime), N'310038031')
INSERT [dbo].[TypeOil_Tanks] ([id], [tank_num], [datetime], [inventory_number]) VALUES (71, 200, CAST(N'2018-06-21T12:12:33.000' AS DateTime), N'310038031')
SET IDENTITY_INSERT [dbo].[TypeOil_Tanks] OFF
