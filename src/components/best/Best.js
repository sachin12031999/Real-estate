import React from "react";
import "./Best.css"

import Apt1 from '../../assets/apt1.jpeg'
import Apt2 from '../../assets/apt2.jpeg'
import Apt3 from '../../assets/apt3.jpeg'

const Best =()=>{
    return(
            <div className="best">
                <h1>Find Best Rated Properties</h1>
                <div>
                    <p><span className="bold">All</span> </p>
                    <p>Commercial</p>
                    <p>Residential</p>
                    <p>Agricultural</p>
                </div>
                <div className="container" >
                    <img src={Apt1} alt=''/>
                    <img src={Apt2} alt=''/>
                    <img src={Apt3} alt=''/>
                   
                   <div className='img-detail order-6'>
                       <div className='top'>
                           <h2>Jahangira villah , Ct, Bhopal MP</h2>
                           <p>House for Sale</p>
                           <p className='price'>₹12 Crore</p>
                       </div>
                       <div className='info-grid'>
                           <div>
                               <div className='info'>
                                   <p className='bold'>Flates:</p><p>5</p>
                               </div>
                               <div className='info'>
                                   <p className='bold'>Garden:</p><p>7</p>
                               </div>
                           </div>
                           <div>
                               <div className='info'>
                                   <p className='bold'>Square Feet:</p><p>15000</p>
                               </div>
                               <div className='info'>
                                   
                                   <p className='bold'>Est Payment:</p><p>₹1,007/mo</p>
                               </div>
                           </div>
                       </div>
                   </div>
                   
                   <div className='img-detail order-6'>
                       <div className='top'>
                           <h2>Trikuta , Jmmu Nagar, Bhopal MP</h2>
                           <p>House for Sale</p>
                           <p className='price'>₹14 Crore</p>
                       </div>
                       <div className='info-grid'>
                           <div>
                               <div className='info'>
                                   <p className='bold'>Flates:</p><p>45</p>
                               </div>
                               <div className='info'>
                                   <p className='bold'>Hall:</p><p>1</p>
                               </div>
                           </div>
                           <div>
                               <div className='info'>
                                   <p className='bold'>Square Feet:</p><p>9,108</p>
                               </div>
                               <div className='info'>
                                   
                                   <p className='bold'>Est Payment:</p><p>₹4,797/mo</p>
                               </div>
                           </div>
                       </div>
                   </div>
                   
                   <div className='img-detail order-6'>
                       <div className='top'>
                           <h2>certeni , Vidhya Nagar, Bhopal MP</h2>
                           <p>House for Sale</p>
                           <p className='price'>₹15 Crore</p>
                       </div>
                       <div className='info-grid'>
                           <div>
                               <div className='info'>
                                   <p className='bold'>Flate</p><p>55</p>
                               </div>
                               <div className='info'>
                                   <p className='bold'>Ground</p><p>3</p>
                               </div>
                           </div>
                           <div>
                               <div className='info'>
                                   <p className='bold'>Square Feet:</p><p>8000</p>
                               </div>
                               <div className='info'>
                                   
                                   <p className='bold'>Est Payment:</p><p>₹1,797/mo</p>
                               </div>
                           </div>
                       </div>
                   </div>
                </div>
                <button className="btn" >view All</button>
            </div>
    )
}
export default Best