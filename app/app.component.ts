import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { InfomemberPage } from '../pages/infomember/infomember';
import { Register2Page } from '../pages/register2/register2';
import { PostproductPage } from '../pages/postproduct/postproduct';
import { CatalogPage } from '../pages/catalog/catalog';
import { Register2_1Page } from '../pages/register2-1/register2-1';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'login', component: LoginPage },
      { title: 'info', component: InfomemberPage },
      { title: 'register2', component: Register2Page },
      { title: 'register2_1', component: Register2_1Page },
      { title: 'PostproductPage', component: PostproductPage },
      { title: 'Catalog', component: CatalogPage }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
