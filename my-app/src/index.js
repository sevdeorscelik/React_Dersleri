import React from 'react'
import ReactDOM from 'react-dom'


//functional component

function App() {
    return <h1>Benim Adim Sevde</h1>;
}

//componentimizi sayfada görebilmek icin ReactDOM'a ait render methodunu kullanmaliyiz


ReactDOM.render( 
    <App />,  //neyi göstermek istedigmizi yazariz
    document.getElementById('root')  //nerede görmek istedigimizi yazariz
);
