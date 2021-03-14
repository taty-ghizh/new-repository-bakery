import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BackeryComponent } from './backery/backery.component';
import { LoginguardGuard } from './loginguard.guard';
import { SpellComponent } from './spell/spell.component';

const routes = [
    {
        path: '', component: SpellComponent
    },
    {
        path: 'backery', canActivate: [LoginguardGuard], component: BackeryComponent
    },
    {
        path: '**', redirectTo: ''
    }
]


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule] 
})

export class AppRoutingModule { }