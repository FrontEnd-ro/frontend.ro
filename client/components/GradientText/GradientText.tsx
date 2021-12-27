import React, { HTMLAttributes, PropsWithChildren, ReactHTML } from "react";
import styles from './GradientText.module.scss';

interface Props {
  fromColor: string;
  toColor: string;
  as?: keyof ReactHTML;
  angle?: number;
}

const GradientText : <T extends HTMLAttributes<any>>(args: PropsWithChildren<Props> & T) => JSX.Element = ({ 
  fromColor,
  toColor,
  children,
  angle = 90,
  style = {},
  className = "",
  as: Wrapper = 'p',
  ...rest
}) => {
  return (
    <Wrapper {...rest} className={`${className} ${styles.GradientText}`} style={{
      ...style,
      backgroundImage: `linear-gradient(
        ${angle}deg,
        ${fromColor}, ${toColor}
      )`
    }}>
      {children}
    </Wrapper>
  )
}

export default GradientText;
