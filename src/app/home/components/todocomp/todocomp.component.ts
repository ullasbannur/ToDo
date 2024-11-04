import { Component, Input, OnInit } from '@angular/core';
import {v4 as uuidv4} from 'uuid';
import { DataService } from '../../../data.service';


interface arrayType{
  id:string,
  task:string
 }

@Component({
  selector: 'app-todocomp',
  templateUrl: './todocomp.component.html',
  styleUrls: ['./todocomp.component.css']
})
export class TodocompComponent implements OnInit {
  tasks: arrayType[] = JSON.parse(localStorage.getItem('key') || '[]');

  // constructor(private dataService: DataService) { }

  ngOnInit(): void {

    // this.dataService.fetchData().subscribe(
    //   (response) => {
    //     this.tasks = response;
    //     console.log('Fetched data:', this.tasks);
    //   },
    //   (error) => {
    //     console.error('Error fetching data:', error);
    //   }
    // );
  }
    

  // tasks: arrayType[] = []; 
  count_id!:string;


 
  onAdd(input_todo:HTMLInputElement){

    console.log(input_todo);

    let count_id = uuidv4();

    console.log("id", count_id);
    
    if (input_todo.value.trim()) {

      
      this.tasks.push({id:count_id,task:input_todo.value});

      let data = JSON.stringify(this.tasks)
      localStorage.setItem("key", data)
      
      console.log('array',this.tasks);
     input_todo.value = ''; 
    }   
  } 


  onDelete(id:any){
    console.log("id",id);

  
    // const index = this.tasks.findIndex(task => task.id == id);

    // if (index !== -1) {
    //   this.tasks.splice(index, 1);
    // }
    //   console.log(this.tasks);


      this.tasks=this.tasks.filter((task)=>task.id!==id);

      let data = JSON.stringify(this.tasks)
      localStorage.setItem("key", data)


      
 
    }
    
  }

