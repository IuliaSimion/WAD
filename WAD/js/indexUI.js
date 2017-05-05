/*function PopulateHtmlProdBox(data)
{
    var productBox = $("#prod-box");
            var htmlString = "";
            for(i = 0; i < data.length; i++){

                if(data[i].Image == null){

                    if(data[i].SaleId == null){

                        htmlString += '<div class="col-md-2 column productbox">' +
                                            '<a class="img" href="Product.html"><img src="http://cdn.hercampus.com/s3fs-public/2015/01/04/Benefit-full-finish-lipstick-review-swatches-photos-spring-2011-closeup.jpg" class="img-responsive"></a>' +
                                            '<div class="producttitle"><a href="Product.html">' + data[i].Name + '</a></div>' +
                                            '<div class="productprice"><div class="pull-left"><div class="pricetext old-price" style="visibility: hidden">""</div><div class="pricetext">' + data[i].Price + ' RON</div><div class="pricetext">' + data[i].Price + ' RON</div></div></div>' +
                                    '</div>'
                    }
                    else{
                        htmlString += '<div class="col-md-2 column productbox">' +
                                            '<a class="img" href="Product.html"><img src="http://cdn.hercampus.com/s3fs-public/2015/01/04/Benefit-full-finish-lipstick-review-swatches-photos-spring-2011-closeup.jpg" class="img-responsive"></a>' +
                                            '<div class="producttitle"><a href="Product.html">' + data[i].Name + '</a></div>' +
                                            '<div class="productprice"><div class="pull-left"><div class="pricetext old-price" style="text-decoration: line-through; color:red">' + data[i].Price + ' RON</div><div class="pricetext">' + data[i].NewPrice + ' RON</div></div></div>' +
                                    '</div>'
                    }
                }
                else{
                    if(data[i].SaleId == null){
                        htmlString += '<div class="col-md-2 column productbox">' +
                                            '<a class="img" href="Product.html"><img src=' + data[i].Image + 'class="img-responsive"></a>' +
                                            '<div class="producttitle"><a href="Product.html">' + data[i].Name + '</a></div>' +
                                            '<div class="productprice"><div class="pull-left"><div class="pricetext old-price" style="visibility: hidden">""</div><div class="pricetext">' + data[i].Price + ' RON</div></div></div>' +
                                    '</div>'
                    }
                    else{
                        htmlString += '<div class="col-md-2 column productbox">' +
                                            '<a class="img" href="Product.html"><img src=' + data[i].Image + 'class="img-responsive"></a>' +
                                            '<div class="producttitle"><a href="Product.html">' + data[i].Name + '</a></div>' +
                                            '<div class="productprice"><div class="pull-left"><div class="pricetext old-price" style="text-decoration: line-through; color:red">' + data[i].Price + ' RON</div><div class="pricetext">' + data[i].NewPrice + ' RON</div></div></div>' +
                                    '</div>'
                    }
                }

                
            }
            productBox.prepend(htmlString);
}*/
var ProductHolder = "";
//alert('value: ' + ProductHolder);


function loadCategories()
{
    var cosmeticsAPI = new CosmeticsAPI();
    cosmeticsAPI.setBaseURL("http://localhost:55427");

    cosmeticsAPI.getAllCategories().done(
        function (data)
        {
                var collapseCategories = $("#collapse1");
                var htmlString1 = "";
                var htmlString2 = "";
                for(i = 0; i < data.length; i++){
                    htmlString2 += '<li class="list-group-item"><a style="color: hotpink;" href="#" onClick="loadProductsByCategory(\''+ data[i] +'\')">' + data[i] + '</a></li>';
                }
                htmlString1 += '<ul class="list-group">' + htmlString2 + '</ul>';
                collapseCategories.append(htmlString1);
            
        }

    );
}

