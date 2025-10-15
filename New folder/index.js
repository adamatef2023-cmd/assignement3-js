

 var nameInput = document.getElementById('name')
  var urlInput = document.getElementById('url')
  var contant = document.getElementById('tableContent')
  var message = document.getElementById('message')

var productList=[];

  function addProduct (){

    if(
      validateForm(nameInput) &&
         validateForm(urlInput) 
   ) {
    
   var product= {
      name:nameInput.value,
      url:urlInput.value,

   }
   
   productList.push(product);
   console.log(productList)

   clearForm();
   displayProduct(productList);
  
  }
  else{ 
   message.classList.remove('d-none');
  }
}
  
  function clearForm() { 


nameInput.value = null;
   
   urlInput.value = null;
}


function displayProduct(product) {
   cartoona="";

  for(var i=0; i < product.length; i++ ) {

   cartoona += `
              
                <thead>
            <tr><th class="text-capitalize">`+[i+1]+`</th>
            <th class="text-capitalize">`+product[i].name+`</th>
            <th class="text-capitalize"> <button onclick="visitProduct(${i})" class="btn btn-warning w-100 btn-sm mb-2">visit</button></th>
            <th class="text-capitalize"> <button onclick="delateProduct(${i})" class="btn btn-danger w-100 btn-sm mb-2">delate</button></th>
          </tr></thead>
               `
  }
 contant.innerHTML= cartoona

}

function validateForm(element){

var regex = {
   url: /^[A-Z]\w{2,10}[\s-]?\w{0,10}$/,
  
   
    name : /^.{4,100}$/,
};
console.log(regex[element.id].test(element.value))


{if (regex[element.id].test(element.value))  {

   element.classList.add('is-valid');
    element.classList.remove('is-invalid');
    return true;
   
}else{

    element.classList.add('is-invalid');
    element.classList.remove('is-valid');
    return false;
   
}}

}


function delateProduct(delateIndex) {

   productList.splice(delateIndex , 1);
   localStorage.setItem('product', JSON.stringify(productList));
  
   displayProduct(productList);
   console.log(productList);

}

function visitProduct(visitIndex) {
 
   window.open('http://google.com')
}

function exiteMessage(exiteIndex) {
 window.close(exiteIndex);

   displayProduct(productList);
   console.log(productList);

}