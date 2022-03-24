import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cargo } from 'src/app/rainbowcompany/models/cargoModel';
import { CargoService } from 'src/app/rainbowcompany/services/cargo.service';

@Component({
  selector: 'app-cadastro-cargo',
  templateUrl: './cadastro-cargo.component.html',
  styleUrls: ['./cadastro-cargo.component.css']
})
export class CadastroCargoComponent implements OnInit {

  cargo: Cargo = {
    cargo_nome: '',
    cargo_descricao: '',
    cargo_setor: ''
  }

  constructor(private cargoService: CargoService,
    private router: Router) { }

  ngOnInit(): void {
  }

  //metodo de registrar um cargo
  registerPosition() {
    this.cargoService.registerPosition(this.cargo).subscribe({
      complete: () => {
        alert("Cargo cadastrado com sucesso")
        this.router.navigate(['/cargo'])
      },
      error: () => {
        alert("Não foi possível realizar o cadastro")
        this.router.navigate(['/cargo'])
      }
    })
  }

  cancelRegister(){
    this.router.navigate(['/cargo'])
  }

}
