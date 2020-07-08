import React, { Component } from "react";

import PortfolioItem from "./portfolio-item";

export default class PortfolioContainer extends Component {
    constructor() {
      super();


      console.log("Portfolio container has rendered")
    }

    portfolioItems() {
      const data =  ['LDS Church', '1800Contacts', 'Mountain America']

      return data.map(item => {
        return <PortfolioItem />
      })
    }
  // State
  // Lifecycle hooks
  render() {
    return (
      <div>
        <h2>Portfolio items go here updated...</h2>
        {this.portfolioItems()}

        <PortfolioItem />
      </div>
    );
  }
}