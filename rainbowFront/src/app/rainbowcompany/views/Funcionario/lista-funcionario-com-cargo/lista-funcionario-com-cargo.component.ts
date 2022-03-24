import { Component, OnInit } from '@angular/core';
import { FuncionarioService } from 'src/app/rainbowcompany/services/funcionario.service';

@Component({
  selector: 'app-lista-funcionario-com-cargo',
  templateUrl: './lista-funcionario-com-cargo.component.html',
  styleUrls: ['./lista-funcionario-com-cargo.component.css']
})
export class ListaFuncionarioComCargoComponent implements OnInit {

  funcionarios: any = []

  constructor(private funcionarioService: FuncionarioService) { }

  ngOnInit(): void {
    this.getAllEmployees()
  }

  getAllEmployees() {
    this.funcionarioService.showAllEmployee().subscribe(res => {

      res.forEach((funcionario: any[]) => {

        let funcionarioComCargo: any = {
          id_func: '',
          fnc_nome: '',
          fnc_salario: '',
          fnc_cidade: '',
          id_cargo: '',
          cargo_nome: ''
        }

        funcionarioComCargo.id_func = funcionario[0]
        funcionarioComCargo.fnc_nome = funcionario[1]
        funcionarioComCargo.fnc_salario = funcionario[2]
        funcionarioComCargo.fnc_cidade = funcionario[3]
        if (funcionario[4] != null) {
          funcionarioComCargo.id_cargo = funcionario[4]
          funcionarioComCargo.cargo_nome = funcionario[5]
        } else {
          funcionarioComCargo.id_cargo = 0
          funcionarioComCargo.cargo_nome = "----"
        }


        this.funcionarios.push(funcionarioComCargo)

      });

    })

}
}