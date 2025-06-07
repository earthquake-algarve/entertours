import {
	FaBus,
	FaSailboat,
} from 'react-icons/fa6';
import { MdOutlineSurfing, MdOutlineKayaking } from 'react-icons/md';
import { PiPersonSimpleHikeBold, PiSoccerBallBold } from 'react-icons/pi';
import { IconType } from 'react-icons';
import React from 'react';

// Define the type for your icon registry
export type IconName =
	| 'FaBus'
	| 'FaSailboat'
	| 'MdOutlineSurfing'
	| 'MdOutlineKayaking'
	| 'PiPersonSimpleHikeBold'
    | 'PiSoccerBallBold';


export const iconRegistry: Record<IconName, IconType> = {
	'FaBus': FaBus,
	'FaSailboat': FaSailboat,
	'MdOutlineSurfing': MdOutlineSurfing,
	'PiPersonSimpleHikeBold': PiPersonSimpleHikeBold,
	'MdOutlineKayaking': MdOutlineKayaking,
    'PiSoccerBallBold': PiSoccerBallBold,

};

// Props interface for the CategoryIcon component
interface CategoryIconProps {
    iconName: string | null | undefined;
    size?: number;
    className?: string;
   }

// Helper component to render icons
export function CategoryIcon({ iconName, size = 40, className = '' }: CategoryIconProps): React.ReactElement {
    // Type guard to check if iconName is a valid key
    const isValidIconName = (name: string): name is IconName => {
      return name in iconRegistry;
    };
   
    if (!iconName || !isValidIconName(iconName)) {
      // Fallback icon if the specified icon doesn't exist
      const DefaultIcon = iconRegistry['FaBus'];
      return React.createElement(DefaultIcon, { size, className });
    }
   
    const IconComponent = iconRegistry[iconName];
    return React.createElement(IconComponent, { size, className });
   }
   
   // Optional: Export all available icon names for use elsewhere
   export const availableIcons = Object.keys(iconRegistry) as IconName[];
   
   // Optional: Type for your Prisma model (if you want to be strict about icon field)
   export interface CategoryWithIcon {
    id: string;
    name: string;
    isActive: boolean;
    icon: IconName | null;
    createdAt: Date;
    updatedAt: Date;
   }
