import { extendTheme } from '@chakra-ui/react';
import colors from './colors';
import space from './space';
import breakpoints from './breakpoints';
import fonts from './fonts';
import fontWeights from './fontWeights';

const overrides = {
    colors,
    space,
    breakpoints,
    fonts,
    fontWeights,
};

export default extendTheme(overrides);
