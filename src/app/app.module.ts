import { HttpClientModule } from '@angular/common/http';
import { AboutUsPageModule } from './../pages/about-us/about-us.module';
import { AboutUsPage } from './../pages/about-us/about-us';
import { NotificationsPageModule } from './../pages/notifications/notifications.module';
import { TabsPageModule } from './../pages/tabs/tabs.module';
import { ProfilePageModule } from './../pages/profile/profile.module';
import { RegisterGradPageModule } from './../pages/register-grad/register-grad.module';
import { SorgPage } from './../pages/sorg/sorg';
import { NewsfeedPageModule } from './../pages/newsfeed/newsfeed.module';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import { firebaseConfig } from '../config';
import { LoginPageModule } from './../pages/login/login.module';
import { MyApp } from './app.component';
import { AuthProvider } from '../providers/auth/auth';
import { LoginPage } from '../pages/login/login';
import { SorgPageModule } from '../pages/sorg/sorg.module';
import { RegisterStudentPageModule } from '../pages/registerStudent/registerStudent.module';
import { RegisterGradPage } from '../pages/register-grad/register-grad';
import { PostPageModule } from '../pages/post/post.module';
import { HttpModule } from '@angular/http';
import { PostProvider } from '../providers/post/post';


@NgModule({
  declarations: [
    MyApp,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    LoginPageModule,
    RegisterStudentPageModule,
    NewsfeedPageModule,
    SorgPageModule,
    RegisterGradPageModule,
    ProfilePageModule, 
    PostPageModule,
    HttpModule,
    TabsPageModule,
    NotificationsPageModule,
    AboutUsPageModule,
    HttpClientModule,

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    SorgPage,
    RegisterGradPage,
  ],
  providers: [
    StatusBar,
    AngularFireAuth,
    AngularFireDatabase,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthProvider,
    PostProvider,
      ]
})
export class AppModule {}
