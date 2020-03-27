import { Component, OnInit, OnDestroy } from "@angular/core";

import { Subscription } from "rxjs";
import { ActivatedRoute } from "@angular/router";
import { RapService } from "src/app/services/rap.service";
import { TransformDataService } from "src/app/services/transformData.service";

@Component({
  selector: "app-detail-page",
  templateUrl: "./detail-page.component.html",
  styleUrls: ["./detail-page.component.scss"]
})
export class DetailPageComponent implements OnInit, OnDestroy {
  public loai: string = "lichchieu";
  public detailPhim: any;
  public maPhim: any;
  public heThongRapChieu: any[] = [];
  public phimDangChieu : any[] = [
    {
      hinhAnh : "https://s3img.vcdn.vn/mobile/123phim/2020/02/bloodshot-15815812953448_215x318.jpg",
      tenPhim : "BLOODSHOT"
    },
    {
      hinhAnh : "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ3x-It9q2MfxStomF-hPt2qvseYYWYyCEhZlHlacW17bdk55M2",
      tenPhim : "BLOODSHOT"
    },
    {
      hinhAnh : "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTuYLYUIg7YkNN3xWpLaHrp_HOmjM0bmqjQ_mCOP0i80UPlSDa9",
      tenPhim : "BLOODSHOT"
    }
  ]
  public sub = new Subscription();
  constructor(
    private route: ActivatedRoute,
    private rap: RapService,
    private transformData: TransformDataService
  ) {}

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.maPhim = params.id;

      this.rap.layThongTinLichChieuPhim(this.maPhim).subscribe(res => {
        this.detailPhim = res;
        console.log(this.detailPhim);
        
        this.heThongRapChieu = this.detailPhim.heThongRapChieu;
        this.transformData.transformData(this.heThongRapChieu);
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
