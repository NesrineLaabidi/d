

var like= document.getElementsByClassName('fa-solid fa-heart');
for(let el of like){
    el.addEventListener("click",function(){

        if(el.style.color=== "white") {el.style.color="red"}
        else {el.style.color="white"}
    })
}

var del= Array.from(document.getElementsByClassName('js-execute-cart-action product-list__product-actions--link'))

for (let el of del){
    el.addEventListener("click",function(){
        var r = confirm("Are you sure to delete this item?");
        if (r == true) {
        const parent = el.closest(".product-list__row");
        while (parent.firstChild) {
            parent.firstChild.firstChild.firstChild.firstChild.remove()
        };

    }
});
}