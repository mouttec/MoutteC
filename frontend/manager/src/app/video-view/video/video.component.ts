import { Component, OnInit, Input } from '@angular/core';
import { Video } from './../../models/videos.models';
import { VideoService } from './../../services/video.service';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit {

  @Input() IndexOfVideo: number;
  @Input() idVideo: number;
  @Input() firstNameVideo: string;
  @Input() lastNameVideo: string;
  @Input() urlVideo: string;
  @Input() licensePlateVideo: string;
  @Input() dateVideo: string;

  videos: Video[];

  constructor(private videoService: VideoService) { }

  ngOnInit(): void {
  }

  onDeleteVideo(idVideo) {
    this.videoService.deleteVideoById(idVideo).subscribe(
      (video: Video) => {
        console.log("Video delected", video);
        this.videoService.readListVideo().subscribe((videos: Video[]) => {
          this.videos = videos
        })
      }
    )
  }

}
