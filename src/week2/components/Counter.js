import {Component} from "react";

export class Counter extends Component {
    constructor(props) {
        super(props);

        this.state = { count: 0 };

        this.handleIncrementClick = this.handleIncrementClick.bind(this);
        this.handleDecrementClick = this.handleDecrementClick.bind(this);
        this.handleResetClick = this.handleResetClick.bind(this);
    }

    handleIncrementClick() {
    this.setState({
        count: this.count += 1,
    })
  };

    handleDecrementClick() {
      this.setState({
          count: this.count > 0 ? this.count -= 1 : this.count = 0
      })
  };

    handleResetClick() {
      this.setState({
          count: this.count = 0
      })
  };

  render() {
      return (
          <div className="jumbotron">
              <div className="title">React Counter</div>
              <div className="sub-title">Please use the buttons to interact with your counter</div>
              <div className="jumbotron"> {this.state.count} </div>
              <div className="p-3">
              <button
                  className="btn btn-success" onClick={this.handleIncrementClick}>
                  Increment
              </button>
              </div>
              <div className="p-3">
              <button
                  className="btn btn-success" onClick={this.handleDecrementClick}>
                  Decrement
              </button>
              </div>
              <div className="p-3">
              <button
                  className="btn btn-success" onClick={this.handleResetClick}>
                  Reset
              </button>
              </div>
          </div>
      );
  }
};




