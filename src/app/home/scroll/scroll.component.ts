import { Component, OnInit, HostListener } from "@angular/core";

@Component({
  selector: "app-scroll",
  templateUrl: "./scroll.component.html",
  styleUrls: ["./scroll.component.scss"],
})
export class ScrollComponent implements OnInit {
  constructor() {}
  showScroll: boolean;
  showScrollHeight = 300;
  hideScrollHeight = 10;
  ngOnInit(): void {}
  scrollToTop() {
    (function smoothscroll() {
      var currentScroll =
        document.documentElement.scrollTop || document.body.scrollTop;
      if (currentScroll > 0) {
        window.requestAnimationFrame(smoothscroll);
        window.scrollTo(0, currentScroll - currentScroll / 5);
      }
    })();
  }
  @HostListener("window:scroll", [])
  onWindowScroll() {
    if (
      (window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop) > this.showScrollHeight
    ) {
      this.showScroll = true;
    } else if (
      this.showScroll &&
      (window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop) < this.hideScrollHeight
    ) {
      this.showScroll = false;
    }
  }
}
