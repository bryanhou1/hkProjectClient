import React, { Component } from 'react';
import './App.css';
import {Grid, Header, Segment, Image} from "semantic-ui-react"

import Carousel from '../components/Carousel.jsx'
import Fig1 from '../photoAssets/Fig1.jpg';

class App extends Component {
  constructor(props) {
    super(props);
    this.gridWidth = 14;
  }
  
  render() {
    return (
      <div>

        <Segment vertical style={{ padding: '2em 0em' }}>
          <Grid stackable centered>
            <Grid.Row>
              <Grid.Column width={this.gridWidth}>
                <Segment basic>
                  <Header as='h1'>
                    <Header.Content>
                      ARGs-OSP v1.0: Antibiotic Resistant Genes Online Searching Platform
                    </Header.Content>
                  </Header>
                </Segment>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column width={this.gridWidth}>
                <Carousel />
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column width={this.gridWidth}>
                <Segment basic>
                  <div>
                    <h2>Introduction:</h2>
                    <p>The ARGs-OSP aims to provide a global ARG profile covering the information of their phylogenetic and ecological distribution. Search and download functionality are designed for users to retrieve the occurrence of ARGs in different taxonomy and the abundance of ARGs in different habitats. Through data sharing, ARGs-OSP is expected to motivate and facilitate future studies into mining new information and knowledge from the combined data, without making repeated efforts in dataset processing. <br /></p>
                  </div>
                </Segment>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column width={this.gridWidth}>
                <Segment basic>
                  <Image name="Fig1" src={Fig1} rounded centered />
                  <label htmlFor="Fig1">Fig. 1. The phylogenetic relationship of all 54,718 bacterial genomes of 45 phyla in WGD and the occurrence of ARGs (blue nodes) and Rank I ARGs (red nodes). The pathogenic strains were indicated by purple edges.</label>
                </Segment>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row divided>
              <Grid.Column width={this.gridWidth-8}>
                <Segment basic>
                    <div>
                      <h2>Methods:</h2>
                      <p>ARGs were identified and quantified using two standard pipelines, the ARGs online analysis platform (ARGs-OAP) [47] and integron identification and visualization pipeline (I-VIP) (manuscript under review).</p>
                      <br />
                    </div>
                    <div>
                      <h2>Target:</h2>
                      <ul>
                        <li>Antibiotic resistant genes (ARGs)</li>
                        <li>Class 1 integrases (intI1)</li>
                      </ul>
                    </div>
                </Segment>
              </Grid.Column>
              <Grid.Column width={8}>
                <Segment basic>
                  <div>
                    <h2>Current scale of datasets:</h2>
                    <ul>
                      <li>Whole Genome Database (WGD): 54,718 bacterial genomes (completeness ≥ 50%, contamination ≤ 10%) covering 32 bacterial phyla, 162 classes, 299 orders, 643 families, 1,986 genera, and 3,654 species.</li>
                      <li>Metagenomes Database (MGD): 854 metagenomic datasets covering 25 eco-subtypes of 7 eco-types including the natural environments (water, sediment, soil, and permafrost) and the anthropogenic environments (WWTPs, animal feces and human feces).</li>
                    </ul>
                  </div>
                </Segment>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column width={this.gridWidth}>
                <div>
                <h2>References:</h2>
                <ul>
                  <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque consequatur distinctio, rerum maxime debitis ratione itaque sapiente illum, ea error, odit minima ipsa? Excepturi quidem in labore nobis at quas.</li>
                </ul>
              </div>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
      </div>
    )
  }
}

export default App;


