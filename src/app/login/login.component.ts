import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user:User = new User();

  error: any;

  constructor(private userService: UserService) { }


  ngOnInit() { }

  login(): void {

    this.userService.login(this.user).subscribe(
      (response: any) => {
        console.log(response);
        if (response.success == false) {
          this.error = true;
        }
      }
    )
  }

}
