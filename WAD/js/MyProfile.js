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
                                        '<div id="edit-user-btn"><button class="btn btn-primary edit-user" onClick="PopulateUserEdit()" data-toggle="modal" data-target="#EditUser"><span class="glyphicon glyphicon-pencil"></span>Edit</button></div>' +
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


function PopulateUserEdit(){
    var cosmeticsAPI = new CosmeticsAPI();
    cosmeticsAPI.setBaseURL("http://localhost:55427");

    var userId = localStorage.getItem("User");

    cosmeticsAPI.getUserById(userId).done(
        function (data){
            $("#editUserName").val(data.Name);
            $("#editEmail").val(data.Email);
            $("#editAddress").val(data.Address);
            $("#editPhone").val(data.PhoneNumber);
        }
    );

}

function EditUser(){
    var cosmeticsAPI = new CosmeticsAPI();
    cosmeticsAPI.setBaseURL("http://localhost:55427");

    var user = {
        UserId: localStorage.getItem("User"),
        Name: $("#editUserName").val(),
        Email: $("#editEmail").val(),
        Password: "123",
        PhoneNumber: $("#editPhone").val(),
        Address: $("#editAddress").val(),
        Role: "user"
    }
    var userId = localStorage.getItem("User");
    cosmeticsAPI.updateUser(userId, user).done(
        function (data) {
            window.location.href = "MyProfile.html";
        }
    );
}