function loadProductsByCategory(category){
    $("#prod-box").empty();
    var cosmeticsAPI = new CosmeticsAPI();
    cosmeticsAPI.setBaseURL("http://localhost:55427");
    //var category = $('#categ-link' + this.id).text();
    //var category = "Eyes";
    cosmeticsAPI.getProductsByCategory(category).done(
        function (data) {
            
                var productBox = $("#prod-box");
                var htmlString = "";
                for(i = 0; i < data.length; i++){

                    if(data[i].Image == null){

                        if(data[i].SaleId == null){

                            htmlString += '<div class="col-md-2 column productbox">' +
                                            '<a class="img" href="Product.html" onClick="loadProductDetails(' + data[i].ProductId + ')"><img src="http://cdn.hercampus.com/s3fs-public/2015/01/04/Benefit-full-finish-lipstick-review-swatches-photos-spring-2011-closeup.jpg" class="img-responsive"></a>' +
                                            '<div class="producttitle"><a href="Product.html" onClick="loadProductDetails(' + data[i].ProductId + ')">' + data[i].Name + '</a></div>' +
                                            '<div class="productprice"><div class="pull-left"><div class="pricetext old-price" style="visibility: hidden">""</div><div class="pricetext">' + data[i].Price + ' RON</div><div class="pricetext">' + data[i].Price + ' RON</div></div></div>' +
                                    '</div>'
                        }
                        else{
                            htmlString += '<div class="col-md-2 column productbox">' +
                                            '<a class="img" href="Product.html" onClick="loadProductDetails(' + data[i].ProductId + ')"><img src="http://cdn.hercampus.com/s3fs-public/2015/01/04/Benefit-full-finish-lipstick-review-swatches-photos-spring-2011-closeup.jpg" class="img-responsive"></a>' +
                                            '<div class="producttitle"><a href="Product.html" onClick="loadProductDetails(' + data[i].ProductId + ')">' + data[i].Name + '</a></div>' +
                                            '<div class="productprice"><div class="pull-left"><div class="pricetext old-price" style="text-decoration: line-through; color:red">' + data[i].Price + ' RON</div><div class="pricetext">' + data[i].NewPrice + ' RON</div></div></div>' +
                                    '</div>'
                        }
                    }
                    else{
                        if(data[i].SaleId == null){
                            htmlString += '<div class="col-md-2 column productbox">' +
                                            '<a class="img" href="Product.html" onClick="loadProductDetails(' + data[i].ProductId + ')"><img src=' + data[i].Image + 'class="img-responsive"></a>' +
                                            '<div class="producttitle"><a href="Product.html" onClick="loadProductDetails(' + data[i].ProductId + ')">' + data[i].Name + '</a></div>' +
                                            '<div class="productprice"><div class="pull-left"><div class="pricetext old-price" style="visibility: hidden">""</div><div class="pricetext">' + data[i].Price + ' RON</div></div></div>' +
                                    '</div>'
                        }
                        else{
                            htmlString += '<div class="col-md-2 column productbox">' +
                                            '<a class="img" href="Product.html" onClick="loadProductDetails(' + data[i].ProductId + ')"><img src=' + data[i].Image + 'class="img-responsive"></a>' +
                                            '<div class="producttitle"><a href="Product.html" onClick="loadProductDetails(' + data[i].ProductId + ')">' + data[i].Name + '</a></div>' +
                                            '<div class="productprice"><div class="pull-left"><div class="pricetext old-price" style="text-decoration: line-through; color:red">' + data[i].Price + ' RON</div><div class="pricetext">' + data[i].NewPrice + ' RON</div></div></div>' +
                                    '</div>'
                        }
                    }

                
                }
                productBox.prepend(htmlString);
            }

            
    );
}



function loadBrands()
{
    var cosmeticsAPI = new CosmeticsAPI();
    cosmeticsAPI.setBaseURL("http://localhost:55427");

    cosmeticsAPI.getAllBrands().done(
        function (data)
        {
                var collapseBrands = $("#collapse2");
                var htmlString1 = "";
                var htmlString2 = "";
                for(i = 0; i < data.length; i++){
                    htmlString2 += '<li class="list-group-item"><a style="color: hotpink;" href="#" onClick="loadProductsByBrand(\''+ data[i] +'\')">' + data[i] + '</a></li>';
                }
                htmlString1 += '<ul class="list-group">' + htmlString2 + '</ul>';
                collapseBrands.append(htmlString1);
            
        }

    );

}

