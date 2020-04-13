import * as React from 'react';
import { iconHelper } from './../helpers/iconHelper';

type Props = {
  url: string;
  icon: string;
  iconSize: number;
  iconPosition?: 'left' | 'right';
  text?: string;
  isTextVisible?: boolean;
  cssClass?: string;
};

export const IconLink = (props: Props) => {
  const textVisibilityClass = props.isTextVisible ? '' : 'sr-only';

  return (
    <a
      href={props.url}
      className={props.cssClass + ' inline-flex items-center font-open-sans'}
    >
      <span
        className={
          props.iconPosition === 'left' ? 'order-2' : '' + textVisibilityClass
        }
      >
        {props.text}
      </span>
      <span className={props.iconPosition === 'left' ? 'order-1 mr-1' : 'ml-1'}>
        {iconHelper(props.icon, props.iconSize)}
      </span>
    </a>
  );
};
