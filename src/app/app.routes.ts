import { NgModule } from '@angular/core';
import { ExtraOptions, PreloadAllModules, RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'MOVIESDB/movies',
        loadChildren: () => import('./MOVIESDB.Modules/movies/movies.module').then(m => m.MoviesModule)
    },
    {
        path: '**',
        redirectTo: 'MOVIESDB/movies',
        pathMatch: 'full'
    }

];

const routerConfig: ExtraOptions  = {
    preloadingStrategy: PreloadAllModules,
    scrollPositionRestoration: "enabled",
    useHash: true
}


@NgModule({
    imports: [RouterModule.forRoot(routes, routerConfig)],
    exports: [RouterModule]
})

export class AppRoutingModule {}