import { Component, OnInit } from '@angular/core';
import { MyTodoService } from '../shared/my-todo.service';

@Component({
  selector: 'app-my-todo',
  templateUrl: './my-todo.component.html',
  styleUrls: ['./my-todo.component.css']
})
export class MyTodoComponent implements OnInit {

  myListArray: any[];
  constructor(private mytodoService: MyTodoService) { }

  ngOnInit(): void {
    //this.myListArray = [];
    this.mytodoService.getMyList().snapshotChanges()
    .subscribe(item => {
      this.myListArray = [];
      item.forEach(element => {
        var x = element.payload.toJSON();
        x["$key"] = element.key;
        this.myListArray.push(x);
      });
      console.log(this.myListArray);  
    });
}

  add(todoListItem){
    this.mytodoService.addToMyList(todoListItem.value);
    todoListItem.value = null;
  }

  changeStatus($key: string, isChecked: boolean){
    this.mytodoService.checkOrUncheckMyListItem($key, !isChecked);
  }

  remove($key: string){
    this.mytodoService.removeMyListItem($key);
  }
}
