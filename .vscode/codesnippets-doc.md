# [Making VSCode Snippets][vscode-snippets-docs]

This info sourced from: [VSCode's docs][vscode-snippets-docs]

A useful bit of info is that VSCode Snippets are intended to be compatible with [textmate code snippets](https://macromates.com/textmate/manual/snippets)

## [Creating your own](https://code.visualstudio.com/docs/editor/userdefinedsnippets#_create-your-own-snippets)

### [File template snippets](https://code.visualstudio.com/docs/editor/userdefinedsnippets#_file-template-snippets)

You can add the `isFileTemplate` attribute to your snippet's definition if the snippet is intended to populate or replace a file's contents. File template snippets are displayed in a dropdown when you run the **Snippets: Populate File from Snippet** command in a new or existing file.

## [Snippet scope](https://code.visualstudio.com/docs/editor/userdefinedsnippets#_snippet-scope)

Snippets are scoped so that only relevant snippets are suggested. Snippets can be scoped by either:

1. the **language(s)** to which snippets are scoped (possibly all)
2. the **project(s)** to which snippets are scoped (probably all)

### [Language snippet scope](https://code.visualstudio.com/docs/editor/userdefinedsnippets#_language-snippet-scope)

Every snippet is scoped to one, several, or all ("global") languages based on whether it is defined in:

1. a **language** snippet file
2. a **global** snippet file

Single-language user-defined snippets are defined in a specific language's snippet file (for example `javascript.json`), which you can access by language identifier through **Snippets: Configure User Snippets**. A snippet is only accessible when editing the language for which it is defined.

Multi-language and global user-defined snippets are all defined in "global" snippet files (JSON with the file suffix `.code-snippets`), which is also accessible through **Snippets: Configure User Snippets**. In a global snippets file, a snippet definition may have an additional `scope` property that takes one or more [language identifiers](https://code.visualstudio.com/docs/languages/identifiers), which makes the snippet available only for those specified languages. If no `scope`property is given, then the global snippet is available in **all** languages.

Most user-defined snippets are scoped to a single language, and so are defined in a language-specific snippet file.

### [Project snippet scope](https://code.visualstudio.com/docs/editor/userdefinedsnippets#_project-snippet-scope)

You can also have a global snippets file (JSON with file suffix `.code-snippets`) scoped to your project. Project-folder snippets are created with the **New Snippets file for ''...** option in the **Snippets: Configure User Snippets** dropdown menu and are located at the root of the project in a `.vscode` folder. Project snippet files are useful for sharing snippets with all users working in that project. Project-folder snippets are similar to global snippets and can be scoped to specific languages through the `scope` property.


## [Snippet syntax](https://code.visualstudio.com/docs/editor/userdefinedsnippets#_snippet-syntax)

The `body` of a snippet can use special constructs to control cursors and the text being inserted. The following are supported features and their syntaxes:

### [Tabstops](https://code.visualstudio.com/docs/editor/userdefinedsnippets#_tabstops)

With tabstops, you can make the editor cursor move inside a snippet. Use `$1`, `$2` to specify cursor locations. The number is the order in which tabstops will be visited, whereas `$0` denotes the final cursor position. Multiple occurrences of the same tabstop are linked and updated in sync.

### [Placeholders](https://code.visualstudio.com/docs/editor/userdefinedsnippets#_placeholders)

Placeholders are tabstops with values, like `${1:foo}`. The placeholder text will be inserted and selected such that it can be easily changed.  
Placeholders can be nested, like `${1:another ${2:placeholder}}`.

### [Choice](https://code.visualstudio.com/docs/editor/userdefinedsnippets#_choice)

Placeholders can have choices as values. The syntax is a comma-separated enumeration of values, enclosed with the pipe-character, for example `${1|one,two,three|}`. When the snippet is inserted and the placeholder selected, choices will prompt the user to pick one of the values.

### [Variables](https://code.visualstudio.com/docs/editor/userdefinedsnippets#_variables)

With `$name` or `${name:default}`, you can insert the value of a variable. When a variable isn't set, its **default** or the empty string is inserted. When a variable is unknown (that is, its name isn't defined) the name of the variable is inserted and it is transformed into a placeholder.

The following variables can be used:

`TM_SELECTED_TEXT`
: The currently selected text or the empty string

`TM_CURRENT_LINE`
: The contents of the current line

`TM_CURRENT_WORD`
: The contents of the word under cursor or the empty string

`TM_LINE_INDEX`
: The zero-index based line number

`TM_LINE_NUMBER`
: The one-index based line number

`TM_FILENAME`
: The filename of the current document

`TM_FILENAME_BASE`
: The filename of the current document without its extensions

`TM_DIRECTORY`
: The directory of the current document

`TM_FILEPATH`
: The full file path of the current document

`RELATIVE_FILEPATH`
: The relative (to the opened workspace or folder) file path of the current document

`CLIPBOARD`
: The contents of your clipboard

`WORKSPACE_NAME`
: The name of the opened workspace or folder

`WORKSPACE_FOLDER`
: The path of the opened workspace or folder

`CURSOR_INDEX`
: The zero-index based cursor number

`CURSOR_NUMBER`
: The one-index based cursor number

#### Inserting the current date and time:

`CURRENT_YEAR`
: The current year

`CURRENT_YEAR_SHORT`
: The current year's last two digits

`CURRENT_MONTH`
: The month as two digits (example '02')

`CURRENT_MONTH_NAME`
: The full name of the month (example 'July')

`CURRENT_MONTH_NAME_SHORT`
: The short name of the month (example 'Jul')

`CURRENT_DATE`
: The day of the month as two digits (example '08')

`CURRENT_DAY_NAME`
: The name of day (example 'Monday')

`CURRENT_DAY_NAME_SHORT`
: The short name of the day (example 'Mon')

`CURRENT_HOUR`
: The current hour in 24-hour clock format

`CURRENT_MINUTE`
: The current minute as two digits

`CURRENT_SECOND`
: The current second as two digits

`CURRENT_SECONDS_UNIX`
: The number of seconds since the Unix epoch

`CURRENT_TIMEZONE_OFFSET`
: The current UTC time zone offset as +HH:MM or -HH:MM (example -07:00).


#### Inserting random values:

RANDOM 6 random Base-10 digits
RANDOM_HEX 6 random Base-16 digits
UUID A Version 4 UUID
#### Inserting line or block comments, honoring the current language:

`BLOCK_COMMENT_START`
: Example output: in PHP `/*` or in HTML `<!--`

`BLOCK_COMMENT_END`
: Example output: in PHP `*/` or in HTML `-->`

`LINE_COMMENT`
: Example output: in PHP `//`


### [Variable transforms](https://code.visualstudio.com/docs/editor/userdefinedsnippets#_variable-transforms)

Transformations allow you to modify the value of a variable before it is inserted. The definition of a transformation consists of three parts:

1. A regular expression that is matched against the value of a variable, or the empty string when the variable cannot be resolved.
2. A "format string" that allows to reference matching groups from the regular expression. The format string allows for conditional inserts and simple modifications.
3. Options that are passed to the regular expression.

The following example inserts the name of the current file without its ending, so from `foo.txt` it makes `foo`.

```
${TM_FILENAME/(.*)\\..+$/$1/}
  |           |         |  |
  |           |         |  |-> no options
  |           |         |
  |           |         |-> references the contents of the first
  |           |             capture group
  |           |
  |           |-> regex to capture everything before
  |               the final `.suffix`
  |
  |-> resolves to the filename
```

### [Placeholder-Transform](https://code.visualstudio.com/docs/editor/userdefinedsnippets#_placeholdertransform)

Like a Variable-Transform, a transformation of a placeholder allows changing the inserted text for the placeholder when moving to the next tab stop. The inserted text is matched with the regular expression and the match or matches - depending on the options - are replaced with the specified replacement format text. Every occurrence of a placeholder can define its own transformation independently using the value of the first placeholder. The format for Placeholder-Transforms is the same as for Variable-Transforms.

### [Transform examples](https://code.visualstudio.com/docs/editor/userdefinedsnippets#_transform-examples)

The examples are shown within double quotes, as they would appear inside a snippet body, to illustrate the need to double escape certain characters. Sample transformations and the resulting output for the filename `example-123.456-TEST.js`.

|Example|Output|Explanation|
|---|---|---|
|`"${TM_FILENAME/[\\.]/_/}"`|`example-123_456-TEST.js`|Replace the first `.` with `_`|
|`"${TM_FILENAME/[\\.-]/_/g}"`|`example_123_456_TEST_js`|Replace each `.` or `-`with `_`|
|`"${TM_FILENAME/(.*)/${1:/upcase}/}"`|`EXAMPLE-123.456-TEST.JS`|Change to all uppercase|
|`"${TM_FILENAME/[^0-9^a-z]//gi}"`|`example123456TESTjs`|Remove non-alphanumeric characters|

### [Grammar](https://code.visualstudio.com/docs/editor/userdefinedsnippets#_grammar)

Below is the EBNF ([extended Backus-Naur form](https://en.wikipedia.org/wiki/Extended_Backus-Naur_form)) for snippets. With `\` (backslash), you can escape `$`, `}`, and `\`. Within choice elements, the backslash also escapes comma and pipe characters.

```
any         ::= tabstop | placeholder | choice | variable | text
tabstop     ::= '$' int
                | '${' int '}'
                | '${' int  transform '}'
placeholder ::= '${' int ':' any '}'
choice      ::= '${' int '|' text (',' text)* '|}'
variable    ::= '$' var | '${' var '}'
                | '${' var ':' any '}'
                | '${' var transform '}'
transform   ::= '/' regex '/' (format | text)+ '/' options
format      ::= '$' int | '${' int '}'
                | '${' int ':' '/upcase' | '/downcase' | '/capitalize' | '/camelcase' | '/pascalcase' '}'
                | '${' int ':+' if '}'
                | '${' int ':?' if ':' else '}'
                | '${' int ':-' else '}' | '${' int ':' else '}'
regex       ::= JavaScript Regular Expression value (ctor-string)
options     ::= JavaScript Regular Expression option (ctor-options)
var         ::= [_a-zA-Z] [_a-zA-Z0-9]*
int         ::= [0-9]+
text        ::= .*
if          ::= text
else        ::= text
```




[vscode-snippets-docs]: <https://code.visualstudio.com/docs/editor/userdefinedsnippets>

