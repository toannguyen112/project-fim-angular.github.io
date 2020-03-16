import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import {map} from 'rxjs/operators'
@Injectable({
  providedIn: "root"
})
export class FilmService {
  readonly api = {
    // đối tương quản lí api
    getListFilm:
      "http://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01",
    searchFilm:
      "http://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01&tenPhim="
  };

  constructor(private _http: HttpClient) {}
  getListFilms(): Observable<any> {
    let observable = this._http.get(this.api.getListFilm).pipe(map((res : Response)=>res))

    return observable;
  }
  searchFilm(tenPhim) {
    this._http.get(this.api.searchFilm + tenPhim);
  }
}
