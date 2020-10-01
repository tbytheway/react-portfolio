import React, { Component } from "react";
import axios from "axios";
import profilePicture from "../../../static/assets/images/bio/headshot.jpg";
import PortfolioItem from "./portfolio-item";

export default class PortfolioContainer extends Component {
  constructor() {
    super();

    this.state = {
      pageTitle: "Welcome to my portfolio",
      isLoading: false,
      data: []
    };

    this.handleFilter = this.handleFilter.bind(this);
  }

  handleFilter(filter) {
    if (filter === "CLEAR_FILTERS") {
      this.getPortfolioItems();
    } else {
      this.getPortfolioItems(filter);
    }
  }

  getPortfolioItems(filter = null) {
    axios
      .get("https://terrybytheway.devcamp.space/portfolio/portfolio_items")
      .then(response => {
        if (filter) {
          this.setState({
            data: response.data.portfolio_items.filter(item => {
              return item.category === filter;
            })
          });
        } else {
          this.setState({
            data: response.data.portfolio_items
          });
        }
      })
      .catch(error => {
        console.log(error);
      });
  }

  portfolioItems() {
    return this.state.data.map(item => {
      return <PortfolioItem key={item.id} item={item} />;
    });
  }

  componentDidMount() {
    this.getPortfolioItems();
  }

  render() {
    if (this.state.isLoading) {
      return <div>Loading...</div>;
    }

    return (
      <div className="homepage-wrapper">
        <div className="filter-links">
          <button
            className="btn"
            onClick={() => this.handleFilter("Apps")}
          >
            Apps
          </button>
          <button
            className="btn"
            onClick={() => this.handleFilter("Family")}
          >
            Family
          </button>
          {/* <button
            className="btn"
            onClick={() => this.handleFilter("Enterprise")}
          >
            Enterprise
          </button> */}
          <button
            className="btn"
            onClick={() => this.handleFilter("CLEAR_FILTERS")}
          >
            All
          </button>
        </div>
        <div className="portfolio-items-wrapper">{this.portfolioItems()}</div>
        <div className="content-page-wrapper">
      <div
        className="left-column"
        style={{
          background: "url(" + profilePicture + ") no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      />
      <div className="right-column">
      A year ago, if you would have told me that I could create a site like the one you are reading this on, I would have doubted you. 
      Fast forward to today and I am creating things I never thought I would.  Seeing things change and appear after a few keystrokes(okay a lot of keystrokes) is fun and amazing.
      I have a lot of years in the IT industry and I can't tell you how many times I wished I could write code.  I can finally say that I can.
      I didn't get my first email address till I attended college.  I got my first IT job because I worked in the mailroom and on my mailruns
      I would hear people complaining about printer problems or other computer issues so I would fix them, because I liked to.  So the IT dept came 
      to me and offered me a position.  I had few PC support positions until one day my boss asked if I wanted to be over the phone system.  I'd barely even seen
      the phone system, but I said yes.  We eventually upgraded to a Cisco phone system which was absolutly nothing like our old system.
      Learning new things is not new to me, but it's always been along my career path.  Learning to code was new and a complete reboot of my career.
      I look forward to what adventures it brings.
      </div>
    </div>
      </div>
    );
  }
}
