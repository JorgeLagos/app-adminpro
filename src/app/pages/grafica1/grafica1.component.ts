import { Component } from '@angular/core';

@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styles: [
  ]
})
export class Grafica1Component {
  
  public labels1: string[] = ['Pan', 'Refresco', 'Tacos']
  public data1:   number[] = [10, 20, 30]
  public colors1: string[] = ['#0CC5EB', '#16DE91', '#0CEB17']

  public labels2: string[] = ['Pollo', 'Carne', 'Pescado']
  public data2:   number[] = [50, 20, 30]
  public colors2: string[] = ['#ED18C9', '#F7D22A', '#F7640C']

  public labels3: string[] = ['Ensalada', 'Frijoles', 'Frutas']
  public data3:   number[] = [40, 15, 8]
  public colors3: string[] = ['#9605F7', '#052CF7', '#0781ED']

}
