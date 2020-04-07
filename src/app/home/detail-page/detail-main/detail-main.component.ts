import { OnDestroy, Input } from "@angular/core";
import { Component, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { ActivatedRoute } from "@angular/router";
import { RapService } from "src/app/services/rap.service";
import { TransformDataService } from "src/app/services/transformData.service";
import { FilmService } from "src/app/services/film.service";

@Component({
  selector: "app-detail-main",
  templateUrl: "./detail-main.component.html",
  styleUrls: ["./detail-main.component.scss"],
})
export class DetailMainComponent implements OnInit, OnDestroy {
  @Input() chiTietPhim;

  constructor(
   
  ) {}
  public detailPhim: any;
  public maPhim: any;

  public phimDangChieu: any = [
    {
      hinhAnh:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS43z9vXcT-_76gWr6fEBov_QIHCRU_g0g0BfsxNksvKmyUOCUd",
      tenPhim: "FAST & FURIOUS",
    },
    {
      hinhAnh:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcShmjG-5IKs9xoj8F1wDtRsHA_YrVx0NwiVqxuq8LW-104ADcOe",
      tenPhim: "PAKER",
    },
    {
      hinhAnh:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS43z9vXcT-_76gWr6fEBov_QIHCRU_g0g0BfsxNksvKmyUOCUd",
      tenPhim: "FAST & FURIOUS",
    },
  ];
  public sub = new Subscription();
  
  ngOnInit() {
    

    // this.sub = this.route.params.subscribe((params) => {
    //   this.maPhim = params.id;
    //   this.filmService.getFilmDetail(this.maPhim).subscribe((res)=>{
    //     this.detailPhim = res
    //   }
    //   ,(err)=>{
    //     console.log(err);
    //   })

    //   this.rap.layThongTinLichChieuPhim(this.maPhim).subscribe((res) => {
    //     this.detailPhim = res;
    //     console.log(this.detailPhim);

    //     this.heThongRapChieu = this.detailPhim.heThongRapChieu;
    //     this.transformData.transformData(this.heThongRapChieu);
    //   });
    // });
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
