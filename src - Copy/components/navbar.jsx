import React,{useState,useEffect} from "react";
import "./Task1.css";




const Task1=()=> {
    const [products,setProducts]=useState([]);
    
    useEffect(()=>{
        productapp();
    },[])

    const productapp= async()=>{
        const response=await fetch('https://dummyjson.com/products?limit=100');
        const jsonData=await response.json();
        
        setProducts(jsonData.products);
        console.log('Products  ==> ',jsonData.products); 
  }
  
  var sorting = (e) =>{
    e.preventDefault();
    console.log(e.target.value);
    if(e.target.value === 'a-z'){
      // alphabetic();
      var alphabetic= products.slice(0); 
  alphabetic.sort(function(a,b) { 
      var x = a.title.toLowerCase(); 
      var y = b.title.toLowerCase(); 
      return x < y ? -1 : x > y ? 1 : 0; 
  }); 
  setProducts(alphabetic);
   console.log('product2==>',alphabetic);
    } else if(e.target.value === 'z-a'){
      var Alphabetic2= products.slice(0); 
  Alphabetic2.sort(function(a,b) { 
      var x = a.title.toLowerCase(); 
      var y = b.title.toLowerCase(); 
      return x > y ? -1 : x < y ? 1 : 0; 
  }); 
  setProducts(Alphabetic2);
   console.log('product3==>',Alphabetic2); 

    } else if(e.target.value === 'l-h'){
      var Ascending= products.slice(0); 
      Ascending.sort(function (a, b) { return a.price - b.price });
       console.log('product4==>',Ascending);
       setProducts(Ascending);
    } else if(e.target.value === 'h-l'){
      var Descending= products.slice(0); 
      Descending.sort(function (a, b) { return b.price - a.price });
       console.log('product5==>',Descending);
       setProducts(Descending);
    } else {
      setProducts(products);
    }
}
  return (
    <>
    <div className="main">
      <div className="head">
      <nav className="navbar">
      <img className="logo" src="https://upload.wikimedia.org/wikipedia/commons/8/80/Brandless_logo.png"></img>
      <ul className="navbarList">
        <li className="navbarItem"><a href="/">Personal Health</a></li>
        <li className="navbarItem"><a href="/">Beauty</a></li>
        <li className="navbarItem"><a href="/">Home</a></li>
        <li className="navbarItem"><a href="/services">Brands</a></li>
        <li className="navbarItem"><a href="/contact">Bundle & Save</a></li>
      </ul>
    </nav>
      </div>
    
    <div className="subMenu">
        <p>Beauty & Personal Care 
        <select onChange={(e)=> sorting(e)}  className="Drop" id="dropdown"> 
        <option value="Featured">Featured</option> 
        <option value="Best Selling">Best Selling</option> 
        <option  value="a-z">Alphabetically: A-Z</option> 
        <option value="z-a">Alphabetically: Z-A</option> 
        <option value="l-h">Price: Low to High</option>
        <option value="h-l">Price: High to Low</option>
        <option value="Date: Old to New">Date: Old to New</option>
        <option value="Date: New to Old">Date: New to OldZ-A</option>
    </select></p>
        
        <hr></hr>
    </div>
    
    
  
  <div className="product-container">
    
        
         {products.map((values, index) => {
            return(
              
               
                <div key={index} className="product-box">
         <img src={values.thumbnail} alt=""></img><br></br>
         <a href="#" className="btn">ADD TO CART</a>
         <h3>{values.title}</h3>
         <p>{"$"+values.price}</p>
          <p>{"Rating: "+values.rating}</p>
        </div>
                
            )
        })}
        
        

    </div>
    
      
      </div>
      
    </>
  );
}

export default Task1;
 