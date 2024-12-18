import { Component, OnInit } from '@angular/core';
import { Land } from '../../land';
import { LandService } from '../land.service';
import { LandDetailsComponent } from '../land-details/land-details.component';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';
@Component({
  selector: 'app-landen',
  standalone: true,
  imports: [ RouterLink],
  templateUrl: './landen.component.html',
  styleUrl: './landen.component.css',
})
export class LandenComponent implements OnInit {
  landen!: Land[];
  geselecteerdLand!: Land;
  totalVotes: number = 0;
  constructor(private landService: LandService, private router:Router) {}
  onSelect(land: Land): void {
    this.geselecteerdLand = land;
    console.log('Geselecteerd land:', land);
  }
  onValueChange(event: number) {
    this.totalVotes = event;
  }
  ngOnInit(): void {
    this.landService.getLanden().subscribe((landen) =>
    (this.landen = landen));
  }

  naarBelgie():void{
    this.router.navigate(['/detail', 1]);
  }
}
