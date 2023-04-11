import type { HeadFC, PageProps } from "gatsby";
import { FC } from "react";
import Icon from "../images/icon.svg";

const IndexPage: FC<PageProps> = () => {
  return (
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
        <Icon
          alt="Computost Consulting"
          style={{ fill: "#fcecd1", height: "1em", marginRight: "0.25em" }}
        />
        Computost Consulting
      </h1>
      <main style={{ padding: 8 }}>
        <article>
          <h2>About Us</h2>
          <ul>
            <li>Small team</li>
            <li>Average 15 years working with Dynamics</li>
          </ul>
        </article>
        <article>
          <h2>Our Principals</h2>
          <ul>
            <li>Quality</li>
            <li>Continuous communication</li>
            <li>Build with support in mind</li>
            <li>Flexibility</li>
          </ul>
        </article>
        <article>
          <h2>Technologies</h2>
          <ul>
            <li>Dataverse</li>
            <li>Azure</li>
            <li>GitHub</li>
          </ul>
        </article>
        <article>
          <h2>Projects</h2>
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
            <a href="mailto:consulting@computost.com">
              consulting@computost.com
            </a>
          </p>
        </article>
      </main>
    </>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Computost Consulting</title>;
