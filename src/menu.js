import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import {Link} from "react-router-dom";
//  function SimpleMenu() {
 

//   return (
   
//   );
// }

//  class MenuBar extends React.Component{
//     render(){
           
function MenuBar(){
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
        return(
            <div className="fluid-container border">
                <div className="container">
<div className="row">
<div className="col-lg-2 ">
 {/* <MenuBar /> */}
 <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
            ALL CATEGORIES
          </Button>
          <Menu
          className="menu"
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <div className="show">
              <div className="row">



<div className="col-lg-6">
<MenuItem  className="remove-bg"> <p className="vehicle-hea">Vehicles</p></MenuItem>
<MenuItem className="remove-bg"><p className="vehicle-p">Tractors & Trailers</p></MenuItem>
            <MenuItem  className="remove-bg"><p className="vehicle-p">Boats</p></MenuItem>
            <MenuItem  className="remove-bg"><p className="vehicle-p">Other Vehicles</p></MenuItem>
            <MenuItem  className="remove-bg"><p className="vehicle-p">Rickshaw & Chingchi</p></MenuItem>
            <MenuItem  className="remove-bg"><p className="vehicle-p">Buses, Vans & Trucks</p></MenuItem>
            <MenuItem  className="remove-bg"><p className="vehicle-p">Spare Parts</p></MenuItem>
            <MenuItem  className="remove-bg"><p className="vehicle-p">Cars Accessories</p></MenuItem>
            <MenuItem  className="remove-bg"><p className="vehicle-p">Cars on Installments</p></MenuItem>
            <MenuItem  className="remove-bg"><p className="vehicle-p">Cars </p></MenuItem>

<br/>
<MenuItem  className="remove-bg"> <p className="vehicle-hea">Mobiles</p></MenuItem>
<MenuItem className="remove-bg"><p className="vehicle-p">Mobile Phones</p></MenuItem>
            <MenuItem  className="remove-bg"><p className="vehicle-p">Accessories</p></MenuItem>
            <MenuItem  className="remove-bg"><p className="vehicle-p">Tablets</p></MenuItem>

    
    <br />
            <MenuItem  className="remove-bg"> <p className="vehicle-hea">Electronics & Home Appliances</p></MenuItem>
<MenuItem className="remove-bg"><p className="vehicle-p">Washing Machines & Dryers</p></MenuItem>
            <MenuItem  className="remove-bg"><p className="vehicle-p">Fridges & Freezers</p></MenuItem>
            <MenuItem  className="remove-bg"><p className="vehicle-p">AC & Coolers</p></MenuItem>
            <MenuItem  className="remove-bg"><p className="vehicle-p">Kitchen Appliances</p></MenuItem>
            <MenuItem  className="remove-bg"><p className="vehicle-p">Generators, UPS & Power Solutions</p></MenuItem>
            <MenuItem  className="remove-bg"><p className="vehicle-p">Other Home Appliances</p></MenuItem>
            <MenuItem  className="remove-bg"><p className="vehicle-p">Games & Entertainment</p></MenuItem>
            <MenuItem  className="remove-bg"><p className="vehicle-p">Cameras & Accessories</p></MenuItem>
            <MenuItem  className="remove-bg"><p className="vehicle-p">TV - Video - Audio</p></MenuItem>
            <MenuItem  className="remove-bg"><p className="vehicle-p">Computers & Accessories</p></MenuItem>


            <br />
            <MenuItem  className="remove-bg"> <p className="vehicle-hea">Property for Sale</p></MenuItem>
<MenuItem className="remove-bg"><p className="vehicle-p">Portions & Floors</p></MenuItem>
            <MenuItem  className="remove-bg"><p className="vehicle-p">Shops - Offices - Commercial Space</p></MenuItem>
            <MenuItem  className="remove-bg"><p className="vehicle-p">Apartments & Flats</p></MenuItem>
            <MenuItem  className="remove-bg"><p className="vehicle-p">Houses</p></MenuItem>
            <MenuItem  className="remove-bg"><p className="vehicle-p">Land & Plots</p></MenuItem>
            

            
</div>



<div className="col-lg-6 ">
<MenuItem  className="remove-bg"> <p className="vehicle-hea">Animals</p></MenuItem>
<MenuItem className="remove-bg"><p className="vehicle-p">Other Animals</p></MenuItem>
            <MenuItem  className="remove-bg"><p className="vehicle-p">Pet Food & Accessories</p></MenuItem>
            <MenuItem  className="remove-bg"><p className="vehicle-p">Horses</p></MenuItem>
            <MenuItem  className="remove-bg"><p className="vehicle-p">Livestock</p></MenuItem>
            <MenuItem  className="remove-bg"><p className="vehicle-p">Dogs</p></MenuItem>
            <MenuItem  className="remove-bg"><p className="vehicle-p">Cats</p></MenuItem>
            <MenuItem  className="remove-bg"><p className="vehicle-p">Hens & Aseel</p></MenuItem>
            <MenuItem  className="remove-bg"><p className="vehicle-p">Birds</p></MenuItem>
            <MenuItem  className="remove-bg"><p className="vehicle-p">Fish & Aquariums</p></MenuItem>
            




</div>






</div>
</div></Menu></div>



<div className="col-lg-9 menu-bar">
   
   <Link onClick={()=>console.log("ok")} className="link"><span className="menu-txt"> Mobile Phone</span></Link>
   <Link onClick={()=>console.log("ok")} className="link"><span className="menu-txt"> Cars</span></Link>
   <Link onClick={()=>console.log("ok")} className="link"><span className="menu-txt"> Motorcycles</span></Link>
   <Link onClick={()=>console.log("ok")} className="link"><span className="menu-txt"> Houses</span></Link>
   <Link onClick={()=>console.log("ok")} className="link"><span className="menu-txt"> TV-Video-Audio</span></Link>
   <Link onClick={()=>console.log("ok")} className="link"><span className="menu-txt"> Tablets</span></Link>
   <Link onClick={()=>console.log("ok")} className="link"><span className="menu-txt"> Land & Plots </span></Link>
   
</div>

</div></div></div>
        )
    }


// export default {
//     SimpleMenu,
//     Menu
// }
export default MenuBar