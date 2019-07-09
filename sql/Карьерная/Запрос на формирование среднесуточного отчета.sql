
USE [CC_HMI_CUNJ_19_06_24_11_33_35R]--[ASUTSK]
GO

drop table [ASUTSK].[dbo].[Daily_ReportRW]

DECLARE	@return_value int
declare @start_report datetime
declare @stop_report datetime
declare @start datetime
declare @stop datetime

set @start_report = CONVERT(datetime,'2019-07-07 00:00:00',120)
set @stop_report = CONVERT(datetime,'2019-07-08 00:00:00',120)



-- Проверим наличие таблицы [dbo].[Daily_Report_15] если нет создадим
if OBJECT_ID(N'[ASUTSK].[dbo].[Daily_ReportRW]',N'U') is null
begin
	CREATE TABLE [ASUTSK].[dbo].[Daily_ReportRW](
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
end
-- Получим время начала запроса и конца
set @start_report = (select top(1) [date_start] from [ASUTSK].[dbo].[Daily_ReportRW] order by [date_start] desc)
Set @stop_report = CONVERT(DATETIME, CONVERT(char(11), getdate() ,20) + '00:00:00', 102)
-- Проверим в таблице есть данные
if (@start_report is null) begin 
	-- данных нет начнем с начала месяца
	--set @start_report = CONVERT(DATETIME, CONVERT(char(8), getdate(),20) + '01 00:00:00', 102)
	set @start_report = CONVERT(datetime, '2019-07-01 00:00:00', 102)
	end else begin
	set @start_report = DATEADD(DAY,+1,@start_report)
	end;
-- Проверим диапазон запроса
if (@start_report<@stop_report)
begin
 select @start_report, @stop_report;
 set @start = @start_report;
 declare @row int
 set @row =0;
 WHILE @start < @stop_report
    BEGIN
		set @stop = DATEADD(DAY,+1,@start)
		--select @start, @stop;
		--** НАЧАЛО ВЫБОРКИ СУТОЧНОГО РАПОРТА *********************************
				if OBJECT_ID(N'TempDB..#REMAINS_start',N'U') is not null
				begin
					drop table #REMAINS_start
				end
				CREATE TABLE #REMAINS_start (
					[date] [datetime] NULL,
					[level] [int] NULL,
					[volume] [int] NULL,
					[mass] [float] NULL,
					[dens] [float] NULL,
					[temp] [float] NULL,
					[water] [float] NULL,					
					[volume15] [int] NULL,
					[mass15] [float] NULL,	
					[dens15] [float] NULL
					) ON [PRIMARY]
				-- Проверим и создадим состояние в конце
				if OBJECT_ID(N'TempDB..#REMAINS_stop',N'U') is not null
				begin
					drop table #REMAINS_stop
				end

				CREATE TABLE #REMAINS_stop (
					[date] [datetime] NULL,
					[level] [int] NULL,
					[volume] [int] NULL,
					[mass] [float] NULL,
					[dens] [float] NULL,
					[temp] [float] NULL,
					[water] [float] NULL,					
					[volume15] [int] NULL,
					[mass15] [float] NULL,	
					[dens15] [float] NULL			
					) ON [PRIMARY]

				--insert into #REMAINS_start
				--************************************************************
				declare @time_zone int
				set @time_zone = CAST(SUBSTRING(CONVERT(char(13), GETDATE() - GETUTCDATE() ,20), 13, 1) AS INT);
				
				declare @date datetime
				set @date = DATEADD(HOUR,@time_zone*-1,@start)

				declare @List varchar(1000)='6;7;8;9;10;11';
				declare @TimeBegin varchar(32) = CONVERT(varchar(23) ,@date, 120);
				declare @TimeEnd varchar(32)='0000-00-00 00:00:00.999';
				declare @WHEREClause varchar(1000)= NULL;
				declare @ORDERBYClause varchar(1000) = 'Timestamp ASC';
				declare @Timestep varchar(500) = '60';
				declare @Aggregationmode int = 261;
				declare @SymDataSource varchar(512) = NULL;
				declare @SymCatalog varchar(512) = NULL;
				declare @LS_Name varchar(255)=NULL;
	
				--SET NOCOUNT ON
				--DECLARE @LS_Name varchar(255)
				DECLARE @Catalogname varchar(255)   
				DECLARE @Internal_LS bit
				DECLARE @NoTime bit
				SET @Internal_LS = 0

				-- check valid datetime or Aggregationmode = 0
				DECLARE @ret int
				SET @ret = ISDATE(@TimeBegin)
				IF (@ret = 0 and @Aggregationmode <> 0)
					RETURN

				IF ISNULL(@LS_Name,'') = ''
				BEGIN
					SET @LS_Name = 'CA_'+ CAST(@@SPID as varchar(10))
					SET @Catalogname = DB_NAME()
					if @SymDataSource = NULL
						set @SymDataSource = 'Hallo'
					if ISNULL(@SymDataSource,'') = '' or ISNULL(@SymCatalog,'') = ''
					BEGIN
						EXEC sp_addlinkedserver @server = @LS_Name,@srvproduct = 'CommonArchiving',  @provider = 'WinCCOLEDBProvider', @datasrc = @@servername, @catalog =  @CatalogName 
						set @Internal_LS = 1
					END
					ELSE
					BEGIN
						EXEC sp_addlinkedserver @server = @LS_Name,@srvproduct = 'CommonArchiving',  @provider = 'WinCCOLEDBProvider', @datasrc = @SymDataSource, @catalog =  @SymCatalog 
						set @Internal_LS = 1
					END
			  END

				DECLARE @Statement varchar(8000)
				SET @Statement = ''
				if OBJECT_ID(N'TempDB..#TagWincc',N'U') is not null

				begin 
				drop table #TagWincc 
				end 
				create table #TagWincc  	
				( 
				ValueId int, 
				[Timestamp] datetime, 
				Realvalue varchar(250), 
				quality int, 
				flags int 
				) 

				SET @Statement = 'Insert into #TagWincc SELECT * FROM OPENQUERY('+@LS_Name+',''Tag:R,('+@List+'),'''''+@TimeBegin+''''','''''+@TimeEnd+''''''

				IF(LEN(@TimeStep) <> 0)
				BEGIN
				 SET @Statement = @Statement + ',' + @Timestep + ',' + CAST(@Aggregationmode AS VARCHAR(6))
				END

				SET @Statement = @Statement + ' '') '

				IF(LEN(@WHEREClause) <> 0)
				BEGIN
					SET @Statement = @Statement + @WHEREClause
				END

				IF(LEN(@ORDERBYClause) <> 0)
				BEGIN
					SET @Statement = @Statement + ' ORDER BY ' + @ORDERBYClause
				END

				--print @Statement

				BEGIN
				print @Statement
					EXEC( @Statement )
				END

				if @Internal_LS = 1 
				BEGIN
					EXEC sp_dropserver @server = @LS_Name
					set @LS_Name = NULL
				END
				--SET NOCOUNT OFF


				if OBJECT_ID(N'TempDB..#RemainsTanks',N'U') is not null
					begin 
						drop table #RemainsTanks
					end 
						create table #RemainsTanks 	
							( 
								[date] [datetime] NULL,
								[level] float NULL,
								[volume] float NULL,
								[mass] float NULL,
								[dens_avg] float NULL,
								[temp_avg] float NULL,
								[water] float NULL,
							) 

				insert into #RemainsTanks
				select 
					DATEADD(HOUR,@time_zone*1,[Timestamp]) as 'datetime',
					SUM(CASE ValueId WHEN 6 THEN CAST(Realvalue AS float) ELSE 0 END) as level,
					SUM(CASE ValueId WHEN 7 THEN CAST(Realvalue AS float) ELSE 0 END) as volume,
					SUM(CASE ValueId WHEN 8 THEN CAST(Realvalue AS float) ELSE 0 END) as mass,
					SUM(CASE ValueId WHEN 9 THEN CAST(Realvalue AS float) ELSE 0 END) as dens_avg,
					SUM(CASE ValueId WHEN 10 THEN CAST(Realvalue AS float) ELSE 0 END) as temp_avg,
					SUM(CASE ValueId WHEN 11 THEN CAST(Realvalue AS float) ELSE 0 END) as water
				FROM #TagWincc
				GROUP BY [Timestamp]

				insert into #REMAINS_start
				select 
					 [date]
					,[level]
					,[volume]
					,[mass]
					,[dens_avg]
					,[temp_avg]
					,[water] 
					,[volume15]=[ASUTSK].[dbo].[GET_VOLUME15](N'107000024',[dens_avg],[temp_avg], [volume])
					,[mass15]= [ASUTSK].[dbo].[GET_VOLUME15](N'107000024',[dens_avg],[temp_avg], [volume])*[ASUTSK].[dbo].[GET_DENS15](N'107000024',[dens_avg],[temp_avg])*0.001
					,[dens15]= [ASUTSK].[dbo].[GET_DENS15](N'107000024',[dens_avg],[temp_avg])
				from #RemainsTanks
				--************************************************************
				--EXEC [CC_HMI_CUNJ_19_06_24_11_33_35R].[dbo].[GetRemains] @start

				--insert into #REMAINS_stop
				--EXEC [CC_HMI_CUNJ_19_06_24_11_33_35R].[dbo].[GetRemains] @stop
								--************************************************************
				--declare @time_zone int
				--set @time_zone = CAST(SUBSTRING(CONVERT(char(13), GETDATE() - GETUTCDATE() ,20), 13, 1) AS INT);
	
				set @date = DATEADD(HOUR,@time_zone*-1,@stop)

				--declare @List varchar(1000)='6;7;8;9;10;11';
				set @TimeBegin = CONVERT(varchar(23) ,@date, 120);
				--declare @TimeEnd varchar(32)='0000-00-00 00:00:00.999';
				--declare @TimeEnd varchar(32)= CONVERT(varchar(23) ,DATEADD(second,+1,@date), 120);
				--declare @TimeEnd varchar(32) = CONVERT(varchar(23) ,@date, 120);
				--declare @WHEREClause varchar(1000)= NULL;
				--declare @ORDERBYClause varchar(1000) = 'Timestamp ASC';
				--declare @Timestep varchar(500) = '60';
				--declare @Aggregationmode int = 261;
				--declare @SymDataSource varchar(512) = NULL;
				--declare @SymCatalog varchar(512) = NULL;
				--declare @LS_Name varchar(255)=NULL;
	
				--SET NOCOUNT ON
				--DECLARE @LS_Name varchar(255)
				--DECLARE @Catalogname varchar(255)   
				--DECLARE @Internal_LS bit
				--DECLARE @NoTime bit
				SET @Internal_LS = 0

				-- check valid datetime or Aggregationmode = 0
				--DECLARE @ret int
				SET @ret = ISDATE(@TimeBegin)
				IF (@ret = 0 and @Aggregationmode <> 0)
					RETURN

				IF ISNULL(@LS_Name,'') = ''
				BEGIN
					SET @LS_Name = 'CA_'+ CAST(@@SPID as varchar(10))
					SET @Catalogname = DB_NAME()
					if @SymDataSource = NULL
						set @SymDataSource = 'Hallo'
					if ISNULL(@SymDataSource,'') = '' or ISNULL(@SymCatalog,'') = ''
					BEGIN
						EXEC sp_addlinkedserver @server = @LS_Name,@srvproduct = 'CommonArchiving',  @provider = 'WinCCOLEDBProvider', @datasrc = @@servername, @catalog =  @CatalogName 
						set @Internal_LS = 1
					END
					ELSE
					BEGIN
						EXEC sp_addlinkedserver @server = @LS_Name,@srvproduct = 'CommonArchiving',  @provider = 'WinCCOLEDBProvider', @datasrc = @SymDataSource, @catalog =  @SymCatalog 
						set @Internal_LS = 1
					END
			  END

				--DECLARE @Statement varchar(8000)
				SET @Statement = ''
				if OBJECT_ID(N'TempDB..#TagWincc1',N'U') is not null

				begin 
				drop table #TagWincc1 
				end 
				create table #TagWincc1  	
				( 
				ValueId int, 
				[Timestamp] datetime, 
				Realvalue varchar(250), 
				quality int, 
				flags int 
				) 

				SET @Statement = 'Insert into #TagWincc1 SELECT * FROM OPENQUERY('+@LS_Name+',''Tag:R,('+@List+'),'''''+@TimeBegin+''''','''''+@TimeEnd+''''''

				IF(LEN(@TimeStep) <> 0)
				BEGIN
				 SET @Statement = @Statement + ',' + @Timestep + ',' + CAST(@Aggregationmode AS VARCHAR(6))
				END

				SET @Statement = @Statement + ' '') '

				IF(LEN(@WHEREClause) <> 0)
				BEGIN
					SET @Statement = @Statement + @WHEREClause
				END

				IF(LEN(@ORDERBYClause) <> 0)
				BEGIN
					SET @Statement = @Statement + ' ORDER BY ' + @ORDERBYClause
				END

				--print @Statement

				BEGIN
				print @Statement
					EXEC( @Statement )
				END

				if @Internal_LS = 1 
				BEGIN
					EXEC sp_dropserver @server = @LS_Name
					set @LS_Name = NULL
				END
				--SET NOCOUNT OFF


				if OBJECT_ID(N'TempDB..#RemainsTanks1',N'U') is not null
					begin 
						drop table #RemainsTanks1
					end 
						create table #RemainsTanks1 	
							( 
								[date] [datetime] NULL,
								[level] float NULL,
								[volume] float NULL,
								[mass] float NULL,
								[dens_avg] float NULL,
								[temp_avg] float NULL,
								[water] float NULL,
							) 

				insert into #RemainsTanks1
				select 
					DATEADD(HOUR,@time_zone*1,[Timestamp]) as 'datetime',
					SUM(CASE ValueId WHEN 6 THEN CAST(Realvalue AS float) ELSE 0 END) as level,
					SUM(CASE ValueId WHEN 7 THEN CAST(Realvalue AS float) ELSE 0 END) as volume,
					SUM(CASE ValueId WHEN 8 THEN CAST(Realvalue AS float) ELSE 0 END) as mass,
					SUM(CASE ValueId WHEN 9 THEN CAST(Realvalue AS float) ELSE 0 END) as dens_avg,
					SUM(CASE ValueId WHEN 10 THEN CAST(Realvalue AS float) ELSE 0 END) as temp_avg,
					SUM(CASE ValueId WHEN 11 THEN CAST(Realvalue AS float) ELSE 0 END) as water
				FROM #TagWincc1
				GROUP BY [Timestamp]

				insert into #REMAINS_stop
				select 
					 [date]
					,[level]
					,[volume]
					,[mass]
					,[dens_avg]
					,[temp_avg]
					,[water] 
					,[volume15]=[ASUTSK].[dbo].[GET_VOLUME15](N'107000024',[dens_avg],[temp_avg], [volume])
					,[mass15]= [ASUTSK].[dbo].[GET_VOLUME15](N'107000024',[dens_avg],[temp_avg], [volume])*[ASUTSK].[dbo].[GET_DENS15](N'107000024',[dens_avg],[temp_avg])*0.001
					,[dens15]= [ASUTSK].[dbo].[GET_DENS15](N'107000024',[dens_avg],[temp_avg])
				from #RemainsTanks1
				--************************************************************
				-->
				declare @type sysname;
				declare @volume_start int;
				declare @mass_start float;
				declare @dens_start float;
				declare @temp_start float;
				declare @volume15_start int;
				declare @mass15_start float;
				declare @dens15_start float;

				declare @volume_stop int;
				declare @mass_stop float;
				declare @dens_stop float;
				declare @temp_stop float;
				declare @volume15_stop int;
				declare @mass15_stop float;
				declare @dens15_stop float;
				
				declare @mass_coming float;
				declare @volume_coming int;
				declare @dens_coming float;
				declare @temp_coming float;
				declare @volume15_coming int;
				declare @mass15_coming float;
				declare @dens15_coming float;

				declare @volume_consumption int;
				declare @mass_consumption float; 
				declare @dens_consumption float;
				declare @temp_consumption float;
				declare @volume15_consumption int
				declare @mass15_consumption float;
				declare @dens15_consumption float;

				--SELECT top(1) volume FROM #REMAINS_start

				set @type = N'107000024';
				-->
				set @volume_start = (SELECT top(1) volume FROM #REMAINS_start);
				set @mass_start = (SELECT top(1) mass FROM #REMAINS_start);
				set @dens_start = (SELECT top(1) dens FROM #REMAINS_start);
				set @temp_start = (SELECT top(1) temp FROM #REMAINS_start);
				set @volume15_start = (SELECT top(1) volume15 FROM #REMAINS_start);
				set @mass15_start = (SELECT top(1) mass15 FROM #REMAINS_start);
				set @dens15_start = (SELECT top(1) dens15 FROM #REMAINS_start);
				-->
				set @volume_stop = (SELECT top(1) volume FROM #REMAINS_stop);
				set @mass_stop = (SELECT top(1) mass FROM #REMAINS_stop);
				set @dens_stop = (SELECT top(1) dens FROM #REMAINS_stop);
				set @temp_stop = (SELECT top(1) temp FROM #REMAINS_stop);
				set @volume15_stop = (SELECT top(1) volume15 FROM #REMAINS_stop);
				set @mass15_stop = (SELECT top(1) mass15 FROM #REMAINS_stop);
				set @dens15_stop = (SELECT top(1) dens15 FROM #REMAINS_stop);	
				-->
				set @mass_coming = (select SUM(Cist_Mass) FROM [ASUTSK].[dbo].[Incomes] where [Created_Date]>= @start and [Created_Date]< @stop and [Cist_Mass] is not null);
				if (@mass_coming is null) set @mass_coming = 0;
				set @volume_coming = (select SUM(Cist_Vol) * 1000 FROM [ASUTSK].[dbo].[Incomes] where [Created_Date]>= @start and [Created_Date]< @stop and [Cist_Vol] is not null);
				if (@volume_coming is null) set @volume_coming = 0;
				set @temp_coming = (select AVG(Cist_Temp) FROM [ASUTSK].[dbo].[Incomes] where [Created_Date]>= @start and [Created_Date]< @stop and [Cist_Temp] is not null);
				if (@temp_coming is null) set @temp_coming = 0;
				if (@volume_coming <> 0 and @volume_coming is not null) begin
					set @dens_coming = (@mass_coming/@volume_coming) * 1000;
					set @dens15_coming =  [ASUTSK].[dbo].[GET_DENS15](@type, (@mass_coming/@volume_coming) * 1000, @temp_coming);
					set @volume15_coming =  [ASUTSK].[dbo].[GET_VOLUME15](@type, (@mass_coming/@volume_coming) * 1000, @temp_coming, @volume_coming);
					set @mass15_coming =  @volume15_coming*@dens15_coming*0.001;
				end else begin
					set @dens_coming = 0
					set @dens15_coming = 0;
					set @volume15_coming = 0;
					set @mass15_coming = 0;
				end;
				-->
				set @volume_consumption =  (select sum(End_Counter - Start_Counter) FROM [ASUTSK].[dbo].[Outcomes] where [Start_Date]>= @start and [Start_Date]< @stop and Start_Counter>0 and End_Counter>0);
				if (@volume_consumption is null) set @volume_consumption = 0;
				set @dens_consumption =  (select avg((End_Dens + Start_Dens)/2) FROM [ASUTSK].[dbo].[Outcomes] where [Start_Date]>= @start and [Start_Date]< @stop and Start_Dens>0 and End_Dens>0);	
				if (@dens_consumption is null) set @dens_consumption = 0;	
				
				set @mass_consumption = @volume_consumption * @dens_consumption * 0.001;
				set @temp_consumption =(select avg((End_Temp + Start_Temp)/2) FROM [ASUTSK].[dbo].[Outcomes] where [Start_Date]>= @start and [Start_Date]< @stop and Start_Temp>0 and End_Temp>0)
				set @volume15_consumption =  null;--(SELECT  SUM([ASU_AZSlogs].[dbo].[GET_VOLUME15](@type, (mass/volume) * 1000, (stop_temp+start_temp)/2, volume)) FROM [ASU_AZSoperations].dbo.FuelSale where fuel_type=@type and stop_datetime >= @start and stop_datetime<=@stop GROUP BY fuel_type);
				set @dens15_consumption =   null;--(SELECT  AVG([ASU_AZSlogs].[dbo].[GET_DENS15](@type, (mass/volume) * 1000, (stop_temp+start_temp)/2)) FROM [ASU_AZSoperations].dbo.FuelSale where fuel_type=@type and stop_datetime >= @start and stop_datetime<=@stop GROUP BY fuel_type);
				set @mass15_consumption =  null;--@volume15_consumption*@dens15_consumption*0.001;
				-->
				insert into [ASUTSK].[dbo].[Daily_ReportRW]
				select 
				type = @type,
				date_start = @start,
				date_stop = @stop,
				volume_start = @volume_start,
				mass_start = @mass_start,
				dens_start = @dens_start,
				temp_start = @temp_start,
				volume15_start = @volume15_start,
				mass15_start = @mass15_start,
				dens15_start = @dens15_start,

				volume_coming = @volume_coming,
				mass_coming = @mass_coming,
				dens_coming = @dens_coming,
				temp_coming = @temp_coming,
				volume15_coming = @volume15_coming,
				mass15_coming = @mass15_coming,
				dens15_coming = @dens15_coming,

				volume_consumption = @volume_consumption,
				mass_consumption = @mass_consumption,
				dens_consumption = @dens_consumption,
				temp_consumption = @temp_consumption,
				volume15_consumption = @volume15_consumption,
				mass15_consumption = @mass15_consumption,
				dens15_consumption = @dens15_consumption,				
			
				volume_stop = @volume_stop,
				mass_stop = @mass_stop,
				dens_stop = @dens_stop,
				temp_stop = @temp_stop,
				volume15_stop = @volume15_stop,
				mass15_stop = @mass15_stop,
				dens15_stop= @dens15_stop,				
				
				send = null

				set @row = @row+1;
		--** КОНЕЦ ВЫБОРКИ СУТОЧНОГО РАПОРТА *********************************
		set @start = DATEADD(DAY,+1,@start);
    END;
	--return @row;
end;



SELECT TOP (1000) [id]
      ,[type]
      ,[date_start]
      ,[date_stop]
      ,[volume_start]
      ,[mass_start]
      ,[dens_start]
      ,[temp_start]
      ,[volume15_start]
      ,[mass15_start]
      ,[dens15_start]
      ,[volume_coming]
      ,[mass_coming]
      ,[dens_coming]
      ,[temp_coming]
      ,[volume15_coming]
      ,[mass15_coming]
      ,[dens15_coming]
      ,[volume_consumption]
      ,[mass_consumption]
      ,[dens_consumption]
      ,[temp_consumption]
      ,[volume15_consumption]
      ,[mass15_consumption]
      ,[dens15_consumption]
      ,[volume_stop]
      ,[mass_stop]
      ,[dens_stop]
      ,[temp_stop]
      ,[volume15_stop]
      ,[mass15_stop]
      ,[dens15_stop]
      ,[send]
  FROM [ASUTSK].[dbo].[Daily_ReportRW]