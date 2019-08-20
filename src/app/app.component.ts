import { Component } from "@angular/core";
import {
  trigger,
  state,
  style,
  transition,
  animate
} from "@angular/animations";

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
      ),
      transition("normal => highlighted", animate(300)),
      transition("highlighted => normal", animate(500))
    ]),
    trigger("newDivState", [
      state(
        "normal",
        style({ backgroundColor: "red", transform: "translateX(0)" })
      ),
      state(
        "highlighted",
        style({ backgroundColor: "yellow", transform: "translateX(100px)" })
      ),
      state(
        "shrunken",
        style({
          backgroundColor: "green",
          transform: "translateX(0px) scale(0.5)"
        })
      ),
      transition("normal => highlighted", animate(200)),
      transition("highlighted => normal", animate(800)),
      transition("shrunken <=> *", [
        style({ backgroundColor: "orange" }),
        animate(1000, style({ borderRadius: "50px" })),
        animate(500)
      ])
    ]),
    trigger("list1", [
      state("in", style({ opacity: "1", transform: "translateX(0)" })),
      transition("void => *", [
        style({ opacity: "0", transform: "translateX(-100px)" }),
        animate(300)
      ])
    ])
  ]
})
export class AppComponent {
  state = "normal";
  newState = "normal";

  list = ["Milk", "Sugar", "Bread"];

  onAnimate() {
    this.state == "normal"
      ? (this.state = "highlighted")
      : (this.state = "normal");

    this.newState == "normal"
      ? (this.newState = "highlighted")
      : (this.newState = "normal");
  }

  onShrink() {
    this.newState = "shrunken";
  }

  onAdd(item) {
    this.list.push(item);
  }
}
