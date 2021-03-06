USE [ASUCSM]
GO
/****** Object:  View [dbo].[Perek_Rep_View]    Script Date: 13.08.2019 23:02:15 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE VIEW [dbo].[Perek_Rep_View]
AS
SELECT     in_tank, out_tank, OilType, dt, out_dv, out_dens, out_dm AS out_dm_real, CAST(out_dv * out_dens / 1000 AS decimal(10, 3)) AS out_dm_calc, in_dv, in_dens, in_dm AS in_dm_real, 
                      CAST(in_dv * in_dens / 1000 AS decimal(10, 3)) AS in_dm_calc, CAST(ABS(out_dv - in_dv) AS decimal(10, 3)) AS delta_v, CAST(ABS(out_dm - in_dm) AS decimal(10, 3)) AS delta_m_real, 
                      CAST(ABS(out_dv * out_dens - in_dv * in_dens) / 1000 AS decimal(10, 3)) AS delta_m_calc
FROM         (SELECT      in_tank, out_tank, OilType, out_created AS dt, CAST(out_start_vol - out_stop_vol AS decimal(10, 3)) AS out_dv, CAST(out_start_mass - out_stop_mass AS decimal(10, 3)) AS out_dm, 
                                              CAST(out_stop_dens AS decimal(10, 1)) AS out_dens, CAST(in_stop_vol - in_start_vol AS decimal(10, 3)) AS in_dv, CAST(in_stop_mass - in_start_mass AS decimal(10, 3)) AS in_dm, 
                                              CAST(in_stop_dens AS decimal(10, 3)) AS in_dens
                       FROM          dbo.Perek_View) AS a

GO
EXEC sys.sp_addextendedproperty @name=N'MS_DiagramPane1', @value=N'[0E232FF0-B466-11cf-A24F-00AA00A3EFFF, 1.00]
Begin DesignProperties = 
   Begin PaneConfigurations = 
      Begin PaneConfiguration = 0
         NumPanes = 4
         Configuration = "(H (1[40] 4[20] 2[20] 3) )"
      End
      Begin PaneConfiguration = 1
         NumPanes = 3
         Configuration = "(H (1 [50] 4 [25] 3))"
      End
      Begin PaneConfiguration = 2
         NumPanes = 3
         Configuration = "(H (1 [50] 2 [25] 3))"
      End
      Begin PaneConfiguration = 3
         NumPanes = 3
         Configuration = "(H (4[30] 2[40] 3) )"
      End
      Begin PaneConfiguration = 4
         NumPanes = 2
         Configuration = "(H (1 [56] 3))"
      End
      Begin PaneConfiguration = 5
         NumPanes = 2
         Configuration = "(H (2[66] 3) )"
      End
      Begin PaneConfiguration = 6
         NumPanes = 2
         Configuration = "(H (4 [50] 3))"
      End
      Begin PaneConfiguration = 7
         NumPanes = 1
         Configuration = "(V (3))"
      End
      Begin PaneConfiguration = 8
         NumPanes = 3
         Configuration = "(H (1[56] 4[18] 2) )"
      End
      Begin PaneConfiguration = 9
         NumPanes = 2
         Configuration = "(H (1 [75] 4))"
      End
      Begin PaneConfiguration = 10
         NumPanes = 2
         Configuration = "(H (1[66] 2) )"
      End
      Begin PaneConfiguration = 11
         NumPanes = 2
         Configuration = "(H (4 [60] 2))"
      End
      Begin PaneConfiguration = 12
         NumPanes = 1
         Configuration = "(H (1) )"
      End
      Begin PaneConfiguration = 13
         NumPanes = 1
         Configuration = "(V (4))"
      End
      Begin PaneConfiguration = 14
         NumPanes = 1
         Configuration = "(V (2))"
      End
      ActivePaneConfig = 5
   End
   Begin DiagramPane = 
      PaneHidden = 
      Begin Origin = 
         Top = 0
         Left = 0
      End
      Begin Tables = 
         Begin Table = "a"
            Begin Extent = 
               Top = 6
               Left = 38
               Bottom = 126
               Right = 198
            End
            DisplayFlags = 280
            TopColumn = 0
         End
      End
   End
   Begin SQLPane = 
   End
   Begin DataPane = 
      Begin ParameterDefaults = ""
      End
   End
   Begin CriteriaPane = 
      PaneHidden = 
      Begin ColumnWidths = 11
         Column = 1440
         Alias = 900
         Table = 1170
         Output = 720
         Append = 1400
         NewValue = 1170
         SortType = 1350
         SortOrder = 1410
         GroupBy = 1350
         Filter = 1350
         Or = 1350
         Or = 1350
         Or = 1350
      End
   End
End
' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'VIEW',@level1name=N'Perek_Rep_View'
GO
EXEC sys.sp_addextendedproperty @name=N'MS_DiagramPaneCount', @value=1 , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'VIEW',@level1name=N'Perek_Rep_View'
GO
