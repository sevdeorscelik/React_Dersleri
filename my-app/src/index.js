import React from 'react'
import ReactDOM from 'react-dom'

import Card from './components/card.js'
import Collapse from './components/collapse.js';


const App = () => {
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
    <App />,
    document.getElementById('root')
)

