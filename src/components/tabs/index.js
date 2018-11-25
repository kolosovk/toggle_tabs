import React, { Component } from "react";
import API from "../../api";

class Tab extends Component {
  state = {
    posts: [],
    clicked: 0,
    night: false
  };

  componentDidMount() {
    API().then(json => {
      this.setState({ posts: json });
    });
  }

  showPost = clicked => {
    clicked !== this.state.clicked? this.setState({ clicked }) : this.setState({ clicked: null })
    console.log(this.state.clicked);
  };

  changeColor = () => {
    this.state.night? this.setState({ night: false }) : this.setState({ night: true })
    console.log(this.state.night)
  }

  render() {
    return (
      <div className="Wrap">
        <div className={`Button${this.state.night? ` changeColor` : `` }`}  onClick={this.changeColor}></div>
        {this.state.posts.map(elem => {
          return (
            <div className="Tab" key={elem.id}>
              <div className={`TabHead${this.state.night? ` changeColor` : `` }`}>
                <p className={`TabHeadText${this.state.night? ` changeColor` : `` }`} onClick={() => this.showPost(elem.id)}>{elem.name}</p>
              </div>
              <div className={`TabContent${this.state.clicked === elem.id? ' Show': ''}`}>
                <p className="TabContentText">{elem.company.name}</p>
                <p className="TabContentText">{elem.company.catchPhrase}</p>
                <p className="TabContentText">{elem.company.bs}</p>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Tab;
