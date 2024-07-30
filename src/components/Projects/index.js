import React from 'react'
import { useState } from 'react'
import { Container, Wrapper, Title, Desc, CardContainer, ToggleButtonGroup, ToggleButton, Divider } from './ProjectsStyle'
import ProjectCard from '../Cards/ProjectCards'
import { projects } from '../../data/constants'


const Projects = ({openModal,setOpenModal}) => {
  const [toggle, setToggle] = useState('all');
  return (
    <Container id="projects">
      <Wrapper>
        <Title>Projects</Title>
        <Desc>
          I have worked on a wide range of projects. From web apps to android apps. Here are some of my projects.
        </Desc>
        <ToggleButtonGroup >
          {toggle === 'all' ?
            <ToggleButton active value="all" onClick={() => setToggle('all')}>All</ToggleButton>
            :
            <ToggleButton value="all" onClick={() => setToggle('all')}>All</ToggleButton>
          }
          <Divider />
          {toggle === 'Web App' ?
            <ToggleButton active value="Web App" onClick={() => setToggle('Web App')}>WEB APP'S</ToggleButton>
            :
            <ToggleButton value="Web App" onClick={() => setToggle('Web App')}>WEB APP'S</ToggleButton>
          }
          <Divider />
          {toggle === 'Android App' ?
            <ToggleButton active value="Android App" onClick={() => setToggle('Android App')}>ANDROID APP'S</ToggleButton>
            :
            <ToggleButton value="Android App" onClick={() => setToggle('Android App')}>ANDROID APP'S</ToggleButton>
          }
          <Divider />
          {toggle === 'Desktop App' ?
            <ToggleButton active value="Desktop App" onClick={() => setToggle('Desktop App')}>Desktop App</ToggleButton>
            :
            <ToggleButton value="Desktop App" onClick={() => setToggle('Desktop App')}>Desktop App</ToggleButton>
          }
        </ToggleButtonGroup>
        <CardContainer>
          {toggle === 'all' && projects
            .map((project) => (
              <ProjectCard project={project} openModal={openModal} setOpenModal={setOpenModal}/>
            ))}
          {projects
            .filter((item) => item.category === toggle)
            .map((project) => (
              <ProjectCard project={project} openModal={openModal} setOpenModal={setOpenModal}/>
            ))}
        </CardContainer>
      </Wrapper>
    </Container>
  )
}

export default Projects