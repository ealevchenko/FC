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
    public class EFPerek_Rep_View : IRepository<Perek_Rep_View>
    {

        private EFDbContext db;

        public EFPerek_Rep_View(EFDbContext db)
        {

            this.db = db;
        }

        public EFPerek_Rep_View()
        {

            this.db = new EFDbContext();
        }

        public Database Database
        {
            get { return this.db.Database; }
        }

        public IEnumerable<Perek_Rep_View> Get()
        {
            try
            {
                return db.Select<Perek_Rep_View>();
            }
            catch (Exception e)
            {
                return null;
            }
        }

        public Perek_Rep_View Get(int id)
        {
            try
            {
                return db.Select<Perek_Rep_View>(id);
            }
            catch (Exception e)
            {
                return null;
            }
        }

        public void Add(Perek_Rep_View item)
        {
            try
            {
                db.Insert<Perek_Rep_View>(item);
            }
            catch (Exception e)
            {

            }
        }

        public void Update(Perek_Rep_View item)
        {
            try
            {
                db.Update<Perek_Rep_View>(item);
            }
            catch (Exception e)
            {

            }
        }

        public void AddOrUpdate(Perek_Rep_View item)
        {
            try
            {
                Perek_Rep_View dbEntry = db.Perek_Rep_View.Find(item.in_tank);
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
                Perek_Rep_View item = db.Delete<Perek_Rep_View>(id);
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

        public Perek_Rep_View Refresh(Perek_Rep_View item)
        {
            try
            {
                db.Entry(item).State = EntityState.Detached;
                return db.Select<Perek_Rep_View>(item.in_tank);
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
