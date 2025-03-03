import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private apiUrl = 'https://wiring-lips-plant-ships.trycloudflare.com/api/todos'; 

  constructor(private http: HttpClient) { }

  fetchData(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
