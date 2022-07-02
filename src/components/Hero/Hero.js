import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Welcome To <br />ASICC
        </SectionTitle>
        <SectionText>
        My name is Aidan or Asicc i'm a very curious person Currently i'm working on a few hobbies Learning JavaScript, Next.js and Exploring Blockchain Technology. As well as Working my way to become a Real Estate Agent.
        </SectionText>
         <a href='https://discord.gg/5DJHgm4wrM'><Button>Join The Discord</Button></a>
      </LeftSection>
    </Section>
  </>
);

export default Hero;