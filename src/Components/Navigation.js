import React, { Component } from "react";

class Navigation extends Component {
    render() {
        let lists = [];
        const data = this.props.data;
        let i = 0;
        while (i < data.length) {
            lists.push(
                <li key={data[i].id}>
                    <a
                        href={"/content/" + data[i].id}
                        contentid={data[i].id}
                        onClick={e => {
                            e.preventDefault();
                            this.props.handleMode(
                                "read",
                                parseInt(e.target.attributes.contentid.value) -
                                    1
                            );
                        }}
                    >
                        {data[i].title}
                    </a>
                </li>
            );
            i += 1;
        }
        return (
            <nav>
                <ul>{lists}</ul>
            </nav>
        );
    }
}

export default Navigation;
