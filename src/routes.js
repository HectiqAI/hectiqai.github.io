import {HomePage, PostPage, RedirectPage} from "./pages"


// Define your routes here for breadcrumb
const routes = [
  { path: "/", name: "Home", strict: false, exact:true, isPrivate:true, Component: RedirectPage },
  { path: "/:lang/", name: "Home", strict: false, exact:true, isPrivate:true, Component: HomePage },
  { path: "/:lang/posts/:postid", name: "Home", strict: false, exact:true, isPrivate:true, Component: PostPage },
];
export default routes;