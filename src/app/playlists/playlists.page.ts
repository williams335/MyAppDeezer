import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';

import { Playlist } from '../../models/modelsplaylists';
import { ServicesdeezerService } from '../servicesdeezer/servicesdeezer.service';

@Component({
  selector: 'app-playlists',
  templateUrl: './playlists.page.html',
  styleUrls: ['./playlists.page.scss'],
})
export class PlaylistsPage implements OnInit {

  tracklist: string;
  cover_big:string;
  title1:string;
 
  playlists: Playlist = new Playlist() ;

  private  audio: HTMLAudioElement;

 


  constructor(private router: Router, private route: ActivatedRoute, private servicesdeezerService: ServicesdeezerService) {
  					   this.route.params.subscribe(params => {
						     this.tracklist = params['tracklist']; 
						     this.cover_big = params['cover_big']; 
						     this.title1 = params['title1']; 
						     });

					    console.log(this.tracklist);
					    console.log(this.cover_big);
					    console.log(this.title1);				    
					    
  }
ngOnInit() {
  	this.Listchansons(this.tracklist);
  
}


  Listchansons(tracklist: string){

    console.log('ionViewDidLoad PlaylistsPage');

    this.servicesdeezerService.getPlaylist(this.tracklist).then((rep) => {
      console.log(`rep ${JSON.stringify(rep)}`);
      this.playlists=rep;
      console.log(this.playlists);

    })
    .catch((err) => {
      console.log(`err ${JSON.stringify(err)}`);
    });
  }

  play(tracklist: string){
    if (this.audio) {
      this.audio.pause();
    }

   this.audio = new Audio();
   this.audio.src = tracklist;
   this.audio.load();
   this.audio.play();
  }

  buttonback(){

  if (this.audio) {
      this.audio.pause();
    }

  }


}

