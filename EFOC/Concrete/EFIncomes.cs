using EFOC.Abstract;
using EFOC.Entities;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EFOC.Concrete
{
    public class EFIncomes : IRepository<Incomes>
    {

        private EFDbContext db;

        public EFIncomes(EFDbContext db)
        {

            this.db = db;
        }

        public EFIncomes()
        {

            this.db = new EFDbContext();
        }

        public Database Database
        {
            get { return this.db.Database; }
        }

        public IEnumerable<Incomes> Get()
        {
            try
            {
                return db.Select<Incomes>();
            }
            catch (Exception e)
            {
                return null;
            }
        }

        public Incomes Get(int id)
        {
            try
            {
                return db.Select<Incomes>(id);
            }
            catch (Exception e)
            {
                return null;
            }
        }

        public void Add(Incomes item)
        {
            try
            {
                db.Insert<Incomes>(item);
            }
            catch (Exception e)
            {

            }
        }

        public void Update(Incomes item)
        {
            try
            {
                db.Update<Incomes>(item);
            }
            catch (Exception e)
            {

            }
        }

        public void AddOrUpdate(Incomes item)
        {
            try
            {
                Incomes dbEntry = db.Incomes.Find(item.Id);
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
                Incomes item = db.Delete<Incomes>(id);
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

        public Incomes Refresh(Incomes item)
        {
            try
            {
                db.Entry(item).State = EntityState.Detached;
                return db.Select<Incomes>(item.Id);
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
