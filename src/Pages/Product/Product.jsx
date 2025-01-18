import React, { useState, useEffect  } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom';
import { FaStar, FaInstagram , FaChevronDown, FaHeart } from "react-icons/fa";
import { CiStar } from "react-icons/ci";
import { FaFacebookF , FaTwitter } from "react-icons/fa6";


function Product() {
  const { id } = useParams();
  const [product, setProduct] = useState({})
  console.log(id, 'id', product)

  useEffect(() => {
    const fetchProduct = async () => {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`)
        const data = await response.json()
        console.log(data)
        setProduct(data)
    }
    fetchProduct()
},[])

const handleCart = (product) => {
  console.log(Product)
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  const isProductExist = cart.find(item => item.id === product.id)
  if(isProductExist){
    const updateCart = cart.map(item => {
      if(item.id === product.id){
        return{
          ...item,
          quantity: item.quantity + 1
        }
      }
      return item
    })
    localStorage.setItem('cart', JSON.stringify(updateCart))
  }
  else{
    localStorage.setItem('cart', JSON.stringify([...cart, {...product, quantity: 1}]))
  }
  alert('Added to Cart')

}

if(!Object.keys(product).length > 0) return <div>Product Not Found</div>

  return (
    <>
        <section className="text-purple-600 body-font overflow-hidden">
  <div className="container px-5 py-24 mx-auto">
    <div className="lg:w-4/5 mx-auto flex flex-wrap">
      <img alt={product?.title} className="lg:w-1/2 w-full lg:h-auto h-64 max-h-[400px] object-contain object-center rounded" src={product?.image} />
      <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
        <h2 className="text-sm title-font text-purple-500 tracking-widest uppercase">{product?.category}</h2>
        <h1 className="text-purple-900 text-3xl title-font font-medium mb-1">{product?.title}</h1>
        <div className="flex mb-4">
          <span className="flex items-center">
            <FaStar className='text-yellow-400' />
            <FaStar className='text-yellow-400' />
            <FaStar className='text-yellow-400' />
            <FaStar className='text-yellow-400' />
            <CiStar className='text-yellow-400 text-xl' />
          
            <span className="text-purple-600 ml-3">4 Reviews</span>
          </span>
          <span className="flex ml-3 pl-3 py-2 border-l-2 border-purple-200 space-x-2 ">
            <a className="text-purple-500">
            <FaFacebookF />
            </a>
            <a className="text-purple-500">
            <FaTwitter />
            </a>
            <a className="text-purple-500">
            <FaInstagram />
            </a>
          </span>
        </div>
        <p className="leading-relaxed">{product?.description}</p>
        <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
          <div className="flex">
            <span className="mr-3">Color</span>
            <button className="border-2 border-purple-300 rounded-full w-6 h-6 focus:outline-none"></button>
            <button className="border-2 border-purple-300 ml-1 bg-gray-700 rounded-full w-6 h-6 focus:outline-none"></button>
            <button className="border-2 border-purple-300 ml-1 bg-indigo-500 rounded-full w-6 h-6 focus:outline-none"></button>
          </div>
          <div className="flex ml-6 items-center">
            <span className="mr-3">Size</span>
            <div className="relative">
              <select className="rounded border appearance-none border-purple-300 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base pl-3 pr-10">
                <option>SM</option>
                <option>M</option>
                <option>L</option>
                <option>XL</option>
              </select>
              <span className="absolute right-0 top-0 h-full w-10 text-center text-purple-600 pointer-events-none flex items-center justify-center">
              <FaChevronDown className='text-sm' />
              </span>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <span className="title-font font-medium text-2xl text-purple-900">₹{product?.price}</span>
          <div className=' flex'>
          <Link to={'/cart'} className="flex ml-auto text-white bg-purple-500 border-0 py-2 px-6 focus:outline-none hover:bg-white hover:text-purple-900 rounded" onClick={() => handleCart(product)}>Add to Cart</Link> 
          </div>
          <Link to={'/cart'} className="rounded-full w-10 h-10 bg-purple-200 p-0 border-0 inline-flex items-center justify-center text-purple-500 ml-4">
          <FaHeart className='text-xl' />
          </Link>
        </div>
      </div>
    </div>
  </div>
</section>
    </>
  )
}

export default Product