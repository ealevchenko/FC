use [KRR-PA-CNT-Oil]

declare @start datetime;
declare @stop datetime;
declare @type int;
set @start = CONVERT(datetime,'2020-01-01 00:00:00',120);
set @stop = CONVERT(datetime,'2020-01-31 23:59:59',120);
set @type = 107000024;

--Select * from dbo.[get_DAR_AZS](convert(datetime, '2020-01-01 00:00:00', 120), convert(datetime, '2020-01-31 23:59:59', 120))
--Select * from dbo.[get_DADR_AZS](convert(datetime, '2020-01-01 00:00:00', 120), convert(datetime, '2020-01-14 23:59:59', 120),107000022)
--select * from dbo.[get_DAR_AZS](@start, @stop)
select * from dbo.[get_DADR_AZS](convert(datetime, '2020-01-01 00:00:00', 120), convert(datetime, '2020-01-14 23:59:59', 120), 107000024)
Select * from dbo.[get_DADR_AZS](convert(datetime, '2020-01-01 00:00:00', 120), convert(datetime, '2020-01-14 23:59:59', 120), 107000022)