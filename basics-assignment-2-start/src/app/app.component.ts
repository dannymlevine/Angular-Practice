import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	username = '';

	isEmptyString(){
		if(this.username == '' || null){
			return true
		}
		else{
            return false
		}
	}

}
