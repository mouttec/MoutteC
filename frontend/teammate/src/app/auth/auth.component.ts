import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  authForm: FormGroup;
  errorMessage = 'Identifiant et/ou mot de passe incorrect';

  constructor(private formBuilder: FormBuilder, private authService: AuthService, private router: Router) {
    this.authForm = this.formBuilder.group({
      usernameTeammate: ['', [Validators.required, Validators.pattern(/[a-zA-Z]{4,}/)]],
      password: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  postdata(authForm: any): void {
    this.authService.userlogin(authForm.value.usernameTeammate, authForm.value.password)
    .pipe(first())
    .subscribe(
      data => {
        const redirect = this.authService.redirectUrl ? this.authService.redirectUrl : '/booking';
        this.router.navigate([redirect]);
      },
      error => {
        alert(this.errorMessage);
      }
    );
  }

  get usernammeTeammate(): AbstractControl { return this.authForm.get('usernameTeammate'); }
  get password(): AbstractControl { return this.authForm.get('password'); }



}
