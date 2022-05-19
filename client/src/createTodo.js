import React, {Component} from "react";
import "./style.css"

class CreateTodo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            due: "",
            title: "",
            importance: "",
            finished: "",
            desc: ""
        };
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        try {
            let res = await fetch(`/api/newtodo`, {
                method: "POST",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify ({
                    due: this.state.due,
                    title: this.state.title,
                    importance: this.state.importance,
                    finished: this.state.finished ? true : false,
                    desc: this.state.desc
                }),
            })
            if (res.status === 200) {
                console.log("Successfully added todo")
                window.location.reload()
            } else {
                console.log("Some error occured");
            }
        } catch (err) {
            console.log(err);
        }
    }

    render() {
            return (
                <>
                    <form onSubmit={this.handleSubmit} id="form">
                        <div id="new-todo-div">
                            <label htmlFor="title">Title</label>
                            <input id="title" name="title" placeholder="Enter title" onChange={(e) => this.setState({title: e.target.value})} required />
                            <label htmlFor="importance">Importance</label>
                            <input id="importance" name="importance" type="number" min="1" max="5" onChange={(e) => this.setState({importance: e.target.value})} required />
                            <label htmlFor="due">Due Date</label>
                            <input id="due" name="due" type="date" onChange={(e) => this.setState({due: e.target.value})} required />
                            <label htmlFor="finished">Finished</label>
                            <input id="finished" name="finished" onChange={(e) => this.setState({finished: e.target.value})} type="checkbox" />
                            <label htmlFor="desc">Description</label>
                            <textarea id="desc" name="desc" onChange={(e) => this.setState({desc: e.target.value})} />
                        </div>
                        <div id="new-todo-buttons">
                            <input className="btn btn-primary" type="submit" />
                            <a href="/" className="btn btn-primary">Overview</a>
                        </div>
                    </form>
                </>
            );
    }
}

export default CreateTodo;

