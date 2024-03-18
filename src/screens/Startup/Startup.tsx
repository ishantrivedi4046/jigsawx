import { useTranslation } from "react-i18next";
import { Text, View } from "react-native";

import { SafeScreen } from "@/components/template";
import { useTheme } from "@/theme";

import type { ApplicationScreenProps } from "@/types/navigation";

function Startup({ navigation }: ApplicationScreenProps) {
  const { layout, fonts } = useTheme();
  const { t } = useTranslation(["startup"]);

  return (
    <SafeScreen>
      <View
        style={[
          layout.flex_1,
          layout.col,
          layout.itemsCenter,
          layout.justifyCenter,
        ]}
      >
        <Text style={[fonts.white]}>Home</Text>
      </View>
    </SafeScreen>
  );
}

export default Startup;
