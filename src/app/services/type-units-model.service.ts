import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Unit } from '../models/unit';

@Injectable({
  providedIn: 'root',
})
export class TypeUnitsModelService {
  private URL = 'http://localhost:3000/units';

  constructor(private http: HttpClient) {}

  getTypeOfunits(): Observable<Unit[]> {
    return this.http.get<Unit[]>(`${this.URL}`);
  }
}
