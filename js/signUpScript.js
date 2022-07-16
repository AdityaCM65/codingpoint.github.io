function validation() {
    let fname = document.getElementById('fname').value;
    let sname = document.getElementById('sname').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let cpassword = document.getElementById('cpassword').value;
    
    

    if(fname == "") {
        document.getElementById('fnmsg').innerHTML = "!!! Please Enter First Name ";
        return false;
    }
    if(sname == "") {
        document.getElementById('fnmsg').innerHTML = "!!! Please Enter Last Name ";
        return false;
    }
    if(email == "") {
        document.getElementById('fnmsg').innerHTML = "!!! Please Enter Email Name ";
        return false;
    }
    if(password == "") {
        document.getElementById('fnmsg').innerHTML = "!!! Please Enter Password ";
        return false;
    }
    if(cpassword == "") {
        document.getElementById('fnmsg').innerHTML = "!!! Please Enter Confirm Password ";
        return false;
    }

    
  

    if(fname.length < 2 || fname.length >= 10) {
    
        document.getElementById('fnmsg').innerHTML = "!!! First Name 2 to 10 Character ";
        
        return false;
    }
    
    if(sname.length < 2 || sname.length >= 10) {
    
        document.getElementById('fnmsg').innerHTML = "!!! Last Name 2 to 10 Character ";
        
        return false;
    }

    if(password.length < 8 || password.length >= 20) {
    
        document.getElementById('fnmsg').innerHTML = "!!!  Password Greater than 8 Character ";
        
        return false;
    }

    if(cpassword.length < 8 || cpassword.length >= 20) {
    
        document.getElementById('fnmsg').innerHTML = "!!! Confirm Password Greater than 8 Character ";
        
        return false;
    }

    if(password != cpassword) {
        document.getElementById('fnmsg').innerHTML = "!!! Password and Confirm Password Not Same ";
       return false;
    }
   
    let letters = /^[A-Za-z]+$/;
    

    
    
    if(fname.match(letters) && sname.match(letters) ){
      return true;
    }
    else{
    document.getElementById('fnmsg').innerHTML = "!!! Only Alphabets are Allowed In First & Last name ";
    return false;
    }

    


}