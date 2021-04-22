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
    public class EFDaily_Report_Benzene : IRepository<Daily_Report_Benzene>
    {

        private EFDbContext db;

        public EFDaily_Report_Benzene(EFDbContext db)
        {

            this.db = db;
        }
        public EFDaily_Report_Benzene()
        {

            this.db = new EFDbContext();
        }
        public Database Database
        {
            get { return this.db.Database; }
        }

        public IEnumerable<Daily_Report_Benzene> Context
        {
            get { return db.Daily_Report_Benzene; }
        }

        public IEnumerable<Daily_Report_Benzene> Get()
        {
            try
            {
                return db.Select<Daily_Report_Benzene>();
            }
            catch (Exception e)
            {
                return null;
            }
        }

        public Daily_Report_Benzene Get(int id)
        {
            try
            {
                return db.Select<Daily_Report_Benzene>(id);
            }
            catch (Exception e)
            {
                return null;
            }
        }

        public void Add(Daily_Report_Benzene item)
        {
            try
            {
                db.Insert<Daily_Report_Benzene>(item);
            }
            catch (Exception e)
            {

            }
        }

        public void Add(List<Daily_Report_Benzene> items)
        {
            try
            {
                db.Inserts<Daily_Report_Benzene>(items);
            }
            catch (Exception e)
            {

            }
        }

        public void Update(Daily_Report_Benzene item)
        {
            try
            {
                db.Update<Daily_Report_Benzene>(item);
            }
            catch (Exception e)
            {

            }
        }

        public void AddOrUpdate(Daily_Report_Benzene item)
        {
            try
            {
                Daily_Report_Benzene dbEntry = db.Daily_Report_Benzene.Find(item.id);
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
                Daily_Report_Benzene item = db.Delete<Daily_Report_Benzene>(id);
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

        public Daily_Report_Benzene Refresh(Daily_Report_Benzene item)
        {
            try
            {
                db.Entry(item).State = EntityState.Detached;
                return db.Select<Daily_Report_Benzene>(item.id);
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
