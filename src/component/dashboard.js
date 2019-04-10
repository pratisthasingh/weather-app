import React from "react";
import Form from "./Form";
import Weather from './Weather'
import { Link } from 'react-router-dom';
import Card from '@material-ui/core/Card';

import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';


const API_KEY = "79495555ee6399e54d91c7e61168e2a4";


class dashboard extends React.Component {
  state = {
    city: undefined,
    country: undefined,
    error: undefined,
    day1: {
      icon: undefined,
      list:{
        date : undefined,
        description: undefined,
        grnd_level: undefined,
        humidity: undefined,
        pressure: undefined,
        sea_level: undefined,
        temp: undefined,
        temp_kf: undefined,
        maxTemperature: undefined,
        minTemperature: undefined
                  },
      hourly: undefined
    },
    day2: {
      icon: undefined,
      list:{
        date : undefined,
        description: undefined,
        grnd_level: undefined,
        humidity: undefined,
        pressure: undefined,
        sea_level: undefined,
        temp: undefined,
        temp_kf: undefined,
        maxTemperature: undefined,
        minTemperature: undefined
                  },
      hourly: undefined
    },
    day3: {
      icon: undefined,
      list:{
        date : undefined,
        description: undefined,
        grnd_level: undefined,
        humidity: undefined,
        pressure: undefined,
        sea_level: undefined,
        temp: undefined,
        temp_kf: undefined,
        maxTemperature: undefined,
        minTemperature: undefined
                  },
      hourly: undefined
    },
    day4: {
      icon: undefined,
      list:{
        date : undefined,
        description: undefined,
        grnd_level: undefined,
        humidity: undefined,
        pressure: undefined,
        sea_level: undefined,
        temp: undefined,
        temp_kf: undefined,
        maxTemperature: undefined,
        minTemperature: undefined
                  },
      hourly: undefined
    },
    day5: {
      icon: undefined,
      list:{
        date : undefined,
        description: undefined,
        grnd_level: undefined,
        humidity: undefined,
        pressure: undefined,
        sea_level: undefined,
        temp: undefined,
        temp_kf: undefined,
        maxTemperature: undefined,
        minTemperature: undefined
                  },
      hourly: undefined
    }
  }
  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${city},${country}&appid=${API_KEY}&units=metric`);
    const data = await api_call.json();
    console.log("data is",data);
    const list = data.list;
    const l = list.length;
    console.log(l);
    let h = []
    for(var i=0;i<l;i+=8)
    {
      let v = []
      for(var j=i;j<i+8;j++)
      {
        v.push(list[j])   
      }
      h.push(v)
    }
    console.log("h is ",h);
    // console.log("hey",h[0][0].temp);
    if (city && country) {
      // for(var i=0;i<list.length;i+8)
      // {
        this.setState({
          city: data.city.name,
          country: data.city.country,
          error: "",
          day1: {
            icon: data.list[0].weather[0].icon,
            list:{
              date : data.list[0].dt_txt,
              description: data.list[0].weather[0].description,
              humidity: data.list[0].main.humidity,
              temp: data.list[0].main.temp,
              maxTemperature: data.list[0].main.temp_max,
              minTemperature: data.list[0].main.temp_min
                        },
            hourly: h[0]
          },
          day2: {
            icon: data.list[8].weather[0].icon,
            list:{
              date : data.list[8].dt_txt,
              description: data.list[8].weather[0].description,
              humidity: data.list[8].main.humidity,
              temp: data.list[8].main.temp,
              maxTemperature: data.list[8].main.temp_max,
              minTemperature: data.list[8].main.temp_min
                        },
            hourly: h[1]
          },
          day3: {
            icon: data.list[16].weather[0].icon,
            list:{
              date : data.list[16].dt_txt,
              description: data.list[16].weather[0].description,
              humidity: data.list[16].main.humidity,
              temp: data.list[16].main.temp,
              maxTemperature: data.list[16].main.temp_max,
              minTemperature: data.list[16].main.temp_min
                        },
            hourly: h[2]
          },
          day4: {
            icon: data.list[24].weather[0].icon,
            list:{
              date : data.list[24].dt_txt,
              description: data.list[24].weather[0].description,
              humidity: data.list[24].main.humidity,
              temp: data.list[24].main.temp,
              maxTemperature: data.list[24].main.temp_min,
              minTemperature: data.list[24].main.temp_max,
                        },
              hourly: h[3]
          },
          day5: {
            icon: data.list[32].weather[0].icon,
            list:{
              date : data.list[32].dt_txt,
              description: data.list[32].weather[0].description,
              humidity: data.list[32].main.humidity,
              temp: data.list[32].main.temp,
              maxTemperature: data.list[32].main.temp_min,
              minTemperature: data.list[32].main.temp_max
                        },
            hourly: h[4]
          }, 
        });
      // }
    }
  }

  render() {
    console.log("props",this.props);
    console.log("this ",this.state.day1.hourly);
    return (
      <div className="form-container">
          <Form getWeather={this.getWeather} />
      <Grid container spacing={24}>
        <Grid item xs={4}>
        <Card>
                  
                <CardContent>
                    Day 1
                  <Weather data = {this.data}
                                      icon = {this.state.day1.icon}
                                      date = {this.state.day1.list.date}
                                      maxTemperature={this.state.day1.list.maxTemperature} 
                                      minTemperature={this.state.day1.list.minTemperature}
                                      humidity={this.state.day1.list.humidity}
                                      city={this.state.city}
                                      temp={this.state.day1.list.temp}
                                      country={this.state.country}
                                      description={this.state.day1.list.description}
                                      hourly = {this.state.day1.hourly}
                                      error={this.state.error}
                                    />
                                    
                </CardContent>
                </Card>
        </Grid>

        <Grid item xs={4}>
        <Card>
              <CardContent>
                  Day 2
                <Weather data = {this.data}
                                    icon = {this.state.day2.icon}
                                    date = {this.state.day2.list.date}
                                    maxTemperature={this.state.day2.list.maxTemperature} 
                                    minTemperature={this.state.day2.list.minTemperature}
                                    humidity={this.state.day2.list.humidity}
                                    city={this.state.city}
                                    temp={this.state.day2.list.temp}
                                    country={this.state.country}
                                    description={this.state.day2.list.description}
                                    hourly = {this.state.day2.hourly}
                                    error={this.state.error}
                                  />
              </CardContent>
              </Card>
        </Grid>

        <Grid item xs={4}>
        <Card>
              <CardContent>
                  Day 3
                <Weather data = {this.data}
                                    icon = {this.state.day3.icon}
                                    date = {this.state.day3.list.date}
                                    maxTemperature={this.state.day3.list.maxTemperature} 
                                    minTemperature={this.state.day3.list.minTemperature}
                                    humidity={this.state.day3.list.humidity}
                                    city={this.state.city}
                                    temp={this.state.day3.list.temp}
                                    country={this.state.country}
                                    description={this.state.day3.list.description}
                                    hourly = {this.state.day3.hourly}
                                    error={this.state.error}
                                  />
              </CardContent>
              
              </Card>
        </Grid>
        <Grid item xs={4}>
        <Card>
              <CardContent>
                  Day 4
                <Weather data = {this.data}
                                    icon = {this.state.day4.icon}
                                    date = {this.state.day4.list.date}
                                    maxTemperature={this.state.day4.list.maxTemperature} 
                                    minTemperature={this.state.day4.list.minTemperature}
                                    humidity={this.state.day4.list.humidity}
                                    city={this.state.city}
                                    temp={this.state.day4.list.temp}
                                    country={this.state.country}
                                    description={this.state.day4.list.description}
                                    hourly = {this.state.day4.hourly}
                                    error={this.state.error}
                                  />
              </CardContent>
              
              </Card>
        </Grid>
        <Grid item xs={4}>
        <Card>
                <CardContent>
                    Day 5
                  <Weather data = {this.data}
                                      icon = {this.state.day5.icon}
                                      date = {this.state.day5.list.date}
                                      maxTemperature={this.state.day5.list.maxTemperature} 
                                      minTemperature={this.state.day5.list.minTemperature}
                                      humidity={this.state.day5.list.humidity}
                                      city={this.state.city}
                                      temp={this.state.day5.list.temp}
                                      country={this.state.country}
                                      description={this.state.day5.list.description}
                                      hourly = {this.state.day5.hourly}
                                      error={this.state.error}
                                    />
                </CardContent>
                
                </Card>
        </Grid>
      </Grid>
      
      </div>
    );
  }
};

export default dashboard;