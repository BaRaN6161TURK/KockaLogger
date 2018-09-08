# Contribution Guidelines
## Code contribution
1. Before opening a pull request, please contact KockaAdmiralac via email, Discord (`KockaAdmiralac#9306`) or issues in this repository (by creating an issue for your bug).
2. Make sure the contributed code follows code guidelines from `.eslintrc.json`. Try to make commited code have as little linter issues as possible.
3. If you're able to test the contributed code, please test it. Otherwise, note the code has not been tested in your pull request (unless it's a really minor change).

## Translation
To translate KockaLogger's logging module you would need to translate JSON files located in `formats/logger/i18n`. The English translation can be found in the `en.json` file. Template names (`{{something|...}}`) and variables (`$1`, `$2`...) should not be translated.

As some translation files have been transferred from WikiaActivityLogger, they require update for full translations in KockaLogger. Languages that require update are:
- Belarusian (`be`)
- German (`de`)
- Spanish (`es`)
- French (`fr`)
- Polish (`pl`)
- Brazillian Portuguese (`pt-br`)
- Russian (`ru`)
- Ukrainian (`uk`)

After translation updates, the patch version of KockaLogger needs to be increased by 1.
