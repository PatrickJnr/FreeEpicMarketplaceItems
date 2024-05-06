javascript: (function() {
    var e = document.querySelectorAll(".btn.add-btn.add-cart-btn.shift-left"),
        t = 0,
        n = setInterval(function() {
            if (t < e.length) {
                var s = e[t].closest(".asset").querySelector(".asset-price");
                "Free" === (s ? s.innerText.trim() : % 22 % 22) && e[t].click(), t++
            } else % 20 clearInterval(n)
        }, 500)
})();
