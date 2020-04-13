import React from 'react';
import {
  GitHubIcon,
  LinkedInIcon,
  DotIcon,
  ChevronRightIcon,
  GlobeIcon,
  CodeIcon,
} from '../components/Icons';

export const iconHelper = (icon: string, size: number) => {
  switch (icon) {
    case 'github':
      return <GitHubIcon size={size} />;
    case 'linkedin':
      return <LinkedInIcon size={size} />;
    case 'dot':
      return <DotIcon size={size} />;
    case 'chevronright':
      return <ChevronRightIcon size={size} />;
    case 'globe':
      return <GlobeIcon size={size} />;
    case 'code':
      return <CodeIcon size={size} />;
    default:
      return null;
  }
};
