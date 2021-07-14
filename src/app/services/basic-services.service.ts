import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { BasicService } from '../interfaces/basic-service';

@Injectable({
  providedIn: 'root',
})
export class BasicServices {
  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get<BasicService[]>(`${environment.api}basic-services`);
  }

  create(basicService: BasicService) {
    return this.http.post<{ basicService: BasicService }>(
      `${environment.api}basic-services`,
      { basicService }
    );
  }

  update(basicService: BasicService) {
    return this.http.put<{ basicService: BasicService }>(
      `${environment.api}basic-services/${basicService.id}`,
      { basicService }
    );
  }

  subscribe(basicServiceId: number) {
    return this.http.post<any>(
      `${environment.api}basic-services/${basicServiceId}/subscribe`,
      {}
    );
  }

  find(basicServiceId: string) {
    return this.http.get<BasicService>(
      `${environment.api}basic-services/${basicServiceId}`
    );
  }

  delete(basicServiceId: number) {
    return this.http.delete<{ basicService: BasicService }>(
      `${environment.api}basic-services/${basicServiceId}`
    );
  }
}
