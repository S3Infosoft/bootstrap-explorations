import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS } from "@angular/common/http"
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule ,  ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { AuthInterceptor} from "./auth.interceptor"
import { MatPaginatorModule} from "@angular/material/paginator"
import { MatProgressSpinnerModule} from "@angular/material/progress-spinner"
import { AuthGuard } from "./auth.guard";
import { PagenotfoundComponent } from './auth/pagenotfound/pagenotfound.component';
import { SpinnerComponent } from './shared/spinner/spinner.component';
import { FlashmessageComponent } from './shared/flashmessage/flashmessage.component';
// import { ToolDeleteModalComponent } from './shared/tool-modal/tool-modal.component'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    PagenotfoundComponent,
    SpinnerComponent,
    FlashmessageComponent,
    // ToolDeleteModalComponent
  ],

  
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatPaginatorModule,
    BrowserAnimationsModule,
    MatProgressSpinnerModule,
    ReactiveFormsModule
    
  ],

  providers: [ AuthGuard ,{ provide : HTTP_INTERCEPTORS , useClass : AuthInterceptor , multi : true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
