import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ServicesdeezerService {

  private baseurl :string = "http://api.deezer.com/search/artist/?q=";

  constructor(public http: HttpClient) {
    console.log('Hello ServicesdeezerProvider Provider');
  }


 //Récupération et Parsage de la liste des artistes recherchés 
  getArtists(nom: string): Promise<any>{
 
    const url= this.baseurl+nom+"&index=0&output=json";

  
        return new Promise(resolve => {
          let headers: HttpHeaders= new HttpHeaders();
          headers.append('Accept ','application/json');

          this.http.get(url, {headers: headers}).subscribe(data => {
            resolve(data);
          }, err => {
            console.log(err);
          });
        });
   
   
  }
  

//Récupération et Parsage de la liste des albums recherchés 
  getAlbums(url: string): Promise<any>{

  
        return new Promise(resolve => {
          let headers: HttpHeaders= new HttpHeaders();
          headers.append('Accept ','application/json');

          this.http.get(url, {headers: headers}).subscribe(data => {
            resolve(data);
          }, err => {
            console.log(err);
          });
        });
   
   
  }



  //Récupération et Parsage de la playlist de l'album recherché
  getPlaylist(url: string): Promise<any>{

  
    return new Promise(resolve => {
      let headers: HttpHeaders= new HttpHeaders();
      headers.append('Accept ','application/json');

      this.http.get(url, {headers: headers}).subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });


}

}
