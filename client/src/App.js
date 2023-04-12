import React, {Component} from "react";
import "./style.css"
import CreateTodo from "./createTodo";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        data: [],
        isLoaded: false,
        showCreateTodo: false
    };
    this._onButtonClick = this._onButtonClick.bind(this);
  }

    _onButtonClick() {
        this.setState({
            showCreateTodo: true,
        });
    }

  componentDidMount() {
      fetch(`/api`)
          .then(res => res.json())
          .then(result => {
              console.log(result)
              this.setState({ data: result.todos, isLoaded: true })
          })
          .catch((error) => console.log("Error: " +error))
  }

  render() {
      if(!this.state.isLoaded) {
          return <div>Loading...</div>;
      } else {
          return (
              <>
                  <header>
                      <button className="btn btn-primary" onClick={this._onButtonClick}>Create new todo</button>
                      <form id="theme" action="/switchTheme" method="get">
                          <input type="submit" className="btn btn-primary" value="Toggle style"/>
                      </form>
                  </header>
                  {this.state.showCreateTodo ? <CreateTodo /> : null}
                  <div className="button-container">
                      <a className="btn btn-primary" href="?orderBy=title&orderDirection={{orderDirection}}">By Title</a>
                      <a className="btn btn-primary" href="?orderBy=due&orderDirection={{orderDirection}}">By Due Date</a>
                      <a className="btn btn-primary" href="?orderBy=create&orderDirection={{orderDirection}}">By Creation Date</a>
                      <a className="btn btn-primary" href="?orderBy=importance&orderDirection={{orderDirection}}">By Importance</a>
                      <a className="btn btn-primary" href="?showFinished=true">Filter Completed</a>
                  </div>
                  <main>
                      {this.state.data.map(todo => (
                          <div key={todo.id} id="todo-list">
                              <div id="todo-id">
                                  {convertSQLTimestampToDate(new Date(todo.due))}
                              </div>
                              <div id="todo-title">
                                  {todo.title}
                              </div>
                              <div id="todo-importance">
                                  {numberToImportance(todo.importance)}
                              </div>
                              <div id="edit">
                                  <form action="/createtodo/{{id}}" method="get"><input className="btn btn-primary" type="submit" value="Edit" /></form>
                              </div>
                              <div id="todo-completion">
                                  <input id="completionCheckbox" type="checkbox" disabled />
                                  <label htmlFor="completionCheckbox">Open</label>
                              </div>
                              <div id="todo-desc">
                                  {todo.desc}
                              </div>
                          </div>
                      ))}
                  </main>
              </>
          );
      }
  }
}

function numberToImportance(number) {
    let importance = "";
    let n = 1;
    while(n <= number) {
        importance += "↯"
        n++;
    }
    return importance;
}

function convertSQLTimestampToDate (date) {
    return date.toLocaleString("de-CH", { weekday: "long", year: "numeric", month: "long", day: "numeric" })
}

export default App;
