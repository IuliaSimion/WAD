//var accordionCategories = document.getElementsByClassName("accordion")[0];
//var accordionBrands = document.getElementsByClassName("accordion")[1];
var accordionCategories = document.getElementById("collapse1");
var accordionBrands = document.getElementById("collapse2");

var requestCategories = new XMLHttpRequest();
requestCategories.open('GET', 'http://localhost:55427/api/Products/categories');
requestCategories.onload = function() {
    var myData = JSON.parse(requestCategories.responseText);
    HtmlCategories(myData);
}
requestCategories.send();

function HtmlCategories(data) {
    var htmlString1 = "";
    var htmlString2 = "";
    for(i = 0; i < data.length; i++){
    htmlString2 += '<li class="list-group-item">' + data[i] + '</li>';
    }  
    htmlString1 += '<ul class="list-group">' + htmlString2 + '</ul>';
    accordionCategories.insertAdjacentHTML('beforeend', htmlString1);
}

var requestBrands = new XMLHttpRequest();
requestBrands.open('GET', 'http://localhost:55427/api/Products/brands');
requestBrands.onload = function() {
    var myData = JSON.parse(requestBrands.responseText);
    HtmlBrands(myData);
}
requestCategories.send();

function HtmlBrands(data) {
    var htmlString1 = "";
    var htmlString2 = "";
    for(i = 0; i < data.length; i++){
    htmlString2 += "<li class=\"list-group-item\">" + data[i] + "</li>";
    }
    htmlString1 += "<ul class=\"list-group\">" + htmlString2 + "</ul>";
    accordionBrands.insertAdjacentHTML('beforeend', htmlString1);
}
