import React from 'react';
import { Text } from 'react-native';
import useTheme from '../hooks/useTheme';

type LabelProps = {
    content: string;
    type?: 'heading' | 'p' | 'title' | 'tag-small' | 'tag-big' | 'amount' | 'cta-text' | 'name';
    style?: object;
}

export const Label: React.FC<LabelProps> = ({
    content,
    type,
    style,
    ...props
}) => {

    const {textStyles} = useTheme();

    const getStyleType = () => {
        switch (type) {
          case 'heading':
            return [textStyles.heading, { ...style }]
          case 'title':
            return [textStyles.titleText, { ...style }]
          case 'amount':
            return [textStyles.amount, { ...style }]
          case 'tag-small':
            return [textStyles.tagSmall, { ...style }]
          case 'tag-big':
            return [textStyles.tagBig, { ...style }]
          case 'cta-text':
            return [textStyles.ctaText, { ...style }]
          case 'name':
            return [textStyles.nameLabel, { ...style }]
          case 'p':
            return [textStyles.headingDesc, { ...style }]
          default:
            return style
        }
      }

      
    return (
        <Text style={getStyleType()} {...props}>
            {content}
        </Text>
    )
}