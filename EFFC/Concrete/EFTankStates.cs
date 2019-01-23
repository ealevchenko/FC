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

    public class EFTankStates : IRepository<TankStates>
    {

        private EFDbContext db;

        public EFTankStates(EFDbContext db)
        {

            this.db = db;
        }

        public Database Database
        {
            get { return this.db.Database; }
        }

        public IEnumerable<TankStates> Get()
        {
            try
            {
                return db.Select<TankStates>();
            }
            catch (Exception e)
            {
                return null;
            }
        }

        public TankStates Get(int id)
        {
            try
            {
                return db.Select<TankStates>(id);
            }
            catch (Exception e)
            {
                return null;
            }
        }

        public void Add(TankStates item)
        {
            try
            {
                db.Insert<TankStates>(item);
            }
            catch (Exception e)
            {

            }
        }

        public void Update(TankStates item)
        {
            try
            {
                db.Update<TankStates>(item);
            }
            catch (Exception e)
            {

            }
        }

        public void AddOrUpdate(TankStates item)
        {
            try
            {
                TankStates dbEntry = db.TankStates.Find(item.Id);
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
                TankStates item = db.Delete<TankStates>(id);
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

        public TankStates Refresh(TankStates item)
        {
            try
            {
                db.Entry(item).State = EntityState.Detached;
                return db.Select<TankStates>(item.Id);
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
