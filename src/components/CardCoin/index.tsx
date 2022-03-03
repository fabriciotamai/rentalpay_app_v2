import React, {FC, useEffect} from 'react';

import {Container, Content, CoinInfo, CoinName, Balance} from './styles';

import {RFValue} from 'react-native-responsive-fontsize';
import {TouchableOpacityProps} from 'react-native';

import HomeActiveIcon from '../../../assets/icons/home_active_icon.svg';
import BtcIcon from '../../assets/icons/btc_icon.svg';
import EthIcon from '../../assets/icons/tether_icon.svg';
import CardanoIcon from '../../assets/icons/cardano_icon.svg';
import ZeltsIcon from '../../assets/icons/zelts_icon.svg';
import UpLibra from '../../assets/icons/upLibra.svg';
import Brmv from '../../assets/icons/brmv.svg';
import UpFranco from '../../assets/icons/upFran.svg';
import UpDolar from '../../assets/icons/upDolar.svg';
import UpEuro from '../../assets/icons/upDolar.svg';
import Bnb from '../../assets/icons/bnb.svg';
import ZeltsSilver from '../../assets/icons/zeltsSilver.svg';

import {SvgProps} from 'react-native-svg';

interface Props extends TouchableOpacityProps {
  img?: FC<SvgProps>;
  name?: any;
  balance?: any;
}

interface ICardCoin {
  data: Props;
  symbol: FC<SvgProps>;
}

export function CardCoin({data, img: Img}: ICardCoin) {

  function getIcon(icon: any) {
    if (data.symbol === 'BTC') {
      return <BtcIcon width={RFValue(42)} height={RFValue(42)} />;
    }
    if (data.symbol === 'ETH') {
      return <EthIcon width={RFValue(42)} height={RFValue(42)} />;
    }
    if (data.symbol === 'ZTG') {
      return <ZeltsIcon width={RFValue(42)} height={RFValue(42)} />;
    }
    if (data.symbol === 'GBPU') {
      return <UpLibra width={RFValue(42)} height={RFValue(42)} />;
    }
    if (data.symbol === 'BRMV') {
      return <Brmv width={RFValue(42)} height={RFValue(42)} />;
    }
    if (data.symbol === 'CHFU') {
      return <UpFranco width={RFValue(42)} height={RFValue(42)} />;
    }
    if (data.symbol === 'USDU') {
      return <UpDolar width={RFValue(42)} height={RFValue(42)} />;
    }
    if (data.symbol === 'EURU') {
      return <UpEuro width={RFValue(42)} height={RFValue(42)} />;
    }
    if (data.symbol === 'BNB') {
      return <Bnb width={RFValue(42)} height={RFValue(42)} />;
    }
    if (data.symbol === 'ZTS') {
      return <ZeltsSilver width={RFValue(42)} height={RFValue(42)} />;
    }
  }

  return (
    <Container>
      <Content>
        {getIcon(data)}
        <CoinInfo>
          <CoinName>{`${data?.name} (${data?.symbol})`}</CoinName>
          <Balance>{Number(data?.balance_brl).toFixed(2)}</Balance>
        </CoinInfo>
      </Content>
    </Container>
  );
}
