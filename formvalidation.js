const submit=document.getElementById("submit");
function myfuncname(){
    var cn=document.myform.cname.value;
    document.getElementById("name").innerHTML=cn;
    if(document.getElementById("name").innerHTML==""){
        document.getElementById("name").innerHTML="Jane Appleseed";
    }

}
function myfuncnum(){
    var cnum=document.myform.cnum.value;
    document.getElementById("cn").innerHTML=cnum;
    if(document.getElementById("cn").innerHTML==""){
        document.getElementById("cn").innerHTML="0000 0000 0000 0000";
    }
}
function myfunccvc(){
    var cv=document.myform.cvc.value;
    document.getElementById("cvc").innerHTML=cv;
    if(document.getElementById("cvc").innerHTML==""){
        document.getElementById("cvc").innerHTML="000";
    }
}
function myfuncmon(){
    var edm=document.myform.expdate.value;
    document.getElementById("month").innerHTML=edm;
    if(document.getElementById("month").innerHTML==""){
        document.getElementById("month").innerHTML="00";
    }
    else{
        document.getElementById("month").innerHTML=edm
    }
    

}
function myfuncyear(){
    var edy=document.myform.expdate1.value;
    document.getElementById("year").innerHTML=edy;
    if(document.getElementById("year").innerHTML==""){
        document.getElementById("year").innerHTML="00";
    }

}
function massvalidate(){
    function validatename(){
        var cn=document.myform.cname.value;
        var l=/^[A-Za-z]+$/;
        let emsg=document.getElementById("nameerror");
        if(cn==""){
            emsg.innerHTML="Can't be blank"
        }
        else if(cn.match(l)){
            emsg.innerHTML=""
        
        }
        else{
            emsg.innerHTML="Enter name"
        }


       
    }
    function validatecard(){
        var cnum=document.myform.cnum.value;
        let carderror=document.getElementById("numbererror");
        if ((cnum.length>0 && cnum.length<16)||isNaN(cnum)){
            carderror.innerHTML="Wrong format"
        }
        else if (cnum==""){
            carderror.innerHTML="Can't be blank"

        }
        else{
            carderror.innerHTML=""
        }

    }
    function validatecvc(){
        var cv=document.myform.cvc.value;
        cvcerror=document.getElementById("cverror");
        if( isNaN(cv)){
            cvcerror.innerHTML="Wrong format!"
        }
        else if(cv==""){
            cvcerror.innerHTML="Can't be blank"
        }
        else{
            cvcerror.innerHTML=""
        }



    }
    validatename();
    validatecard();
    validatecvc();
    if(document.getElementById("name").innerHTML=="Jane Appleseed"|| 
    document.getElementById("cn").innerHTML=="0000 0000 0000 0000"||
    document.getElementById("cvc").innerHTML=="000"||(cnum.length>0 && cnum.length<16)){
        return false;
    }
    else{
        return true;
    }
}
submit.addEventListener("click",function(){
    massvalidate();
    if(massvalidate()==false){
        event.preventDefault();
    }
    else{
        event.preventDefault();
        document.querySelector(".form1").style.display="none";
        document.querySelector(".complete").style.display="block";
    }

});