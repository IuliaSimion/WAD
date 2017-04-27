
function loadBrands()
{
    var cosmeticsAPI = new CosmeticsAPI();
    cosmeticsAPI.setBaseURL("http://localhost:55427");
    cosmeticsAPI.getAllBrands().done(
        function (data)
        {
                var colapseBrands = $("#collapse2");
                var htmlString1 = "";
                var htmlString2 = "";
                for(i = 0; i < data.length; i++){
                    htmlString2 += '<li class="list-group-item">' + data[i] + '</li>';
                }
                htmlString1 += '<ul class="list-group">' + htmlString2 + '</ul>';
                colapseBrands.append(htmlString1);
            
        }

    );

}