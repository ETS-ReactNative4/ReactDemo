import React, {Component} from 'react';
import PropTypes from "prop-types";
import classes from "./Person.css";
import Aux from "../../hoc/Aux";
import withClass from "../../hoc/WithClass";
import AuthContext from "../../../context/auth-context";

class Person extends Component{
    constructor(props){
        super(props);
        this.inputElementRef = React.createRef();
    }
    static contextType = AuthContext;

    componentDidMount(){
        // this.inputElement.focus();
        this.inputElementRef.current.focus();
        console.log(this.context.authenticated);
    }
    render(){
        console.log("[Person.js] rendering");
        console.log(this.props.name)
        return (
        <Aux>
              {/* <AuthContext.Consumer>
                {constext=>  
                    constext.authenticated? <p>Authenticated!</p>:<p>Please log in</p>
                }
              </AuthContext.Consumer> */}
              {this.context.authenticated? <p>Authenticated!</p>:<p>Please log in</p>}
            <p onClick={this.props.click}>I'm {this.props.name} and I am {this.props.age} years old!</p>
            <p key="i2">{this.props.children}</p>
            <input 
                key="i3" 
                // ref={(inputEl)=>{this.inputElement=inputEl}} 
                ref={this.inputElementRef}
                type="text" 
                onChange={this.props.changed} 
                value={this.props.name} />
        </Aux>
        )
        
    }
}
// const person = ( props ) => {
//     console.log("Person.js rendering");
//     return (
//         <div className={classes.Person} >
//             <p onClick={props.click}>I'm {props.name} and I am {props.age} years old!</p>
//             <p>{props.children}</p>
//             <input type="text" onChange={props.changed} value={props.name} />
//         </div>
//     )
// };

Person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.func
};
export default withClass(Person,classes.Person);
// export default Person;
