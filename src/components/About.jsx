import React from 'react'
import ResearchGate from '../photoAssets/researchGate.ico'
import { Card, Button, Grid} from 'semantic-ui-react'
import Anni from '../photoAssets/Anni.jpeg'
import Bryan from '../photoAssets/Bryan.jpg'

const About = () => {

  

  return (
    <Grid>
      <Grid.Row centered>
        <Grid.Column width={13}>
          <div style={{paddingTop: "2em"}}>
            <h1>Team</h1>
          </div>
          <Card.Group>
            {AnniCard()}
            {BryanCard()}
          </Card.Group>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
      </Grid.Row>
    </Grid>
  )
}

const AnniCard = () => {
  const extra = (
    <div>
      <a href="https://youtu.be/4RQBEILzm-4" target="_blank" rel="noopener noreferrer"><Button circular color='youtube' icon='youtube'/></a>
      <a href="https://github.com/caozhichongchong" target="_blank" rel="noopener noreferrer"><Button circular color='grey' icon='github'/></a>
      <a href="https://twitter.com/annizhanghku" target="_blank" rel="noopener noreferrer"><Button circular color='twitter' icon='twitter'/></a>
      <a href="mailto:caozhichongchong@gmail.com"><Button circular color='blue' icon='mail'/></a>
      <a href="https://www.researchgate.net/profile/An_Ni_Zhang" target="_blank" rel="noopener noreferrer"><Button circular color='teal' icon={<img src={ResearchGate} alt="researchgate" style={{width: 14, height: 14}}/>}/></a>
      
      
    </div>
  )
  
  const description = (
    <div>
      <strong>Research strengths:</strong>
      <ul>
        <li>Bioinformatics pipeline development and big data analysis</li>
        <li>Information integration and visualization</li>
        <li>Antibiotic resistance and mobile genetic elements</li>
        <li>Microbial metabolism</li>
      </ul>
    </div>
  )

  const meta = (
    <div className="meta">
      PhD Student
      <br/>
      Environmental Biotechnology Lab, University of Hong Kong
      <br/>
    </div>

  )

  return (
    <Card
      image={Anni}
      header='An Ni ZHANG'
      description={description}
      meta={meta}
      extra={extra}
    />
  )
}

const BryanCard = () => {
  const extra = (
    <div>
      <a href="mailto:bhou@hku.hk"><Button circular color='blue' icon='mail'/></a>
      <a href="https://www.linkedin.com/in/bryan-hou-212407a5" target="_blank" rel="noopener noreferrer"><Button circular color='linkedin' icon='linkedin'/></a>
      <a href="https://github.com/bryanhou1" target="_blank" rel="noopener noreferrer"><Button circular color='grey' icon='github'/></a>
      
    </div>
  )
  
  const description = (
    <div>

    </div>
  )

  const meta = (
    <div className="meta">
      Research Assistant
      <br/>
      Environmental Biotechnology Lab, University of Hong Kong
      <br/>
    </div>

  )

  return (
    <Card
      image={Bryan}
      header='Chen-Ju Bryan HOU'
      description={description}
      meta={meta}
      extra={extra}
    />
  )
}

export default About;