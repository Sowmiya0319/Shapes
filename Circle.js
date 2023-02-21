import React from "react";
class Circle extends React.Component
{

    Perimeter()
    {
     return 2*(3.14*this.props.radius);
    }
    render()
    {
     const Perimeter=this.Perimeter();
     return  <div>Perimeter of Circle:{Perimeter}</div>
    }
}
export default Circle;