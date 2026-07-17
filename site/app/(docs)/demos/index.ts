import type { ComponentType } from "react";
import AccordionDemo from "./accordion";
import AlertDemo from "./alert";
import AlertDialogDemo from "./alert-dialog";
import AspectRatioDemo from "./aspect-ratio";
import AvatarDemo from "./avatar";
import BadgeDemo from "./badge";
import ButtonDemo from "./button";
import CardDemo from "./card";
import CheckboxDemo from "./checkbox";
import CollapsibleDemo from "./collapsible";
import DialogDemo from "./dialog";
import DropdownMenuDemo from "./dropdown-menu";
import InputDemo from "./input";
import LabelDemo from "./label";
import PopoverDemo from "./popover";
import ProgressDemo from "./progress";
import RadioGroupDemo from "./radio-group";
import SelectDemo from "./select";
import SeparatorDemo from "./separator";
import SkeletonDemo from "./skeleton";
import SwitchDemo from "./switch";
import TabsDemo from "./tabs";
import TextDemo from "./text";
import TextareaDemo from "./textarea";
import ToggleDemo from "./toggle";
import ToggleGroupDemo from "./toggle-group";
import TooltipDemo from "./tooltip";

export const demos: Record<string, ComponentType> = {
  "accordion": AccordionDemo,
  "alert": AlertDemo,
  "alert-dialog": AlertDialogDemo,
  "aspect-ratio": AspectRatioDemo,
  "avatar": AvatarDemo,
  "badge": BadgeDemo,
  "button": ButtonDemo,
  "card": CardDemo,
  "checkbox": CheckboxDemo,
  "collapsible": CollapsibleDemo,
  "dialog": DialogDemo,
  "dropdown-menu": DropdownMenuDemo,
  "input": InputDemo,
  "label": LabelDemo,
  "popover": PopoverDemo,
  "progress": ProgressDemo,
  "radio-group": RadioGroupDemo,
  "select": SelectDemo,
  "separator": SeparatorDemo,
  "skeleton": SkeletonDemo,
  "switch": SwitchDemo,
  "tabs": TabsDemo,
  "text": TextDemo,
  "textarea": TextareaDemo,
  "toggle": ToggleDemo,
  "toggle-group": ToggleGroupDemo,
  "tooltip": TooltipDemo,
};
