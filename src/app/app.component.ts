import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  
  title = 'App Contador';
  conteo = 0;

  incrementar() { this.conteo += 1; }
  resetear() { this.conteo = 0; }

  decrementar() {
    if(this.conteo > 0) {
      this.conteo -= 1;
    }
  }
}
