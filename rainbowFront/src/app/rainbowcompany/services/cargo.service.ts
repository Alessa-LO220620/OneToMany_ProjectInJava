import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cargo } from '../models/cargoModel';

@Injectable({
  providedIn: 'root'
})
export class CargoService {

  baseUrl: String = 'http://localhost:8080/rainbowCompany'

  constructor(private http: HttpClient) { }

  //metodo get
  showAllPositions(): Observable<any> {
    const url = `${this.baseUrl}/cargo/cargo-supervisor`
    return this.http.get<any>(url)
  }

  //metodo get para uma turma
  showOnePosition(id_cargo: String): Observable<Cargo> {
    const url = `${this.baseUrl}/cargo/${id_cargo}`
    return this.http.get<Cargo>(url)
  }

  //metodo get para mostrar o cargo do Supervisor
  showPositionOfSupervisor(id_super: String): Observable<Cargo> {
    const url = `${this.baseUrl}/cargo/cargo-supervisor/${id_super}`
    return this.http.get<Cargo>(url)
  }

  //metodo get para mostrar cargos sem Supervisor
  showPositionWithoutSupervisor(): Observable<Cargo> {
    const url = `${this.baseUrl}/cargoSemSupervisor`
    return this.http.get<Cargo>(url)
  }

  //metodo post
  registerPosition(cargo: Cargo): Observable<Cargo> {
    const url = `${this.baseUrl}/cargo`
    return this.http.post<Cargo>(url, cargo)
  }

  //metodo put
  editPosition(cargo: Cargo): Observable<Cargo> {
    const url = `${this.baseUrl}/cargo/${cargo.id_cargo}`
    return this.http.put<Cargo>(url, cargo)
  }

  //metodo put vai atribuir um supervisor a turma 
  assignSupervisorToPosition(cargo: Cargo, id_cargo: String, id_super: String): Observable<void> {
    const url = `${this.baseUrl}/cargo/definirSupervisor/${id_cargo}/${id_super}`
    return this.http.put<void>(url, cargo)
  }

  //metodo put  vai deixar um Cargo Sem supervisor
  leavePositionWithoutSupervisor(cargo:Cargo, id_cargo:String, id_super:String):Observable<void>{
    const url = `${this.baseUrl}/cargo/tirarSupervisor/${id_cargo}/${id_super}`
    return this.http.put<void>(url, cargo)
  }

  //metodo del
  deletePosition(id_cargo: String): Observable<void> {
    const url = `${this.baseUrl}/cargo/${id_cargo}`
    return this.http.delete<void>(url)
  }

}
