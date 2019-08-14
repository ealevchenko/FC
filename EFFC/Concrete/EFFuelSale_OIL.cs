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
    public class EFFuelSale_OIL : IRepository<FuelSale_OIL>
    {

        private EFDbContext db;

        public EFFuelSale_OIL(EFDbContext db)
        {

            this.db = db;
        }

        public Database Database
        {
            get { return this.db.Database; }
        }

        public IEnumerable<FuelSale_OIL> Get()
        {
            try
            {
                return db.Select<FuelSale_OIL>();
            }
            catch (Exception e)
            {
                return null;
            }
        }

        public FuelSale_OIL Get(int id)
        {
            try
            {
                return db.Select<FuelSale_OIL>(id);
            }
            catch (Exception e)
            {
                return null;
            }
        }

        public void Add(FuelSale_OIL item)
        {
            try
            {
                db.Insert<FuelSale_OIL>(item);
            }
            catch (Exception e)
            {

            }
        }

        public void Update(FuelSale_OIL item)
        {
            try
            {
                db.Update<FuelSale_OIL>(item);
            }
            catch (Exception e)
            {

            }
        }

        public void AddOrUpdate(FuelSale_OIL item)
        {
            try
            {
                FuelSale_OIL dbEntry = db.FuelSale_OIL.Find(item.id);
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
                FuelSale_OIL item = db.Delete<FuelSale_OIL>(id);
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

        public FuelSale_OIL Refresh(FuelSale_OIL item)
        {
            try
            {
                db.Entry(item).State = EntityState.Detached;
                return db.Select<FuelSale_OIL>(item.id);
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
