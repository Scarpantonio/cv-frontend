import React from "react";
import "./section-two.css";
import {
  DiPhotoshop,
  DiSass,
  DiNodejsSmall,
  DiGithubBadge,
  DiAtom,
  DiAngularSimple,
  DiJavascript1,
  DiHtml5,
  DiJqueryLogo,
  DiMongodb
} from "react-icons/di";
import { FaVuejs, FaCss3Alt } from "react-icons/fa";

export default function SectionTwo() {
  return (
    <div>
      <h4 className="section-two-title">MY FULL STACK TOOLKIT...</h4>
      <div class="scrollmenu">
        <p>
          {" "}
          <DiAtom className="dev-icons" />
        </p>
        <p>
          {" "}
          <DiAngularSimple className="dev-icons" />
        </p>
        <p>
          {" "}
          <FaVuejs className="dev-icons" />
        </p>
        <p>
          {" "}
          <DiJavascript1 className="dev-icons" />
        </p>
        <p>
          {" "}
          <DiHtml5 className="dev-icons" />
        </p>
        <p>
          {" "}
          <DiJqueryLogo className="dev-icons" />
        </p>
        <p>
          {" "}
          <DiMongodb className="dev-icons" />
        </p>
        <p>
          {" "}
          <DiNodejsSmall className="dev-icons" />
        </p>
        <p>
          {" "}
          <DiSass className="dev-icons" />
        </p>
        <p>
          {" "}
          <FaCss3Alt className="dev-icons" />
        </p>
        <p>
          {" "}
          <DiPhotoshop className="dev-icons" />
        </p>
      </div>
    </div>
  );
}
