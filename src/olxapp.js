import React from 'react'
import Image from './image/olxapp.webp'
import Image1 from './image/appstore_2x.png'
import Image2 from './image/playstore_2x.png'





export default class OlxApp extends React.Component{
    render(){
        return(
            <div className="back">
                <div className='container'>
                    <div className="row">
<div className="col-lg-4">
    <img src={Image}/>
</div>


<div className="col-lg-5 app-pad">
    <h2 className="app-hea">TRY THE OLX APP</h2>
    <p className="app-p">Buy, sell and find just about anything using the app on your mobile.</p>
</div>



<div className="col-lg-3 app-pad1 ">
    <div className=" app">
<p className="app-p1 ">GET YOUR APP TODAY</p>
< a href="https://apps.apple.com/pk/app/olx-pakistan/id1119081665?utm_source=desktop_ios&utm_medium=home_banner&utm_campaign=home" target="_blank"><img src={Image1} width="120px"/>&nbsp;&nbsp;</a>
< a href="https://play.google.com/store/apps/details?id=com.olx.pk&utm_source=desktop_android&utm_medium=home_banner&utm_campaign=home" target="_blank" ><img src={Image2} width="120px"/></a>
</div>
</div>
                    </div>
                </div>
            </div>
        )
    }
}