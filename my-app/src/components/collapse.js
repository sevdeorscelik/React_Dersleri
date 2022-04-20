import React from 'react';


class Collapse extends React.Component {

    constructor() {
        super();

        this.state = {
            showContent: true
        }
        /*1.yol
        this.showMore = () => {
        this.setState({showContent:false})
        }
        */
        /*2.yol
        this.showMore = this.showMore.bind(this)
        */


    }

    showMore = () => {
       //this burada calisir
       this.setState({showContent:!this.state.showContent})
       //neden direkt this.state=false yapmiyoruz. Cünkü setState kullanilinca otomarik oalrak render calisir ve degisiklik yüklenir. Ancak direkt state degistirmek istersek bu gerceklesmez
    }

    /*
    showMore(){ 
       this.setState({showContent:false})
       burada this calismaz.Ya 12. satirdaki gibi constructor icine yazilmali ya da17. satirdaki gibi bind ile thisi esitlemeliyiz.
    }
    */


    render() {
        return (
            <div>
                <button className="btn btn-primary w-100" onClick={this.showMore}>
                    Link with href
                </button>

                {
                    this.state.showContent ? (
                        <div className="collapse show" >
                            {this.props.children}

                        </div>
                    ) : null
                }

            </div>
        );

    }

};

export default Collapse
