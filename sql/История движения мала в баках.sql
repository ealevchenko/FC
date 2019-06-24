use ASUCSM
SELECT TankNo, min(DateStarted) as 'first',OilType
FROM         dbo.Outcomes
GROUP BY OilType, TankNo
order by TankNo, min(DateStarted)