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
    public class EFReceivingFuel_TSK : IRepository<ReceivingFuel_TSK>
    {

        private EFDbContext db;

        public EFReceivingFuel_TSK(EFDbContext db)
        {

            this.db = db;
        }

        public Database Database
        {
            get { return this.db.Database; }
        }

        public IEnumerable<ReceivingFuel_TSK> Get()
        {
            try
            {
                return db.Select<ReceivingFuel_TSK>();
            }
            catch (Exception e)
            {
                return null;
            }
        }

        public ReceivingFuel_TSK Get(int id)
        {
            try
            {
                return db.Select<ReceivingFuel_TSK>(id);
            }
            catch (Exception e)
            {
                return null;
            }
        }

        public void Add(ReceivingFuel_TSK item)
        {
            try
            {
                db.Insert<ReceivingFuel_TSK>(item);
            }
            catch (Exception e)
            {

            }
        }

        public void Update(ReceivingFuel_TSK item)
        {
            try
            {
                db.Update<ReceivingFuel_TSK>(item);
            }
            catch (Exception e)
            {

            }
        }

        public void AddOrUpdate(ReceivingFuel_TSK item)
        {
            try
            {
                ReceivingFuel_TSK dbEntry = db.ReceivingFuel_TSK.Find(item.id);
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
                ReceivingFuel_TSK item = db.Delete<ReceivingFuel_TSK>(id);
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

        public ReceivingFuel_TSK Refresh(ReceivingFuel_TSK item)
        {
            try
            {
                db.Entry(item).State = EntityState.Detached;
                return db.Select<ReceivingFuel_TSK>(item.id);
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
