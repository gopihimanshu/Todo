import React from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newItem: "",
      list: [],
    };
  }

  addItem(todoValue) {
    console.log(todoValue);
    if (todoValue != "") {
      const newItem = {
        id: Date.now(),
        value: todoValue,
        idDone: false,
      };

      const list = [...this.state.list];
      list.push(newItem);

      this.setState({ list, newItem: "" });
    }
  }

  deleteItem(id) {
    const list = [...this.state.list];
    const updatedList = list.filter((item) => item.id != id);
    this.setState({ list: updatedList });
  }

  updateInput(input) {
    this.setState({ newItem: input });
  }

  render() {
    console.log("Value is", this.state);
    return (
      <div>
        <img src={logo} className="logo" width="100" height="100" />
        <h1 className="app-title">ToDo App</h1>
        <div className="container">
          Add an Item....
          <br />
          <input
            type="text"
            className="input-text"
            placeholder="Write A Todo"
            required
            value={this.state.newItem}
            onChange={(e) => this.updateInput(e.target.value)}
          ></input>
          <button
            className="add-btn"
            onClick={() => this.addItem(this.state.newItem)}
            disabled={!this.state.newItem.length}
          >
            Add Todo
          </button>
          <div className="list">
            <ul>
              {this.state.list.map((item) => {
                return (
                  <li key={item.id}>
                    <input type="checkbox" name="id"></input>
                    {item.value}
                    <button
                      className="btn"
                      onClick={() => this.deleteItem(item.id)}
                    >
                      Delete
                    </button>
                  </li>
                );
              })}
              <li>
                <input type="checkbox" name="id"></input>
                Record Youtube Video
                <button className="btn">Delete</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
