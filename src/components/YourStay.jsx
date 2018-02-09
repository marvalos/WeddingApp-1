// January 28, 2018
// Your Stay Component

import React, { Component } from 'react';
import { Grid, Col, Row } from 'react-bootstrap';
import yourstayStyle from '../../style/06-yourstay.css';
import { 
	NativoLodge, 
	MarriottPyramid,
	CourtyardMarriott,
	StaybridgeSuites,
	SandiaCasino,
	HyattTamaya
} from '../../img/hotels/indexPhotos';

const hotelsArray = [
	{
		name: 'Marriott Pyramid',
		img: '/images/MarriottPyramid.jpg',
		url: 'http://bit.ly/19Swcb8',
		address1: '5151 San Francisco Rd. NE',
		address2: 'Albuquerque, NM 87109',
		phone: '505-821-3333',
		distance: '4.0 miles'
	},
	{
		name: 'Courtyard Albuquerque',
		img: '/images/CourtyardMarriott.jpg',
		url: 'http://bit.ly/2GLve8H',
		address1: '5151 Journal Center Blvd. NE',
		address2: 'Albuquerque, NM 87109',
		phone: '505-823-1919',
		distance: '4.0 miles'
	},
	{
		name: 'Staybridge Suites North',
		img: '/images/StaybridgeSuites.jpg',
		url: 'http://bit.ly/2BV9ELa',
		address1: '5817 Signal Ave. NE',
		address2: 'Albuquerque, NM 87113',
		phone: '505-266-7829',
		distance: '4.7 miles'
	},
	{
		name: 'Nativo Lodge',
		img: 'images/NativoLodge.jpg',
		url: 'http://www.nativolodge.com/',
		address1: '6000 Pan American Freeway NE',
		address2: 'Albuquerque, NM 87109',
		phone: '505-798-4300',
		distance: '6.0 miles'
	},
	{
		name: 'Sandia Resort & Casino',
		img: '/images/SandiaCasino.jpg',
		url: 'http://www.sandiacasino.com/hotel/',
		address1: '30 Rainbow Rd. NE',
		address2: 'Albuquerque, NM 87113',
		phone: '505-796-7500',
		distance: '6.3 miles'
	},
	{
		name: 'Hyatt Regency Tamaya Resort & Spa',
		img: '/images/HyattTamaya.jpg',
		url: 'http://bit.ly/2k76vCY',
		address1: '1300 Tuyuna Trail',
		address2: 'Santa Ana Pueblo, NM 87004',
		phone: '505-867-1234',
		distance: '16.0 miles'
	}
]


const YourStay = () => {

	const hotelItems = hotelsArray.map((hotel,index) => {
		return (
			<Row key={ index } className="rowDetail">
				<Col xs={4} md={4} lg={4}>
					<div className="photoDetail">
						<a href={ hotel.url } target="_blank">
							<img
							     src = { hotel.img }
							     alt = { hotel.name } />
					    </a>
				    </div>
				</Col>
				<Col xs={8} md={8} lg={8}>
					<div className="hotelDetail">
						<h2>{ hotel.name }</h2>
						<a href= { hotel.url } target="_blank" className="weblink">
							{ hotel.url }
						</a>
						<h3>{ hotel.address1 }</h3>
						<h3>{ hotel.address2 }</h3>
						<h4>{ hotel.phone }</h4>
						<h4>{ hotel.distance }</h4>
					</div>
				</Col>
			</Row>
		);

	});

	return (
		<div className={ yourstayStyle }>
			<Grid className = "gridContainer">
				{ hotelItems }
			</Grid>
		</div>
	);
}

export default YourStay;