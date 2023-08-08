import { ReactComponent as ComputostLogo } from "../assets/computost.svg";

export const Page = () => (
  <>
    <h1
      style={{
        alignItems: "center",
        backgroundColor: "#211500",
        color: "#fcecd1",
        display: "flex",
        fontSize: "1.75em",
        margin: 0,
        padding: 8,
      }}
    >
      <ComputostLogo
        title="Computost Consulting"
        style={{ fill: "#fcecd1", height: "1em", marginRight: "0.25em" }}
      />
      Computost Consulting
    </h1>
    <main style={{ padding: 8 }}>
      <article>
        <h2>About Us</h2>
        <p>
          We are a small team of software engineering consultants who specialize
          in Power Platform and Azure technologies. Our team members have an
          average of 15 years of experience working with Power Platform and
          Microsoft technologies. In our careers, we have helped build large,
          enterprise projects or provide guidance to small teams with simple
          goals.
        </p>
      </article>
      <article>
        <h2>Our Principals</h2>
        <ul>
          <li>
            <b>Quality:</b>
            If anything is worth doing, it's worth doing right. No job is
            finished until it meets our standards of documentation, styling,
            testing, and deployability.
          </li>
          <li>
            <b>Communication:</b>
            We code in an open kitchen. Everything we make, our customers have
            access to it at all times.
          </li>
          <li>
            <b>Maintainability:</b>
            As solution architects, we build everything with support in mind.
          </li>
          <li>
            <b>Flexibility:</b>
            Your technical solutions should grow with your business. We deliver
            value in frequent, small intervals, continuing to reassess what you
            need after each delivery.
          </li>
        </ul>
      </article>
      <article>
        <h2>Technologies</h2>
        <ul>
          <li>
            <b>Power Platform</b>
            <ul>
              <li>Power Apps</li>
              <li>Power Automate</li>
              <li>Power Pages</li>
            </ul>
          </li>
          <li>
            <b>Azure</b>
            <ul>
              <li>Data Factory</li>
              <li>Function Apps</li>
              <li>Service Bus</li>
              <li>SQL</li>
            </ul>
          </li>
          <li>
            <b>DevOps</b>
            <ul>
              <li>Azure DevOps</li>
              <li>GitHub</li>
              <li>GitLab</li>
            </ul>
          </li>
        </ul>
      </article>
      <article>
        <h2>Projects</h2>
        <p>
          While we work with customers, we often innovate tools that can provide
          value for the larger software development community. Below are some of
          the tools we have created and actively maintain:
        </p>
        <ul>
          <li>
            <a href="https://github.com/computost/org-compare">org-compare</a>
          </li>
          <li>
            <a href="https://github.com/computost/pac-fetch">pac-fetch</a>
          </li>
        </ul>
      </article>
      <article>
        <h2>Blog</h2>
        <p>Coming soon!</p>
      </article>
      <article>
        <p>
          Contact us at{" "}
          <a href="mailto:consulting@computost.com">consulting@computost.com</a>
        </p>
      </article>
    </main>
  </>
);
