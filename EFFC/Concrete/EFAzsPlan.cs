using EFFC.Abstract;
using EFFC.Entities;
using EFFC.Concrete;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EFFC.Concrete
{
    public class EFAzsPlan : IRepository<AzsPlan>
    {

        private EFDbContext db;

        public EFAzsPlan(EFDbContext db)
        {

            this.db = db;
        }

        public EFAzsPlan()
        {

            this.db = new EFDbContext();
        }

        public Database Database
        {
            get { return this.db.Database; }
        }

        public IEnumerable<AzsPlan> Get()
        {
            try
            {
                return db.Select<AzsPlan>();
            }
            catch (Exception e)
            {
                return null;
            }
        }

        public AzsPlan Get(int id)
        {
            try
            {
                return db.Select<AzsPlan>(id);
            }
            catch (Exception e)
            {
                return null;
            }
        }

        public void Add(AzsPlan item)
        {
            try
            {
                db.Insert<AzsPlan>(item);
            }
            catch (Exception e)
            {

            }
        }

        public void Update(AzsPlan item)
        {
            try
            {
                db.Update<AzsPlan>(item);
            }
            catch (Exception e)
            {

            }
        }

        public void AddOrUpdate(AzsPlan item)
        {
            try
            {
                AzsPlan dbEntry = db.AzsPlan.Find(item.id);
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
                AzsPlan item = db.Delete<AzsPlan>(id);
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

        public AzsPlan Refresh(AzsPlan item)
        {
            try
            {
                db.Entry(item).State = EntityState.Detached;
                return db.Select<AzsPlan>(item.id);
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
