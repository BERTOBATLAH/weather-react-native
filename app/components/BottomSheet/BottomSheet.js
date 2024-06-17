import React, { useMemo } from "react";
import { View, StyleSheet, Text } from "react-native";
import BottomSheet from "@gorhom/bottom-sheet";

export default function SwipeUp() {
  const snapPoints = useMemo(() => ["25%", "50%", "70%"]);
  return (
    <BottomSheet snapPoints={snapPoints} index={1}>
      <Text>this is bottomSheet</Text>
    </BottomSheet>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
