import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BasicServices } from '@services/basic-services.service';
import { BasicService } from '@interfaces/basic-service';
import { Observable } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import * as moment from 'moment';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.scss'],
})
export class ShowComponent implements OnInit {
  basicService$!: Observable<BasicService>;

  constructor(
    private basicServicesService: BasicServices,
    private toastr: ToastrService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const basicServiceId = this.route.snapshot.params.basicServiceId;
    this.basicService$ = this.basicServicesService.find(basicServiceId);
  }

  subscribe(basicService: BasicService) {
    this.basicServicesService.subscribe(basicService.id).subscribe(() => {
      const startAt = moment(basicService.startAt).format('DD/MM/YYYY');
      this.toastr.success(
        `Tu es maintenant inscrit pour la permanence du ${startAt}!`
      );
    });
  }

  delete(basicService: BasicService) {
    this.basicServicesService.delete(basicService.id).subscribe(() => {
      const startAt = moment(basicService.startAt).format('DD/MM/YYYY');
      this.toastr.success(`La permanence du ${startAt} a été supprimé!`);
      this.router.navigate(['/home'], {
        relativeTo: this.route,
      });
    });
  }
}
