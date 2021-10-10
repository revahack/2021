import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "../css/FAQ.css";

class FAQ extends Component {
  render() {
    return (
      <div className="top">
        <div className="FAQ">Frequently Asked Questions</div>
        <br />
        <br />
        <section>
          <div className="collapsible">
            <button className="collapsible_button">
              When and where will REVA HACK &lt;&#47;&gt; 2021 be hosted?
            </button>
            <p>
              REVA HACK &lt;&#47;&gt; 2021 is a national level hackathon which
              will be hosted online on Devfolio from 10th November 2021 to 13th
              November 2021
            </p>
          </div>
          <div className="collapsible">
            <button className="collapsible_button">
              Is the hackathon free to participate in or do we have to pay
              registration fees?
            </button>
            <p>
              The hackathon is free and accessible to anybody interested in
              taking part.
            </p>
          </div>

          <div className="collapsible">
            <button className="collapsible_button">
              What are the requirements for participation ?
            </button>
            <p>Participants will need to have a Devfolio account.</p>
          </div>

          <div className="collapsible">
            <button className="collapsible_button">
              How do we submit our projects?
            </button>
            <p>
              You will be submitting your projects on Devfolio itself. You will
              need to setup a GitHub repository for your project and the link to
              repository (should be public) should be there. Do not worry no one
              can copy your projects as only the organizing team will be capable
              of checking the submissions, not other participants.
            </p>
          </div>

          <div className="collapsible">
            <button className="collapsible_button">What is the theme?</button>
            <p>
              It is an open themed hackathon. However, we will have a few tracks
              to push you in a direction if you and your team can not come up
              with an idea.
            </p>
          </div>

          <div className="collapsible">
            <button className="collapsible_button">
              Can I apply if I don’t have a team?
            </button>
            <p>
              Yes, you can apply if you do not have team, you can form a team
              with other individual participants if you want or else you can
              participate as an individual too.{" "}
            </p>
          </div>

          <div className="collapsible">
            <button className="collapsible_button">
              When is the last date for registration?
            </button>
            <p>1st November 2021 is the last date for registration.</p>
          </div>

          <div className="collapsible">
            <button className="collapsible_button">
              Can I start working on my project before the event?
            </button>
            <p>
              No, you cannot work on your project before the start of the
              Hackathon. Your GitHub commits will be actively monitored and will
              be checked for plagiarism/duplicates.{" "}
            </p>
          </div>
          <div className="collapsible">
            <button className="collapsible_button">
              What is the maximum number of members in a team?
            </button>
            <p>
              Maximum number of members per team to participate is limited to 4.
            </p>
          </div>

          <div className="collapsible">
            <button className="collapsible_button">
              Will we receive any support from mentors /coaches during the
              hackathon?
            </button>
            <p>
              Mentor guidance and support will be offered, however mentors will
              not be allocated to specific teams.
            </p>
          </div>

          <div className="collapsible">
            <button className="collapsible_button">
              What are the rules and regulations for the hackathon?
            </button>
            <p>
              Participants may create teams of no more than four people. The
              teams will be given two days to complete their projects without
              the use of plagiarism. You can have a check on the rules and
              regulations document which is on discord anytime during the
              hackathon. Simply enjoy learning and innovating.
            </p>
          </div>

          <div className="collapsible">
            <button className="collapsible_button">
              If I still have questions after reading this FAQ, what should I
              do?
            </button>
            <p>
              If you have any remaining uncertainties, you may join our discord
              server and post your questions there, where our team will respond
              to your queries. <a href="https://discord.gg/7Vxyx35">here</a>
            </p>
          </div>
        </section>
        <div className="bot">
          We will following the Hack Code of Conduct,which can be found
          <NavLink to="#"> here</NavLink>
          <br />
          <br />
          <br />
        </div>
        <div className="bot1">
          <a href="https://discord.gg/thubgqk" className="but">
            ASK MORE QUESTIONS
          </a>
          <br />
          <br />
          <br />
        </div>
      </div>
    );
  }
}

export default FAQ;
