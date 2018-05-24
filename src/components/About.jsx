import React from 'react'
import ResearchGate from '../photoAssets/researchGate.ico'
import {Container, Header, Card, Button} from 'semantic-ui-react'
import Anni from '../photoAssets/Anni.jpeg'
const About = () => {

  const extra = (
    <div>
      <a href="https://github.com/caozhichongchong" target="_blank" rel="noopener noreferrer"><Button circular color='teal' icon={<img src={ResearchGate} alt="researchgate" style={{width: 14, height: 14}}/>}/></a>
      <a href="mailto:caozhichongchong@gmail.com"><Button circular color='blue' icon='mail'/></a>
      <a href="https://twitter.com/annizhanghku" target="_blank" rel="noopener noreferrer"><Button circular color='twitter' icon='twitter'/></a>
      <a href="https://github.com/caozhichongchong" target="_blank" rel="noopener noreferrer"><Button circular color='grey' icon='github'/></a>
      <a href="https://youtu.be/4RQBEILzm-4" target="_blank" rel="noopener noreferrer"><Button circular color='youtube' icon='youtube'/></a>
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
      PhD Candidate
      <br/>
      Environmental Biotechnology Lab, University of Hong Kong
      <br/>
    </div>

  )

  return (
    <Container>
      <Header as="h1">Team</Header>
      <Card
        image={Anni}
        header='An Ni ZHANG'
        description={description}
        meta={meta}
        extra={extra}
      >
      </Card>
    </Container>
  )
}

export default About;