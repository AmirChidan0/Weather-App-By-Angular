import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BackEndUser } from '../models/backendUser';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BackendUserService {


  constructor(private http : HttpClient) { }

  getuser(id:number ):Observable<BackEndUser>{

    return   this.http.get<BackEndUser>("https://jsonplaceholder.typicode.com/todos/" + id);
  }
}
