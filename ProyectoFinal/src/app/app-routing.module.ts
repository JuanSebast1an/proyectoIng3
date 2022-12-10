import { NgModule } from '@angular/core';
import { ChildrenOutletContexts, RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';

const routes: Routes = [
  {
    path: '', component: IndexComponent,
      children: [
        {
          path: 'auth',
          loadChildren: () => import('./login/login.module').then(m => m.LoginModule)
        },
        {
          path: 'votante',
          loadChildren: () => import('./votante/votante.module').then(m => m.VotanteModule)
        }
      ]
  },
  { path: '**', pathMatch: 'full', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
