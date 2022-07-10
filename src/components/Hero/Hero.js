import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Welcome  <br />
        </SectionTitle>
        <SectionText>
        My name is Moonsight i'm a very curious person Currently i'm working on a few hobbies Learning JavaScript, Next.js
        </SectionText>
         <a href='https://discord.gg/5DJHgm4wrM'><Button>Join The Discord</Button></a>
      </LeftSection>
    </Section>
  </>
);

export default Hero;