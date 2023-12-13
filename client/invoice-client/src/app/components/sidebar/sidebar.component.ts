import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit{

  public isLightTheme = true;

  ngOnInit() {
    if (localStorage.getItem("theme")) {
      document.body.setAttribute(
        'data-theme', localStorage.getItem("theme")!
      );
    }
  }

  onThemeSwitchChange() {
    this.isLightTheme = !this.isLightTheme;
    localStorage.setItem("theme", this.isLightTheme ? 'light' : 'dark')
    document.body.setAttribute(
      'data-theme',
      this.isLightTheme ? 'light' : 'dark'
    );
  }

}
