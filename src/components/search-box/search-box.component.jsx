import { Component } from "react";
import './search-box.css';


const SearchBox = (props) => {
    return(
        <input 
            className={props.className}
            type='search' 
            placeholder={props.placeholder}
            onChange={props.onChange}
        />
    );
};

// class SearchBox extends Component{
//     render(){
//         return(
//             <input 
//             className={this.props.className}
//             type='search' 
//             placeholder={this.props.placeholder}
//             onChange={this.props.onChange}
//             />
//         );
//     }
// }

export default SearchBox;