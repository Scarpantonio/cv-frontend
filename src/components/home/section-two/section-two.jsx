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
      <h4 className="section-two-title"> TECHNOLOGIES I LOVE TO USE...</h4>
      <div class="scrollmenu">
        <p>
          {" "}
          <DiAtom className="section-two-dev-icons" />
        </p>
        <p>
          {" "}
          <DiAngularSimple className="section-two-dev-icons" />
        </p>
        <p>
          {" "}
          <FaVuejs className="section-two-dev-icons" />
        </p>
        <p>
          {" "}
          <DiJavascript1 className="section-two-dev-icons" />
        </p>
        <p>
          {" "}
          <DiHtml5 className="section-two-dev-icons" />
        </p>
        <p>
          {" "}
          <DiJqueryLogo className="section-two-dev-icons" />
        </p>
        <p>
          {" "}
          <DiMongodb className="section-two-dev-icons" />
        </p>
        <p>
          {" "}
          <DiNodejsSmall className="section-two-dev-icons" />
        </p>
        <p>
          {" "}
          <DiSass className="section-two-dev-icons" />
        </p>
        <p>
          {" "}
          <FaCss3Alt className="section-two-dev-icons" />
        </p>
        <p>
          {" "}
          <DiPhotoshop className="section-two-dev-icons" />
        </p>
      </div>
    </div>
  );
}
