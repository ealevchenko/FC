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
    public class EFDeliveryTanks_AZS : IRepository<DeliveryTanks_AZS>
    {

        private EFDbContext db;

        public EFDeliveryTanks_AZS(EFDbContext db)
        {

            this.db = db;
        }
        public EFDeliveryTanks_AZS()
        {

            this.db = new EFDbContext();
        }
        public Database Database
        {
            get { return this.db.Database; }
        }

        public IEnumerable<DeliveryTanks_AZS> Get()
        {
            try
            {
                return db.Select<DeliveryTanks_AZS>();
            }
            catch (Exception e)
            {
                return null;
            }
        }

        public DeliveryTanks_AZS Get(int id)
        {
            try
            {
                return db.Select<DeliveryTanks_AZS>(id);
            }
            catch (Exception e)
            {
                return null;
            }
        }

        public void Add(DeliveryTanks_AZS item)
        {
            try
            {
                db.Insert<DeliveryTanks_AZS>(item);
            }
            catch (Exception e)
            {

            }
        }

        public void Add(List<DeliveryTanks_AZS> items)
        {
            try
            {
                db.Inserts<DeliveryTanks_AZS>(items);
            }
            catch (Exception e)
            {

            }
        }

        public void Update(DeliveryTanks_AZS item)
        {
            try
            {
                db.Update<DeliveryTanks_AZS>(item);
            }
            catch (Exception e)
            {

            }
        }

        public void AddOrUpdate(DeliveryTanks_AZS item)
        {
            try
            {
                DeliveryTanks_AZS dbEntry = db.DeliveryTanks_AZS.Find(item.id);
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
                DeliveryTanks_AZS item = db.Delete<DeliveryTanks_AZS>(id);
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

        public DeliveryTanks_AZS Refresh(DeliveryTanks_AZS item)
        {
            try
            {
                db.Entry(item).State = EntityState.Detached;
                return db.Select<DeliveryTanks_AZS>(item.id);
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
