import Splash from "@/views/Splash"
import About from "@/views/About"
import Home from "@/views/Home"
import Sezioni from "@/views/Sezioni"
import Chapter from "@/views/Chapter"
import Topic from "@/views/Topic"
import Quiz from "@/views/Quiz"
import QuizActive from "@/views/QuizActive"
import Help from "@/views/Help"
import NotFound from "@/views/NotFound"

export default [
  {
    path: "/",
    name: "Splash",
    component: Splash
  },
  {
    path: "/about",
    name: "About",
    component: About
  },
  {
    path: "/home",
    name: "Home",
    component: Home
  },
  {
    path: "/sezioni",
    name: "Sezioni",
    component: Sezioni
  },
  {
    path: '/chapter/:chapter',
    name: 'Chapter',
    component: Chapter,
    props: true
  },
  {
    path: '/chapter/:chapter/:topic',
    name: 'Topic',
    component: Topic,
    props: true,
  },
  {
    path: "/quiz",
    name: "Quiz",
    component: Quiz
  },
  {
    path: "/quiz/:quiz",
    name: "QuizActive",
    component: QuizActive,
    props: true
  },
  {
    path: "/help",
    name: "Help",
    component: Help,
  },
  {
    path: '/404',
    name: "404",
    component: NotFound
  },
  {
    path: '*',
    redirect: '/404'
  }
];
