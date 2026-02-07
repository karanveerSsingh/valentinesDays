import { Component, ElementRef, OnInit, signal, ViewChild } from '@angular/core';
import 'animate.css';
import { CeleHappy } from '../cele-happy/cele-happy';
import { Lines } from '../lines/lines';
import { RoseDay } from '../rose-day/rose-day';
@Component({
  selector: 'app-valentines-component',
  imports: [CeleHappy, Lines, RoseDay],
  templateUrl: './valentines-component.html',
  styleUrl: './valentines-component.scss',
})
export class ValentinesComponent implements OnInit {
  @ViewChild('noBtn') noBtn!: ElementRef<HTMLButtonElement>;
  @ViewChild('card') card!: ElementRef<HTMLDivElement>;
  heartList: any[] = [];
  showScheme = signal(false);
  isYesClicked = false;
  noButtonText = 'NO';
  isLastNoMessage = false;
  private noMessageIndex = 0;
  showArrow = true;
  private noMessages = [
    'NO',
    'Are you sure?',
    'Think again',
    'Really?',
    'Please?',
    "Don't do this to me!",
    'Really sure??',
    'Are you positive?',
    'Pookie please...',
    'Just think about it!',
    'If you say no, I will be really sad...',
    'I will be very very very sad...',
    'Ok fine, I will stop asking...',
    'Just kidding, say yes please! ❤️',
    'I will be very sad...',
  ];

  ngOnInit() {
    setTimeout(() => this.showScheme.set(true), 30_00);
    this.heartList = Array(50)
      .fill(0)
      .map(() => ({
        left: Math.random() * 100 + 'vw',
        animationDelay: Math.random() * 10 + 's',
        fontSize: Math.random() * 12 + 12 + 'px',
      }));
  }

  playSound() {
    const audio = new Audio(
      '../../../../assets/tum-mile-tum-mile-original-motion-picturetrack-320-kbps_BHj8W2oK.mp3',
    );
    audio.play();
    this.isYesClicked = true;
  }
  changeNoText() {
    const audio = new Audio('assets/mixkit-correct-answer-tone-2870.wav');
    audio.play();
    this.noMessageIndex++;
    this.noButtonText = this.noMessages[this.noMessageIndex];
    if (this.noMessageIndex === this.noMessages.length - 1) {
      this.isLastNoMessage = true;
    }
  }

  onScroll(event: Event) {
    const target = event.target as HTMLElement;
    if (target.scrollTop > 50) {
      this.showArrow = false;
    }
  }
}
