import React from 'react';
import Card from '@material-ui/core/Card';
import List from '@material-ui/core/List';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItem from '@material-ui/core/ListItem';
import CardContent from '@material-ui/core/CardContent'

class SimpleModal extends React.Component {
  state = {
    date_time : [],
    minTemperature : [],
    maxTemperature : [],
    pressure : [],
    humidity : [],
    description : [],
    icon : []
  }

  render() {
      const data = this.props.location.state.props;
      for(var i=0;i<8;i++)
      {
        this.state.date_time.push(data[i].dt_txt);
        this.state.minTemperature.push(data[i].main.temp_min);
        this.state.maxTemperature.push(data[i].main.temp_max);
        this.state.pressure.push(data[i].main.pressure);
        this.state.humidity.push(data[i].main.humidity);
        this.state.description.push(data[i].weather[0].description);
        this.state.icon.push(data[i].weather[0].icon);
      }
      
  const time = this.state.date_time.map(t => {
        return (
          <pre>{t}</pre>
        )
      })
      const minTemperature = this.state.minTemperature.map(t => {
        return (
          <pre> {t}</pre>
        )
      })
      const maxTemperature = this.state.maxTemperature.map(t => {
        return (
          <pre>{t}</pre>
        )
      })
      const pressure = this.state.pressure.map(t => {
        return (
          <pre>{t}</pre>
        )
      })
      const humidity = this.state.humidity.map(t => {
        return (
          <pre>{t}</pre>
        )
      })
      const description = this.state.description.map(t => {
        return (
          <pre>
          {t}
          </pre>
        )
      })
      const icon = this.state.icon.map(t => {
        return (
          
          <ListItemIcon><img src={'http://openweathermap.org/img/w/'+t+'.png'} /> </ListItemIcon>
          
        )
      })
      

      
      console.log("forecast data ",this.state);
      return (
        <div className="forecast-container" style={{flex:1}}>

          <div>
              <Card className="card">
                    date and time
                    <CardContent style={{flex:1}}>
                    <List>
                      {time}
                    </List>
                  </CardContent>
              </Card>
        </div>
        
        <div>
            <Card className="card">
                    min Temp (c)
            <CardContent style={{flex:1}}>
                  <List>
                    {minTemperature}
                  </List>
                </CardContent>
            </Card>
        </div>

          <div>
            <Card className="card">
              max Temp (c)
                  <CardContent style={{flex:1}}>
                  <List>
                    {maxTemperature}
                  </List>
                </CardContent>
              </Card>
          </div>

            <div>
            <Card className="card">
              pressure
                  <CardContent style={{flex:1}}>
                  <List>
                    {pressure}
                  </List>
                </CardContent>
              </Card>
            </div>

            <div>
              <Card className="card">
                humidity
                    <CardContent style={{flex:1}}>
                    <List>
                      {humidity}
                    </List>
                  </CardContent>
                </Card>
            </div>

            <div>
            <Card className="card">
              description
                  <CardContent style={{flex:1}}>
                  <List>
                    {description}
                  </List>
                </CardContent>
              </Card>
            </div>
            <div>
            <Card className="card">
              Icons
                  <CardContent className="icon">
                  <List>
                    {icon}
                  </List>
                </CardContent>
              </Card>
            </div>

        </div>

      );
    }
}
export default SimpleModal;