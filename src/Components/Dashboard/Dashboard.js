import React, {Component} from 'react'

export default class Dashboard extends Component{



    render(props){
        return(
        <div>
            {this.props.inventory.map(elem=>{
                return(
                    <div>
                        elem.
                    </div>
                )
            })}
        </div>
        )
    }
}