import React from 'react';
import {Grid} from '@material-ui/core';

import Product from "./Product/Product";

const products = [
    {id: 1, name: "shoes", description: "running shoes", price: "₹5000"},
    {id: 2, name: "Macbook Pro", description: "Apple Macbook", price: "₹120000"},
]

const Products = () => {
    return (
        <div>
            <main>
                <Grid container justify = "center" spacing = {4} >
                    {products.map((product) => (
                        <Grid item key = {product.id} xs={12} sm={6} md={4} lg={3}>
                            <Product product = {product}/>
                        </Grid>
                    ))}
                </Grid>
            </main>
        </div>
    )
}

export default Products;
