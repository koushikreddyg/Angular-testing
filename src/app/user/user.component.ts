import { DataService } from './../shared/data.service';
import { UserService } from './user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bc-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  providers: [UserService, DataService]
})
export class UserComponent implements OnInit {
  user:{name:string};
  isLogged=false;
  data: string;
  constructor(private userService: UserService, private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getDetails().then((data: string)=>{
      this.data= data;
    });
    this.user=this.userService.user;
  }

}
