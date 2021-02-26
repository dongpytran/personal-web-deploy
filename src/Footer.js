import React, { useEffect } from 'react'
import "./Footer.css"
import countapi from 'countapi-js'
function Footer() {
    const date = new Date();
    const year = date.getFullYear();
    useEffect(()=>{
        const count = document.getElementById('count');
        countapi.update('dongpy.tk', 'viewer', 1).then((result) => { count.innerHTML = result.value});
    }, [])



    return (
        <div className="footer">
            <p>Copyright &copy; {year} </p>
            <p>Developed by TranDongPy</p>
            <p>All rights reserved</p>
            <p id="count" style={{color:"red"}}></p><span>visited</span>
        </div>
    )
}

export default Footer
