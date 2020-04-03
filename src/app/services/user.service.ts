import { DangKi } from "src/app/models/dangKi";
import { HttpClient } from "@angular/common/http";
import { Injectable, Output, EventEmitter } from "@angular/core";
import { Observable } from "rxjs";
import { DangNhap } from "../models/dangNhap";
import { HttpHeaders } from "@angular/common/http";
import { Taikhoan } from "../models/taikhoan";

@Injectable({
  providedIn: "root"
})
export class UserService {
  constructor(private _http: HttpClient) {}

  // store
  public credentials: any;
  public credentialsAdmin: any;
  @Output("credentials") credentialEmitter = new EventEmitter();
  @Output("credentialsAdmin") credentialsAdminEmitter = new EventEmitter();

  setCredentials(credentials): void {
    this.credentials = credentials;
    this.credentialEmitter.emit(this.credentials);
  }

  setCredentialsAdmin(credentials) {
    this.credentialsAdmin = credentials;
    this.credentialsAdminEmitter.emit(this.credentials);
  }
  setNoCredentials(credentials): void {
    this.credentials = credentials;
  }

  // dang ki
  dangKi(data: DangKi): Observable<any> {
    let api = "http://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangKy";
    let obser = this._http.post(api, data);
    return obser;
  }
  // dang nhap
  dangNhap(data: DangNhap): Observable<any> {
    let api = "http://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap";
    let obser = this._http.post(api, data, httpOptions);

    return obser;
  }

  // lay thong tin ca nhan
  layThongTinTaiKhoan(taiKhoan: Taikhoan): Observable<any> {
    let api =
      "http://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/ThongTinTaiKhoan";
    let obser = this._http.post(api, taiKhoan, httpOptions);
    return obser;
  }

  layDanhSachNguoiDung(): Observable<any> {
    let api =
      "http://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP01";
    let obser = this._http.get(api);
    return obser;
  }
  // updateUser 
  updateUser(newUser){
    let api = "http://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/ThongTinTaiKhoan"
    return this._http.post(api,newUser,httpOptions)
  }

  addUser(user): Observable<any> {
    let api =
      "http://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/ThemNguoiDung";
    let obser = this._http.post(api, user, httpOptions);
    return obser;
  }

  deleteUser(taiKhoan: string): Observable<any> {
    let api =
      "http://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/XoaNguoiDung=";
    let obser = this._http.delete(api + taiKhoan, httpOptions);
    return obser;
  }
  loggedIn() {
    return !!JSON.parse(localStorage.getItem("credentials"));
  }
  loggedInAdmin() {
    return !!JSON.parse(localStorage.getItem("admin"));
  }
}
const accessTokenCredentials =  localStorage.getItem("credentials") ? JSON.parse(localStorage.getItem("credentials")).accessToken : []
 
const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json",
    Authorization: "Bearer " + accessTokenCredentials
  })
};
