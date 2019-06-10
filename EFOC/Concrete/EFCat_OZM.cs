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
    public class EFCat_OZM : IRepository<Cat_OZM>
    {

        private EFDbContext db;

        public EFCat_OZM(EFDbContext db)
        {

            this.db = db;
        }

        public EFCat_OZM()
        {

            this.db = new EFDbContext();
        }

        public Database Database
        {
            get { return this.db.Database; }
        }

        public IEnumerable<Cat_OZM> Get()
        {
            try
            {
                return db.Select<Cat_OZM>();
            }
            catch (Exception e)
            {
                return null;
            }
        }

        public Cat_OZM Get(int id)
        {
            try
            {
                return db.Select<Cat_OZM>(id);
            }
            catch (Exception e)
            {
                return null;
            }
        }

        public void Add(Cat_OZM item)
        {
            try
            {
                db.Insert<Cat_OZM>(item);
            }
            catch (Exception e)
            {

            }
        }

        public void Update(Cat_OZM item)
        {
            try
            {
                db.Update<Cat_OZM>(item);
            }
            catch (Exception e)
            {

            }
        }

        public void AddOrUpdate(Cat_OZM item)
        {
            try
            {
                Cat_OZM dbEntry = db.Cat_OZM.Find(item.id);
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
                Cat_OZM item = db.Delete<Cat_OZM>(id);
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

        public Cat_OZM Refresh(Cat_OZM item)
        {
            try
            {
                db.Entry(item).State = EntityState.Detached;
                return db.Select<Cat_OZM>(item.id);
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
