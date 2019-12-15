using EFFC.Abstract;
using EFFC.Entities;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EFFC.Concrete
{
    public class EFDaily_Accounting_Detali_Report_TSK : IRepository<Daily_Accounting_Detali_Report_TSK>
    {

        private EFDbContext db;

        public EFDaily_Accounting_Detali_Report_TSK(EFDbContext db)
        {

            this.db = db;
        }

        public EFDaily_Accounting_Detali_Report_TSK()
        {

            this.db = new EFDbContext();
        }

        public Database Database
        {
            get { return this.db.Database; }
        }

        public IEnumerable<Daily_Accounting_Detali_Report_TSK> Get()
        {
            try
            {
                return db.Select<Daily_Accounting_Detali_Report_TSK>();
            }
            catch (Exception e)
            {
                return null;
            }
        }

        public Daily_Accounting_Detali_Report_TSK Get(int id)
        {
            try
            {
                return db.Select<Daily_Accounting_Detali_Report_TSK>(id);
            }
            catch (Exception e)
            {
                return null;
            }
        }

        public void Add(Daily_Accounting_Detali_Report_TSK item)
        {
            try
            {
                db.Insert<Daily_Accounting_Detali_Report_TSK>(item);
            }
            catch (Exception e)
            {

            }
        }

        public void Add(List<Daily_Accounting_Detali_Report_TSK> items)
        {
            try
            {
                db.Inserts<Daily_Accounting_Detali_Report_TSK>(items);
            }
            catch (Exception e)
            {

            }
        }
        public void Update(Daily_Accounting_Detali_Report_TSK item)
        {
            try
            {
                db.Update<Daily_Accounting_Detali_Report_TSK>(item);
            }
            catch (Exception e)
            {

            }
        }

        public void AddOrUpdate(Daily_Accounting_Detali_Report_TSK item)
        {
            try
            {
                Daily_Accounting_Detali_Report_TSK dbEntry = db.Daily_Accounting_Detali_Report_TSK.Find(item.id);
                if (dbEntry == null)
                {
                    Add(item);
                }
                else
                {
                    Update(item);
                }
            }
            catch (Exception e)
            {

            }

        }

        public void Delete(int id)
        {
            try
            {
                Daily_Accounting_Detali_Report_TSK item = db.Delete<Daily_Accounting_Detali_Report_TSK>(id);
            }
            catch (Exception e)
            {

            }
        }

        public int Save()
        {
            try
            {
                return db.SaveChanges();
            }
            catch (Exception e)
            {
                return -1;
            }
        }

        public Daily_Accounting_Detali_Report_TSK Refresh(Daily_Accounting_Detali_Report_TSK item)
        {
            try
            {
                db.Entry(item).State = EntityState.Detached;
                return db.Select<Daily_Accounting_Detali_Report_TSK>(item.id);
            }
            catch (Exception e)
            {
                return null;
            }
        }

        private bool disposed = false;

        public virtual void Dispose(bool disposing)
        {
            if (!this.disposed)
            {
                if (disposing)
                {
                    db.Dispose();
                }
            }
            this.disposed = true;
        }

        public void Dispose()
        {
            Dispose(true);
            GC.SuppressFinalize(this);
        }

    }
}
