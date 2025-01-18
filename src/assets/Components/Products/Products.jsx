import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

function Products( {products=[]}){
  const [data, setData] = useState(products);

  const filterItem = (cat) => {
    if (cat === 'category') {
      setData(products);
    } else {
      const updatedList = products.filter((item) => {
        return item.category === cat;
      });
      setData(updatedList);
    }
  };

  const sortItems = (cart) => {
    if(cart === 100){
      const updatedL = products.filter((item) =>{
        console.log(item.price)
        return item.price <= cart;
      })
      setData(updatedL)
    }
    else if(cart === 101){
      const updatedL = products.filter((item) =>{
        console.log(item.price)
        return item.price > cart;
      })
      setData(updatedL)
    }
    }

   /*const [data, setData] = useState(products);
  
    const filterItem = (cat) => {
      if (cat === 'category') {
        // If 'All' is clicked, reset to the original data
        setData(products);
      } else {
        // Filter the data based on the category
        const updatedList = products.filter((item) => {
          return item.category === cat;
        });
        setData(updatedList);
      }
    }; 
/*
  const [data, setData] = useState(products);
  console.log(data, 'filter')
  




  const filterItem = (cat) => {
    const updatedList = data.filter((item) =>{
      return item.category === cat;
    });
    setData(updatedList);
  }*/
 /* const sortItems = (sortType) => {
    let updatedList = [...data]; // Create a copy of the data
  
    if (sortType === 'lowToHigh') {
      updatedList.sort((a, b) => {
        // Remove the currency symbol and convert to a floating-point number
        const priceA = parseFloat(a.price.replace('$', ''));
        const priceB = parseFloat(b.price.replace('$', ''));
        return priceA - priceB;
      });
    } else if (sortType === 'highToLow') {
      updatedList.sort((a, b) => {
        // Remove the currency symbol and convert to a floating-point number
        const priceA = parseFloat(a.price.replace('$', ''));
        const priceB = parseFloat(b.price.replace('$', ''));
        return priceB - priceA;
      });
    }
  
    setData(updatedList);
  };*/
  


  return (<>
  <div className="buttons text-center py-5">
  <button
    className="btn btn-outline-dark btn-sm m-2 bg-purple-400 text-white p-2 hover:bg-purple-700 rounded-md"
    onClick={() => sortItems(100)}
  >
    Price Range (Rs. 1 - Rs. 100)
  </button>
  <button
    className="btn btn-outline-dark btn-sm m-2 bg-purple-400 text-white p-2 hover:bg-purple-700 rounded-md"
    onClick={() => sortItems(101)}
  >
    Price Range (Rs. 101 - Rs. 1000)
  </button>
          <button className="btn btn-outline-dark btn-sm m-2 bg-purple-400 text-white p-2 hover:bg-purple-700 rounded-md" onClick={() => filterItem("men's clothing")}>Men's Clothing</button>
          <button className="btn btn-outline-dark btn-sm m-2 bg-purple-400 text-white p-2 hover:bg-purple-700 rounded-md" onClick={() => filterItem("women's clothing")}>
            Women's Clothing
          </button>
          <button className="btn btn-outline-dark btn-sm m-2 bg-purple-400 text-white p-2 hover:bg-purple-700 rounded-md" onClick={() => filterItem("jewelery")}>Jewelery</button>
          <button className="btn btn-outline-dark btn-sm m-2 bg-purple-400 text-white p-2 hover:bg-purple-700 rounded-md" onClick={() => filterItem("electronics")}>Electronics</button>
          <button className="btn btn-outline-dark btn-sm m-2 bg-purple-400 text-white p-2 hover:bg-purple-700 rounded-md" onClick={() => setData(products)}>All</button>
        </div>

        <section className="text-purple-600 body-font">
  <div className="container px-5 py-[50px] mx-auto">
    <div className="flex flex-wrap gap-5 justify-center w-full mb-20">
    {
      data.map((product) => {
        console.log(product, 'product')
        const { id, title, price, description, category, image } = product;
        return(
          <Link to={`/products/${id}`} className="lg:w-1/4 md:w-1/2 p-4 w-full cursor-pointer mb-4 border border-purple-200 rounded-md">
        <a className="block relative h-48 rounded overflow-hidden">
          <img alt={title} className="object-contain object-center w-full h-full block" src={image} />
        </a>
        <div className="mt-4">
          <h3 className="text-purple-500 text-xs tracking-widest title-font mb-1 uppercase">{category}</h3>
          <h2 className="text-purple-900  title-font text-lg  font-medium max-h-10">{title.split(' ').slice(0, 4).join(' ')}</h2>
          <div>
            <p className=" mt-2 leading-relaxed text-purple-900  text-sm">{description.split(' ').slice(0, 10).join(' ')}</p>
          </div>
          <div className='mt-4 flex-col align-middle '>
          <p className="mb-2">₹{price}</p>
          <button className=" ml-auto text-white bg-purple-400 border-0 py-1 px-1 focus:outline-none hover:bg-white hover:text-purple-700 rounded" onClick={() => handleCart(product)}>Add to Cart</button>
          </div>
        </div>
      </Link>
        )
      })
    }
    </div>
  </div>
</section>
</>
  )
}

export default Products;