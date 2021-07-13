function getId(infos) {
  for (let product of infos){
      id = product.idProduct;
  }
  return id;
}

function getProductId() {
  let productsId =[];
  for (var i = 0; i < localStorage.length; i++) {
      let itemName=localStorage.key(i);
    
      const itemsInfos = JSON.parse(localStorage.getItem(`${itemName}`));
      console.log(itemsInfos)

      productsId.push(getId(itemsInfos));
    }
    return productsId;
}

function validate() {
  let firstName = document.getElementById("firstName")
  let lastName = document.getElementById("lastName")
  let mail = document.getElementById("mail")
  let address = document.getElementById("address")
  let city = document.getElementById("city")

  let checkfirstName = firstName.checkValidity()
  let checklastName = lastName.checkValidity()
  let checkmail = mail.checkValidity()
  let checkaddress = address.checkValidity()
  let checkcity = city.checkValidity()

  console.log(checkfirstName, checklastName, checkmail, checkaddress, checkcity)
}


function sendData() {
  validate()
  
  let firstName = document.getElementById("firstName").value
  let lastName = document.getElementById("lastName").value
  let mail = document.getElementById("mail").value
  let address = document.getElementById("address").value
  let city = document.getElementById("city").value

  let idProduct = getProductId();

  console.log (firstName, lastName, idProduct)


  fetch("http://localhost:3000/api/teddies/order", {
    method: "POST",

    body: JSON.stringify({
      "contact": {
          "firstName": firstName,
          "lastName": lastName,
          "email": mail,
          "address": address,
          "city": city
      },
      "products":
        idProduct
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
  }
  })

  .then(response=>response.json())
  .then(json=>console.log(json));
}