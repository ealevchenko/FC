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
    public class EFSales_Benzine : IRepository<Sales_Benzine>
    {

        private EFDbContext db;

        public EFSales_Benzine(EFDbContext db)
        {

            this.db = db;
        }
        public EFSales_Benzine()
        {

            this.db = new EFDbContext();
        }
        public Database Database
        {
            get { return this.db.Database; }
        }

        public IEnumerable<Sales_Benzine> Context
        {
            get { return db.Sales_Benzine; }
        }

        public IEnumerable<Sales_Benzine> Get()
        {
            try
            {
                return db.Select<Sales_Benzine>();
            }
            catch (Exception e)
            {
                return null;
            }
        }

        public Sales_Benzine Get(int id)
        {
            try
            {
                return db.Select<Sales_Benzine>(id);
            }
            catch (Exception e)
            {
                return null;
            }
        }

        public void Add(Sales_Benzine item)
        {
            try
            {
                db.Insert<Sales_Benzine>(item);
            }
            catch (Exception e)
            {

            }
        }

        public void Add(List<Sales_Benzine> items)
        {
            try
            {
                db.Inserts<Sales_Benzine>(items);
            }
            catch (Exception e)
            {

            }
        }

        public void Update(Sales_Benzine item)
        {
            try
            {
                db.Update<Sales_Benzine>(item);
            }
            catch (Exception e)
            {

            }
        }

        public void AddOrUpdate(Sales_Benzine item)
        {
            try
            {
                Sales_Benzine dbEntry = db.Sales_Benzine.Find(item.id);
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
                Sales_Benzine item = db.Delete<Sales_Benzine>(id);
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

        public Sales_Benzine Refresh(Sales_Benzine item)
        {
            try
            {
                db.Entry(item).State = EntityState.Detached;
                return db.Select<Sales_Benzine>(item.id);
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
