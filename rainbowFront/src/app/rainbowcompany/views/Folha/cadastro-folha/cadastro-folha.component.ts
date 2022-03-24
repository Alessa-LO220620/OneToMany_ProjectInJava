import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Folha } from 'src/app/rainbowcompany/models/FolhaModel';
import { FolhaService } from 'src/app/rainbowcompany/services/folha.service';

@Component({
  selector: 'app-cadastro-folha',
  templateUrl: './cadastro-folha.component.html',
  styleUrls: ['./cadastro-folha.component.css']
})
export class CadastroFolhaComponent implements OnInit {

  id_func:any

  folha: Folha = {
    codigoFolha:'',
    folhaDescricao:'',
    dataPagamento: '',
    salario:0,
    beneficio:'',
    num_falta:0,
    status:'A CONFERIR'
  }

  constructor(private folhaService:FolhaService,
              private route:ActivatedRoute,
              private location:Location) { }

  ngOnInit(): void {
    this.id_func = this.route.snapshot.paramMap.get('id_func')
  }

  insertPayroll(){
    this.folhaService.insertPayroll(this.folha, this.id_func).subscribe({
      complete: () => {alert("Folha de Pagamento inserida com sucesso")
                       this.location.back() },
      error: () => {alert("Erro: Folha não inserida")
                    this.location.back()}
    })
  }

}
