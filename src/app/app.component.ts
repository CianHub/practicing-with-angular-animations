import { Component } from "@angular/core";
import { trigger, state, style } from "@angular/animations";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  animations: [
    trigger("divState", [
      state(
        "normal",
        style({ backgroundColor: "red", transform: "translateX(0)" })
      ),
      state(
        "highlighted",
        style({ backgroundColor: "yellow", transform: "translateX(100px)" })
      )
    ])
  ]
})
export class AppComponent {
  state = "normal";
  list = ["Milk", "Sugar", "Bread"];

  onAdd(item) {
    this.list.push(item);
  }
}
