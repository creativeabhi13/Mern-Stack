import React from "react";
import { Link,NavLink} from "react-router-dom";


const Navbar =()=>{
    return (
        <div className="navbar">
           {/* <Link to="/">Home</Link>
           <Link to="/about">About</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/contact">Contact</Link> */}
           <NavLink to="/" >Home</NavLink>
              <NavLink to="/about">About</NavLink>
                <NavLink to="/blog">Blog</NavLink>
                <NavLink to="/contact">Contact</NavLink>

        </div>
    )
}

export default Navbar;
// there is only difference between Link and NavLink is that NavLink will add a class to the active link.

// a tag is used to navigate to the different pages in the website.
// it will reload the page when we click on the link.
{/* <a href="/">Home</a>
<a href="/about">About</a>
<a href="/blog">Blog</a>
<a href="/contact">Contact</a> */}