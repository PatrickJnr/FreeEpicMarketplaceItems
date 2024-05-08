(function(){
    var e = document.querySelectorAll(".btn.add-btn.add-cart-btn.shift-left"),
        t = 0,
        n = setInterval(function(){
            if(t < e.length){
                e[t].click();
                t++;
            } else {
                clearInterval(n);
            }
        }, 500);
})();
