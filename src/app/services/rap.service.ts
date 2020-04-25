import { Observable } from "rxjs";
import { Injectable, EventEmitter, Output, Directive } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Directive()
@Injectable({
  providedIn: "root",
})
export class RapService {
  public HeThongRapChieu =  [] ;
  @Output() emitterHeThongRapChieu = new EventEmitter();
  constructor(private _http: HttpClient) {}


  public setHeThongRapChieu(heThongRapChieu){
    this.HeThongRapChieu = heThongRapChieu
    this.emitterHeThongRapChieu.emit(this.HeThongRapChieu)
  }
  // lay thong tin he thong rap
  layThongTinHeThongRap(): Observable<any> {
    let api =
      "http://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinHeThongRap";
    return this._http.get(api);
  }
  // lấy các lịch chiếu theo mã hệ thống rạp
  layLichChieuTheoMaHeThongRap(maHeThongRap): Observable<any> {
    let api = `http://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maHeThongRap=${maHeThongRap}&maNhom=GP01`;
    let obser = this._http.get(api);
    return obser;
  }

  // lay thong tin lich chieu phim
  layThongTinLichChieuPhim(maPhim): Observable<any> {
    let api = `http://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${maPhim}`;
    let obser = this._http.get(api);
    return obser;
  }

  

 
}