function loadProductsByBrand(brand){
    $("#prod-box").empty();
    var cosmeticsAPI = new CosmeticsAPI();
    cosmeticsAPI.setBaseURL("http://localhost:55427");
    //var brand = $(this).text();
    //var brand = "Sephora";
    cosmeticsAPI.getProductsByBrand(brand).done(
        function (data) {
            
                var productBox = $("#prod-box");
                var htmlString = "";
                for(i = 0; i < data.length; i++){

                    if(data[i].Image == null){

                        if(data[i].SaleId == null){

                            htmlString += '<div class="col-md-2 column productbox">' +
                                            '<a class="img" href="Product.html" onClick="loadProductDetails(' + data[i].ProductId + ')"><img src="http://cdn.hercampus.com/s3fs-public/2015/01/04/Benefit-full-finish-lipstick-review-swatches-photos-spring-2011-closeup.jpg" class="img-responsive"></a>' +
                                            '<div class="producttitle"><a href="Product.html" onClick="loadProductDetails(' + data[i].ProductId + ')">' + data[i].Name + '</a></div>' +
                                            '<div class="productprice"><div class="pull-left"><div class="pricetext old-price" style="visibility: hidden">""</div><div class="pricetext">' + data[i].Price + ' RON</div><div class="pricetext">' + data[i].Price + ' RON</div></div></div>' +
                                    '</div>'
                        }
                        else{
                            htmlString += '<div class="col-md-2 column productbox">' +
                                            '<a class="img" href="Product.html" onClick="loadProductDetails(' + data[i].ProductId + ')"><img src="http://cdn.hercampus.com/s3fs-public/2015/01/04/Benefit-full-finish-lipstick-review-swatches-photos-spring-2011-closeup.jpg" class="img-responsive"></a>' +
                                            '<div class="producttitle"><a href="Product.html" onClick="loadProductDetails(' + data[i].ProductId + ')">' + data[i].Name + '</a></div>' +
                                            '<div class="productprice"><div class="pull-left"><div class="pricetext old-price" style="text-decoration: line-through; color:red">' + data[i].Price + ' RON</div><div class="pricetext">' + data[i].NewPrice + ' RON</div></div></div>' +
                                    '</div>'
                        }
                    }
                    else{
                        if(data[i].SaleId == null){
                            htmlString += '<div class="col-md-2 column productbox">' +
                                            '<a class="img" href="Product.html" onClick="loadProductDetails(' + data[i].ProductId + ')"><img src=' + data[i].Image + 'class="img-responsive"></a>' +
                                            '<div class="producttitle"><a href="Product.html" onClick="loadProductDetails(' + data[i].ProductId + ')">' + data[i].Name + '</a></div>' +
                                            '<div class="productprice"><div class="pull-left"><div class="pricetext old-price" style="visibility: hidden">""</div><div class="pricetext">' + data[i].Price + ' RON</div></div></div>' +
                                    '</div>'
                        }
                        else{
                            htmlString += '<div class="col-md-2 column productbox">' +
                                            '<a class="img" href="Product.html" onClick="loadProductDetails(' + data[i].ProductId + ')"><img src=' + data[i].Image + 'class="img-responsive"></a>' +
                                            '<div class="producttitle"><a href="Product.html" onClick="loadProductDetails(' + data[i].ProductId + ')">' + data[i].Name + '</a></div>' +
                                            '<div class="productprice"><div class="pull-left"><div class="pricetext old-price" style="text-decoration: line-through; color:red">' + data[i].Price + ' RON</div><div class="pricetext">' + data[i].NewPrice + ' RON</div></div></div>' +
                                    '</div>'
                        }
                    }

                
                }
                productBox.prepend(htmlString);
            }

            
    );
}


function loadProducts()
{
    var cosmeticsAPI = new CosmeticsAPI();
    cosmeticsAPI.setBaseURL("http://localhost:55427");

    cosmeticsAPI.getAllProducts().done(
        function (data){
            var productBox = $("#prod-box");
            var htmlString = "";
            for(i = 0; i < data.length; i++){

                if(data[i].Image == null){

                    if(data[i].SaleId == null){

                        htmlString += '<div class="col-md-2 column productbox">' +
                                            '<a class="img"  onClick="loadProductDetails(\'' + data[i].ProductId + '\')"><img src="http://cdn.hercampus.com/s3fs-public/2015/01/04/Benefit-full-finish-lipstick-review-swatches-photos-spring-2011-closeup.jpg" class="img-responsive"></a>' +
                                            '<div class="producttitle"><a  onClick="loadProductDetails(\'' + data[i].ProductId + '\')">' + data[i].Name + '</a></div>' +
                                            '<div class="productprice"><div class="pull-left"><div class="pricetext old-price" style="visibility: hidden">""</div><div class="pricetext">' + data[i].Price + ' RON</div><div class="pricetext">' + data[i].Price + ' RON</div></div></div>' +
                                    '</div>'
                    }
                    else{
                        htmlString += '<div class="col-md-2 column productbox">' +
                                            '<a class="img"  onClick="loadProductDetails(\'' + data[i].ProductId + '\')"><img src="http://cdn.hercampus.com/s3fs-public/2015/01/04/Benefit-full-finish-lipstick-review-swatches-photos-spring-2011-closeup.jpg" class="img-responsive"></a>' +
                                            '<div class="producttitle"><a  onClick="loadProductDetails(\'' + data[i].ProductId + '\')">' + data[i].Name + '</a></div>' +
                                            '<div class="productprice"><div class="pull-left"><div class="pricetext old-price" style="text-decoration: line-through; color:red">' + data[i].Price + ' RON</div><div class="pricetext">' + data[i].NewPrice + ' RON</div></div></div>' +
                                    '</div>'
                    }
                }
                else{
                    if(data[i].SaleId == null){
                        htmlString += '<div class="col-md-2 column productbox">' +
                                            '<a class="img"  onClick="loadProductDetails(\'' + data[i].ProductId + '\')"><img src=' + data[i].Image + 'class="img-responsive"></a>' +
                                            '<div class="producttitle"><a  onClick="loadProductDetails(\'' + data[i].ProductId + '\')">' + data[i].Name + '</a></div>' +
                                            '<div class="productprice"><div class="pull-left"><div class="pricetext old-price" style="visibility: hidden">""</div><div class="pricetext">' + data[i].Price + ' RON</div></div></div>' +
                                    '</div>'
                    }
                    else{
                        htmlString += '<div class="col-md-2 column productbox">' +
                                            '<a class="img"  onClick="loadProductDetails(\'' + data[i].ProductId + '\')"><img src=' + data[i].Image + 'class="img-responsive"></a>' +
                                            '<div class="producttitle"><a  onClick="loadProductDetails(\'' + data[i].ProductId + '\')">' + data[i].Name + '</a></div>' +
                                            '<div class="productprice"><div class="pull-left"><div class="pricetext old-price" style="text-decoration: line-through; color:red">' + data[i].Price + ' RON</div><div class="pricetext">' + data[i].NewPrice + ' RON</div></div></div>' +
                                    '</div>'
                    }
                }

                
            }
            productBox.prepend(htmlString);
        }
    );
}


