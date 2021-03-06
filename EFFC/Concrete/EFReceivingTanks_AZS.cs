﻿using EFFC.Abstract;
using EFFC.Entities;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EFFC.Concrete
{
    public class EFReceivingTanks_AZS : IRepository<ReceivingTanks_AZS>
    {

        private EFDbContext db;

        public EFReceivingTanks_AZS(EFDbContext db)
        {

            this.db = db;
        }

        public EFReceivingTanks_AZS()
        {
            this.db = new EFDbContext();
        }

        public Database Database
        {
            get { return this.db.Database; }
        }

        public IEnumerable<ReceivingTanks_AZS> Get()
        {
            try
            {
                return db.Select<ReceivingTanks_AZS>();
            }
            catch (Exception e)
            {
                return null;
            }
        }

        public ReceivingTanks_AZS Get(int id)
        {
            try
            {
                return db.Select<ReceivingTanks_AZS>(id);
            }
            catch (Exception e)
            {
                return null;
            }
        }

        public void Add(ReceivingTanks_AZS item)
        {
            try
            {
                db.Insert<ReceivingTanks_AZS>(item);
            }
            catch (Exception e)
            {

            }
        }
        public void Add(List<ReceivingTanks_AZS> items)
        {
            try
            {
                db.Inserts<ReceivingTanks_AZS>(items);
            }
            catch (Exception e)
            {

            }
        }
        public void Update(ReceivingTanks_AZS item)
        {
            try
            {
                db.Update<ReceivingTanks_AZS>(item);
            }
            catch (Exception e)
            {

            }
        }

        public void AddOrUpdate(ReceivingTanks_AZS item)
        {
            try
            {
                ReceivingTanks_AZS dbEntry = db.ReceivingTanks_AZS.Find(item.id);
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
                ReceivingTanks_AZS item = db.Delete<ReceivingTanks_AZS>(id);
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

        public ReceivingTanks_AZS Refresh(ReceivingTanks_AZS item)
        {
            try
            {
                db.Entry(item).State = EntityState.Detached;
                return db.Select<ReceivingTanks_AZS>(item.id);
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
