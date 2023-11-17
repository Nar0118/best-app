import { Button } from "native-base";

function CustomButton({ mt, bg, color, children, onPress, style }) {
  return (
    <Button
      bordered
      style={style}
      w='full'
      h={55}
      mt={mt}
      rounded='full'
      bg={bg}
      _text={{
        color,
        fontWeight: "bold",
      }}
      _pressed={{
        bg,
      }}
      onPress={onPress}
    >
      {children}
    </Button>
  );
}

export default CustomButton;
