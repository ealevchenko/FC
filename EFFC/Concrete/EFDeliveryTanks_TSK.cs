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
    public class EFDeliveryTanks_TSK : IRepository<DeliveryTanks_TSK>
    {

        private EFDbContext db;

        public EFDeliveryTanks_TSK(EFDbContext db)
        {

            this.db = db;
        }
        public EFDeliveryTanks_TSK()
        {

            this.db = new EFDbContext();
        }
        public Database Database
        {
            get { return this.db.Database; }
        }

        public IEnumerable<DeliveryTanks_TSK> Get()
        {
            try
            {
                return db.Select<DeliveryTanks_TSK>();
            }
            catch (Exception e)
            {
                return null;
            }
        }

        public DeliveryTanks_TSK Get(int id)
        {
            try
            {
                return db.Select<DeliveryTanks_TSK>(id);
            }
            catch (Exception e)
            {
                return null;
            }
        }

        public void Add(DeliveryTanks_TSK item)
        {
            try
            {
                db.Insert<DeliveryTanks_TSK>(item);
            }
            catch (Exception e)
            {

            }
        }

        public void Add(List<DeliveryTanks_TSK> items)
        {
            try
            {
                db.Inserts<DeliveryTanks_TSK>(items);
            }
            catch (Exception e)
            {

            }
        }

        public void Update(DeliveryTanks_TSK item)
        {
            try
            {
                db.Update<DeliveryTanks_TSK>(item);
            }
            catch (Exception e)
            {

            }
        }

        public void AddOrUpdate(DeliveryTanks_TSK item)
        {
            try
            {
                DeliveryTanks_TSK dbEntry = db.DeliveryTanks_TSK.Find(item.id);
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
                DeliveryTanks_TSK item = db.Delete<DeliveryTanks_TSK>(id);
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

        public DeliveryTanks_TSK Refresh(DeliveryTanks_TSK item)
        {
            try
            {
                db.Entry(item).State = EntityState.Detached;
                return db.Select<DeliveryTanks_TSK>(item.id);
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
