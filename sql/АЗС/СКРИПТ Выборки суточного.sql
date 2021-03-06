/****** Скрипт для команды SelectTopNRows из среды SSMS  ******/

declare @start datetime;
declare @stop datetime;
set @start = CONVERT(datetime,'2020-01-01 00:00:00',120)
set @stop = CONVERT(datetime,'2020-01-31 23:59:59',120)

--SELECT
--	 [type] = 107000022
--	 ,[ukt_zed] = (select top(1) min([ukt_zed]) FROM [KRR-PA-CNT-Oil].[dbo].[Daily_Accounting_Report_AZS] where [date_start] >= @start and [date_stop] <= @stop and [type] = 107000022 group by [type])

--select top(1) min([ukt_zed]) FROM [KRR-PA-CNT-Oil].[dbo].[Daily_Accounting_Report_AZS] where [date_start] >= @start and [date_stop] <= @stop and [type] = 107000022 group by [type]
--select d.[volume_start] FROM [KRR-PA-CNT-Oil].[dbo].[Daily_Accounting_Report_AZS] as d where d.[date_start] = @start  and d.[type] = 107000022

--(CASE WHEN ELSE 0 END)

declare @dar_calc TABLE (
	[id] int IDENTITY(1,1) NOT NULL PRIMARY KEY,
	[type] [int] NULL,
	[ukt_zed] [nvarchar](10) NULL,
	[fuel_name] [nvarchar](30) NULL,
	[date_start] [datetime] NULL,
	[date_stop] [datetime] NULL,
	[volume_start] [float] NULL,
	[mass_start] [float] NULL,
	[dens_start] [float] NULL,
	[temp_start] [float] NULL,
	[volume15_start] [float] NULL,
	[mass15_start] [float] NULL,
	[dens15_start] [float] NULL,
	[volume_received] [int] NULL,
	[mass_received] [float] NULL,
	[dens_received] [float] NULL,
	[temp_received] [float] NULL,
	[volume15_received] [float] NULL,
	[mass15_received] [float] NULL,
	[dens15_received] [float] NULL,
	[volume_delivery] [int] NULL,
	[mass_delivery] [float] NULL,
	[dens_delivery] [float] NULL,
	[temp_delivery] [float] NULL,
	[volume15_delivery] [float] NULL,
	[mass15_delivery] [float] NULL,
	[dens15_delivery] [float] NULL,
	[volume_stop] [float] NULL,
	[mass_stop] [float] NULL,
	[dens_stop] [float] NULL,
	[temp_stop] [float] NULL,
	[volume15_stop] [float] NULL,
	[mass15_stop] [float] NULL,
	[dens15_stop] [float] NULL,
	[allowable_volume15_error] [float] NULL,
	[absolute_volume15_error] [float] NULL,
	[allowable_mass15_error] [float] NULL,
	[absolute_mass15_error] [float] NULL
)

declare @dar TABLE (
	[id] int IDENTITY(1,1) NOT NULL PRIMARY KEY,
	[type] [int] NULL,
	[ukt_zed] [nvarchar](10) NULL,
	[fuel_name] [nvarchar](30) NULL,
	[date_start] [datetime] NULL,
	[date_stop] [datetime] NULL,
	[volume_start] [float] NULL,
	[mass_start] [float] NULL,
	[dens_start] [float] NULL,
	[temp_start] [float] NULL,
	[volume15_start] [float] NULL,
	[mass15_start] [float] NULL,
	[dens15_start] [float] NULL,
	[volume_received] [int] NULL,
	[mass_received] [float] NULL,
	[dens_received] [float] NULL,
	[temp_received] [float] NULL,
	[volume15_received] [float] NULL,
	[mass15_received] [float] NULL,
	[dens15_received] [float] NULL,
	[volume_delivery] [int] NULL,
	[mass_delivery] [float] NULL,
	[dens_delivery] [float] NULL,
	[temp_delivery] [float] NULL,
	[volume15_delivery] [float] NULL,
	[mass15_delivery] [float] NULL,
	[dens15_delivery] [float] NULL,
	[volume_stop] [float] NULL,
	[mass_stop] [float] NULL,
	[dens_stop] [float] NULL,
	[temp_stop] [float] NULL,
	[volume15_stop] [float] NULL,
	[mass15_stop] [float] NULL,
	[dens15_stop] [float] NULL
)

