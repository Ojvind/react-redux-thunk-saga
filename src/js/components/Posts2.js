import React, { Component } from "react";
import { connect } from "react-redux";
import { getData } from "../actions/index";

function mapStateToProps(state) {
  return {
    articles: state.remoteArticles.slice(0, 3),
    isLoading: state.isLoading,
  };
}


export class Post2 extends Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    // alert('Men vad i helvetes jävla skit också??!!')
    this.props.getData();
  }
    
  // this.props.getData()
  render() {
    var { isLoading } = this.props; 
    return (
      <div>
        <ul>
          {this.props.articles.map(el => (
            <li key={el.id}>{el.title}</li>
          ))}
        </ul>
        {
          isLoading ? <button disabled>Vänta...</button>:
          <button onClick={this.handleClick}>Klicka här för fan</button>
        }
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  { getData }
)(Post2);