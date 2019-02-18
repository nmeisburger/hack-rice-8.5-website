import { Box, Flex } from 'rebass';
import { Element } from 'react-scroll';
import { background, darkAccentColor } from '../styles/colors.json';
import Btn from '../components/button.js';
import { mainFont } from '../styles/fonts.json';


const links = [
    {
        href: "https://facebook.com/hackrice",
        label: " Facebook ",
        icon: "https://icon.now.sh/facebook/FFFFFF/40"
    },
    {
        href: "mailto:officialhackrice@gmail.com",
        label: " Email ",
        icon: "https://icon.now.sh/email/FFFFFF/40"
    },
    {
        href: "https://twitter.com/hackingrice",
        label: " Twitter ",
        icon: "https://icon.now.sh/twitter/FFFFFF/40"
    },
    {
        href: "https://medium.com/@hackrice",
        label: " Medium ",
        icon: "https://icon.now.sh/medium/FFFFFF/40"
    }
].map(link => {
    link.key = `link-${link.label}`;
    return link;
});

const contact = () => (
    <Element name='contact'>
        <Flex justifyContent="center" py={50}>
            <Box width={0.6}>
                <h1 className='title'>
                    CONTACT US
                </h1>
                <Flex justifyContent="center">
                    {links.map(({ href, icon, label, key }) => (
                        <div key={key} className="linkbtn">
                            <Btn href={href} icon={icon} label={label} color={darkAccentColor} />
                        </div>
                    ))}
                </Flex>
            </Box>
        </Flex>
        <style jsx global>{`
            body {
                background: ${background};
            }

            .linkbtn {
                padding: 10px;
            }

            .title {
                font-family: ${mainFont};
                font-size: 3em;
            }
        `}</style>
    </Element>
);

export default contact
