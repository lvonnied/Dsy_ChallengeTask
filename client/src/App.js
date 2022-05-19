import React, {Component} from "react";
import "./style.css"
import {
    Route,
    HashRouter,
    Routes
} from "react-router-dom";
import CreateTodo from "./createTodo";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        data: [],
        isLoaded: false
    };
  }

  componentDidMount() {
      fetch(`/api`)
          .then(res => res.json())
          .then(result => this.setState({ data: result.todos, isLoaded: true }))
  }

  render() {
      if(!this.state.isLoaded) {
          return <div>Loading...</div>;
      } else {
          return (
              <>
                  <HashRouter>
                      <header>
                          <form action="/#/createtodo">
                              <input type="submit" className="btn btn-primary" value="Create new todo"/>
                          </form>
                          <form id="theme" action="/switchTheme" method="get">
                              <input type="submit" className="btn btn-primary" value="Toggle style"/>
                          </form>
                      </header>
                      <div className="content">
                          <Routes>
                              <Route path="/createtodo" element={<CreateTodo />}/>
                          </Routes>
                      </div>
                  </HashRouter>
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
                                  {convertSQLTimestampToDate(todo.due.toString())}
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

function convertSQLTimestampToDate (sqlTimeStamp) {
    let t = sqlTimeStamp.split('.');
    return new Date(t[0]).toISOString().substring(0, 10);
}

export default App;
