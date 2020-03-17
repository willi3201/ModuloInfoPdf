import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { InformesComponent } from './informes/informes.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule, MatIcon } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import { PopUpComponent } from './informes/pop-up/pop-up.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { FormsModule } from '@angular/forms';
import { ConfirmarComponent } from './informes/confirmar/confirmar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FilterIdPipe } from './shared/filter-id.pipe';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NestedComponent } from './nested.component';
import { CKEditorModule } from 'ng2-ckeditor';
import { KeyboardShortcutsComponent, KeyboardShortcutsModule } from 'ng-keyboard-shortcuts';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    InformesComponent,
    PopUpComponent,
    ConfirmarComponent,
    FilterIdPipe,
    NestedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatMenuModule,
    MatIconModule,
    MatSidenavModule,
    MatToolbarModule,
    KeyboardShortcutsModule.forRoot(),
    MatDialogModule,
    MatProgressSpinnerModule,
    CKEditorModule,
    FormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
