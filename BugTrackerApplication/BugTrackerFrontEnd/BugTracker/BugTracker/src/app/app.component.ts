import { Route } from '@angular/compiler/src/core';
import { Component } from '@angular/core';
import { Router, Routes } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'BugTracker';
  constructor(private routes:Router){

  }
  ngOnInit()
  {
this.routes.navigate(['login']);
  }
}



