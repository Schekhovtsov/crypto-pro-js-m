export type SignType = 'CAdES BES' | 'CAdES-X Long Type 1' | 'CAdES T' | 'PKCS7';

export const getSignType = (cadesplugin: any, signType: SignType): any => {
  switch (signType) {
    case 'CAdES BES': {
      return cadesplugin.CADESCOM_CADES_BES;
    }
    case 'CAdES-X Long Type 1': {
      return cadesplugin.CADESCOM_CADES_X_LONG_TYPE_1;
    }
    case 'CAdES T': {
      return cadesplugin.CADESCOM_CADES_T;
    }
    case 'PKCS7': {
      return cadesplugin.CADESCOM_PKCS7_TYPE;
    }
  }
};
