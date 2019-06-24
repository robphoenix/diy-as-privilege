import React from "react"
import { Flex } from "rebass"
import SectionWrapper from "./SectionWrapper"
import SectionHeading from "./SectionHeading"
import BodyText from "./BodyText"

const artists = [
  { name: "2Decks" },
  { name: "Beat Express" },
  { name: "Berhana" },
  { name: "Bubbaloo" },
  { name: "Catherine O’Rourke" },
  { name: "Cossima" },
  { name: "Dancing Rock Queens" },
  { name: "Daniel Wakeford" },
  { name: "Dedji" },
  { name: "Delta 7" },
  { name: "Diamond Glaze" },
  { name: "DJ Ivon" },
  { name: "DJ Skrapz" },
  { name: "Do Your Own Thing Band" },
  { name: "Electric Fire" },
  { name: "Flash Rockers" },
  { name: "Fuzzbomb Band" },
  { name: "Fuzzbomb Flash Band" },
  { name: "Heavy Load" },
  { name: "Hit Party Crashers" },
  { name: "Jade" },
  { name: "Jolene Wild" },
  { name: "K-Dog" },
  { name: "Lizzie Emeh" },
  { name: "Louis Walkden" },
  { name: "Luc Eisenbarth" },
  { name: "Ludo" },
  { name: "Minotor" },
  { name: "Pertti Kurikan Nimipäivät" },
  { name: "Radical Racoons" },
  { name: "Richard Rock n Roll" },
  { name: "Richard Watson" },
  { name: "Robyn Steward" },
  { name: "Rock House Band" },
  { name: "Rock House Rap Gang" },
  { name: "Rock Penguins" },
  { name: "Ryan O’Donovan" },
  { name: "Sabien Gator" },
  { name: "Sam Castell-Ward" },
  { name: "Seany Seany" },
  { name: "Sensatronic Lab" },
  { name: "Teddy Boys" },
  { name: "Teddy Wynettes" },
  { name: "The Carbonators" },
  { name: "The Coasters" },
  { name: "The Daniel Wakeford Experience" },
  { name: "The Fish Police" },
  { name: "The Revs" },
  { name: "The Stars Band" },
  { name: "Too Hot For Candy" },
  { name: "Ultimate Thunder" },
  { name: "We Rise From The Fallen" },
  { name: "Zombie Crash" },
]

const Artist = props => <BodyText {...props} as="li" />

const Artists = () => {
  return (
    <SectionWrapper>
      <SectionHeading id="artists">Artists</SectionHeading>
      <Flex as="ul" css={{ listStyle: "none" }} flexDirection="column">
        {artists.map(artist => (
          <Artist key={artist.name}>{artist.name}</Artist>
        ))}
      </Flex>
    </SectionWrapper>
  )
}

export default Artists
