import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PumpsListComponent } from './components/pumps/pumps-list/pumps-list.component';
import { AddPumpComponent } from './components/pumps/add-pump/add-pump.component';
import { EditPumpComponent } from './components/pumps/edit-pump/edit-pump.component';

const routes: Routes = [
  {
    path: '',
    component: PumpsListComponent
  },
  {
    path: 'pumps',
    component: PumpsListComponent
  },
  {
    path: 'pumps/add',
    component: AddPumpComponent
  },
  {
    path: 'pumps/edit/:id',
    component: EditPumpComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
