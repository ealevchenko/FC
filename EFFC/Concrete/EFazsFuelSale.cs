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

    public class EFazsFuelSale : IRepository<azsFuelSale>
    {

        private EFDbContext db;

        public EFazsFuelSale(EFDbContext db)
        {

            this.db = db;
        }

        public Database Database
        {
            get { return this.db.Database; }
        }

        public IEnumerable<azsFuelSale> Get()
        {
            try
            {
                return db.Select<azsFuelSale>();
            }
            catch (Exception e)
            {
                return null;
            }
        }

        public azsFuelSale Get(int id)
        {
            try
            {
                return db.Select<azsFuelSale>(id);
            }
            catch (Exception e)
            {
                return null;
            }
        }

        public void Add(azsFuelSale item)
        {
            try
            {
                db.Insert<azsFuelSale>(item);
            }
            catch (Exception e)
            {

            }
        }

        public void Update(azsFuelSale item)
        {
            try
            {
                db.Update<azsFuelSale>(item);
            }
            catch (Exception e)
            {

            }
        }

        public void AddOrUpdate(azsFuelSale item)
        {
            try
            {
                azsFuelSale dbEntry = db.azsFuelSale.Find(item.Id);
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
                azsFuelSale item = db.Delete<azsFuelSale>(id);
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

        public azsFuelSale Refresh(azsFuelSale item)
        {
            try
            {
                db.Entry(item).State = EntityState.Detached;
                return db.Select<azsFuelSale>(item.Id);
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
