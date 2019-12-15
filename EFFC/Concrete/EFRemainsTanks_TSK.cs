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
    public class EFRemainsTanks_TSK : IRepository<RemainsTanks_TSK>
    {

        private EFDbContext db;

        public EFRemainsTanks_TSK(EFDbContext db)
        {

            this.db = db;
        }
        public EFRemainsTanks_TSK()
        {

            this.db = new EFDbContext();
        }

        public Database Database
        {
            get { return this.db.Database; }
        }

        public IEnumerable<RemainsTanks_TSK> Get()
        {
            try
            {
                return db.Select<RemainsTanks_TSK>();
            }
            catch (Exception e)
            {
                return null;
            }
        }

        public RemainsTanks_TSK Get(int id)
        {
            try
            {
                return db.Select<RemainsTanks_TSK>(id);
            }
            catch (Exception e)
            {
                return null;
            }
        }

        public void Add(RemainsTanks_TSK item)
        {
            try
            {
                db.Insert<RemainsTanks_TSK>(item);
            }
            catch (Exception e)
            {

            }
        }
        public void Add(List<RemainsTanks_TSK> items)
        {
            try
            {
                db.Inserts<RemainsTanks_TSK>(items);
            }
            catch (Exception e)
            {

            }
        }
        public void Update(RemainsTanks_TSK item)
        {
            try
            {
                db.Update<RemainsTanks_TSK>(item);
            }
            catch (Exception e)
            {

            }
        }

        public void AddOrUpdate(RemainsTanks_TSK item)
        {
            try
            {
                RemainsTanks_TSK dbEntry = db.RemainsTanks_TSK.Find(item.id);
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
                RemainsTanks_TSK item = db.Delete<RemainsTanks_TSK>(id);
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

        public RemainsTanks_TSK Refresh(RemainsTanks_TSK item)
        {
            try
            {
                db.Entry(item).State = EntityState.Detached;
                return db.Select<RemainsTanks_TSK>(item.id);
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
