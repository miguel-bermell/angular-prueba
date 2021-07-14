import { Component, OnInit } from '@angular/core';
import { ServiceListItem } from '../../models/service-list';
import { ServicesModelService } from '../../services/services-model.service';

@Component({
  selector: 'app-services-list',
  templateUrl: './services-list.component.html',
  styleUrls: ['./services-list.component.scss'],
})
export class ServicesListComponent implements OnInit {
  services!: ServiceListItem[];

  constructor(private servicesModel: ServicesModelService) {}

  ngOnInit(): void {
    this.servicesModel.getAll().subscribe((data) => {
      this.services = data;
    });
  }

  deleteClick(id: string): void {}
}
