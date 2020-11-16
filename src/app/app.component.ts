import { Component, VERSION } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  name = "Angular " + VERSION.major;

    public numbers = [1,2,3,4,5,6,7,8,9,10]; 
    public titel = 'hoi hoi';
  
  constructor() {
     
  }
}
