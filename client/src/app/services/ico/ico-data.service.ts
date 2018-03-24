import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import { map } from "rxjs/operators";

import { Ico } from '../../../../../shared/Ico.model'

@Injectable()
export class IcoDataService {

  constructor(private http: HttpClient) { }

  getIcos(lazyMode: boolean): Observable<Ico[]> {
    return lazyMode ?
    this.http.get('/api/ico/lazy').pipe(mapIcos) :
    this.http.get('/api/ico').pipe(mapIcos)
  }

  getIcoDetails(detailsToken): Observable<any[]> {
    return this.http.get(`/api/ico/${detailsToken}`).pipe(mapIcos);
  }
  test(): Observable<any> {
    return this.http.get('/api/ico/test')
  }
}

const mapIcos = map((res: any) => {
  console.log(res);
  return res.payload
});
