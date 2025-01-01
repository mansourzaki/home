import React, { useState, useEffect} from "react";
import Container from "react-bootstrap/Container";
import { Jumbotron } from "./migration";
import Row from "react-bootstrap/Row";
import axios from "axios";

const dummyProject = {
  name: null,
  description: null,
  svn_url: null,
  stargazers_count: null,
  languages_url: null,
  pushed_at: null,
};

const API = "https://api.github.com";

// Function to fetch open and merged pull requests created by the user
const fetchCreatedPRs = async (username) => {
  try {
    // Correct API: search for pull requests created by the user (open and closed)
    const response = await axios.get(
      `${API}/search/issues?q=author:${username}+is:pr`
    );

    // Filter open PRs and merged PRs
    const openPRs = response.data.items.filter((pr) => pr.state === "open");
    const mergedPRs = response.data.items.filter(
      (pr) => pr.state === "closed" && pr.pull_request.merged_at !== null
    );
    console.log("openPRs", openPRs);
    return {
      openPRs: openPRs,
      mergedPRs: mergedPRs,
    };
  } catch (error) {
    console.error("Error fetching created PRs:", error.message);
    console.log()
   
    return { openPRs: [], mergedPRs: [] };
  }
};

const Contributions = ({ heading, username, length, specfic }) => {
  const allReposAPI = `${API}/users/${username}/repos?sort=updated&direction=desc`;
  const specficReposAPI = `${API}/repos/${username}`;

  const [setProjectsArray] = useState([]);
  const [prData, setPrData] = useState({ openPRs: [], mergedPRs: [] });

  // Fetch repositories and PR data
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch open and merged PRs created by the user
        const prs = await fetchCreatedPRs(username);
        setPrData(prs);
      } catch (error) {
        console.error(error.message);
      }
    };

    fetchData();
  }, [allReposAPI, length, specfic, specficReposAPI, username]);

  return (
    <>
      {/* Open and Merged Pull Requests Section */}
      <Jumbotron fluid id="contributions" className="bg-light m-0">
        <Container>
          <h2 className="display-4 pb-5 text-center">Contributions</h2>
          <Row>
            {prData.openPRs.length > 0 || prData.mergedPRs.length > 0 ? (
              <>
                {prData.openPRs.length > 0 && (
                  <div className="col-12 mb-4">
                    <h4>Opened Pull Requests</h4>
                    <ul>
                      {prData.openPRs.map((pr, idx) => (
                        <li key={idx}>
                          <strong>{pr.user.login}</strong> opened PR:{" "}
                          <a href={pr.html_url} target="_blank" rel="noreferrer">
                            {pr.title}
                          </a>
                          <br/>
                          <strong>Repository Link: </strong>
                          <a href={pr.repository_url} target="_blank" rel="noreferrer">
                            {pr.repository_url}
                          </a>
                          <p>{pr.body || "No description"}</p>
                          <small>{new Date(pr.created_at).toLocaleDateString()}</small>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {prData.mergedPRs.length > 0 && (
                  <div className="col-12 mb-4">
                    <h4>Merged Pull Requests</h4>
                    <ul>
                      {prData.mergedPRs.map((pr, idx) => (
                        <li key={idx}>
                          <strong>{pr.user.login}</strong> merged PR:{" "}
                          <a href={pr.html_url} target="_blank" rel="noreferrer">
                            {pr.title}
                          </a>
                          <br/>
                          <strong>Repository Link: </strong>
                          <a href={pr.repository_url} target="_blank" rel="noreferrer">
                            {pr.repository_url}
                          </a>
                          <p>{pr.body || "No description"}</p>
                          <small>{new Date(pr.pull_request.merged_at).toLocaleDateString()}</small>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </>
            ) : (
              <p className="text-center">An Error occured :) </p>
            )}
          </Row>
        </Container>
      </Jumbotron>
    </>
  );
};

export default Contributions;
