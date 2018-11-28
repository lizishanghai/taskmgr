import {ChangeDetectionStrategy, Component, EventEmitter, Output, Input} from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <mat-toolbar color="primary">
      <button mat-icon-button (click)="onClick()">
        <mat-icon>menu</mat-icon>
      </button>
      <span>企业协作平台</span>
      <span class="fill-remaining-space"></span>
      <mat-slide-toggle>黑夜模式</mat-slide-toggle>
      <span><a mat-button>退出</a></span>
    </mat-toolbar>
  `,
  styles: [``],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class HeaderComponent {
  @Output() toggle = new EventEmitter<void>();

  onClick() {
    this.toggle.emit();
  }
}
