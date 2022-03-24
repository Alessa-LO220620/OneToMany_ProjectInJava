import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Supervisor } from 'src/app/rainbowcompany/models/supervisorModel';
import { SupervisorService } from 'src/app/rainbowcompany/services/supervisor.service';

@Component({
  selector: 'app-cadastrar-supervisor',
  templateUrl: './cadastrar-supervisor.component.html',
  styleUrls: ['./cadastrar-supervisor.component.css']
})
export class CadastrarSupervisorComponent implements OnInit {

  idSupervisorCadastrado: any

  supervisorcadastrado: boolean = false

  foto: any

  supervisor: Supervisor = {
    id_super: " ",
    super_nome:" ",
    super_formacao:" ",
    super_foto:" "
  }
  constructor(private supervisorService: SupervisorService,
              private http:HttpClient) { }

  ngOnInit(): void {
  }

  registerSupervisor(){
    this.supervisorService.registerSupervisor(this.supervisor).subscribe({
      complete: ()=>{alert("Supervisor Cadastrado com sucesso")
                      this.supervisorService.showSupervisorByName(this.supervisor.super_nome)
                      .subscribe(res =>{
                        this.idSupervisorCadastrado = res.id_super
                        this.supervisorcadastrado = true
                      })},
      error: ()=>{alert("Não foi possivel cadastrar o supervisor")}
    })
  }


subirFoto(event:any){
  
  if(event.target.files && event.target.files[0]){
    this.foto = event.target.files[0]

    const formData = new FormData
    formData.append("foto",this.foto)

    const nome:string = this.supervisor.super_nome + "-" + event.target.files[0].name

    this.http.post(`http://localhost:8080/rainbowCompany/envio/${this.idSupervisorCadastrado}?nome=${nome}`,formData).subscribe({
      complete: () => console.log("Foto enviada")
    })

    alert("Foto anexada ao Professor")
  }

}







}
