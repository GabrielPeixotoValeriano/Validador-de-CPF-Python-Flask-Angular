import { Component } from '@angular/core';
import { ValidarCpfComponent } from './components/validar-cpf/validar-cpf.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ValidarCpfComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'valida-cpf-angular';
}
