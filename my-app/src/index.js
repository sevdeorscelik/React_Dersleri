import React from 'react'
import ReactDOM from 'react-dom'

import Card from './components/card.js'
import Collapse from './components/collapse.js';

/*
<div class="container">
  <div class="row">
    <div class="col">
      1 of 2
    </div>
    <div class="col">
      2 of 2
    </div>
  </div>
  <div class="row">
    <div class="col">
      1 of 3
    </div>
    <div class="col">
      2 of 3
    </div>
    <div class="col">
      3 of 3
    </div>
  </div>
</div>
*/

const App = () => {
    return (
        <div className='container'>
            <div className='row'>
                <div className="card-group w-100">
                    <div className='col'>
                        <Collapse href="collapseExample1">

                            < Card cardTitle="Card Title 1"
                                cardText="Lorem Ipsum Text 1"
                                updatedTime="Last Updates 1 min ago"
                                image="https://picsum.photos/id/24/200/300"
                            />

                        </Collapse>
                    </div>
                    <div className='col'>
                        <Collapse href="collapseExample2">

                            < Card cardTitle="Card Title 2"
                                cardText="Lorem Ipsum Text 2"
                                updatedTime="Last Updates 2 min ago"
                                image="https://picsum.photos/id/65/200/300"
                            />

                        </Collapse>
                    </div>
                    <div className='col'>
                        <Collapse href="collapseExample3">

                            < Card cardTitle="Card Title 3"
                                cardText="Lorem Ipsum Text 3"
                                updatedTime="Last Updates 3 min ago"
                                image="https://picsum.photos/id/1050/200/300"
                            />

                        </Collapse>
                    </div>
                </div>
            </div>
        </div>
    )
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
)

