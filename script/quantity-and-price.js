const minus = document.getElementById("-");
const plus = document.getElementById("+");
const itemqty = document.getElementById("item-qty");
let item = 1;

itemqty.innerHTML = `${item}`;

minus.addEventListener("click", ()=>{
    if(item === 1){
        return;
    }
    item = item-1;
    itemqty.innerHTML = `${item}`;
});

plus.addEventListener("click", ()=>{
    if(item === 100){
        return;
    }
    item = item+1;
    itemqty.innerHTML = `${item}`;
});