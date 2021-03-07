import { Injectable } from '@angular/core';
import { Video } from './../models/videos.models';
import { Subject } from 'rxjs/Subject';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VideoService {

  videoSubject = new Subject<Video[]>();
  PHP_API_SERVER = "http://localhost:8888/MoutteC/backend/api/manager";
  private videos: Video[];

  constructor(private httpClient: HttpClient) { }

  emitVideoSubject() {
    this.videoSubject.next(this.videos);
  }

  readListVideo(): Observable<Video[]> {
    this.httpClient.get<Video[]>(`${this.PHP_API_SERVER}/readListVideo.php`).subscribe(
      (reponse) => {
        this.videos = reponse;
        this.emitVideoSubject();
      },
      (error) => {
        console.log('erreur de sauvegarde' + error);
      }
    );
    return this.httpClient.get<Video[]>(`${this.PHP_API_SERVER}/readListVideo.php`);
  }

  deleteVideoById(idVideo: number) {
    return this.httpClient.delete<Video>(`${this.PHP_API_SERVER}/deleteVideo.php/?idVideo=${idVideo}`);
  }

  getVideoById(idVideo: any): Observable<any> {
    return this.httpClient.get(`${this.PHP_API_SERVER}/readSingleVideo.php/?idVideo=${idVideo}`);
  }
}
