/*
var feth = await fetch("https://docs.easy.gg/scripting/types/itemtype", {
  "referrer": "https://docs.easy.gg/scripting/types/itemtype",
  "method": "GET",
});
var text = await feth.text()
var list = text.split("4886f644501043e4b52c497feaaa3474")[0].split('class="r-crgep1 r-13ll0g2">')
var total = ""
for(x in list){
    if(x > 0){
    total += '"'+list[x].split("</span>")[0].split("&quot;")[1]+'",'
    }
}

console.log("["+total+"]")

*/
