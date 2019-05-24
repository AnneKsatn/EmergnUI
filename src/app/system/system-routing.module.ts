import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { SystemComponent } from './system.component';
import { EditPageComponent } from './edit-page/edit-page.component';
import { MainPageComponent } from './main-page/main-page.component';
import { AuthGuard } from '../shared/services/auth.guard';



const routes: Routes = [
    {path: 'system', component: SystemComponent, canActivate: [AuthGuard], children: [
        {path: 'edit', component: EditPageComponent},
        {path: 'main', component: MainPageComponent}
      ]}
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class SystemRoutingModule {}