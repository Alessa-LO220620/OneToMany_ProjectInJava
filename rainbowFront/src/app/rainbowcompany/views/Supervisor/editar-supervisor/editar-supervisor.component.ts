import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Supervisor } from 'src/app/rainbowcompany/models/supervisorModel';
import { SupervisorService } from 'src/app/rainbowcompany/services/supervisor.service';

@Component({
  selector: 'app-editar-supervisor',
  templateUrl: './editar-supervisor.component.html',
  styleUrls: ['./editar-supervisor.component.css']
})
export class EditarSupervisorComponent implements OnInit {

  supervisor: Supervisor = {
    id_super: " ",
    super_nome:" ",
    super_formacao:" ",
    super_foto:" "
  }
  constructor(private supervisorService: SupervisorService,
              private route: ActivatedRoute,
              private location:Location) { }

  ngOnInit(): void {
    this.supervisor.id_super = this.route.snapshot.paramMap.get('id_super')
    this.showOneSupervisor()
  }

  showOneSupervisor(){
    this.supervisorService.showOneSupervisor(this.supervisor.id_super).subscribe(res=>{
      this.supervisor = res
    })
  }

  editSupervisor(){
    this.supervisorService.editSupervisor(this.supervisor).subscribe({
      complete: () => {
        alert("Este supervisor foi editado com sucesso"),
        console.log(this.supervisor)
        this.location.back()
      },
      error: () => {
        alert("Não foi possível editar esse supervisor")
        console.log(this.supervisor)
      }
    }) 
  }










}
