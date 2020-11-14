import { Component, VERSION } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  name = "Angular " + VERSION.major;
  public fruit: string[] = [];

  constructor() {
    this.fruit.push("Apple");
    this.fruit.push("Orange");
    this.fruit.push("Banana");
    this.fruit.push("Pineapple");
  }
}
