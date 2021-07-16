function getId (name, infos){
    for (let nounours of infos){
      let idProduct = nounours.idProduct;
      let names = name;
    }
  }
  
  function getIdProduct (infos) {
  for (var i = 0; i < localStorage.length; i++) {
    let itemName=localStorage.key(i);
    //console.log(itemName);
   
    const productId = JSON.parse(localStorage.getItem(`${itemName}`));
    //console.log(itemsInfos);
  
    getId (itemName, productId)
    }
  }
  
  