import React from 'react'
import Image from './image/271218.png'
import {Link} from "react-router-dom";

export default class Sell extends React.Component{


    attributes = ()=>{
      
        this.props.history.push('/attributes')
    }
    render(){

        
        return(
            <div>
                <div>
  
  
  <div className="fluid-container">
    <div className="row grey">


    <div className="col-lg-3">
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <Link to="/">  <img src="https://image.flaticon.com/icons/png/512/271/271218.png" width="25px" alt="" /></Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <img src="data:image/png;base64,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" width="70px" alt="" />
      </div>
    
        
      

</div>
<div className="row justify-content-center">
<div className="col-lg-3 center ">
<h3>POST YOUR AD</h3>
</div>
</div>





<div className="row justify-content-center">
<div className="col-lg-6 border list">
    <br></br>
    <h6>CHOOSE A CATEGORY
        
</h6>
<br></br>

<ul className="ul">


    <li className="li">
        Mobile
        <ul class="inner-ul">
           <li onClick={this.attributes}>Tablets</li>
            <li onClick={this.attributes}>Accessories</li>
            <li onClick={this.attributes}>Mobile Phones</li>

        </ul>

    </li>


    <li className="li">
        Vehicles
        <ul class="inner-ul1">
            <li onClick={this.attributes}>Cars</li>
            <li onClick={this.attributes}>Cars on Installments</li>
            <li onClick={this.attributes}>Cars Accessories</li>
            <li onClick={this.attributes}>Spare Parts</li>
            <li onClick={this.attributes}>Buses, Vans & Trucks</li>
            <li onClick={this.attributes}>Rickshaw & Chingchi</li>
            <li onClick={this.attributes}>Other Vehiclesi</li>
            <li onClick={this.attributes}>Boats</li>
            <li onClick={this.attributes}>Tractors & Trailers</li>

        </ul>

    </li>


    <li className="li">
        Property For Sale
        <ul class="inner-ul2">
            <li onClick={this.attributes}>Land & Plots</li>
            <li onClick={this.attributes}>Houses</li>
            <li onClick={this.attributes}>Apartments & Flats</li>
            <li onClick={this.attributes}>Shops - Offices - Commercial Space</li>
            <li onClick={this.attributes}>Portions & Floors</li>

        </ul>

    </li>


    <li className="li">
        Property For Rent
        <ul class="inner-ul3">
            <li onClick={this.attributes}>Houses</li>
            <li onClick={this.attributes}>Apartments & Flats</li>
            <li onClick={this.attributes}>Portions & Floors</li>
            <li onClick={this.attributes}>Shops - Offices - Commercial Space</li>
            <li onClick={this.attributes}>Roomss</li>
            <li onClick={this.attributes}>Roommates & Paying Guests</li>
            <li onClick={this.attributes}>Vacation Rentals - Guest Houses</li>
            <li onClick={this.attributes}>Land & Plots</li>

        </ul>

    </li>



    <li className="li">
        Electronics & Home Appliances
        <ul class="inner-ul4">
            <li onClick={this.attributes}>Computers & Accessories</li>
            <li onClick={this.attributes}>TV - Video - Audio</li>
            <li onClick={this.attributes}>Cameras & Accessories</li>
            <li onClick={this.attributes}>Games & Entertainment</li>
            <li onClick={this.attributes}>Other Home Appliances</li>
            <li onClick={this.attributes}>Generators, UPS & Power Solutions</li>
            <li onClick={this.attributes}>Kitchen Appliances</li>
            <li onClick={this.attributes}>AC & Coolers</li>
            <li onClick={this.attributes}>Fridges & Freezers</li>
            <li onClick={this.attributes}>Washing Machines & Dryers</li>

        </ul>

    </li>


    <li className="li">
        Bikes
        <ul class="inner-ul5">
            <li onClick={this.attributes}>Motorcycles</li>
            <li onClick={this.attributes}>Spare Parts</li>
            <li onClick={this.attributes}>Bicycles</li>
            <li onClick={this.attributes}>ATV & Quads</li>
            <li onClick={this.attributes}>Scooters</li>

        </ul>

    </li>




    <li className="li">
        Business, Industrial & Agriculture
        <ul class="inner-ul6">
            <li onClick={this.attributes}>Business for Sale</li>
            <li onClick={this.attributes}>Food & Restaurants</li>
            <li onClick={this.attributes}>Trade & Industrial</li>
            <li onClick={this.attributes}>Construction & Heavy Machinery</li>
            <li onClick={this.attributes}>Agriculture</li>
            <li onClick={this.attributes}>Other Business & Industry</li>
            <li onClick={this.attributes}>Medical & Pharma</li>

        </ul>

    </li>



    <li className="li">
        Services
        <ul class="inner-ul">
            <li onClick={this.attributes}>Education & Classes</li>
            <li onClick={this.attributes}>Travel & Visa</li>
            <li onClick={this.attributes}>Car Rental</li>
            <li onClick={this.attributes}>Drivers & Taxi</li>
            <li onClick={this.attributes}>Web Development</li>
            <li onClick={this.attributes}>Other Services</li>
            <li onClick={this.attributes}>Electronics & Computer Repair</li>
            <li onClick={this.attributes}>Event Services</li>
            <li onClick={this.attributes}>Health & Beauty</li>
            <li onClick={this.attributes}>Maids & Domestic Help</li>
            <li onClick={this.attributes}>Movers & Packers</li>
            <li onClick={this.attributes}>Home & Office Repair</li>
            <li onClick={this.attributes}>Catering & Restaurant</li>
            <li onClick={this.attributes}>Farm & Fresh Food</li>

        </ul>

    </li>



    <li className="li">
        Jobs
        <ul class="inner-ul">
            <li onClick={this.attributes}>Online</li>
            <li onClick={this.attributes}>Marketing</li>
            <li onClick={this.attributes}>Advertising & PR</li>
            <li onClick={this.attributes}>Education</li>
            <li onClick={this.attributes}>Customer Service</li>
            <li onClick={this.attributes}>Sales</li>
            <li onClick={this.attributes}>IT & Networking</li>
            <li onClick={this.attributes}>Hotels & Tourism</li>
            <li onClick={this.attributes}>Clerical & Administration</li>
            <li onClick={this.attributes}>Human Resources</li>
            <li onClick={this.attributes}>Accounting & Finance</li>
            <li onClick={this.attributes}>Manufacturing</li>
            <li onClick={this.attributes}>Medical</li>
            <li onClick={this.attributes}>Domestic Staff</li>
            <li onClick={this.attributes}>Part - Time</li>
            <li onClick={this.attributes}>Other Jobs</li>

        </ul>

    </li>



    <li className="li">
        Animals
        <ul class="inner-ul">
            <li onClick={this.attributes}>Fish & Aquariums</li>
            <li onClick={this.attributes}>Birds</li>
            <li onClick={this.attributes}>Hens & Aseel</li>
            <li onClick={this.attributes}>Cats</li>
            <li onClick={this.attributes}>Dogs</li>
            <li onClick={this.attributes}>Livestock</li>
            <li onClick={this.attributes}>Horses</li>
            <li onClick={this.attributes}>Pet Food & Accessories</li>
            <li onClick={this.attributes}>Other Animals</li>

        </ul>

    </li>


    <li className="li">
        Furniture & Home Decor
        <ul class="inner-ul">
            <li onClick={this.attributes}>Sofa & Chairs</li>
            <li onClick={this.attributes}>Beds & Wardrobes</li>
            <li onClick={this.attributes}>Home Decoration</li>
            <li onClick={this.attributes}>Tables & Dining</li>
            <li onClick={this.attributes}>Garden & Outdoor</li>
            <li onClick={this.attributes}>Painting & Mirrors</li>
            <li onClick={this.attributes}>Rugs & Carpets</li>
            <li onClick={this.attributes}>Curtains & Blinds</li>
            <li onClick={this.attributes}>Office Furniture</li>
            <li onClick={this.attributes}>Other Household Items</li>

        </ul>

    </li>




    <li className="li">
        Fashion & Beauty
        <ul class="inner-ul">
            <li onClick={this.attributes}>Accessories</li>
            <li onClick={this.attributes}>Clothes</li>
            <li onClick={this.attributes}>Footwear</li>
            <li onClick={this.attributes}>Jewellery</li>
            <li onClick={this.attributes}>Make Up</li>
            <li onClick={this.attributes}>Skin & Hair</li>
            <li onClick={this.attributes}>Watches</li>
            <li onClick={this.attributes}>Wedding</li>
            <li onClick={this.attributes}>Lawn & Pret</li>
            <li onClick={this.attributes}>Couture</li>
            <li onClick={this.attributes}>Other Fashion</li>

        </ul>

    </li>




    <li className="li">
        Books, Sport & Hobbies
        <ul class="inner-ul7">
            <li onClick={this.attributes}>Books & Magazines</li>
            <li onClick={this.attributes}>Musical Instruments</li>
            <li onClick={this.attributes}>Sports Equipment</li>
            <li onClick={this.attributes}>Gym & Fitness</li>
            <li onClick={this.attributes}>Other Hobbies</li>

        </ul>

    </li>




    <li className="li">
        Kids
        <ul class="inner-ul8">
        
            <li onClick={this.attributes}>Kids Furniture</li>
            <li onClick={this.attributes}>Toys</li>
            <li onClick={this.attributes}>Prams & Walkers</li>
            <li onClick={this.attributes}>Swings & Slides</li>
            <li onClick={this.attributes}>Kids Bikes</li>
            <li onClick={this.attributes}>Kids Accessories</li>

        </ul>

    </li>



    
     




</ul>
</div>
</div>
            </div>
            </div>
            </div>
        )
    }
}