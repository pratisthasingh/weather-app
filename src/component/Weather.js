import React from "react";
import SimpleModal from './SimpleModal';
import { Link, withRouter } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const Weather = (props) => (
	console.log(props),
	<div className="card">
		{	props.city && props.country && 
			<img src = {'http://openweathermap.org/img/w/'+props.icon+'.png'} alt= {props.icon}/>
		}
		{	
	 	props.city && props.country && <p className="weather__key"> Date: 
	 		<span className="weather__value"> { props.date }</span>
	 	</p> 
	 }
	 {	
	 	props.city && props.country && <p className="weather__key"> Location: 
	 		<span className="weather__value"> { props.city }, { props.country }</span>
	 	</p> 
	 }
	 { 	
	 	props.maxTemperature && <p className="weather__key"> maxTemperature: 
	 		<span className="weather__value"> { props.maxTemperature }	</span>
	 	</p> 
	 }
	 { 	
	 	props.minTemperature && <p className="weather__key"> minTemperature: 
	 		<span className="weather__value"> { props.minTemperature }	</span>
	 	</p> 
	 }
	 { 	
	 	props.humidity && <p className="weather__key"> Humidity: 
	 		<span className="weather__value"> { props.humidity } </span>
	 	</p> 
	 }
	 { 	
	 	props.description && <p className="weather__key"> Conditions: 
	 		<span className="weather__value"> { props.description } </span>
	 </p> 
	 }
	 { 
		 props.error && <p className="weather__error">{ props.error }</p>  
		 
	 }

	 {
		 props.city && props.country &&
		 <Link to={{ 
            pathname: '/hourly', 
            state: { props: props.hourly } }}>Show Hourly Forecast
		</Link>
	 }
	 
	</div>
);
export default withRouter(Weather);