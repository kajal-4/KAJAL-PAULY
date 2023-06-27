var  email = document.getElementById('field1');
var err1=document.getElementById('err1');
var pwd=document.getElementById('field2');
var err2=document.getElementById('err2');
var pwd=document.getElementById('field3');
var err3=document.getElementById('err3');
//sAmple1.3@domain.co.in
var regex = /^([A-Za-z0-9\-#_.]+)@([A-Za-z0-9\-]+).([a-z]{2,3}).([a-z]{2,3})?$/
var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
var password=/(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/
function validateEmail(){
    // alert("hi")
    if(email.value.trim()==''){
        err1.innerText="Field canot be empty";
        email.style.border='1px solid red'
        return false
    }
    else if(!email.value.match(regex)){

       err1.innerText="Email is not correct format";
       email.style.border='2px solid red';
       return false
}
else{
    err1.innerText="";
    email.style.border='2px solid green';
    return true
}
}
function validatepass(){
    // alert("hi")
    if(pwd.value.trim()==''){
        pwd.style.border="1px solid red";
        err2.innerText="Field cannot be empty";
        return false
    }
    
    
    else if(pwd.value.length>8){
        pwd.style.border="2px solid red";
        err2.innerText="password minimum 8 characters";
        
        return false
    }
    else if(pwd.value.length>8){
        pwd.style.border="2px solid red";
        err2.innerText="";
        return false
    }
    else if(pwd.value.length>8){
        pwd.style.border="2px solid red";
        err2.innerText="atleast one lowercase";
        return false
    }
    else if(pwd.value.length>8){
        pwd.style.border="2px solid red";
        err2.innerText="atleast one number";
        return false
    }

    else{
        pwd.style.border="1px solid green";
        err2.innerText="";
        return true
    }
}
function validatenum(){
    if(pwd.value.trim()==''){
        pwd.style.border="1px solid red";
        err3.innerText="Field cannot be empty";
        return false
    }
    

    else if(pwd.value.length>10){
        pwd.style.border="2px solid red";
        err3.innerText="phone number should contain 10 numbers only ";
        return false
    }
    
    else{
        pwd.style.border="2px solid green";
        err3.innerText="";
        return true
    }
    }




