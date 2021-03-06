import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { NgModule, LOCALE_ID } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";

import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
import { OperatorComponent } from './operator/operator.component';
import { AccountantComponent } from './accountant/accountant.component';
import { NewObjectComponent, AddContactModal } from './ingineer/add-construction-site/new-object.component';
import { ObjectComponent } from './ingineer/construction-site-page/object.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { IngineerComponent } from './ingineer/ingineer-main/ingineer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './navigation/header/header.component';
import { SidenavListComponent } from './navigation/sidenav-list/sidenav-list.component';
import { CurrentConstructionSitesComponent } from './ingineer/ingineer-main/current-construction-sites/current-construction-sites.component';
import { FinishedConstructionSitesComponent } from './ingineer/ingineer-main/finished-construction-sites/finished-construction-sites.component';
import { ContactPersonsComponent } from './ingineer/construction-site-page/contact-persons/contact-persons.component';
import { DeadlinesComponent } from './ingineer/construction-site-page/deadlines/deadlines.component';
import { ContractorsComponent } from './ingineer/construction-site-page/contractors/contractors.component';
import { ExpensesComponent } from './ingineer/construction-site-page/expenses/expenses.component';
import { AddCurrentExpensesComponent } from './ingineer/construction-site-page/add-current-expenses/add-current-expenses.component';
import { CashExpensesComponent } from './ingineer/construction-site-page/add-current-expenses/cash-expenses/cash-expenses.component';
import { DutyExpensesComponent } from './ingineer/construction-site-page/add-current-expenses/duty-expenses/duty-expenses.component';
import { CashlessExpensesComponent } from './ingineer/construction-site-page/add-current-expenses/cashless-expenses/cashless-expenses.component';
import { CurrentExpensesComponent } from './ingineer/construction-site-page/current-expenses/current-expenses.component';
import { CashlessComponent } from './ingineer/construction-site-page/current-expenses/cashless/cashless.component';
import { CashComponent } from './ingineer/construction-site-page/current-expenses/cash/cash.component';
import { OnDutyComponent } from './ingineer/construction-site-page/current-expenses/on-duty/on-duty.component';
import { SummaryComponent } from './operator/summary/summary.component';
import { AddNewContractorDialogComponent } from './ingineer/construction-site-page/contractors/add-new-contractor-dialog/add-new-contractor-dialog.component';
import { AddSellerComponent } from './ingineer/construction-site-page/add-current-expenses/add-seller/add-seller.component';
import { AuthInterceptor } from './auth/auth-interceptor';



@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    OperatorComponent,
    AccountantComponent,
    NewObjectComponent,
    ObjectComponent,
    WelcomeComponent,
    IngineerComponent,
    HeaderComponent,
    SidenavListComponent,
    AddContactModal,
    CurrentConstructionSitesComponent,
    FinishedConstructionSitesComponent,
    ContactPersonsComponent,
    DeadlinesComponent,
    ContractorsComponent,
    ExpensesComponent,
    AddCurrentExpensesComponent,
    CashExpensesComponent,
    DutyExpensesComponent,
    CashlessExpensesComponent,
    CurrentExpensesComponent,
    CashlessComponent,
    CashComponent,
    OnDutyComponent,
    SummaryComponent,
    AddNewContractorDialogComponent,
    AddSellerComponent
  
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule,
    FlexLayoutModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}],
  bootstrap: [AppComponent],
  entryComponents: [AddContactModal, AddNewContractorDialogComponent, AddSellerComponent]
})
export class AppModule { }
