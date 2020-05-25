import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';

import { Albums } from '../../models/modelsalbums';
import { ServicesdeezerService } from '../servicesdeezer/servicesdeezer.service';



@Component({
  selector: 'app-listalbums',
  templateUrl: './listalbums.page.html',
  styleUrls: ['./listalbums.page.scss'],
})

export class ListalbumsPage implements OnInit {

	  url:string;
  	  albums: Albums = new Albums() ;

  constructor(private router: Router, private route: ActivatedRoute, private servicesdeezerService: ServicesdeezerService) {
  					   this.route.params.subscribe(params => {
						     this.url = params['url']; 
						     });
					    console.log(this.url);
					    
  }
ngOnInit() {
  	this.ListAlbums(this.url);
  
}

ListAlbums(url: string){

    console.log('ionViewDidLoad ListalbumsPage');

    this.servicesdeezerService.getAlbums(this.url).then((rep) => {
      console.log(`rep ${JSON.stringify(rep)}`);
      this.albums=rep;
      console.log(this.albums);

    })
    .catch((err) => {
      console.log(`err ${JSON.stringify(err)}`);
    });
  }

ListTrack(tracklist: string, cover_big:string, title1:string ){
    this.router.navigate(['/playlists', tracklist, cover_big, title1]);
        console.log("url "+tracklist);
  }

  
}

