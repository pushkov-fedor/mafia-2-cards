import { CommonService } from './common.service';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { NavigationEnd, Router, RouterEvent } from '@angular/router';
import { filter } from 'rxjs/operators';

interface RouterPath {
  path: string;
  title: string;
  hasBackBtn: boolean;
}

const routes: RouterPath[] = [
  {
    path: '/room',
    title: 'Главная',
    hasBackBtn: false,
  },
  {
    path: '/room/create',
    title: 'Создание комнаты',
    hasBackBtn: true,
  },
  {
    path: '/room/join',
    title: 'Присоединиться',
    hasBackBtn: true,
  },
  {
    path: '/room/wait',
    title: 'Ждем участников',
    hasBackBtn: true,
  },
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(
    private router: Router,
    private location: Location,
    private commonService: CommonService,
  ) {}

  currentRoute?: RouterPath;

  ngOnInit() {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event) => {
        this.currentRoute = routes.find(
          (route) => route.path == (event as RouterEvent).url,
        );
      });
    // this.commonService.openAlertModal({ message: 'SOSI' });
  }

  onBackClick() {
    this.location.back();
  }
}
