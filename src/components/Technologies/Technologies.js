import React from 'react';
import { DiJavascript1, DiJava, DiPython  } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider divider />
    <SectionTitle>Languages</SectionTitle>
    <SectionText>
      A small list of languages we work in
    </SectionText>
    <List>
      <ListItem>
        <picture>
          <DiJavascript1 size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>JavaScript</ListTitle>
          <ListParagraph>
            Our Discord bots <br />
            written on JS
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiPython size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Python</ListTitle>
          <ListParagraph>
            SMBomber and <br />
            etc.
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiJava size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Java</ListTitle>
          <ListParagraph>
            Minecraft plugins <br />
            written on Java
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
    <SectionDivider colorAlt />
  </Section>
);

export default Technologies;
