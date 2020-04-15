/*
TODO: Bitirme kontrolunu ekle
 */
var kelimeler = [
    "deneme",
];
var adim = 1;
var harfler = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// randam bir kelime sectir...
var kelime = kelimeler[0];
kelime = kelime.split('');
for (var i in kelime) {
    var node = document.createElement("div");
    node.className = "kelime";
    node.textContent = "?";
    document.querySelector(".kelime_alani").appendChild(node);
}
function tiklandimi(e) {
    var harf = e.target.innerText;
    var buldun = false;
    for (var i in kelime) {
        if (kelime[i] === harf) {
            document.querySelectorAll(".kelime_alani .kelime")[i].innerText = harf;
            buldun = true;
        }
    }
    if (!buldun) {
        document.querySelector(".box").classList.remove("step"+adim);
        adim++;
        if (adim === 10) {
            alert("bitti");
            return;
        }
        document.querySelector(".box").classList.add("step"+adim);
    }
    // bitirme kontrolu buraya ekle
}
for (var i in harfler) {
    var node = document.createElement("div");
    node.className = "kelime";
    node.textContent = harfler[i];
    node.onclick = tiklandimi;
    document.querySelector(".harfler_alani").appendChild(node);
}