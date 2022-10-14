import React from "react";
import "./Hero.css"
import{AiOutlineSearch} from 'react-icons/ai'

const Hero =()=>{

    return(
        <div className="hero">
            <div className="content">
                <h1 > Find the perfect place</h1>
                <p className='search-text'>Search the largest section of luxury high-rise apartment, multi-famiy homes and luxury homes.  </p>
                <form className="search">
                    <div>
                        <input type='text' placeholder="Enter  keyword"/>
                    </div>
                    <div className="radio">
                        <input type='radio' checked />
                        <label> Buy</label>
                        <input type='radio' />
                        <label>Rent</label>
                        <button type="submit" className="btn" ><AiOutlineSearch /></button>
                    </div>
                </form>
            </div>

        </div>
    )
}

export default Hero;