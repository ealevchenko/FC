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
    public class EFFuelSale_KGD : IRepository<FuelSale_KGD>
    {

        private EFDbContext db;

        public EFFuelSale_KGD(EFDbContext db)
        {

            this.db = db;
        }

        public Database Database
        {
            get { return this.db.Database; }
        }

        public IEnumerable<FuelSale_KGD> Get()
        {
            try
            {
                return db.Select<FuelSale_KGD>();
            }
            catch (Exception e)
            {
                return null;
            }
        }

        public FuelSale_KGD Get(int id)
        {
            try
            {
                return db.Select<FuelSale_KGD>(id);
            }
            catch (Exception e)
            {
                return null;
            }
        }

        public void Add(FuelSale_KGD item)
        {
            try
            {
                db.Insert<FuelSale_KGD>(item);
            }
            catch (Exception e)
            {

            }
        }

        public void Update(FuelSale_KGD item)
        {
            try
            {
                db.Update<FuelSale_KGD>(item);
            }
            catch (Exception e)
            {

            }
        }

        public void AddOrUpdate(FuelSale_KGD item)
        {
            try
            {
                FuelSale_KGD dbEntry = db.FuelSale_KGD.Find(item.id);
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
                FuelSale_KGD item = db.Delete<FuelSale_KGD>(id);
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

        public FuelSale_KGD Refresh(FuelSale_KGD item)
        {
            try
            {
                db.Entry(item).State = EntityState.Detached;
                return db.Select<FuelSale_KGD>(item.id);
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
