import React from 'react'
import { Box } from 'rebass/styled-components'

import SectionHeading from './SectionHeading'
import SectionWrapper from './SectionWrapper'
import BodyText from './BodyText'
import ExternalLink from './ExternalLink'
import Italic from './Italic'
import RightAlign from './RightAlign'

const Wrapper = props => <Box sx={{ mb: 4 }} {...props} />

const Why = () => {
  return (
    <SectionWrapper>
      <SectionHeading id="why">why I wrote the manifesto</SectionHeading>
      <Wrapper>
        <BodyText>
          On the 4th December 2006 I saw the bands <Italic>Beat Express</Italic>{' '}
          and <Italic>Heavy Load</Italic> play in Brighton. It was the first
          time I had seen musicians with learning disabilities on stage
          performing and it was one of the best gigs I’ve ever been to. I
          wondered why I hadn’t heard of or seen these musicians play before. I
          thought that if I had enjoyed it so much, then other people would too.
          It also made me realise the opportunities I had as a musician weren’t
          available to everyone. So, since then I’ve done all I can to support
          all kinds of people to make all kinds of music, share this music and
          get others to watch and listen.
        </BodyText>
      </Wrapper>
      <BodyText>
        This includes supporting the creation of a music scene in Brighton
        around the long running{' '}
        <ExternalLink href="https://therockhousebrighton.blogspot.com/">
          Rock House
        </ExternalLink>{' '}
        night; organising three UK tours for bands with members with learning
        disabilities through{' '}
        <ExternalLink href="https://www.constantflux.co.uk">
          Constant Flux
        </ExternalLink>
        ; supporting{' '}
        <ExternalLink href="https://diyspaceforlondon.org/">
          DIY Space For London
        </ExternalLink>{' '}
        to be the first volunteer run venue in the UK to achieve Bronze
        accreditation for access from{' '}
        <ExternalLink href="http://www.attitudeiseverything.org.uk/">
          Attitude Is Everything
        </ExternalLink>
        ; and working for organisations such as{' '}
        <ExternalLink href="https://www.heartnsoul.co.uk/">
          Heart n Soul
        </ExternalLink>
        ,{' '}
        <ExternalLink href="http://www.carousel.org.uk/">Carousel</ExternalLink>
        ,{' '}
        <ExternalLink href="http://www.clubsoda.org.uk/">
          Club Soda
        </ExternalLink>
        ,{' '}
        <ExternalLink href="https://www.cultureshift.org.uk/">
          Culture Shift
        </ExternalLink>{' '}
        and{' '}
        <ExternalLink href="https://stayuplate.org/">Stay Up Late</ExternalLink>{' '}
        as a music facilitator supporting people with learning disabilities to
        form bands, create music, record and perform; as well as organising
        countless other gigs, releases, events and projects.
      </BodyText>
      <Wrapper />
      <Wrapper>
        <BodyText>
          I think everyone should have the chance to experience a little of what
          I’ve been lucky enough to experience since 2006. I will forever be
          grateful for everything I have learnt from being involved with all of
          this. I wrote the manifesto to try and encourage others to get
          involved and help make more and more things happen.
        </BodyText>
      </Wrapper>
      <Wrapper>
        <BodyText>
          In 2006 I only knew two bands existed, now I can write the list below
          of bands and musicians. Some existed for just one night and some have
          been playing for years, all of them helped change mine and other
          people’s worlds, even in some small way. I hope this list will only
          get longer and longer!
        </BodyText>
      </Wrapper>
      <RightAlign>
        &mdash;{' '}
        <ExternalLink
          href="https://www.richardphoenix.com"
          fontSize={[1, 2, 3]}
        >
          Richard Phoenix
        </ExternalLink>
      </RightAlign>
    </SectionWrapper>
  )
}

export default Why
