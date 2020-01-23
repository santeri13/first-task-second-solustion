import React, { Component } from 'react';
import './App.css';
import EnglishWeather from "./app_component/englishweather.component";
import EstonianWeather from "./app_component/estonianweather.component";
import RussianWeather from "./app_component/russianweather.component";
import {BrowserRouter as Router, Link} from 'react-router-dom';
import Route from 'react-router-dom/Route';


const API_key = "70ef752f790189546092172ed2cfc9a0";
class App extends Component{
  constructor(){
    super();
    this.state={
      city:undefined,
      celsius:undefined,
      error:false
    };
  }
  calCelsius(temp){
    let cell = Math.round(temp - 273.15);
    return cell;
  }

  getWeather = async (e) => {
    e.preventDefault();

    const city = e.target.elements.city.value;
    
    if(city){
      const api_call = await fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_key}`);

        const response = await api_call.json();
        console.log(response);

        this.setState({
        city:response.name,
        celsius:this.calCelsius(response.main.temp),
        error:false
      });
    }else{
      this.setState({error:true});
    }
  }
  changecolorhele(){
    document.body.style.background="gray";
  }
  changecolortume(){
    document.body.style.background="green";
  }
  render(){
    return (
      <Router>
      <div className="App">
        <ul>
          <li>
            <Link to ="/english">English</Link>
          </li>
          <li>
            <Link to="/estonian">Estonia</Link>
          </li>
          <li>
            <Link to="/russian">Russian</Link>
          </li>
        </ul>
          <Route path="/" exact strict render={
          () => {
            return(
            <EnglishWeather
            city={this.state.city} 
            temp_celsius={this.state.celsius} 
            loadweather={this.getWeather} 
            error={this.state.error}
            tume={this.changecolortume}
            hele={this.changecolorhele}/>);
          }
        }/>
        <Route path="/english" exact strict render={
          () => {
            return(
            <EnglishWeather
            city={this.state.city} 
            temp_celsius={this.state.celsius} 
            loadweather={this.getWeather} 
            error={this.state.error}
            tume={this.changecolortume}
            hele={this.changecolorhele}/>);
          }
        }/>
        <Route path="/estonian" exact strict render={
          () => {
            return(
            <EstonianWeather
            city={this.state.city} 
            temp_celsius={this.state.celsius} 
            loadweather={this.getWeather} 
            error={this.state.error}
            tume={this.changecolortume}
            hele={this.changecolorhele}/>);
          }
        }/>
        <Route path="/russian" exact strict render={
          () => {
            return(
            <RussianWeather
            city={this.state.city} 
            temp_celsius={this.state.celsius} 
            loadweather={this.getWeather} 
            error={this.state.error}
            tume={this.changecolortume}
            hele={this.changecolorhele}/>);
          }
        }/>
      </div>
      </Router>
    );
  }
}

export default App;
