import { Component, OnInit, ViewChild } from '@angular/core';
import { EventService } from '@services/event.service';
import { Event as IEvent } from '@interfaces/event';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'spf-event-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  displayedColumns: string[] = [
    'startAt',
    'endAt',
    'maxPeople',
    'isClosed',
    'title',
    'isFree',
  ];
  dataSource!: MatTableDataSource<IEvent>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private eventService: EventService) {}

  ngOnInit(): void {
    this.eventService.getAll().subscribe((events) => {
      this.dataSource = new MatTableDataSource(events);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
