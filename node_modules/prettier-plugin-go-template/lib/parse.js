"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isUnformattable = exports.isRoot = exports.isMultiBlock = exports.isBlock = exports.isInline = exports.parseGoTemplate = void 0;
const create_id_generator_1 = require("./create-id-generator");
const parseGoTemplate = (text, parsers, options) => {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j;
    const regex = /{{(?<startdelimiter>-|<|%|\/\*)?\s*(?<statement>(?<keyword>if|range|block|with|define|end|else|prettier-ignore-start|prettier-ignore-end)?[\s\S]*?)\s*(?<endDelimiter>-|>|%|\*\/)?}}|(?<unformattableScript><(script)((?!<)[\s\S])*>((?!<\/script)[\s\S])*?{{[\s\S]*?<\/(script)>)|(?<unformattableStyle><(style)((?!<)[\s\S])*>((?!<\/style)[\s\S])*?{{[\s\S]*?<\/(style)>)/g;
    const root = {
        type: "root",
        content: text,
        aliasedContent: "",
        children: {},
        index: 0,
        contentStart: 0,
        length: text.length,
    };
    const nodeStack = [root];
    const getId = (0, create_id_generator_1.createIdGenerator)();
    for (let match of text.matchAll(regex)) {
        const current = last(nodeStack);
        const keyword = (_a = match.groups) === null || _a === void 0 ? void 0 : _a.keyword;
        const statement = (_b = match.groups) === null || _b === void 0 ? void 0 : _b.statement;
        const unformattable = (_d = (_c = match.groups) === null || _c === void 0 ? void 0 : _c.unformattableScript) !== null && _d !== void 0 ? _d : (_e = match.groups) === null || _e === void 0 ? void 0 : _e.unformattableStyle;
        const startDelimiter = ((_g = (_f = match.groups) === null || _f === void 0 ? void 0 : _f.startdelimiter) !== null && _g !== void 0 ? _g : "");
        const endDelimiter = ((_j = (_h = match.groups) === null || _h === void 0 ? void 0 : _h.endDelimiter) !== null && _j !== void 0 ? _j : "");
        if (current === undefined) {
            throw Error("Node stack empty.");
        }
        if (match.index === undefined) {
            throw Error("Regex match index undefined.");
        }
        const id = getId();
        if (unformattable) {
            current.children[id] = {
                id,
                type: "unformattable",
                index: match.index,
                length: match[0].length,
                content: unformattable,
                parent: current,
            };
            continue;
        }
        if (statement === undefined) {
            throw Error("Formattable match without statement.");
        }
        const inline = {
            index: match.index,
            length: match[0].length,
            startDelimiter,
            endDelimiter,
            parent: current,
            type: "inline",
            statement,
            id,
        };
        if (keyword === "end" || keyword === "prettier-ignore-end") {
            if (current.type !== "block") {
                throw Error("Encountered unexpected end keyword.");
            }
            current.length = match[0].length + match.index - current.index;
            current.content = text.substring(current.contentStart, match.index);
            current.aliasedContent = aliasNodeContent(current);
            current.end = inline;
            if (current.parent.type === "double-block") {
                const firstChild = current.parent.blocks[0];
                const lastChild = current.parent.blocks[current.parent.blocks.length - 1];
                current.parent.length =
                    lastChild.index + lastChild.length - firstChild.index;
            }
            nodeStack.pop();
        }
        else if (isBlock(current) && keyword === "else") {
            const nextChild = {
                type: "block",
                start: inline,
                end: null,
                children: {},
                keyword: keyword,
                index: match.index,
                parent: current.parent,
                contentStart: match.index + match[0].length,
                content: "",
                aliasedContent: "",
                length: -1,
                id: getId(),
                startDelimiter,
                endDelimiter,
            };
            if (isMultiBlock(current.parent)) {
                current.parent.blocks.push(nextChild);
            }
            else {
                const multiBlock = {
                    type: "double-block",
                    parent: current.parent,
                    index: current.index,
                    length: -1,
                    keyword,
                    id: current.id,
                    blocks: [current, nextChild],
                };
                nextChild.parent = multiBlock;
                current.parent = multiBlock;
                if ("children" in multiBlock.parent) {
                    multiBlock.parent.children[multiBlock.id] = multiBlock;
                }
                else {
                    throw Error("Could not find child in parent.");
                }
            }
            current.id = getId();
            current.length = match[0].length + match.index - current.index;
            current.content = text.substring(current.contentStart, match.index);
            current.aliasedContent = aliasNodeContent(current);
            nodeStack.pop();
            nodeStack.push(nextChild);
        }
        else if (keyword) {
            const block = {
                type: "block",
                start: inline,
                end: null,
                children: {},
                keyword: keyword,
                index: match.index,
                parent: current,
                contentStart: match.index + match[0].length,
                content: "",
                aliasedContent: "",
                length: -1,
                id: getId(),
                startDelimiter,
                endDelimiter,
            };
            current.children[block.id] = block;
            nodeStack.push(block);
        }
        else {
            current.children[inline.id] = inline;
        }
    }
    if (!isRoot(nodeStack.pop())) {
        throw Error("Missing end block.");
    }
    root.aliasedContent = aliasNodeContent(root);
    return root;
};
exports.parseGoTemplate = parseGoTemplate;
function aliasNodeContent(current) {
    let result = current.content;
    Object.entries(current.children)
        .sort(([_, node1], [__, node2]) => node2.index - node1.index)
        .forEach(([id, node]) => (result =
        result.substring(0, node.index - current.contentStart) +
            id +
            result.substring(node.index + node.length - current.contentStart)));
    return result;
}
function last(array) {
    return array[array.length - 1];
}
function isInline(node) {
    return node.type === "inline";
}
exports.isInline = isInline;
function isBlock(node) {
    return node.type === "block";
}
exports.isBlock = isBlock;
function isMultiBlock(node) {
    return node.type === "double-block";
}
exports.isMultiBlock = isMultiBlock;
function isRoot(node) {
    return node.type === "root";
}
exports.isRoot = isRoot;
function isUnformattable(node) {
    return node.type === "unformattable";
}
exports.isUnformattable = isUnformattable;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFyc2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvcGFyc2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQ0EsK0RBQTBEO0FBRW5ELE1BQU0sZUFBZSxHQUE0QixDQUN0RCxJQUFJLEVBQ0osT0FBTyxFQUNQLE9BQU8sRUFDUCxFQUFFOztJQUNGLE1BQU0sS0FBSyxHQUNULCtXQUErVyxDQUFDO0lBQ2xYLE1BQU0sSUFBSSxHQUFXO1FBQ25CLElBQUksRUFBRSxNQUFNO1FBQ1osT0FBTyxFQUFFLElBQUk7UUFDYixjQUFjLEVBQUUsRUFBRTtRQUNsQixRQUFRLEVBQUUsRUFBRTtRQUNaLEtBQUssRUFBRSxDQUFDO1FBQ1IsWUFBWSxFQUFFLENBQUM7UUFDZixNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU07S0FDcEIsQ0FBQztJQUNGLE1BQU0sU0FBUyxHQUF5QixDQUFDLElBQUksQ0FBQyxDQUFDO0lBQy9DLE1BQU0sS0FBSyxHQUFHLElBQUEsdUNBQWlCLEdBQUUsQ0FBQztJQUVsQyxLQUFLLElBQUksS0FBSyxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLEVBQUU7UUFDdEMsTUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ2hDLE1BQU0sT0FBTyxHQUFHLE1BQUEsS0FBSyxDQUFDLE1BQU0sMENBQUUsT0FBcUMsQ0FBQztRQUNwRSxNQUFNLFNBQVMsR0FBRyxNQUFBLEtBQUssQ0FBQyxNQUFNLDBDQUFFLFNBQVMsQ0FBQztRQUMxQyxNQUFNLGFBQWEsR0FDakIsTUFBQSxNQUFBLEtBQUssQ0FBQyxNQUFNLDBDQUFFLG1CQUFtQixtQ0FBSSxNQUFBLEtBQUssQ0FBQyxNQUFNLDBDQUFFLGtCQUFrQixDQUFDO1FBRXhFLE1BQU0sY0FBYyxHQUFHLENBQUMsTUFBQSxNQUFBLEtBQUssQ0FBQyxNQUFNLDBDQUFFLGNBQWMsbUNBQ2xELEVBQUUsQ0FBMkIsQ0FBQztRQUNoQyxNQUFN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QyxPQUFPLElBQUksQ0FBQyxJQUFJLEtBQUssT0FBTyxDQUFDO0FBQy9CLENBQUM7QUFGRCwwQkFFQztBQUVELFNBQWdCLFlBQVksQ0FBQyxJQUFZO0lBQ3ZDLE9BQU8sSUFBSSxDQUFDLElBQUksS0FBSyxjQUFjLENBQUM7QUFDdEMsQ0FBQztBQUZELG9DQUVDO0FBRUQsU0FBZ0IsTUFBTSxDQUFDLElBQVk7SUFDakMsT0FBTyxJQUFJLENBQUMsSUFBSSxLQUFLLE1BQU0sQ0FBQztBQUM5QixDQUFDO0FBRkQsd0JBRUM7QUFFRCxTQUFnQixlQUFlLENBQUMsSUFBWTtJQUMxQyxPQUFPLElBQUksQ0FBQyxJQUFJLEtBQUssZUFBZSxDQUFDO0FBQ3ZDLENBQUM7QUFGRCwwQ0FFQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBhcnNlciB9IGZyb20gXCJwcmV0dGllclwiO1xuaW1wb3J0IHsgY3JlYXRlSWRHZW5lcmF0b3IgfSBmcm9tIFwiLi9jcmVhdGUtaWQtZ2VuZXJhdG9yXCI7XG5cbmV4cG9ydCBjb25zdCBwYXJzZUdvVGVtcGxhdGU6IFBhcnNlcjxHb05vZGU+W1wicGFyc2VcIl0gPSAoXG4gIHRleHQsXG4gIHBhcnNlcnMsXG4gIG9wdGlvbnNcbikgPT4ge1xuICBjb25zdCByZWdleCA9XG4gICAgL3t7KD88c3RhcnRkZWxpbWl0ZXI+LXw8fCV8XFwvXFwqKT9cXHMqKD88c3RhdGVtZW50Pig/PGtleXdvcmQ+aWZ8cmFuZ2V8YmxvY2t8d2l0aHxkZWZpbmV8ZW5kfGVsc2V8cHJldHRpZXItaWdub3JlLXN0YXJ0fHByZXR0aWVyLWlnbm9yZS1lbmQpP1tcXHNcXFNdKj8pXFxzKig/PGVuZERlbGltaXRlcj4tfD58JXxcXCpcXC8pP319fCg/PHVuZm9ybWF0dGFibGVTY3JpcHQ+PChzY3JpcHQpKCg/ITwpW1xcc1xcU10pKj4oKD8hPFxcL3NjcmlwdClbXFxzXFxTXSkqP3t7W1xcc1xcU10qPzxcXC8oc2NyaXB0KT4pfCg/PHVuZm9ybWF0dGFibGVTdHlsZT48KHN0eWxlKSgoPyE8KVtcXHNcXFNdKSo+KCg/ITxcXC9zdHlsZSlbXFxzXFxTXSkqP3t7W1xcc1xcU10qPzxcXC8oc3R5bGUpPikvZztcbiAgY29uc3Qgcm9vdDogR29Sb290ID0ge1xuICAgIHR5cGU6IFwicm9vdFwiLFxuICAgIGNvbnRlbnQ6IHRleHQsXG4gICAgYWxpYXNlZENvbnRlbnQ6IFwiXCIsXG4gICAgY2hpbGRyZW46IHt9LFxuICAgIGluZGV4OiAwLFxuICAgIGNvbnRlbnRTdGFydDogMCxcbiAgICBsZW5ndGg6IHRleHQubGVuZ3RoLFxuICB9O1xuICBjb25zdCBub2RlU3RhY2s6IChHb0Jsb2NrIHwgR29Sb290KVtdID0gW3Jvb3RdO1xuICBjb25zdCBnZXRJZCA9IGNyZWF0ZUlkR2VuZXJhdG9yKCk7XG5cbiAgZm9yIChsZXQgbWF0Y2ggb2YgdGV4dC5tYXRjaEFsbChyZWdleCkpIHtcbiAgICBjb25zdCBjdXJyZW50ID0gbGFzdChub2RlU3RhY2spO1xuICAgIGNvbnN0IGtleXdvcmQgPSBtYXRjaC5ncm91cHM/LmtleXdvcmQgYXMgR29CbG9ja0tleXdvcmQgfCB1bmRlZmluZWQ7XG4gICAgY29uc3Qgc3RhdGVtZW50ID0gbWF0Y2guZ3JvdXBzPy5zdGF0ZW1lbnQ7XG4gICAgY29uc3QgdW5mb3JtYXR0YWJsZSA9XG4gICAgICBtYXRjaC5ncm91cHM/LnVuZm9ybWF0dGFibGVTY3JpcHQgPz8gbWF0Y2guZ3JvdXBzPy51bmZvcm1hdHRhYmxlU3R5bGU7XG5cbiAgICBjb25zdCBzdGFydERlbGltaXRlciA9IChtYXRjaC5ncm91cHM/LnN0YXJ0ZGVsaW1pdGVyID8/XG4gICAgICBcIlwiKSBhcyBHb0lubGluZVN0YXJ0RGVsaW1pdGVyO1xuICAgIGNvbnN0IGVuZERlbGltaXRlciA9IChtYXRjaC5ncm91cHM/LmVuZERlbGltaXRlciA/P1xuICAgICAgXCJcIikgYXMgR29JbmxpbmVFbmREZWxpbWl0ZXI7XG5cbiAgICBpZiAoY3VycmVudCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aHJvdyBFcnJvcihcIk5vZGUgc3RhY2sgZW1wdHkuXCIpO1xuICAgIH1cblxuICAgIGlmIChtYXRjaC5pbmRleCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aHJvdyBFcnJvcihcIlJlZ2V4IG1hdGNoIGluZGV4IHVuZGVmaW5lZC5cIik7XG4gICAgfVxuICAgIGNvbnN0IGlkID0gZ2V0SWQoKTtcbiAgICBpZiAodW5mb3JtYXR0YWJsZSkge1xuICAgICAgY3VycmVudC5jaGlsZHJlbltpZF0gPSB7XG4gICAgICAgIGlkLFxuICAgICAgICB0eXBlOiBcInVuZm9ybWF0dGFibGVcIixcbiAgICAgICAgaW5kZXg6IG1hdGNoLmluZGV4LFxuICAgICAgICBsZW5ndGg6IG1hdGNoWzBdLmxlbmd0aCxcbiAgICAgICAgY29udGVudDogdW5mb3JtYXR0YWJsZSxcbiAgICAgICAgcGFyZW50OiBjdXJyZW50LFxuICAgICAgfTtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIGlmIChzdGF0ZW1lbnQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhyb3cgRXJyb3IoXCJGb3JtYXR0YWJsZSBtYXRjaCB3aXRob3V0IHN0YXRlbWVudC5cIik7XG4gICAgfVxuXG4gICAgY29uc3QgaW5saW5lOiBHb0lubGluZSA9IHtcbiAgICAgIGluZGV4OiBtYXRjaC5pbmRleCxcbiAgICAgIGxlbmd0aDogbWF0Y2hbMF0ubGVuZ3RoLFxuICAgICAgc3RhcnREZWxpbWl0ZXIsXG4gICAgICBlbmREZWxpbWl0ZXIsXG4gICAgICBwYXJlbnQ6IGN1cnJlbnQhLFxuICAgICAgdHlwZTogXCJpbmxpbmVcIixcbiAgICAgIHN0YXRlbWVudCxcbiAgICAgIGlkLFxuICAgIH07XG5cbiAgICBpZiAoa2V5d29yZCA9PT0gXCJlbmRcIiB8fCBrZXl3b3JkID09PSBcInByZXR0aWVyLWlnbm9yZS1lbmRcIikge1xuICAgICAgaWYgKGN1cnJlbnQudHlwZSAhPT0gXCJibG9ja1wiKSB7XG4gICAgICAgIHRocm93IEVycm9yKFwiRW5jb3VudGVyZWQgdW5leHBlY3RlZCBlbmQga2V5d29yZC5cIik7XG4gICAgICB9XG5cbiAgICAgIGN1cnJlbnQubGVuZ3RoID0gbWF0Y2hbMF0ubGVuZ3RoICsgbWF0Y2guaW5kZXggLSBjdXJyZW50LmluZGV4O1xuICAgICAgY3VycmVudC5jb250ZW50ID0gdGV4dC5zdWJzdHJpbmcoY3VycmVudC5jb250ZW50U3RhcnQsIG1hdGNoLmluZGV4KTtcbiAgICAgIGN1cnJlbnQuYWxpYXNlZENvbnRlbnQgPSBhbGlhc05vZGVDb250ZW50KGN1cnJlbnQpO1xuICAgICAgY3VycmVudC5lbmQgPSBpbmxpbmU7XG5cbiAgICAgIGlmIChjdXJyZW50LnBhcmVudC50eXBlID09PSBcImRvdWJsZS1ibG9ja1wiKSB7XG4gICAgICAgIGNvbnN0IGZpcnN0Q2hpbGQgPSBjdXJyZW50LnBhcmVudC5ibG9ja3NbMF07XG4gICAgICAgIGNvbnN0IGxhc3RDaGlsZCA9XG4gICAgICAgICAgY3VycmVudC5wYXJlbnQuYmxvY2tzW2N1cnJlbnQucGFyZW50LmJsb2Nrcy5sZW5ndGggLSAxXTtcblxuICAgICAgICBjdXJyZW50LnBhcmVudC5sZW5ndGggPVxuICAgICAgICAgIGxhc3RDaGlsZC5pbmRleCArIGxhc3RDaGlsZC5sZW5ndGggLSBmaXJzdENoaWxkLmluZGV4O1xuICAgICAgfVxuXG4gICAgICBub2RlU3RhY2sucG9wKCk7XG4gICAgfSBlbHNlIGlmIChpc0Jsb2NrKGN1cnJlbnQpICYmIGtleXdvcmQgPT09IFwiZWxzZVwiKSB7XG4gICAgICBjb25zdCBuZXh0Q2hpbGQ6IEdvQmxvY2sgPSB7XG4gICAgICAgIHR5cGU6IFwiYmxvY2tcIixcbiAgICAgICAgc3RhcnQ6IGlubGluZSxcbiAgICAgICAgZW5kOiBudWxsLFxuICAgICAgICBjaGlsZHJlbjoge30sXG4gICAgICAgIGtleXdvcmQ6IGtleXdvcmQsXG4gICAgICAgIGluZGV4OiBtYXRjaC5pbmRleCxcbiAgICAgICAgcGFyZW50OiBjdXJyZW50LnBhcmVudCxcbiAgICAgICAgY29udGVudFN0YXJ0OiBtYXRjaC5pbmRleCArIG1hdGNoWzBdLmxlbmd0aCxcbiAgICAgICAgY29udGVudDogXCJcIixcbiAgICAgICAgYWxpYXNlZENvbnRlbnQ6IFwiXCIsXG4gICAgICAgIGxlbmd0aDogLTEsXG4gICAgICAgIGlkOiBnZXRJZCgpLFxuICAgICAgICBzdGFydERlbGltaXRlcixcbiAgICAgICAgZW5kRGVsaW1pdGVyLFxuICAgICAgfTtcblxuICAgICAgaWYgKGlzTXVsdGlCbG9jayhjdXJyZW50LnBhcmVudCkpIHtcbiAgICAgICAgY3VycmVudC5wYXJlbnQuYmxvY2tzLnB1c2gobmV4dENoaWxkKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IG11bHRpQmxvY2s6IEdvTXVsdGlCbG9jayA9IHtcbiAgICAgICAgICB0eXBlOiBcImRvdWJsZS1ibG9ja1wiLFxuICAgICAgICAgIHBhcmVudDogY3VycmVudC5wYXJlbnQsXG4gICAgICAgICAgaW5kZXg6IGN1cnJlbnQuaW5kZXgsXG4gICAgICAgICAgbGVuZ3RoOiAtMSxcbiAgICAgICAgICBrZXl3b3JkLFxuICAgICAgICAgIGlkOiBjdXJyZW50LmlkLFxuICAgICAgICAgIGJsb2NrczogW2N1cnJlbnQsIG5leHRDaGlsZF0sXG4gICAgICAgIH07XG4gICAgICAgIG5leHRDaGlsZC5wYXJlbnQgPSBtdWx0aUJsb2NrO1xuICAgICAgICBjdXJyZW50LnBhcmVudCA9IG11bHRpQmxvY2s7XG5cbiAgICAgICAgaWYgKFwiY2hpbGRyZW5cIiBpbiBtdWx0aUJsb2NrLnBhcmVudCkge1xuICAgICAgICAgIG11bHRpQmxvY2sucGFyZW50LmNoaWxkcmVuW211bHRpQmxvY2suaWRdID0gbXVsdGlCbG9jaztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aHJvdyBFcnJvcihcIkNvdWxkIG5vdCBmaW5kIGNoaWxkIGluIHBhcmVudC5cIik7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgY3VycmVudC5pZCA9IGdldElkKCk7XG4gICAgICBjdXJyZW50Lmxlbmd0aCA9IG1hdGNoWzBdLmxlbmd0aCArIG1hdGNoLmluZGV4IC0gY3VycmVudC5pbmRleDtcbiAgICAgIGN1cnJlbnQuY29udGVudCA9IHRleHQuc3Vic3RyaW5nKGN1cnJlbnQuY29udGVudFN0YXJ0LCBtYXRjaC5pbmRleCk7XG4gICAgICBjdXJyZW50LmFsaWFzZWRDb250ZW50ID0gYWxpYXNOb2RlQ29udGVudChjdXJyZW50KTtcblxuICAgICAgbm9kZVN0YWNrLnBvcCgpO1xuICAgICAgbm9kZVN0YWNrLnB1c2gobmV4dENoaWxkKTtcbiAgICB9IGVsc2UgaWYgKGtleXdvcmQpIHtcbiAgICAgIGNvbnN0IGJsb2NrOiBHb0Jsb2NrID0ge1xuICAgICAgICB0eXBlOiBcImJsb2NrXCIsXG4gICAgICAgIHN0YXJ0OiBpbmxpbmUsXG4gICAgICAgIGVuZDogbnVsbCxcbiAgICAgICAgY2hpbGRyZW46IHt9LFxuICAgICAgICBrZXl3b3JkOiBrZXl3b3JkIGFzIEdvQmxvY2tLZXl3b3JkLFxuICAgICAgICBpbmRleDogbWF0Y2guaW5kZXgsXG4gICAgICAgIHBhcmVudDogY3VycmVudCxcbiAgICAgICAgY29udGVudFN0YXJ0OiBtYXRjaC5pbmRleCArIG1hdGNoWzBdLmxlbmd0aCxcbiAgICAgICAgY29udGVudDogXCJcIixcbiAgICAgICAgYWxpYXNlZENvbnRlbnQ6IFwiXCIsXG4gICAgICAgIGxlbmd0aDogLTEsXG4gICAgICAgIGlkOiBnZXRJZCgpLFxuICAgICAgICBzdGFydERlbGltaXRlcixcbiAgICAgICAgZW5kRGVsaW1pdGVyLFxuICAgICAgfTtcblxuICAgICAgY3VycmVudC5jaGlsZHJlbltibG9jay5pZF0gPSBibG9jaztcbiAgICAgIG5vZGVTdGFjay5wdXNoKGJsb2NrKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY3VycmVudC5jaGlsZHJlbltpbmxpbmUuaWRdID0gaW5saW5lO1xuICAgIH1cbiAgfVxuXG4gIGlmICghaXNSb290KG5vZGVTdGFjay5wb3AoKSEpKSB7XG4gICAgdGhyb3cgRXJyb3IoXCJNaXNzaW5nIGVuZCBibG9jay5cIik7XG4gIH1cblxuICByb290LmFsaWFzZWRDb250ZW50ID0gYWxpYXNOb2RlQ29udGVudChyb290KTtcblxuICByZXR1cm4gcm9vdDtcbn07XG5cbmZ1bmN0aW9uIGFsaWFzTm9kZUNvbnRlbnQoY3VycmVudDogR29CbG9jayB8IEdvUm9vdCk6IHN0cmluZyB7XG4gIGxldCByZXN1bHQgPSBjdXJyZW50LmNvbnRlbnQ7XG5cbiAgT2JqZWN0LmVudHJpZXMoY3VycmVudC5jaGlsZHJlbilcbiAgICAuc29ydCgoW18sIG5vZGUxXSwgW19fLCBub2RlMl0pID0+IG5vZGUyLmluZGV4IC0gbm9kZTEuaW5kZXgpXG4gICAgLmZvckVhY2goXG4gICAgICAoW2lkLCBub2RlXSkgPT5cbiAgICAgICAgKHJlc3VsdCA9XG4gICAgICAgICAgcmVzdWx0LnN1YnN0cmluZygwLCBub2RlLmluZGV4IC0gY3VycmVudC5jb250ZW50U3RhcnQpICtcbiAgICAgICAgICBpZCArXG4gICAgICAgICAgcmVzdWx0LnN1YnN0cmluZyhub2RlLmluZGV4ICsgbm9kZS5sZW5ndGggLSBjdXJyZW50LmNvbnRlbnRTdGFydCkpXG4gICAgKTtcblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBsYXN0PFQ+KGFycmF5OiBUW10pOiBUIHwgdW5kZWZpbmVkIHtcbiAgcmV0dXJuIGFycmF5W2FycmF5Lmxlbmd0aCAtIDFdO1xufVxuXG5leHBvcnQgdHlwZSBHb05vZGUgPVxuICB8IEdvUm9vdFxuICB8IEdvQmxvY2tcbiAgfCBHb0lubGluZVxuICB8IEdvTXVsdGlCbG9ja1xuICB8IEdvVW5mb3JtYXR0YWJsZTtcblxuZXhwb3J0IHR5cGUgR29CbG9ja0tleXdvcmQgPVxuICB8IFwiaWZcIlxuICB8IFwicmFuZ2VcIlxuICB8IFwiYmxvY2tcIlxuICB8IFwid2l0aFwiXG4gIHwgXCJkZWZpbmVcIlxuICB8IFwiZWxzZVwiXG4gIHwgXCJwcmV0dGllci1pZ25vcmUtc3RhcnRcIlxuICB8IFwicHJldHRpZXItaWdub3JlLWVuZFwiXG4gIHwgXCJlbmRcIjtcblxuZXhwb3J0IHR5cGUgR29Sb290ID0geyB0eXBlOiBcInJvb3RcIiB9ICYgT21pdDxcbiAgR29CbG9jayxcbiAgfCBcInR5cGVcIlxuICB8IFwia2V5d29yZFwiXG4gIHwgXCJwYXJlbnRcIlxuICB8IFwic3RhdGVtZW50XCJcbiAgfCBcImlkXCJcbiAgfCBcInN0YXJ0RGVsaW1pdGVyXCJcbiAgfCBcImVuZERlbGltaXRlclwiXG4gIHwgXCJzdGFydFwiXG4gIHwgXCJlbmRcIlxuPjtcblxuZXhwb3J0IGludGVyZmFjZSBHb0Jhc2VOb2RlPFR5cGUgZXh0ZW5kcyBzdHJpbmc+IHtcbiAgaWQ6IHN0cmluZztcbiAgdHlwZTogVHlwZTtcbiAgaW5kZXg6IG51bWJlcjtcbiAgbGVuZ3RoOiBudW1iZXI7XG4gIHBhcmVudDogR29CbG9jayB8IEdvUm9vdCB8IEdvTXVsdGlCbG9jaztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBHb0Jsb2NrIGV4dGVuZHMgR29CYXNlTm9kZTxcImJsb2NrXCI+LCBXaXRoRGVsaW1pdGVyIHtcbiAga2V5d29yZDogR29CbG9ja0tleXdvcmQ7XG4gIGNoaWxkcmVuOiB7XG4gICAgW2lkOiBzdHJpbmddOiBHb05vZGU7XG4gIH07XG4gIHN0YXJ0OiBHb0lubGluZTtcbiAgZW5kOiBHb0lubGluZSB8IG51bGw7XG4gIGNvbnRlbnQ6IHN0cmluZztcbiAgYWxpYXNlZENvbnRlbnQ6IHN0cmluZztcbiAgY29udGVudFN0YXJ0OiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgR29NdWx0aUJsb2NrIGV4dGVuZHMgR29CYXNlTm9kZTxcImRvdWJsZS1ibG9ja1wiPiB7XG4gIGJsb2NrczogKEdvQmxvY2sgfCBHb011bHRpQmxvY2spW107XG4gIGtleXdvcmQ6IEdvQmxvY2tLZXl3b3JkO1xufVxuXG5leHBvcnQgdHlwZSBHb1NoYXJlZERlbGltaXRlciA9IFwiJVwiIHwgXCItXCIgfCBcIlwiO1xuZXhwb3J0IHR5cGUgR29JbmxpbmVTdGFydERlbGltaXRlciA9IFwiPFwiIHwgXCIvKlwiIHwgR29TaGFyZWREZWxpbWl0ZXI7XG5leHBvcnQgdHlwZSBHb0lubGluZUVuZERlbGltaXRlciA9IFwiPlwiIHwgXCIqL1wiIHwgR29TaGFyZWREZWxpbWl0ZXI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgR29VbmZvcm1hdHRhYmxlIGV4dGVuZHMgR29CYXNlTm9kZTxcInVuZm9ybWF0dGFibGVcIj4ge1xuICBjb250ZW50OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgV2l0aERlbGltaXRlciB7XG4gIHN0YXJ0RGVsaW1pdGVyOiBHb0lubGluZVN0YXJ0RGVsaW1pdGVyO1xuICBlbmREZWxpbWl0ZXI6IEdvSW5saW5lRW5kRGVsaW1pdGVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEdvSW5saW5lIGV4dGVuZHMgR29CYXNlTm9kZTxcImlubGluZVwiPiwgV2l0aERlbGltaXRlciB7XG4gIHN0YXRlbWVudDogc3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNJbmxpbmUobm9kZTogR29Ob2RlKTogbm9kZSBpcyBHb0lubGluZSB7XG4gIHJldHVybiBub2RlLnR5cGUgPT09IFwiaW5saW5lXCI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0Jsb2NrKG5vZGU6IEdvTm9kZSk6IG5vZGUgaXMgR29CbG9jayB7XG4gIHJldHVybiBub2RlLnR5cGUgPT09IFwiYmxvY2tcIjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzTXVsdGlCbG9jayhub2RlOiBHb05vZGUpOiBub2RlIGlzIEdvTXVsdGlCbG9jayB7XG4gIHJldHVybiBub2RlLnR5cGUgPT09IFwiZG91YmxlLWJsb2NrXCI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1Jvb3Qobm9kZTogR29Ob2RlKTogbm9kZSBpcyBHb1Jvb3Qge1xuICByZXR1cm4gbm9kZS50eXBlID09PSBcInJvb3RcIjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzVW5mb3JtYXR0YWJsZShub2RlOiBHb05vZGUpOiBub2RlIGlzIEdvUm9vdCB7XG4gIHJldHVybiBub2RlLnR5cGUgPT09IFwidW5mb3JtYXR0YWJsZVwiO1xufVxuIl19