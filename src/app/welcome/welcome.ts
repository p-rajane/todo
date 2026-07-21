import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-welcome',
  imports: [RouterModule],
  templateUrl: './welcome.html',
  styleUrl: './welcome.css',
})
export class Welcome implements OnInit{

  message = "Hello Iniit()"
  username = 'Pramod'
  
  constructor(private route : ActivatedRoute) {

  }
  ngOnInit(): void {
    this.username = this.route.snapshot.params['name']
    
  }
}
