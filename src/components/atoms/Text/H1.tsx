import { H1TextStyle, whiteTextStyle } from "../../../utils/styles/generalTextStyle";
import { Text } from "./Text";

/**
 * Props for the H1 component. Allows for further customization through styling and choosing text color.
 */
export type TextProps = {
    children: string;
    style?: any;
    color?: "light" | "dark";
}

/**
 * H1 component, equivalent to <h1> tag in HTML.
 * 
 * Text color is dark by default, but can be changed to light by passing "light" to the color prop.
 * 
 * @param {TextProps} props - Props to pass to the H1 component, allows for further customization.
 * @returns {JSX.Element} H1 component
 * @see TextProps
 */
export const H1 = (props: TextProps): JSX.Element => {
    let style = { ...props.style, ...H1TextStyle };

    if (props.color === "light") {
        style = { ...style, ...whiteTextStyle };
    }

    return (
        <Text {...props} style={style} />
    );
}