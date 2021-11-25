import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './containers/home/home.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatCardModule } from '@angular/material/card';
import { UserFormComponent } from './components/impl/user-form/user-form.component';
import { GradeCardComponent } from './components/shared/grade-card/grade-card.component';
import { ProgressBarComponent } from './components/shared/progress-bar/progress-bar.component';
import { ButtonsComponent } from './components/shared/buttons/buttons.component';
import { GradeOverviewCardComponent } from './components/impl/grade-overview-card/grade-overview-card.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, UserFormComponent, GradeCardComponent, ProgressBarComponent, ButtonsComponent, GradeOverviewCardComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatCardModule,
    MatProgressBarModule,
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent],
})
export class AppModule {}
