import { Location } from '@angular/common';
import { LocalizedString } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Supervisor } from 'src/app/rainbowcompany/models/supervisorModel';
import { SupervisorService } from 'src/app/rainbowcompany/services/supervisor.service';

@Component({
  selector: 'app-excluir-supervisor',
  templateUrl: './excluir-supervisor.component.html',
  styleUrls: ['./excluir-supervisor.component.css']
})
export class ExcluirSupervisorComponent implements OnInit {

  id_cargo: String = ''
  
  supervisor: Supervisor = {
    id_super: " ",
    super_nome:" ",
    super_formacao:" ",
    super_foto:" "
  }
  constructor(private supervisorService: SupervisorService,
              private route:ActivatedRoute, 
              private location:Location) { }

  ngOnInit(): void {
    // this.id_cargo = this.route.snapshot.paramMap.get('id_cargo')!
    this.supervisor.id_super = this.route.snapshot.paramMap.get('id_super')
    this.showOneSupervisor()
  }

  showOneSupervisor(){
    this.supervisorService.showOneSupervisor(this.supervisor.id_super).subscribe(res=>{
      this.supervisor = res
    })
  }

  deleteSupervisor(){
    this.supervisorService.deleteSupervisor(this.supervisor.id_super).subscribe({
      complete: () => {
        alert("Supervisor excluído com sucesso")
        this.location.back()
      },
      error: () => {
        alert("Erro ao excluir supervisor")       
      }
    })
    console.log(this.supervisor)
  }


  






}
