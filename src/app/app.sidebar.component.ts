import {Component,Input,OnInit,EventEmitter,ViewChild,trigger,state,transition,style,animate,Inject,forwardRef} from '@angular/core';
import {Location} from '@angular/common';
import {Router} from '@angular/router';
import {MenuItem} from 'primeng/primeng';
import {AppComponent} from './app.component';
import {AppMenuComponent}  from './app.menu.component';

@Component({
    selector: 'app-sidebar',
    template: `
        <div class="layout-sidebar" [ngStyle]="{'overflow':app.sidebarActive ? 'hidden' : 'visible'}">
            <div class="layout-tabmenu">
                <ul class="layout-tabmenu-nav">
                    <li [ngClass]="{'active-item':app.activeTabIndex === 0}">
                        <a href="#" class="ripplelink tabmenuitem-link" (click)="app.onTabClick($event, 0)"><i class="material-icons">home</i></a>
                        <div class="layout-tabmenu-tooltip">
                            <div class="layout-tabmenu-tooltip-arrow"></div>
                            <div class="layout-tabmenu-tooltip-text">Features</div>
                        </div>
                    </li>
                    <li [ngClass]="{'active-item':app.activeTabIndex === 1}">
                        <a href="#" class="ripplelink tabmenuitem-link" (click)="app.onTabClick($event, 1)"><i class="material-icons">inbox</i></a>
                        <div class="layout-tabmenu-tooltip">
                            <div class="layout-tabmenu-tooltip-arrow"></div>
                            <div class="layout-tabmenu-tooltip-text">Inbox</div>
                        </div>
                    </li>
                    <li [ngClass]="{'active-item':app.activeTabIndex === 2}">
                        <a href="#" class="ripplelink tabmenuitem-link" (click)="app.onTabClick($event, 2)"><i class="material-icons">event</i></a>
                        <div class="layout-tabmenu-tooltip">
                            <div class="layout-tabmenu-tooltip-arrow"></div>
                            <div class="layout-tabmenu-tooltip-text">Calendar</div>
                        </div>
                    </li>
                    <li [ngClass]="{'active-item':app.activeTabIndex === 3}">
                        <a href="#" class="ripplelink tabmenuitem-link" (click)="app.onTabClick($event, 3)"><i class="material-icons">insert_chart</i></a>
                        <div class="layout-tabmenu-tooltip">
                            <div class="layout-tabmenu-tooltip-arrow"></div>
                            <div class="layout-tabmenu-tooltip-text">Projects</div>
                        </div>
                    </li>
                    <li [ngClass]="{'active-item':app.activeTabIndex === 4}">
                        <a href="#" class="ripplelink tabmenuitem-link" (click)="app.onTabClick($event, 4)"><i class="material-icons">people</i></a>
                        <div class="layout-tabmenu-tooltip">
                            <div class="layout-tabmenu-tooltip-arrow"></div>
                            <div class="layout-tabmenu-tooltip-text">Team</div>
                        </div>
                    </li>
                </ul>
                <div class="layout-tabmenu-contents">
                    <div class="layout-tabmenu-content" [ngClass]="{'layout-tabmenu-content-active': app.activeTabIndex === 0}">
                        <div class="layout-submenu-title clearfix">
                            <span>Features</span>
                            <a href="#" class="menu-button material-icons" (click)="app.closeSidebar($event)">menu</a>
                        </div>
                        <div class="layout-submenu-content">
                            <div #layoutMenuScroller class="nano">
                                <div class="nano-content menu-scroll-content">
                                    <app-menu [reset]="resetMenu"></app-menu>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="layout-tabmenu-content" [ngClass]="{'layout-tabmenu-content-active': app.activeTabIndex === 1}">
                        <div class="layout-submenu-title clearfix">
                            <span>Inbox</span>
                            <a href="#" class="menu-button material-icons" (click)="app.closeSidebar($event)">menu</a>
                        </div>
                        <div class="layout-submenu-content">
                            <div class="nano">
                                <div class="nano-content menu-scroll-content" tabindex="0" style="margin-right: -15px;">
                                    <div class="inbox-tab">
                                        <ul>
                                            <li class="clearfix">
                                                <img src="assets/layout/images/avatar1.png" alt="" width="45">
                                                <span class="name">Joshua Williams</span>
                                                <span class="message">Reports attached</span>
                                            </li>
                                            <li class="clearfix">
                                                <img src="assets/layout/images/avatar1.png" alt="" width="45">
                                                <span class="name">Joshua Williams</span>
                                                <span class="message">About the meeting</span>
                                            </li>
                                            <li class="clearfix">
                                                <img src="assets/layout/images/avatar2.png" alt="" width="45">
                                                <span class="name">Emily Clark</span>
                                                <span class="message">TODO Update</span>
                                            </li>
                                            <li class="clearfix">
                                                <img src="assets/layout/images/avatar3.png" alt="" width="45">
                                                <span class="name">Tim Johnson</span>
                                                <span class="message">Expense Reports</span>
                                            </li>
                                            <li class="clearfix">
                                                <img src="assets/layout/images/avatar4.png" alt="" width="45">
                                                <span class="name">David Stark</span>
                                                <span class="message">Rating Reviews</span>
                                            </li>
                                        </ul>
                                        <div class="inbox-labels">
                                            <span>Labels</span>
                                            <ul>
                                                <li class="clearfix">
                                                    <span class="inbox-label">Work</span>
                                                    <span class="inbox-label-badge">4</span>
                                                </li>
                                                <li class="clearfix">
                                                    <span class="inbox-label">Personel</span>
                                                    <span class="inbox-label-badge">2</span>
                                                </li>
                                                <li class="clearfix">
                                                    <span class="inbox-label">Shared</span>
                                                    <span class="inbox-label-badge">3</span>
                                                </li>
                                                <li class="clearfix">
                                                    <span class="inbox-label">General</span>
                                                    <span class="inbox-label-badge">5</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="layout-tabmenu-content" [ngClass]="{'layout-tabmenu-content-active': app.activeTabIndex === 2}">
                        <div class="layout-submenu-title clearfix">
                            <span>Calendar</span>
                            <a href="#" class="menu-button material-icons" (click)="app.closeSidebar($event)">menu</a>
                        </div>
                        <div class="layout-submenu-content">
                            <div class="nano">
                                <div class="nano-content menu-scroll-content" tabindex="0" style="margin-right: -15px;">
                                    <div class="calendar-tab">
                                        <ul>
                                            <li class="clearfix">
                                                <div class="calendar-event-date">
                                                    <span>21</span>
                                                    <span>OCT</span>
                                                </div>
                                                <div class="calendar-event-detail">
                                                    <span class="calendar-event-title">Project Meeting</span>
                                                    <i class="material-icons">place</i>
                                                    <span class="calendar-event-location">Chicago</span>
                                                </div>
                                            </li>
                                            <li class="clearfix">
                                                <div class="calendar-event-date">
                                                    <span>13</span>
                                                    <span>NOV</span>
                                                </div>
                                                <div class="calendar-event-detail">
                                                    <span class="calendar-event-title">Presentation 1</span>
                                                    <i class="material-icons">place</i>
                                                    <span class="calendar-event-location">New York</span>
                                                </div>
                                            </li>
                                            <li class="clearfix">
                                                <div class="calendar-event-date">
                                                    <span>01</span>
                                                    <span>DEC</span>
                                                </div>
                                                <div class="calendar-event-detail">
                                                    <span class="calendar-event-title">Presentation 2</span>
                                                    <i class="material-icons">place</i>
                                                    <span class="calendar-event-location">New York</span>
                                                </div>
                                            </li>
                                            <li class="clearfix">
                                                <div class="calendar-event-date">
                                                    <span>25</span>
                                                    <span>DEC</span>
                                                </div>
                                                <div class="calendar-event-detail">
                                                    <span class="calendar-event-title">New Year Party</span>
                                                    <i class="material-icons">place</i>
                                                    <span class="calendar-event-location">San Francisco</span>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="layout-tabmenu-content" [ngClass]="{'layout-tabmenu-content-active': app.activeTabIndex === 3}">
                        <div class="layout-submenu-title clearfix">
                            <span>Projects</span>
                            <a href="#" class="menu-button material-icons" (click)="app.closeSidebar($event)">menu</a>
                        </div>
                        <div class="layout-submenu-content">
                            <div class="nano">
                                <div class="nano-content menu-scroll-content" tabindex="0" style="margin-right: -15px;">
                                    <div class="projects-tab">
                                        <ul>
                                            <li class="clearfix">
                                                <i class="fa fa-github"></i>
                                                <span class="project-title">GitHub Tasks</span>
                                                <span>3 open, 4 closed</span>
                                                <div class="project-progressbar">
                                                    <div class="project-progressbar-value" style="width: 50%"></div>
                                                </div>
                                            </li>
                                            <li class="clearfix">
                                                <i class="fa fa-youtube"></i>
                                                <span class="project-title">YouTube Videos</span>
                                                <span>12 new, 2 subscribers</span>
                                                <div class="project-progressbar">
                                                    <div class="project-progressbar-value" style="width: 20%"></div>
                                                </div>
                                            </li>
                                            <li class="clearfix">
                                                <i class="fa fa-twitter"></i>
                                                <span class="project-title">Twitter Posts</span>
                                                <span>24 new messages</span>
                                                <div class="project-progressbar">
                                                    <div class="project-progressbar-value" style="width: 65%"></div>
                                                </div>
                                            </li>
                                            <li class="clearfix">
                                                <i class="fa fa-facebook"></i>
                                                <span class="project-title">Facebook Messages</span>
                                                <span>8 total, 4 unread</span>
                                                <div class="project-progressbar">
                                                    <div class="project-progressbar-value" style="width: 80%"></div>
                                                </div>
                                            </li>
                                            <li class="clearfix">
                                                <i class="fa fa-linkedin"></i>
                                                <span class="project-title">Linkedin Contacts</span>
                                                <span>90 total, 45 pending</span>
                                                <div class="project-progressbar">
                                                    <div class="project-progressbar-value" style="width: 90%"></div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="layout-tabmenu-content" [ngClass]="{'layout-tabmenu-content-active': app.activeTabIndex === 4}">
                        <div class="layout-submenu-title clearfix">
                            <span>Team</span>
                            <a href="#" class="menu-button material-icons" (click)="app.closeSidebar($event)">menu</a>
                        </div>
                        <div class="layout-submenu-content">
                            <div class="nano">
                                <div class="nano-content menu-scroll-content" tabindex="0" style="margin-right: -15px;">
                                    <div class="team-tab">
                                        <ul>
                                            <li class="clearfix">
                                                <img src="assets/layout/images/avatar1.png" alt="" width="45">
                                                <span class="name">Joshua Williams</span>
                                                <span class="location">New York, USA</span>
                                            </li>
                                            <li class="clearfix">
                                                <img src="assets/layout/images/avatar2.png" alt="" width="45">
                                                <span class="name">Jennifer Clarkson</span>
                                                <span class="location">Paris, France</span>
                                            </li>
                                            <li class="clearfix">
                                                <img src="assets/layout/images/avatar3.png" alt="" width="45">
                                                <span class="name">Tim Johnson</span>
                                                <span class="location">London, United Kingdom</span>
                                            </li>
                                            <li class="clearfix">
                                                <img src="assets/layout/images/avatar4.png" alt="" width="45">
                                                <span class="name">David Stark</span>
                                                <span class="location">San Francisco, USA</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `
})
export class AppSideBarComponent {
    
    constructor(@Inject(forwardRef(() => AppComponent)) public app:AppComponent) {}
    
}