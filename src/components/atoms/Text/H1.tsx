import { H1TextStyle, whiteTextStyle } from "../../../utils/styles/generalTextStyle";
import { Text } from "./Text";

export type TextProps = {
    children: string;
    style?: any;
    color?: "light" | "dark";
}

export const H1 = (props: TextProps) => {
    let style = { ...props.style, ...H1TextStyle };

    if (props.color === "light") {
        style = { ...style, ...whiteTextStyle };
    }

    return (
        <Text {...props} style={style} />
    );
}