import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { StoriesService } from '../services/stories.service';
import { Story } from '../story';
import {Observable} from 'rxjs/observable'
import {ReactiveFormsModule, FormGroup,Validator,FormBuilder, FormControl} from "@angular/forms";
import {StoryDetailsComponent } from '../story-details/story-details.component';

@Component({
  selector: 'app-stories',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.css'],
  
  
})
export class StoriesComponent implements OnInit {
  form: FormGroup;
  newStoryName:String;
  stories: Observable <Story[]>;
  strT=new FormControl();
  //stories: new FormControl();
  constructor(private storiesService: StoriesService,fb: FormBuilder) {
    this.stories = new Observable<Story[]>();
    this.form = fb.group({
      
      "strT": "Ole",
      "Name" : [''],
      strs: this.stories
    })
    
     
   }
  testval: string;
  selectedStory: Story;
  ngOnInit() {
    this.getStories()
   //this.putStory();
  }
  select(story: Story){
    this.selectedStory=story;
  }
  getStories(): void {
    this.stories = this.storiesService.getStories();
    
    console.log(this.stories)
  }
  putStory(): void{
   this.storiesService.putStory(new Story);   
  }
  get diagnostic() { return JSON.stringify(this.stories); }
  modelChanged($event){
   this.testval="lkjasd"
  }
  onItemDrop(item: any){
    console.log(item)
  }
}
