import React from 'react';
import './random-planet.css'
import SwapiService from '../../services/SwapiService.js'
import Spinner from '../spinner/spinner.js'
import Error from '../error/error.js'


class Planets extends React.Component{


  swapiInf = new SwapiService();
  state ={
    planet:{},
    loading :true,
    error:false


  };


  constructor(props) {
    super(props);
    setInterval(()=>{this.updatePlanet()} ,5000);


  };


  updatePlanet = ()=>{
    const id = Math.floor(Math.random()*26);

    this.swapiInf.getPlanet(id)
      .then(planet=>{
  this.setState({
    planet,
    loading :false

  })

    }).catch(err =>{
          this.setState({
            loading:false,
            error: true,
          });
    })
  };






  render() {

    const {planet, loading,error} = this.state;
    const load = loading ? <Spinner/> : null;
    const comp = !(loading || error) ? <PlanetView planet={planet}/> : null;
    const showError = error ? <Error/> : null;



    return (

      <div className="random-planet ">

        <div className="row main-planet">
          {showError}
          {load}
          {comp}


        </div>
      </div>
    )
  }

}
  const PlanetView = ({planet})=>{
  const{id,population,RotationPeriod,Diameter,name} = planet;
  return (
    <React.Fragment>

      <div className='img-planet'>
        <img src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg` } alt="pictures"/>
      </div>
      <div className='planet-person'>
        <h4>{name}</h4>
        <ul className='list-group-flush'>
          <li className='list-group-item'>
            <span>Population:</span><span>{population
          }</span>
          </li>
          <li className='list-group-item'>
            <span>RotationPeriod :</span><span>{RotationPeriod}</span>
          </li>
          <li className='list-group-item'>
            <span>Diameter :</span><span>{Diameter}</span>
          </li>


        </ul>
      </div>
    </React.Fragment>
  )
};


export default Planets




