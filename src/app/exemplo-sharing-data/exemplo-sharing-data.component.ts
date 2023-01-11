import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-exemplo-sharing-data',
  templateUrl: './exemplo-sharing-data.component.html',
  styleUrls: ['./exemplo-sharing-data.component.css']
})
export class ExemploSharingDataComponent implements OnInit {

  constructor() { }

  //A marcação output significa que newItemEvent é uma saída de dados, para enviar dados
  //é preciso um emissor de eventos, por isso esse objeto é do tipo EventEmitter
  //para usá-lo é preciso criar um método que emita o evento
  @Output() newItemEvent = new EventEmitter<string>();

  //método criado para emitir o evento, no exemplo, addNewItem será chamado no
  //template child e receberá uma string e a enviará para o eventhandler
  addNewItem(value: string) {
    this.newItemEvent.emit(value);
  }
  ngOnInit(): void {
  }

}
