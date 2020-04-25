import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
@Injectable({
  providedIn: "root",
})
export class PhongveService {
  constructor(private _http: HttpClient) {}

  //  lay chi tiet phong ve
  chiTietPhongVe(maLichChieu): Observable<any> {
    let api = `http://movie0706.cybersoft.edu.vn/api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${maLichChieu}`;
    let obser = this._http.get(api);
    return obser;
  }
  // dat ve
  datVe(data): Observable<any> {
    let api = "http://movie0706.cybersoft.edu.vn/api/QuanLyDatVe/DatVe";
    return this._http.post(api, data, httpOptions);
  }

  // tao lich chieu
  taoLichChieu(data): Observable<any> {
    let api = "http://movie0706.cybersoft.edu.vn/api/QuanLyDatVe/TaoLichChieu";
    return this._http.post(api, data);
  }
}
const accessToken = JSON.parse(localStorage.getItem("credentials"))
  ? JSON.parse(localStorage.getItem("credentials")).accessToken
  : [];
const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json",
    Authorization: "Bearer " + accessToken,
  }),
};
