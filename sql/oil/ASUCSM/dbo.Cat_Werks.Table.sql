USE [ASUCSM]
GO
/****** Object:  Table [dbo].[Cat_Werks]    Script Date: 11.08.2019 21:51:44 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Cat_Werks](
	[id] [nvarchar](4) NOT NULL,
	[name] [nvarchar](4) NOT NULL,
 CONSTRAINT [PK_Cat_Werks] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
INSERT [dbo].[Cat_Werks] ([id], [name]) VALUES (N'0001', N'0001')
INSERT [dbo].[Cat_Werks] ([id], [name]) VALUES (N'0010', N'0010')
INSERT [dbo].[Cat_Werks] ([id], [name]) VALUES (N'0020', N'0020')
INSERT [dbo].[Cat_Werks] ([id], [name]) VALUES (N'0021', N'0021')
INSERT [dbo].[Cat_Werks] ([id], [name]) VALUES (N'0030', N'0030')
INSERT [dbo].[Cat_Werks] ([id], [name]) VALUES (N'0040', N'0040')
INSERT [dbo].[Cat_Werks] ([id], [name]) VALUES (N'0210', N'0210')
INSERT [dbo].[Cat_Werks] ([id], [name]) VALUES (N'0220', N'0220')
INSERT [dbo].[Cat_Werks] ([id], [name]) VALUES (N'0230', N'0230')
INSERT [dbo].[Cat_Werks] ([id], [name]) VALUES (N'0240', N'0240')
INSERT [dbo].[Cat_Werks] ([id], [name]) VALUES (N'0310', N'0310')
INSERT [dbo].[Cat_Werks] ([id], [name]) VALUES (N'0320', N'0320')
INSERT [dbo].[Cat_Werks] ([id], [name]) VALUES (N'0330', N'0330')
INSERT [dbo].[Cat_Werks] ([id], [name]) VALUES (N'0340', N'0340')
INSERT [dbo].[Cat_Werks] ([id], [name]) VALUES (N'0410', N'0410')
INSERT [dbo].[Cat_Werks] ([id], [name]) VALUES (N'0420', N'0420')
INSERT [dbo].[Cat_Werks] ([id], [name]) VALUES (N'0430', N'0430')
INSERT [dbo].[Cat_Werks] ([id], [name]) VALUES (N'0440', N'0440')
INSERT [dbo].[Cat_Werks] ([id], [name]) VALUES (N'4010', N'4010')
INSERT [dbo].[Cat_Werks] ([id], [name]) VALUES (N'4030', N'4030')
INSERT [dbo].[Cat_Werks] ([id], [name]) VALUES (N'8010', N'8010')
INSERT [dbo].[Cat_Werks] ([id], [name]) VALUES (N'8030', N'8030')
INSERT [dbo].[Cat_Werks] ([id], [name]) VALUES (N'8040', N'8040')
