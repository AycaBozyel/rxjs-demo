import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isCountdownActive: boolean = false;
  count: number = 0;
  initialCount: number = 0;
  title: string = 'Angular Countdown App'; 

  startCountdown() {
    if (this.isCountdownActive || this.count <= 0) {
      return; 
    }
    
    this.initialCount = this.count;
    this.isCountdownActive = true; 
    const interval = setInterval(() => {
      if (this.count > 0) {
        this.count--;
      } else {
        clearInterval(interval); 
        this.isCountdownActive = false; 
      }
    }, 1000);
  }
}
