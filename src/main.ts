import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { AppModule } from './app/app.module';
var Backendless = require('backendless/libs/backendless.js');

var APP_ID:string = '065EBAA3-FFB1-6E64-FF4E-8ABF6F422200';
var APP_KEY:string = '3F9F3D33-3CBD-83D2-FFE3-C0ED75A4C200';
var APP_VER:string = 'v1';

Backendless.initApp(APP_ID, APP_KEY, APP_VER);

if (process.env.ENV === 'production') {
  enableProdMode();
}
platformBrowserDynamic().bootstrapModule(AppModule);