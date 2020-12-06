export interface WebsiteDefinition {
  /** target URL used for checking usernae availability */
  checkURL : string
  /** what part of the response will be used to validate availability */
  validationMethod ?: 'connect' | 'status' | 'body',
  /** function used in case of validationMethod = 'body'  */
  validator: (responseBody: string) => boolean
}

export interface ResponseSummary {
  connected : boolean,
  status: number,
  body : string
}

export function listWebsites () : Array<string>
export function isUsernameAvailable (username: string, website: string) : Promise<boolean|null>
export function requestURL (url: string) : Promise<ResponseSummary>

declare const WebsitesMap: Record<string, WebsiteDefinition>




