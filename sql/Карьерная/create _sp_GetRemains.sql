USE [CC_HMI_CUNJ_19_07_11_10_29_56R]
GO

/****** Object:  StoredProcedure [dbo].[GetRemains]    Script Date: 14.07.2019 11:11:12 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO




-- =============================================
-- Description:	������� �������� �� ��������� �����
-- =============================================
CREATE PROCEDURE [dbo].[GetRemains]
	@date datetime
AS
BEGIN
    
	declare @time_zone int
	set @time_zone = CAST(SUBSTRING(CONVERT(char(13), GETDATE() - GETUTCDATE() ,20), 13, 1) AS INT);
	
	set @date = DATEADD(HOUR,@time_zone*-1,@date)

	declare @List varchar(1000)='6;7;8;9;10;11';
    declare @TimeBegin varchar(32) = CONVERT(varchar(23) ,@date, 120);
    declare @TimeEnd varchar(32)='0000-00-00 00:00:00.999';
    --declare @TimeEnd varchar(32)= CONVERT(varchar(23) ,DATEADD(second,+1,@date), 120);
    --declare @TimeEnd varchar(32) = CONVERT(varchar(23) ,@date, 120);
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

END
GO


