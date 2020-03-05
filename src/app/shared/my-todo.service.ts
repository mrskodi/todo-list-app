import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class MyTodoService {

  myList: AngularFireList<any>;
  constructor(private firedb: AngularFireDatabase) {}    

  // Get data from Realtime Database
  getMyList(){
    // Create a list binding as a property of the service
    this.myList = this.firedb.list('myTodoList'); 
    return this.myList;
  }

  addToMyList(listItem: string){
    this.firedb.list('myTodoList').push({
      title: listItem,
      isChecked: false
    });
  }

  checkOrUncheckMyListItem($key: string, flag: boolean){
    this.firedb.list('myTodoList').update($key, {isChecked: flag});
  }

  removeMyListItem($key){
    this.firedb.list('myTodoList').remove($key);
  }
}
