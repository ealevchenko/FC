use [CC_HMI_CFG2_19_08_09_13_43_08R]

declare @start_report datetime
declare @stop_report datetime
declare @date datetime
declare @date_utl datetime

		declare @time_zone int
		set @time_zone = CAST(SUBSTRING(CONVERT(char(13), GETDATE() - GETUTCDATE() ,20), 13, 1) AS INT);

-- Проверим наличие таблицы [ASUCSM].[dbo].[RemainsTanks] если нет создадим
if OBJECT_ID(N'[ASUCSM].[dbo].[RemainsTanks]',N'U') is null
begin
CREATE TABLE [ASUCSM].[dbo].[RemainsTanks](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[Timestamp] [datetime] NULL,
	[bak] [int] NULL,
	[Temp] [float] NULL,
	[Volume] [float] NULL,
	[Water] [float] NULL,
	[Dens] [float] NULL,
	[Level] [float] NULL,
	[Mass] [float] NULL,
	[oil_type] [nvarchar](50) NULL,
 CONSTRAINT [PK_RemainsTanks] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
end

-- Получим время начала запроса и конца
set @start_report = (select top(1) [Timestamp] from [ASUCSM].[dbo].[RemainsTanks] order by [Timestamp] desc);

Set @stop_report = CONVERT(DATETIME, CONVERT(char(14), getdate() ,20) + '00:00', 102)
--Set @stop_report =  (select top(1) [Start_Date] FROM [ASUTSK].[dbo].[Incomes]  where [End_Date] is not null order by [Start_Date] desc)
-- Проверим в таблице есть данные
if (@start_report is null) begin 
	-- данных нет начнем с начала месяца

	set @start_report = CONVERT(DATETIME, CONVERT(char(14), DATEADD(HOUR,-10,GETDATE()) ,20) + '00:00', 102)
	end else begin
	set @start_report = CONVERT(DATETIME, CONVERT(char(14), DATEADD(HOUR,+1,@start_report) ,20) + '00:00', 102)

	end;
select @start_report, @stop_report
	 --Проверим диапазон запроса
if (@start_report<@stop_report)
	begin
		 set @date = @start_report;
		 declare @row int
		 set @row =0;
		  WHILE @date < @stop_report
		  BEGIN
				--** НАЧАЛО ВЫБОРКИ СУТОЧНОГО РАПОРТА *********************************				

				set @row = @row+1;
				--** 
				 set @date_utl = DATEADD(HOUR,@time_zone*-1,@date)	 
				--select @date, @date_utl
			 --****************************************************************

				declare @List varchar(1000)='1;2;3;4;5;6;7;8;9;10;11;12;13;14;15;16;17;18;19;20;21;22;23;24;25;26;27;28;29;30;31;32;33;34;35;36;37;38;39;40;41;42;43;44;45;46;47;48;49;50;51;52;53;54;55;56;57;58;59;60;61;62;63;64;65;66;67;68;69;70;71;72;73;74;75;76;77;78;79;80;81;82;83;84;85;86;87;88;89;90;91;92;93;94;95;96;97;98;99;100;101;102;103;104;105;106;107;108;109;110;111;112;113;114;115;116;117;118;119;120;121;122;123;124;125;126;127;128;129;130;131;132;133;134;135;136;137;138;139;140;141;142;143;144;145;146;147;148;149;150;151;152;153;154;155;156;157;158;159;160;161;162;163;164;165;166;167;168;169;170;171;172;173;174;175;176;177;178;179;180;181;182;183;184;185;186;187;188;189;190;191;192;193;194;195;196;197;198;199;200;201;202;203;204;205;206;207;208;209;210;211;212;213;214;215;216;217;218;219;220;221;222;223;224;225;226;227;228;229;230;231;232;233;234;235;236;237;238;239;240';
				declare @TimeBegin varchar(32) = CONVERT(varchar(23) ,@date_utl, 120);
				declare @TimeEnd varchar(32)='0000-00-00 00:00:00.999';
				declare @WHEREClause varchar(1000)= NULL;
				declare @ORDERBYClause varchar(1000) = 'Timestamp ASC';
				declare @Timestep varchar(500) = '1';
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
				--print @Statement
					EXEC( @Statement )
				END

				if @Internal_LS = 1 
				BEGIN
					EXEC sp_dropserver @server = @LS_Name
					set @LS_Name = NULL
				END
				--SET NOCOUNT OFF
					INSERT INTO [ASUCSM].[dbo].[RemainsTanks]
				   ([Timestamp]
				   ,[bak]
				   ,[Temp]
				   ,[Volume]
				   ,[Water]
				   ,[Dens]
				   ,[Level]
				   ,[Mass]
				   ,[oil_type])
				SELECT 
					DATEADD(HOUR,@time_zone*1,t.Timestamp) as 'Timestamp',
					a.bak,
					SUM(CASE a.ValueType WHEN N'Temp' THEN CAST(t.Realvalue AS float) ELSE 0 END) as Temp,
					SUM(CASE a.ValueType WHEN N'Volume' THEN CAST(t.Realvalue AS float) ELSE 0 END) as Volume,
					SUM(CASE a.ValueType WHEN N'Water' THEN CAST(t.Realvalue AS float) ELSE 0 END) as Water,	
					SUM(CASE a.ValueType WHEN N'Dens' THEN CAST(t.Realvalue AS float) ELSE 0 END) as Dens,	
					SUM(CASE a.ValueType WHEN N'Level' THEN CAST(t.Realvalue AS float) ELSE 0 END) as 'Level',	
					SUM(CASE a.ValueType WHEN N'Mass' THEN CAST(t.Realvalue AS float) ELSE 0 END) as Mass,	
					oil_type = (SELECT top(1) [name] = (select [name] from [ASUCSM].[dbo].[Cat_OZM] where id = N'000000000'+ CAST([inventory_number] AS sysname))  FROM [ASUCSM].[dbo].[TypeOil_Tanks] where [tank_num] = a.bak and [datetime]<(DATEADD(HOUR,@time_zone*1,t.Timestamp)) order by [datetime] desc)

	FROM #TagWincc as t LEFT OUTER JOIN ASUCSM.dbo.Archive as a ON t.ValueId = a.ValueID
	GROUP BY t.Timestamp, a.bak
	order by t.Timestamp, a.bak

				--** КОНЕЦ ВЫБОРКИ СУТОЧНОГО РАПОРТА *********************************
				set @date= DATEADD(HOUR,+1,@date);
		  END
	end