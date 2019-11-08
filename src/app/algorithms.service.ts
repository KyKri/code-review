import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IAlgorithm } from './IAlgorithm';

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

  public getAlgorithmById(id: string) {
    return this.http.get('http://localhost:4000/algorithms/' + id);
  }

  public addAlgorithm(alg: IAlgorithm) {
    return this.http.post('http://localhost:4000/algorithms/add', alg);
  }

  public updateAlgorithm(id: string, alg: IAlgorithm) {
    return this.http.post('http://localhost:4000/algorithms/update/' + id, alg);
  }

  public deleteAlgorithm(id: string) {
    return this.http.get('http://localhost:4000/algorithms/delete/' + id);
  }
}
