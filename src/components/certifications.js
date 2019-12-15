import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardMenu, IconButton } from 'react-mdl';


class Certification extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {

    if(this.state.activeTab === 0){
      return(
        <div className="projects-grid">
          {/* Project 1 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://blog.paessler.com/hubfs/considerations-when-choosing-database-management-system.png) center / cover'}} >D B M S</CardTitle>
            <CardText>
              Oracle | 2017
            </CardText>

        {/*<CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>*/}
          </Card>
          {/* Project 2 */}
          
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://miro.medium.com/max/5120/1*ve-E-lXoo8D7uDYok4VYAA.png) center / cover'}} >Git + GitHub</CardTitle>
            <CardText>
              Udemy | 2019
            </CardText>

            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        
        
        </div>
      )
    }
  }
  render() {
    return(
      <div>
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>

        </Tabs>
          <Grid>
            <Cell col={12}>
              <div className="content">{this.toggleCategories()}</div>
            </Cell>
          </Grid>
      </div>
    )
  }
}
export default Certification;
