import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogOverviewExampleDialogComponent } from '../dialog-overview-example-dialog/dialog-overview-example-dialog.component';
interface Food {
  value: string;
  viewValue: string;
}

interface Car {
  value: string;
  viewValue: string;
}

export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-material',
  templateUrl: './material.component.html',
  styleUrls: ['./material.component.css']
})
export class MaterialComponent {
  animal= '';
  name ='';
  /**
   *
   */
  constructor(public dialog: MatDialog) {
    
    
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialogComponent, {
      data: {name: this.name, animal: this.animal},

    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('caixa fechada');
      this.animal = result;
    })
  }
  teste = 'true';
  isChecked = true;
  selectedValue = '';
  selectedCar = '';

  favoriteSeason  = '';
  seasons : string[] = ['winter is comming', 'primavera chegou', 'Summer is hot', 'Autumn like Hades'];
  onChange($event: any) {
    console.log($event);
  }

  foods: Food[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'},
  ];

  cars: Car[] = [
    {value: 'volvo', viewValue: 'Volvo'},
    {value: 'saab', viewValue: 'Saab'},
    {value: 'mercedes', viewValue: 'Mercedes'},
  ];
}


