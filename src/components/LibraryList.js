import React, {  Component } from 'react';
import { connect } from 'react-redux';

class Librarylist extends Component{
    render(){
        console.log(this.props);
        return;
    }
}

const mapStateToProps = state => {
    return { libraries: state.libraries };
};

export default connect(mapStateToProps)(Librarylist);