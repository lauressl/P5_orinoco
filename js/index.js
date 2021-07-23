//Create function to make each teddy thum on land page
function printProducts() {
    //Request from API
    fetch('http://localhost:3000/api/teddies')
    //Convert API response into JSON
    .then((response) => response.json())
    //nounourses = teddy's informations from API
    .then((nounourses) => {
        //get chosen elems from nounourses
        for (let elem of nounourses) {
            nounours = elem.name;
            nounoursPrice = (elem.price/200);
            nounoursId= elem._id;
            nounoursImg = elem.imageUrl;
            
            //**Create html structure**//
            //Get container from html page
            let div = document.getElementById("produit");

            //Product's thumb
            let div2 = document.createElement("div")
            div2.setAttribute("class","thumb")

            //Container for thumb's txt and button elements
            let div3 = document.createElement("div")
            div3.setAttribute("class","para_btn")

            //Define img
            let img = document.createElement("img");
            img.src = nounoursImg;
            img.setAttribute("class","thumb_img")

            //Paragraphs for name and price
            let para = document.createElement("p");
            let para2 = document.createElement("p");
            let btn= document.createElement("button");
            let txtBtn= document.createTextNode("Voir produit");

            //Define onclick button's effect
            btn.onclick = function clic() {
                location.href = "produits.html?product="+ elem._id;
            }

            //Fill HTML structure with chosen informations
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
    .catch(error => {
        console.log("Une erreur s'est produite dans l'affichage des éléments: " +error)
    })
}
printProducts()