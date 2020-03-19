import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class TransformDataService {
  private data = new BehaviorSubject([]);
  public asData = this.data.asObservable()
  constructor() {}
  public transformData(thamso){
    this.data.next(thamso)
  }
}
