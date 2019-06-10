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
    public class EFOutcomes : IRepository<Outcomes>
    {

        private EFDbContext db;

        public EFOutcomes(EFDbContext db)
        {

            this.db = db;
        }

        public EFOutcomes()
        {

            this.db = new EFDbContext();
        }

        public Database Database
        {
            get { return this.db.Database; }
        }

        public IEnumerable<Outcomes> Get()
        {
            try
            {
                return db.Select<Outcomes>();
            }
            catch (Exception e)
            {
                return null;
            }
        }

        public Outcomes Get(int id)
        {
            try
            {
                return db.Select<Outcomes>(id);
            }
            catch (Exception e)
            {
                return null;
            }
        }

        public void Add(Outcomes item)
        {
            try
            {
                db.Insert<Outcomes>(item);
            }
            catch (Exception e)
            {

            }
        }

        public void Update(Outcomes item)
        {
            try
            {
                db.Update<Outcomes>(item);
            }
            catch (Exception e)
            {

            }
        }

        public void AddOrUpdate(Outcomes item)
        {
            try
            {
                Outcomes dbEntry = db.Outcomes.Find(item.Id);
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
                Outcomes item = db.Delete<Outcomes>(id);
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

        public Outcomes Refresh(Outcomes item)
        {
            try
            {
                db.Entry(item).State = EntityState.Detached;
                return db.Select<Outcomes>(item.Id);
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
