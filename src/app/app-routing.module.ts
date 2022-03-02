import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './containers/home/home.component';
import { ResultsComponent } from './containers/results/results.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'result', component: ResultsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
