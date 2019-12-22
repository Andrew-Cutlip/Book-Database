import React from 'react';

class Book extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            title: ""
        }
    }
    render() {
        return <h2>{this.props.name}</h2>
    }
}

export default Book