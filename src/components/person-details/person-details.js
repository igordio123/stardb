import React from 'react';
import './person-details.css'
import SwapiService from '../../services/SwapiService.js'



class Persondetails extends React.Component {

  swapiInf  = new SwapiService();


  state = {
    person : null
  };







 updatePersone = ()=>{
   const {personId} = this.props;
 this.swapiInf.getPerson(personId)
    .then( (person)=>{

      this.setState({
        person
      });

  })
};




  render() {
      this.updatePersone()
    const {person} = this.state;

console.log(person.name)



    return (
      <div className="preson-details ">
        <div className="row main-person">
          <div className='img-person'>
            <img src='https://starwars-visualguide.com./assets/img/characters/5.jpg' />
          </div>
          <div className='about-person'>
            <h4></h4>
            <ul className='list-group-flush'>
              <li className='list-group-item'>
                <span>Birth Year :</span><span></span>
              </li>

              <li className='list-group-item'>
                <span>Gender :</span><span></span>
              </li>
              <li className='list-group-item'>
                <span>eyecolor :</span><span></span>
              </li>

            </ul>
          </div>
        </div>
      </div>
    )
  };
}
export default Persondetails
