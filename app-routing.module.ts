import { CarouselComponent } from './carousel/carousel.component';
import { PhotosComponent } from './photos/photos.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule,  } from '@angular/router';




export const routes: Routes = [
    {path: '', component: CarouselComponent, pathMatch: 'full'},

    {path: 'photos', component: PhotosComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {

    })],
    exports: [RouterModule],
    providers: [],
})
export class AppRoutingModule {
}
