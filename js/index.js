function signup()
{
    var x = document.getElementById('login');
    x.style.display="none";
    var z = document.getElementById('signup');
    z.style.display ="block";
}


function login()
{
    var y = document.getElementById('signup');
    y.style.display = "none";
    var v = document.getElementById('login');
    v.style.display ="block";
}




//Script for menu

function total(){
 
  var sum = 0;
    for(i=1; i<9; i++)
    {
    
            var a = document.getElementById(i).value;
            
        if(a!= "")
            {
                sum = sum + parseInt(a);
             
            } 
    }
        
    sum = sum*500;
    var totalheader = document.getElementById("total");
    totalheader.innerHTML = `Your total is: $${sum}`;
    
}


