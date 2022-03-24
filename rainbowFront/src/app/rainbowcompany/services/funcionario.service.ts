import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cargo } from '../models/cargoModel';
import { Funcionario } from '../models/funcionarioModel';

@Injectable({
  providedIn: 'root'
})
export class FuncionarioService {

  baseUrl: String = 'http://localhost:8080/rainbowCompany'

  constructor(private http: HttpClient) { }

  //metodo get para mostrar uma lista geral de funcionarios, independente do cargo
  showAllEmployee():Observable<any>{
    const url = `${this.baseUrl}/funcionario-cargo`
    return this.http.get<any>(url)
  }

  //metodo get para mostrar funcionario de acordo com o id_cargo
  showEmployeeByPosition(id_cargo: string): Observable<Funcionario[]> {
    const url = `${this.baseUrl}/funcionario/busca-cargo/${id_cargo}`
    return this.http.get<Funcionario[]>(url)
  }

  //metodo para mostrar um unico funcionario
  showOneEmployee(id_func: String): Observable<Funcionario> {
    const url = `${this.baseUrl}/funcionario/${id_func}`
    return this.http.get<Funcionario>(url)
  }


  //metodo post
  registerEmployee(funcionario: Funcionario): Observable<Funcionario> {
    const url = `${this.baseUrl}/funcionario`
    return this.http.post<Funcionario>(url, funcionario)
  }

  //metodo put
  editEmployee(funcionario: Funcionario, id_func: string): Observable<Funcionario> {
    const url = `${this.baseUrl}/funcionario/${id_func}`
    return this.http.put<Funcionario>(url, funcionario)
  }

  //metodo del
  deleteEmployee(id_func: string): Observable<void> {
    const url = `${this.baseUrl}/funcionario/${id_func}`
    return this.http.delete<void>(url)
  }

  assignPosition(cargo:Cargo, id_func:String):Observable<Funcionario>{
    const url = `${this.baseUrl}/funcionario/inserirCargo/${id_func}`
    return this.http.put<Funcionario>(url,cargo)

  }

  leaveEmployeeWithoutPosition(funcionario:Funcionario, id_func:String):Observable<Funcionario>{
    const url = `${this.baseUrl}/funcionario/deixarSemCargo/${id_func}`
    return this.http.put<Funcionario>(url,funcionario)
  }

}
