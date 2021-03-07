import { Component, OnInit, OnDestroy } from '@angular/core';
import { Video } from './../models/videos.models';
import { VideoService } from './../services/video.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-video-view',
  templateUrl: './video-view.component.html',
  styleUrls: ['./video-view.component.css']
})
export class VideoViewComponent implements OnInit, OnDestroy {

  videos: Video[];
  videoSubscription: Subscription;

  constructor(private videoService: VideoService) { }

  ngOnInit(): void {
    this.videoSubscription = this.videoService.videoSubject.subscribe(
      (videos: Video[]) => {
        this.videos = videos;
      }
    );
    this.videoService.readListVideo();
  }

  ngOnDestroy(): void {
    this.videoSubscription.unsubscribe();
  }
}
