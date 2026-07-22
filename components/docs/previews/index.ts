import type { ComponentType } from 'react';
import { AccordionPreview } from './accordion';
import { AlertDialogPreview } from './alert-dialog';
import { AlertPreview } from './alert';
import { AspectRatioPreview } from './aspect-ratio';
import { AvatarPreview } from './avatar';
import { BadgePreview } from './badge';
import { ButtonPreview } from './button';
import { CardPreview } from './card';
import { CheckboxPreview } from './checkbox';
import { CollapsiblePreview } from './collapsible';
import { DialogPreview } from './dialog';
import { DropdownMenuPreview } from './dropdown-menu';
import { InputPreview } from './input';
import { LabelPreview } from './label';
import { PopoverPreview } from './popover';
import { ProgressPreview } from './progress';
import { RadioGroupPreview } from './radio-group';
import { SelectPreview } from './select';
import { SeparatorPreview } from './separator';
import { SkeletonPreview } from './skeleton';
import { SwitchPreview } from './switch';
import { TabsPreview } from './tabs';
import { TextPreview } from './text';
import { TextareaPreview } from './textarea';
import { ToggleGroupPreview } from './toggle-group';
import { TogglePreview } from './toggle';
import { TooltipPreview } from './tooltip';

export const previews: Record<string, ComponentType> = {
  accordion: AccordionPreview,
  'alert-dialog': AlertDialogPreview,
  alert: AlertPreview,
  'aspect-ratio': AspectRatioPreview,
  avatar: AvatarPreview,
  badge: BadgePreview,
  button: ButtonPreview,
  card: CardPreview,
  checkbox: CheckboxPreview,
  collapsible: CollapsiblePreview,
  dialog: DialogPreview,
  'dropdown-menu': DropdownMenuPreview,
  input: InputPreview,
  label: LabelPreview,
  popover: PopoverPreview,
  progress: ProgressPreview,
  'radio-group': RadioGroupPreview,
  select: SelectPreview,
  separator: SeparatorPreview,
  skeleton: SkeletonPreview,
  switch: SwitchPreview,
  tabs: TabsPreview,
  text: TextPreview,
  textarea: TextareaPreview,
  'toggle-group': ToggleGroupPreview,
  toggle: TogglePreview,
  tooltip: TooltipPreview,
};
