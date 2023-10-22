import { Platform } from "react-native"

export type PlatformSelectProps = {
    /** Native component, such as for android or IOS */
    native: React.ReactNode,
    /** Web components */
    default: React.ReactNode,
}

/**
 * Specify different components for different platforms. 
 * 
 * Such as for Android or IOS, or for web.
 * 
 * @param props Component for different platforms
 * @returns Component for the current platform
 */
export default function PlatformSelect(props: PlatformSelectProps) {
    return Platform.select({
        native: () => props.native,
        default: () => props.default,
    })()
}