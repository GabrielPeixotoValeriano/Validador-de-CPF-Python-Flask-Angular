import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CpfService } from '../../services/cpf.service';

@Component({
  selector: 'app-validar-cpf',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './validar-cpf.component.html',
  styleUrls: ['./validar-cpf.component.css']
})

export class ValidarCpfComponent {
  cpf: string = '';
  mensagem: string = '';
  sucesso: boolean = false;
  carregando: boolean = false;

  constructor(private cpfService: CpfService) { }

  validar() {
    this.mensagem = '';
    this.sucesso = false;

    if (!this.cpf) {
      this.mensagem = 'Informe um CPF.';
      this.sucesso = false;
      return;
    }

    this.carregando = true;
    this.cpfService.validarCpf(this.cpf).subscribe({
      next: (res) => {
        this.mensagem = res;

        // Se a mensagem for exatamente 'CPF válido!' é sucesso, senão erro
        this.sucesso = (res === 'CPF válido!');

        this.carregando = false;
      },
      error: () => {
        this.mensagem = 'Erro ao validar CPF.';
        this.sucesso = false;
        this.carregando = false;
      }
    });
  }
}
