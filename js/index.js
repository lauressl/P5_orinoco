function printProducts() {
    fetch('http://localhost:3000/api/teddies')
    .then((response) => response.json())
    .then((nounourses) => {
        for (let elem of nounourses) {
            nounours = elem.name;
            nounoursPrice = (elem.price/200);
            nounoursId= elem._id;
            nounoursImg = elem.imageUrl;

            let div = document.getElementById("produit");
            let div2 = document.createElement("div")
            div2.setAttribute("class","thumb")
            let div3 = document.createElement("div")
            div3.setAttribute("class","para_btn")
            let img = document.createElement("img");
            img.src = nounoursImg;
            img.setAttribute("class","thumb_img")
            let para = document.createElement("p");
            let para2 = document.createElement("p");
            let btn= document.createElement("button");
            let txtBtn= document.createTextNode("Voir produit");

            btn.onclick = function clic() {
                location.href = "produits.html?product="+ elem._id;
            }

            div.appendChild(div2);
            div2.appendChild(img);
            div2.appendChild(div3);
            div3.appendChild(para);
            div3.appendChild(para2);
            para.append(nounours);
            para2.append(nounoursPrice+ "€");
            btn.appendChild(txtBtn);
            div3.appendChild(btn);
        }
    })
}
printProducts()