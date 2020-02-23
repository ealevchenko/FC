using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Xml;
using System.Xml.Serialization;

namespace MEDOC
{
    public class T1R
    {
        public ulong G1 { get; set; }
        public ulong G2 { get; set; }
        public string G3S { get; set; }
        public int G4 { get; set; }
        public string G5S { get; set; }
        public string G6S { get; set; }
        public decimal G7 { get; set; }
        public decimal G8 { get; set; }
        public decimal G9 { get; set; }
        public decimal G10 { get; set; }
        public string G11 { get; set; }
    }
    public class T2R
    {
        public ulong G1 { get; set; }
        public ulong G2 { get; set; }
        public string G3S { get; set; }
        public decimal G4 { get; set; }
        public decimal G5 { get; set; }
        public string G6 { get; set; }
    }
    public class T3R
    {
        public ulong G1 { get; set; }
        public ulong G2 { get; set; }
        public string G3S { get; set; }
        public string G4S { get; set; }
        public decimal G5 { get; set; }
        public decimal G6 { get; set; }
        public string G7 { get; set; }
    }
    public class T4R
    {
        public ulong G1 { get; set; }
        public ulong G2 { get; set; }
        public string G3S { get; set; }
        public decimal G4 { get; set; }
        public string G5 { get; set; }
    }
    public class T5R
    {
        public ulong G1 { get; set; }
        public ulong G2 { get; set; }
        public string G3S { get; set; }
        public decimal G4 { get; set; }
        public decimal G5 { get; set; }
        public decimal G6 { get; set; }
        public decimal G7 { get; set; }
        public decimal G8 { get; set; }
        public decimal G9 { get; set; }
        public string G10 { get; set; }
    }
    public class T6R
    {
        public ulong G1 { get; set; }
        public ulong G2 { get; set; }
        public string G3S { get; set; }
        public decimal G4 { get; set; }
        public decimal G5 { get; set; }
        public decimal G6 { get; set; }
        public decimal G7 { get; set; }
        public string G8 { get; set; }
    }

    public class J0210401
    {
        public string HDATE { get; set; }
        public string HNUM { get; set; }

        public string HDATE1 { get; set; }
        public string HTIME1 { get; set; }
        public string HDATE2 { get; set; }
        public string HTIME2 { get; set; }
        public string HNUMREG { get; set; }
        public string HTIN { get; set; }
        public string HNAME { get; set; }
        public string R07G1 { get; set; }
        public string HKEXECUTOR { get; set; }
        public string HEXECUTOR { get; set; }
        public string HPOST { get; set; }

        public T1R[] T1R { get; set; }
        public T2R[] T2R { get; set; }
        public T3R[] T3R { get; set; }
        public T4R[] T4R { get; set; }
        public T5R[] T5R { get; set; }
        public T6R[] T6R { get; set; }
    }

    public class MedocTransfer
    {

        public MedocTransfer()
        {

        }

        private string Serialize<TType>(TType sourceObject)
        {
            if (sourceObject == null)
            {
                return string.Empty;
            }

            // Используем XmlSerializer для перобразования в XML строку
            var xmlserializer = new XmlSerializer(typeof(TType));
            var stringWriter = new StringWriter();
            using (var writer = XmlWriter.Create(stringWriter, new XmlWriterSettings() { Indent = true, Encoding = Encoding.GetEncoding("Windows-1251") }))
            {
                xmlserializer.Serialize(writer, sourceObject);

                //Encoding utf8 = Encoding.GetEncoding("UTF-16");
                //Encoding win1251 = Encoding.GetEncoding("Windows-1251");

                //byte[] utf8Bytes = utf8.GetBytes(stringWriter.ToString());
                //byte[] win1251Bytes = Encoding.Convert(win1251, utf8, utf8Bytes);

                //return win1251.GetString(win1251Bytes);
                return stringWriter.ToString();
            }
        }

        //DGI4nomColumn[] T1RXXXXG1 = new DGI4nomColumn[];


