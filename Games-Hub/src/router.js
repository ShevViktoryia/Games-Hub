import { createRouter, createWebHistory } from "vue-router";
import GamesList from './pages/games/GamesList.vue';
import GameAbout from './pages/games/GameAbout.vue';
import GameComment from './pages/comments/GameComment.vue';
import PageNotFound from './pages/PageNotFound.vue';
import FavouriteGames from './pages/games/FavouriteGames.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {path: '/', redirect: '/games'},
    {path: '/games', component: GamesList},
    {path: '/games/:id', component: GameAbout, children: [{path: 'comment', component: GameComment}]},
    {path: '/favourites', component: FavouriteGames},
    {path: '/:pageNotFound(.*)', component: PageNotFound}
  ],
});

export default router;