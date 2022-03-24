import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Folha } from '../models/FolhaModel';

@Injectable({
  providedIn: 'root'
})
export class FolhaService {

  baseUrl: String = 'http://localhost:8080/rainbowCompany'


  constructor(private http:HttpClient) { }

  findOnePayroll(codigoFolhaFolha:string):Observable<Folha>{
    const url = `${this.baseUrl}/func/folha/${codigoFolhaFolha}`
    return this.http.get<Folha>(url)
  }

  findPayrollOfEmployee(id_func:string):Observable<Folha[]>{
    const url = `${this.baseUrl}/func/folhaFuncionario/${id_func}`
    return this.http.get<Folha[]>(url)
  }

  insertPayroll(folha:Folha, id_func:String):Observable<Folha>{
    const url = `${this.baseUrl}/func/folha/${id_func}`
    return this.http.post<Folha>(url,folha);
  }

  editPayroll(folha:Folha, codigoFolha:any, id_func:any):Observable<Folha>{
    const url = `${this.baseUrl}/aluno/folha/${codigoFolha}/${id_func}`
    return this.http.put<Folha>(url,folha)
  }

  deletePayroll(codigoFolha:string):Observable<void>{
    const url = `${this.baseUrl}/func/folha/${codigoFolha}`
    return this.http.delete<void>(url)
  }

  sendToFinancePayroll(folha:Folha, codigoFolha:any):Observable<Folha>{
    const url = `${this.baseUrl}/func/pagarFolha/${codigoFolha}`
    return this.http.put<Folha>(url,folha)
  }
}
