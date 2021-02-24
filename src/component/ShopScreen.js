import React from 'react';
import '../App.css';
import shop_landingpage from '../asset/img/shop_landingpage.png'
import cakeData from './fooddata.json'
import cake from '../asset/img/bluevelvetnutscake.png'

function Shop() {
    return (
        <div className="shop-body">
            <div className="shop-landingpage">
                <img src={shop_landingpage} />
                <p>Find your flavor</p>
            </div>

            <div className="shopgoods">

                <div className="cupmap">

                    {cakeData.map((cakeDetail) => {
                        
                        return (
                            <div className="shop-card">
                                <div className="shop-cardcontent">
                                <img className="shop-cakeimg" src={require(`../asset/img/${cakeDetail.imgname}.png`)} />
                                <p className="shop-cakename">{cakeDetail.name}</p>
                                <p className="shop-cakecontent">{cakeDetail.content}</p>
                                <p className="shop-cakeprice">NT.{cakeDetail.price}</p>
                                </div>
                                <div className="shop-cardhover">
                                    <input type="button" value="加入購物車"/>
                                </div>
                            </div>
                        )

                    })}

                </div>


            </div>

        </div>
    )
}

/*

  {cakeData.map((cakeDetail,index)=>{
                    return
                    <div className="cupmap">
                    <div className="shop-card">
                        <img className="shop-cakeimg" src={cake} />
                        <p className="shop-cakename">卡士達</p>
                        <p className="shop-cakecontent">卡士達</p>
                        <p className="shop-cakeprice">NT.100</p>
                    </div>
                </div>
                })}


                {cakeData.map((cakeDetail) => {
                    return (
                        <div className="cupmap">
                        <div className="shop-card">
                            <img className="shop-cakeimg" src={cakeDetail.imgname} />
                    <p className="shop-cakename">{cakeDetail.name}</p>
                            <p className="shop-cakecontent">{cakeDetail.content}</p>
                    <p className="shop-cakeprice">NT.{cakeDetail.price}</p>
                        </div>
                    </div>
                    )
                    
                })}
*/

export default Shop;