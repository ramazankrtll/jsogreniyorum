function sepeteEkle(){
	var urun = document.getElementById("urunText").value;
	var text = document.createTextNode(urun);
	var p = document.createElement("p");
	p.appendChild(text);
	var btn = document.createElement("BUTTON");   // Create a <button> element
	btn.innerHTML = "X";        
	var sepet = document.getElementById("sepet");
	btn.style.marginLeft = "10px";
	btn.id = "deletePrd";
	btn.onclick = function(){sepettenSil(p)};
	p.appendChild(btn);
	sepet.appendChild(p);
}
function sepettenSil(p){
	var sepet = document.getElementById("sepet");
	sepet.removeChild(p);
}