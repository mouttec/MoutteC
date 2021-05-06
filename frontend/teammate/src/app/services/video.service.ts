import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Video } from '../models/videos.model';

@Injectable({
  providedIn: 'root'
})
export class VideoService {

  videoSubject = new Subject<any[]>();

  private videos: Video[] = [
    {
      idVideo: 1,
      urlVideo: 'abc.pdf'
    }
  ];


  constructor() { }

  emitVideoSubject(): void {
    this.videoSubject.next(this.videos.slice());
  }

  addVideo(video: Video): void {
    this.videos.push(video);
    this.emitVideoSubject();
  }

  getVideoById(idVideo: number): any {
    const video = this.videos.find(
      (videoObject) => {
        return videoObject.idVideo === idVideo;
      }
    );
    return video;
  }
}
