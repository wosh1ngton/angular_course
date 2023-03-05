import { Component } from '@angular/core';

@Component({
  selector: 'app-view-encapsulation',
  templateUrl: './view-encapsulation.component.html',
  styleUrls: ['./view-encapsulation.component.css']
})
export class ViewEncapsulationComponent {
  textoEncapsulation = {
    codigo: `
      <!-- HTML gerado automaticamente: -->
      <h1 _ngcontent-lia-c47=""> teste</h1>

      <!-- CSS gerado automaticamente -->
      h1[_ngcontent-lia-c47] {
          color: red;
      }
      `,
  titulo: 'Código 1 - View Encapsulation',
  pagina: 'view-encapsulation.component.ts'}
}
