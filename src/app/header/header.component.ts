import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public items: MenuItem[] = [
    { label: 'Home' },
    { label: 'About' },
    { label: 'Projects' },
    { label: 'Experience' },
    { label: 'Education' },
    { label: 'Contact' },
  ];
  public activeItem: MenuItem | undefined;
  public mobileItems: MenuItem[] = [
    {
      label: 'Home',
      command: () => {
        this.navigate('home');
      },
    },
    {
      label: 'About',
      command: () => {
        this.navigate('about');
      },
    },
    {
      label: 'Projects',
      command: () => {
        this.navigate('projects');
      },
    },
    {
      label: 'Experience',
      command: () => {
        this.navigate('experience');
      },
    },
    {
      label: 'Education',
      command: () => {
        this.navigate('education');
      },
    },
    {
      label: 'Contact',
      command: () => {
        this.navigate('contact');
      },
    },
  ];

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.setActiveItem();
  }

  private setActiveItem(): void {
    this.activeItem = this.items[0];
  }

  private navigate(fragment: string | undefined) {
    this.router.navigate([], { fragment: fragment });
  }

  public onActiveItemChange(event: MenuItem): void {
    this.navigate(event.label?.toLowerCase());
  }
}
