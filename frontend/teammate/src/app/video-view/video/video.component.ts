import { VideoService } from './../../services/video.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit {

  @Input() indexOfVideo: number;
  @Input() idVideo: number;
  @Input() urlVideo: number;
  @Input() idContract: number;
  @Input() dateVideo: string;
  @Input() videoType: string;

  constructor(private videoService: VideoService) { }

  ngOnInit(): void {
  }

}
