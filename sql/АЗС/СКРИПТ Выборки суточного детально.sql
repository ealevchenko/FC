declare @start datetime;
declare @stop datetime;
declare @type int;
set @start = CONVERT(datetime,'2020-01-01 00:00:00',120);
set @stop = CONVERT(datetime,'2020-01-31 23:59:59',120);
set @type = 107000022;

	declare @dadr_calc table(
	[id] [int] IDENTITY(1,1) NOT NULL primary key,
	[dt_start] [datetime] NULL,
	[dt_stop] [datetime] NULL,
	[fuel_type] [int] NULL,
	[ukt_zed] [nvarchar](10) NULL,
	[tank] [nvarchar](11) NULL,
	[serial_number] [nvarchar](10) NULL,
	[unified_tank_number] [nvarchar](21) NULL,
	[type_name] [nvarchar](100) NULL,
	[level_meters_model] [nvarchar](50) NULL,
	[level_meters_serial_number] [nvarchar](10) NULL,
	[level_remains_start] [float] NULL,
	[volume_remains_start] [float] NULL,
	[dens_remains_start] [float] NULL,
	[dens_avg_remains_start] [float] NULL,
	[mass_remains_start] [float] NULL,
	[temp_remains_start] [float] NULL,
	[dens15_remains_start] [float] NULL,
	[volume15_remains_start] [float] NULL,
	[mass15_remains_start] [float] NULL,
	[volume_received] [float] NULL,
	[mass_received] [float] NULL,
	[dens_received] [float] NULL,
	[temp_received] [float] NULL,
	[volume15_received] [float] NULL,
	[mass15_received] [float] NULL,
	[dens15_received] [float] NULL,
	--[count_tanks_delivery] [int] NULL,
	[volume_delivery] [float] NULL,
	[mass_delivery] [float] NULL,
	[dens_delivery] [float] NULL,
	[temp_delivery] [float] NULL,
	[volume15_delivery] [float] NULL,
	[mass15_delivery] [float] NULL,
	[dens15_delivery] [float] NULL,
	[level_remains_stop] [float] NULL,
	[volume_remains_stop] [float] NULL,
	[dens_remains_stop] [float] NULL,
	[dens_avg_remains_stop] [float] NULL,
	[mass_remains_stop] [float] NULL,
	[temp_remains_stop] [float] NULL,
	[dens15_remains_stop] [float] NULL,
	[volume15_remains_stop] [float] NULL,
	[mass15_remains_stop] [float] NULL,
	[allowable_volume15_error] [float] NULL,
	[absolute_volume15_error] [float] NULL,
	[allowable_mass15_error] [float] NULL,
	[absolute_mass15_error] [float] NULL)

	declare @dadr table(
	[id] [int] IDENTITY(1,1) NOT NULL primary key,
	[dt_start] [datetime] NULL,
	[dt_stop] [datetime] NULL,
	[fuel_type] [int] NULL,
	[ukt_zed] [nvarchar](10) NULL,
	[tank] [nvarchar](11) NULL,
	[serial_number] [nvarchar](10) NULL,
	[unified_tank_number] [nvarchar](21) NULL,
	[type_name] [nvarchar](100) NULL,
	[level_meters_model] [nvarchar](50) NULL,
	[level_meters_serial_number] [nvarchar](10) NULL,
	[level_remains_start] [float] NULL,
	[volume_remains_start] [float] NULL,
	[dens_remains_start] [float] NULL,
	[dens_avg_remains_start] [float] NULL,
	[mass_remains_start] [float] NULL,
	[temp_remains_start] [float] NULL,
	[dens15_remains_start] [float] NULL,
	[volume15_remains_start] [float] NULL,
	[mass15_remains_start] [float] NULL,
	[volume_received] [float] NULL,
	[mass_received] [float] NULL,
	[dens_received] [float] NULL,
	[temp_received] [float] NULL,
	[volume15_received] [float] NULL,
	[mass15_received] [float] NULL,
	[dens15_received] [float] NULL,
	--[count_tanks_delivery] [int] NULL,
	[volume_delivery] [float] NULL,
	[mass_delivery] [float] NULL,
	[dens_delivery] [float] NULL,
	[temp_delivery] [float] NULL,
	[volume15_delivery] [float] NULL,
	[mass15_delivery] [float] NULL,
	[dens15_delivery] [float] NULL,
	[level_remains_stop] [float] NULL,
	[volume_remains_stop] [float] NULL,
	[dens_remains_stop] [float] NULL,
	[dens_avg_remains_stop] [float] NULL,
	[mass_remains_stop] [float] NULL,
	[temp_remains_stop] [float] NULL,
	[dens15_remains_stop] [float] NULL,
	[volume15_remains_stop] [float] NULL,
	[mass15_remains_stop] [float] NULL)

