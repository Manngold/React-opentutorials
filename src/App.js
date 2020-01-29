import React, { Component } from "react";
import Subject from "./Components/Subject";
import Navigation from "./Components/Navigation";
import Content from "./Components/Content";

class App extends Component {
    render() {
        return (
            <div className="App">
                <Subject title="WEB" sub="world wide web!"></Subject>
                <Navigation list={["HTML", "CSS", "JavaScript"]}></Navigation>
                <Content
                    title="HTML"
                    desc="HTML is HyperText Mark-up Language"
                ></Content>
            </div>
        );
    }
}

export default App;
