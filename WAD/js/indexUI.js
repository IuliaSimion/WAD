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
                    htmlString2 += '<li class="list-group-item"><a id="categ-link-'+ data[i] +'" style="color: hotpink;" href="#" onClick="loadProductsByCategory(\''+ data[i] +'\')">' + data[i] + '</a></li>';
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
                    htmlString2 += '<li class="list-group-item"><a style="color: hotpink;" href="#" onClick="loadProductsByBrand()">' + data[i] + '</a></li>';
                }
                htmlString1 += '<ul class="list-group">' + htmlString2 + '</ul>';
                collapseBrands.append(htmlString1);
            
        }

    );

}

function loadProductsByBrand(){
    $("#prod-box").empty();
    var cosmeticsAPI = new CosmeticsAPI();
    cosmeticsAPI.setBaseURL("http://localhost:55427");
    //var brand = $(this).text();
    var brand = "Sephora";
    cosmeticsAPI.getProductsByBrand(brand).done(
        function (data) {
            
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
            }

            
    );

}
