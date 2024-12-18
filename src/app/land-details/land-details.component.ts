import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Land } from '../../land';
import { LandService } from '../land.service';
import { FormsModule } from '@angular/forms';
import { Location } from '@angular/common';

@Component({
  selector: 'app-land-details',
  imports: [FormsModule],
  templateUrl: './land-details.component.html',
  styleUrl: './land-details.component.css'
})

export class LandDetailsComponent implements OnInit {
  constructor(private landService: LandService,
  private route: ActivatedRoute, private location:Location) {}
  land!: Land;
  ngOnInit(): void {
  this.getLand();
  }
  getLand() {
  const id = +this.route.snapshot.paramMap.get('id')!;
  this.landService.getLand(id).subscribe((land) => (this.land = land));
  }
  goBack():void{
    this.location.back();
  }
  }
