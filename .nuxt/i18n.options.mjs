import locale_en from "../lang/en.json" assert { type: "json" };
import locale_de from "../lang/de.json" assert { type: "json" };
import locale_it from "../lang/it.json" assert { type: "json" };
import locale_fi from "../lang/fi.json" assert { type: "json" };
import locale_pl from "../lang/pl.json" assert { type: "json" };
export const localeCodes = ["en","de","it","fi","pl"]

export const localeMessages = {
  "en": [{ key: "../lang/en.json", load: () => Promise.resolve(locale_en) }],
  "de": [{ key: "../lang/de.json", load: () => Promise.resolve(locale_de) }],
  "it": [{ key: "../lang/it.json", load: () => Promise.resolve(locale_it) }],
  "fi": [{ key: "../lang/fi.json", load: () => Promise.resolve(locale_fi) }],
  "pl": [{ key: "../lang/pl.json", load: () => Promise.resolve(locale_pl) }],
}

export const additionalMessages = Object({"en":[],"de":[],"it":[],"fi":[],"pl":[],})

export const resolveNuxtI18nOptions = async (context) => {
  const nuxtI18nOptions = Object({})
  nuxtI18nOptions.experimental = Object({"jsTsFormatResource":false})
  nuxtI18nOptions.precompile = Object({"strictMessage":true,"escapeHtml":false})
 const vueI18nConfigLoader = async (context, loader) => {
            const config = await loader().then(r => r.default || r)
            return typeof config === 'object'
              ? config
              : typeof config === 'function'
                ? await config(context)
                : {}
          }
  nuxtI18nOptions.vueI18n = Object({})
  nuxtI18nOptions.locales = [Object({"code":"en","file":"en.json"}),Object({"code":"de","file":"de.json"}),Object({"code":"it","file":"it.json"}),Object({"code":"fi","file":"fi.json"}),Object({"code":"pl","file":"pl.json"})]
  nuxtI18nOptions.defaultLocale = "en"
  nuxtI18nOptions.defaultDirection = "ltr"
  nuxtI18nOptions.routesNameSeparator = "___"
  nuxtI18nOptions.trailingSlash = false
  nuxtI18nOptions.defaultLocaleRouteNameSuffix = "default"
  nuxtI18nOptions.strategy = "prefix_except_default"
  nuxtI18nOptions.lazy = false
  nuxtI18nOptions.langDir = "lang"
  nuxtI18nOptions.rootRedirect = null
  nuxtI18nOptions.detectBrowserLanguage = false
  nuxtI18nOptions.differentDomains = false
  nuxtI18nOptions.baseUrl = ""
  nuxtI18nOptions.dynamicRouteParams = false
  nuxtI18nOptions.customRoutes = "page"
  nuxtI18nOptions.pages = Object({})
  nuxtI18nOptions.skipSettingLocaleOnNavigate = false
  nuxtI18nOptions.types = "composition"
  nuxtI18nOptions.debug = false
  return nuxtI18nOptions
}

export const nuxtI18nOptionsDefault = Object({experimental: Object({"jsTsFormatResource":false}),precompile: Object({"strictMessage":true,"escapeHtml":false}),vueI18n: "",locales: [],defaultLocale: "",defaultDirection: "ltr",routesNameSeparator: "___",trailingSlash: false,defaultLocaleRouteNameSuffix: "default",strategy: "prefix_except_default",lazy: false,langDir: null,rootRedirect: null,detectBrowserLanguage: Object({"alwaysRedirect":false,"cookieCrossOrigin":false,"cookieDomain":null,"cookieKey":"i18n_redirected","cookieSecure":false,"fallbackLocale":"","redirectOn":"root","useCookie":true}),differentDomains: false,baseUrl: "",dynamicRouteParams: false,customRoutes: "page",pages: Object({}),skipSettingLocaleOnNavigate: false,types: "composition",debug: false})

export const nuxtI18nInternalOptions = Object({__normalizedLocales: [Object({"code":"en","file":"en.json"}),Object({"code":"de","file":"de.json"}),Object({"code":"it","file":"it.json"}),Object({"code":"fi","file":"fi.json"}),Object({"code":"pl","file":"pl.json"})]})
export const NUXT_I18N_MODULE_ID = "@nuxtjs/i18n"
export const NUXT_I18N_PRECOMPILE_ENDPOINT = "/__i18n__/precompile"
export const NUXT_I18N_PRECOMPILED_LOCALE_KEY = "i18n-locales"
export const isSSG = false
export const isSSR = true
