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
    public class EFRemainsTanks_OIL : IRepository<RemainsTanks_OIL>
    {

        private EFDbContext db;

        public EFRemainsTanks_OIL(EFDbContext db)
        {

            this.db = db;
        }

        public Database Database
        {
            get { return this.db.Database; }
        }

        public IEnumerable<RemainsTanks_OIL> Get()
        {
            try
            {
                return db.Select<RemainsTanks_OIL>();
            }
            catch (Exception e)
            {
                return null;
            }
        }

        public RemainsTanks_OIL Get(int id)
        {
            try
            {
                return db.Select<RemainsTanks_OIL>(id);
            }
            catch (Exception e)
            {
                return null;
            }
        }

        public void Add(RemainsTanks_OIL item)
        {
            try
            {
                db.Insert<RemainsTanks_OIL>(item);
            }
            catch (Exception e)
            {

            }
        }

        public void Update(RemainsTanks_OIL item)
        {
            try
            {
                db.Update<RemainsTanks_OIL>(item);
            }
            catch (Exception e)
            {

            }
        }

        public void AddOrUpdate(RemainsTanks_OIL item)
        {
            try
            {
                RemainsTanks_OIL dbEntry = db.RemainsTanks_OIL.Find(item.id);
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
                RemainsTanks_OIL item = db.Delete<RemainsTanks_OIL>(id);
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

        public RemainsTanks_OIL Refresh(RemainsTanks_OIL item)
        {
            try
            {
                db.Entry(item).State = EntityState.Detached;
                return db.Select<RemainsTanks_OIL>(item.id);
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
