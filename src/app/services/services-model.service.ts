import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Service } from '../models/service';
import { ServiceListItem } from '../models/service-list';
import { Unit } from '../models/unit';

@Injectable({
  providedIn: 'root',
})
export class ServicesModelService {
  private URL = 'http://localhost:3000/services';

  constructor(private http: HttpClient) {}

  getAll(): Observable<ServiceListItem[]> {
    return this.http
      .get<ServiceListItem[]>(`${this.URL}`, { observe: 'body' })
      .pipe(map((x) => x.map((s: unknown) => new ServiceListItem(s))));
  }

  saveService(service: Service): Observable<Service | null> {
    if (!service) {
      return of(null);
    }
    return this.http
      .post<Service>(`${this.URL}`, service)
      .pipe(map((s) => new Service(s)));
  }
}
