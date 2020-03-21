import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class TransformDataService {
  private data = new BehaviorSubject([]);
  public asData = this.data.asObservable()
  public dataDsPhim = new BehaviorSubject([])
  public asDataPhim = this.dataDsPhim.asObservable()
  constructor() {}
  public transformData(thamso){
    this.data.next(thamso)
  }
  public transDanhSachPhim(thamso){
    this.dataDsPhim.next(thamso)
  }
}
