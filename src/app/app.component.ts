import { Component, VERSION } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  name = "Angular " + VERSION.major;

  public fruits = [
    "Apple",
    "Orange",
    "Pineapple",
    "Banana",
    "Papaya",
    "Watermelon"
  ];

  constructor() {}

  handleClickEvent(event: MouseEvent, fruit: string): void {
    console.log(fruit);
  } // handleClickEvent()
}
