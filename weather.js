
function remove(){
    var x=document.querySelector(".bottom");
    x.remove();
}
function CtF(element){
    var F=Math.round(element*1.8+32);
    return F;
}
function FtC(element){
    var C=Math.round((element-32)/1.8)
    return C
}

function ChangeCF(element){
    var temperature=document.getElementsByClassName("temp");
    for(var i=0; i<temperature.length; i++) {
        var item=temperature[i];
        if (element.value=="F") {    
        item.innerText=CtF(item.innerText)}
        else{
        item.innerText=FtC(item.innerText)
    } }
}
