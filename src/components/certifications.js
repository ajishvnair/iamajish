import React, { Component } from "react";
import {
  Tabs,
  Tab,
  Grid,
  Cell,
  Card,
  CardTitle,
  CardText,
  CardMenu,
  IconButton,
  CardActions,
} from "react-mdl";

class Certification extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {
    if (this.state.activeTab === 0) {
      return (
        <div>
          {/* Project 1 */}

          {/* Project 2 */}

          <Grid>
            <Cell col={4}>
              <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
                <CardTitle
                  style={{
                    color: "#fff",
                    height: "176px",
                    background:
                      "url(https://res.cloudinary.com/keystone-demo/image/upload/v1565129461/sucpd5njo7ukftgqpscc.jpg) center / cover",
                  }}
                >
                  MERN stack Front to Back: Full stack React, Redux and Node Js
                </CardTitle>
                <CardText>Udemy | 2020</CardText>
                <CardActions border>
                  <a
                    href="https://www.udemy.com/certificate/UC-1fa156db-e468-404a-ad51-1c6848c1d9c0/"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <i class="fa fa-eye" aria-hidden="true"></i>
                  </a>
                </CardActions>
              </Card>
            </Cell>
            <Cell col={4}>
              <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
                <CardTitle
                  style={{
                    color: "#fff",
                    height: "176px",
                    background:
                      "url(https://cdn.lynda.com/static/landing/images/hero/React_Developer-1200x630-1503423022468.jpg) center / cover",
                  }}
                >
                  Complete React Developer Course(Hooks and Redux)
                </CardTitle>
                <CardText>Udemy | 2020</CardText>
                <CardActions border>
                  <a
                    href="https://www.udemy.com/certificate/UC-c0b5cd39-1822-4f93-a501-16d0125e0860/"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <i class="fa fa-eye" aria-hidden="true"></i>
                  </a>
                </CardActions>
              </Card>
            </Cell>
            <Cell col={4}>
              <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
                <CardTitle
                  style={{
                    color: "#fff",
                    height: "176px",
                    background:
                      "url(https://res.cloudinary.com/practicaldev/image/fetch/s--H0AdlIEN--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://thepracticaldev.s3.amazonaws.com/i/srnvrd7vfeeq5qpxnabq.png) center / cover",
                  }}
                >
                  Master the coding Interview Data Structures + Algorithms
                </CardTitle>
                <CardText>Udemy | 2020</CardText>
                <CardActions border>
                  <a
                    href="https://www.udemy.com/certificate/UC-3ee8166d-d2b6-48bd-9d16-788d7e594ed3/"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <i class="fa fa-eye" aria-hidden="true"></i>
                  </a>
                </CardActions>
              </Card>
            </Cell>
          </Grid>
          <Grid>
            <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
              <CardTitle
                style={{
                  color: "#fff",
                  height: "176px",
                  background:
                    "url(https://bs-uploads.toptal.io/blackfish-uploads/uploaded_file/file/194523/image-1582754405203-acf85cc241bac1caa6b2cd3a460024f8.png) center / cover",
                }}
              >
                Bootstrap unleash the power Rapid web development
              </CardTitle>
              <CardText>Udemy | 2020</CardText>
              <CardActions border>
                <a
                  href="https://www.udemy.com/certificate/UC-59DZUKDG/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i class="fa fa-eye" aria-hidden="true"></i>
                </a>
              </CardActions>
            </Card>

            <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
              <CardTitle
                style={{
                  color: "#fff",
                  height: "176px",
                  background:
                    "url(https://miro.medium.com/max/5120/1*ve-E-lXoo8D7uDYok4VYAA.png) center / cover",
                }}
              >
                Git + GitHub
              </CardTitle>
              <CardText>Udemy | 2019</CardText>
              <CardActions border>
                <a
                  href="https://www.udemy.com/certificate/UC-W1U13NL2/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i class="fa fa-eye" aria-hidden="true"></i>
                </a>
              </CardActions>
            </Card>
            <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
              <CardTitle
                style={{
                  color: "#fff",
                  height: "176px",
                  background:
                    "url(https://blog.paessler.com/hubfs/considerations-when-choosing-database-management-system.png) center / cover",
                }}
              >
                D B M S
              </CardTitle>
              <CardText>Oracle | 2017</CardText>
            </Card>
          </Grid>
          <Grid>
            <Cell>
              <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
                <CardTitle
                  style={{
                    color: "#fff",
                    height: "176px",
                    background:
                      "url(https://miro.medium.com/max/2880/0*cMF8QUWUNP-jDoEv.jpg) center / cover",
                  }}
                >
                  CSS: Zero to Hero in CSS by styling a Website from scratch
                </CardTitle>
                <CardText>Udemy | 2020</CardText>
                <CardActions border>
                  <a
                    href="https://www.udemy.com/certificate/UC-91b7f3e3-4ec8-4f71-9ae9-cf667234b814/"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <i class="fa fa-eye" aria-hidden="true"></i>
                  </a>
                </CardActions>
              </Card>
            </Cell>
          </Grid>
        </div>
      );
    }
  }
  render() {
    return (
      <div>
        <Tabs
          activeTab={this.state.activeTab}
          onChange={(tabId) => this.setState({ activeTab: tabId })}
          ripple
        ></Tabs>
        <Grid>
          <Cell col={12}>
            <div className="content">{this.toggleCategories()}</div>
          </Cell>
        </Grid>
      </div>
    );
  }
}
export default Certification;
