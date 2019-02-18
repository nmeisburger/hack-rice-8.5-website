import { Box, Flex } from 'rebass';
import { Element } from 'react-scroll';
import { background, lightAccentColor } from '../styles/colors.json';
import { mainFont } from '../styles/fonts.json';
 
const locationLink = "https://www.google.com/maps?safe=strict&rlz=1C1CHBF_enUS799US799&q=lilie+idea+lab&um=1&ie=UTF-8&sa=X&ved=0ahUKEwj9m8aBrL_gAhVIlKwKHUpFDzAQ_AUIESgE";


const info = () => (
    <Element name="eventInfo">
        <Flex justifyContent="center" pt={4}>
        <Box width={0.6} pb={20}>
            <h1 className='title'>
                EVENT INFO 
            </h1>
            <h1><img src={`https://icon.now.sh/room/${lightAccentColor.slice(1,)}/40`}/>LOCATION:</h1>
            <h2><img src={`https://icon.now.sh/arrow/${lightAccentColor.slice(1,)}/14`}/>{' '}HACKRICE 8.5 will be held at the <a target="_blank" className="locLink" href={ locationLink }>lilie</a> idea lab.</h2>
            
            <h1><img src={`https://icon.now.sh/schedule/${lightAccentColor.slice(1,)}/40`}/>TIME:</h1>
            <h2><img src={`https://icon.now.sh/arrow/${lightAccentColor.slice(1,)}/14`}/>{' '}HACKRICE 8.5 will take place from March 1st to 2nd.</h2>
        </Box>
        </Flex>
        <style jsx>{`
            .title {
                font-family: ${mainFont};
                font-size: 3em;
            }

            h1,h2 {
                font-family: ${mainFont};
                color: ${lightAccentColor};
            }

            .locLink {
                font-family: ${mainFont};
                font-size: 1em;
                color: #103063;
            }
        `}</style>
        
    </Element>
);

export default info