import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { Artist } from '../../models/modelsartist';
import { ServicesdeezerService } from '../servicesdeezer/servicesdeezer.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
nom:string;
artists: Artist = new Artist();

  constructor(private router: Router, private servicesdeezerService: ServicesdeezerService) {
  					    console.log(this.nom);
  }

  ListArtists(nom: string) {
    console.log('ionViewDidLoad ListartistsPage');

    this.servicesdeezerService.getArtists(this.nom).then((rep) => {
      console.log(`rep ${JSON.stringify(rep)}`);
      this.artists=rep;
      console.log(this.artists);

    })
    .catch((err) => {
      console.log(`err ${JSON.stringify(err)}`);
    });
  }


  ListAlbums(url: string){
           this.router.navigate(['/listalbums', url]);
          console.log("url "+url);
  }

}


