import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { FilmService } from "src/app/services/film.service";
import Swal from "sweetalert2";

@Component({
  selector: "app-update-phim",
  templateUrl: "./update-phim.component.html",
  styleUrls: ["./update-phim.component.scss"],
})
export class UpdatePhimComponent implements OnInit {
  @Input() maPhim;
  @Output() emitterDataUpdate  = new EventEmitter() 
  show: boolean = false;
  constructor(private filmService: FilmService) {}

  ngOnInit(): void {}
  Update(data) {
    const updatePhim = {
      ...data,
      danhGia: 0,
      maPhim: this.maPhim,
      biDanh: "",
      maNhom: "GP01",
    };
    console.log(updatePhim);
    this.emitterDataUpdate.emit(updatePhim)
    // this.filmService.updateFilm(updatePhim).subscribe(
    //   (res) => {
    //     console.log(res);
    //     this.emitterDataUpdate.emit(updatePhim)
    //     Swal.fire({
    //       title: "Cập nhật phim thành công",
    //       icon: "success",
    //     });
    //   },
    //   (err) => {
    //     Swal.fire({
    //       title: "Cập nhật phim Thất bại",
    //       icon: "warning",
    //     });
    //   }
    // );
  }

  open() {
    this.show = true;
  }
  close() {
    this.show = false;
  }
}