function Search(){
    $("#prod-box").empty();
    var cosmeticsAPI = new CosmeticsAPI();
    cosmeticsAPI.setBaseURL("http://localhost:55427");
    var searchParam = $("#search-box").val();
    //var searchParam = "lip";
    cosmeticsAPI.SearchProduct(searchParam).done(
        function (data) {
            
                var productBox = $("#prod-box");
                var htmlString = "";
                for(i = 0; i < data.length; i++){

                    if(data[i].Image == null){

                        if(data[i].SaleId == null){

                            htmlString += '<div class="col-md-2 column productbox">' +
                                            '<a class="img" href="Product.html" onClick="loadProductDetails(' + data[i].ProductId + ')"><img src="http://cdn.hercampus.com/s3fs-public/2015/01/04/Benefit-full-finish-lipstick-review-swatches-photos-spring-2011-closeup.jpg" class="img-responsive"></a>' +
                                            '<div class="producttitle"><a href="Product.html" onClick="loadProductDetails(' + data[i].ProductId + ')">' + data[i].Name + '</a></div>' +
                                            '<div class="productprice"><div class="pull-left"><div class="pricetext old-price" style="visibility: hidden">""</div><div class="pricetext">' + data[i].Price + ' RON</div><div class="pricetext">' + data[i].Price + ' RON</div></div></div>' +
                                    '</div>'
                        }
                        else{
                            htmlString += '<div class="col-md-2 column productbox">' +
                                            '<a class="img" href="Product.html" onClick="loadProductDetails(' + data[i].ProductId + ')"><img src="http://cdn.hercampus.com/s3fs-public/2015/01/04/Benefit-full-finish-lipstick-review-swatches-photos-spring-2011-closeup.jpg" class="img-responsive"></a>' +
                                            '<div class="producttitle"><a href="Product.html" onClick="loadProductDetails(' + data[i].ProductId + ')">' + data[i].Name + '</a></div>' +
                                            '<div class="productprice"><div class="pull-left"><div class="pricetext old-price" style="text-decoration: line-through; color:red">' + data[i].Price + ' RON</div><div class="pricetext">' + data[i].NewPrice + ' RON</div></div></div>' +
                                    '</div>'
                        }
                    }
                    else{
                        if(data[i].SaleId == null){
                            htmlString += '<div class="col-md-2 column productbox">' +
                                            '<a class="img" href="Product.html" onClick="loadProductDetails(' + data[i].ProductId + ')"><img src=' + data[i].Image + 'class="img-responsive"></a>' +
                                            '<div class="producttitle"><a href="Product.html" onClick="loadProductDetails(' + data[i].ProductId + ')">' + data[i].Name + '</a></div>' +
                                            '<div class="productprice"><div class="pull-left"><div class="pricetext old-price" style="visibility: hidden">""</div><div class="pricetext">' + data[i].Price + ' RON</div></div></div>' +
                                    '</div>'
                        }
                        else{
                            htmlString += '<div class="col-md-2 column productbox">' +
                                            '<a class="img" href="Product.html" onClick="loadProductDetails(' + data[i].ProductId + ')"><img src=' + data[i].Image + 'class="img-responsive"></a>' +
                                            '<div class="producttitle"><a href="Product.html" onClick="loadProductDetails(' + data[i].ProductId + ')">' + data[i].Name + '</a></div>' +
                                            '<div class="productprice"><div class="pull-left"><div class="pricetext old-price" style="text-decoration: line-through; color:red">' + data[i].Price + ' RON</div><div class="pricetext">' + data[i].NewPrice + ' RON</div></div></div>' +
                                    '</div>'
                        }
                    }

                
                }
                productBox.prepend(htmlString);
            }

            
    );

}



