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
    public class EFOil_Types : IRepository<Oil_Types>
    {

        private EFDbContext db;

        public EFOil_Types(EFDbContext db)
        {

            this.db = db;
        }

        public EFOil_Types()
        {

            this.db = new EFDbContext();
        }

        public Database Database
        {
            get { return this.db.Database; }
        }

        public IEnumerable<Oil_Types> Get()
        {
            try
            {
                return db.Select<Oil_Types>();
            }
            catch (Exception e)
            {
                return null;
            }
        }

        public Oil_Types Get(int id)
        {
            try
            {
                return db.Select<Oil_Types>(id);
            }
            catch (Exception e)
            {
                return null;
            }
        }

        public void Add(Oil_Types item)
        {
            try
            {
                db.Insert<Oil_Types>(item);
            }
            catch (Exception e)
            {

            }
        }

        public void Update(Oil_Types item)
        {
            try
            {
                db.Update<Oil_Types>(item);
            }
            catch (Exception e)
            {

            }
        }

        public void AddOrUpdate(Oil_Types item)
        {
            try
            {
                Oil_Types dbEntry = db.Oil_Types.Find(item.id);
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
                Oil_Types item = db.Delete<Oil_Types>(id);
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

        public Oil_Types Refresh(Oil_Types item)
        {
            try
            {
                db.Entry(item).State = EntityState.Detached;
                return db.Select<Oil_Types>(item.id);
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
