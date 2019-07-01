import React, { Component } from 'react';
import dl from './dulieu.json';
class NewDetails extends Component {
    render() {
        console.log(this.props.match.params.id);
        return (
            <div>
            <h3>ahahaha</h3>
            {
                    dl.map((value, key) => {

                        if (value.id === parseInt(this.props.match.params.id,20) ) {
                            return (
                                <ul className="list-unstyled">
                                    <li className="media">
                                        <img src={value.picture} className="mr-3" alt="for react router" />
                                        <div className="media-body">
                                            <h3 className="mt-0 mb-1">{value.title}</h3>
                                            <p>{value.content}</p>
                                        </div>
                                    </li>
                                </ul>
                            )
                        }
                            return true;    
                    })
            }
               
            </div>
        
        );
    }
}

export default NewDetails;