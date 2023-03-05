import { Component } from '@angular/core';

@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.css']
})
export class FormBuilderComponent {
  codigoFormBuilder = {
    codigo: `
    form = new FormGroup({
      name: new FormGroup('', Validators.required),
      contact: new FormGroup({
        email: new FormControl(),
        phone: new FormControl()
      }),
      topics: new FormArray([])
    });

    constructor(fb: FormBuilder){
      this.form = fb.group({
        name: ['', Validators.required],
        contact: fb.group({
          email: [],
          phone: []
        })
      })
    }
    `,
    titulo: 'Código 1 - Utilizando o FormBuilder',
    pagina: 'exemplo.component.ts'
  };

}
