import { ViewportScroller } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { distinctUntilChanged, filter } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'portfolio-app';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.fragment.pipe(filter((r) => !!r)).subscribe((fragment) => {
      if (!fragment) return;
      document.getElementById(fragment)!.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest',
      });
    });
  }
}
