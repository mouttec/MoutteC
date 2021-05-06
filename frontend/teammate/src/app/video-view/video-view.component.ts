import { Subscription } from 'rxjs';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { VideoService } from '../services/video.service';

@Component({
  selector: 'app-video-view',
  templateUrl: './video-view.component.html',
  styleUrls: ['./video-view.component.css']
})
export class VideoViewComponent implements OnInit, OnDestroy {

  videos: any[];
  videoSubscription: Subscription;

  constructor(private videoService: VideoService) { }

  ngOnInit(): void {
    this.videoSubscription = this.videoService.videoSubject.subscribe(
      (videos: any[]) => {
        this.videos =  videos;
      }
    );
    this.videoService.emitVideoSubject();
  }

  ngOnDestroy(): void {
    this.videoSubscription.unsubscribe();
  }

}
