import { Injectable } from '@angular/core';
import { StoriesService } from './stories.service';
import { Story} from '../Story'
@Injectable()
export class StoryDetailsService {

  constructor(private storiesService: StoriesService) { }
  getStory<Story>(id: string){
    this.storiesService.getStories()
  }
  saveStory(story: Story){
    this.storiesService.putStory(story);
  }
}
