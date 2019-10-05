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
    public class EFRemainsTanks_AZS : IRepository<RemainsTanks_AZS>
    {

        private EFDbContext db;

        public EFRemainsTanks_AZS(EFDbContext db)
        {

            this.db = db;
        }
        public EFRemainsTanks_AZS()
        {

            this.db = new EFDbContext();
        }

        public Database Database
        {
            get { return this.db.Database; }
        }

        public IEnumerable<RemainsTanks_AZS> Get()
        {
            try
            {
                return db.Select<RemainsTanks_AZS>();
            }
            catch (Exception e)
            {
                return null;
            }
        }

        public RemainsTanks_AZS Get(int id)
        {
            try
            {
                return db.Select<RemainsTanks_AZS>(id);
            }
            catch (Exception e)
            {
                return null;
            }
        }

        public void Add(RemainsTanks_AZS item)
        {
            try
            {
                db.Insert<RemainsTanks_AZS>(item);
            }
            catch (Exception e)
            {

            }
        }
        public void Add(List<RemainsTanks_AZS> items)
        {
            try
            {
                db.Inserts<RemainsTanks_AZS>(items);
            }
            catch (Exception e)
            {

            }
        }
        public void Update(RemainsTanks_AZS item)
        {
            try
            {
                db.Update<RemainsTanks_AZS>(item);
            }
            catch (Exception e)
            {

            }
        }

        public void AddOrUpdate(RemainsTanks_AZS item)
        {
            try
            {
                RemainsTanks_AZS dbEntry = db.RemainsTanks_AZS.Find(item.id);
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
                RemainsTanks_AZS item = db.Delete<RemainsTanks_AZS>(id);
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

        public RemainsTanks_AZS Refresh(RemainsTanks_AZS item)
        {
            try
            {
                db.Entry(item).State = EntityState.Detached;
                return db.Select<RemainsTanks_AZS>(item.id);
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
