import React from 'react';

/*
const Card = (props) => {
    
    return (

        <div className="card w-100">
            <img src={props.image} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title"> {props.cardTitle} </h5>
                <p className="card-text"> {props.cardText} </p>
                <p className="card-text"><small className="text-muted"> {props.updatedTime} </small></p>
            </div>
        </div>
    );
};

export default Card*/

//yukaridaki functional componenti class componente cevirelim:

class Card extends React.Component {
    render(){
        return (
    
            <div className="card w-100">
                <img src={this.props.image} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title"> {this.props.cardTitle} </h5>
                    <p className="card-text"> {this.props.cardText} </p>
                    <p className="card-text"><small className="text-muted"> {this.props.updatedTime} </small></p>
                </div>
            </div>
        );
    }
};

//eger ki bir cardTitle degerine ualsilamazsa default olarak verilecek degeri belirleriz:
Card.defaultProps = {
    cardTitle: 'Default Card Title'
}

export default Card


//functional component ve class component farki//
/*

function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
  }

class Welcome extends React.Component {
    render() {
      return <h1>Hello, {this.props.name}</h1>;
    }
  }

*/