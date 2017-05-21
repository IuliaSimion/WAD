function UserInfo(){
    var cosmeticsAPI = new CosmeticsAPI();
    cosmeticsAPI.setBaseURL("http://localhost:55427");

    var userId = localStorage.getItem("User");

    cosmeticsAPI.getUserById(userId).done(
        function (data){
            var userInfo = $("#user-info");
            var htmlString = "";
            htmlString += '<div class="row">' +
                                    
                                    '<div class="col-sm-6">' +
                                        '<div id="edit-user-btn"><button class="btn btn-primary edit-user"><span class="glyphicon glyphicon-pencil"></span>Edit</button></div>' +
                                        '<h4>Name: ' + data.Name + '</h2>' +
                                        '<h4>Email: ' + data.Email + '</h4>' +
                                        '<h4>Address: ' + data.Address + '</h4>' +
                                        '<h4>Phone number: ' + data.PhoneNumber + '</h4>' +

                                    '</div>' +

                                    '<div class="col-sm-6">' +
                                        '<h4>Orders history</h4>' +
                                    '</div>' +


                                '</div>'
            userInfo.append(htmlString);
        }

    
    );
}