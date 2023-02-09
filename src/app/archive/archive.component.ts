import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.css']
})
export class ArchiveComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router
    ) { }
  ano: string | null = '';
  mes: string | null = '';

  
  ngOnInit(): void {
    this.route.paramMap
      .subscribe(params => {
        this.ano = params.get('year');
        this.mes = params.get('month');
      });
  }
  showThemAll() {
    this.router.navigate(['/'])
  }
}
