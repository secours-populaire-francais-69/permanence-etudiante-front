import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BasicServices } from '@services/basic-services.service';
import { BasicService } from '@interfaces/basic-service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.scss'],
})
export class ShowComponent implements OnInit {
  basicService$!: Observable<BasicService>;

  constructor(
    private basicServicesService: BasicServices,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const basicServiceId = this.route.snapshot.params.basicServiceId;
    this.basicService$ = this.basicServicesService.find(basicServiceId);
  }
}
