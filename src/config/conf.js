// export const WCF_API = process.env.NODE_ENV === 'deveploment' ? '' : ''
// export const OFFICAL_API = process.env.NODE_ENV === 'deveploment' ? '' : ''
const env = 'debug'
export const WCF_API = env === 'debug' ? '' : 'http://wcf.open.cnblogs.com'
export const OFFICAL_API = env === 'debug' ? '' : 'https://www.cnblogs.com'
export const NEWS_API = env === 'debug' ? '' : 'https://news.cnblogs.com'
