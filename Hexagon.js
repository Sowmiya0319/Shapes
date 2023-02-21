import React from "react";
class Hexagon extends React.Component {
    Perimeter() {
      return this.props.area * 6;
    }
  
    render() {
      const perimeter = this.Perimeter();
      return <div>Perimeter of Hexagon: {perimeter}</div>;
    }
  }
  export default Hexagon;