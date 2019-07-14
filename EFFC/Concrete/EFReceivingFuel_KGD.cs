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
    public class EFReceivingFuel_KGD : IRepository<ReceivingFuel_KGD>
    {

        private EFDbContext db;

        public EFReceivingFuel_KGD(EFDbContext db)
        {

            this.db = db;
        }

        public Database Database
        {
            get { return this.db.Database; }
        }

        public IEnumerable<ReceivingFuel_KGD> Get()
        {
            try
            {
                return db.Select<ReceivingFuel_KGD>();
            }
            catch (Exception e)
            {
                return null;
            }
        }

        public ReceivingFuel_KGD Get(int id)
        {
            try
            {
                return db.Select<ReceivingFuel_KGD>(id);
            }
            catch (Exception e)
            {
                return null;
            }
        }

        public void Add(ReceivingFuel_KGD item)
        {
            try
            {
                db.Insert<ReceivingFuel_KGD>(item);
            }
            catch (Exception e)
            {

            }
        }

        public void Update(ReceivingFuel_KGD item)
        {
            try
            {
                db.Update<ReceivingFuel_KGD>(item);
            }
            catch (Exception e)
            {

            }
        }

        public void AddOrUpdate(ReceivingFuel_KGD item)
        {
            try
            {
                ReceivingFuel_KGD dbEntry = db.ReceivingFuel_KGD.Find(item.id);
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
                ReceivingFuel_KGD item = db.Delete<ReceivingFuel_KGD>(id);
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

        public ReceivingFuel_KGD Refresh(ReceivingFuel_KGD item)
        {
            try
            {
                db.Entry(item).State = EntityState.Detached;
                return db.Select<ReceivingFuel_KGD>(item.id);
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
