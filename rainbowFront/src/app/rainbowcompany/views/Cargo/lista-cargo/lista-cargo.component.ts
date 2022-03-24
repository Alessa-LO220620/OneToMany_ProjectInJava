import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cargo } from 'src/app/rainbowcompany/models/cargoModel';
import { CargoService } from 'src/app/rainbowcompany/services/cargo.service';

@Component({
  selector: 'app-lista-cargo',
  templateUrl: './lista-cargo.component.html',
  styleUrls: ['./lista-cargo.component.css']
})
export class ListaCargoComponent implements OnInit {

  cargos:any = []

  constructor(private cargoService: CargoService,
    private router: Router) { }

  ngOnInit(): void {
    this.showAllPositions()
  }

  showAllPositions() {
    this.cargoService.showAllPositions().subscribe(resultado => {
      console.log("aqui")
      console.log(this.cargos)

      resultado.forEach((cargo: any[]) => {

        let cargoComSupervisor: any = {
          id_cargo: '',
          cargo_nome: '',
          cargo_descricao: '',
          id_super: '',
          super_nome: '',
          super_formacao: ''
        }

        cargoComSupervisor.id_cargo = cargo[0]
        cargoComSupervisor.cargo_nome = cargo[1]
        cargoComSupervisor.cargo_descricao = cargo[2]
        if (cargo[3] != null) {
          cargoComSupervisor.id_super = cargo[3]
          cargoComSupervisor.super_nome = cargo[4]
          cargoComSupervisor.super_formacao = cargo[5]
        } else {
          cargoComSupervisor.id_super = 0
          cargoComSupervisor.super_nome = "----"
          cargoComSupervisor.super_formacao = "----"
        }


        this.cargos.push(cargoComSupervisor)
      });

    })
  }

  navegarCadastroCargo() {
    this.router.navigate(['/cadastroCargo'])
  }









}
