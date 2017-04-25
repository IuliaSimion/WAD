using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using MagazinCosmetice.Models;

namespace MagazinCosmetice.Controllers
{
    public class ProductsController : ApiController
    {
        private MagazinCosmeticeEntities db = new MagazinCosmeticeEntities();

        // GET: api/Products
        [HttpGet]
        //[Route("api/Products")]        
        public IQueryable<Product> GetProducts()
        {
            return db.Products;
        }

        // GET: api/Products/5
        [HttpGet]
        //[Route("api/Products/{id}")]
        [ResponseType(typeof(Product))]
        public IHttpActionResult GetProduct(int id)
        {
            Product product = db.Products.Find(id);
            if (product == null)
            {
                return NotFound();
            }

            return Ok(product);
        }

        // GET: api/Products/Category/string
        [HttpGet]
        [Route("api/Products/Category/{category}")]
        public IQueryable<Product> GetProductsByCategory(string category)
        {
            return db.Products.Where(t => t.Category == category);
        }


        // GET: api/Products/Brand/string
        [HttpGet]
        [Route("api/Products/Brand/{brand}")]
        public IQueryable<Product> GetProductsByBrand(string brand)
        {
            return db.Products.Where(t => t.Brand == brand);
        }

        // GET: api/Products/Sale
        [HttpGet]
        [Route("api/Products/Sale")]
        public IQueryable<Product> GetProductsOnSale()
        {
            //IQueryable<Product> prodList = db.Products.Where(p => p.SaleId.HasValue);
            return db.Products.Where(p => p.SaleId.HasValue);

           
        }
        [HttpPut]
        [Route("api/Products/UpdatePromotionPrices")]
        public IEnumerable<Product> UpdatePromotionPrices()
        {
            IEnumerable<Product> retVal = db.Products.Where(p => p.SaleId.HasValue).ToList();

            foreach (var p in retVal)
            {
                p.NewPrice = p.Price - ((decimal)p.Sale.Discount / 100 * p.Price);

                db.SaveChanges();

            }
            
            return retVal;
        }

        // GET: api/Products/Categories
        [HttpGet]
        [Route("api/Products/Categories")]
        public IQueryable<string> GetCategories()
        {
            return db.Products.Select(t => t.Category).Distinct();
        }


        // GET: api/Products/Brands
        [HttpGet]
        [Route("api/Products/Brands")]
        public IQueryable<string> GetBrands()
        {
            return db.Products.Select(t => t.Brand).Distinct();
        }

        // PUT: api/Products/5
        [HttpPut]
        [ResponseType(typeof(void))]
        public IHttpActionResult PutProduct(int id, Product product)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != product.ProductId)
            {
                return BadRequest();
            }

            db.Entry(product).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ProductExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST: api/Products
        [HttpPost]
        [ResponseType(typeof(Product))]
        public IHttpActionResult PostProduct(Product product)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.Products.Add(product);

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateException)
            {
                if (ProductExists(product.ProductId))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtRoute("DefaultApi", new { id = product.ProductId }, product);
        }

        // DELETE: api/Products/5
        [HttpDelete]
        [ResponseType(typeof(Product))]
        public IHttpActionResult DeleteProduct(int id)
        {
            Product product = db.Products.Find(id);
            if (product == null)
            {
                return NotFound();
            }

            db.Products.Remove(product);
            db.SaveChanges();

            return Ok(product);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool ProductExists(int id)
        {
            return db.Products.Count(e => e.ProductId == id) > 0;
        }
    }
}