import React from 'react'
import "./profile2.css"
import profileImage from "./profile.png"
import "./orders.css"
// import "setting.css"

const address = [
    {
        address: {
            id:1,
            building:"Just a builing somewhere in nowhere",
            locality: "something locality",
            city: "Junnagarh",
            pincode: 123456,
                default: false
        }
    },
    {
        address: {

            id:2,
            building:"Just a builing somewhere in nowhere",
            locality: "something locality",
            city: "asdasfasd",
            pincode: 123456,
            default: true
        }
    },
    {
        address: {
            id:3,
            building:"Just a builing somewhere in nowhere",
            locality: "something locality",
            city: "asdascxa",
            pincode: 123456,
            default: false
        }
    },
    {
        address: {
            id:4,
            building:"Just a builing somewhere",
            locality: "something locality sjhdbasjd",
            city: "asdasdcas",
            pincode: 123456,
            isDefault: false
        }
    },
]


const users= [
    {
        id: 1,
        email: "johndeker@gmail.com",
        username: "John Deker",
        contact: "+91 9684576255",   
        gender: "Male",
        DOB: "18-December-2002",
        address: " ",
        isLoggedIn: true
    },
    {
        id: 2,
        email: "manasmr@gmail.com",
        username: "Manas Manthan Rout",
        contact: "+9112345678",   
        gender: "Male",
        DOB: "7-July-2002",
        address: " ",
        isLoggedIn: false
    },
    {
        id: 3,
        email: "subhendu@gmail.com",
        username: "Subhendu Rout",
        contact: "+9112345678",   
        gender: "Male",
        DOB: "4-April-2002",
        address: " ",
        isLoggedIn: false
    },
    {
        id: 4,
        email: "drashmir@gmail.com",
        username: "Rashmi Ranjan Das",
        contact: "+9112345678",   
        gender: "Male",
        DOB: "1-March-2002",
        address: " ",
        isLoggedIn: false
    },
    {
        id: 5,
        email: "premapr@gmail.com",
        username: "Premananda Prdhan",
        contact: "+9112345678",   
        gender: "Male",
        DOB: "16-February-2002",
        address: " ",
        isLoggedIn: false
    },
    {
        id: 6,
        email: "premapr@gmail.com",
        username: "Premananda Prdhan",
        contact: "+9112345678",   
        gender: "Male",
        DOB: "16-February-2002",
        address: " ",
        isLoggedIn: false
    },
]



