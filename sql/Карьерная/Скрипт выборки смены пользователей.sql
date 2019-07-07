/****** Script for SelectTopNRows command from SSMS  ******/
SELECT TOP (1000) [id]
      ,[UserName]
      ,[TimeStartWork]
      ,[DateStartWork]
	  --,CONVERT(DATETIME, CONVERT(char(11), [TimeStartWork] ,20) + '00:00:00', 102),

	  ,SUBSTRING(CONVERT(char(10), [TimeStartWork] ,20), 1, 4)
	  ,SUBSTRING(CONVERT(char(10), [TimeStartWork] ,20), 9, 2)
	  ,SUBSTRING(CONVERT(char(10), [TimeStartWork] ,20), 6, 2)
	  ,CONVERT(DATETIME, SUBSTRING(CONVERT(char(10), [TimeStartWork] ,20), 1, 4)+'-'+SUBSTRING(CONVERT(char(10), [TimeStartWork] ,20), 9, 2)+'-' + SUBSTRING(CONVERT(char(10), [TimeStartWork] ,20), 6, 2)+' '+ CONVERT(char(16), [DateStartWork] ,20), 102)

  FROM [ASUTSK].[dbo].[UsersChanges] order by 1 desc

  SELECT top(1) 
  operator_name = [UserName], 
  [smena_num] = id,
  smena_datetime = CONVERT(DATETIME, SUBSTRING(CONVERT(char(10), [TimeStartWork] ,20), 1, 4)+'-'+SUBSTRING(CONVERT(char(10), [TimeStartWork] ,20), 9, 2)+'-' + SUBSTRING(CONVERT(char(10), [TimeStartWork] ,20), 6, 2)+' '+ CONVERT(char(16), [DateStartWork] ,20), 102)
  FROM [ASUTSK].[dbo].[UsersChanges]
  where CONVERT(DATETIME, SUBSTRING(CONVERT(char(10), [TimeStartWork] ,20), 1, 4)+'-'+SUBSTRING(CONVERT(char(10), [TimeStartWork] ,20), 9, 2)+'-' + SUBSTRING(CONVERT(char(10), [TimeStartWork] ,20), 6, 2)+' '+ CONVERT(char(16), [DateStartWork] ,20), 102)<= '2019-07-04 10:32:35.000'
  order by CONVERT(DATETIME, SUBSTRING(CONVERT(char(10), [TimeStartWork] ,20), 1, 4)+'-'+SUBSTRING(CONVERT(char(10), [TimeStartWork] ,20), 9, 2)+'-' + SUBSTRING(CONVERT(char(10), [TimeStartWork] ,20), 6, 2)+' '+ CONVERT(char(16), [DateStartWork] ,20), 102) desc
