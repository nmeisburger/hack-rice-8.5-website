import { Flex } from 'rebass';
import SocialLinks from '../components/sociallinks.js';
import Btn from '../components/button.js';
import { background, darkAccentColor } from '../styles/colors.json';


const intro = () => (
    <div>
        <Flex justifyContent="center" pt={9} pb={5}>
            <img src='../static/hr85.png' height="20%" width="20%"/>
        </Flex>
        <Flex justifyContent="center"  pb={4}>
            <Btn href="https://docs.google.com/forms/d/e/1FAIpQLSfIFYOps4mVOVhfhgxmW4kzR3yxviEFc5zATsugW3ITEUrjfQ/viewform" 
                icon="https://icon.now.sh/compose/FFFFFF/20" 
                label=" Sign Up Now" color={darkAccentColor}/>
        </Flex>
        <div className="social">
            <SocialLinks/>
        </div>
        
        <style jsx global>{`
            div {
                background: ${background};
            }

            .social {
                text-align: center;
            }
        `}</style>
    </div>
);

export default intro; 
