import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormControl, FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { StoriesComponent } from './stories/stories.component';
import {StoriesService} from './services/stories.service'
import { HttpClientModule } from '@angular/common/http';
import {Story} from './story';
import { StoryDetailsComponent } from './story-details/story-details.component';
import { StoryDetailsService } from './services/story-details.service';
import { NgxEditorModule } from 'ngx-editor';


@NgModule({
  declarations: [
    AppComponent,
    StoriesComponent,
    StoryDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    NgxEditorModule
  ],
  providers: [StoriesService,StoryDetailsService],

  bootstrap: [AppComponent]
})
export class AppModule { }
