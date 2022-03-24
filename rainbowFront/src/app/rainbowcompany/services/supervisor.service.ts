import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Supervisor } from '../models/supervisorModel';

@Injectable({
  providedIn: 'root'
})
export class SupervisorService {

  baseUrl: String = 'http://localhost:8080/rainbowCompany'

  constructor(private http:HttpClient) { }

  //esse servico vai mostrar uma tabela com join que foi definida no backend
  //a tabela está ligando informações de cargo e supervisor
  showAllSupervisor():Observable<any>{
    const url = `${this.baseUrl}/supervisor/supervisor-cargo`
    return this.http.get<any>(url)
  }

  //lista simples que busca apenas todos os supervsores e seus atributos
  showAllSupervisorSimple():Observable<any>{
    const url = `${this.baseUrl}/supervisor`
    return this.http.get<any>(url)
  }

  showOneSupervisor(id_super: String):Observable<Supervisor>{
    const url = `${this.baseUrl}/supervisor/${id_super}`
    return this.http.get<Supervisor>(url)
  }

  showSupervisorFromPosition(id_cargo:String):Observable<Supervisor>{
    const url = `${this.baseUrl}/supervisor-cargo/${id_cargo}`
    return this.http.get<Supervisor>(url)
  }

  showSupervisorByName(super_nome:String):Observable<Supervisor>{
    const url = `${this.baseUrl}/supervisor-nome/${super_nome}`
    return this.http.get<Supervisor>(url)
  }

  showSupervisorWithoutPosition():Observable<Supervisor[]>{
    const url = `${this.baseUrl}/supervisorSemCargo`
    return this.http.get<Supervisor[]>(url)
  }

  registerSupervisor(supervisor:Supervisor):Observable<Supervisor>{
    const url = `${this.baseUrl}/supervisor`
    return this.http.post<Supervisor>(url, supervisor)
  }

  editSupervisor(supervisor:Supervisor):Observable<Supervisor>{
    const url = `${this.baseUrl}/supervisor/${supervisor.id_super}`
    return this.http.put<Supervisor>(url, supervisor)
  }

  deleteSupervisor(id_super:string):Observable<void>{
    const url = `${this.baseUrl}/supervisor/${id_super}`
    return this.http.delete<void>(url)
  }














}
