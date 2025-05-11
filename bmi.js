let a,b,c;

function run()
{
    
    a=parseInt(document.getElementById("weight").value);
    b=parseInt(document.getElementById("height").value);
    let b1=b*0.3048;
    c=a/(b1*b1);
    if(a==""|| b=="")
    {
        alert("please enter the data");
         return false;
    }
    else if(isNaN(a))
    {
        alert("please enter valid data");
        return false;
    }
    else
    {
        localStorage.setItem("w",a);
        localStorage.setItem("h",b);
        localStorage.setItem("b",c);
        window.location.href="pg2.html";
        return true;  
    
    }
  
}


  function cal()
  {

    let c = parseFloat(localStorage.getItem("b"));
    if(c<=18.5)
    {
       console.log("underweight"); 
       document.getElementById("data1").value=localStorage.getItem("w")+" kg";
       document.getElementById("data2").value=localStorage.getItem("h") +"feet";
       document.getElementById("data3").value=c;
       document.getElementById("data4").value="underweight";
       
    }
    else if(c>18.5&&c<=24.9)
    {
        document.getElementById("data1").value=localStorage.getItem("w")+" kg";
        document.getElementById("data2").value=localStorage.getItem("h") +"feet";
        document.getElementById("data3").value=c;
        document.getElementById("data4").value="normal";
       
     }
    else if(c>25&&c<=29.9)
    {
        document.getElementById("data1").value=localStorage.getItem("w")+" kg";
        document.getElementById("data2").value=localStorage.getItem("h")+"feet";
        document.getElementById("data3").value=c;
        document.getElementById("data4").value="overweight";
    }
    else if(c>30&&c<=34.9)
    {
        document.getElementById("data1").value=localStorage.getItem("w") +" kg";
        document.getElementById("data2").value=localStorage.getItem("h")+"feet";
        document.getElementById("data3").value=c;
        document.getElementById("data4").value="obesity";

         }
    else if(c>=35)
    {
        document.getElementById("data1").value=localStorage.getItem("w")+" kg";
        document.getElementById("data2").value=localStorage.getItem("h")+"feet";
        document.getElementById("data3").value=c;
        document.getElementById("data4").value="severe obesity";

     
    }
        
    
}