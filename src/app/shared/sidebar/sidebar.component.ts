import { AfterViewInit, Component, OnInit } from '@angular/core';
import { SidebarService } from '../../services/sidebar.service';

declare const $: any;

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: [
  ]
})
export class SidebarComponent implements OnInit, AfterViewInit {

  public menuItems: any[] = []

  constructor(
    private sidebarService: SidebarService
  ) {
    this.menuItems = sidebarService.menu
  }

  ngAfterViewInit(): void {
    $('#sidebarnav').AdminMenu()
  }

  ngOnInit(): void {
    console.log($)
  }

}
