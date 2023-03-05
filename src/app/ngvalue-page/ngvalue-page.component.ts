import { Component } from '@angular/core';

@Component({
  selector: 'app-ngvalue-page',
  templateUrl: './ngvalue-page.component.html',
  styleUrls: ['./ngvalue-page.component.css']
})
export class NgvaluePageComponent {
  textoObjetoContact = `
  contactMethods = [
    {id: 1, name: 'Email'},
    {id: 2, name: 'Telefone'}
  ]
  `
  textoSelectBox = `
    <div class="form-group">
      <label for="contactMethod"> Forma de Contato </label>
      <select multiple ngModel name="contactMethod" id="contactMethod" class="form-control">
          <option value=""></option>
          <option *ngFor="let contacts of contactMethods" [value]="contacts.id">
              {{contacts.name}}
          </option>
      </select>
    </div>
  `

  textoNgValue = `
  ...
    <option *ngFor="let contacts of contactMethods" [ngValue]="contacts">
      {{contacts.name}}
    </option>
  ...
  `
}
