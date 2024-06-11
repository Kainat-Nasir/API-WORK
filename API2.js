let allProducts;
let user_id; //user id 
function data() {
    let apiUrl = 'https://jsonplaceholder.typicode.com/todos';
    fetch(apiUrl)
      .then(response => {
        if (response.ok) {
          return response.json().then(data => {
            allProducts=data;
            displayAll("All","All");
            displayResponse(data);
      
         //   console.log(allProducts);
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
    user_id =[]
 
   
    // document.getElementById("totalCount").innerHTML = "Total Products: "+allProducts.length;
    data.forEach(items => {
      if(! user_id.includes(items.userId)){
      user_id.push(items.userId)
      let DropDown = items.userId;
      console.log(DropDown);

      generateDropdown(DropDown);}
      
    });
    // for(let i=0; i < data.length; i++){
    //   if (!user_id.includes(data[i].userId)){ 
    //     user_id.push(data[i].userId)
    //     let DropDown = data[i].userId;
    //     console.log(DropDown);

    //     generateDropdown(DropDown);
    //   }  

    // }
   
  };
  
  function generateDropdown(DropDown){
    
    let option1 = document.createElement("option");
    option1.value=DropDown;
    let option1text = document.createTextNode(DropDown);
    option1.appendChild(option1text);
    const select = document.getElementById("select");
    select.appendChild(option1);
  
   }
  
const element = document.getElementById("containner");

function displayAll(user_id,completed){
  
  element.innerHTML="";

  let selectedproduct = allProducts;
  
  if(user_id != "All"){
    selectedproduct = selectedproduct.filter(product=>(product.userId == user_id));
  }

  if(completed != "All"){
    selectedproduct = selectedproduct.filter(product=>(product.completed == completed));
  }
  // if(user_id=="All"&& completed=="All"){
   
  //   selectedproduct= allProducts;
  // //  document.getElementById("totalCount").innerHTML = "Total Products: "+selectedproduct.length;


  // }
  // else if(user_id!="All"&& completed=="All"){
  //   selectedproduct=allProducts.filter(product=>(
  //     product.userId==user_id ));
  //     console.log(selectedproduct);
  // }
  // else if(user_id=="All"&& completed!="All"){
  //   selectedproduct=allProducts.filter(product=>(
  //     product.completed==completed ));
  //     console.log(selectedproduct);
  // }
  // else{
  //   selectedproduct=allProducts.filter(product=>(
  //    product.userId==user_id && product.completed==completed));
     
  //   // document.getElementById("totalCount").innerHTML = "Total Products: "+selectedproduct.length;

  //   }

    // document.getElementById("totalCount").innerHTML = "Total Products: "+selectedproduct.length;
 
    selectedproduct.forEach(product=>{
    const price = document.createElement("p");
    let text = document.createTextNode(product.userId);
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
    
    
    let completed = document.createElement('p');
    let text3 = document.createTextNode(product.completed);
    completed.appendChild(text3);


    
    let div3 = document.createElement("div");
    div3.appendChild(completed);
    
    
    const product1 = document.createElement("div");
    product1.appendChild(div2);
    product1.appendChild(div3);
    
    product1.appendChild(div);
    product1.classList.add("product");
    
    element.appendChild(product1);
      });
    
    
       }



       function DisplaySelectedValue(){
        let selectedCategory= document.getElementById("select").value;
        
        console.log(selectedCategory);

        let selectedt_f = document.getElementById("select2").value;
        
        console.log(selectedt_f);
        displayAll(selectedCategory,selectedt_f);

      }
      
     