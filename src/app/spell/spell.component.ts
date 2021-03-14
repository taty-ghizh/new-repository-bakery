import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-spell',
  templateUrl: './spell.component.html',
  styleUrls: ['./spell.component.scss']
})
export class SpellComponent implements OnInit {
  username: string;
  password: string;
  constructor( private router: Router) { }

  ngOnInit(): void {
  }
  login(){
    if(this.username == 'baker' && this.password == 'bulka'){
      localStorage.setItem('token', 'hellorememberme')
      this.router.navigate(['backery'])
      console.log('this works')
    } else {
      alert('username or pass is wrong!!')
    }
  }
}


