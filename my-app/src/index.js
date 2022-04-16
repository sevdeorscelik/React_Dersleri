import React from 'react'
import ReactDOM from 'react-dom'

import Card from './components/card.js'
import Collapse from './components/collapse.js';


//functional component-----------------------------------------------------------------------------------

function App1() {
    return <h1>Bu bir funktional component</h1>;
}

//componentimizi sayfada görebilmek icin ReactDOM'a ait render methodunu kullanmaliyiz

ReactDOM.render(
    <App1 />,  //neyi göstermek istedigmizi yazariz
    document.getElementById('root1')  //nerede görmek istedigimizi yazariz
);


/********************************************************************

//class component------------------------------------------------------------------------------------------

class App2 extends React.Component {
    render() {
        return <h1>Bu bir class componenttir</h1>
    }
}

ReactDOM.render( 
    <App2 />,  
    document.getElementById('root2')  
);

************************************************************************/


//JSX  - syntax extension to js -------------------------------------------------------

const names = ['Sevde', 'Semih', 'Misha']

function App3() {
    return ( // jsx yapisini düzenli olarak döndürebilmek icin hepsini tek bir parent elemente koyariz
        <div>
            {names.map(name => (<h3> - {name} </h3>))}
        </div>

    );
}

ReactDOM.render(
    <App3 />,
    document.getElementById('root3')
);


// JSX ile style ----------------------------------------------------------------------
//stil özelliklerini verirken html gibi atribut seklinde yazabilirz, ancak object seklinde yazariz
//class ismi className seklinde verilir

function App4() {

    const buttonValue = 'My Jsx Button'
    return (
        <div>
            <button className='jsxClass' tabIndex="2" type="button" style={{ padding: '10px', backgroundColor: 'pink', color: 'gray', border: '2px solid brown' }}>{buttonValue}</button>
        </div>
    );
}

ReactDOM.render(
    <App4 />,
    document.getElementById('root4')
);


//PROPS ----------------------------------------------------------------
//componentler arasinda veri alisverisi proplar ile gerceklesir. Bu verileri parent'ta belirleriz, child'a kullaniriz. Yani veri akisi parent'tan child'a olur

//***bu noktada bootstarp ekledik***//

const App5 = () => {
    return (
        <div>
            <div className="card-group">

                <Collapse href="collapseExample1">

                    < Card cardTitle="Card Title 1"
                        cardText="Lorem Ipsum Text 1"
                        updatedTime="Last Updates 1 min ago"
                        image="https://picsum.photos/id/14/200"
                    />

                </Collapse>
                <Collapse href="collapseExample2">

                    < Card cardTitle="Card Title 2"
                        cardText="Lorem Ipsum Text 2"
                        updatedTime="Last Updates 2 min ago"
                        image="https://picsum.photos/id/250/200"
                    />

                </Collapse>
                <Collapse href="collapseExample3">

                    < Card cardTitle="Card Title 3"
                        cardText="Lorem Ipsum Text 3"
                        updatedTime="Last Updates 3 min ago"
                        image="https://picsum.photos/id/1050/200"
                    />

                </Collapse>

            </div>
        </div>
    )
}

ReactDOM.render(
    <App5 />,
    document.getElementById('root5')
)

