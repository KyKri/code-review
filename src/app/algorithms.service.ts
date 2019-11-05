import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AlgorithmsService {

  constructor(
    private http: HttpClient
  ) { }

  public getAlgorithms() {
    return this.http.get('http://localhost:4000/algorithms');
  }
}
