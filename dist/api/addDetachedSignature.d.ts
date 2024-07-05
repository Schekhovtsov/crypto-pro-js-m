import { SignType } from '../helpers/getSignType';
/**
 * Добавляет отсоединенную подпись хеша к подписанному сообщению по отпечатку сертификата
 *
 * @param thumbprint - отпечаток сертификата
 * @param signedMessage - подписанное сообщение
 * @param messageHash - хеш подписываемого сообщения, сгенерированный по ГОСТ Р 34.11-2012 256 бит
 * @param signType - тип подписи, может быть равен 'CAdES BES', 'CAdES-X Long Type 1', 'CAdES T', 'PKCS7'
 * @returns подпись в формате signType
 */
export declare const addDetachedSignature: (thumbprint: string, signedMessage: string | ArrayBuffer, messageHash: string, signType?: SignType) => Promise<string>;
