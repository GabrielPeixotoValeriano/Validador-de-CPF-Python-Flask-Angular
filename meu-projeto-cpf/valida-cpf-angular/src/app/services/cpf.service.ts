import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CpfService {
  private apiUrl = 'http://127.0.0.1:5000/validar-cpf';

  constructor(private http: HttpClient) { }

  validarCpf(cpf: string): Observable<any> {
    return this.http.post<any>(this.apiUrl, { cpf });
  }
}
