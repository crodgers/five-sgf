import { SnippetsListComponent } from './snippets-list/snippets-list.component';
import { SgfSnippetComponent } from './sgf-snippet/sgf-snippet.component';
import { Routes, RouterModule } from '@angular/router';

var appRoutes: Routes = [
  { path: 'snippets', component: SnippetsListComponent },
  { path: 'snippet/:id',      component: SgfSnippetComponent },
  { path: '',
    redirectTo: '/snippets',
    pathMatch: 'full'
  }
//   { path: '**', component: PageNotFoundComponent }
];

export const appRouting = RouterModule.forRoot(appRoutes);

