import { Subscription } from "rxjs";
import { Film } from "src/app/models/film";
import { Component, OnInit, OnDestroy } from "@angular/core";
import { FilmService } from "src/app/services/film.service";
import Swal from "sweetalert2";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-quanliphim-content",
  templateUrl: "./quanliphim-content.component.html",
  styleUrls: ["./quanliphim-content.component.scss"],
})
export class QuanliphimContentComponent implements OnInit, OnDestroy {
  public movieList: Film[] = [];
  public newMovieList: any;
  public sub: Subscription;
  public maPhim: any;
  public searchText;
  constructor(private _filmService: FilmService, private http: HttpClient) {}
  public selectedFile: File = null;
  ngOnInit() {
    this.movieList = this._filmService.movieList;
    this._filmService.emitterMovieList.subscribe((res) => {
      this.movieList = res;
    });

    this.sub = this._filmService.getListFilms().subscribe(
      (res) => {
        this._filmService.setDanhSachPhim(res);
      },
      (err) => {
        console.log(err);
      }
    );

    console.log(this.movieList);
  }

  // select file

  onFileSelected(event) {
    this.selectedFile = <File>event.target.files[0];
    console.log(this.selectedFile);
  }

  upLoad(tenPhim) {
    var frm = new FormData();
    frm.append("File", this.selectedFile, this.selectedFile.name);
    frm.append("tenPhim", tenPhim);
    frm.append("maNhom", "GP01");
    this._filmService.upLoadImg(frm).subscribe(
      (res) => {
        console.log(res);
      },
      (err) => {
        console.log(err);
      }
    );
  }
  // delete phim
  deleteFilm(phim) {
    console.log(phim.maPhim);
    this.maPhim = phim.maPhim;

    this._filmService.DeleteFilm(this.maPhim).subscribe(
      (res) => {
        console.log(res.data);
      },
      (err) => {
        console.log(err);
        let newArray = this.movieList.filter(
          (item) => item.maPhim != this.maPhim
        );
        this.movieList = newArray;
        Swal.fire({
          icon: "success",
          title: "",
          text: "Xóa thành công",
        });
      }
    );
  }

  // add phim
  addPhim(film) {
    Swal.fire({
      icon: "success",
      title: "",
      text: "Thêm thành công",
    });
    this.movieList.push(film);
  }
  updateFilm(data) {
    console.log(data);

    this._filmService.updateFilm(data).subscribe(
      (res) => {
        let index = this.movieList.findIndex(
          (phim) => phim.maPhim == data.maPhim
        );
        for (let phim of this.movieList) {
          if (phim.maPhim == res.maPhim) {
            this.movieList[index] = res;
          }
        }
      },
      (err) => {
        console.log(err);
      }
    );
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
