


import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { CarouselComponent } from './carousel/carousel.component';
import { TodosComponent } from './todos/todos.component';
import { ContentComponent } from './content/content.component';
import { MyProfileComponent } from './my-profile/my-profile.component';

import { CalendarComponent } from './kalender/kalender.component';
import { PhotosComponent } from './photos/photos.component';
import { AppRoutingModule} from './app-routing.module';
import { StartComponent } from './start/start.component';
import { HeaderComponent } from './header/header.component';
import { GoogleComponent } from './google/google.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    CarouselComponent,
    TodosComponent,
    ContentComponent,
    MyProfileComponent,

    CalendarComponent,

    PhotosComponent,

    StartComponent,

    HeaderComponent,

    GoogleComponent,



  ],
  imports: [
    BrowserModule,
    AppRoutingModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
