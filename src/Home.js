import React from 'react'
import "./Home.css"
import Product from './Product'

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img className="home__image"
                src="https://i.gadgets360cdn.com/large/amazon_best_tv_march_2020_1585384758649.jpg" 
                alt=""/>
                <div className="home__row">
                    <Product
                     id="23823874"
                     title='The lean startup: How constant Innovation creates radically successful businesses paperback'
                     price={29.99}
                     image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
                     rating={5}
                     />
                     
                    <Product
                    id="49538094"
                    title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
                    price={239.0}
                    rating={4}
                    image="https://images-na.ssl-images-amazon.com/images/I/61r0Y3Tlq9L._AC_SL1500_.jpg"
                    />
                </div>
                <div className="home__row">
                
                    <Product
                    id="4903850"
                    title="Samsung LC49237SDF 49' Curved LED Gaming Monitor"
                    price={199.99}
                    rating={3}
                    image="https://images-na.ssl-images-amazon.com/images/I/81Nq6NJHgmL._AC_SL1500_.jpg"
                    />
                    <Product
                    id="2342341"
                    title="Amazon Echo (3rd generation) | Smart speaker with Alexa, charcoal Fabric"
                    price={98.99}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/61u48FEs0rL._AC_SL1000_.jpg"
                    />
                    <Product
                    id="892387"
                    title="New Apple iPad Pro (12.9-inch, wifi, 128 GB) - Silver (4th Generation)"
                    price={598.99}
                    rating={4}
                    image="https://images-na.ssl-images-amazon.com/images/I/81WhK5%2Bgf2L._AC_SL1500_.jpg"
                    />
                </div>
                <div className="home__row">
                    <Product
                    id="2398434"
                    title="Samsung LC893DJH 49' Curved Gaming Monitor with Super Ultra Wide Dual WQHD 5120 x 1220"
                    price={1094.98}
                    rating={4}
                    image="https://images-na.ssl-images-amazon.com/images/I/71uidmTtOZL._AC_SL1500_.jpg"
                    />

                </div>
            </div>
        </div>
    )
}

export default Home
