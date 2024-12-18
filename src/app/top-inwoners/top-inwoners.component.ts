import { Component, OnInit } from '@angular/core';
import { Land } from '../../land';
import { LandService } from '../land.service';

@Component({
  selector: 'app-top-inwoners',
  imports: [],
  templateUrl: './top-inwoners.component.html',
  styleUrl: './top-inwoners.component.css'
})
export class TopInwonersComponent implements OnInit {
  landen: Land[] = [];
  constructor(private landService: LandService){}
  ngOnInit(): void {
    this.landService.getTopLanden(3)
    .subscribe((toplanden) => (this.landen = toplanden));
  }
}
