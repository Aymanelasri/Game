/*export default function HelloWorld(props){
    const age=10;
    return (<h1>Hello {props.name} {age >=18 ? 'adult' : 'minor'}</h1>);

}*/


import {Component} from "react";
export default class HelloWorld extends Component {
    age=20;
    render () { // retourne
         
    return (<h1>Hello {this.props.name} {this.age >=18 ? 'adult' : 'minor'}</h1>);

}
    }

