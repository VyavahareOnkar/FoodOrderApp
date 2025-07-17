import React from "react";

class Userclass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  render() {
    const { count } = this.state;
    const { name, profession, github, photo } = this.props;
    return (
      <div>
        <h3>Name: {name}</h3>
        <br />
        <h3>Profession: {profession}</h3>
        <br />
        <h3>Github Profile: {github}</h3>
        <br />
        <img src={photo}></img>
        <h3>Count:{count}</h3>
        <button
          onClick={() => {
            this.setState({
              count: count + 1,
            });
          }}
        >
          Increment
        </button>
      </div>
    );
  }
}

export default Userclass;
