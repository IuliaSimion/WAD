/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function CosmeticsAPI() {

    if (typeof CosmeticsAPI.instance === 'object') {
        return CosmeticsAPI.instance;
    }

    var baseURL = "localhost";
    var doAsyncGet = function (partialUrl) {
        var authorityToken = $.cookie("cosmetics_token");
        var fullUrl = baseURL + partialUrl;
        return $.ajax({
            url: fullUrl,
            headers: {
                "Authority": authorityToken                
            },
            dataType: "json"
        });
    };

    var doAsyncPost = function (partialURL, jsonDataToPost) {
        var authorityToken = $.cookie("cosmetics_token");
        var fullUrl = baseURL + partialURL;
        return $.ajax({
            url: fullUrl,
            type: "POST",
            headers: {
                "Authority": authorityToken,
                "Content-Type":"application/json"
                
            },
            data: JSON.stringify(jsonDataToPost),
            dataType: "json"
        });
    };

    var doAsyncDelete = function (partialURL)
    {
        var authorityToken = $.cookie("cosmetics_token");
        var fullUrl = baseURL + partialURL;
        return $.ajax({
            url: fullUrl,
            type: "DELETE",
            headers: {
                "Authority": authorityToken               
            },            
            dataType: "json"
        });
    }

    var doAsyncPut = function (partialURL, jsonDataToPut) {
        var authorityToken = $.cookie("cosmetics_token");
        var fullUrl = baseURL + partialURL;
        return $.ajax({
            url: fullUrl,
            type: "PUT",
            headers: {
                "Authority": authorityToken,
                "Content-Type": "application/json"
            },
            data: JSON.stringify(jsonDataToPut),            
            dataType: "json"
        });
    };

    this.setBaseURL = function (strBaseURL) {
        baseURL = strBaseURL;
    };

    this.getAllProducts = function () {
        var apiURL = "/api/products";
        return doAsyncGet(apiURL);
    };

    this.getAllCategories = function () {
        var apiURL = "/api/products/categories";
        return doAsyncGet(apiURL);
    };  

    this.getAllBrands = function () {
        var apiURL = "/api/products/brands";
        return doAsyncGet(apiURL);
    };    

    this.getProductById = function (id) {
        var apiURL = "/api/products/" + id;
        return doAsyncGet(apiURL);
    };

    this.getProductsOnSale = function () {
        var allProductsReq = "/api/products/sale";
        return doAsyncGet(allProductsReq);
    };

    this.getProductsByCategory = function (category) {
        var apiURL = "/api/products/category/" + category;
        return doAsyncGet(apiURL);
    };
    
    this.getProductsByBrand = function (brand) {
        var apiURL = "/api/products/brand/" + brand;
        return doAsyncGet(apiURL);
    };

    this.SearchProduct = function (search) {
        var apiURL = "/api/products/search/" + search;
        return doAsyncGet(apiURL);
    };
   
    this.addNewProduct = function (product) {
        var postURL = "/api/products";
        return doAsyncPost(postURL, product);
    };

    this.deleteProduct = function (productId)
    {
        var deleteURL = "/api/products/" + productId;
        return doAsyncDelete(deleteURL);
    };

    this.updateProduct = function (productData)
    {
        var putUrl = "/api/products/"+productData.id;
        return doAsyncPut(putUrl, productData);
    };

    this.getUserByEmail = function (email) {
        var apiURL = "/api/users/email/" + email + "/";
        return doAsyncGet(apiURL);
    };

   this.addNewUser = function (user) {
        var postURL = "/api/users";
        return doAsyncPost(postURL, user);
    };

    this.getUserById = function (id) {
        var apiURL = "/api/users/" + id;
        return doAsyncGet(apiURL);
    };

    CosmeticsAPI.instance = this;
}
