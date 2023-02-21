import React from "react";
class Rectangle extends React.Component{
   Perimeter()
   {
    return 2*(this.props.width + this.props.height);
   }
   render()
   {
    const Perimeter=this.Perimeter();
    return  <div>Perimeter of Rectangle:{Perimeter}</div>
   }
}
export default Rectangle;