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
    public class EFFuelSale_TSK : IRepository<FuelSale_TSK>
    {

        private EFDbContext db;

        public EFFuelSale_TSK(EFDbContext db)
        {

            this.db = db;
        }

        public Database Database
        {
            get { return this.db.Database; }
        }

        public IEnumerable<FuelSale_TSK> Get()
        {
            try
            {
                return db.Select<FuelSale_TSK>();
            }
            catch (Exception e)
            {
                return null;
            }
        }

        public FuelSale_TSK Get(int id)
        {
            try
            {
                return db.Select<FuelSale_TSK>(id);
            }
            catch (Exception e)
            {
                return null;
            }
        }

        public void Add(FuelSale_TSK item)
        {
            try
            {
                db.Insert<FuelSale_TSK>(item);
            }
            catch (Exception e)
            {

            }
        }

        public void Update(FuelSale_TSK item)
        {
            try
            {
                db.Update<FuelSale_TSK>(item);
            }
            catch (Exception e)
            {

            }
        }

        public void AddOrUpdate(FuelSale_TSK item)
        {
            try
            {
                FuelSale_TSK dbEntry = db.FuelSale_TSK.Find(item.id);
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
                FuelSale_TSK item = db.Delete<FuelSale_TSK>(id);
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

        public FuelSale_TSK Refresh(FuelSale_TSK item)
        {
            try
            {
                db.Entry(item).State = EntityState.Detached;
                return db.Select<FuelSale_TSK>(item.id);
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
