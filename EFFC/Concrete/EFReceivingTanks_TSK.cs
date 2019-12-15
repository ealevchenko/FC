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
    public class EFReceivingTanks_TSK : IRepository<ReceivingTanks_TSK>
    {

        private EFDbContext db;

        public EFReceivingTanks_TSK(EFDbContext db)
        {

            this.db = db;
        }

        public EFReceivingTanks_TSK()
        {
            this.db = new EFDbContext();
        }

        public Database Database
        {
            get { return this.db.Database; }
        }

        public IEnumerable<ReceivingTanks_TSK> Get()
        {
            try
            {
                return db.Select<ReceivingTanks_TSK>();
            }
            catch (Exception e)
            {
                return null;
            }
        }

        public ReceivingTanks_TSK Get(int id)
        {
            try
            {
                return db.Select<ReceivingTanks_TSK>(id);
            }
            catch (Exception e)
            {
                return null;
            }
        }

        public void Add(ReceivingTanks_TSK item)
        {
            try
            {
                db.Insert<ReceivingTanks_TSK>(item);
            }
            catch (Exception e)
            {

            }
        }
        public void Add(List<ReceivingTanks_TSK> items)
        {
            try
            {
                db.Inserts<ReceivingTanks_TSK>(items);
            }
            catch (Exception e)
            {

            }
        }
        public void Update(ReceivingTanks_TSK item)
        {
            try
            {
                db.Update<ReceivingTanks_TSK>(item);
            }
            catch (Exception e)
            {

            }
        }

        public void AddOrUpdate(ReceivingTanks_TSK item)
        {
            try
            {
                ReceivingTanks_TSK dbEntry = db.ReceivingTanks_TSK.Find(item.id);
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
                ReceivingTanks_TSK item = db.Delete<ReceivingTanks_TSK>(id);
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

        public ReceivingTanks_TSK Refresh(ReceivingTanks_TSK item)
        {
            try
            {
                db.Entry(item).State = EntityState.Detached;
                return db.Select<ReceivingTanks_TSK>(item.id);
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
