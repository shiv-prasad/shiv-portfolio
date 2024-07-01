import { createBrowserRouter, RouterProvider, } from 'react-router-dom';
import NavBar from "./components/NavBar"
import About from "./components/About"
import Contact from "./components/Contact"
import WorkExperience from "./components/WorkExperience"

const router = createBrowserRouter([
  {
    path: "/",
    element: <About />,
  },
  {
    path: "/experience",
    element: <WorkExperience />,
  },
]);

function App() {
  return (
    <div>
      <NavBar />
      <RouterProvider router={router} />
      {/* <Switch>
        <Route path="/" exact component={About} />
        <Route path="/experience" component={WorkExperience} />
      </Switch> */}
      <Contact />
    </div>
  );
}

export default App;
