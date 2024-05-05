import { NgModule } from '@angular/core';
import { ExtraOptions, PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthenticationGuard } from './MOVIESDB.Core/guards/authentication-guard';
import { NoAuthenticationGuard } from './MOVIESDB.Core/guards/no-authentication-guard';

export const routes: Routes = [
    {
        path: 'MOVIESDB/movies',
        loadChildren: () => import('./MOVIESDB.Modules/movies-module/movies.module').then(m => m.MoviesModule),
        canActivate: [AuthenticationGuard]
    },
    {
        path: 'MOVIESDB/authentication',
        loadChildren: () => import('./MOVIESDB.Modules/module-authentication/module-authentication.module').then(m => m.ModuleAuthenticationModule),
        canActivate: [NoAuthenticationGuard]

    },
    {
        path: '**',
        redirectTo: 'MOVIESDB/authentication',
        pathMatch: 'full'
    }

];

const routerConfig: ExtraOptions = {
    useHash: true
}


@NgModule({
    imports: [RouterModule.forRoot(routes, routerConfig)],
    exports: [RouterModule]
})

export class AppRoutingModule { }