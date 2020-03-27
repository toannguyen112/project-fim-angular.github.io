import { HttpClient, HttpHeaders } from "@angular/common/http";

import { Injectable, Output, EventEmitter } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { UserService } from "./user.service";
@Injectable({
  providedIn: "root"
})
export class FilmService {
  token = JSON.parse(localStorage.getItem("admin")).accessToken;
  constructor(private _http: HttpClient, private _userService: UserService) {}
  readonly api = {
    // đối tương quản lí api
    getListFilm:
      "http://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01",
    searchFilm:
      "http://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01&tenPhim=",
    getFilmDetail:
      "http://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayThongTinPhim?MaPhim=",
    deleteFilm:
      "http://movie0706.cybersoft.edu.vn/api/QuanLyPhim/XoaPhim?MaPhim="
  };

  public movieList: any[] = [];
  @Output("danhSachPhim") emitterMovieList = new EventEmitter();

  public movieSapChieu: any[] = [];
  @Output("danhSachPhimSapChieu")
  emiiterdanhSachPhimSapChieu = new EventEmitter();

  public movieDangChieu: any[] = [];
  @Output("danhSachPhimDangChieu")
  emitterdanSachPhimDangChieu = new EventEmitter();
  // luu danhSachPhim
  setDanhSachPhim(movieList) {
    this.movieList = movieList;
    this.emitterMovieList.emit(this.movieList);
  }
  // luu danh Sach phim dang chieu
  setDanhSachPhimSDangChieu(movie) {
    this.movieDangChieu = movie;
    this.emitterdanSachPhimDangChieu.emit(this.movieDangChieu);
  }
  // luu danhSacgPHim Sap chieu

  setDanhSachPhimSapChieu(movie) {
    this.movieSapChieu = movie;
    this.emiiterdanhSachPhimSapChieu.emit(this.movieSapChieu);
  }

  // lấy danh sách phim
  getListFilms(): Observable<any> {
    let observable = this._http
      .get(this.api.getListFilm)
      .pipe(map((res: Response) => res));
    return observable;
  }

  // lấy chi tiết phim
  getFilmDetail(maPhim: any): Observable<any> {
    let obser = this._http
      .get(this.api.getFilmDetail + maPhim)
      .pipe(map((res: Response) => res));
    return obser;
  }

  // lấy phim tìm kiếm
  searchFilm(tenPhim: string): Observable<any> {
    let obser = this._http.get(this.api.searchFilm + tenPhim);
    return obser;
  }

  // xoa phim

  DeleteFilm(maPhim: string) {
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        Authorization: "Bearer" + this.token
      })
    };
    console.log(httpOptions);

    return this._http.delete(this.api.deleteFilm + maPhim, httpOptions);
  }
}
