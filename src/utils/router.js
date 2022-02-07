import Vue from "vue"
import Router from "vue-router"
import routes from "@/data/routes"
import store from "@/data/store"

import Swal from 'sweetalert2'

Vue.use(Router);

const router = new Router({
  mode: "history",
  linkExactActiveClass: "vue-school-active-class",
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      const position = {};
      if (to.hash) {
        position.selector = to.hash;
        if (to.hash === "#experience") {
          position.offset = { y: 140 };
        }
        if (document.querySelector(to.hash)) {
          return position;
        }

        return false;
      }
    }
  },
  routes: routes
});

router.beforeEach((to, from, next) => {
  if (store.quizRunning) {
    Swal.fire({
      title: 'È in corso un quiz',
      text: 'Abbandonando la pagina, perderai ogni progresso. Continuare?',
      icon: 'warning',
      confirmButtonText: 'Sì',
      showCancelButton: true,
      cancelButtonText: 'Annulla',
      didOpen: (toast) => {
        //on key down
        toast.addEventListener('keydown', (e) => {
          //on arrow left
          if (e.keyCode === 37) {
            toast.querySelector("div.swal2-actions > button.swal2-confirm.swal2-styled").focus()
          } else if (e.keyCode === 39) {
            toast.querySelector("div.swal2-actions > button.swal2-cancel.swal2-styled").focus()
          }
        });
      }
    }).then((result) => {
      if (result.isConfirmed) {
        store.quizRunning = false
        next()
      }
    })
  } else if (to.name === "Chapter") {
    if (store.destination[to.params.chapter]) {
      next()
    } else {
      next({
        path: "/404"
      })
    }
  } else if (to.name === "Topic") {
    if (store.destination[to.params.chapter] && store.destination[to.params.chapter].topics[to.params.topic]) {
      next()
    } else {
      next({
        path: "/404"
      })
    }
  } else {
    next()
  }
  
  /*
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!store.user) {
      next({
        name: "login",
        query: { redirect: to.fullPath }
      });
    } else {
      next();
    }
  } else {
    next();
  }*/
});

export default router;
