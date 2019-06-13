use CC_HMI_CFG2_19_05_14_11_51_06R

    declare @List varchar(1000)='1;2;3;4;5;6;7;8;9;10;11;12;13;14;15;16;17;18;19;20;21;22;23;24;25;26;27;28;29;30;31;32;33;34;35;36;37;38;39;40;41;42;43;44;45;46;47;48;49;50;51;52;53;54;55;56;57;58;59;60;61;62;63;64;65;66;67;68;69;70;71;72;73;74;75;76;77;78;79;80;81;82;83;84;85;86;87;88;89;90;91;92;93;94;95;96;97;98;99;100;101;102;103;104;105;106;107;108;109;110;111;112;113;114;115;116;117;118;119;120;121;122;123;124;125;126;127;128;129;130;131;132;133;134;135;136;137;138;139;140;141;142;143;144;145;146;147;148;149;150;151;152;153;154;155;156;157;158;159;160;161;162;163;164;165;166;167;168;169;170;171;172;173;174;175;176;177;178;179;180;181;182;183;184;185;186;187;188;189;190;191;192;193;194;195;196;197;198;199;200;201;202;203;204;205;206;207;208;209;210;211;212;213;214;215;216;217;218;219;220;221;222;223;224;225;226;227;228;229;230;231;232;233;234;235;236;237;238;239;240;241;242;243;244';
    declare @TimeBegin varchar(32)='2019-06-10 14:27:16';
    declare @TimeEnd varchar(32)='2019-06-10 14:27:17';
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

	IF OBJECT_ID (N'ASUCSM.dbo.TagWincc', N'U') IS NOT NULL  
	begin 
	drop table ASUCSM.dbo.TagWincc end 
	create table ASUCSM.dbo.TagWincc ( ValueId int, [Timestamp] datetime, Realvalue varchar(250), quality int, flags int ) 

    SET @Statement = 'Insert into ASUCSM.dbo.TagWincc SELECT * FROM OPENQUERY('+@LS_Name+',''Tag:R,('+@List+'),'''''+@TimeBegin+''''','''''+@TimeEnd+''''''

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

    SELECT t.ValueId, 
    t.Timestamp, 
    t.Realvalue, 
    t.quality, 
    t.flags, 
    a.ValueName, 
    a.ValueType, 
    a.bak,
    oil_type = (SELECT TOP 1 [OilType] FROM [ASUCSM].[dbo].[Incomes] where [TankNo]= Cast(a.bak as sysname)  and [DateStarted]<=t.Timestamp order by [DateStarted] desc)
FROM ASUCSM.dbo.TagWincc as t LEFT OUTER JOIN
                      ASUCSM.dbo.Archive as a ON t.ValueId = a.ValueID
ORDER BY a.bak, a.ValueType