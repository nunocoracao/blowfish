# -- Site Configuration --
# Refer to the theme docs for more details about each of these parameters.
# https://blowfish.page/docs/getting-started/

theme = "blowfish"
baseURL = "https://localhost:1313"
defaultContentLanguage = "en"
disableLanguages = [] #to allow translation work requiring shipping to production

# pluralizeListTitles = "true" # hugo function useful for non-english languages, find out more in  https://gohugo.io/getting-started/configuration/#pluralizelisttitles

enableRobotsTXT = true
summaryLength = 30
hasCJKLanguage = true

buildDrafts = false
buildFuture = false

enableEmoji = true

googleAnalytics = "G-PEDMYR1V0K"

[pagination]
  pagerSize = 102

[imaging]
  anchor = 'Center'

[taxonomies]
  tag = "tags"
  category = "categories"
  author = "authors"
  series = "series"

[sitemap]
  changefreq = 'always'
  filename = 'sitemap.xml'
  priority = 0.5

[outputs]
  home = ["HTML", "RSS", "JSON"]

[related]
  threshold = 0
  toLower = false

    [[related.indices]]
        name = "tags"
        weight = 100

    [[related.indices]]
        name = "categories"
        weight = 100

    [[related.indices]]
        name = "series"
        weight = 50

    [[related.indices]]
        name = "authors"
        weight = 20

    [[related.indices]]
        name = "date"
        weight = 10

    [[related.indices]]
      applyFilter = false
      name = 'fragmentrefs'
      type = 'fragments'
      weight = 10

# Render only specific parts of the site for faster development. 
# Note that there are more files are ignored in development/hugo.toml
#
# Usage: `hugo --renderSegments core` or `hugo --renderSegments core,en_only`
[segments]
  [segments.core]
    [[segments.core.includes]]
      # Debug core pages
      path = '{/,/docs,/docs/**,/samples,/samples/**}'
  [segments.en_only]
    [[segments.en_only.includes]]
      # Alternatively, you can use environment variable
      #   - UNIX: HUGO_DISABLELANGUAGES='it ja zh-cn' npm run example:core
      #   - Windows CMD: set "HUGO_DISABLELANGUAGES=it ja zh-cn" && npm run example:core
      #   - Windows PowerShell: $env:HUGO_DISABLELANGUAGES="it ja zh-cn"; npm run example:core
      lang = 'en'
