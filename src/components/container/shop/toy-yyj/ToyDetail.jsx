import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { addCart } from '../../../../slices/cartSlice'
import ShopDetailLayout from '../layout-yyj/ShopDetailLayout'


const ProductDetail = () => {

  const param = useParams()

  console.log(param.id, typeof(param.id))


  const navigate = useNavigate()
  const dispatch = useDispatch()

  
  
  const [product, setProduct] = useState([])
  
  useEffect(() => {
    const productURL = `http://localhost:3001/toy`
    
    const productFn = async (id) => {
      try{
        const res = await axios.get(`${productURL}?id=${param.id}`)
        console.log(res+" res")
        if (res.data.length > 0) {
          setProduct(res.data[0])
        }
      } catch (err) {
        alert(err)
      }
    }
    productFn(param)
  }, [])
  
  const addToCart = () => {
    const item = {id: product.id, title: product.title, price:product.price, img: product.img, count:1}
    console.log(item.img)
    dispatch(addCart(item))
    navigate('/cart');
  }
  
  product && console.log(product)
  
  return (
    <ShopDetailLayout
    img={`/images/${product.img}`}
    title={product.title}
    price={product.price}
    onAddToCart={addToCart}>

    </ShopDetailLayout>
  )
}

export default ProductDetail