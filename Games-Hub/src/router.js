import { createRouter, createWebHistory } from "vue-router";
import GamesList from './pages/games/GamesList';
import GameAbout from './pages/games/GameAbout';
import GameComment from './pages/requests/GameComment';
import PageNotFound from './pages/PageNotFound';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {path: '/', redirect: '/games'},
    {path: '/games', component: GamesList},
    {path: '/games/:id', component: GameAbout, children: [{path: 'comment', component: GameComment}]},
    {path: '/:pageNotFound(.*)', component: PageNotFound}
  ],
});

export default router;