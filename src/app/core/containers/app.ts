import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <mat-sidenav-container>
        <mat-sidenav #sidenav mode="over">
          <app-sidebar
          (navClicked)="sidenav.close()"></app-sidebar>
        </mat-sidenav>

        <div class="site" fxLayout="column">
        <header>
          <app-header
            (toggle)="sidenav.toggle()">
          </app-header>
        </header>
        <main fxFlex="1" fxLayout="column" fxLayoutAlign="center">
          <router-outlet></router-outlet>
        </main>
        <footer>
        </footer>
      </div>
    </mat-sidenav-container>
    `,
    styles: [`
      mat-sidenav-container.myapp-dark-theme {
        background: black;
      }
      mat-sidenav {
        width: 300px;
      }
    `]
})
export class AppComponent {


  constructor() {  }
}
