import React, { useState } from 'react'


function Filters(products=[]) {

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

  return (
    <div>
        <div className="buttons text-center py-5">
  <button
    className="btn btn-outline-dark btn-sm m-2 bg-purple-400 text-white p-2 hover:bg-purple-700"
    onClick={() => sortItems(100)}
  >
    Price Range (Rs. 1 - Rs. 100)
  </button>
  <button
    className="btn btn-outline-dark btn-sm m-2 bg-purple text-white p-2 hover:bg-purple-700"
    onClick={() => sortItems(101)}
  >
    Price Range (Rs. 101 - Rs. 1000)
  </button>
          <button className="btn btn-outline-dark btn-sm m-2 bg-purple-400 text-white p-2 hover:bg-purple-700" onClick={() => filterItem("men's clothing")}>Men's Clothing</button>
          <button className="btn btn-outline-dark btn-sm m-2 bg-purple-400 text-white p-2 hover:bg-purple-700" onClick={() => filterItem("women's clothing")}>
            Women's Clothing
          </button>
          <button className="btn btn-outline-dark btn-sm m-2 bg-purple-400 text-white p-2 hover:bg-purple-700" onClick={() => filterItem("jewelery")}>Jewelery</button>
          <button className="btn btn-outline-dark btn-sm m-2 bg-purple-400 text-white p-2 hover:bg-purple-700" onClick={() => filterItem("electronics")}>Electronics</button>
          <button className="btn btn-outline-dark btn-sm m-2 bg-purple-400 text-white p-2 hover:bg-purple-700" onClick={() => setData(products)}>All</button>
        </div>
    </div>
  )
}

export default Filters