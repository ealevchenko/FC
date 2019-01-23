using EFFC.Abstract;
using EFFC.Entities;
using EFFC.Concrete;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Data.Entity;

namespace EFFC.Concrete
{

    public class EFazsTankStates : IRepository<azsTankStates>
    {

        private EFDbContext db;

        public EFazsTankStates(EFDbContext db)
        {

            this.db = db;
        }

        public Database Database
        {
            get { return this.db.Database; }
        }

        public IEnumerable<azsTankStates> Get()
        {
            try
            {
                return db.Select<azsTankStates>();
            }
            catch (Exception e)
            {
                return null;
            }
        }

        public azsTankStates Get(int id)
        {
            try
            {
                return db.Select<azsTankStates>(id);
            }
            catch (Exception e)
            {
                return null;
            }
        }

        public void Add(azsTankStates item)
        {
            try
            {
                db.Insert<azsTankStates>(item);
            }
            catch (Exception e)
            {

            }
        }

        public void Update(azsTankStates item)
        {
            try
            {
                db.Update<azsTankStates>(item);
            }
            catch (Exception e)
            {

            }
        }

        public void AddOrUpdate(azsTankStates item)
        {
            try
            {
                azsTankStates dbEntry = db.azsTankStates.Find(item.Id);
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
                azsTankStates item = db.Delete<azsTankStates>(id);
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

        public azsTankStates Refresh(azsTankStates item)
        {
            try
            {
                db.Entry(item).State = EntityState.Detached;
                return db.Select<azsTankStates>(item.Id);
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
