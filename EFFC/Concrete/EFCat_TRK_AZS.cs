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
    public class EFCat_TRK_AZS : IRepository<Cat_TRK_AZS>
    {

        private EFDbContext db;

        public EFCat_TRK_AZS(EFDbContext db)
        {

            this.db = db;
        }

        public EFCat_TRK_AZS()
        {
            this.db = new EFDbContext();
        }

        public Database Database
        {
            get { return this.db.Database; }
        }

        public IEnumerable<Cat_TRK_AZS> Get()
        {
            try
            {
                return db.Select<Cat_TRK_AZS>();
            }
            catch (Exception e)
            {
                return null;
            }
        }

        public Cat_TRK_AZS Get(int id)
        {
            try
            {
                return db.Select<Cat_TRK_AZS>(id);
            }
            catch (Exception e)
            {
                return null;
            }
        }

        public void Add(Cat_TRK_AZS item)
        {
            try
            {
                db.Insert<Cat_TRK_AZS>(item);
            }
            catch (Exception e)
            {

            }
        }
        public void Add(List<Cat_TRK_AZS> items)
        {
            try
            {
                db.Inserts<Cat_TRK_AZS>(items);
            }
            catch (Exception e)
            {

            }
        }
        public void Update(Cat_TRK_AZS item)
        {
            try
            {
                db.Update<Cat_TRK_AZS>(item);
            }
            catch (Exception e)
            {

            }
        }

        public void AddOrUpdate(Cat_TRK_AZS item)
        {
            try
            {
                Cat_TRK_AZS dbEntry = db.Cat_TRK_AZS.Find(item.id);
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
                Cat_TRK_AZS item = db.Delete<Cat_TRK_AZS>(id);
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

        public Cat_TRK_AZS Refresh(Cat_TRK_AZS item)
        {
            try
            {
                db.Entry(item).State = EntityState.Detached;
                return db.Select<Cat_TRK_AZS>(item.id);
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
