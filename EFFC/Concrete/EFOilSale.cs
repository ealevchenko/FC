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
    public class EFOilSale : IRepository<OilSale>
    {

        private EFDbContext db;

        public EFOilSale(EFDbContext db)
        {

            this.db = db;
        }

        public Database Database
        {
            get { return this.db.Database; }
        }

        public IEnumerable<OilSale> Get()
        {
            try
            {
                return db.Select<OilSale>();
            }
            catch (Exception e)
            {
                return null;
            }
        }

        public OilSale Get(int id)
        {
            try
            {
                return db.Select<OilSale>(id);
            }
            catch (Exception e)
            {
                return null;
            }
        }

        public void Add(OilSale item)
        {
            try
            {
                db.Insert<OilSale>(item);
            }
            catch (Exception e)
            {

            }
        }

        public void Update(OilSale item)
        {
            try
            {
                db.Update<OilSale>(item);
            }
            catch (Exception e)
            {

            }
        }

        public void AddOrUpdate(OilSale item)
        {
            try
            {
                OilSale dbEntry = db.OilSale.Find(item.id);
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
                OilSale item = db.Delete<OilSale>(id);
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

        public OilSale Refresh(OilSale item)
        {
            try
            {
                db.Entry(item).State = EntityState.Detached;
                return db.Select<OilSale>(item.id);
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
