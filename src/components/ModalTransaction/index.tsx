import React from 'react';
import Modal from 'react-native-modal';

import {
  ModalView,
  ModalHeader,
  HeaderTitle,
  ModalContent,
  ModalTitle,
  ModalValue,
  ModalFooter,
  FooterTitle,
  FooterText,
  ModalClose,
  ModalCloseText,
} from './styles';

import HeaderImage from '../../assets/imgs/rental_pay_logo.svg';
// import {RFValue} from 'react-native-responsive-fontsize';

interface Props {
  visible: boolean;
  setVisible: () => void;
  type: 'BRL' | 'CRYPTO' | 'CREDIT';
}

export function ModalTransaction({visible, setVisible, type}: Props) {
  // const [isModalVisible, setModalVisible] = useState(visible);

  // const toggleModal = () => {
  //   setModalVisible(!isModalVisible);
  // };
  function getData(method: 'BRL' | 'CRYPTO' | 'CREDIT') {
    console.log(method);
    if (method === 'BRL') {
      return (
        <>
          <ModalHeader>
            <HeaderTitle>Recibo</HeaderTitle>
            <HeaderImage />
          </ModalHeader>
          <ModalContent>
            <ModalTitle>ID</ModalTitle>
            <ModalValue>#2102</ModalValue>
          </ModalContent>
          <ModalContent>
            <ModalTitle>Data</ModalTitle>
            <ModalValue>7/11/21 07:18:21</ModalValue>
          </ModalContent>
          <ModalContent>
            <ModalTitle>Transação</ModalTitle>
            <ModalValue>Entrada</ModalValue>
          </ModalContent>
          <ModalContent>
            <ModalTitle>Valor</ModalTitle>
            <ModalValue>R$ 900.00</ModalValue>
          </ModalContent>
          <ModalContent>
            <ModalTitle>Status</ModalTitle>
            <ModalValue>Concluído</ModalValue>
          </ModalContent>

          <ModalFooter>
            <FooterTitle>Descrição da transação</FooterTitle>
            <FooterText>Depósito BRL - OrPag</FooterText>
            <FooterText>Conta - F9403940</FooterText>
          </ModalFooter>
        </>
      );
    } else if (method === 'CRYPTO') {
      return (
        <>
          <ModalHeader>
            <HeaderTitle>Recibo</HeaderTitle>
            <HeaderImage />
          </ModalHeader>
          <ModalContent>
            <ModalTitle>ID</ModalTitle>
            <ModalValue>#2102</ModalValue>
          </ModalContent>
          <ModalContent>
            <ModalTitle>Data</ModalTitle>
            <ModalValue>7/11/21 07:18:21</ModalValue>
          </ModalContent>
          <ModalContent>
            <ModalTitle>Moeda</ModalTitle>
            <ModalValue>BTC</ModalValue>
          </ModalContent>
          <ModalContent>
            <ModalTitle>Transação</ModalTitle>
            <ModalValue>Entrada</ModalValue>
          </ModalContent>
          <ModalContent>
            <ModalTitle>Volume</ModalTitle>
            <ModalValue>0.930293</ModalValue>
          </ModalContent>
          <ModalContent>
            <ModalTitle>Status</ModalTitle>
            <ModalValue>Concluído</ModalValue>
          </ModalContent>
          <ModalContent>
            <ModalTitle>Hash</ModalTitle>
            <ModalValue>Visualizar</ModalValue>
          </ModalContent>

          <ModalFooter>
            <FooterTitle>Descrição da transação</FooterTitle>
            <FooterText>Depósito cripto - BTC</FooterText>
            <FooterText>Via wallet - 28329sEehrsluabwER</FooterText>
          </ModalFooter>
        </>
      );
    } else if (method === 'CREDIT') {
      return (
        <>
          <ModalHeader>
            <HeaderTitle>Recibo</HeaderTitle>
            <HeaderImage />
          </ModalHeader>
          <ModalContent>
            <ModalTitle>ID</ModalTitle>
            <ModalValue>#2102</ModalValue>
          </ModalContent>
          <ModalContent>
            <ModalTitle>Data</ModalTitle>
            <ModalValue>7/11/21 07:18:21</ModalValue>
          </ModalContent>
          <ModalContent>
            <ModalTitle>Contrato</ModalTitle>
            <ModalValue>#128393</ModalValue>
          </ModalContent>
          <ModalContent>
            <ModalTitle>Parcela</ModalTitle>
            <ModalValue>01/06</ModalValue>
          </ModalContent>
          <ModalContent>
            <ModalTitle>Valor da parcela</ModalTitle>
            <ModalValue>R$ 800.00</ModalValue>
          </ModalContent>
        </>
      );
    }
  }
  return (
    <Modal isVisible={visible} onBackdropPress={setVisible}>
      <ModalView>
        {getData(type)}
        <ModalClose onPress={setVisible}>
          <ModalCloseText>Fechar</ModalCloseText>
        </ModalClose>
      </ModalView>
    </Modal>
  );
}
