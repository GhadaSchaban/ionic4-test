import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

// import { timer } from 'rxjs/observable/timer';

// import { Network } from '@ionic-native/network/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})

export class AppComponent {
  // showSplash = true;
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
    // private network: Network,
  )
  {
    this.initializeApp();
  }

  // splash()
  // {
  //   if(this.platform.is('desktop')){
  //     console.log('%cFIXME: Should call a preloader for Desktop instead of Spalsh','color:red');
  //     //Should initiate a preloader here for Desktop browsers
  //   }
  //   else {
  //     this.splashScreen.hide();
  //     timer(3000).subscribe(()=>{this.showSplash = false});
  //   }
  // }
  //
  // netOnOrOff()
  // {
  //   if(this.platform.is('desktop')){
  //     console.log('%cFIXME: Should do a different Network detect. for Desktop','color:red;');
  //     // over here, Cordova network info doesn't support Desktop
  //   }
  //   else {
  //     console.log('FIXME: Other platforms not Desktop, need network detection method')
  //     this.network.onDisconnect().subscribe(() => {alert('Disconnected');});
  //     this.network.onConnect().subscribe(()=> {alert('Connected');});
  //   }
  // }
  //
  // statusBarOnMobile()
  // {
  //   if(this.platform.is('desktop')){
  //     console.log('%cDesktop detected -> Not Calling statusBar styleDefault method','color:blue;');
  //     // over here, Cordova network info doesn't support Desktop
  //   }
  //   else {
  //     this.statusBar.styleDefault();
  //   }
  // }

  initializeApp()
  {
      this.platform.ready().then(() => {

        // this.statusBarOnMobile();
        // this.splash();
        // this.netOnOrOff();

        this.statusBar.styleDefault();
        this.splashScreen.hide();
    });
  }

}
