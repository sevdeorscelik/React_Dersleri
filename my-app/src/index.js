import React from 'react'
import ReactDOM from 'react-dom'


//functional component-----------------------------------------------------------------------------------

function App1() {
    return <h1>Bu bir funktional component</h1>;
}

//componentimizi sayfada görebilmek icin ReactDOM'a ait render methodunu kullanmaliyiz


ReactDOM.render( 
    <App1 />,  //neyi göstermek istedigmizi yazariz
    document.getElementById('root1')  //nerede görmek istedigimizi yazariz
);

//class component------------------------------------------------------------------------------------------

class App2 extends React.Component {
    render() {
        return <h1>Bu bir class componenttir</h1>
    }
}

ReactDOM.render( 
    <App2 />,  //neyi göstermek istedigmizi yazariz
    document.getElementById('root2')  //nerede görmek istedigimizi yazariz
);
