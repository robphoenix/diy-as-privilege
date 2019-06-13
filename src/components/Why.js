import React from "react"
import { Flex, Text } from "rebass"
import SectionHeading from "./SectionHeading"
import SectionWrapper from "./SectionWrapper"

const Artist = props => (
  <Text {...props} as="li" fontFamily="body" fontSize={1} />
)

const Why = () => {
  return (
    <SectionWrapper>
      <SectionHeading>Why I wrote the Manifesto</SectionHeading>
      <Text as="p" fontFamily="body" fontSize={2}>
        On the 4th December 2006 I saw the bands Beat Express and Heavy Load
        play in Brighton. It was the first time I had seen musicians with
        learning disabilities on stage performing and it was one of the best
        gigs I’ve ever been to. I wondered why I hadn’t heard of or seen these
        musicians play before. I thought that if I had enjoyed it so much, then
        other people would too. It also made me realise the opportunities I had
        as a musician weren’t available to everyone. So, since then I’ve done
        all I can to support all kinds of people to make all kinds of music,
        share this music and get others to watch and listen. I think everyone
        should have the chance to experience a little of what I’ve been lucky
        enough to experience since 2006. I will forever be grateful for
        everything I have learnt from being involved with all of this. I wrote
        the manifesto to try and encourage others to get involved and help make
        more and more things happen.
        <br />
        <br />
        In 2006 I only knew two bands existed, now I can write a list of
        fifty-three amazing bands and musicians I’ve been lucky enough to see
        and hear over the years. Some existed for just one night and some have
        been playing for years, all of them helped change mine and other
        people’s worlds, even in some small way. I hope this list will only get
        longer and longer!
        <br />
        <br />
      </Text>
      <Flex as="ul" css={{ listStyle: "none" }} flexDirection="column">
        <Artist>2Decks</Artist>
        <Artist />
        <Artist>Beat Express</Artist>
        <Artist>Berhana</Artist>
        <Artist>Bubbaloo</Artist>
        <Artist>Catherine O’Rourke</Artist>
        <Artist>Cossima</Artist>
        <Artist>Dancing Rock Queens</Artist>
        <Artist>Daniel Wakeford</Artist>
        <Artist>Dedji</Artist>
        <Artist>Delta 7</Artist>
        <Artist>Diamond Glaze</Artist>
        <Artist>DJ Ivon</Artist>
        <Artist>DJ Skrapz</Artist>
        <Artist>Do Your Own Thing Band</Artist>
        <Artist>Electric Fire</Artist>
        <Artist>Flash Rockers</Artist>
        <Artist>Fuzzbomb Band</Artist>
        <Artist>Fuzzbomb Flash Band</Artist>
        <Artist>Heavy Load</Artist>
        <Artist>Hit Party Crashers</Artist>
        <Artist>Jade</Artist>
        <Artist>Jolene Wild</Artist>
        <Artist>K-Dog</Artist>
        <Artist>Lizzie Emeh</Artist>
        <Artist>Louis Walkden</Artist>
        <Artist>Luc Eisenbarth</Artist>
        <Artist>Ludo</Artist>
        <Artist>Minotor</Artist>
        <Artist>Pertti Kurikan Nimipäivät</Artist>
        <Artist>Radical Racoons</Artist>
        <Artist>Richard Rock n Roll</Artist>
        <Artist>Richard Watson</Artist>
        <Artist>Robyn Steward</Artist>
        <Artist>Rock House Band</Artist>
        <Artist>Rock House Rap Gang</Artist>
        <Artist>Rock Penguins</Artist>
        <Artist>Ryan O’Donovan</Artist>
        <Artist>Sabien Gator</Artist>
        <Artist>Sam Castell-Ward</Artist>
        <Artist>Seany Seany</Artist>
        <Artist>Sensatronic Lab</Artist>
        <Artist>Teddy Boys</Artist>
        <Artist>Teddy Wynettes</Artist>
        <Artist>The Carbonators</Artist>
        <Artist>The Coasters</Artist>
        <Artist>The Daniel Wakeford Experience</Artist>
        <Artist>The Fish Police</Artist>
        <Artist>The Revs</Artist>
        <Artist>The Stars Band</Artist>
        <Artist>Too Hot For Candy</Artist>
        <Artist>Ultimate Thunder</Artist>
        <Artist>We Rise From The Fallen</Artist>
        <Artist>Zombie Crash</Artist>
      </Flex>
    </SectionWrapper>
  )
}

export default Why
