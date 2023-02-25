import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, throwError } from 'rxjs';
import { AuthService } from '../auth.service';
import { AppError } from '../common/app-error';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  users: any = [];

  invalidLogin: boolean = false;
  constructor(
    private router: Router,
    private authService: AuthService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
  }



  signIn(credentials: any) {
    this.authService.login(credentials)
      .subscribe({
        next: result => {
          console.log(result);
          if (result) {
            let returnUrl = this.route.snapshot.queryParamMap.get('returnUrl');
            this.router.navigate([returnUrl || '/']);
          }
        },
        error: (e: AppError) => {
          this.invalidLogin = true;
        }
      }
      )
  }

  exibir() {
    this.authService.exibir().subscribe((data) => {
      console.log(data);
      this.users = data;
    });

  }
}
