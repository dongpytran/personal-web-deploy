import React from 'react'
import "./Footer.css"
function Footer() {
    const date = new Date();
    const year = date.getFullYear();
    return (
        <div className="footer">
            <p>Copyright &copy; {year} </p>
            <p>Developed by TranDongPy</p>
            <p>All rights reserved</p>
        </div>
    )
}

export default Footer
