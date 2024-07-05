import { SignType } from '../helpers/getSignType';
/**
 * Создает отсоединенную подпись хеша по отпечатку сертификата
 *
 * @param thumbprint - отпечаток сертификата
 * @param messageHash - хеш подписываемого сообщения, сгенерированный по ГОСТ Р 34.11-2012 256 бит
 * @param signType - тип подписи, может быть равен 'CAdES BES', 'CAdES-X Long Type 1', 'CAdES T', 'PKCS7'
 * @returns подпись в формате signType
 */
export declare const createDetachedSignature: (thumbprint: string, messageHash: string, signType?: SignType) => Promise<string>;