        public string J0210401ToXML(J0210401 data)
        {
            try
            {
                if (data != null)
                {
                    DHead dhead = new DHead();
                    DBody dbody = new DBody()
                    {
                        HDATE = data.HDATE,
                        HNUM = data.HNUM!=null ? data.HNUM : "HNUM",
                        HDATE1 = data.HDATE1,
                        HTIME1 = data.HTIME1,
                        HDATE2 = data.HDATE2,
                        HTIME2 = data.HTIME2,
                        HNUMREG = data.HNUMREG!=null ? data.HNUMREG : "HNUMREG",
                        HTIN = data.HTIN!=null ? data.HTIN : "HTIN",
                        HNAME = data.HNAME!=null ? data.HNAME : "HNAME",
                        R07G1 = data.R07G1,
                        HKEXECUTOR = (data.HKEXECUTOR != null ? data.HKEXECUTOR: "HKEXECUTOR"),
                        HEXECUTOR = data.HEXECUTOR!=null ? data.HEXECUTOR : "HEXECUTOR",
                        HPOST = data.HPOST!=null ? data.HPOST :"HPOST"
                    };
                    // Таблица1
                    int row = 1;
                    List<DGI4nomColumn> T1RXXXXG1 = new List<DGI4nomColumn>();
                    List<KOATUUColumn> T1RXXXXG2 = new List<KOATUUColumn>();
                    List<StrColumn> T1RXXXXG3S = new List<StrColumn>();
                    List<ChkColumn> T1RXXXXG4 = new List<ChkColumn>();
                    List<StrColumn> T1RXXXXG5S = new List<StrColumn>();
                    List<StrColumn> T1RXXXXG6S = new List<StrColumn>();
                    List<Decimal2Column> T1RXXXXG7 = new List<Decimal2Column>();
                    List<Decimal2Column> T1RXXXXG8 = new List<Decimal2Column>();
                    List<Decimal2Column> T1RXXXXG9 = new List<Decimal2Column>();
                    List<Decimal2Column> T1RXXXXG10 = new List<Decimal2Column>();
                    List<Ozn2Column> T1RXXXXG11 = new List<Ozn2Column>();

                    foreach (T1R tr in data.T1R)
                    {
                        T1RXXXXG1.Add(new DGI4nomColumn() { ROWNUM = row, Value = tr.G1 });
                        T1RXXXXG2.Add(new KOATUUColumn() { ROWNUM = row, Value = tr.G2 });
                        T1RXXXXG3S.Add(new StrColumn() { ROWNUM = row, Value = tr.G3S });
                        T1RXXXXG4.Add(new ChkColumn() { ROWNUM = row, Value = tr.G4 });
                        T1RXXXXG5S.Add(new StrColumn() { ROWNUM = row, Value = tr.G5S });
                        T1RXXXXG6S.Add(new StrColumn() { ROWNUM = row, Value = tr.G6S });
                        T1RXXXXG7.Add(new Decimal2Column() { ROWNUM = row, Value = tr.G7 });
                        T1RXXXXG8.Add(new Decimal2Column() { ROWNUM = row, Value = tr.G8 });
                        T1RXXXXG9.Add(new Decimal2Column() { ROWNUM = row, Value = tr.G9 });
                        T1RXXXXG10.Add(new Decimal2Column() { ROWNUM = row, Value = tr.G10 });
                        T1RXXXXG11.Add(new Ozn2Column() { ROWNUM = row, Value = tr.G11 });
                        row++;
                    }
                    dbody.T1RXXXXG1 = T1RXXXXG1.ToArray();
                    dbody.T1RXXXXG2 = T1RXXXXG2.ToArray();
                    dbody.T1RXXXXG3S = T1RXXXXG3S.ToArray();
                    dbody.T1RXXXXG4 = T1RXXXXG4.ToArray();
                    dbody.T1RXXXXG5S = T1RXXXXG5S.ToArray();
                    dbody.T1RXXXXG6S = T1RXXXXG6S.ToArray();
                    dbody.T1RXXXXG7 = T1RXXXXG7.ToArray();
                    dbody.T1RXXXXG8 = T1RXXXXG8.ToArray();
                    dbody.T1RXXXXG9 = T1RXXXXG9.ToArray();
                    dbody.T1RXXXXG10 = T1RXXXXG10.ToArray();
                    dbody.T1RXXXXG11 = T1RXXXXG11.ToArray();

                    // Таблица2
                    row = 1;

                    List<DGI4nomColumn> T2RXXXXG1 = new List<DGI4nomColumn>();
                    List<KOATUUColumn> T2RXXXXG2 = new List<KOATUUColumn>();
                    List<StrColumn> T2RXXXXG3S = new List<StrColumn>();
                    List<Decimal2Column> T2RXXXXG4 = new List<Decimal2Column>();
                    List<Decimal2Column> T2RXXXXG5 = new List<Decimal2Column>();
                    List<Ozn2Column> T2RXXXXG6 = new List<Ozn2Column>();

                    foreach (T2R tr in data.T2R)
                    {
                        T2RXXXXG1.Add(new DGI4nomColumn() { ROWNUM = row, Value = tr.G1 });
                        T2RXXXXG2.Add(new KOATUUColumn() { ROWNUM = row, Value = tr.G2 });
                        T2RXXXXG3S.Add(new StrColumn() { ROWNUM = row, Value = tr.G3S });
                        T2RXXXXG4.Add(new Decimal2Column() { ROWNUM = row, Value = tr.G4 });
                        T2RXXXXG5.Add(new Decimal2Column() { ROWNUM = row, Value = tr.G5 });
                        T2RXXXXG6.Add(new Ozn2Column() { ROWNUM = row, Value = tr.G6 });
                        row++;
                    }

                    dbody.T2RXXXXG1 = T2RXXXXG1.ToArray();
                    dbody.T2RXXXXG2 = T2RXXXXG2.ToArray();
                    dbody.T2RXXXXG3S = T2RXXXXG3S.ToArray();
                    dbody.T2RXXXXG4 = T2RXXXXG4.ToArray();
                    dbody.T2RXXXXG5 = T2RXXXXG5.ToArray();
                    dbody.T2RXXXXG6 = T2RXXXXG6.ToArray();

                    // Таблица3
                    row = 1;
                    List<DGI4nomColumn> T3RXXXXG1 = new List<DGI4nomColumn>();
                    List<KOATUUColumn> T3RXXXXG2 = new List<KOATUUColumn>();
                    List<StrColumn> T3RXXXXG3S = new List<StrColumn>();
                    List<StrColumn> T3RXXXXG4S = new List<StrColumn>();
                    List<Decimal2Column> T3RXXXXG5 = new List<Decimal2Column>();
                    List<Decimal2Column> T3RXXXXG6 = new List<Decimal2Column>();
                    List<Ozn2Column> T3RXXXXG7 = new List<Ozn2Column>();

                    foreach (T3R tr in data.T3R)
                    {
                        T3RXXXXG1.Add(new DGI4nomColumn() { ROWNUM = row, Value = tr.G1 });
                        T3RXXXXG2.Add(new KOATUUColumn() { ROWNUM = row, Value = tr.G2 });
                        T3RXXXXG3S.Add(new StrColumn() { ROWNUM = row, Value = tr.G3S });
                        T3RXXXXG4S.Add(new StrColumn() { ROWNUM = row, Value = tr.G4S });
                        T3RXXXXG5.Add(new Decimal2Column() { ROWNUM = row, Value = tr.G5 });
                        T3RXXXXG6.Add(new Decimal2Column() { ROWNUM = row, Value = tr.G6 });
                        T3RXXXXG7.Add(new Ozn2Column() { ROWNUM = row, Value = tr.G7 });
                        row++;
                    }

                    dbody.T3RXXXXG1 = T3RXXXXG1.ToArray();
                    dbody.T3RXXXXG2 = T3RXXXXG2.ToArray();
                    dbody.T3RXXXXG3S = T3RXXXXG3S.ToArray();
                    dbody.T3RXXXXG4S = T3RXXXXG4S.ToArray();
                    dbody.T3RXXXXG5 = T3RXXXXG5.ToArray();
                    dbody.T3RXXXXG6 = T3RXXXXG6.ToArray();
                    dbody.T3RXXXXG7 = T3RXXXXG7.ToArray();

                    // Таблица4
                    row = 1;
                    List<DGI4nomColumn> T4RXXXXG1 = new List<DGI4nomColumn>();
                    List<KOATUUColumn> T4RXXXXG2 = new List<KOATUUColumn>();
                    List<StrColumn> T4RXXXXG3S = new List<StrColumn>();
                    List<Decimal2Column> T4RXXXXG4 = new List<Decimal2Column>();
                    List<Ozn2Column> T4RXXXXG5 = new List<Ozn2Column>();

                    foreach (T4R tr in data.T4R)
                    {
                        T4RXXXXG1.Add(new DGI4nomColumn() { ROWNUM = row, Value = tr.G1 });
                        T4RXXXXG2.Add(new KOATUUColumn() { ROWNUM = row, Value = tr.G2 });
                        T4RXXXXG3S.Add(new StrColumn() { ROWNUM = row, Value = tr.G3S });
                        T4RXXXXG4.Add(new Decimal2Column() { ROWNUM = row, Value = tr.G4 });
                        T4RXXXXG5.Add(new Ozn2Column() { ROWNUM = row, Value = tr.G5 });
                        row++;
                    }
                    dbody.T4RXXXXG1 = T4RXXXXG1.ToArray();
                    dbody.T4RXXXXG2 = T4RXXXXG2.ToArray();
                    dbody.T4RXXXXG3S = T4RXXXXG3S.ToArray();
                    dbody.T4RXXXXG4 = T4RXXXXG4.ToArray();
                    dbody.T4RXXXXG5 = T4RXXXXG5.ToArray();

                    // Таблица5
                    row = 1;
                    List<DGI4nomColumn> T5RXXXXG1 = new List<DGI4nomColumn>();
                    List<KOATUUColumn> T5RXXXXG2 = new List<KOATUUColumn>();
                    List<StrColumn> T5RXXXXG3S = new List<StrColumn>();
                    List<Decimal2Column> T5RXXXXG4 = new List<Decimal2Column>();
                    List<Decimal2Column> T5RXXXXG5 = new List<Decimal2Column>();
                    List<Decimal2Column> T5RXXXXG6 = new List<Decimal2Column>();
                    List<Decimal2Column> T5RXXXXG7 = new List<Decimal2Column>();
                    List<Decimal2Column> T5RXXXXG8 = new List<Decimal2Column>();
                    List<Decimal2Column> T5RXXXXG9 = new List<Decimal2Column>();
                    List<Ozn2Column> T5RXXXXG10 = new List<Ozn2Column>();

                    foreach (T5R tr in data.T5R)
                    {
                        T5RXXXXG1.Add(new DGI4nomColumn() { ROWNUM = row, Value = tr.G1 });
                        T5RXXXXG2.Add(new KOATUUColumn() { ROWNUM = row, Value = tr.G2 });
                        T5RXXXXG3S.Add(new StrColumn() { ROWNUM = row, Value = tr.G3S });
                        T5RXXXXG4.Add(new Decimal2Column() { ROWNUM = row, Value = tr.G4 });
                        T5RXXXXG5.Add(new Decimal2Column() { ROWNUM = row, Value = tr.G5 });
                        T5RXXXXG6.Add(new Decimal2Column() { ROWNUM = row, Value = tr.G6 });
                        T5RXXXXG7.Add(new Decimal2Column() { ROWNUM = row, Value = tr.G7 });
                        T5RXXXXG8.Add(new Decimal2Column() { ROWNUM = row, Value = tr.G8 });
                        T5RXXXXG9.Add(new Decimal2Column() { ROWNUM = row, Value = tr.G9 });
                        T5RXXXXG10.Add(new Ozn2Column() { ROWNUM = row, Value = tr.G10 });
                        row++;
                    }
                    dbody.T5RXXXXG1 = T5RXXXXG1.ToArray();
                    dbody.T5RXXXXG2 = T5RXXXXG2.ToArray();
                    dbody.T5RXXXXG3S = T5RXXXXG3S.ToArray();
                    dbody.T5RXXXXG4 = T5RXXXXG4.ToArray();
                    dbody.T5RXXXXG5 = T5RXXXXG5.ToArray();
                    dbody.T5RXXXXG6 = T5RXXXXG6.ToArray();
                    dbody.T5RXXXXG7 = T5RXXXXG7.ToArray();
                    dbody.T5RXXXXG8 = T5RXXXXG8.ToArray();
                    dbody.T5RXXXXG9 = T5RXXXXG9.ToArray();
                    dbody.T5RXXXXG10 = T5RXXXXG10.ToArray();

                    // Таблица6
                    row = 1;
                    List<DGI4nomColumn> T6RXXXXG1 = new List<DGI4nomColumn>();
                    List<KOATUUColumn> T6RXXXXG2 = new List<KOATUUColumn>();
                    List<StrColumn> T6RXXXXG3S = new List<StrColumn>();
                    List<Decimal2Column> T6RXXXXG4 = new List<Decimal2Column>();
                    List<Decimal2Column> T6RXXXXG5 = new List<Decimal2Column>();
                    List<Decimal2Column> T6RXXXXG6 = new List<Decimal2Column>();
                    List<Decimal2Column> T6RXXXXG7 = new List<Decimal2Column>();
                    List<Ozn2Column> T6RXXXXG8 = new List<Ozn2Column>();

                    foreach (T6R tr in data.T6R)
                    {
                        T6RXXXXG1.Add(new DGI4nomColumn() { ROWNUM = row, Value = tr.G1 });
                        T6RXXXXG2.Add(new KOATUUColumn() { ROWNUM = row, Value = tr.G2 });
                        T6RXXXXG3S.Add(new StrColumn() { ROWNUM = row, Value = tr.G3S });
                        T6RXXXXG4.Add(new Decimal2Column() { ROWNUM = row, Value = tr.G4 });
                        T6RXXXXG5.Add(new Decimal2Column() { ROWNUM = row, Value = tr.G5 });
                        T6RXXXXG6.Add(new Decimal2Column() { ROWNUM = row, Value = tr.G6 });
                        T6RXXXXG7.Add(new Decimal2Column() { ROWNUM = row, Value = tr.G7 });
                         T6RXXXXG8.Add(new Ozn2Column() { ROWNUM = row, Value = tr.G8 });
                        row++;
                    }
                    dbody.T6RXXXXG1 = T6RXXXXG1.ToArray();
                    dbody.T6RXXXXG2 = T6RXXXXG2.ToArray();
                    dbody.T6RXXXXG3S = T6RXXXXG3S.ToArray();
                    dbody.T6RXXXXG4 = T6RXXXXG4.ToArray();
                    dbody.T6RXXXXG5 = T6RXXXXG5.ToArray();
                    dbody.T6RXXXXG6 = T6RXXXXG6.ToArray();
                    dbody.T6RXXXXG7 = T6RXXXXG7.ToArray();
                    dbody.T6RXXXXG8 = T6RXXXXG8.ToArray();

                    DeclarContent dc = new DeclarContent()
                    {
                        DECLARHEAD = dhead,
                        DECLARBODY = dbody,
                    };

                    string result = Serialize<DeclarContent>(dc);
                    return result;
                }
                else return null;
            }
            catch (Exception e)
            {
                return null;
            }
        }

    }
}
