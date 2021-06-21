import { Component, OnInit } from '@angular/core';
import { BasicServices } from '../../services/basic-services.service';
import { BasicService } from '../../interfaces/basic-service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  basicServices: BasicService[] = [];
  constructor(private basicServicesService: BasicServices) {}

  ngOnInit(): void {
    this.basicServicesService
      .getAll()
      .subscribe((basicServices) => (this.basicServices = basicServices));
  }
}
