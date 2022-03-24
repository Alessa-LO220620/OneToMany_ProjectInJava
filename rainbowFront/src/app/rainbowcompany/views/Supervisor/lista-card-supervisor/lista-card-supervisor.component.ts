import { Component, OnInit } from '@angular/core';
import { Supervisor } from 'src/app/rainbowcompany/models/supervisorModel';
import { SupervisorService } from 'src/app/rainbowcompany/services/supervisor.service';

@Component({
  selector: 'app-lista-card-supervisor',
  templateUrl: './lista-card-supervisor.component.html',
  styleUrls: ['./lista-card-supervisor.component.css']
})
export class ListaCardSupervisorComponent implements OnInit {

  supervisores:Supervisor[] = []

  constructor( private supervisorService:SupervisorService) { }

  ngOnInit(): void {
    this.showAllSupervisorSimple()
  }


  showAllSupervisorSimple(){
    this.supervisorService.showAllSupervisorSimple().subscribe(resultado =>{
      this.supervisores = resultado
      console.log(resultado[0].super_foto)
    })
  }

}
