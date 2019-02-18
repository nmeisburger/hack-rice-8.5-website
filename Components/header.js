import * as Scroll from "react-scroll";
let ScrollingLink = Scroll.Link;
import { Flex, Box } from 'rebass';
import { backgroundColor, lightAccentColor } from '../styles/colors.json';
import { mainFont } from '../styles/fonts.json';

const headerLinks = [
    {
        name: "Event Info",
        address: "eventInfo"
    },
    {
        name: "Competition Details",
        address: "competitionDetails"
    },
    {
        name: "Contact Us",
        address: "contact"
    },
    {
        name: "FAQs",
        address: "faqs"
    }
].map(link => {
    link.key = `link-${link.address}`;
    return link;
});

const Header = () => (
    <div>
        <Flex font-family={mainFont} bg={backgroundColor} justifyContent="center" pt={4} pb={5}>
            
            {headerLinks.map(
                ({ name, address, key }) => (
                    <ScrollingLink to={address} smooth={true} duration={500} key={key}>
                        <h2>
                            {name}
                        </h2>
                    </ScrollingLink>
                ))}
            
        </Flex>

        <style jsx>{`
            h2 {
                display: inline;
                text-decoration: none;
                color: ${lightAccentColor};
                font-size: 1.5em;
                font-family: ${mainFont};
                padding: 50px;
            }
            h2:hover {
                opacity: 0.5;
            }
        `}</style>
    </div>
);

export default Header;
