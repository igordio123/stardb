import React from 'react';
import './item-list.css'
import SwapiService from '../../services/SwapiService.js'
import Spinner from '../spinner/spinner.js'
class Items extends React.Component {


 swapiService = new SwapiService();

  state={
    peoplelist: null,
  };

  componentDidMount (){

    this.swapiService
      .getPeople()
      .then(people=>{

        this.setState({
          peopleList :people
      })
    })


  }


  renderPeopleList(arr){
    const a = arr.map (e=>{

      return (
        <li className="list-group-item" key={e.id} onClick={()=>{this.props.checkId(e.id)}}>{e.name}</li>
      )
    });
    return a
  }
  render() {

    const {peopleList} = this.state;

    if(!peopleList) {
      return <Spinner/>
    }
    const createLi =  this.renderPeopleList(peopleList);
    return (
    <div>
      <ul className='list-group'>
        {createLi}
      </ul>

    </div>
    )
  }

};


export default Items
