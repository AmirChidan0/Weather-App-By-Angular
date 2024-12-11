// import { Component } from '@angular/core/Component';
import { RouterOutlet } from '@angular/router';
import { FormsModule   } from '@angular/forms';
import { state } from '@angular/animations';
import { User } from '../models/user';
import { BackendUserService } from '../services/backend-user.service';
import { BackEndUser } from '../models/backendUser';
import { CommentService } from '../services/comment.service';
import { CommentItem } from '../models/commentService';
import { subscribeOn } from 'rxjs';




import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AlbumService } from '../services/album.service';
import { Album } from '../models/album';
import { HttpClientModule } from '@angular/common/http';






import { HighlightDirective } from '../directieves/highlight.directive';
import { HeaderComponent } from "./components/header/header.component";
import { TaskFormComponent } from "./components/task-form/task-form.component";
import { TaskListComponent } from "./components/task-list/task-list.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, HttpClientModule, RouterOutlet,
    HighlightDirective, HeaderComponent, TaskFormComponent, TaskListComponent],
  providers:[
    AlbumService,
    // BackendUserService, CommentService,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  hostDirectives: [HighlightDirective],
})
export class AppComponent {


myAlbums: Album[] = [];
commentList: any;


constructor(private albumService : AlbumService) {}

ngOnInit() {
  this.albumService.getAlbums().subscribe(x => this.myAlbums = x);
}






// getMyAlbums() : void {

//   this.albumService.getAlbums().subscribe(x => this.myAlbums = x);
// }


















//   commentList: CommentItem[] = [];

//   constructor(private commentService:CommentService ){}


//   ngAfterViewInit():void{


//     this.commentService.getComment().subscribe(x => this.commentList = x)



// }






  // backendUser1 : BackEndUser = new BackEndUser();
  // constructor(private bcService : BackendUserService ){}

  // getUserFromBackend(): void {

  //   this.bcService.getuser().subscribe(x => this.backendUser1 = x);

  // }

  // backendUser1: BackEndUser = new BackEndUser();
  // myId: number = 1;


  // constructor(private bcservice : BackendUserService) {}

  // ngOnInit() {

  //   // this.getUserFromBackend();
  // }

  // getUserFromBackend(): void  {

  //   this.bcservice.getuser(this.myId).subscribe( x => this.backendUser1 = x);
  // }






//   fName:string= "";
//   lName:string= "";
//   age:number= 0;
//   tableRows: User[] = [];
//   babyUser:User = new User("", "", 0 );

//   constructor(){}
// addUser(){

//   this.babyUser = new User(this.fName,this.lName,this.age);
//   this.tableRows.push(this.babyUser);

//   this.fName = "";
//   this.lName = "";
//   this.age = 0;
//   this.babyUser = new User("", "", 0);
// }
// delete(user:User){
//   this.tableRows = this.tableRows.filter( tuser => {return tuser !== user });
// }




// sortFirstName():void{

//   this.tableRows = this
//   .tableRows
//   .sort(
//     (a,b) =>
//     (a.firstName < b.firstName) ? 1 : ((b.firstName < a.firstName) ? -1 :0)
//   );
// }

// sortFirstNameDc():void{

//   this.tableRows = this
//   .tableRows
//   .sort(
//     (a,b) =>
//     (a.firstName > b.firstName) ? 1 : ((b.firstName > a.firstName) ? -1 :0)
//   );
// }
// delete(user : User):void {
//   this.tableRows.forEach(x => {return x !== user;  });
// }


























  //   Brands : number[] = [];

  //   addBrand(state:number){
  //     if(this.Brands.includes(state)){
  //       var index = this.Brands.indexOf(state);
  //       this.Brands.splice(index , index + 1);
  //     }
  //     else{
  //       this.Brands.push(state);
  //     }


  // }








  // visible: boolean = true;
  // addClass:string = "hide";

  // addvariable(){

  //   this.visible = this.visible
  // }

  // myData: number[] = [ 2, 5, -10, 25, 25, 14 ];

  // result: number = 0;

  // addNumber(){
  //   this.result = this.result + 1;

  // }




  // fName: string = "";
  // lNmae: string = "";
  // age: number = 0;
  // tableRows: User[] = [];
  // babyUser: User= new User("","",0);

  // constructor(){

  // }

  // addUser(){
  //   this.babyUser = new User(this.fName,this.lNmae,this.age);
  //   this.tableRows.push(this.babyUser);

  //   this.fName = "",
  //   this.lNmae = "",
  //   this.age = 0;
  //   this.babyUser = new User("","",0);
  // }





















  // result : number = 1;
  // AddNumber(){

  //     this.result = this.result + 1;
  // }


  // MinNumber(){

  //     this.result = this.result - 1;
  // }


// AddNumber(){
//   if(this.result != 20 ){
//     this.result += 1;
//   }
// }
// MinNumber(){
//   if(this.result  > 1 ){
//     this.result -= 1;
//   }
// }


  // Brands : number[] = [];


  // ChangeBrands(satate : number){
  //   if(this.Brands.includes(satate)){

  //     var index = this.Brands.indexOf(satate);

  //     this.Brands.splice(index, index + 1);

  //   }
  //   else{
  //     this.Brands.push(satate);
  //   }
  // }









}
