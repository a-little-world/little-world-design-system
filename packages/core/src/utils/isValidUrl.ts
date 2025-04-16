import { keyBy } from 'lodash';

import validDomains from './validDomains';

type Domains = { [K in string]: K };
// Cache for TLDs
let tldCache: {
  tlds: Domains;
  timestamp: number;
} | null = null;

const CACHE_TTL_MS: number = 24 * 60 * 60 * 1000; // 24 hours cache
const IANA_TLD_URL: string =
  'https://data.iana.org/TLD/tlds-alpha-by-domain.txt';

/**
 * Currently cache is not used and we store valid domains in validDomain.ts
 * This function can be used to get the latest valid domains
 * Get TLDs, fetching if necessary and using cache efficiently
 * @returns A promise resolving to an object of valid TLDs
 */
async function getTlds(): Promise<Domains> {
  // If we have a valid cache, return it immediately
  if (tldCache && Date.now() - tldCache.timestamp < CACHE_TTL_MS) {
    return tldCache.tlds;
  }

  try {
    const response = await fetch(IANA_TLD_URL);

    if (!response.ok) {
      throw new Error(
        `Failed to fetch TLDs: ${response.status} ${response.statusText}`,
      );
    }

    const text = await response.text();
    // Parse the TLD list (skip the first line which is a comment)
    const tldList = text
      .split('\n')
      .slice(1)
      .map(tld => tld.toLowerCase())
      .filter(Boolean);

    // Update the cache
    tldCache = {
      tlds: keyBy(tldList, tld => tld),
      timestamp: Date.now(),
    };

    return tldCache.tlds;
  } catch (error) {
    console.error('Error fetching TLD list:', error);

    // If we have a previous cache, use it even if expired
    if (tldCache) {
      return tldCache.tlds;
    }

    // Otherwise fall back to the default list
    const fallbackTlds = validDomains;
    tldCache = {
      tlds: fallbackTlds,
      timestamp: Date.now(),
    };

    return fallbackTlds;
  }
}

/**
 * Validates a URL with efficient TLD checking
 * @param urlString The URL string to validate
 * @returns boolean indicating URL validity
 */
function isValidUrl(urlString: string | null | undefined): boolean {
  try {
    if (!urlString) return false;

    let urlToCheck: string = urlString.trim();

    // If no protocol is provided, add http:// temporarily for validation
    const hasProtocol: boolean = /^[a-zA-Z]+:\/\//.test(urlToCheck);
    if (!hasProtocol) {
      urlToCheck = 'http://' + urlToCheck;
    }

    // Use URL constructor for basic validation
    const url = new URL(urlToCheck);

    // Check for valid protocol
    const protocol = url.protocol.replace(':', '');
    const validProtocol = [
      'http',
      'https',
      'ftp',
      'ftps',
      'ws',
      'wss',
    ].includes(protocol);
    if (!validProtocol && hasProtocol) {
      return false;
    }

    // Check for valid domain structure
    if (!url.hostname || url.hostname === 'localhost') {
      return false;
    }

    // Validate TLD
    const domainParts = url.hostname.split('.');
    if (domainParts.length < 2) {
      return false;
    }

    const tld = domainParts[domainParts.length - 1].toLowerCase();
    const isValid = Object.prototype.hasOwnProperty.call(validDomains, tld);
    return isValid;
  } catch (error) {
    return false;
  }
}

/**
 * Processes a URL - validates it and returns either the valid URL or the original string
 * @param input The input string to process
 * @returns Promise resolving to the processed string
 */
async function processUrl(input: string): Promise<string> {
  try {
    if (!input || typeof input !== 'string') {
      return input as string;
    }

    const isValid = isValidUrl(input);
    if (isValid) {
      // If it's valid but has no protocol, you might want to add one
      const hasProtocol: boolean = /^[a-zA-Z]+:\/\//.test(input);
      return hasProtocol ? input : 'https://' + input;
    } else {
      // Return the original string if not a valid URL
      return input;
    }
  } catch (error) {
    console.error('Error processing URL:', error);
    // Return original input in case of any errors
    return input;
  }
}

// Example usage
// async function testUrlValidator() {
//   console.log(isValidUrl('example.com')); // true
//   console.log(isValidUrl('https://example.com')); // true
//   console.log(isValidUrl('text.not')); // false - invalid TLD
//   console.log(await processUrl('example.com')); // https://example.com
// }

// Uncomment to run
// testUrlValidator();

export { isValidUrl, processUrl, getTlds };
