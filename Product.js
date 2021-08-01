// add components folder, and Product.js
// in line 

import React from 'react';
import Rating from './Rating';

//line 15,`/product/${product._id}`: is ` the one next to 1,  not '

export default function Product(props){

    const{product} = props;

    return( <div key={product._id} className="card">

                <a href={`/product/${product._id}`}>                
                <img className="medium" src={product.image} alt={product.name}/></a>
                    <div className="card-body">
                    <a href={`/product/${product._id}`}>
                            <h2>{product.name}</h2>
                        </a>
                        <Rating rating={product.rating} numReviews={product.numReviews}></Rating>
                        <div className="price">
                        ${product.price}
                        </div>
                    </div> 
            </div>
        );
}
