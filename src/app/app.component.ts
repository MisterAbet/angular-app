import { Component } from '@angular/core';
// import '../../public/css/styles.css';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
	items = [
	 {
	 	id: '1',
	 	vin: '1234124124',
	 	year: '2008',
	 	brand: 'apple'
	 },{
	 	id: '2',
	 	vin: '1234124124',
	 	year: '2008',
	 	brand: 'apple'
	 }
	]
}