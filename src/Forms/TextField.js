/*export default function TextField({ props}) {
    return (
       <>

           <label >{props.label}</label>
           <input type="text" name={props.name} />
          
       </>
    );
}*/
import { Component } from "react";
export default class TextFields extends Component {
    render () { // retourne
        return (
              <>

           <label >{this.props.label}</label>
           <input type="text" name={this.props.name} />

       </>
        );
}
}