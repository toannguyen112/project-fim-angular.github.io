import { HttpClient, HttpHeaders } from "@angular/common/http";

import { Injectable, Output, EventEmitter } from "@angular/core";
import { Observable } from "rxjs";

import { UserService } from "./user.service";
@Injectable({
  providedIn: "root"
})
export class FilmService {
  constructor(private _http: HttpClient) {}
  readonly api = {
    // đối tương quản lí api
    getListFilm:
      "http://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01",
    searchFilm:
      "http://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01&tenPhim=",
    getFilmDetail:
      "http://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayThongTinPhim?MaPhim=",
    deleteFilm:
      "http://movie0706.cybersoft.edu.vn/api/QuanLyPhim/XoaPhim?MaPhim=",
    addFilm: "http://movie0706.cybersoft.edu.vn/api/QuanLyPhim/ThemPhim"
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
    let observable = this._http.get(this.api.getListFilm);

    return observable;
  }

  // lấy chi tiết phim
  getFilmDetail(maPhim: any): Observable<any> {
    let obser = this._http.get(this.api.getFilmDetail + maPhim);
    return obser;
  }

  // lấy phim tìm kiếm
  searchFilm(tenPhim: string): Observable<any> {
    let obser = this._http.get(this.api.searchFilm + tenPhim);
    return obser;
  }

  addFilm(film): Observable<any> {
    // let headers = new HttpHeaders().set(
    //   "Authorization",
    //   "Bearer" + accessTokenAdmin
    // );
    let obser = this._http.post(this.api.addFilm, film, httpOptions);
    return obser;
  }

  // xoa phim

  DeleteFilm(maPhim: string) {
    return this._http.delete(this.api.deleteFilm + maPhim, httpOptions);
  }
}

const accessTokenAdmin = JSON.parse(localStorage.getItem("admin")).accessToken;
const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json",
    Authorization: "Bearer " + accessTokenAdmin
  })
};
