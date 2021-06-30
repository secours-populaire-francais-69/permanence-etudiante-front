import { Component, OnInit, ViewChild } from '@angular/core';
import { BasicServices } from '../../services/basic-services.service';
import { BasicService } from '../../interfaces/basic-service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  displayedColumns: string[] = ['startAt', 'endAt', 'maxPeople', 'isClosed'];
  dataSource!: MatTableDataSource<BasicService>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private basicServicesService: BasicServices) {}

  ngOnInit(): void {
    this.basicServicesService.getAll().subscribe((basicServices) => {
      this.dataSource = new MatTableDataSource(basicServices);
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
