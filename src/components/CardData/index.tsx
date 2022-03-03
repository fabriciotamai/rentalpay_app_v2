import React, {FC} from 'react';

import {
  Container,
  Content,
  LeftContent,
  InfoContent,
  User,
  RightContent,
  Value,
  Description,
  Date,
} from './styles';

import {RFValue} from 'react-native-responsive-fontsize';
import {TouchableOpacityProps} from 'react-native';
import {SvgProps} from 'react-native-svg';

import EntryIcon from '../../assets/icons/entry_icon.svg';
import ExitIcon from '../../assets/icons/exit_icon.svg';

interface Props extends TouchableOpacityProps {
  user: string;
  date: string;
  value: string;
  description: string;
  type: 'positive' | 'negative';
}

interface ICardData {
  data: Props;
  background: number;
  img: FC<SvgProps>;
}

export function CardData({background, data, img: Img}: ICardData) {
  return (
    <Container back={background}>
      <Content>
        <LeftContent>
          <Img width={RFValue(24)} height={RFValue(24)} />

          <InfoContent>
            <User>{data.user}</User>
            <Date>{data.date}</Date>
          </InfoContent>
        </LeftContent>
        <RightContent>
          <Value type={data.type}>{data.value}</Value>
          <Description>{data.description}</Description>
        </RightContent>
      </Content>
    </Container>
  );
}
