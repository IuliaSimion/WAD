using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http.Formatting;
using System.Web.Http;

namespace MagazinCosmetice
{
    public static class WebApiConfig
    {
        public static void Register(HttpConfiguration config)
        {
            // Web API configuration and services

            // Web API routes
            config.MapHttpAttributeRoutes();

            config.Routes.MapHttpRoute(
                name: "DefaultApi",
                routeTemplate: "api/{controller}/{id}",
                defaults: new { id = RouteParameter.Optional }
            );
            config.Formatters.Clear();
            config.Formatters.Add(new JsonMediaTypeFormatter());

            // config.Routes.MapHttpRoute(
            //    name: "CategoryApi",
            //    routeTemplate: "api/{controller}/Category/{category}"
            ////defaults: new { id = RouteParameter.Optional }
            //);

            // config.Routes.MapHttpRoute(
            //    name: "BrandApi",
            //    routeTemplate: "api/{controller}/Brand/{brand}"
            ////defaults: new { id = RouteParameter.Optional }
            //);

            // Prevent "Self referencing loop detected" error occurring for recursive objects
            var serializerSettings = new JsonSerializerSettings()
            {
                ReferenceLoopHandling = ReferenceLoopHandling.Ignore
            };
            config.Formatters.JsonFormatter.SerializerSettings = serializerSettings;

        }
    }
}
