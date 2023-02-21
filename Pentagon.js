import React from "react";
class Pentagon extends React.Component {
    Perimeter() {
      return this.props.area * 5;
    }
  
    render() {
      const perimeter = this.Perimeter();
      return <div>Perimeter of Pentagon: {perimeter}</div>;
    }
  }
  export default Pentagon;