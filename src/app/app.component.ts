import { Component } from "@angular/core";
import {
  trigger,
  state,
  style,
  transition,
  animate,
  keyframes,
  group
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
      ]),
      transition("* => void", [
        animate(500, style({ opacity: 0, transform: "translateX(-100px)" }))
      ])
    ]),
    trigger("list2", [
      state("in", style({ opacity: "1", transform: "translateX(0)" })),
      transition("void => *", [
        animate(
          1000,
          keyframes([
            style({ transform: "translateX(-100px)", opacity: "0", offset: 0 }),
            style({
              transform: "translateX(-50px)",
              opacity: "0.5",
              offset: 0.3
            }),
            style({
              transform: "translateX(-20px)",
              opacity: "1",
              offset: 0.8
            }),
            style({ transform: "translateX(0)", opacity: "1", offset: 1 })
          ])
        )
      ]),
      transition("* => void", [
        group([
          animate(200, style({ transform: "translateX(-100px)" })),
          animate(300, style({ opacity: 0 }))
        ])
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
  onDelete(item) {
    this.list.splice(this.list.findIndex(listItem => listItem === item), 1);
  }
}
