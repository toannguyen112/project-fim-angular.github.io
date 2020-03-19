import { HttpClient } from "@angular/common/http";

import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
@Injectable({
  providedIn: "root"
})
export class FilmService {
  readonly api = {
    // đối tương quản lí api
    getListFilm:
      "http://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01",
    searchFilm:
      "http://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01&tenPhim=",
    getFilmDetail:
      "http://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayThongTinPhim?MaPhim="
  };

  constructor(private _http: HttpClient) {}

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
}
