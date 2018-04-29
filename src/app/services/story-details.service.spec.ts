import { TestBed, inject } from '@angular/core/testing';

import { StoryDetailsService } from './story-details.service';

describe('StoryDetailsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StoryDetailsService]
    });
  });

  it('should be created', inject([StoryDetailsService], (service: StoryDetailsService) => {
    expect(service).toBeTruthy();
  }));
});
