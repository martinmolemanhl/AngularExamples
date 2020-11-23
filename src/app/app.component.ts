import { Component, VERSION } from "@angular/core";
import { Fruit } from "./fruit";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  name = "Angular " + VERSION.major;

  /*
  public fruits = [
    "Apple",
    "Orange",
    "Pineapple",
    "Banana",
    "Papaya",
    "Watermelon"
  ];
*/

  //public fruit: Array<Fruit>;
  public fruits: Fruit[];
  public selectedFruit: Fruit;

  constructor() {
    // this.fruit = new Array<Fruit>();
    this.fruits = [];
    // this.selectedFruit = undefined; --> dit is de default value van een variabele.

    this.fruits.push(new Fruit("Apple", "Green"));
    this.fruits.push(new Fruit("Orange", "Orange"));
    this.fruits.push(new Fruit("Pineapple", "Yellow/Green"));
    this.fruits.push(new Fruit("Banana", "Yellow"));
    this.fruits.push(new Fruit("Papaya", "Lightgreen"));
    this.fruits.push(new Fruit("Watermelon", "Green"));
  }

  handleClickEvent(event: MouseEvent, fruit: Fruit): void {
    this.selectedFruit = fruit;
  } // handleClickEvent()
}
