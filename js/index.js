function afficherLeToutSousFormeDeDivisions() {
    fetch('http://localhost:3000/api/teddies')
    .then((response) => response.json())
    .then((nounourses) => {
        for (let elem of nounourses) {
            nounours = elem.name;
            nounoursPrice = (elem.price/200);
            nounoursId= elem._id
            let div = document.getElementById("produit");
            let div2 = document.createElement("div")
            div.appendChild(div2);
            let img = document.createElement("img");
            nounoursImg = elem.imageUrl;
            img.src = nounoursImg;
            div2.appendChild(img);
            let para = document.createElement("p");
            div2.appendChild(para);
            para.append(nounours + " : " + nounoursPrice+ "€");
            let btn= document.createElement("button");
            btn.onclick = function clic() {
                location.href = "produits.html?product="+ elem._id;
            }
            let txtBtn= document.createTextNode("Voir produit");
            btn.appendChild(txtBtn);
            div2.appendChild(btn);
        }
    })
}
afficherLeToutSousFormeDeDivisions()
