// import { Component, OnInit } from '@angular/core';
// import { TodoService } from '../shared/todo.service';
// import { AngularFireList } from 'angularfire2/database';

// @Component({
//   selector: 'app-todo',
//   templateUrl: './todo.component.html',
//   styleUrls: ['./todo.component.css'],
//   providers: [TodoService]
// })
// export class TodoComponent implements OnInit {

//   todoListArray: any[];
//   constructor(private todoService: TodoService) { }

//   ngOnInit(): void {
//     this.todoService.getToDoList().snapshotChanges()
//     .subscribe( item => {
//       // console.log the items 
            
//       this.todoListArray = [];
//       item.forEach(element => {
//         var x = element.payload.toJSON();
//         x["$key"] = element.key;
//         this.todoListArray.push(x);
//       }); 

//       // // sort array isChecked false -> true
//       // this.todoListArray.sort((a,b) => {
//       //   return a.isChecked - b.isChecked;
//       // });
//     });
//   }

//   onAdd(itemTitle){
//     this.todoService.addTitle(itemTitle.value);
//     itemTitle.value = null;
//   }

//   alterCheck($key: string, isChecked: boolean){
//     this.todoService.checkOrUncheckTitle($key, !isChecked);  
//   }

//   onDelete($key){
//     this.todoService.removeTitle($key);
//   }
// }
