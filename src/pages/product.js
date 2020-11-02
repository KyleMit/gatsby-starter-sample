import React from "react"
import Header from "../components/header"
import { Link, Router } from '@reach/router';
import products from "../data/products.json"

export default function Product() {
  return (
    <>
        <Header headerText="Product" />
        <div style={{ color: `teal` }}>
            <p>View Products</p>
        </div>
        <Router basepath="/product">
          <ProductList path="/" />
          <ProductDetail path="/:productId" />
        </Router>
    </>
  )
}

function ProductList() {
    return (
        <>
        <p>All Products</p>
        <ul>
            {products.map(({id, name}) => {
                return <li><Link to={`/product/${id}`}>{name}</Link></li>
            })}
        </ul>
        </>
    )
}

function ProductDetail({productId}) {
    let product = products.find(p => p.id = productId)
    return (
        <p>You selected product #{productId} - {product.name}</p>
    )
}

