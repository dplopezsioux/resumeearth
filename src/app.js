/* eslint-disable react/prop-types */
import React from "react";
import ReactDOM from "react-dom";

//component
import Resume from "./component/Resume";
import Configurationforthis from "./component/Configurationforthis";
import Skill from "./component/Skill";
import Education from "./component/Education";
import Builtit from "./component/Builtit";
import ContactForm from "./component/ContactForm";
import Sep from "./component/Sep";

//css
import "bootstrap/dist/css/bootstrap.min.css";

//start
class App extends React.Component {
  render() {
    return (
      <>
        <div>
          <div>
            <Resume />
            <Sep />
            <Builtit />
            <Configurationforthis />
            <Education />
            <Skill />
            <ContactForm />
          </div>
        </div>
      </>
    );
  }
}

ReactDOM.render(
  <App title="This is a react APP" />,
  document.getElementById("root")
);
