import { Box, Flex } from 'rebass';
import { Element } from 'react-scroll';
import { background, lightAccentColor, darkAccentColor } from '../styles/colors.json';
import { mainFont } from '../styles/fonts.json';
import Btn from '../components/button.js';

const criteria = [
    {
        category: " Technical Difficulty",
        icon: `https://icon.now.sh/cog/${lightAccentColor.slice(1)}/36`,
        txt: "Solutions should address technically challenging problems while falling anywhere between being beautifully simple to implementing complex, cutting-edge technologies."
    },
    {
        category: " Creativity",
        icon: `https://icon.now.sh/create/${lightAccentColor.slice(1)}/36`,
        txt: "Solutions should be original and either (1) define a new method for solving an unaddressed problem, or (2) present a new approach to a proven solution for a known problem. Solutions should demonstrate that intentional and appropriate design decisions have been made."
    },
    {
        category: " Design & Polish",
        icon: `https://icon.now.sh/color_lens/${lightAccentColor.slice(1)}/36`,
        txt: "We are looking for aesthetically and functionally pleasing projects with an intuitive and polished user experience."
    },
    {
        category: " Practicality & Usefulness",
        icon: `https://icon.now.sh/user/${lightAccentColor.slice(1)}/36`,
        txt: "Projects will be evaluated based on their utility and applicability to a set of problems experienced by people in the real world. Emphasis is placed on ensuring solutions can be extrapolated meaningfully outside of the demonstrated use case."
    }
];

const details = () => (
    <Element name='competitionDetails'>
        <Flex py={50} justifyContent="center">
            <Box width={0.6}>
                <h1 className='title'>
                    COMPETITION DETAILS
                </h1>
                <Flex justifyContent="center" pt={20}>
                    <Btn href="https://hackrice8.devpost.com/" icon="https://icon.now.sh/archive/FFFFFF/30" label=" Submit Project Here" color={darkAccentColor} />
                </Flex>

            </Box>
        </Flex>

        <Flex justifyContent="center" flexWrab="wrap">
            <Box width={0.6}>
                <h1><img src={`https://icon.now.sh/gavel/${lightAccentColor.slice(1)}/42`} />JUDGING CRITERIA</h1>
                {
                    criteria.map(({ category, icon, txt }) => (
                        <Box>
                            <div className="details">
                                <h2><img src={icon} />{category}</h2>
                                <h4>{txt}</h4>
                            </div>
                        </Box>
                    )
                    )
                }
            </Box>
        </Flex>
        <style jsx global>{`
            body {
                background: ${background};
                font-family: ${mainFont};
                color: ${lightAccentColor};
            }

            .title {
                font-family: ${mainFont};
                font-size: 3em;
            }
        `}</style>
    </Element>
);

export default details