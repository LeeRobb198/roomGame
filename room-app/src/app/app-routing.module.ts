import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StartScreenComponent } from './components/start-screen/start-screen.component';
import { BasicRoomComponent } from './components/basic-room/basic-room.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'start-screen' },
  { path: 'start-screen', component: StartScreenComponent },
  { path: 'basic-room', component: BasicRoomComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
