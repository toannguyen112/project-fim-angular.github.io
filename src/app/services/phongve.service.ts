import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
@Injectable({
  providedIn: "root"
})
export class PhongveService {
  constructor(private _http: HttpClient) {}

  //  lay chi tiet phong ve
  chiTietPhongVe(maLichChieu): Observable<any> {
    let api = `http://movie0706.cybersoft.edu.vn/api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${maLichChieu}`;
    let obser = this._http.get(api);
    return obser;
  }
}
