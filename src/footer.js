import React from 'react'
import Image1 from './image/appstore_2x.png'
import Image2 from './image/playstore_2x.png'


export default class Footer extends React.Component{
    render(){
        return(
            <div>
            <div className="footer">
                <br></br>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 ">
                            <h6 className="footer-h">POPULAR CATEGORIES</h6>
                            <p className="footer-p">Cars</p>
                            <p className="footer-p">Flats for rent</p>
                            <p className="footer-p">Jobs</p>
                            <p className="footer-p">Mobile Phones</p>
                            
                        </div>
                        <div className="col-lg-3 ">
                        <h6 className="footer-h">TRENDING SEARCHES</h6>
                            <p className="footer-p">Bikes</p>
                            <p className="footer-p">Watches</p>
                            <p className="footer-p">Books</p>
                            <p className="footer-p">Dogs</p>
                        </div>
                        <div className="col-lg-2 ">
                        <h6 className="footer-h">ABOUT US</h6>
                            <p className="footer-p">About OLX Group</p>
                            <p className="footer-p">OLX Blog</p>
                            <p className="footer-p">Contact Us</p>
                            <p className="footer-p">OLX for Business</p>
                        </div>
                        <div className="col-lg-2 ">
                        <h6 className="footer-h">OLX</h6>
                            <p className="footer-p">Help</p>
                            <p className="footer-p">Sitemap</p>
                            <p className="footer-p">Legal &  Privacy information </p>
                            
                        </div>
                        
                        <div className="col-lg-2  margin-0">
                        <h6 className="footer-h">FOLLOW US</h6>
                        
                        < a href="https://apps.apple.com/pk/app/olx-pakistan/id1119081665?utm_source=desktop_ios&utm_medium=home_banner&utm_campaign=home" target="_blank"><img src={Image1} width="80px"/>&nbsp;&nbsp;</a>
< a href="https://play.google.com/store/apps/details?id=com.olx.pk&utm_source=desktop_android&utm_medium=home_banner&utm_campaign=home" target="_blank" ><img src={Image2} width="80px"/></a>
                        </div>

                        

                    </div>

                   
                    </div>

                </div>
                <div className="footer1">
                <div className="container">
                <div className="row">
<div className="col-lg-6">
    <p className="footer-p1"><b>Other Countries</b> India - South Africa - Indonesia</p>
</div>
<div className="col-lg-6 right">
<p className="footer-p1"><b>Free Classifieds in Pakistan</b>&nbsp;&nbsp;&nbsp;. © 2006-2020 OLX</p>
</div>
                    </div>
                </div>
                </div>
                </div>
            
        )
    }
}