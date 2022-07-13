import React from 'react';
import { MediaContainer, Medias } from './SocialMedia.style';
import Github from '../../assets/SocialMedia/GitHub';
import Instagram from '../../assets/SocialMedia/Instagram';
import Linkedin from '../../assets/SocialMedia/LinkedIn';
import Telegram from '../../assets/SocialMedia/Telegram';


const SocialMedia: React.FC = () => {
  return(
    <MediaContainer>
            <Medias href='http://instagram.com/missetubal' target='_blank'><Instagram/></Medias>
            <Medias href='http://github.com/missetubal' target='_blank'><Github/></Medias>
            <Medias href='http://linkedin.com/in/michelle-setubal' target='_blank'><Linkedin/></Medias>
            <Medias href='http://instagram.com/missetubal' target='_blank'><Telegram/></Medias>
    </MediaContainer>
  )
}

export default SocialMedia;