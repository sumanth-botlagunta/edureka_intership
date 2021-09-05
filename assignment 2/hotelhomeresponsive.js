function offers(){
    document.getElementById("offers").style.display = "block";
}


function closeoffer(){
    document.getElementById("offers").style.visibility = "hidden";
}



function applycoupon(){
    var a = document.getElementById("coupon").value ;

    if(a == "eduhotel50"){

      text = "coupon applied sucessfully" ;
      document.getElementById("couponout").style.color = "green" ;

    }
    else{

        text = "coupon not applied";
        document.getElementById("couponout").style.color = "red" ;
    }

    document.getElementById("couponout").innerHTML = text;
}

