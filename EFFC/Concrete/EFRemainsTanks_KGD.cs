//using EFFC.Abstract;
//using EFFC.Entities;
//using System;
//using System.Collections.Generic;
//using System.Data.Entity;
//using System.Linq;
//using System.Text;
//using System.Threading.Tasks;

//namespace EFFC.Concrete
//{
//    public class EFRemainsTanks_KGD : IRepository<RemainsTanks_KGD>
//    {

//        private EFDbContext db;

//        public EFRemainsTanks_KGD(EFDbContext db)
//        {

//            this.db = db;
//        }

//        public Database Database
//        {
//            get { return this.db.Database; }
//        }

//        public IEnumerable<RemainsTanks_KGD> Get()
//        {
//            try
//            {
//                return db.Select<RemainsTanks_KGD>();
//            }
//            catch (Exception e)
//            {
//                return null;
//            }
//        }

//        public RemainsTanks_KGD Get(int id)
//        {
//            try
//            {
//                return db.Select<RemainsTanks_KGD>(id);
//            }
//            catch (Exception e)
//            {
//                return null;
//            }
//        }

//        public void Add(RemainsTanks_KGD item)
//        {
//            try
//            {
//                db.Insert<RemainsTanks_KGD>(item);
//            }
//            catch (Exception e)
//            {

//            }
//        }

//        public void Update(RemainsTanks_KGD item)
//        {
//            try
//            {
//                db.Update<RemainsTanks_KGD>(item);
//            }
//            catch (Exception e)
//            {

//            }
//        }

//        public void AddOrUpdate(RemainsTanks_KGD item)
//        {
//            try
//            {
//                RemainsTanks_KGD dbEntry = db.RemainsTanks_KGD.Find(item.id);
//                if (dbEntry == null)
//                {
//                    Add(item);
//                }
//                else
//                {
//                    Update(item);
//                }
//            }
//            catch (Exception e)
//            {

//            }

//        }

//        public void Delete(int id)
//        {
//            try
//            {
//                RemainsTanks_KGD item = db.Delete<RemainsTanks_KGD>(id);
//            }
//            catch (Exception e)
//            {

//            }
//        }

//        public int Save()
//        {
//            try
//            {
//                return db.SaveChanges();
//            }
//            catch (Exception e)
//            {
//                return -1;
//            }
//        }

//        public RemainsTanks_KGD Refresh(RemainsTanks_KGD item)
//        {
//            try
//            {
//                db.Entry(item).State = EntityState.Detached;
//                return db.Select<RemainsTanks_KGD>(item.id);
//            }
//            catch (Exception e)
//            {
//                return null;
//            }
//        }

//        private bool disposed = false;

//        public virtual void Dispose(bool disposing)
//        {
//            if (!this.disposed)
//            {
//                if (disposing)
//                {
//                    db.Dispose();
//                }
//            }
//            this.disposed = true;
//        }

//        public void Dispose()
//        {
//            Dispose(true);
//            GC.SuppressFinalize(this);
//        }

//    }
//}
