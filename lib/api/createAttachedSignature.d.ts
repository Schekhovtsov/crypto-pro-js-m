import { SignType } from '../helpers/getSignType';
/**
 * Создает присоединенную подпись сообщения по отпечатку сертификата
 *
 * @param thumbprint - отпечаток сертификата
 * @param message - подписываемое сообщение
 * @param signType - тип подписи, может быть равен 'CAdES BES', 'CAdES-X Long Type 1', 'CAdES T', 'PKCS7'
 * @returns подпись в формате signType
 */
export declare const createAttachedSignature: (thumbprint: string, unencryptedMessage: string | ArrayBuffer, signType?: SignType) => Promise<string>;
