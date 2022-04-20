import React from 'react';


class Collapse extends React.Component {

    //constructor'i siliyoruz. ayni isi yapiyor silersek de
    //constructor() {
        //super();

        //this.
        state = {
            showContent: false
        }
        /*1.yol
        this.showMore = () => {
        this.setState({showContent:false})
        }
        */
        /*2.yol
        this.showMore = this.showMore.bind(this)
        */


    //}
        //3.yol
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

    componentDidMount(){
        console.log('Component olusturuldu'); //3 tane Component olusturuldu verir
    }

    componentDidUpdate(){
        console.log('component güncellendi');//her tikladigimda component güncellendi veriyor.
    }


    render() {
        return (
            <div>
                <button className="btn btn-primary w-100" onClick={this.showMore}>
                    { console.log(this)} 
                    {/*this.props.children.props.cardTitle*/}
                    {React.Children.map(this.props.children, children => children.props.cardTitle)}
                </button>

                {
                    this.state.showContent ? (
                        <div className="collapse show" >
                            {/*this.props.children*/}
                            {React.Children.map(this.props.children, children => children)}
                        </div>
                    ) : null
                }

            </div>
        );

    }

};

export default Collapse
