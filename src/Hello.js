import './Hello.css';
import React from 'react';

class Hello extends React.Component {
    render(){
        return (
        //  �o�Ǩ�ꤣ�O�u��HTML�X�A�ӬO�A�Ω�virtual DOM����HTML�X�A�Φ����M�OJavaScript�A�]�N�OJSX
        //  �ҥH�n��className�Ӥ��Oclass�A�]��class�bJavaScript�̭��O�O�d�r
        <div className="f1 tc">     
            <h1>TWICE is the best!</h1>
            <p>Welcome to react and build your first component</p>
            <p>{this.props.demo_props}</p>
        </div>
        );
    }
}

export default Hello;