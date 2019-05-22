import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { SystemComponent } from './system.component';
import { EditPageComponent } from './edit-page/edit-page.component';
import { MainPageComponent } from './main-page/main-page.component';



const routes: Routes = [
    {path: 'system', component: SystemComponent, children: [
        {path: 'edit', component: EditPageComponent},
        {path: 'main', component: MainPageComponent}
      ]}
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class SystemRoutingModule {}