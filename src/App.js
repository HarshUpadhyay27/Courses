import React from "react";
import { Route, Switch } from "react-router";
import CourseDetails from "./components/CourseDetails";
import CourseScreen from "./components/CourseScreen";
import Footer from "./components/Footer";
import Header from "./components/Header";

const App = () => {
  return (
    <div className="grid-container">
      <header>
        <Header />
      </header>
      <main>
        <Switch>
          <Route exact path="/" component={CourseScreen} />
          <Route exact path="/course/:id" component={CourseDetails} />
        </Switch>
      </main>
      <Footer/>
    </div>
  );
};

export default App;
