import React, { Component } from "react";
import {
  Tabs,
  Tab,
  Grid,
  Cell,
  Card,
  CardTitle,
  CardText,
  CardActions,
  Button,
  CardMenu,
  IconButton,
} from "react-mdl";

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {
    if (this.state.activeTab === 3) {
      return (
        <div className="projects-grid">
          {/* Project 1 */}
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background:
                  "url(http://gattsystems.com/blog/wp-content/uploads/2017/08/PHP-DEVELOPMENT-Brillmindz.jpg)",
              }}
            >
              Resale{" "}
            </CardTitle>
            <CardText>
              Handling of Electronic waste through exchange and refurbishment of
              used items
            </CardText>
            <CardActions border>
              {/*<a href="https://www.google.com/" rel="noopener noreferrer" target="_blank" >
            <i class="fa fa-github" aria-hidden="true"></i>
            </a>*/}
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
          {/* Project 2 */}
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background:
                  "url(http://gattsystems.com/blog/wp-content/uploads/2017/08/PHP-DEVELOPMENT-Brillmindz.jpg)",
              }}
            >
              Around the World 
            </CardTitle>
            <CardText>
              A Web Based System where, user can read news and share Funny
              things.
            </CardText>
            <CardActions border>
              <a
                href="https://github.com/ajishvnair/Around_the_world.git"
                rel="noopener noreferrer"
                target="_blank"
              >
                <i class="fa fa-github" aria-hidden="true"></i>
              </a>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
          {/* Project 3 */}
        </div>
      );
    } else if (this.state.activeTab === 1) {
      return (
        <div className="projects-grid">
          {/* Project 1 */}
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background:
                  "url(https://nathsir-bucket.s3.amazonaws.com/media/py.png)",
              }}
            >
              Indegenoius Speed Controlled Smart Vechile{" "}
            </CardTitle>
            <CardText>
              A smart vechile that controlls it's speed by sensing traffic
              lights
            </CardText>
            <CardActions border>
              {/*<a href="https://www.google.com/" rel="noopener noreferrer" target="_blank" >
            <i class="fa fa-github" aria-hidden="true"></i>
            </a>*/}
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
      );
    } else if (this.state.activeTab === 0) {
      return (
        <div className="projects-grid">
          {/* Project 1 */}
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background:
                  "url(http://gattsystems.com/blog/wp-content/uploads/2017/08/PHP-DEVELOPMENT-Brillmindz.jpg)",
              }}
            >
              UFE (Upsell Funnel Engine)
            </CardTitle>
            <CardText> A shpify store upsell App</CardText>
            <CardActions border>
              
              <a
                    href="https://apps.shopify.com/upsell-funnel-engine-upsells?surface_detail=upsell+funnel&surface_inter_position=1&surface_intra_position=5&surface_type=search"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <i class="fa fa-eye" aria-hidden="true"></i>
                  </a>
          
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background:
                  "url(http://gattsystems.com/blog/wp-content/uploads/2017/08/PHP-DEVELOPMENT-Brillmindz.jpg)",
              }}
            >
             BUCKS Currency Converter
            </CardTitle>
            <CardText>A shopify store app</CardText>
            <CardActions border>
              
              <a
                    href="https://apps.shopify.com/bucks-currency-converter#modal-show=ReviewListingModal"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <i class="fa fa-eye" aria-hidden="true"></i>
                  </a>
          
            </CardActions>
          </Card>
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
        >
          <Tab>React</Tab>
          <Tab>Python</Tab>
          <Tab>PHP</Tab>
        </Tabs>
        <Grid>
          <Cell col={12}>
            <div className="content">{this.toggleCategories()}</div>
          </Cell>
        </Grid>
      </div>
    );
  }
}
export default Projects;
