import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  heartList: any[] = [];
  bulbList: any[] = [];
  starList: any[] = [];
  protected readonly title = signal('valentines');
  ngOnInit() {
    this.heartList = Array(50)
      .fill(0)
      .map(() => ({
        left: Math.random() * 100 + 'vw',
        animationDelay: Math.random() * 10 + 's',
        fontSize: Math.random() * 12 + 12 + 'px',
      }));

    this.bulbList = Array(30)
      .fill(0)
      .map(() => ({
        left: Math.random() * 100 + 'vw',
        top: Math.random() * 100 + 'vh',
        animationDelay: Math.random() * 2 + 's',
      }));

    this.starList = Array(20)
      .fill(0)
      .map(() => ({
        left: Math.random() * 100 + 'vw',
        top: '-10px',
        animationDelay: Math.random() * 5 + 's',
      }));
  }
}
