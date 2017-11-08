import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	detailsFlag = false
	detailsToggle(){
		this.detailsFlag = !this.detailsFlag
	}
	ClickArray = []
	addedClicks(){
		this.ClickArray.push(new Date())
	}
}
