function validform() {
    var name = document.myform.name.value;
    var firstpassword = document.myform.first_pass.value;
    var secondpassword = document.myform.second_pass.value;
    var num = document.myform.num.value;
    var institutionCode= document.myform.institutionCode.value;
    var adhaarNumber= document.myform.adhaarNumber.value;
    var text;
    if (name == "") {
        text = "Name can't be blank";
        alert(text);
       return false;
    }
    else if (isNaN(num)) {
        // document.getElementById("numloc").innerHTML="Enter Numeric value only";  
        alert("Mobile number should be all digits")
        return false;
    }
    else if(num.length==0){
        alert("Enter your Mobile Number");
        return false;
    }
    else if(num.length!=10){
        alert("Invalid Mobile Number");
        return false;
    }
    else if(institutionCode.length!=4){
        alert("Invalid Institution Code");
        return false; 
    }else if(adhaarNumber.length!=12){
        alert("Please enter a valid aadhar number");
        return false;
    }else if(isNan(adhaarNumber)){
        alert("Aadhar number should be all digits");
        return false;
    }
    else if(adhaarNumber==""){
        alert("Enter your aadhar number");
        return false;
    }
    else if(firstpassword==""){
        alert("Enter your password");
        return false;
    }
    else if (firstpassword.length < 8) {
        text = "Password must be at least 8 characters long.";
        alert(text);
   }
   else{
    if (firstpassword == secondpassword) {
        return true;
    }
    else {
        alert("password must be same!");
        return false;
    }
   }
}

function validateemail()  
{  
var x=document.myform.email.value;  
var atposition=x.indexOf("@");  
var dotposition=x.lastIndexOf(".");  
if (atposition<1 || dotposition<atposition+2 || dotposition+2>=x.length){  
  alert("Please enter a valid e-mail address \n atpostion:"+atposition+"\n dotposition:"+dotposition);  
  return false;  
  }  
}  
