import React, { Component } from "react";
import Subject from "./Components/Subject";
import Navigation from "./Components/Navigation";
import Content from "./Components/Content";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            welcomeMode: true,
            nowContent: null,
            subject: { title: "WEB", sub: "World Wide Web" },
            welcome: { title: "Welcome", desc: "Hello React!!" },
            contents: [
                { id: 1, title: "HTML", desc: "HTML is for information" },
                { id: 2, title: "CSS", desc: "CSS is for design" },
                {
                    id: 3,
                    title: "JavaScript",
                    desc: "JavaScript is for interactive"
                }
            ]
        };
    }
    handleMode = (path, id) => {
        if (path === "welcome") {
            this.setState({ welcomeMode: true, nowContent: null });
        } else {
            this.setState({ welcomeMode: false, nowContent: id });
        }
    };
    render() {
        return (
            <div className="App">
                <Subject
                    title={this.state.subject.title}
                    sub={this.state.subject.sub}
                    handleMode={this.handleMode}
                ></Subject>
                <Navigation
                    data={this.state.contents}
                    handleMode={this.handleMode}
                ></Navigation>
                {this.state.welcomeMode ? (
                    <Content
                        title={this.state.welcome.title}
                        desc={this.state.welcome.desc}
                    ></Content>
                ) : (
                    <Content
                        title={this.state.contents[this.state.nowContent].title}
                        desc={this.state.contents[this.state.nowContent].desc}
                    ></Content>
                )}
            </div>
        );
    }
}

export default App;
