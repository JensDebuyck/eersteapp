import { Injectable } from '@angular/core';
import { Land } from '../land';
import { LANDEN } from '../landen';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LandService {

  constructor() { }
  getLanden():Observable<Land[]>{
    return of(LANDEN);
  }
  getTopLanden(top:number):Observable<Land[]>{
    return of(
      LANDEN.sort(function (a,b){
        return b.inwoners - a.inwoners;
      }).slice(0, top)
    );
  }

  getLand(id:number):Observable<Land>{
    return of (LANDEN.find((land) => land.id === id)!);
  }
}
