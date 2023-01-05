import * as React from 'react';
import { ColorSchemeName } from 'react-native';
import { Utilities } from './types';
interface Props {
    children: React.ReactNode;
    colorScheme?: ColorSchemeName;
    utilities: Utilities;
}
declare const TailwindProvider: React.FC<Props>;
export default TailwindProvider;
