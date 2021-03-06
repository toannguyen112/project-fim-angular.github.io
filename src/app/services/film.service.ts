import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable, Output, EventEmitter, Directive } from "@angular/core";
import { Observable } from "rxjs";

@Directive()
@Injectable({
  providedIn: "root",
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
    addFilm: "http://movie0706.cybersoft.edu.vn/api/QuanLyPhim/ThemPhim",
    updateFil: "http://movie0706.cybersoft.edu.vn/api/QuanLyPhim/CapNhatPhim",
    updateImg:
      "http://movie0706.cybersoft.edu.vn/api/QuanLyPhim/UploadHinhAnhPhim",
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
  getFilmDetail(maPhim): Observable<any> {
    let obser = this._http.get(this.api.getFilmDetail + maPhim);
    return obser;
  }

  // lấy phim tìm kiếm
  searchFilm(tenPhim): Observable<any> {
    let obser = this._http.get(this.api.searchFilm + tenPhim);
    return obser;
  }

  // add phim

  addFilm(film): Observable<any> {
    let obser = this._http.post(this.api.addFilm, film, httpOptions);
    return obser;
  }

  // xoa phim

  DeleteFilm(maPhim): Observable<any> {
    let obser = this._http.delete(this.api.deleteFilm + maPhim, httpOptions);
    return obser;
  }

  updateFilm(data): Observable<any> {
    return this._http.post(this.api.updateFil, data, httpOptions);
  }

  // upload hinh anh
  upLoadImg(fd): Observable<any> {
    return this._http.post(this.api.updateImg, fd);
  }
}

const accessTokenAdmin = localStorage.getItem("admin")
  ? JSON.parse(localStorage.getItem("admin")).accessToken
  : [];
const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json",
    Authorization: "Bearer " + accessTokenAdmin,
  }),
};