insert into @dar
SELECT 
      dar.[type]
      ,min(dar.[ukt_zed]) as ukt_zed
      ,min(dar.[fuel_name]) as fuel_name
      ,min(dar.[date_start]) as date_start
      ,max(dar.[date_stop])  as date_stop
	  ,[volume_start] = (select top(1) d.[volume_start] FROM [KRR-PA-CNT-Oil].[dbo].[Daily_Accounting_Report_AZS] as d where d.[date_start] = @start  and d.[type] = dar.[type])
	  ,[mass_start] = (select top(1) d.[mass_start] FROM [KRR-PA-CNT-Oil].[dbo].[Daily_Accounting_Report_AZS] as d where d.[date_start] = @start  and d.[type] = dar.[type])
	  ,[dens_start] = (select top(1) d.[dens_start] FROM [KRR-PA-CNT-Oil].[dbo].[Daily_Accounting_Report_AZS] as d where d.[date_start] = @start  and d.[type] = dar.[type])
	  ,[temp_start] = (select top(1) d.[temp_start] FROM [KRR-PA-CNT-Oil].[dbo].[Daily_Accounting_Report_AZS] as d where d.[date_start] = @start  and d.[type] = dar.[type])
	  ,[volume15_start] = (select top(1) d.[volume15_start] FROM [KRR-PA-CNT-Oil].[dbo].[Daily_Accounting_Report_AZS] as d where d.[date_start] = @start  and d.[type] = dar.[type])
	  ,[mass15_start] = (select top(1) d.[mass15_start] FROM [KRR-PA-CNT-Oil].[dbo].[Daily_Accounting_Report_AZS] as d where d.[date_start] = @start  and d.[type] = dar.[type])
	  ,[dens15_start] = (select top(1) d.[dens15_start] FROM [KRR-PA-CNT-Oil].[dbo].[Daily_Accounting_Report_AZS] as d where d.[date_start] = @start  and d.[type] = dar.[type])
	  ,sum(dar.[volume_received]) as volume_received
	  ,sum(dar.[mass_received]) as mass_received
	  ,dens_received = (CASE WHEN sum(dar.[volume_received])>0 THEN (sum(dar.[mass_received])/sum(dar.[volume_received])*1000) ELSE 0 END)
	  ,avg(dar.[temp_received]) as temp_received
	  ,sum(dar.[volume15_received]) as volume15_received
	  ,mass15_received = sum(dar.[mass_received])
	  --,sum([mass15_received]) as mass15_received
		,dens15_received = (CASE WHEN sum(dar.[volume15_received])>0 THEN (sum(dar.[mass_received])/sum(dar.[volume15_received])*1000) ELSE 0 END)
	  --,sum([dens15_received]) as dens15_received
	  ,sum(dar.[volume_delivery]) as volume_delivery
	  ,sum(dar.[mass_delivery]) as mass_delivery
		,dens_delivery = (CASE WHEN sum(dar.[volume_delivery])>0 THEN (sum(dar.[mass_delivery])/sum(dar.[volume_delivery])*1000) ELSE 0 END)
	  --,sum([dens_delivery]) as dens_delivery
	  ,avg(dar.[temp_delivery]) as temp_delivery
	  ,sum(dar.[volume15_delivery]) as volume15_delivery
		,mass15_delivery = sum(dar.[mass_delivery])
	  --,sum([mass15_delivery]) as mass15_delivery
	  --,sum([dens15_delivery]) as dens15_delivery
		,dens15_delivery = (CASE WHEN sum(dar.[volume15_delivery])>0 THEN (sum(dar.[mass_delivery])/sum(dar.[volume15_delivery])*1000) ELSE 0 END)
	  ,[volume_stop] = (select top(1) d.[volume_stop] FROM [KRR-PA-CNT-Oil].[dbo].[Daily_Accounting_Report_AZS] as d where d.[date_stop] = @stop  and d.[type] = dar.[type])
	  ,[mass_stop] = (select top(1) d.[mass_stop] FROM [KRR-PA-CNT-Oil].[dbo].[Daily_Accounting_Report_AZS] as d where d.[date_stop] = @stop  and d.[type] = dar.[type])
	  ,[dens_stop] = (select top(1) d.[dens_stop] FROM [KRR-PA-CNT-Oil].[dbo].[Daily_Accounting_Report_AZS] as d where d.[date_stop] = @stop  and d.[type] = dar.[type])
	  ,[temp_stopt] = (select top(1) d.[temp_stop] FROM [KRR-PA-CNT-Oil].[dbo].[Daily_Accounting_Report_AZS] as d where d.[date_stop] = @stop  and d.[type] = dar.[type])
	  ,[volume15_stop] = (select top(1) d.[volume15_stop] FROM [KRR-PA-CNT-Oil].[dbo].[Daily_Accounting_Report_AZS] as d where d.[date_stop] = @stop  and d.[type] = dar.[type])
	  ,[mass15_stop] = (select top(1) d.[mass15_stop] FROM [KRR-PA-CNT-Oil].[dbo].[Daily_Accounting_Report_AZS] as d where d.[date_stop] = @stop  and d.[type] = dar.[type])
	  ,[dens15_stop] = (select top(1) d.[dens15_stop] FROM [KRR-PA-CNT-Oil].[dbo].[Daily_Accounting_Report_AZS] as d where d.[date_stop] = @stop  and d.[type] = dar.[type])

      --,[permissible_volume15_error]
      --,[permissible_mass15_error]
  FROM [KRR-PA-CNT-Oil].[dbo].[Daily_Accounting_Report_AZS] as dar
  where [date_start] >= @start and [date_stop] <= @stop
  group by [type]

  INSERT INTO @dar_calc
  SELECT [type]
      ,[ukt_zed]
      ,[fuel_name]
      ,[date_start]
      ,[date_stop]
      ,[volume_start]
      ,[mass_start]
      ,[dens_start]
      ,[temp_start]
      ,[volume15_start]
      ,[mass15_start]
      ,[dens15_start]
      ,[volume_received]
      ,[mass_received]
      ,[dens_received]
      ,[temp_received]
      ,[volume15_received]
      ,[mass15_received]
      ,[dens15_received]
      ,[volume_delivery]
      ,[mass_delivery]
      ,[dens_delivery]
      ,[temp_delivery]
      ,[volume15_delivery]
      ,[mass15_delivery]
      ,[dens15_delivery]
      ,[volume_stop]
      ,[mass_stop]
      ,[dens_stop]
      ,[temp_stop]
      ,[volume15_stop]
      ,[mass15_stop]
      ,[dens15_stop]
	  ,[allowable_volume15_error] = (([volume15_start]-[volume15_delivery]+[volume15_received]-[volume15_stop])/[volume15_stop])*100
	  ,[absolute_volume15_error] = ([volume15_start]-[volume15_delivery]+[volume15_received]-[volume15_stop])
	  ,[allowable_mass15_error] = (([mass15_start]-[mass15_delivery]+[mass15_received]-[mass15_stop])/[mass15_stop])*100
	  ,[absolute_mass15_error] = ([mass15_start]-[mass15_delivery]+[mass15_received]-[mass15_stop])
	  from @dar

	  select * from @dar_calc


  --SELECT [id]
  --    ,[type]
  --    ,[ukt_zed]
  --    ,[fuel_name]
  --    ,[date_start]
  --    ,[date_stop]
  --    ,[volume_start]
  --    ,[mass_start]
  --    ,[dens_start]
  --    ,[temp_start]
  --    ,[volume15_start]
  --    ,[mass15_start]
  --    ,[dens15_start]
  --    ,[volume_received]
  --    ,[mass_received]
  --    ,[dens_received]
  --    ,[temp_received]
  --    ,[volume15_received]
  --    ,[mass15_received]
  --    ,[dens15_received]
  --    ,[volume_delivery]
  --    ,[mass_delivery]
  --    ,[dens_delivery]
  --    ,[temp_delivery]
  --    ,[volume15_delivery]
  --    ,[mass15_delivery]
  --    ,[dens15_delivery]
  --    ,[volume_stop]
  --    ,[mass_stop]
  --    ,[dens_stop]
  --    ,[temp_stop]
  --    ,[volume15_stop]
  --    ,[mass15_stop]
  --    ,[dens15_stop]
  --    ,[permissible_volume15_error]
  --    ,[permissible_mass15_error]
  --FROM [KRR-PA-CNT-Oil].[dbo].[Daily_Accounting_Report_AZS]
  --where [date_start] >= @start and [date_stop] <= @stop
