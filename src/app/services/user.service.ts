import { DangKi } from "src/app/models/dangKi";
import { HttpClient } from "@angular/common/http";
import { Injectable, Output, EventEmitter } from "@angular/core";
import { Observable } from "rxjs";
import { DangNhap } from "../models/dangNhap";
import { HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class UserService {
  constructor(private _http: HttpClient) {}

  // store 
  public credentials :  any ;
  @Output("credentials") credentialEmitter = new EventEmitter();


  setCredentials(credentials) : void {
    this.credentials = credentials ;
    this.credentialEmitter.emit(this.credentials)
  }
   
  httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json",
      Authorization:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoic3RyaW5nIiwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93cy8yMDA4LzA2L2lkZW50aXR5L2NsYWltcy9yb2xlIjoiS2hhY2hIYW5nIiwibmJmIjoxNTYzNDQ1MzkzLCJleHAiOjE1NjM0NDg5OTN9.RsXFA9I2ICZip3PlDdBZNVoy5UjBjkoeyumqLAaLhiA"
    })
  };
  // dang ki
  dangKi(data: DangKi): Observable<any> {
    let api = "http://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangKy";
    let obser = this._http.post(api, data);
    return obser;
  }
  // dang nhap
  dangNhap(data: DangNhap): Observable<any> {
    let api = "http://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap";
    let obser = this._http.post(api, data, this.httpOptions);

    return obser;
  }
}
