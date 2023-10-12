import { Canvas, LinearGradient } from "@shopify/react-native-skia";

const colorsValue = useSharedValue(1); 
const skiaFirstColor = useValue(0); 
const skiaSecondColor = useValue(0);

useSharedValueEffect(() => {
  skiaFirstColor.current = interpolateColor(colorsValue.value, [0, 1], ['#FFFFFF', '#000000']);
  skiaSecondColor.current = interpolateColor(colorsValue.value, [0, 1], ['#FFFFFF', '#00ff00']);
}, colorsValue); // you can pass other shared values as extra parameters

const colors = useComputedValue(() => {
 return [skiaFirstColor.current, skiaSecondColor.current]
}, [skiaFirstColor, skiaSecondColor])

return (
 <Canvas>
   <LinearGradient colors={colors} /> 
 </Canvas>
)
 