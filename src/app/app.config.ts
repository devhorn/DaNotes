import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), importProvidersFrom(provideFirebaseApp(() => initializeApp({"projectId":"danotes-c1c72","appId":"1:1087251401418:web:2126796bbc580898d38233","storageBucket":"danotes-c1c72.firebasestorage.app","apiKey":"AIzaSyBwAh8ye08_DWR_c4lF3IRr_I5LO_lu3Pk","authDomain":"danotes-c1c72.firebaseapp.com","messagingSenderId":"1087251401418"}))), importProvidersFrom(provideFirestore(() => getFirestore()))]
};
