import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth.service';

interface user {
  id: number,
  name: string,
  email: string,
  senha: string,
  age: number
}
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string = '';
  password: string = '';
  
  users: any = [];

  invalidLogin : boolean = false;
  constructor(
    private router: Router,
    private authService: AuthService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
  }

  signIn(credentials:any) {
    this.authService.login(credentials)
      .subscribe(result => {
        if(result) {          
          let returnUrl = this.route.snapshot.queryParamMap.get('returnUrl');
          this.router.navigate([returnUrl || '/']);
        }
        else
          this.invalidLogin = true;          
      })
  }

  exibir() {
    this.authService.exibir().subscribe((data) => {
      console.log(data); 
      this.users = data;
    });
      
  }
}
