using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.IO;
using System.Web.UI;
namespace SNW
{
    /// <summary>
    /// Descripción breve de DownLoadExcel
    /// </summary>
    public class DownLoadExcel : IHttpHandler
    {

        public void ProcessRequest(HttpContext context)
        {
           
                System.Web.HttpResponse response = System.Web.HttpContext.Current.Response;
                System.Web.HttpRequest request = System.Web.HttpContext.Current.Request;
                string ruta = request.QueryString["ruta"];

                FileInfo fileInfo = new FileInfo(ruta);
          
                response.ClearContent();
                response.Clear();
                //response.ContentType = "application/vnd.ms-excel";
                response.ContentType = "application / vnd.openxmlformats - officedocument.spreadsheetml.sheet";
                response.AddHeader("Content-Disposition", "attachment; filename=" + fileInfo.Name);
                response.TransmitFile(fileInfo.FullName);
                response.Flush();
                //response.End();    //CON ESTE NO CAE AL ACTUALIZAR 
                HttpContext.Current.ApplicationInstance.CompleteRequest(); //CON ESTE CAE AL ACTUALIZRA

        }

        public bool IsReusable
        {
            get
            {
                return false;
            }
        }
    }
}