function SaveProductId(data){
    ProductHolder += data;

}


function loadProductDetails(prodId){
    $("#prod-box").empty();
    var cosmeticsAPI = new CosmeticsAPI();
    cosmeticsAPI.setBaseURL("http://localhost:55427");

    cosmeticsAPI.getProductById(prodId).done(
        function (data)
        {
            var productDetails = $("#prod-box");
            var htmlString = "";
            if(data.Image == null){
                if(data.SaleId == null){
                    htmlString += '<div class="row">' +
                                    '<div class="col-sm-5">' +
                                        '<img src="http://cdn.hercampus.com/s3fs-public/2015/01/04/Benefit-full-finish-lipstick-review-swatches-photos-spring-2011-closeup.jpg" class="img-responsive"></a>' +
                                    '</div>' +

                                    '<div class="col-sm-5">' +
                                        '<h2>' + data.Name + '</h2>' +
                                        '<h5>Category: ' + data.Category + '</h4>' +
                                        '<h5>Brand: ' + data.Brand + '</h4>' +
                                        '<h5>Description: ' + data.Description + '</h4>' +
                                        '<div class="productprice"><div class="pull-right"><a href="#" class="btn btn-danger btn-sm" role="button">Add to cart</a></div><div class="pricetext">' + data.Price + ' RON</div></div>' +

                                    '</div>' +

                                '</div>'
                }
                else{
                    htmlString += '<div class="row">' +
                                    '<div class="col-sm-5">' +
                                        '<img src="http://cdn.hercampus.com/s3fs-public/2015/01/04/Benefit-full-finish-lipstick-review-swatches-photos-spring-2011-closeup.jpg" class="img-responsive"></a>' +
                                    '</div>' +

                                    '<div class="col-sm-5">' +
                                        '<h2>' + data.Name + '</h2>' +
                                        '<h5>Category: ' + data.Category + '</h4>' +
                                        '<h5>Brand: ' + data.Brand + '</h4>' +
                                        '<h5>Description: ' + data.Description + '</h4>' +
                                        '<div class="productprice"><div class="pull-right"><a href="#" class="btn btn-danger btn-sm" role="button">Add to cart</a></div><div class="pricetext">' + data.NewPrice + ' RON</div></div>' +

                                    '</div>' +

                                '</div>'
                }
            }
            else{
                if(data.SaleId == null){
                    htmlString += '<div class="row">' +
                                        '<div class="col-sm-5">' +
                                            '<img src=' + data.Image + ' class="img-responsive"></a>' +
                                        '</div>' +

                                        '<div class="col-sm-5">' +
                                            '<h2>' + data.Name + '</h2>' +
                                            '<h4>Category: ' + data.Category + '</h4>' +
                                            '<h4>Brand: ' + data.Brand + '</h4>' +
                                            '<h5>Description: ' + data.Description + '</h4>' +
                                            '<div class="productprice"><div class="pull-right"><a href="#" class="btn btn-danger btn-sm" role="button">Add to cart</a></div><div class="pricetext">' + data.Price + ' RON</div></div>' +

                                        '</div>' +

                                    '</div>'
                }
                else{
                    htmlString += '<div class="row">' +
                                    '<div class="col-sm-5">' +
                                        '<img src=' + data.Image + ' class="img-responsive"></a>' +
                                    '</div>' +

                                    '<div class="col-sm-5">' +
                                        '<h2>' + data.Name + '</h2>' +
                                        '<h5>Category: ' + data.Category + '</h4>' +
                                        '<h5>Brand: ' + data.Brand + '</h4>' +
                                        '<h5>Description: ' + data.Description + '</h4>' +
                                        '<div class="productprice"><div class="pull-right"><a href="#" class="btn btn-danger btn-sm" role="button">Add to cart</a></div><div class="pricetext">' + data.NewPrice + ' RON</div></div>' +

                                    '</div>' +

                                '</div>'
                }
            }
                location.href = "Product.html"
                productDetails.prepend(htmlString);
                
        } 

    );

}