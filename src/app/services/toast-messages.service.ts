import { Injectable } from '@angular/core';
import { HotToastService } from '@ngneat/hot-toast';

@Injectable({
  providedIn: 'root',
})
export class ToastMessagesService {
  constructor(private toast: HotToastService) {}

  showSuccess(text: string): void {
    this.toast.success(text, {
      position: 'top-center',
      autoClose: true,
    });
  }

  showError(text: string): void {
    this.toast.error(text, {
      position: 'top-center',
      autoClose: true,
      dismissible: true,
    });
  }
}
