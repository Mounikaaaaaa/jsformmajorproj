function clearErrors(){
    errors = document.getElementsByClassName('formerrors');
    for(let item of errors){
        item.innerHTML = "";
    }
}
function seterror(id,error)
{
    // sets error inside tag of id
    element = document.getElementById(id);
    element.getElementsByClassName('formerror')[0].innerHTML = error;
}

function validateForm(){
    var returnval = true;
    clearErrors();
    var name= document.forms['myForm']["fname"].value;
    if(name.length<5){
        seterror("name","*Length of name is too short!");
        returnval = false;
    }
    if(name.length==0){
        seterror("name","*Length of name cannot be zero!");
        returnval = false;
    }
    
    var phone= document.forms['myForm']["fphone"].value;
    if(phone.length!=10){
        seterror("phone","*Phone number should be of 10 digits!");
        returnval = false;
    }
    var password= document.forms['myForm']["fpass"].value;
    if(password.length<8){
        seterror("pass","*Password should be atleast 8 characters long!");
        returnval = false;
    }
    if(password==name){
        seterror("pass","*Password should not be name!");
        returnval = false;
    }
    var cpassword= document.forms['myForm']["fcpass"].value;
    if(cpassword!=password){
        seterror("cpass","*Password and confirm password should match!");
        returnval = false;
    }


    return returnval;

}