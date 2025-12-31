import React, { Component } from "react";

class Flames extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name1: "",
      name2: "",
      answer: ""
    };
  }

  getResult = (value) => {
    if (value === 1) return "Friends";
    if (value === 2) return "Love";
    if (value === 3) return "Affection";
    if (value === 4) return "Marriage";
    if (value === 5) return "Enemy";
    if (value === 0) return "Siblings";
  };

  calculateRelationship = () => {
    const { name1, name2 } = this.state;

    if (!name1.trim() || !name2.trim()) {
      this.setState({ answer: "Please Enter valid input" });
      return;
    }

    let a = name1.split("");
    let b = name2.split("");

    for (let i = 0; i < a.length; i++) {
      let index = b.indexOf(a[i]);
      if (index !== -1) {
        a[i] = "";
        b[index] = "";
      }
    }

    const count = a.join("").length + b.join("").length;
    this.setState({ answer: this.getResult(count % 6) });
  };

  clearAll = () => {
    this.setState({
      name1: "",
      name2: "",
      answer: ""
    });
  };

  render() {
    return (
      <div>
        <input
          data-testid="input1"
          name="name1"
          value={this.state.name1}
          onChange={(e) => this.setState({ name1: e.target.value })}
        />

        <input
          data-testid="input2"
          name="name2"
          value={this.state.name2}
          onChange={(e) => this.setState({ name2: e.target.value })}
        />

        <button
          data-testid="calculate_relationship"
          name="calculate_relationship"
          onClick={this.calculateRelationship}
        >
          Calculate Relationship
        </button>

        <button
          data-testid="clear"
          name="clear"
          onClick={this.clearAll}
        >
          Clear
        </button>

        <h3 data-testid="answer">{this.state.answer}</h3>
      </div>
    );
  }
}

export default Flames;
