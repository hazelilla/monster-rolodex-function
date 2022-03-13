import { Component } from 'react';
import './card.styles.css';

const Card = (props) => {
    const {id, name, email} = props.monster;

    return(
        <div className="card-container">
            <img alt="monster" src={`https://robohash.org/${id}?set=set1&size=180x180`}></img>
            <h2> { name } </h2> 
            <p> { email }</p>
        </div>
    )
}

// class Card extends Component{ 
// render(){
//     const {id, name, email} = this.props.monster;
//     return(
//         <div className="card-container">
//             <img alt="monster" src={`https://robohash.org/${id}?set=set1&size=180x180`}></img>
//             <h2> { name } </h2> 
//             <p> { email }</p>
//         </div>
//     );}
// }

export default Card;