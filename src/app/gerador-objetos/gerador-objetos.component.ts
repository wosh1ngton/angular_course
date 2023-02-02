import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-gerador-objetos',
  templateUrl: './gerador-objetos.component.html',
  styleUrls: ['./gerador-objetos.component.css']
})
export class GeradorObjetosComponent implements OnInit {
  form = new FormGroup({
    topics: new FormArray([])
  });
  constructor() { }

  ngOnInit(): void {
  }
  get topics() {
    return this.form.get('topics') as FormArray;
  }
  addTopic(topic: HTMLInputElement) {
    this.topics.push(new FormControl(topic.value));
    topic.value='';
  }
  removeTopic(topic: AbstractControl) {
    let index = this.topics.controls.indexOf(topic);
    this.topics.removeAt(index);
  }
}
