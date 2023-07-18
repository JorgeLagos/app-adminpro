import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: [
  ]
})
export class IncrementadorComponent implements OnInit {

  @Input('valor') progreso: number = 40 //@Input() progreso: number = 40
  @Input() btnClass: string = 'btn-primary'

  @Output() setValor: EventEmitter<number> = new EventEmitter()

  // get getPorcentaje() {
  //   return `${this.progreso}%`
  // }

  ngOnInit(): void {
    this.btnClass = `btn ${this.btnClass}`
  }

  setPorcentaje(valor: number): void {
    this.progreso += valor
    this.setValor.emit(this.progreso)

    if (this.progreso >= 100 && valor >= 0){
      this.progreso = 100
      this.setValor.emit(100)
    }

    if (this.progreso <= 0 && valor < 0) {
      this.progreso = 0
      this.setValor.emit(0)
    }
  }

  onChange(newValue: number): void {
    if (newValue >= 100) {
      this.progreso = 100
    } else if (newValue <= 0) {
      this.progreso = 0
    } else {
      this.progreso = newValue
    }

    this.setValor.emit(this.progreso)
  }

}
