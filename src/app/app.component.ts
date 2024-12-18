import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { LandenComponent } from './landen/landen.component';
@Component({
selector: 'app-root',
standalone: true,
imports: [RouterLink, RouterOutlet],
templateUrl: 'app.component.html',
styleUrl: 'app.component.css',
})
export class AppComponent {
title = 'Een landenlijst';
}