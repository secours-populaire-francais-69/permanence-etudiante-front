import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Event } from '@interfaces/event';

@Injectable({
  providedIn: 'root',
})
export class EventService {
  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get<Event[]>(`${environment.api}events`);
  }

  create(event: Event) {
    return this.http.post<{ event: Event }>(`${environment.api}events`, {
      event,
    });
  }

  update(event: Event) {
    return this.http.put<{ event: Event }>(
      `${environment.api}events/${event.id}`,
      { event }
    );
  }

  find(eventId: string) {
    return this.http.get<Event>(`${environment.api}events/${eventId}`);
  }

  delete(eventId: number) {
    return this.http.delete<Event>(`${environment.api}events/${eventId}`);
  }
}
