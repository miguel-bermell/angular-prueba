import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Unit } from 'src/app/models/unit';
import { ServicesModelService } from 'src/app/services/services-model.service';
import { TypeUnitsModelService } from 'src/app/services/type-units-model.service';
import { Service } from '../../models/service';
import { ToastMessagesService } from '../../services/toast-messages.service';

@Component({
  selector: 'app-services-add',
  templateUrl: './services-add.component.html',
  styleUrls: ['./services-add.component.scss'],
})
export class ServicesAddComponent implements OnInit {
  units: Unit[] = [];

  form: FormGroup = this.fb.group({
    services: this.fb.array([
      this.fb.group({
        title: ['', [Validators.required, Validators.maxLength(20)]],
        price: [null, Validators.required],
        unitId: ['', Validators.required],
      }),
    ]),
  });

  constructor(
    private fb: FormBuilder,
    private toastMessages: ToastMessagesService,
    private servicesModel: ServicesModelService,
    private unitModel: TypeUnitsModelService
  ) {}

  ngOnInit(): void {
    this.unitModel.getTypeOfunits().subscribe((data) => {
      this.units = data;
    });
  }

  get services() {
    return this.form.controls['services'] as FormArray;
  }

  addService(): void {
    const servicesForm = this.fb.group({
      title: ['', [Validators.required, Validators.maxLength(20)]],
      price: [null, Validators.required],
      unitId: ['', Validators.required],
    });

    this.services.push(servicesForm);
  }

  deleteService(index: number): void {
    this.services.removeAt(index);
  }

  saveClick(form: FormGroup): void {
    if (form.valid) {
      const service: Service = form.value;
      this.servicesModel.saveService(service).subscribe((x) => {
        this.toastMessages.showSuccess('Servicio Guardado');
        this.resetForm();
      });
      return;
    }
    // if (this.form.valueChanges.subscribe(value => {

    // })
    this.toastMessages.showError('Todos los campos son requeridos');
  }

  resetForm(): void {
    this.form.reset();
    this.services.clear();
    this.addService();
  }
}
