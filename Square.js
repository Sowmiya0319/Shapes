import React from "react";
class Square extends React.Component {
    Perimeter() {
      return this.props.length * 4;
    }
  
    render() {
      const perimeter = this.Perimeter();
      return <div>Perimeter of Square: {perimeter}</div>;
    }
  }
  export default Square;