import { Subscription } from "rxjs";
import { Component, OnInit, OnDestroy } from "@angular/core";
import { FilmService } from "src/app/services/film.service";
import { ActivatedRoute } from "@angular/router";
import { RapService } from "src/app/services/rap.service";

@Component({
  selector: "app-detail-page",
  templateUrl: "./detail-page.component.html",
  styleUrls: ["./detail-page.component.scss"],
})
export class DetailPageComponent implements OnInit, OnDestroy {
  public loai: string = "lichchieu";
  public maPhim;
  public chiTietPhim;
  public heThongRapChieu ;
  public sub: Subscription;
  constructor(private route: ActivatedRoute, private rapService: RapService) {}

  ngOnInit() {
    this.sub = this.route.params.subscribe((params) => {
      this.maPhim = params.id;
      this.rapService.layThongTinLichChieuPhim(this.maPhim).subscribe((res) => {
        this.chiTietPhim = res;
       this.heThongRapChieu = res.heThongRapChieu
       console.log(this.heThongRapChieu);
       this.rapService.setHeThongRapChieu(this.heThongRapChieu)
       
      });
    });
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  chonLoai(loai: string) {
    this.loai = loai;
  }
}
