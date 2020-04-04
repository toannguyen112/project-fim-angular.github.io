import { Component, OnInit } from "@angular/core";
import { FilmService } from "src/app/services/film.service";

@Component({
  selector: "app-see-more",
  templateUrl: "./see-more.component.html",
  styleUrls: ["./see-more.component.scss"]
})
export class SeeMoreComponent implements OnInit {
  public movieList : any[]  =[]
  constructor(private filmService: FilmService) {}

  ngOnInit() {
    this.movieList = this.filmService.movieDangChieu;
    console.log(this.movieList);
    
  }
}
