
function VerifyUser(){
    var cosmeticsAPI = new CosmeticsAPI();
    cosmeticsAPI.setBaseURL("http://localhost:55427");

    var email = $("#email").val();
    var pass = $("#pwd").val();

    cosmeticsAPI.getUserByEmail(email).done(
        function (data) {
            if(data.length > 0){
                if(data[0].Password == pass)
                {
                    $.cookie("User", data[0].UserId, { expires : 10 });
                }
                else{
                    alert("Incorrect password!");
                }
            }
            else{
                alert("User does not exist!");
            }

        }
    );
    window.location.replace("Index.html");
    
}
