using EFFC.Abstract;
using EFFC.Entities;
using EFFC.Concrete;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EFFC.Concrete
{
    public class EFCards : IRepository<Cards>
    {

        private EFDbContext db;

        public EFCards(EFDbContext db)
        {

            this.db = db;
        }

        public EFCards()
        {

            this.db = new EFDbContext();
        }

        public Database Database
        {
            get { return this.db.Database; }
        }

        public IEnumerable<Cards> Get()
        {
            try
            {
                return db.Select<Cards>();
            }
            catch (Exception e)
            {
                return null;
            }
        }

        public Cards Get(int id)
        {
            try
            {
                return db.Select<Cards>(id);
            }
            catch (Exception e)
            {
                return null;
            }
        }

        public void Add(Cards item)
        {
            try
            {
                db.Insert<Cards>(item);
            }
            catch (Exception e)
            {

            }
        }

        public void Update(Cards item)
        {
            try
            {
                db.Update<Cards>(item);
            }
            catch (Exception e)
            {

            }
        }

        public void AddOrUpdate(Cards item)
        {
            try
            {
                Cards dbEntry = db.Cards.Find(item.Id);
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
                Cards item = db.Delete<Cards>(id);
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

        public Cards Refresh(Cards item)
        {
            try
            {
                db.Entry(item).State = EntityState.Detached;
                return db.Select<Cards>(item.Id);
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
