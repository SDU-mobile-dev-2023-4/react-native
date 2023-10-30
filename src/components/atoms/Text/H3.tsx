import { H3TextStyle, whiteTextStyle } from "../../../utils/styles/generalTextStyle";
import { Text, TextProps as RawTextProps } from "./Text";

/**
 * Props for the H3 component. Allows for further customization through styling and choosing text color.
 */
export type TextProps = RawTextProps & {
    children: string;
    style?: any;
}

/**
 * H3 component, equivalent to <h3> tag in HTML.
 * 
 * Text color is dark by default, but can be changed to light by passing "light" to the color prop.
 * 
 * @param {TextProps} props - Props to pass to the H3 component, allows for further customization.
 * @returns {JSX.Element} H3 component
 * @see TextProps
 */
export const H3 = (props: TextProps): JSX.Element => {
    let style = { ...H3TextStyle, ...props.style };

    if (props.color === "light") {
        style = { ...style, ...whiteTextStyle };
    }

    return (
        <Text {...props} style={style} />
    );
}