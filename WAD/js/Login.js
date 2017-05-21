
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
                    localStorage.setItem("User", data[0].UserId);
                    alert(localStorage.getItem("User"));
                    window.location.href="Index.html";
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
    //.fail(function (response)
    //{
        //alert("Failed");
    //});
    //window.location.href="Index.html";
    
}


function Register(){
    var cosmeticsAPI = new CosmeticsAPI();
    cosmeticsAPI.setBaseURL("http://localhost:55427");
    var user = {
        Name : $("#name").val() ,
        Email : $("#email-address").val() , 
        Password : $("#confirm-password").val() , 
        PhoneNumber : $("#number").val() ,
        Address : $("#address").val() , 
        Role : "user"
    }

    cosmeticsAPI.addNewUser(user).done(
        window.location.href="Index.html"
    );
   

}
