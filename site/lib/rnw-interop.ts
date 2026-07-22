"use client";

import "@site/lib/rnw-globals";
import { cssInterop } from "nativewind";
import {
  Image,
  Pressable,
  ScrollView,
  Text,
  TextInput,
  View,
} from "react-native";

cssInterop(View, { className: "style" });
cssInterop(Text, { className: "style" });
cssInterop(Pressable, { className: "style" });
cssInterop(TextInput, { className: "style" });
cssInterop(Image, { className: "style" });
cssInterop(ScrollView, {
  className: "style",
  contentContainerClassName: "contentContainerStyle",
});
