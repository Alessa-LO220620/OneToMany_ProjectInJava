import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Funcionario } from 'src/app/rainbowcompany/models/funcionarioModel';
import { FuncionarioService } from 'src/app/rainbowcompany/services/funcionario.service';

@Component({
  selector: 'app-lista-funcionario',
  templateUrl: './lista-funcionario.component.html',
  styleUrls: ['./lista-funcionario.component.css']
})
export class ListaFuncionarioComponent implements OnInit {

  funcionarios: Funcionario[] = []

  constructor(private funcionarioService: FuncionarioService,
              private router: Router) { }

  ngOnInit(): void {
    this.showAllEmployees()
  }

  showAllEmployees() {
    this.funcionarioService.showAllEmployee().subscribe((res) => {
      this.funcionarios = res
    })
  }

  callFormRegister() {
    this.router.navigate(['/funcionarioCadastro'])
  }


}
