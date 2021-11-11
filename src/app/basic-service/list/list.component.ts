import { Component, OnInit } from '@angular/core';
import { ApiStatus } from '@interfaces/api';
import { BasicService } from '@interfaces/basic-service';
import { BasicServices } from '@services/basic-services.service';

@Component({
  selector: 'spf-basic-service-list',
  templateUrl: './list.component.html',
})
export class ListComponent implements OnInit {
  basicServices?: BasicService[];
  apiStatus: ApiStatus = 'idle';

  constructor(private basicServicesService: BasicServices) {}

  ngOnInit(): void {
    this.apiStatus = 'loading';
    this.basicServicesService.getAll().subscribe((basicServices) => {
      if (!basicServices) this.apiStatus = 'empty';

      this.apiStatus = 'success';
      this.basicServices = basicServices;
    });
  }
}
