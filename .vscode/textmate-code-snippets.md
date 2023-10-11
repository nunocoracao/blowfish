# [Textmate Code Snippets](https://macromates.com/textmate/manual/snippets)


A snippet is a piece of text that you would like to insert in your document. It can include code to run at insertion time, variables (like selected text), tab stops/placeholders for missing information (which you can tab through after insertion) and perform transformations on the data which you enter in the placeholders.

Snippets are created in the bundle editor and are often assigned a tab trigger for easy insertion.

## Grammar

Snippets support the following constructs:

```
$«int»
${«int»}
${«int»:«any»}
${«int»/«regexp»/«format»/«options»}
${«int»|«choice 1»,…,«choice n»|}
`«code»`
«format»
```

In the above, `«format»` is a format string and `«any»` refers to any of the above.

The next sections will give examples of each of the above.

## Plain Text

In the simplest case, you can use snippets to insert text that you do not want to type again and again, either because you type it a lot, or because the actual text to insert is hard to remember (like your bank account details or the HTML entities for the Apple modifier keys).

If you use snippets to insert plain text there is only one thing you should be aware of: `$` and `` ` `` are reserved characters. So if you want to insert one of these, prefix it with an escape (i.e. `\$`). An escape not followed by one of these two characters (or followed by another escape) will be inserted as a literal character.

## Variables

You can use any of TextMate’s defined variables by prefixing the name of the variable with `$`. All the normal dynamic variables are supported, the most useful probably being `TM_SELECTED_TEXT`. If for example we want to create a snippet which wraps the selection in a LaTeX `\textbf` command, we can make a snippet which is:

```
\textbf{$TM_SELECTED_TEXT}
```

If no text is selected the variable will not be set, so nothing will be inserted in its place. We can provide a default value by using format string syntax: `${«variable»:«default value»}`. For example:

```
\textbf{${TM_SELECTED_TEXT:no text was selected}}
```

The default value can itself contain variables or shell code. If you want the default text to contain a `}`, you need to escape it. But all other characters are used verbatim.

Variables also support regular expression replacements using this syntax: `${«variable»/«regexp»/«format»/«options»}`. If the variable is not set the replacement will be performed on the empty string. For example, to prepend a bullet to each non-empty line in the selection (and insert that) we can do:

```
${TM_SELECTED_TEXT/^.+$/• $0/g}
```

## Interpolated Shell Code

You can use backticks to have shell code executed when the snippet is inserted. The result from running the code gets inserted into the snippet, though with the last newline in the result removed (if present). So for example to create a snippet that wraps the selection in an HTML link, where the URL of that link comes from the clipboard, we can do:

```
<a href="`pbpaste`">$TM_SELECTED_TEXT</a>
```

Since this is normal shell code, we can write a small program. For example we can let it verify that the clipboard contains only a single line of text like this:

```
<a href="`
    if [[ $(pbpaste|wc -l) -eq 0 ]]
        then pbpaste
        else echo http://example.com/
    fi
`">$TM_SELECTED_TEXT</a>
```

Inside shell code, the only character you need to escape is the backtick.

## Tab Stops

After insertion, the caret will be placed after the last character of the snippet. This is not always desirable and we can change that by using `$0` to mark where we want the caret to be. So if for example we make an HTML `div`-snippet and want the caret to end between the opening and closing tags, we could make it like this:

```
<div>
    $0
</div>
```

Often though we want to fill in text in several places in the snippet. Multiple tab stops can be provided by inserting `$1`-`$n`. The caret will start at `$1`, then when pressing tab it will move to `$2` and `$3` on next tab etc. until there are no more tab stops. If you do not explicitly set `$0`, the caret will be at the end of the snippet.

So we could for example change the above to:

```
<div$1>
    $0
</div>
```

This allows us to fill in an argument and then tab on to `$0`.

## Placeholders

Like variables, tab stops can also have default values (and are generally referred to as placeholders when they do). The syntax is the same: `${«tab stop»:«default value»}`. And the default value can contain both text, shell code and other placeholders. So we can refine the previous example further:

```
<div${1: id="${2:some_id}"}>
    $0
</div>
```

Inserting this snippet will insert a `div` tag with the `id` argument selected and we can then decide either to overtype the argument (i.e. delete it) and press tab again to reach `$0`, or we can press tab immediately to get to the second tab stop (the value part of the argument) and edit that.

When you edit the placeholder text, any embedded tab stops will be removed.

## Mirrors

There are times when you need to provide the same value several places in the inserted text and in these situations you can re-use the tab stop to signal that you want it mirrored at that location. So for example to create a LaTeX environment with a snippet, we can use:

```
\begin{${1:enumerate}}
    $0
\end{$1}
```

After inserting this snippet, `enumerate` will be selected and if we edit it, the changes will be reflected in the `\end` part as well.

## Transformations

There are situations where we want our placeholder text mirrored but with slight changes or where we want some text to appear depending on the value/presence of a placeholder.

We can accomplish this by doing a regular expression substitution on the placeholder text (when mirroring it). The syntax for this is: `${«tab stop»/«regexp»/«format»/«options»}`.

As an example, the Objective-C getter/setter methods (prior to the `@property` keyword) often look like this (in the [thread-unsafe form](http://ticket.macromates.com/show?ticket_id=E11D9EAF)):

```
- (id)foo
{
    return foo;
}

- (void)setFoo:(id)aValue
{
    [foo autorelease];
    foo = [aValue retain];
}
```

In the format string we can use `${«var»:/upcase}` to uppercase the matched character, so a snippet that only asks for the name of the instance variable once could look like this:

```
- (${1:id})${2:foo}
{
    return $2;
}

- (void)set${2/./${0:/upcase}/}:($1)aValue
{
    [$2 autorelease];
    $2 = [aValue retain];
}
```

We can also use conditional insertions in the format string (`${«var»:+«if-set»}`) to make decisions. For example if we create a snippet for a method we can let the return type decide whether or not the method should include a `return` statement like this:

```
- (${1:void})${2:methodName}
{${1/void$|(.+)/${1:+\n\treturn nil;}/}
}
```

Here we match placeholder 1 against `void` or anything (`.+`) and put the latter match in capture register 1. Then only if we did match something (other than `void`) will we insert a newline, tab and the `return nil;` text.

## Multiple Choices

Sometimes a placeholder can only take a limited number of values in which case we may want to show a menu with these choices.

This can be done with the `${«int»|«choice 1»,…,«choice n»|}` syntax.

For example:

```
color: ${1|red,green,blue|}
```

 [Text Editing](https://macromates.com/textmate/manual/text-editing)

 [Table of Contents](https://macromates.com/textmate/manual/)

[Commands](https://macromates.com/textmate/manual/commands) 