import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { Users } from 'src/app/shared/interface/users';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
  standalone: true,
  imports: [NgFor]
})
export class UsersComponent implements OnInit{

  ELEMENT_DATA!: Users[];

  /**
   * constructor
   * 
   * @param _usersService 
   * @param _fb 
   */
    constructor(
      private _usersService: UsersService// Service de Rest/employé
    ){}

  /**
   * 
   */
  ngOnInit(): void {
    console.log('UsersComponent / ngOnInit');

    this.getUsers();
  }

    // Function de Récupération des employés :
    getUsers() {
      console.log("UsersComponent / getUsers");
      this._usersService.geUsers().subscribe({
        next: (res) => {
          this.ELEMENT_DATA = res;
          console.log("UsersComponent / getUsers / subscribe / res :", res);
        },
        error: console.log,
      });
    }
}
