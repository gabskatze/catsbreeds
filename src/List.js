import React from 'react';
import './styles/list.css';
import items from './items';


class List extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            selectedObject: null,
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleChange(event) {
        this.setState(
            {
                value: event.target.value
            }
        );
    }

    handleClick(e) {
        const id = e.target.getAttribute('data-id');
        const myDataClicked = items.find((item) => {
            return parseInt(id, 10) === item.id;
        });
    
        this.setState({
            selectedObject: myDataClicked
        });
    }

    render(){
        const listFilter = items.filter(
            item => this.state.value !== '' ?
            item.breed.toLowerCase().includes(this.state.value.toLowerCase()):
            true
            );
        const listOptions = listFilter.map((item, i) => 
        <div key={i} className="col-4 pbl">     
            <img data-id={item.id} src={item.image} className="img-zoom img-thumbnail"
                 alt="cat" height="250px" width="250px"
                 onClick={this.handleClick}
            >
            </img>
            <p className="font-weight-bold text-center">{item.breed}</p>
        </div>
        );

        let card;
        
        if(this.state.selectedObject !== null){
            card = <div className="card mtl">
                        <img className="card-img-top" src={this.state.selectedObject.image} alt="Card image cap"></img>
                        <div className="card-body">
                            <h3 className="card-title text-center">
                                {this.state.selectedObject.breed}
                            </h3>
                            <hr />
                            <p className="card-text">
                                {this.state.selectedObject.behavior}
                            </p>
                        </div>
                    </div>;
        }
        return (
            <div className="container">
                <div className="row">
                    <div className="col-9">
                        <div className="row ptl">
                         {listOptions}
                        </div>
                    </div>
                    <div className="col-3 ptl">
                        <div className="card no-border">
                            <input className="form-control col-xs-9" type="text"
                                value={this.state.value} onChange={this.handleChange} placeholder="Search..."
                            >
                            </input>
                        </div>
                        {card}
                    </div>
                </div>   
            </div>          
        );
    }
    
} 

export default List;
