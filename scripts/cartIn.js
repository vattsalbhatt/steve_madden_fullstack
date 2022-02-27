    var CheckOutData=document.querySelector("#Check-Out-Data");
    let checkOutTotal=document.querySelector("#total");
    var cartTotal=document.querySelector("#totalCartItem");
    let discountButton=document.querySelector("#discountButton");
    let DiscountPrice=document.querySelector("#discountPrice");
    var CheckOutButton=document.querySelector("#CheckOutButton");
    var total;
    // localStorage.setItem("Items",JSON.stringify(arr));
    let user=JSON.parse(localStorage.getItem("user"));
    async function findCart() {
        try {
          let res = await fetch(`https://steve-madden.herokuapp.com/cartsdata/${user._id}`);
          // let res = await fetch("http://localhost:7896/products");
    
          data = await res.json();
          // getAll(data);
          console.log(data);
          var arr2=JSON.parse(localStorage.getItem("cartitems"));
          arr2=[];
          localStorage.setItem("cartitems",JSON.stringify(arr2));
          localStorage.setItem("cartitems",JSON.stringify(data)); 
          var arr2=JSON.parse(localStorage.getItem("cartitems"));
        //   console.log(arr2);
    
          appendData(data);
          console.log(data);
        } catch (e) {
          console.log("e: " + e);
        }
      }
      findCart();
    var arr2=JSON.parse(localStorage.getItem("cartitems"));
    console.log(arr2);
    if(arr2.length>0){
        appendData(arr2);
    }else{
        emptyCheckOut();
    } 

    function emptyCheckOut(){
        CheckOutData.innerHTML=null;
        var div=document.createElement("div");
        div.id="emptyDiv"
        var p=document.createElement("p");
        p.innerHTML="Phew ! Your Cart is Empty"
        p.id="emptyPhew"
        var img=document.createElement("img");
        img.id="emptyimg"
        img.src="https://www.stevemadden.in/_nuxt/img/empty-cart.5953ff7.png";
        div.append(p,img);

        CheckOutData.append(div);
    }

    function appendData(arr2){
        cartTotal.innerHTML= arr2.length;
        if(arr2.length==0){
            checkOutTotal.innerHTML=0;
            DiscountPrice.innerHTML=0;
            emptyCheckOut();
            return;
        }
        CheckOutData.innerHTML=null;
        total=0;
        arr2.forEach((element,index) =>{
         let div=document.createElement("div");
         div.id="alldatadiv"
         let imgdiv=document.createElement("div")
         imgdiv.id="imgdiv";
         let img=document.createElement("img")
         img.src=element.url;
         imgdiv.append(img);
         img.id="cart-image"

         let dataDiv=document.createElement("div");
         let productName=document.createElement("h4");
         productName.innerHTML=element.name;
         productName.id="productName"
         let Color=document.createElement("p");
         Color.innerHTML="Color : "+element.color;
         let Size=document.createElement("p");
         Size.innerHTML="Size : "+element.size;
         let PreOrderedItem=document.createElement("p");
         PreOrderedItem.innerHTML="Pre-Orderd : "+"2";
         dataDiv.id="dataDiv"
         dataDiv.append(productName,Color,Size,PreOrderedItem)

         let addDiv=document.createElement("div");
         let sub=document.createElement("p");
         sub.innerHTML="-";
         sub.id="sub";
         sub.addEventListener("click",()=>{
             if(element.quantity>0){
                (element.quantity=element.quantity-1);
                localStorage.setItem("Items",JSON.stringify(arr2))
                console.log(element.quantity)
                 subtractprice(element.p);
             }else{
                 return;
             }
         })
          quantity=document.createElement("p");
         quantity.innerHTML=element.quantity;
         quantity.id="quantity";
         let add=document.createElement("p");
         add.innerHTML="+";
         add.id="add"
         addDiv.id="addDiv";
         add.addEventListener("click",()=>{
            (element.quantity=element.quantity+1);
            localStorage.setItem("Items",JSON.stringify(arr2))
             addMorePrice(element.p);
         })
         addDiv.append(sub,quantity,add)
         
         let deleteItem=document.createElement("p");
         deleteItem.innerHTML=`<i class="far fa-trash-alt fa-2x"></i>`
         deleteItem.id="deleteItem"
         deleteItem.addEventListener("click",()=>{
             deleteItemFunction(element._id);
         })

        let price=document.createElement("h2");
        price.innerHTML="₹"+element.p;
        price.id="check-out-price"

        let mrpprice=document.createElement("h2");
        mrpprice.innerHTML="₹"+(element.p+(element.p/100)*10);
        mrpprice.style.textDecoration="line-through";
        mrpprice.id="check-out-mrpprice"
        
         let updatedPrice=(+element.quantity)*element.p;
         console.log(updatedPrice);
         console.log(element.quantity);

         total=total+updatedPrice;
        //  console.log(total);
         checkOutTotal.innerHTML=total;
         DiscountPrice.innerHTML=total;
        div.append(imgdiv,dataDiv,addDiv,deleteItem,price,mrpprice)

         CheckOutData.append(div)


        })

    }

    discountButton.addEventListener("click",function(){
            let Discount=document.querySelector("#discount").value;
            if(Discount==="Masai30"){
             total=(total/100)*70;
             DiscountPrice.innerHTML=total;
             alert("Yeah ! Cupon Applied Successfully");
            }else{
                alert("Please Enter Valid Cupon")
            }
         })

        async function deleteItemFunction(deleteID){
            let collect = await fetch(`https://steve-madden.herokuapp.com/cartsdata/${deleteID}`, {
           method: "DELETE",
           headers: {
             "Content-Type": "application/json",
          }, 
          
       });
          window.location.href="CartIN.html";

        }


         function  addMorePrice(price2){
              appendData(arr2);
              DiscountPrice.innerHTML=total;
              checkOutTotal.innerHTML=total;
         }

         function subtractprice(price2){
            appendData(arr2);
             DiscountPrice.innerHTML=total;
             checkOutTotal.innerHTML=total;
         }
 
         CheckOutButton.addEventListener("click",()=>{
             window.location.href="checkout.html"
         })