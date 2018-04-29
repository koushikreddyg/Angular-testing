import { UserService } from './user/user.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { GroceryListComponent } from './grocery-list/grocery-list.component';
import { KoushikComponent } from './koushik/koushik.component';
import { UserComponent } from './user/user.component';


@NgModule({
  declarations: [
    AppComponent,
    GroceryListComponent,
    KoushikComponent,
    UserComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
