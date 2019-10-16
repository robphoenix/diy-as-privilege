// @ts-nocheck
import React from 'react'
import { Box } from 'rebass/styled-components'

import SectionHeading from './SectionHeading'
import BodyText from './BodyText'
import ExternalLink from './ExternalLink'

const artists = [
  { name: '2Decks', href: 'https://2decks.bandcamp.com/' },
  { name: 'Beat Express', href: 'https://beat-express.bandcamp.com/' },
  { name: 'Berhana', href: '' },
  { name: 'Bubbaloo', href: 'https://vimeo.com/18022561' },
  {
    name: 'Catherine O’Rourke',
    href: 'https://rockhouserecords.bandcamp.com/album/this-is-my-passion',
  },
  { name: 'Cossima', href: ' https://www.youtube.com/watch?v=QkIFVZE-_MI' },
  {
    name: 'Dancing Rock Queens',
    href: 'https://www.youtube.com/watch?v=VA8ykKJPtx8',
  },
  { name: 'Daniel Wakeford', href: 'http://danielwakeford.com/' },
  { name: 'Dedji', href: '' },
  { name: 'Delta 7', href: 'https://www.youtube.com/watch?v=-m-EaYeDMqw' },
  { name: 'Diamond Glaze', href: 'https://diamondglaze.bandcamp.com/releases' },
  {
    name: 'DJ Ivon',
    href: 'https://rockhouserecords.bandcamp.com/album/southern-beats',
  },
  {
    name: 'Do Your Own Thing Band',
    href:
      'https://doyourownthing.bandcamp.com/track/do-your-own-thing-band-dont-step-on-my-burger',
  },
  { name: 'Electric Fire', href: 'https://electricfire.bandcamp.com/releases' },
  { name: 'Flash Rockers', href: 'https://youtu.be/nCXvJXYPx-M' },
  { name: 'Fuzzbomb Band', href: '' },
  {
    name: 'Fuzzbomb Flash Band',
    href: 'https://soundcloud.com/carouselartuk/sets/happy-fuzzbomb-flash-band',
  },
  { name: 'Ghosthearted', href: 'https://youtu.be/TODRZz9W6Wo' },
  { name: 'Heavy Load', href: 'https://www.youtube.com/watch?v=JEUFfp9_XdM' },
  {
    name: 'Hit Party Crashers',
    href: 'https://www.youtube.com/watch?v=S1SKybzH8j4',
  },
  { name: 'Jade', href: '' },
  {
    name: 'Jolene Wild',
    href: 'https://rockhouserecords.bandcamp.com/album/jolene-wild',
  },
  { name: 'K-Dog', href: 'https://k-dog.bandcamp.com/' },
  { name: 'Lizzie Emeh', href: 'https://lizzieemeh.bandcamp.com/' },
  {
    name: 'Louis Walkden',
    href: 'https://www.youtube.com/watch?v=bTbBbb-Lzds',
  },
  {
    name: 'Luc Eisenbarth',
    href: 'https://rockhouserecords.bandcamp.com/album/mountain-tigers',
  },
  {
    name: 'Ludo',
    href: 'https://doyourownthing.bandcamp.com/track/ludo-home-school',
  },
  { name: 'Minotor', href: 'https://minotor.bandcamp.com/' },
  {
    name: 'Mr Skrapz',
    href: 'https://rockhouserecords.bandcamp.com/album/boy-in-the-hood-uk',
  },
  { name: 'Pertti Kurikan Nimipäivät', href: 'http://pkn.rocks/en/' },
  {
    name: 'Radical Racoons',
    href: 'https://www.youtube.com/watch?v=PnRyRtLbSrg',
  },
  {
    name: 'Richard Rock n Roll',
    href: 'https://rockhouserecords.bandcamp.com/album/everybody-is-crazy',
  },
  {
    name: 'Richard Watson',
    href: 'https://www.youtube.com/watch?v=rLe6xTzqg5k',
  },
  { name: 'Robyn Steward', href: 'https://robynsteward.bandcamp.com/' },
  { name: 'Rock House Band', href: 'ttps://youtu.be/52VY8snODTc' },
  { name: 'Rock House Rap Gang', href: '' },
  { name: 'Rock Penguins', href: 'https://rockpenguins.bandcamp.com/releases' },
  { name: 'Ryan O’Donovan', href: 'https://ryanodonovan.bandcamp.com/' },
  {
    name: 'Sabien Gator',
    href:
      'https://www.youtube.com/playlist?list=PLY0s6G8ZKa2AVbNf5IZPBZ_NwTWuFwbxl',
  },
  { name: 'Sam Castell-Ward', href: 'https://youtu.be/g1bdA2pfKaI' },
  { name: 'Seany Seany', href: 'https://www.youtube.com/watch?v=Yx_QtjVDG2U' },
  { name: 'Sensatronic Lab', href: 'https://vimeo.com/177905999' },
  { name: 'Teddy Boys', href: '' },
  { name: 'Teddy Wynettes', href: '' },
  { name: 'The Carbonators', href: 'https://thecarbonators.bandcamp.com/' },
  { name: 'The Coasters', href: 'https://youtu.be/jNCD0Gw4tSI' },
  {
    name: 'The Daniel Wakeford Experience',
    href: 'https://danielwakeford.bandcamp.com/album/thats-how-i-see-it',
  },
  { name: 'The Fish Police', href: 'https://fishpolice.bandcamp.com/' },
  { name: 'The Revs', href: '' },
  {
    name: 'The Stars Band',
    href:
      'https://www.theguardian.com/uk/the-northerner/2013/may/30/the-stars-band-we-think-differently-album',
  },
  {
    name: 'Too Hot For Candy',
    href: 'https://toohotforcandy.bandcamp.com/releases',
  },
  { name: 'Ultimate Thunder', href: '' },
  {
    name: 'We Rise From The Fallen',
    href: 'https://werisefromthefallen.bandcamp.com/releases',
  },
  {
    name: 'Zombie Crash',
    href: 'https://zombiecrash.bandcamp.com/album/hardcore-on-tour',
  },
]
const Artists = () => {
  return (
    <Box
      as="section"
      sx={{
        width: 'auto',
        px: 4,
        mb: [5, 6, 6],
      }}
    >
      <SectionHeading id="artists">artists</SectionHeading>
      <Box
        sx={{
          listStyle: 'none',
          columnCount: [2, 3, 4],
        }}
      >
        {artists.map(artist => (
          <Box
            key={artist.name}
            sx={{
              mb: 3,
            }}
          >
            <BodyText>
              {artist.href ? (
                <ExternalLink href={artist.href}>{artist.name}</ExternalLink>
              ) : (
                <BodyText>{artist.name}</BodyText>
              )}
            </BodyText>
          </Box>
        ))}
      </Box>
    </Box>
  )
}

export default Artists
