import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl = 'https://dog.ceo/api/breed';

  constructor(private http: HttpClient) {}

  getDogByBreed(breed: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${breed}/images/random`);
  }
}
