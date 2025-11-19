import CryptoJS from "crypto-js";

const IV_KEY = process.env.VITE_IV_KEY || "";
const AES_KEY = process.env.VITE_AES_KEY || ""; // 16 bytes for IV
export const ROWS_LIMIT = 100;
export const formatNumber = (num: number): string => {
    if (num >= 1_000_000_000) {
      const val = Math.floor((num / 1_000_000_000) * 10) / 10;
      return val.toString().replace(/\.0$/, '') + ' B';
    }
    if (num >= 1_000_000) {
      const val = Math.floor((num / 1_000_000) * 10) / 10;
      return val.toString().replace(/\.0$/, '') + ' M';
    }
    if (num >= 1_000) {
      const val = Math.floor((num / 1_000) * 10) / 10;
      return val.toString().replace(/\.0$/, '') + ' K';
    }
    return num.toString();
  };
  export function encryptAES(plaintext: string): string {
    try {
      const key = CryptoJS.enc.Hex.parse(AES_KEY); // Hex decoding
      const iv = CryptoJS.enc.Hex.parse(IV_KEY);   // Hex decoding
  
      const encrypted = CryptoJS.AES.encrypt(plaintext, key, {
        iv,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7,
      });
  
      return encrypted.ciphertext.toString(CryptoJS.enc.Hex); // Return raw hex like backend
    } catch (error) {
      console.error("Encryption error:", error);
      return "";
    }
  }
  
  export function decryptAES(cipherHex: string | null | undefined): string {
    try {
      if (!cipherHex) return "";
      const key = CryptoJS.enc.Hex.parse(AES_KEY);
      const iv = CryptoJS.enc.Hex.parse(IV_KEY);
  
      // Convert hex to Base64 for CryptoJS decryption
      const cipherParams = CryptoJS.enc.Hex.parse(cipherHex);
      const encryptedBase64 = CryptoJS.enc.Base64.stringify(cipherParams);
  
      const decrypted = CryptoJS.AES.decrypt(encryptedBase64, key, {
        iv,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7,
      });
  
      return decrypted.toString(CryptoJS.enc.Utf8);
    } catch (error) {
      console.error("Decryption error:", error);
      return "";
    }
  }