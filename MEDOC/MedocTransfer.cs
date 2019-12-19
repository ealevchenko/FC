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
    public class MedocTransfer
    {

        public MedocTransfer() { 
        
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
            using (var writer = XmlWriter.Create(stringWriter, new XmlWriterSettings() { Indent = true }))
            {
                xmlserializer.Serialize(writer, sourceObject);
                return stringWriter.ToString();
            }
        }

        public string J0210401ToXML() {

            DHead dhead = new DHead();
            DBody dbody = new DBody() {
                HDATE = "",
                HNUM = "",
                HDATE1 = "",
                HTIME1 = DateTime.Now,
                HDATE2 = "",
                HTIME2 = DateTime.Now,
                HNUMREG = "",
                HTIN = "",
                HNAME = "",
                R07G1 = "",
            };


            return null;
        }

    }
}
