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
    public class EFReceipts_OIL : IRepository<Receipts_OIL>
    {

        private EFDbContext db;

        public EFReceipts_OIL(EFDbContext db)
        {

            this.db = db;
        }

        public Database Database
        {
            get { return this.db.Database; }
        }

        public IEnumerable<Receipts_OIL> Get()
        {
            try
            {
                return db.Select<Receipts_OIL>();
            }
            catch (Exception e)
            {
                return null;
            }
        }

        public Receipts_OIL Get(int id)
        {
            try
            {
                return db.Select<Receipts_OIL>(id);
            }
            catch (Exception e)
            {
                return null;
            }
        }

        public void Add(Receipts_OIL item)
        {
            try
            {
                db.Insert<Receipts_OIL>(item);
            }
            catch (Exception e)
            {

            }
        }

        public void Update(Receipts_OIL item)
        {
            try
            {
                db.Update<Receipts_OIL>(item);
            }
            catch (Exception e)
            {

            }
        }

        public void AddOrUpdate(Receipts_OIL item)
        {
            try
            {
                Receipts_OIL dbEntry = db.Receipts_OIL.Find(item.id);
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
                Receipts_OIL item = db.Delete<Receipts_OIL>(id);
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

        public Receipts_OIL Refresh(Receipts_OIL item)
        {
            try
            {
                db.Entry(item).State = EntityState.Detached;
                return db.Select<Receipts_OIL>(item.id);
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
