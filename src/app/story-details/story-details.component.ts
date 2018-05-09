import { Component, OnInit,Input,Output,EventEmitter, ViewChild, ElementRef } from '@angular/core';
import {MatDialog,MatDialogConfig} from '@angular/material'
import { StoryDetailsService } from '../services/story-details.service';
import { Story } from '../story';
import {Form, FormGroup} from '@angular/forms'
import {CourseDialogComponent} from './CourseDialogComponent';
import { ViewContainerRef } from '@angular/core';


@Component({
  selector: 'app-story-details',
  templateUrl: './story-details.component.html',
  styleUrls: ['./story-details.component.css'],
  providers:[StoryDetailsService]
})
export class StoryDetailsComponent implements OnInit {

  constructor(private storyDetailsService: StoryDetailsService,private dialog: MatDialog) { }
  @Input() story: Story;
  
  keypresses = "";
  confirmResult = null;
  promptMessage = '';
  editorConfig = {
    "editable": true,
    "spellcheck": true,
    "height": "auto",
    "minHeight": "200",
    "width": "auto",
    "minWidth": "0",
    "translate": "yes",
    "enableToolbar": true,
    "showToolbar": true,
    "placeholder": "Enter text here...",
    "imageEndPoint": "",
    "toolbar": [
      ["fontName", "fontSize", "color"],
        ["justifyLeft", "justifyCenter", "justifyRight", "justifyFull", "indent", "outdent"],
        ["paragraph", "blockquote", "removeBlockquote", "horizontalLine", "orderedList", "unorderedList"],
        ["link", "unlink", "image", "video"],
        ['code'],
        ['icon']
    ]
}
  ngOnInit() {
  
  }
  onSaveStory(){
    var ret =this.storyDetailsService.saveStory(this.story)
    console.log(ret)
  }
  onKeyUp(event: any){
    //this.onSaveStory();
    this.keypresses = this.keypresses+event["key"];
  }
  onNewStoryEntry(){
    this.openDialog()
    //this.showConfirm()
    //this.openNewDialog()
    // var newStoryEntry = new Story;
    // newStoryEntry.Name="New Name" + new Date().toLocaleTimeString();
    // if(this.story.CollectionList == null)this.story.CollectionList = [];
    // this.story.CollectionList.push(newStoryEntry)
    // var ret =this.storyDetailsService.saveStory(this.story)
    // console.log(ret)
  }
  showConfirm() {
    
  }

  openDialog() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    dialogConfig.data = {
        id: 1,
        title: 'Angular For Beginners',
        
    };
    
    //this.dialog.open(CourseDialogComponent, dialogConfig);
    
    const dialogRef = this.dialog.open(CourseDialogComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(
        data => this.insertNewSubStory( data as FormGroup)
    );    
}
 
 
  insertNewSubStory(inpform: FormGroup){
    if(inpform==null)return;
    
    
    var newStoryEntry = new Story;
    newStoryEntry.Name=inpform.value["description"]
    newStoryEntry.CollectionType=inpform.value["collectiontype"]
    if(this.story.CollectionList == null)this.story.CollectionList = [];
    this.story.CollectionList.push(newStoryEntry)
    var ret =this.storyDetailsService.saveStory(this.story)
    console.log(ret)

  }
}



