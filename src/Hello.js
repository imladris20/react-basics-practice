import './Hello.css';
import React from 'react';

class Hello extends React.Component {
    render(){
        return (
        //  這些其實不是真的HTML碼，而是適用於virtual DOM的偽HTML碼，形式仍然是JavaScript，也就是JSX
        //  所以要用className而不是class，因為class在JavaScript裡面是保留字
        <div className="f1 tc">     
            <h1>TWICE is the best!</h1>
            <p>Welcome to react and build your first component</p>
            <p>{this.props.demo_props}</p>
        </div>
        );
    }
}

export default Hello;