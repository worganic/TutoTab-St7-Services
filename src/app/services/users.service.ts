import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Users } from 'src/app/shared/interface/users';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private _http: HttpClient) {}

  dataUser: Users[] | undefined ;

  geUsers(): Observable<Users[]> {
    
    console.log("UsersService | geUsers");
    const response = this._http.get<any>('http://localhost:3000/users');
    console.log("UsersService | geUsers / response : ", response);
    return response;
  }
}
