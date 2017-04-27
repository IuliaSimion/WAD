function loadSales()
{
    var cosmeticsAPI = new CosmeticsAPI();
    cosmeticsAPI.setBaseURL("http://localhost:55427");

    cosmeticsAPI.getProductsOnSale().done(
        function (data){
            var productBox = $("#prod-box-sales");
            var htmlString = "";
            for(i = 0; i < data.length; i++){

                if(data[i].Image == null){

                        htmlString += '<div class="col-md-2 column productbox">' +
                                            '<a class="img" href="Product.html"><img src="http://cdn.hercampus.com/s3fs-public/2015/01/04/Benefit-full-finish-lipstick-review-swatches-photos-spring-2011-closeup.jpg" class="img-responsive"></a>' +
                                            '<div class="producttitle"><a href="Product.html">' + data[i].Name + '</a></div>' +
                                            '<div class="productprice"><div class="pull-left"><div class="pricetext old-price" style="text-decoration: line-through; color:red">' + data[i].Price + ' RON</div><div class="pricetext">' + data[i].NewPrice + ' RON</div></div></div>' +
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
            productBox.append(htmlString);
        }
    );
}