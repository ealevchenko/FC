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
    public class EFRemains_TSK : IRepository<Remains_TSK>
    {

        private EFDbContext db;

        public EFRemains_TSK(EFDbContext db)
        {

            this.db = db;
        }

        public Database Database
        {
            get { return this.db.Database; }
        }

        public IEnumerable<Remains_TSK> Get()
        {
            try
            {
                return db.Select<Remains_TSK>();
            }
            catch (Exception e)
            {
                return null;
            }
        }

        public Remains_TSK Get(int id)
        {
            try
            {
                return db.Select<Remains_TSK>(id);
            }
            catch (Exception e)
            {
                return null;
            }
        }

        public void Add(Remains_TSK item)
        {
            try
            {
                db.Insert<Remains_TSK>(item);
            }
            catch (Exception e)
            {

            }
        }

        public void Update(Remains_TSK item)
        {
            try
            {
                db.Update<Remains_TSK>(item);
            }
            catch (Exception e)
            {

            }
        }

        public void AddOrUpdate(Remains_TSK item)
        {
            try
            {
                Remains_TSK dbEntry = db.Remains_TSK.Find(item.id);
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
                Remains_TSK item = db.Delete<Remains_TSK>(id);
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

        public Remains_TSK Refresh(Remains_TSK item)
        {
            try
            {
                db.Entry(item).State = EntityState.Detached;
                return db.Select<Remains_TSK>(item.id);
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
