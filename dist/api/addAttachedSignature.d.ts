import { SignType } from '../helpers/getSignType';
/**
 * Добавляет присоединенную подпись к подписанному сообщению по отпечатку сертификата
 *
 * @param thumbprint - отпечаток сертификата
 * @param signedMessage - подписанное сообщение
 * @param signType - тип подписи, может быть равен 'CAdES BES', 'CAdES-X Long Type 1', 'CAdES T', 'PKCS7'
 * @returns подпись в формате signType
 */
export declare const addAttachedSignature: (thumbprint: string, signedMessage: string | ArrayBuffer, signType?: SignType) => Promise<string>;
