import { File } from '@ionic-native/file';
import { Transfer } from '@ionic-native/transfer';
import { ImagePicker } from '@ionic-native/image-picker';
import { MsgService } from './../pages/service/msgService';
import { FileService } from './../pages/service/fileService';
import { CreateMessagePage } from './../pages/home/message/createMessage';
import { HttpService } from './../pages/service/httpService';
import { StorageService } from './../pages/service/storageService';
import { RegisterPage } from './../pages/register/register';
import { BetterLogger } from './../pages/log/betterLogger';
import { UserService } from './../pages/service/userService';
import { Logger } from './../pages/log/logger';
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { LoginPage } from '../pages/login/login';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { MessageDetailPage } from "../pages/home/message/message";
import { HttpModule,JsonpModule } from "@angular/http";
import { Camera } from '@ionic-native/camera';

@NgModule({
  declarations: [
    LoginPage,
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    MessageDetailPage,
    RegisterPage,
    CreateMessagePage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    JsonpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    LoginPage,
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    MessageDetailPage,
    RegisterPage,
    CreateMessagePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    UserService,
    StorageService,
    BetterLogger,
    HttpService,
    FileService,
    Camera,
    ImagePicker,
    Transfer,
    File,
    MsgService,
    {provide:Logger,useExisting:BetterLogger},
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
