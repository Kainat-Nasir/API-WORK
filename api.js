let allProducts;
let categoryName;
function data() {
    let apiUrl = 'https://dummyjson.com/products';
    fetch(apiUrl)
      .then(response => {
        if (response.ok) {
          return response.json().then(data => {
            displayResponse(data);
          });
        } else {
          console.error('Error:', response.status, response.statusText);
        }
      })
      .catch(error => {
        console.error('Network error:', error);
      });
  };
  function displayResponse(data) {
    categoryName =[]
 
    allProducts = data.products;
    document.getElementById("totalCount").innerHTML = "Total Products: "+allProducts.length;
    for(let i=0; i < data.products.length; i++){
      if (!categoryName.includes(data.products[i].category)){ 
        categoryName.push(data.products[i].category)
        let DropDown = data.products[i].category;
        generateDropdown(DropDown);
      }  
    }
    displayResult("All");
  };
  
    // const responseDiv = document.getElementById('response');
    // responseDiv.innerHTML = JSON.stringify(data, null, 2);
  const element = document.getElementById("containner");
  function displayResult(categoryName) {
    element.innerHTML="";
   let selectedproduct ;
    if(categoryName=="All"){
      selectedproduct= allProducts;
    //  document.getElementById("totalCount").innerHTML = "Total Products: "+selectedproduct.length;


    }
    else{
      selectedproduct=allProducts.filter(  product=>(
       product.category===categoryName ));
      // document.getElementById("totalCount").innerHTML = "Total Products: "+selectedproduct.length;

      }
      document.getElementById("totalCount").innerHTML = "Total Products: "+selectedproduct.length;
    // generateDropdown();
    // document.getElementById('response').innerText = "Result: " + JSON.stringify(arrayResult);
    selectedproduct.forEach(product=>{
const price = document.createElement("p");
let text = document.createTextNode(product.price);
price.appendChild(text);

const div = document.createElement("div");
div.appendChild(price);

let productname = document.createElement("h3");
let text2 = document.createTextNode(product.title);
productname.appendChild(text2);
productname.style.textWrap="no-wrap";
productname.style.fontSize="14px";

let div2 = document.createElement("div");
div2.appendChild(productname);


let img = document.createElement('img');
img.src = product.images[0];
img.style.height="300px";
img.style.width="100%";

let div3 = document.createElement("div");
div3.appendChild(img);


const product1 = document.createElement("div");
product1.appendChild(div3);
product1.appendChild(div2);
product1.appendChild(div);
product1.classList.add("product");

element.appendChild(product1);
  });


   }


  //  function generateDropdown(){
  //     categoryName.forEach(DropDown=>{
  //       console.log('categoryName');
  //       let option1 = document.createElement("option");
  //       option1.value=DropDown;
  //       let option1text = document.createTextNode(DropDown);
  //       option1.appendChild(option1text);
  //       const select = document.getElementById("select");
  //       select.appendChild(option1);
  //     });
  //  }
  function generateDropdown(DropDown){
      console.log('categoryName');
      let option1 = document.createElement("option");
      option1.value=DropDown;
      let option1text = document.createTextNode(DropDown);
      option1.appendChild(option1text);
      const select = document.getElementById("select");
      select.appendChild(option1);
 }

  function DisplaySelectedValue(){
    let selectedCategory= document.getElementById("select").value;
    displayResult(selectedCategory);

    // if(opt_selection=="fragrances")
    //   {
    //      fragrances();
    //   }
    // if(opt_selection=="groceries")
    //   {
    //     groceries();

    //   }

      
  }
  // function fragrances(){ 
  //   allProducts =allProducts.filter(  product=>(
  //   product.category==="fragrances" ));
  //   console.log((allProducts));
   

  // }
  // function groceries(){ 
  //   allProducts =allProducts.filter(  product=>(
  //   product.category==="groceries" ));
  //   console.log((allProducts));
   

  // }
 // displayResponse();
  
  