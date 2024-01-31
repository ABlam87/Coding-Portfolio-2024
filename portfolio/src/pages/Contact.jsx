import React from "react";

const Contact = function() {
    return <div id='contactPage' className="container-fluid row">

        <br></br>

        <section className="container-fluid" id="contactMe">
            
        <div className="col-md-12 contactHead">
            <h1><span>Contact Me</span></h1>
        </div>

        <div className="col-md-12 contactCopy row">
            <div className="card">
                <img src="https://i.imgur.com/gIf1mef.png" style={{width: "50px"}}></img>
                <p>adamblampied@gmail.com</p>
            </div>

            <div className="card">
        <       img src="https://i.imgur.com/emyKw2L.png" style={{width: "50px"}}></img>
                <p>(+44)7966039290</p>
            </div>    
        
            <div className="card">
                <img class='ig' src="https://i.imgur.com/lryAZpA.png" style={{width: "110px"}}></img>
                <p>@adamtheblampied</p>
            </div>

            <div className="card">
                <img src='https://i.imgur.com/baprjgl.png'></img>
                <p><a href='https://www.linkedin.com/in/adam-blampied-7065a12b1' target="_blank">LinkedIn Profile</a></p>
            </div>    
    </div>

    </section>
    </div>
}

export default Contact