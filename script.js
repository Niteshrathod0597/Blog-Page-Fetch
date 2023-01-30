// let http = new XMLHttpRequest();
// http.open('get', 'products.json', true);
// http.send();
// http.onload = function(){
//    if(this.readyState == 4 && this.status == 200){
//       let products = JSON.parse(this.responseText);
//       let output = "";
//       for(let item of products){
//          output += `
           
//             <div class="product">
//                 <div class="first">
//                     <div class="second"><img src="${item.image}" alt="${item.description}"></div>  
//                     <div class="third"><h1>${item.title}</h1><h1>${item.title2}</h1>
//                     </div>
            
//                 </div>
//             </div>
//          `;
//       }
//       document.querySelector(".products").innerHTML = output;
//    }
// }