insert into @dadr
SELECT 
      min(dadr.[dt_start]) as dt_start
      ,max(dadr.[dt_stop]) as dt_start
      ,min(dadr.[fuel_type]) as fuel_type
      ,min(dadr.[ukt_zed]) as ukt_zed
      ,dadr.[tank]
      ,min(dadr.[serial_number]) as serial_number
      ,min(dadr.[unified_tank_number]) as unified_tank_number
      ,min(dadr.[type_name]) as type_name
      ,min(dadr.[level_meters_model]) as level_meters_model
      ,min(dadr.[level_meters_serial_number]) as level_meters_serial_number 
      --,[dt_actual_remains_start]
	  ,[level_remains_start] = (select top(1) d.[level_remains_start] FROM [KRR-PA-CNT-Oil].[dbo].[Daily_Accounting_Detali_Report_AZS] as d where d.[dt_start] = @start  and d.[fuel_type] = @type and d.[tank] = dadr.[tank])
	  ,[volume_remains_start] = (select top(1) d.[volume_remains_start] FROM [KRR-PA-CNT-Oil].[dbo].[Daily_Accounting_Detali_Report_AZS] as d where d.[dt_start] = @start  and d.[fuel_type] = @type and d.[tank] = dadr.[tank])
	  ,[dens_remains_start] = (select top(1) d.[dens_remains_start] FROM [KRR-PA-CNT-Oil].[dbo].[Daily_Accounting_Detali_Report_AZS] as d where d.[dt_start] = @start  and d.[fuel_type] = @type and d.[tank] = dadr.[tank])
	  ,[dens_avg_remains_start] = (select top(1) d.[dens_avg_remains_start] FROM [KRR-PA-CNT-Oil].[dbo].[Daily_Accounting_Detali_Report_AZS] as d where d.[dt_start] = @start  and d.[fuel_type] = @type and d.[tank] = dadr.[tank])
	  ,[mass_remains_start] = (select top(1) d.[mass_remains_start] FROM [KRR-PA-CNT-Oil].[dbo].[Daily_Accounting_Detali_Report_AZS] as d where d.[dt_start] = @start  and d.[fuel_type] = @type and d.[tank] = dadr.[tank])
	  ,[temp_remains_start] = (select top(1) d.[temp_remains_start] FROM [KRR-PA-CNT-Oil].[dbo].[Daily_Accounting_Detali_Report_AZS] as d where d.[dt_start] = @start  and d.[fuel_type] = @type and d.[tank] = dadr.[tank])
	  ,[dens15_remains_start] = (select top(1) d.[dens15_remains_start] FROM [KRR-PA-CNT-Oil].[dbo].[Daily_Accounting_Detali_Report_AZS] as d where d.[dt_start] = @start  and d.[fuel_type] = @type and d.[tank] = dadr.[tank])
	  ,[volume15_remains_start] = (select top(1) d.[volume15_remains_start] FROM [KRR-PA-CNT-Oil].[dbo].[Daily_Accounting_Detali_Report_AZS] as d where d.[dt_start] = @start  and d.[fuel_type] = @type and d.[tank] = dadr.[tank])
	  ,[mass15_remains_start] = (select top(1) d.[mass15_remains_start] FROM [KRR-PA-CNT-Oil].[dbo].[Daily_Accounting_Detali_Report_AZS] as d where d.[dt_start] = @start  and d.[fuel_type] = @type and d.[tank] = dadr.[tank])

	  ,sum(dadr.[volume_received]) as volume_received
	  ,sum(dadr.[mass_received]) as mass_received
	  ,dens_received = (CASE WHEN sum(dadr.[volume_received])>0 THEN (sum(dadr.[mass_received])/sum(dadr.[volume_received])*1000) ELSE 0 END)
	  ,avg(dadr.[temp_received]) as temp_received
	  ,sum(dadr.[volume15_received]) as volume15_received
	  ,mass15_received = sum(dadr.[mass_received])
	  ,dens15_received = (CASE WHEN sum(dadr.[volume15_received])>0 THEN (sum(dadr.[mass_received])/sum(dadr.[volume15_received])*1000) ELSE 0 END)

	  ,sum(dadr.[volume_delivery]) as volume_delivery
	  ,sum(dadr.[mass_delivery]) as mass_delivery
	  ,dens_delivery = (CASE WHEN sum(dadr.[volume_delivery])>0 THEN (sum(dadr.[mass_delivery])/sum(dadr.[volume_delivery])*1000) ELSE 0 END)
	  ,avg(dadr.[temp_delivery]) as temp_delivery
	  ,sum(dadr.[volume15_delivery]) as volume15_delivery
	  ,mass15_delivery = sum(dadr.[mass_delivery])
	  ,dens15_delivery = (CASE WHEN sum(dadr.[volume15_delivery])>0 THEN (sum(dadr.[mass_delivery])/sum(dadr.[volume15_delivery])*1000) ELSE 0 END)

	  ,[level_remains_stop] = (select top(1) d.[level_remains_stop] FROM [KRR-PA-CNT-Oil].[dbo].[Daily_Accounting_Detali_Report_AZS] as d where d.[dt_stop] = @stop  and d.[fuel_type] = @type and d.[tank] = dadr.[tank])
	  ,[volume_remains_stop] = (select top(1) d.[volume_remains_stop] FROM [KRR-PA-CNT-Oil].[dbo].[Daily_Accounting_Detali_Report_AZS] as d where d.[dt_stop] = @stop  and d.[fuel_type] = @type and d.[tank] = dadr.[tank])
	  ,[dens_remains_stop] = (select top(1) d.[dens_remains_stop] FROM [KRR-PA-CNT-Oil].[dbo].[Daily_Accounting_Detali_Report_AZS] as d where d.[dt_stop] = @stop  and d.[fuel_type] = @type and d.[tank] = dadr.[tank])
	  ,[dens_avg_remains_stop] = (select top(1) d.[dens_avg_remains_stop] FROM [KRR-PA-CNT-Oil].[dbo].[Daily_Accounting_Detali_Report_AZS] as d where d.[dt_stop] = @stop  and d.[fuel_type] = @type and d.[tank] = dadr.[tank])
	  ,[mass_remains_stop] = (select top(1) d.[mass_remains_stop] FROM [KRR-PA-CNT-Oil].[dbo].[Daily_Accounting_Detali_Report_AZS] as d where d.[dt_stop] = @stop  and d.[fuel_type] = @type and d.[tank] = dadr.[tank])
	  ,[temp_remains_stop] = (select top(1) d.[temp_remains_stop] FROM [KRR-PA-CNT-Oil].[dbo].[Daily_Accounting_Detali_Report_AZS] as d where d.[dt_stop] = @stop  and d.[fuel_type] = @type and d.[tank] = dadr.[tank])
	  ,[dens15_remains_stop] = (select top(1) d.[dens15_remains_stop] FROM [KRR-PA-CNT-Oil].[dbo].[Daily_Accounting_Detali_Report_AZS] as d where d.[dt_stop] = @stop  and d.[fuel_type] = @type and d.[tank] = dadr.[tank])
	  ,[volume15_remains_stop] = (select top(1) d.[volume15_remains_stop] FROM [KRR-PA-CNT-Oil].[dbo].[Daily_Accounting_Detali_Report_AZS] as d where d.[dt_stop] = @stop  and d.[fuel_type] = @type and d.[tank] = dadr.[tank])
	  ,[mass15_remains_stop] = (select top(1) d.[mass15_remains_stop] FROM [KRR-PA-CNT-Oil].[dbo].[Daily_Accounting_Detali_Report_AZS] as d where d.[dt_stop] = @stop  and d.[fuel_type] = @type and d.[tank] = dadr.[tank])


  FROM [KRR-PA-CNT-Oil].[dbo].[Daily_Accounting_Detali_Report_AZS] as dadr
  where [dt_start] >= @start and [dt_stop] <= @stop and [fuel_type]=@type
  group by tank

  insert into @dadr_calc
  select 
       [dt_start]
      ,[dt_stop]
      ,[fuel_type]
      ,[ukt_zed]
      ,[tank]
      ,[serial_number]
      ,[unified_tank_number]
      ,[type_name]
      ,[level_meters_model]
      ,[level_meters_serial_number]
      ,[level_remains_start]
      ,[volume_remains_start]
      ,[dens_remains_start]
      ,[dens_avg_remains_start]
      ,[mass_remains_start]
      ,[temp_remains_start]
      ,[dens15_remains_start]
      ,[volume15_remains_start]
      ,[mass15_remains_start]
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
      ,[level_remains_stop]
      ,[volume_remains_stop]
      ,[dens_remains_stop]
      ,[dens_avg_remains_stop]
      ,[mass_remains_stop]
      ,[temp_remains_stop]
      ,[dens15_remains_stop]
      ,[volume15_remains_stop]
      ,[mass15_remains_stop]

	  ,[allowable_volume15_error] = (CASE WHEN [volume15_remains_stop]>0 THEN (([volume15_remains_start]-[volume15_delivery]+[volume15_received]-[volume15_remains_stop])/[volume15_remains_stop])*100 ELSE 0 END)
	  ,[absolute_volume15_error] = ([volume15_remains_start]-[volume15_delivery]+[volume15_received]-[volume15_remains_stop])
	  ,[allowable_mass15_error] = (CASE WHEN [mass15_remains_stop]>0 THEN (([mass15_remains_start]-[mass15_delivery]+[mass15_received]-[mass15_remains_stop])/[mass15_remains_stop])*100 ELSE 0 END)
	  ,[absolute_mass15_error] = ([mass15_remains_start]-[mass15_delivery]+[mass15_received]-[mass15_remains_stop])
	  from @dadr

	  select * from @dadr_calc

  --SELECT [id]
  --    ,[dt_start]
  --    ,[dt_stop]
  --    ,[fuel_type]
  --    ,[ukt_zed]
  --    ,[tank]
  --    ,[serial_number]
  --    ,[unified_tank_number]
  --    ,[type_name]
  --    ,[level_meters_model]
  --    ,[level_meters_serial_number]
  --    ,[dt_actual_remains_start]
  --    ,[level_remains_start]
  --    ,[volume_remains_start]
  --    ,[dens_remains_start]
  --    ,[dens_avg_remains_start]
  --    ,[mass_remains_start]
  --    ,[temp_remains_start]
  --    ,[relation_remains_start]
  --    ,[ratio_vd_remains_start]
  --    ,[ratio_tv_remains_start]
  --    ,[dens15_remains_start]
  --    ,[volume15_remains_start]
  --    ,[mass15_remains_start]
  --    ,[volume_received]
  --    ,[mass_received]
  --    ,[dens_received]
  --    ,[temp_received]
  --    ,[volume15_received]
  --    ,[mass15_received]
  --    ,[dens15_received]
  --    ,[count_tanks_delivery]
  --    ,[volume_delivery]
  --    ,[mass_delivery]
  --    ,[dens_delivery]
  --    ,[temp_delivery]
  --    ,[volume15_delivery]
  --    ,[mass15_delivery]
  --    ,[dens15_delivery]
  --    ,[dt_actual_remains_stop]
  --    ,[level_remains_stop]
  --    ,[volume_remains_stop]
  --    ,[dens_remains_stop]
  --    ,[dens_avg_remains_stop]
  --    ,[mass_remains_stop]
  --    ,[temp_remains_stop]
  --    ,[relation_remains_stop]
  --    ,[ratio_vd_remains_stop]
  --    ,[ratio_tv_remains_stop]
  --    ,[dens15_remains_stop]
  --    ,[volume15_remains_stop]
  --    ,[mass15_remains_stop]
  --    ,[permissible_volume15_error]
  --    ,[permissible_mass15_error]
  --FROM [KRR-PA-CNT-Oil].[dbo].[Daily_Accounting_Detali_Report_AZS]
  --where [dt_start] >= @start and [dt_stop] <= @stop and [fuel_type]=@type