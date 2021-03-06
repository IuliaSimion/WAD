function loadCart(){
    var cosmeticsAPI = new CosmeticsAPI();
    cosmeticsAPI.setBaseURL("http://localhost:55427");

    cosmeticsAPI.getCartItems().done(
        function (data){
            var cartItem = $("#cart-item");
            var htmlString = "";
            for(i=0;i<data.length;i++){
                htmlString += '<tr>' +
                                '<td>'+ data[i].Name +'</td>' +
                                '<td>'+ data[i].Quantity +'</td>' +
                                '<td>'+ data[i].Price +'</td>' +
                                '<td><span class="glyphicon glyphicon-remove" onClick="DeleteCartItem('+ data[i].ItemId +')"></span></td>' +
                            '</tr>'
            }
            cartItem.append(htmlString);
        }
    );
}

function AddToCart(){
    var cosmeticsAPI = new CosmeticsAPI();
    cosmeticsAPI.setBaseURL("http://localhost:55427");

    var prodId = localStorage.getItem("ProductId");

    cosmeticsAPI.getProductById(prodId).done(
        function (data){

            var cartItem = {
                Name: data.Name,
                Quantity: $("#quantity").val(),
                Price: data.Price
            }

            cosmeticsAPI.addCartItem(cartItem).done(
                function (data){
                    alert("Product added to cart");
                }
            );  
        }
    ); 
        
}

function DeleteCartItem(id){
    var cosmeticsAPI = new CosmeticsAPI();
    cosmeticsAPI.setBaseURL("http://localhost:55427");

    cosmeticsAPI.deleteCartItem(id).done(
        function (data){
            window.location.href = "Cart.html";
        }
    );
}

function DeleteCart(){
     var cosmeticsAPI = new CosmeticsAPI();
    cosmeticsAPI.setBaseURL("http://localhost:55427");

    cosmeticsAPI.deleteAllCart().done(
        function (data){
            window.location.href = "Cart.html";
        }
            
    );

}