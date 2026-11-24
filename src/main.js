import { HomePage } from "./pages/home";
import { AdminPage } from "./pages/admin";

const routes = {
  '/': HomePage,
  '/admin': AdminPage,
}

function render(){
  const path = location.hash.slice(1) || '/'
  const page = routes[path] || HomePage
  document.querySelector('#app').innerHTML = page()

}
window.addEventListener('hashchange', render)
render()