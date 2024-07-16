import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JoinTeamComponent } from './join-team/join-team.component';
import { MediaQueriesComponent } from './media-queries/media-queries.component';
import { FormComponent } from './form/form.component';

const routes: Routes = [{ path: 'request-for-services', component: FormComponent },
  { path: 'join-our-team', component: JoinTeamComponent },
  { path: 'media-queries', component: MediaQueriesComponent },
  { path: '', redirectTo: '/request-for-services', pathMatch: 'full' }, // default route
  { path: '**', redirectTo: '/request-for-services' } // wildcard route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
