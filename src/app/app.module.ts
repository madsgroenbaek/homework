import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormControl, FormsModule } from '@angular/forms';
import { CommonModule } from "@angular/common";
import { AppComponent } from './app.component';
import { StoriesComponent } from './stories/stories.component';
import {StoriesService} from './services/stories.service'
import { HttpClientModule } from '@angular/common/http';
import {Story} from './story';
import { StoryDetailsComponent } from './story-details/story-details.component';
import { StoryDetailsService } from './services/story-details.service';
import { NgxEditorModule } from 'ngx-editor';
import { SimpleModalModule } from 'ngx-simple-modal';
import {
  MatDatepickerModule,
  MatDialogModule,
  MatInputModule, 
  MatListModule, 
  MatPaginatorModule, 
  MatProgressSpinnerModule, 
  MatSelectModule, 
  MatSidenavModule,
  MatSortModule,
  MatTableModule,
  MatToolbarModule
} from "@angular/material";
import { MatFormFieldModule} from '@angular/material';
import { CourseDialogComponent } from './story-details/CourseDialogComponent';



@NgModule({
  declarations: [
    AppComponent,
    StoriesComponent,
    StoryDetailsComponent,
    CourseDialogComponent,
    
  ],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    NgxEditorModule,
    MatDialogModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatInputModule, 
    MatListModule, 
    MatPaginatorModule, 
    MatProgressSpinnerModule, 
    MatSelectModule, 
    MatSidenavModule,
    MatSortModule,
    MatTableModule,
    MatToolbarModule

    //PopupModule.forRoot(),
    //SimpleModalModule.forRoot({container: "modal-container"})
    
    
    //ModalDialogModule.forRoot()
  ],
   entryComponents: [
  CourseDialogComponent
   ],
  providers: [StoriesService,StoryDetailsService],

  bootstrap: [AppComponent]
})
export class AppModule { }
