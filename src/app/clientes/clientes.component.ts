import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.scss']
})
export class ClientesComponent implements OnInit {

  constructor() { }

  cliente =
    {
      id: 1,
      name: 'Teste1',
      user: 'usuarioteste',
      date: '15/10/2022',
      orders: [
      {
        item: 'teste',
        price: '1,25',
        purchaseDate: '20/10/2022',
        vendedor: 'Teste'
      },
      {
        item: 'teste2',
        price: '1.25',
        purchaseDate: '20/12/2022',
        vendedor: 'Teste'
      }]
    };

  ngOnInit(): void {
  }

}
