import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders, HttpResponse} from '@angular/common/http';

import { Observable } from 'rxjs';
import {Story} from '../story'
import { catchError, map, tap } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/map';

@Injectable()
export class StoriesService {

  constructor(private http:HttpClient) {
    
   }
   private url="https://5vhqqlfyrk.execute-api.us-east-2.amazonaws.com/dev"
   getStories(): Observable<Story[]>{
    return this.http.get(this.url).map(res => 
      
      JSON.parse( res['body']) as Story[],
      console.log('res')      
      
      
    )
      
   }
   getStory(id: string): Observable<Story>{
    var resourcePath=this.url + "/" + id;
    return this.http.get<Story>(resourcePath);
      
   }

   postStory()   {

    let heads = new HttpHeaders(); 
    heads.append('Content-Type','application/json')
    var body = new Story()
    body.Name="ÅÅllebrød3 " + new Date().toLocaleTimeString();
    var sub1 = new Story()
    sub1.Name="Sub 1"
    var sub2 = new Story()
    sub2.Name="Sub 2"
    body.CollectionList=[]
    body.CollectionList.push(sub1)
    body.CollectionList.push(sub2)
    var js = JSON.stringify(body)
    console.log(js)
    return this.http.post(this.url,js,{headers:heads})
    
   }  

   putStory(story: Story){
    let heads = new HttpHeaders(); 
    heads.append('Content-Type','application/json')
    // var body = new Story("98649e6b-f8c7-4f3b-a157-9caa4fc8abd2")
    // body.Name="Nyt Navn: " + new Date().toLocaleTimeString();
    var js = JSON.stringify(story)
    console.log(js)
    return this.http.put(this.url,js,{headers:heads}).subscribe(res=>console.log(res))
   }
   
   private log(message: string) {
    console.log("message")
    console.log(message)
  }
   /**
 * Handle Http operation that failed.
 * Let the app continue.
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
private handleError<T> (operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {

    // TODO: send the error to remote logging infrastructure
    console.error(error); // log to console instead

    // TODO: better job of transforming error for user consumption
    this.log(`${operation} failed: ${error.message}`);

    // Let the app keep running by returning an empty result.
    return of(result as T);
  };
}

}
