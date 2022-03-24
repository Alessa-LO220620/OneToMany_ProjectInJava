import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Folha } from 'src/app/rainbowcompany/models/FolhaModel';
import { FolhaService } from 'src/app/rainbowcompany/services/folha.service';

@Component({
  selector: 'app-edicao-folha',
  templateUrl: './edicao-folha.component.html',
  styleUrls: ['./edicao-folha.component.css']
})
export class EdicaoFolhaComponent implements OnInit {

  codigoFolha:any
  id_func:any

  folha: Folha = {
    codigoFolha:'',
    folhaDescricao:'',
    dataPagamento: '',
    salario:0,
    beneficio:'',
    num_falta:0,
    status:''
  }
  constructor(private folhaService:FolhaService,
              private route:ActivatedRoute,
              private location:Location) { }

  ngOnInit(): void {
    this.codigoFolha = this.route.snapshot.paramMap.get('codigoFolha')
    this.id_func = this.route.snapshot.paramMap.get('id_func')
    this.findOnePayroll()
  }

  findOnePayroll(){
    this.folhaService.findOnePayroll(this.codigoFolha).subscribe(res=>{
      this.folha = res
      this.folha.dataPagamento = res.dataPagamento.slice(0,10)
    })
  }

  editPayroll(){
    this.folhaService.editPayroll(this.folha, this.codigoFolha, this.id_func).subscribe({
      complete: () =>{alert("Folha de pagamento alterada com sucesso")
                      this.location.back()  },
      error: () =>{ alert("Erro: Não foi possivel editar Folha de Pagamento")
                    this.location.back()}
    })
  }

}
