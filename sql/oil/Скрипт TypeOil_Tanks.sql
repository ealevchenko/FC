/****** Script for SelectTopNRows command from SSMS  ******/
SELECT TOP (1000) [id]
      ,[tank_num]
      ,[datetime]
      ,[inventory_number]
	  ,[name] = (select [name] from [ASUCSM].[dbo].[Cat_OZM] where id = N'000000000'+ CAST([inventory_number] AS sysname))  FROM [ASUCSM].[dbo].[TypeOil_Tanks]


	  /****** Script for SelectTopNRows command from SSMS  ******/
(SELECT top(1) [name] = (select [name] from [ASUCSM].[dbo].[Cat_OZM] where id = N'000000000'+ CAST([inventory_number] AS sysname))  FROM [ASUCSM].[dbo].[TypeOil_Tanks] where [tank_num] = 132 and [datetime]<CONVERT(datetime,'2018-02-15 08:00:00.000',120) order by [datetime] desc)