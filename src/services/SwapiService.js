class SwapiService  {



  async getBody(url){
    const res = await fetch(url);
    if(!res.ok){
      throw new Error(res.status)
    }
    return await res.json()


  };
 async getPeople(){
    const people = await this.getBody("https://swapi.co/api/people/");
    return await people.results.map(this._transformPeople)
  };
  async getPerson(id){
    const people = await this.getBody(`https://swapi.co/api/people/${id}/`);
    return await this._transformPeople(people)
  };
  async getStarShips(){
    const  res = await this.getBody("https://swapi.co/api/starships/");
    return res.results

  };
  async getStarShip(){
    const  res = await this.getBody(`https://swapi.co/api/starships/`);
    return this._transformPlanet(res)

  };



  async getPlanets(){
 const planets = await this.getBody("https://swapi.co/api/planets/");
 return planets.results.map(this._transformPlanet());
  }



  async getPlanet(id){
    const planet = await this.getBody(`https://swapi.co/api/planets/${id}/`);
    return this._transformPlanet(planet)
  }


  getId = (item) =>{
    const idRegExp = /\/([0-9]*)\/$/;

    return item.url.match(idRegExp)[1];
  };
  _transformPlanet= (res)=>{

    return{
      id:this.getId(res),
      name:res.name,
      population :res.population,
      Diameter:res.diameter,
      RotationPeriod:res.rotation_period
    }
  };

  _transformPeople = (res)=>{

    return{
      id:this.getId(res),
      gender:res.gender,
      BirthYear:res.birth_year,
      name:res.name,
      eyecolor: res.eye_color,
    }
  }
}
export default SwapiService





