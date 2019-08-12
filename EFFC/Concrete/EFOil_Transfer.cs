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
    public class EFOil_Transfer : IRepository<Oil_Transfer>
    {

        private EFDbContext db;

        public EFOil_Transfer(EFDbContext db)
        {

            this.db = db;
        }

        public Database Database
        {
            get { return this.db.Database; }
        }

        public IEnumerable<Oil_Transfer> Get()
        {
            try
            {
                return db.Select<Oil_Transfer>();
            }
            catch (Exception e)
            {
                return null;
            }
        }

        public Oil_Transfer Get(int id)
        {
            try
            {
                return db.Select<Oil_Transfer>(id);
            }
            catch (Exception e)
            {
                return null;
            }
        }

        public void Add(Oil_Transfer item)
        {
            try
            {
                db.Insert<Oil_Transfer>(item);
            }
            catch (Exception e)
            {

            }
        }

        public void Update(Oil_Transfer item)
        {
            try
            {
                db.Update<Oil_Transfer>(item);
            }
            catch (Exception e)
            {

            }
        }

        public void AddOrUpdate(Oil_Transfer item)
        {
            try
            {
                Oil_Transfer dbEntry = db.Oil_Transfer.Find(item.id);
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
                Oil_Transfer item = db.Delete<Oil_Transfer>(id);
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

        public Oil_Transfer Refresh(Oil_Transfer item)
        {
            try
            {
                db.Entry(item).State = EntityState.Detached;
                return db.Select<Oil_Transfer>(item.id);
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
