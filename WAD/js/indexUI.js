/*function PopulateHtmlProdBox(data)
{
    var productBox = $("#prod-box");
            var htmlString = "";
            for(i = 0; i < data.length; i++){

                if(data[i].Image == null){

                    if(data[i].SaleId == null){

                        htmlString += '<div class="col-md-2 column productbox">' +
                                            '<a class="img" ><img src="http://cdn.hercampus.com/s3fs-public/2015/01/04/Benefit-full-finish-lipstick-review-swatches-photos-spring-2011-closeup.jpg" class="img-responsive"></a>' +
                                            '<div class="producttitle"><a >' + data[i].Name + '</a></div>' +
                                            '<div class="productprice"><div class="pull-left"><div class="pricetext old-price" style="visibility: hidden">""</div><div class="pricetext">' + data[i].Price + ' RON</div><div class="pricetext">' + data[i].Price + ' RON</div></div></div>' +
                                    '</div>'
                    }
                    else{
                        htmlString += '<div class="col-md-2 column productbox">' +
                                            '<a class="img" ><img src="http://cdn.hercampus.com/s3fs-public/2015/01/04/Benefit-full-finish-lipstick-review-swatches-photos-spring-2011-closeup.jpg" class="img-responsive"></a>' +
                                            '<div class="producttitle"><a >' + data[i].Name + '</a></div>' +
                                            '<div class="productprice"><div class="pull-left"><div class="pricetext old-price" style="text-decoration: line-through; color:red">' + data[i].Price + ' RON</div><div class="pricetext">' + data[i].NewPrice + ' RON</div></div></div>' +
                                    '</div>'
                    }
                }
                else{
                    if(data[i].SaleId == null){
                        htmlString += '<div class="col-md-2 column productbox">' +
                                            '<a class="img" ><img src=' + data[i].Image + 'class="img-responsive"></a>' +
                                            '<div class="producttitle"><a >' + data[i].Name + '</a></div>' +
                                            '<div class="productprice"><div class="pull-left"><div class="pricetext old-price" style="visibility: hidden">""</div><div class="pricetext">' + data[i].Price + ' RON</div></div></div>' +
                                    '</div>'
                    }
                    else{
                        htmlString += '<div class="col-md-2 column productbox">' +
                                            '<a class="img" ><img src=' + data[i].Image + 'class="img-responsive"></a>' +
                                            '<div class="producttitle"><a >' + data[i].Name + '</a></div>' +
                                            '<div class="productprice"><div class="pull-left"><div class="pricetext old-price" style="text-decoration: line-through; color:red">' + data[i].Price + ' RON</div><div class="pricetext">' + data[i].NewPrice + ' RON</div></div></div>' +
                                    '</div>'
                    }
                }

                
            }
            productBox.prepend(htmlString);
}*/
//var ProductHolder = 1;
//alert('value: ' + ProductHolder);
function HideButtons(){
    var cosmeticsAPI = new CosmeticsAPI();
    cosmeticsAPI.setBaseURL("http://localhost:55427");

    var userId = localStorage.getItem("User");
    if(userId == null){
        $("#MyProfile").hide();
        $("#add-btn").hide();
        $("#edit-delete-buttons").hide();
    }
    else{
        cosmeticsAPI.getUserById(userId).done(
            function (data){
                if(data.Role == "user"){
                        $("#add-btn").hide();
                        $("#edit-delete-buttons").hide();
                }
            }

        );
    }

}


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
    HideButtons();
    cosmeticsAPI.getProductsByCategory(category).done(
        function (data) {
            
                var productBox = $("#prod-box");
                var htmlString = "";
                for(i = 0; i < data.length; i++){

                    if(data[i].Image == null){

                        if(data[i].SaleId == null){

                            htmlString += '<div class="col-md-2 column productbox">' +
                                            '<a class="img" href="Product.html" onClick="SaveProductId(' + data[i].ProductId + ')"><img src="http://cdn.hercampus.com/s3fs-public/2015/01/04/Benefit-full-finish-lipstick-review-swatches-photos-spring-2011-closeup.jpg" class="img-responsive"></a>' +
                                            '<div class="producttitle"><a href="Product.html" onClick="SaveProductId(' + data[i].ProductId + ')">' + data[i].Name + '</a></div>' +
                                            '<div class="productprice"><div class="pull-left"><div class="pricetext old-price" style="visibility: hidden">""</div><div class="pricetext">' + data[i].Price + ' RON</div><div class="pricetext">' + data[i].Price + ' RON</div></div></div>' +
                                    '</div>'
                        }
                        else{
                            htmlString += '<div class="col-md-2 column productbox">' +
                                            '<a class="img" href="Product.html" onClick="SaveProductId(' + data[i].ProductId + ')"><img src="http://cdn.hercampus.com/s3fs-public/2015/01/04/Benefit-full-finish-lipstick-review-swatches-photos-spring-2011-closeup.jpg" class="img-responsive"></a>' +
                                            '<div class="producttitle"><a href="Product.html" onClick="SaveProductId(' + data[i].ProductId + ')">' + data[i].Name + '</a></div>' +
                                            '<div class="productprice"><div class="pull-left"><div class="pricetext old-price" style="text-decoration: line-through; color:red">' + data[i].Price + ' RON</div><div class="pricetext">' + data[i].NewPrice + ' RON</div></div></div>' +
                                    '</div>'
                        }
                    }
                    else{
                        if(data[i].SaleId == null){
                            htmlString += '<div class="col-md-2 column productbox">' +
                                            '<a class="img" href="Product.html" onClick="SaveProductId(' + data[i].ProductId + ')"><img src=' + data[i].Image + 'class="img-responsive"></a>' +
                                            '<div class="producttitle"><a href="Product.html" onClick="SaveProductId(' + data[i].ProductId + ')">' + data[i].Name + '</a></div>' +
                                            '<div class="productprice"><div class="pull-left"><div class="pricetext old-price" style="visibility: hidden">""</div><div class="pricetext">' + data[i].Price + ' RON</div></div></div>' +
                                    '</div>'
                        }
                        else{
                            htmlString += '<div class="col-md-2 column productbox">' +
                                            '<a class="img" href="Product.html" onClick="SaveProductId(' + data[i].ProductId + ')"><img src=' + data[i].Image + 'class="img-responsive"></a>' +
                                            '<div class="producttitle"><a href="Product.html" onClick="SaveProductId(' + data[i].ProductId + ')">' + data[i].Name + '</a></div>' +
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
    HideButtons();
    cosmeticsAPI.getProductsByBrand(brand).done(
        function (data) {
            
                var productBox = $("#prod-box");
                var htmlString = "";
                for(i = 0; i < data.length; i++){

                    if(data[i].Image == null){

                        if(data[i].SaleId == null){

                            htmlString += '<div class="col-md-2 column productbox">' +
                                            '<a class="img" href="Product.html" onClick="SaveProductId(' + data[i].ProductId + ')"><img src="http://cdn.hercampus.com/s3fs-public/2015/01/04/Benefit-full-finish-lipstick-review-swatches-photos-spring-2011-closeup.jpg" class="img-responsive"></a>' +
                                            '<div class="producttitle"><a href="Product.html" onClick="SaveProductId(' + data[i].ProductId + ')">' + data[i].Name + '</a></div>' +
                                            '<div class="productprice"><div class="pull-left"><div class="pricetext old-price" style="visibility: hidden">""</div><div class="pricetext">' + data[i].Price + ' RON</div><div class="pricetext">' + data[i].Price + ' RON</div></div></div>' +
                                    '</div>'
                        }
                        else{
                            htmlString += '<div class="col-md-2 column productbox">' +
                                            '<a class="img"  onClick="SaveProductId(' + data[i].ProductId + ')"><img src="http://cdn.hercampus.com/s3fs-public/2015/01/04/Benefit-full-finish-lipstick-review-swatches-photos-spring-2011-closeup.jpg" class="img-responsive"></a>' +
                                            '<div class="producttitle"><a  onClick="SaveProductId(' + data[i].ProductId + ')">' + data[i].Name + '</a></div>' +
                                            '<div class="productprice"><div class="pull-left"><div class="pricetext old-price" style="text-decoration: line-through; color:red">' + data[i].Price + ' RON</div><div class="pricetext">' + data[i].NewPrice + ' RON</div></div></div>' +
                                    '</div>'
                        }
                    }
                    else{
                        if(data[i].SaleId == null){
                            htmlString += '<div class="col-md-2 column productbox">' +
                                            '<a class="img" href="Product.html" onClick="SaveProductId(' + data[i].ProductId + ')"><img src=' + data[i].Image + 'class="img-responsive"></a>' +
                                            '<div class="producttitle"><a href="Product.html" onClick="SaveProductId(' + data[i].ProductId + ')">' + data[i].Name + '</a></div>' +
                                            '<div class="productprice"><div class="pull-left"><div class="pricetext old-price" style="visibility: hidden">""</div><div class="pricetext">' + data[i].Price + ' RON</div></div></div>' +
                                    '</div>'
                        }
                        else{
                            htmlString += '<div class="col-md-2 column productbox">' +
                                            '<a class="img" href="Product.html" onClick="SaveProductId(' + data[i].ProductId + ')"><img src=' + data[i].Image + 'class="img-responsive"></a>' +
                                            '<div class="producttitle"><a href="Product.html" onClick="SaveProductId(' + data[i].ProductId + ')">' + data[i].Name + '</a></div>' +
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
    HideButtons();

    cosmeticsAPI.getAllProducts().done(
        function (data){
            var productBox = $("#prod-box");
            var htmlString = "";
            for(i = 0; i < data.length; i++){

                if(data[i].Image == null){

                    if(data[i].SaleId == null){

                        htmlString += '<div class="col-md-2 column productbox">' +
                                            '<a class="img" href="Product.html" onClick="SaveProductId(\'' + data[i].ProductId + '\')"><img src="http://cdn.hercampus.com/s3fs-public/2015/01/04/Benefit-full-finish-lipstick-review-swatches-photos-spring-2011-closeup.jpg" class="img-responsive"></a>' +
                                            '<div class="producttitle"><a href="Product.html" onClick="SaveProductId(\'' + data[i].ProductId + '\')">' + data[i].Name + '</a></div>' +
                                            '<div class="productprice"><div class="pull-left"><div class="pricetext old-price" style="visibility: hidden">""</div><div class="pricetext">' + data[i].Price + ' RON</div><div class="pricetext">' + data[i].Price + ' RON</div></div></div>' +
                                    '</div>'
                    }
                    else{
                        htmlString += '<div class="col-md-2 column productbox">' +
                                            '<a class="img" href="Product.html" onClick="SaveProductId(\'' + data[i].ProductId + '\')"><img src="http://cdn.hercampus.com/s3fs-public/2015/01/04/Benefit-full-finish-lipstick-review-swatches-photos-spring-2011-closeup.jpg" class="img-responsive"></a>' +
                                            '<div class="producttitle"><a href="Product.html" onClick="SaveProductId(\'' + data[i].ProductId + '\')">' + data[i].Name + '</a></div>' +
                                            '<div class="productprice"><div class="pull-left"><div class="pricetext old-price" style="text-decoration: line-through; color:red">' + data[i].Price + ' RON</div><div class="pricetext">' + data[i].NewPrice + ' RON</div></div></div>' +
                                    '</div>'
                    }
                }
                else{
                    if(data[i].SaleId == null){
                        htmlString += '<div class="col-md-2 column productbox">' +
                                            '<a class="img" href="Product.html" onClick="SaveProductId(\'' + data[i].ProductId + '\')"><img src=' + data[i].Image + 'class="img-responsive"></a>' +
                                            '<div class="producttitle"><a href="Product.html" onClick="SaveProductId(\'' + data[i].ProductId + '\')">' + data[i].Name + '</a></div>' +
                                            '<div class="productprice"><div class="pull-left"><div class="pricetext old-price" style="visibility: hidden">""</div><div class="pricetext">' + data[i].Price + ' RON</div></div></div>' +
                                    '</div>'
                    }
                    else{
                        htmlString += '<div class="col-md-2 column productbox">' +
                                            '<a class="img" href="Product.html" onClick="SaveProductId(\'' + data[i].ProductId + '\')"><img src=' + data[i].Image + 'class="img-responsive"></a>' +
                                            '<div class="producttitle"><a href="Product.html" onClick="SaveProductId(\'' + data[i].ProductId + '\')">' + data[i].Name + '</a></div>' +
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
                                            '<a class="img" href="Product.html" onClick="SaveProductId(' + data[i].ProductId + ')"><img src="http://cdn.hercampus.com/s3fs-public/2015/01/04/Benefit-full-finish-lipstick-review-swatches-photos-spring-2011-closeup.jpg" class="img-responsive"></a>' +
                                            '<div class="producttitle"><a href="Product.html" onClick="SaveProductId(' + data[i].ProductId + ')">' + data[i].Name + '</a></div>' +
                                            '<div class="productprice"><div class="pull-left"><div class="pricetext old-price" style="visibility: hidden">""</div><div class="pricetext">' + data[i].Price + ' RON</div><div class="pricetext">' + data[i].Price + ' RON</div></div></div>' +
                                    '</div>'
                        }
                        else{
                            htmlString += '<div class="col-md-2 column productbox">' +
                                            '<a class="img" href="Product.html" onClick="SaveProductId(' + data[i].ProductId + ')"><img src="http://cdn.hercampus.com/s3fs-public/2015/01/04/Benefit-full-finish-lipstick-review-swatches-photos-spring-2011-closeup.jpg" class="img-responsive"></a>' +
                                            '<div class="producttitle"><a href="Product.html" onClick="SaveProductId(' + data[i].ProductId + ')">' + data[i].Name + '</a></div>' +
                                            '<div class="productprice"><div class="pull-left"><div class="pricetext old-price" style="text-decoration: line-through; color:red">' + data[i].Price + ' RON</div><div class="pricetext">' + data[i].NewPrice + ' RON</div></div></div>' +
                                    '</div>'
                        }
                    }
                    else{
                        if(data[i].SaleId == null){
                            htmlString += '<div class="col-md-2 column productbox">' +
                                            '<a class="img"  href="Product.html" onClick="SaveProductId(' + data[i].ProductId + ')"><img src=' + data[i].Image + 'class="img-responsive"></a>' +
                                            '<div class="producttitle"><a  href="Product.html" onClick="SaveProductId(' + data[i].ProductId + ')">' + data[i].Name + '</a></div>' +
                                            '<div class="productprice"><div class="pull-left"><div class="pricetext old-price" style="visibility: hidden">""</div><div class="pricetext">' + data[i].Price + ' RON</div></div></div>' +
                                    '</div>'
                        }
                        else{
                            htmlString += '<div class="col-md-2 column productbox">' +
                                            '<a class="img" href="Product.html" onClick="SaveProductId(' + data[i].ProductId + ')"><img src=' + data[i].Image + 'class="img-responsive"></a>' +
                                            '<div class="producttitle"><a  href="Product.html" onClick="SaveProductId(' + data[i].ProductId + ')">' + data[i].Name + '</a></div>' +
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
    //$.cookie("ProductId", '1');
    //document.cookie = data;
    //alert($.cookie("ProductId").val());
    localStorage.setItem("ProductId", data);

}


function loadProductDetails(){
    //$("#prod-box").empty();
    //var prodId = $.cookie("ProductId").val();
    //var prodId = document.cookie;
    HideButtons();

    var prodId = localStorage.getItem("ProductId");
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
                                        '<div id="edit-delete-buttons"><button class="btn btn-primary edit-prod" onClick="PopulateEdit()" data-toggle="modal" data-target="#myEditModal"><span class="glyphicon glyphicon-pencil"></span>Edit</button><button class="btn btn-primary delete-prod" onClick="DeleteProduct()><span class="glyphicon glyphicon-remove"></span>Delete</button></div>' +
                                        '<h2>' + data.Name + '</h2>' +
                                        '<h4>Category: ' + data.Category + '</h4>' +
                                        '<h4>Brand: ' + data.Brand + '</h4>' +
                                        '<h5>Description: ' + data.Description + '</h5>' +
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
                                        '<div id="edit-delete-buttons"><button class="btn btn-primary edit-prod" onClick="PopulateEdit()" data-toggle="modal" data-target="#myEditModal"><span class="glyphicon glyphicon-pencil"></span>Edit</button><button class="btn btn-primary delete-prod" onClick="DeleteProduct()><span class="glyphicon glyphicon-remove"></span>Delete</button></div>' +
                                        '<h2>' + data.Name + '</h2>' +
                                        '<h4>Category: ' + data.Category + '</h4>' +
                                        '<h4>Brand: ' + data.Brand + '</h4>' +
                                        '<h5>Description: ' + data.Description + '</h5>' +
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
                                            '<div id="edit-delete-buttons"><button class="btn btn-primary edit-prod" onClick="PopulateEdit()" data-toggle="modal" data-target="#myEditModal"><span class="glyphicon glyphicon-pencil"></span>Edit</button><button class="btn btn-primary delete-prod" onClick="DeleteProduct()"><span class="glyphicon glyphicon-remove"></span>Delete</button></div>' +
                                            '<h2>' + data.Name + '</h2>' +
                                            '<h4>Category: ' + data.Category + '</h4>' +
                                            '<h4>Brand: ' + data.Brand + '</h4>' +
                                            '<h5>Description: ' + data.Description + '</h5>' +
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
                                        '<div id="edit-delete-buttons"><button class="btn btn-primary edit-prod" onClick="PopulateEdit()" data-toggle="modal" data-target="#myEditModal"><span class="glyphicon glyphicon-pencil"></span>Edit</button><button class="btn btn-primary delete-prod" onClick="DeleteProduct()><span class="glyphicon glyphicon-remove"></span>Delete</button></div>' +
                                        '<h2>' + data.Name + '</h2>' +
                                        '<h4>Category: ' + data.Category + '</h4>' +
                                        '<h4>Brand: ' + data.Brand + '</h4>' +
                                        '<h5>Description: ' + data.Description + '</h5>' +
                                        '<div class="productprice"><div class="pull-right"><a href="#" class="btn btn-danger btn-sm" role="button">Add to cart</a></div><div class="pricetext">' + data.NewPrice + ' RON</div></div>' +

                                    '</div>' +

                                '</div>'
                }
            }
                //location.href = "Product.html"
                productDetails.prepend(htmlString);
                
        } 

    );

}


function AddProduct(){
    var cosmeticsAPI = new CosmeticsAPI();
    cosmeticsAPI.setBaseURL("http://localhost:55427");

    var product = {
        Name: $("#inputName").val(),
        Category: $("#inputCategory").val(),
        Brand: $("#inputBrand").val(),
        Description: $("#inputDescription").val(),
        Price: $("#inputPrice").val(),
        Image: $("#inputImage").val(),
        SaleId: $("#inputSale").val()
    }

    cosmeticsAPI.addNewProduct(product).done(
        function (data){
            window.location.href = "Index.html";
        }
    );
}

function DeleteProduct(){
    var cosmeticsAPI = new CosmeticsAPI();
    cosmeticsAPI.setBaseURL("http://localhost:55427");

    //var prodId = $.cookie("ProductId").val();
    var prodId = localStorage.getItem("ProductId");

    cosmeticsAPI.deleteProduct(prodId).done(
        function (data){
            window.location.href = "Index.html";
        }
    );
}

function PopulateEdit(){
    var cosmeticsAPI = new CosmeticsAPI();
    cosmeticsAPI.setBaseURL("http://localhost:55427");

    var prodId = localStorage.getItem("ProductId");

    cosmeticsAPI.getProductById(prodId).done(
        function (data){
            $("#editName").val(data.Name);
            $("#editCategory").val(data.Category);
            $("#editBrand").val(data.Brand);
            $("#editDescription").val(data.Description);
            $("#editPrice").val(data.Price);
            $("#editImage").val(data.Image);
            $("#editSale").val(data.SaleId);
        }
    );

}

function EditProduct(){
    var cosmeticsAPI = new CosmeticsAPI();
    cosmeticsAPI.setBaseURL("http://localhost:55427");

    var product = {
        ProductId: localStorage.getItem("ProductId"),
        Name: $("#editName").val(),
        Category: $("#editCategory").val(),
        Brand: $("#editBrand").val(),
        Description: $("#editDescription").val(),
        Price: $("#editPrice").val(),
        Image: $("#editImage").val(),
        SaleId: $("#editSale").val(),
        NewPrice: null
    }
    var prodId = localStorage.getItem("ProductId");
    cosmeticsAPI.updateProduct(prodId, product).done(
        function (data) {
            window.location.href = "Product.html";
        }
    );
}


function LogoutBtn(){
    var user = localStorage.getItem("User");
    if(user != null){
        $("#login-btn").empty();
        var login = $("#login-btn");
        htmlString = "";
        
        htmlString = '<a onClick="Logout()"><span class="glyphicon glyphicon-user login"></span><span class="login-text"> Logout </span></a>';

        login.append(htmlString);

    }
}

function Logout(){
    localStorage.removeItem("User");
    window.location.href = "Index.html";
}