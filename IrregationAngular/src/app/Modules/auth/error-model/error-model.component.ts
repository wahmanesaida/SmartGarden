import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-error-model',
  templateUrl: './error-model.component.html',
  styleUrl: './error-model.component.css'
})
export class ErrorModelComponent {

  @Input() errorMessage: any;
  @Input() showErrorModal: any;
  @Output() tryAgain: EventEmitter<void> = new EventEmitter<void>();

  onClose() {
    this.showErrorModal = false;
  }

  onTryAgain() {
    this.tryAgain.emit();
  }

}
