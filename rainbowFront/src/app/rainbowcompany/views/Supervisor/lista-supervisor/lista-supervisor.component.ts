import { Component, OnInit } from '@angular/core';
import { SupervisorService } from 'src/app/rainbowcompany/services/supervisor.service';

@Component({
  selector: 'app-lista-supervisor',
  templateUrl: './lista-supervisor.component.html',
  styleUrls: ['./lista-supervisor.component.css']
})
export class ListaSupervisorComponent implements OnInit {

  supervisores: any= []
  constructor(private supervisorService: SupervisorService) { }

  ngOnInit(): void {
    this.showAllSupervisor()
  }

  showAllSupervisor(){
    this.supervisorService.showAllSupervisor().subscribe(res =>{

      console.log(res)

      res.forEach((supervisor: any[])=>{

        let supervisorComCargo: any ={
          id_super: '',
          super_foto:'',
          super_nome:'',
          super_formacao:'',
          cargo_nome:'',
          cargo_setor:''
        }

        supervisorComCargo.id_super = supervisor[0]
        supervisorComCargo.super_foto = supervisor[1]
        supervisorComCargo.super_nome = supervisor[2]
        supervisorComCargo.super_formacao = supervisor[3]
        if(supervisor[4] != null){
        supervisorComCargo.cargo_nome = supervisor[4]
        supervisorComCargo.cargo_setor = supervisor[5]
        }else{
        supervisorComCargo.id_cargo = "----"
        supervisorComCargo.cargo_nome = "----"
        supervisorComCargo.cargo_setor = "----"
        }  

        this.supervisores.push(supervisorComCargo)
      })
    })
  }














}
