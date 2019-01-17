import React from 'react';
import ReactDOM from 'react-dom';
import Head from './components/header/header.js'
import Planets from './components/random-plane/random-planet.js'
import Persondetails from './components/person-details/person-details.js'
import Items from './components/item-list/item-list.js'
import './style.css'

class Index extends React.Component {
  state = {
    selectPerson : 1,
  };
 checkId = (id)=>{

    this.setState({
      selectPerson:id,
    })
  };
  render() {

    return (
      <div className='container'>
        <Head/>
        <Planets/>
        <div className='container inform'>
          <div className='row'>
            <div className="col-md-6">
              <Items checkId={this.checkId}/>

            </div>
            <div className="col-md-6"><Persondetails personId={this.state.selectPerson}/></div>
          </div>
        </div>
      </div>
    )
  };
}
ReactDOM.render(<Index/>,document.getElementById('root'))
