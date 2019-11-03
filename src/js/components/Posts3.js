import React, { Component } from "react";
import { connect } from "react-redux";
import { getDataWithSaga } from "../actions/index";

function mapStateToProps(state) {
  return {
    articles: state.remoteArticles.slice(0, 3),
    isLoading: state.isLoading,
  };
}

export class Post3 extends Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    // alert('Men vad i helvetes jävla skit också??!!')
    this.props.getDataWithSaga();
  }
    
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
          isLoading ? <button disabled>Vänta på SAGAns slut ;-)</button>:
          <button onClick={this.handleClick}>Berätta en SAGA</button>
        }
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  { getDataWithSaga }
)(Post3);