import { Observable } from "rxjs";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class RapService {
  constructor(private _http: HttpClient) {}
  readonly api = {
    layThongTinHeThongRap:
      "http://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinHeThongRap"
  };

  // lay thong tin he thong rap
  layThongTinHeThongRap(): Observable<any> {
    let obser = this._http
      .get(this.api.layThongTinHeThongRap)
      .pipe(map((res: Response) => res));
    return obser;
  }
  // lấy các lịch chiếu theo mã hệ thống rạp
  layLichChieuTheoMaHeThongRap(maHeThongRap: any): Observable<any> {
    let api = `http://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maHeThongRap=${maHeThongRap}&maNhom=GP01`;
    let obser = this._http.get(api).pipe(map((res: Response) => res));
    return obser;
  }

  // lay thong tin lich chieu phim
  layThongTinLichChieuPhim(maPhim) {
    let api = `http://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${maPhim}`;
    let obser = this._http.get(api).pipe(map((res: Response) => res));
    return obser;
  }
}