function UpdatedProfilePage() {

     const loginUser = ()=>{
        return  users.filter(user => user.isLoggedIn)
    }

  return (
    <div>
      <div className="container">
        <div className="profile-nav">
            <li>ACCOUNT MAIN</li>
            <li>YOUR ORDERS</li>
            <li>MY WISHLIST</li>
            <li>PROFILE SETTING</li>
            <li>LOGOUT</li>
        </div>
        <div className="user-profile" key={users.id}>
            <div className="user-details" >
                <img src={profileImage} alt="" />
                     <div className="details">
                <p><b>Mr. {loginUser().map(logedinUser=>{
                    return logedinUser.username
                })}</b></p>
                <p><span>Email: </span>{loginUser().map(logedinUser=>{
                    return logedinUser.email
                })} <span style={{paddingLeft:"5px"}}>Contact: </span>{loginUser().map(logedinUser=>{
                    return logedinUser.contact
                })}</p>
                </div>
                
                </div>
                <div className="address" key={address.id}>
                    {address.map(add => {
                        return  <p><i class="fa-solid fa-location-dot"></i>{add.address.building}, {add.address.locality}, {add.address.city}, {add.address.pincode} </p>
                    })
                       }
                    <a href="#"><button className='btn'>+ Address</button></a>
                </div>
                <div className="orders">
                    <h1>Your Orders</h1>
                    <div className="containerOder">
                       <div className="orderDetails">
                        <div className='shiping'>
                            <p>ORDER #123456789547 <span style={{color:"green", fontWeight:"bold"}}>Shipped</span></p>
                            <p>Date: 12-January-2024</p>
                        </div>
                        <div className="priceAdd">
                        <button className='btn'> Cancel Order</button>
                        <button className='btn'>Track Package</button>
                        </div>
                       </div>
                            <div className="product">
                                <div className="userContact">
                                    <div className='contact shipping border-right'>
                                        <p>Contact</p>
                                        <p><b>Mr. {loginUser().map(logedinUser=>{
                                            return logedinUser.username
                                        })}</b></p>
                                        <p>Phone: {loginUser().map(logedinUser=>{
                                            return logedinUser.contact
                                        })}</p>
                                        <p>Email: {loginUser().map(logedinUser=>{
                                            return logedinUser.email
                                        })}</p>
                                    </div>
                                    <div className='shipaddress shippingto border-right'>
                                        <p>Shipping Address</p>
                                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                                    </div>
                                    <div className='payment shippingto'>
                                    <p>Paymet</p>
                                    <p>Visa*****1254</p>
                                    <p>Shipping Fee: 0</p>
                                    <p>Total: Rs51000</p>
                                    </div>
                                </div>
                                <div className="image">
                                    <img src="https://m.media-amazon.com/images/I/51qcJKGmDXL._AC_UY327_FMwebp_QL65_.jpg" alt="" />
                                    <span style={{padding:"10px"}}>Sony Dualsense Edge Wireless Controller (Playstation 5)
                                        <p><b>Rs17,000</b></p>
                                    </span>
                                    <img src="https://m.media-amazon.com/images/I/51qcJKGmDXL._AC_UY327_FMwebp_QL65_.jpg" alt="" />
                                    <span style={{padding:"10px"}}>Sony Dualsense Edge Wireless Controller (Playstation 5)
                                        <p><b>Rs17,000</b></p>
                                    </span>
                                    <img src="https://m.media-amazon.com/images/I/51qcJKGmDXL._AC_UY327_FMwebp_QL65_.jpg" alt="" />
                                    <span style={{padding:"10px"}}>Sony Dualsense Edge Wireless Controller (Playstation 5)
                                        <p><b>Rs17,000</b></p>
                                    </span>
                                </div>
                            </div>
                    </div>
                </div>
                <div className="orders">
                    <div className="containerOder">
                       <div className="orderDetails">
                        <div className='shiping'>
                            <p>ORDER #123456789547 <span style={{color:"red", fontWeight:"bold"}}>Pending</span></p>
                            <p>Date: 12-January-2024</p>
                        </div>
                        <div className="priceAdd">
                        <button className='btn'> Cancel Order</button>
                        <button className='btn'>Track Package</button>
                        </div>
                       </div>
                            <div className="product">
                                <div className="userContact">
                                    <div className='contact shipping border-right'>
                                        <p>Contact</p>
                                        <p><b>Mr. {loginUser().map(logedinUser=>{
                                            return logedinUser.username
                                        })}</b></p>
                                        <p>Phone: {loginUser().map(logedinUser=>{
                                            return logedinUser.contact
                                        })}</p>
                                        <p>Email: {loginUser().map(logedinUser=>{
                                            return logedinUser.email
                                        })}</p>
                                    </div>
                                    <div className='shipaddress shippingto border-right'>
                                        <p>Shipping Address</p>
                                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                                    </div>
                                    <div className='payment shippingto'>
                                    <p>Paymet</p>
                                    <p>Visa*****1254</p>
                                    <p>Shipping Fee: 0</p>
                                    <p>Total: Rs51000</p>
                                    </div>
                                </div>
                                <div className="image">
                                    <img src="https://m.media-amazon.com/images/I/51qcJKGmDXL._AC_UY327_FMwebp_QL65_.jpg" alt="" />
                                    <span style={{padding:"10px"}}>Sony Dualsense Edge Wireless Controller (Playstation 5)
                                        <p><b>Rs17,000</b></p>
                                    </span>
                                    <img src="https://m.media-amazon.com/images/I/51qcJKGmDXL._AC_UY327_FMwebp_QL65_.jpg" alt="" />
                                    <span style={{padding:"10px"}}>Sony Dualsense Edge Wireless Controller (Playstation 5)
                                        <p><b>Rs17,000</b></p>
                                    </span>
                                </div>
                            </div>
                    </div>
                </div>
        </div> 
        </div>
    </div>
  )
}

export default UpdatedProfilePage
