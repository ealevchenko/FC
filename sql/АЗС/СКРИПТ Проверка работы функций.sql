use [KRR-PA-CNT-Oil]

declare @start datetime;
declare @stop datetime;
declare @type int;
set @start = CONVERT(datetime,'2020-01-01 00:00:00',120);
set @stop = CONVERT(datetime,'2020-01-31 23:59:59',120);
set @type = 107000024;

select * from dbo.[get_DAR_AZS](@start, @stop)
select * from dbo.[get_DADR_AZS](@start, @stop, @type)