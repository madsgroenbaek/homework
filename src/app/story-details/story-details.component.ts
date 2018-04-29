import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { StoryDetailsService } from '../services/story-details.service';
import { Story } from '../story';
import {Form} from '@angular/forms'


@Component({
  selector: 'app-story-details',
  templateUrl: './story-details.component.html',
  styleUrls: ['./story-details.component.css'],
  providers:[StoryDetailsService]
})
export class StoryDetailsComponent implements OnInit {

  constructor(private storyDetailsService: StoryDetailsService) { }
  @Input() story: Story;
  keypresses = "";
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
  allowDrop(event){
    event.preventDefault()
  }
}

// import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
// import {Story} from '../Story'
// import {Form} from '@angular/forms'

// @Component({
//   selector: 'app-story-form',
//   templateUrl: './story-form.component.html',
//   styleUrls: ['./story-form.component.css']
  
// })
// export class StoryFormComponent implements OnInit {
  
//   @Input() story: Story;
//   //@Output() valueChange:EventEmitter<Story> = new EventEmitter<Story>()

//   //story: Story;
  
//   constructor() {
    
//    }

//   ngOnInit() {
//     //this.story=new Story("ssss","sss","sss","sss")
//   }

// }

