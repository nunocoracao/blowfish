var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target, mod));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  Combobox: () => Combobox,
  Dialog: () => Dialog2,
  Disclosure: () => Disclosure2,
  FocusTrap: () => FocusTrap,
  Listbox: () => Listbox2,
  Menu: () => Menu2,
  Popover: () => Popover2,
  Portal: () => Portal2,
  RadioGroup: () => RadioGroup2,
  Switch: () => Switch2,
  Tab: () => Tab2,
  Transition: () => Transition2
});
module.exports = __toCommonJS(src_exports);

// src/components/combobox/combobox.tsx
var import_react18 = __toESM(require("react"), 1);

// src/hooks/use-computed.ts
var import_react3 = require("react");

// src/hooks/use-iso-morphic-effect.ts
var import_react = require("react");

// src/utils/ssr.ts
var isServer = typeof window === "undefined" || typeof document === "undefined";

// src/hooks/use-iso-morphic-effect.ts
var useIsoMorphicEffect = isServer ? import_react.useEffect : import_react.useLayoutEffect;

// src/hooks/use-latest-value.ts
var import_react2 = require("react");
function useLatestValue(value) {
  let cache = (0, import_react2.useRef)(value);
  useIsoMorphicEffect(() => {
    cache.current = value;
  }, [value]);
  return cache;
}

// src/hooks/use-computed.ts
function useComputed(cb, dependencies) {
  let [value, setValue] = (0, import_react3.useState)(cb);
  let cbRef = useLatestValue(cb);
  useIsoMorphicEffect(() => setValue(cbRef.current), [cbRef, setValue, ...dependencies]);
  return value;
}

// src/hooks/use-disposables.ts
var import_react4 = require("react");

// src/utils/micro-task.ts
function microTask(cb) {
  if (typeof queueMicrotask === "function") {
    queueMicrotask(cb);
  } else {
    Promise.resolve().then(cb).catch((e) => setTimeout(() => {
      throw e;
    }));
  }
}

// src/utils/disposables.ts
function disposables() {
  let disposables2 = [];
  let queue = [];
  let api = {
    enqueue(fn) {
      queue.push(fn);
    },
    addEventListener(element, name, listener, options) {
      element.addEventListener(name, listener, options);
      return api.add(() => element.removeEventListener(name, listener, options));
    },
    requestAnimationFrame(...args) {
      let raf = requestAnimationFrame(...args);
      return api.add(() => cancelAnimationFrame(raf));
    },
    nextFrame(...args) {
      return api.requestAnimationFrame(() => {
        return api.requestAnimationFrame(...args);
      });
    },
    setTimeout(...args) {
      let timer = setTimeout(...args);
      return api.add(() => clearTimeout(timer));
    },
    microTask(...args) {
      let task = { current: true };
      microTask(() => {
        if (task.current) {
          args[0]();
        }
      });
      return api.add(() => {
        task.current = false;
      });
    },
    add(cb) {
      disposables2.push(cb);
      return () => {
        let idx = disposables2.indexOf(cb);
        if (idx >= 0) {
          let [dispose] = disposables2.splice(idx, 1);
          dispose();
        }
      };
    },
    dispose() {
      for (let dispose of disposables2.splice(0)) {
        dispose();
      }
    },
    async workQueue() {
      for (let handle of queue.splice(0)) {
        await handle();
      }
    }
  };
  return api;
}

// src/hooks/use-disposables.ts
function useDisposables() {
  let [d] = (0, import_react4.useState)(disposables);
  (0, import_react4.useEffect)(() => () => d.dispose(), [d]);
  return d;
}

// src/hooks/use-event.ts
var import_react5 = __toESM(require("react"), 1);
var useEvent = function useEvent2(cb) {
  let cache = useLatestValue(cb);
  return import_react5.default.useCallback((...args) => cache.current(...args), [cache]);
};

// src/hooks/use-id.ts
var import_react7 = __toESM(require("react"), 1);

// src/hooks/use-server-handoff-complete.ts
var import_react6 = require("react");
var state = { serverHandoffComplete: false };
function useServerHandoffComplete() {
  let [serverHandoffComplete, setServerHandoffComplete] = (0, import_react6.useState)(state.serverHandoffComplete);
  (0, import_react6.useEffect)(() => {
    if (serverHandoffComplete === true)
      return;
    setServerHandoffComplete(true);
  }, [serverHandoffComplete]);
  (0, import_react6.useEffect)(() => {
    if (state.serverHandoffComplete === false)
      state.serverHandoffComplete = true;
  }, []);
  return serverHandoffComplete;
}

// src/hooks/use-id.ts
var id = 0;
function generateId() {
  return ++id;
}
var _a;
var useId = (_a = import_react7.default.useId) != null ? _a : function useId2() {
  let ready = useServerHandoffComplete();
  let [id2, setId] = import_react7.default.useState(ready ? generateId : null);
  useIsoMorphicEffect(() => {
    if (id2 === null)
      setId(generateId());
  }, [id2]);
  return id2 != null ? "" + id2 : void 0;
};

// src/hooks/use-outside-click.ts
var import_react9 = require("react");

// src/utils/match.ts
function match(value, lookup, ...args) {
  if (value in lookup) {
    let returnValue = lookup[value];
    return typeof returnValue === "function" ? returnValue(...args) : returnValue;
  }
  let error = new Error(`Tried to handle "${value}" but there is no handler defined. Only defined handlers are: ${Object.keys(lookup).map((key) => `"${key}"`).join(", ")}.`);
  if (Error.captureStackTrace)
    Error.captureStackTrace(error, match);
  throw error;
}

// src/utils/owner.ts
function getOwnerDocument(element) {
  if (isServer)
    return null;
  if (element instanceof Node)
    return element.ownerDocument;
  if (element == null ? void 0 : element.hasOwnProperty("current")) {
    if (element.current instanceof Node)
      return element.current.ownerDocument;
  }
  return document;
}

// src/utils/focus-management.ts
var focusableSelector = [
  "[contentEditable=true]",
  "[tabindex]",
  "a[href]",
  "area[href]",
  "button:not([disabled])",
  "iframe",
  "input:not([disabled])",
  "select:not([disabled])",
  "textarea:not([disabled])"
].map(false ? (selector) => `${selector}:not([tabindex='-1']):not([style*='display: none'])` : (selector) => `${selector}:not([tabindex='-1'])`).join(",");
function getFocusableElements(container = document.body) {
  if (container == null)
    return [];
  return Array.from(container.querySelectorAll(focusableSelector)).sort((a, z) => Math.sign((a.tabIndex || Number.MAX_SAFE_INTEGER) - (z.tabIndex || Number.MAX_SAFE_INTEGER)));
}
function isFocusableElement(element, mode = 0 /* Strict */) {
  var _a2;
  if (element === ((_a2 = getOwnerDocument(element)) == null ? void 0 : _a2.body))
    return false;
  return match(mode, {
    [0 /* Strict */]() {
      return element.matches(focusableSelector);
    },
    [1 /* Loose */]() {
      let next = element;
      while (next !== null) {
        if (next.matches(focusableSelector))
          return true;
        next = next.parentElement;
      }
      return false;
    }
  });
}
function restoreFocusIfNecessary(element) {
  let ownerDocument = getOwnerDocument(element);
  disposables().nextFrame(() => {
    if (ownerDocument && !isFocusableElement(ownerDocument.activeElement, 0 /* Strict */)) {
      focusElement(element);
    }
  });
}
function focusElement(element) {
  element == null ? void 0 : element.focus({ preventScroll: true });
}
var selectableSelector = ["textarea", "input"].join(",");
function isSelectableElement(element) {
  var _a2, _b;
  return (_b = (_a2 = element == null ? void 0 : element.matches) == null ? void 0 : _a2.call(element, selectableSelector)) != null ? _b : false;
}
function sortByDomNode(nodes, resolveKey = (i) => i) {
  return nodes.slice().sort((aItem, zItem) => {
    let a = resolveKey(aItem);
    let z = resolveKey(zItem);
    if (a === null || z === null)
      return 0;
    let position = a.compareDocumentPosition(z);
    if (position & Node.DOCUMENT_POSITION_FOLLOWING)
      return -1;
    if (position & Node.DOCUMENT_POSITION_PRECEDING)
      return 1;
    return 0;
  });
}
function focusFrom(current, focus) {
  return focusIn(getFocusableElements(), focus, { relativeTo: current });
}
function focusIn(container, focus, {
  sorted = true,
  relativeTo = null,
  skipElements = []
} = {}) {
  let ownerDocument = Array.isArray(container) ? container.length > 0 ? container[0].ownerDocument : document : container.ownerDocument;
  let elements = Array.isArray(container) ? sorted ? sortByDomNode(container) : container : getFocusableElements(container);
  if (skipElements.length > 0) {
    elements = elements.filter((x) => !skipElements.includes(x));
  }
  relativeTo = relativeTo != null ? relativeTo : ownerDocument.activeElement;
  let direction = (() => {
    if (focus & (1 /* First */ | 4 /* Next */))
      return 1 /* Next */;
    if (focus & (2 /* Previous */ | 8 /* Last */))
      return -1 /* Previous */;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })();
  let startIndex = (() => {
    if (focus & 1 /* First */)
      return 0;
    if (focus & 2 /* Previous */)
      return Math.max(0, elements.indexOf(relativeTo)) - 1;
    if (focus & 4 /* Next */)
      return Math.max(0, elements.indexOf(relativeTo)) + 1;
    if (focus & 8 /* Last */)
      return elements.length - 1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })();
  let focusOptions = focus & 32 /* NoScroll */ ? { preventScroll: true } : {};
  let offset = 0;
  let total = elements.length;
  let next = void 0;
  do {
    if (offset >= total || offset + total <= 0)
      return 0 /* Error */;
    let nextIdx = startIndex + offset;
    if (focus & 16 /* WrapAround */) {
      nextIdx = (nextIdx + total) % total;
    } else {
      if (nextIdx < 0)
        return 3 /* Underflow */;
      if (nextIdx >= total)
        return 1 /* Overflow */;
    }
    next = elements[nextIdx];
    next == null ? void 0 : next.focus(focusOptions);
    offset += direction;
  } while (next !== ownerDocument.activeElement);
  if (focus & (4 /* Next */ | 2 /* Previous */) && isSelectableElement(next)) {
    next.select();
  }
  if (!next.hasAttribute("tabindex"))
    next.setAttribute("tabindex", "0");
  return 2 /* Success */;
}

// src/hooks/use-document-event.ts
var import_react8 = require("react");
function useDocumentEvent(type, listener, options) {
  let listenerRef = useLatestValue(listener);
  (0, import_react8.useEffect)(() => {
    function handler(event) {
      listenerRef.current(event);
    }
    document.addEventListener(type, handler, options);
    return () => document.removeEventListener(type, handler, options);
  }, [type, options]);
}

// src/hooks/use-outside-click.ts
function useOutsideClick(containers, cb, enabled = true) {
  let enabledRef = (0, import_react9.useRef)(false);
  (0, import_react9.useEffect)(false ? () => {
    enabledRef.current = enabled;
  } : () => {
    requestAnimationFrame(() => {
      enabledRef.current = enabled;
    });
  }, [enabled]);
  function handleOutsideClick(event, resolveTarget) {
    if (!enabledRef.current)
      return;
    if (event.defaultPrevented)
      return;
    let _containers = function resolve(containers2) {
      if (typeof containers2 === "function") {
        return resolve(containers2());
      }
      if (Array.isArray(containers2)) {
        return containers2;
      }
      if (containers2 instanceof Set) {
        return containers2;
      }
      return [containers2];
    }(containers);
    let target = resolveTarget(event);
    if (target === null) {
      return;
    }
    if (!target.getRootNode().contains(target))
      return;
    for (let container of _containers) {
      if (container === null)
        continue;
      let domNode = container instanceof HTMLElement ? container : container.current;
      if (domNode == null ? void 0 : domNode.contains(target)) {
        return;
      }
      if (event.composed && event.composedPath().includes(domNode)) {
        return;
      }
    }
    if (!isFocusableElement(target, 1 /* Loose */) && target.tabIndex !== -1) {
      event.preventDefault();
    }
    return cb(event, target);
  }
  let initialClickTarget = (0, import_react9.useRef)(null);
  useDocumentEvent("mousedown", (event) => {
    var _a2, _b;
    if (enabledRef.current) {
      initialClickTarget.current = ((_b = (_a2 = event.composedPath) == null ? void 0 : _a2.call(event)) == null ? void 0 : _b[0]) || event.target;
    }
  }, true);
  useDocumentEvent("click", (event) => {
    if (!initialClickTarget.current) {
      return;
    }
    handleOutsideClick(event, () => {
      return initialClickTarget.current;
    });
    initialClickTarget.current = null;
  }, true);
  useDocumentEvent("blur", (event) => handleOutsideClick(event, () => window.document.activeElement instanceof HTMLIFrameElement ? window.document.activeElement : null), true);
}

// src/hooks/use-resolve-button-type.ts
var import_react10 = require("react");
function resolveType(props) {
  var _a2;
  if (props.type)
    return props.type;
  let tag = (_a2 = props.as) != null ? _a2 : "button";
  if (typeof tag === "string" && tag.toLowerCase() === "button")
    return "button";
  return void 0;
}
function useResolveButtonType(props, ref) {
  let [type, setType] = (0, import_react10.useState)(() => resolveType(props));
  useIsoMorphicEffect(() => {
    setType(resolveType(props));
  }, [props.type, props.as]);
  useIsoMorphicEffect(() => {
    if (type)
      return;
    if (!ref.current)
      return;
    if (ref.current instanceof HTMLButtonElement && !ref.current.hasAttribute("type")) {
      setType("button");
    }
  }, [type, ref]);
  return type;
}

// src/hooks/use-sync-refs.ts
var import_react11 = require("react");
var Optional = Symbol();
function optionalRef(cb, isOptional = true) {
  return Object.assign(cb, { [Optional]: isOptional });
}
function useSyncRefs(...refs) {
  let cache = (0, import_react11.useRef)(refs);
  (0, import_react11.useEffect)(() => {
    cache.current = refs;
  }, [refs]);
  let syncRefs = useEvent((value) => {
    for (let ref of cache.current) {
      if (ref == null)
        continue;
      if (typeof ref === "function")
        ref(value);
      else
        ref.current = value;
    }
  });
  return refs.every((ref) => ref == null || (ref == null ? void 0 : ref[Optional])) ? void 0 : syncRefs;
}

// src/hooks/use-tree-walker.ts
var import_react12 = require("react");
function useTreeWalker({
  container,
  accept,
  walk,
  enabled = true
}) {
  let acceptRef = (0, import_react12.useRef)(accept);
  let walkRef = (0, import_react12.useRef)(walk);
  (0, import_react12.useEffect)(() => {
    acceptRef.current = accept;
    walkRef.current = walk;
  }, [accept, walk]);
  useIsoMorphicEffect(() => {
    if (!container)
      return;
    if (!enabled)
      return;
    let ownerDocument = getOwnerDocument(container);
    if (!ownerDocument)
      return;
    let accept2 = acceptRef.current;
    let walk2 = walkRef.current;
    let acceptNode = Object.assign((node) => accept2(node), { acceptNode: accept2 });
    let walker = ownerDocument.createTreeWalker(container, NodeFilter.SHOW_ELEMENT, acceptNode, false);
    while (walker.nextNode())
      walk2(walker.currentNode);
  }, [container, enabled, acceptRef, walkRef]);
}

// src/utils/calculate-active-index.ts
function assertNever(x) {
  throw new Error("Unexpected object: " + x);
}
function calculateActiveIndex(action, resolvers) {
  let items = resolvers.resolveItems();
  if (items.length <= 0)
    return null;
  let currentActiveIndex = resolvers.resolveActiveIndex();
  let activeIndex = currentActiveIndex != null ? currentActiveIndex : -1;
  let nextActiveIndex = (() => {
    switch (action.focus) {
      case 0 /* First */:
        return items.findIndex((item) => !resolvers.resolveDisabled(item));
      case 1 /* Previous */: {
        let idx = items.slice().reverse().findIndex((item, idx2, all) => {
          if (activeIndex !== -1 && all.length - idx2 - 1 >= activeIndex)
            return false;
          return !resolvers.resolveDisabled(item);
        });
        if (idx === -1)
          return idx;
        return items.length - 1 - idx;
      }
      case 2 /* Next */:
        return items.findIndex((item, idx) => {
          if (idx <= activeIndex)
            return false;
          return !resolvers.resolveDisabled(item);
        });
      case 3 /* Last */: {
        let idx = items.slice().reverse().findIndex((item) => !resolvers.resolveDisabled(item));
        if (idx === -1)
          return idx;
        return items.length - 1 - idx;
      }
      case 4 /* Specific */:
        return items.findIndex((item) => resolvers.resolveId(item) === action.id);
      case 5 /* Nothing */:
        return null;
      default:
        assertNever(action);
    }
  })();
  return nextActiveIndex === -1 ? currentActiveIndex : nextActiveIndex;
}

// src/utils/render.ts
var import_react13 = require("react");
function render({
  ourProps,
  theirProps,
  slot,
  defaultTag,
  features,
  visible = true,
  name
}) {
  let props = mergeProps(theirProps, ourProps);
  if (visible)
    return _render(props, slot, defaultTag, name);
  let featureFlags = features != null ? features : 0 /* None */;
  if (featureFlags & 2 /* Static */) {
    let { static: isStatic = false, ...rest } = props;
    if (isStatic)
      return _render(rest, slot, defaultTag, name);
  }
  if (featureFlags & 1 /* RenderStrategy */) {
    let { unmount = true, ...rest } = props;
    let strategy = unmount ? 0 /* Unmount */ : 1 /* Hidden */;
    return match(strategy, {
      [0 /* Unmount */]() {
        return null;
      },
      [1 /* Hidden */]() {
        return _render({ ...rest, ...{ hidden: true, style: { display: "none" } } }, slot, defaultTag, name);
      }
    });
  }
  return _render(props, slot, defaultTag, name);
}
function _render(props, slot = {}, tag, name) {
  let {
    as: Component = tag,
    children,
    refName = "ref",
    ...rest
  } = omit(props, ["unmount", "static"]);
  let refRelatedProps = props.ref !== void 0 ? { [refName]: props.ref } : {};
  let resolvedChildren = typeof children === "function" ? children(slot) : children;
  if (rest.className && typeof rest.className === "function") {
    ;
    rest.className = rest.className(slot);
  }
  let dataAttributes = {};
  if (slot) {
    let exposeState = false;
    let states = [];
    for (let [k, v] of Object.entries(slot)) {
      if (typeof v === "boolean") {
        exposeState = true;
      }
      if (v === true) {
        states.push(k);
      }
    }
    if (exposeState)
      dataAttributes[`data-headlessui-state`] = states.join(" ");
  }
  if (Component === import_react13.Fragment) {
    if (Object.keys(compact(rest)).length > 0) {
      if (!(0, import_react13.isValidElement)(resolvedChildren) || Array.isArray(resolvedChildren) && resolvedChildren.length > 1) {
        throw new Error([
          'Passing props on "Fragment"!',
          "",
          `The current component <${name} /> is rendering a "Fragment".`,
          `However we need to passthrough the following props:`,
          Object.keys(rest).map((line) => `  - ${line}`).join("\n"),
          "",
          "You can apply a few solutions:",
          [
            'Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".',
            "Render a single element as the child so that we can forward the props onto that element."
          ].map((line) => `  - ${line}`).join("\n")
        ].join("\n"));
      }
      return (0, import_react13.cloneElement)(resolvedChildren, Object.assign({}, mergeProps(resolvedChildren.props, compact(omit(rest, ["ref"]))), dataAttributes, refRelatedProps, mergeRefs(resolvedChildren.ref, refRelatedProps.ref)));
    }
  }
  return (0, import_react13.createElement)(Component, Object.assign({}, omit(rest, ["ref"]), Component !== import_react13.Fragment && refRelatedProps, Component !== import_react13.Fragment && dataAttributes), resolvedChildren);
}
function mergeRefs(...refs) {
  return {
    ref: refs.every((ref) => ref == null) ? void 0 : (value) => {
      for (let ref of refs) {
        if (ref == null)
          continue;
        if (typeof ref === "function")
          ref(value);
        else
          ref.current = value;
      }
    }
  };
}
function mergeProps(...listOfProps) {
  var _a2;
  if (listOfProps.length === 0)
    return {};
  if (listOfProps.length === 1)
    return listOfProps[0];
  let target = {};
  let eventHandlers = {};
  for (let props of listOfProps) {
    for (let prop in props) {
      if (prop.startsWith("on") && typeof props[prop] === "function") {
        (_a2 = eventHandlers[prop]) != null ? _a2 : eventHandlers[prop] = [];
        eventHandlers[prop].push(props[prop]);
      } else {
        target[prop] = props[prop];
      }
    }
  }
  if (target.disabled || target["aria-disabled"]) {
    return Object.assign(target, Object.fromEntries(Object.keys(eventHandlers).map((eventName) => [eventName, void 0])));
  }
  for (let eventName in eventHandlers) {
    Object.assign(target, {
      [eventName](event, ...args) {
        let handlers = eventHandlers[eventName];
        for (let handler of handlers) {
          if ((event instanceof Event || (event == null ? void 0 : event.nativeEvent) instanceof Event) && event.defaultPrevented) {
            return;
          }
          handler(event, ...args);
        }
      }
    });
  }
  return target;
}
function forwardRefWithAs(component) {
  var _a2;
  return Object.assign((0, import_react13.forwardRef)(component), {
    displayName: (_a2 = component.displayName) != null ? _a2 : component.name
  });
}
function compact(object) {
  let clone = Object.assign({}, object);
  for (let key in clone) {
    if (clone[key] === void 0)
      delete clone[key];
  }
  return clone;
}
function omit(object, keysToOmit = []) {
  let clone = Object.assign({}, object);
  for (let key of keysToOmit) {
    if (key in clone)
      delete clone[key];
  }
  return clone;
}

// src/utils/bugs.ts
function isDisabledReactIssue7711(element) {
  let parent = element.parentElement;
  let legend = null;
  while (parent && !(parent instanceof HTMLFieldSetElement)) {
    if (parent instanceof HTMLLegendElement)
      legend = parent;
    parent = parent.parentElement;
  }
  let isParentDisabled = (parent == null ? void 0 : parent.getAttribute("disabled")) === "";
  if (isParentDisabled && isFirstLegend(legend))
    return false;
  return isParentDisabled;
}
function isFirstLegend(element) {
  if (!element)
    return false;
  let previous = element.previousElementSibling;
  while (previous !== null) {
    if (previous instanceof HTMLLegendElement)
      return false;
    previous = previous.previousElementSibling;
  }
  return true;
}

// src/utils/form.ts
function objectToFormEntries(source = {}, parentKey = null, entries = []) {
  for (let [key, value] of Object.entries(source)) {
    append(entries, composeKey(parentKey, key), value);
  }
  return entries;
}
function composeKey(parent, key) {
  return parent ? parent + "[" + key + "]" : key;
}
function append(entries, key, value) {
  if (Array.isArray(value)) {
    for (let [subkey, subvalue] of value.entries()) {
      append(entries, composeKey(key, subkey.toString()), subvalue);
    }
  } else if (value instanceof Date) {
    entries.push([key, value.toISOString()]);
  } else if (typeof value === "boolean") {
    entries.push([key, value ? "1" : "0"]);
  } else if (typeof value === "string") {
    entries.push([key, value]);
  } else if (typeof value === "number") {
    entries.push([key, `${value}`]);
  } else if (value === null || value === void 0) {
    entries.push([key, ""]);
  } else {
    objectToFormEntries(value, key, entries);
  }
}
function attemptSubmit(element) {
  var _a2;
  let form = (_a2 = element == null ? void 0 : element.form) != null ? _a2 : element.closest("form");
  if (!form)
    return;
  for (let element2 of form.elements) {
    if (element2.tagName === "INPUT" && element2.type === "submit" || element2.tagName === "BUTTON" && element2.type === "submit" || element2.nodeName === "INPUT" && element2.type === "image") {
      element2.click();
      return;
    }
  }
}

// src/internal/hidden.tsx
var DEFAULT_VISUALLY_HIDDEN_TAG = "div";
var Hidden = forwardRefWithAs(function VisuallyHidden(props, ref) {
  let { features = 1 /* None */, ...theirProps } = props;
  let ourProps = {
    ref,
    "aria-hidden": (features & 2 /* Focusable */) === 2 /* Focusable */ ? true : void 0,
    style: {
      position: "fixed",
      top: 1,
      left: 1,
      width: 1,
      height: 0,
      padding: 0,
      margin: -1,
      overflow: "hidden",
      clip: "rect(0, 0, 0, 0)",
      whiteSpace: "nowrap",
      borderWidth: "0",
      ...(features & 4 /* Hidden */) === 4 /* Hidden */ && !((features & 2 /* Focusable */) === 2 /* Focusable */) && { display: "none" }
    }
  };
  return render({
    ourProps,
    theirProps,
    slot: {},
    defaultTag: DEFAULT_VISUALLY_HIDDEN_TAG,
    name: "Hidden"
  });
});

// src/internal/open-closed.tsx
var import_react14 = __toESM(require("react"), 1);
var Context = (0, import_react14.createContext)(null);
Context.displayName = "OpenClosedContext";
function useOpenClosed() {
  return (0, import_react14.useContext)(Context);
}
function OpenClosedProvider({ value, children }) {
  return /* @__PURE__ */ import_react14.default.createElement(Context.Provider, {
    value
  }, children);
}

// src/hooks/use-controllable.ts
var import_react15 = require("react");
function useControllable(controlledValue, onChange, defaultValue) {
  let [internalValue, setInternalValue] = (0, import_react15.useState)(defaultValue);
  let isControlled = controlledValue !== void 0;
  let wasControlled = (0, import_react15.useRef)(isControlled);
  let didWarnOnUncontrolledToControlled = (0, import_react15.useRef)(false);
  let didWarnOnControlledToUncontrolled = (0, import_react15.useRef)(false);
  if (isControlled && !wasControlled.current && !didWarnOnUncontrolledToControlled.current) {
    didWarnOnUncontrolledToControlled.current = true;
    wasControlled.current = isControlled;
    console.error("A component is changing from uncontrolled to controlled. This may be caused by the value changing from undefined to a defined value, which should not happen.");
  } else if (!isControlled && wasControlled.current && !didWarnOnControlledToUncontrolled.current) {
    didWarnOnControlledToUncontrolled.current = true;
    wasControlled.current = isControlled;
    console.error("A component is changing from controlled to uncontrolled. This may be caused by the value changing from a defined value to undefined, which should not happen.");
  }
  return [
    isControlled ? controlledValue : internalValue,
    useEvent((value) => {
      if (isControlled) {
        return onChange == null ? void 0 : onChange(value);
      } else {
        setInternalValue(value);
        return onChange == null ? void 0 : onChange(value);
      }
    })
  ];
}

// src/hooks/use-watch.ts
var import_react16 = require("react");
function useWatch(cb, dependencies) {
  let track = (0, import_react16.useRef)([]);
  let action = useEvent(cb);
  (0, import_react16.useEffect)(() => {
    let oldValues = [...track.current];
    for (let [idx, value] of dependencies.entries()) {
      if (track.current[idx] !== value) {
        let returnValue = action(dependencies, oldValues);
        track.current = dependencies;
        return returnValue;
      }
    }
  }, [action, ...dependencies]);
}

// src/hooks/use-tracked-pointer.ts
var import_react17 = require("react");
function eventToPosition(evt) {
  return [evt.screenX, evt.screenY];
}
function useTrackedPointer() {
  let lastPos = (0, import_react17.useRef)([-1, -1]);
  return {
    wasMoved(evt) {
      if (false) {
        return true;
      }
      let newPos = eventToPosition(evt);
      if (lastPos.current[0] === newPos[0] && lastPos.current[1] === newPos[1]) {
        return false;
      }
      lastPos.current = newPos;
      return true;
    },
    update(evt) {
      lastPos.current = eventToPosition(evt);
    }
  };
}

// src/components/combobox/combobox.tsx
function adjustOrderedState(state2, adjustment = (i) => i) {
  let currentActiveOption = state2.activeOptionIndex !== null ? state2.options[state2.activeOptionIndex] : null;
  let sortedOptions = sortByDomNode(adjustment(state2.options.slice()), (option) => option.dataRef.current.domRef.current);
  let adjustedActiveOptionIndex = currentActiveOption ? sortedOptions.indexOf(currentActiveOption) : null;
  if (adjustedActiveOptionIndex === -1) {
    adjustedActiveOptionIndex = null;
  }
  return {
    options: sortedOptions,
    activeOptionIndex: adjustedActiveOptionIndex
  };
}
var reducers = {
  [1 /* CloseCombobox */](state2) {
    if (state2.dataRef.current.disabled)
      return state2;
    if (state2.comboboxState === 1 /* Closed */)
      return state2;
    return { ...state2, activeOptionIndex: null, comboboxState: 1 /* Closed */ };
  },
  [0 /* OpenCombobox */](state2) {
    if (state2.dataRef.current.disabled)
      return state2;
    if (state2.comboboxState === 0 /* Open */)
      return state2;
    let activeOptionIndex = state2.activeOptionIndex;
    let { isSelected } = state2.dataRef.current;
    let optionIdx = state2.options.findIndex((option) => isSelected(option.dataRef.current.value));
    if (optionIdx !== -1) {
      activeOptionIndex = optionIdx;
    }
    return { ...state2, comboboxState: 0 /* Open */, activeOptionIndex };
  },
  [2 /* GoToOption */](state2, action) {
    var _a2;
    if (state2.dataRef.current.disabled)
      return state2;
    if (state2.dataRef.current.optionsRef.current && !state2.dataRef.current.optionsPropsRef.current.static && state2.comboboxState === 1 /* Closed */) {
      return state2;
    }
    let adjustedState = adjustOrderedState(state2);
    if (adjustedState.activeOptionIndex === null) {
      let localActiveOptionIndex = adjustedState.options.findIndex((option) => !option.dataRef.current.disabled);
      if (localActiveOptionIndex !== -1) {
        adjustedState.activeOptionIndex = localActiveOptionIndex;
      }
    }
    let activeOptionIndex = calculateActiveIndex(action, {
      resolveItems: () => adjustedState.options,
      resolveActiveIndex: () => adjustedState.activeOptionIndex,
      resolveId: (item) => item.id,
      resolveDisabled: (item) => item.dataRef.current.disabled
    });
    return {
      ...state2,
      ...adjustedState,
      activeOptionIndex,
      activationTrigger: (_a2 = action.trigger) != null ? _a2 : 1 /* Other */
    };
  },
  [3 /* RegisterOption */]: (state2, action) => {
    let option = { id: action.id, dataRef: action.dataRef };
    let adjustedState = adjustOrderedState(state2, (options) => [...options, option]);
    if (state2.activeOptionIndex === null) {
      if (state2.dataRef.current.isSelected(action.dataRef.current.value)) {
        adjustedState.activeOptionIndex = adjustedState.options.indexOf(option);
      }
    }
    let nextState = {
      ...state2,
      ...adjustedState,
      activationTrigger: 1 /* Other */
    };
    if (state2.dataRef.current.__demoMode && state2.dataRef.current.value === void 0) {
      nextState.activeOptionIndex = 0;
    }
    return nextState;
  },
  [4 /* UnregisterOption */]: (state2, action) => {
    let adjustedState = adjustOrderedState(state2, (options) => {
      let idx = options.findIndex((a) => a.id === action.id);
      if (idx !== -1)
        options.splice(idx, 1);
      return options;
    });
    return {
      ...state2,
      ...adjustedState,
      activationTrigger: 1 /* Other */
    };
  },
  [5 /* RegisterLabel */]: (state2, action) => {
    return {
      ...state2,
      labelId: action.id
    };
  }
};
var ComboboxActionsContext = (0, import_react18.createContext)(null);
ComboboxActionsContext.displayName = "ComboboxActionsContext";
function useActions(component) {
  let context = (0, import_react18.useContext)(ComboboxActionsContext);
  if (context === null) {
    let err = new Error(`<${component} /> is missing a parent <Combobox /> component.`);
    if (Error.captureStackTrace)
      Error.captureStackTrace(err, useActions);
    throw err;
  }
  return context;
}
var ComboboxDataContext = (0, import_react18.createContext)(null);
ComboboxDataContext.displayName = "ComboboxDataContext";
function useData(component) {
  let context = (0, import_react18.useContext)(ComboboxDataContext);
  if (context === null) {
    let err = new Error(`<${component} /> is missing a parent <Combobox /> component.`);
    if (Error.captureStackTrace)
      Error.captureStackTrace(err, useData);
    throw err;
  }
  return context;
}
function stateReducer(state2, action) {
  return match(action.type, reducers, state2, action);
}
var DEFAULT_COMBOBOX_TAG = import_react18.Fragment;
function ComboboxFn(props, ref) {
  let {
    value: controlledValue,
    defaultValue,
    onChange: controlledOnChange,
    name,
    by = (a, z) => a === z,
    disabled = false,
    __demoMode = false,
    nullable = false,
    multiple = false,
    ...theirProps
  } = props;
  let [value = multiple ? [] : void 0, theirOnChange] = useControllable(controlledValue, controlledOnChange, defaultValue);
  let [state2, dispatch] = (0, import_react18.useReducer)(stateReducer, {
    dataRef: (0, import_react18.createRef)(),
    comboboxState: __demoMode ? 0 /* Open */ : 1 /* Closed */,
    options: [],
    activeOptionIndex: null,
    activationTrigger: 1 /* Other */,
    labelId: null
  });
  let defaultToFirstOption = (0, import_react18.useRef)(false);
  let optionsPropsRef = (0, import_react18.useRef)({ static: false, hold: false });
  let labelRef = (0, import_react18.useRef)(null);
  let inputRef = (0, import_react18.useRef)(null);
  let buttonRef = (0, import_react18.useRef)(null);
  let optionsRef = (0, import_react18.useRef)(null);
  let compare = useEvent(typeof by === "string" ? (a, z) => {
    let property = by;
    return (a == null ? void 0 : a[property]) === (z == null ? void 0 : z[property]);
  } : by);
  let isSelected = (0, import_react18.useCallback)((compareValue) => match(data.mode, {
    [1 /* Multi */]: () => value.some((option) => compare(option, compareValue)),
    [0 /* Single */]: () => compare(value, compareValue)
  }), [value]);
  let data = (0, import_react18.useMemo)(() => ({
    ...state2,
    optionsPropsRef,
    labelRef,
    inputRef,
    buttonRef,
    optionsRef,
    value,
    defaultValue,
    disabled,
    mode: multiple ? 1 /* Multi */ : 0 /* Single */,
    get activeOptionIndex() {
      if (defaultToFirstOption.current && state2.activeOptionIndex === null && state2.options.length > 0) {
        let localActiveOptionIndex = state2.options.findIndex((option) => !option.dataRef.current.disabled);
        if (localActiveOptionIndex !== -1) {
          return localActiveOptionIndex;
        }
      }
      return state2.activeOptionIndex;
    },
    compare,
    isSelected,
    nullable,
    __demoMode
  }), [value, defaultValue, disabled, multiple, nullable, __demoMode, state2]);
  useIsoMorphicEffect(() => {
    state2.dataRef.current = data;
  }, [data]);
  useOutsideClick([data.buttonRef, data.inputRef, data.optionsRef], () => actions.closeCombobox(), data.comboboxState === 0 /* Open */);
  let slot = (0, import_react18.useMemo)(() => ({
    open: data.comboboxState === 0 /* Open */,
    disabled,
    activeIndex: data.activeOptionIndex,
    activeOption: data.activeOptionIndex === null ? null : data.options[data.activeOptionIndex].dataRef.current.value,
    value
  }), [data, disabled, value]);
  let selectOption = useEvent((id2) => {
    let option = data.options.find((item) => item.id === id2);
    if (!option)
      return;
    onChange(option.dataRef.current.value);
  });
  let selectActiveOption = useEvent(() => {
    if (data.activeOptionIndex !== null) {
      let { dataRef, id: id2 } = data.options[data.activeOptionIndex];
      onChange(dataRef.current.value);
      actions.goToOption(4 /* Specific */, id2);
    }
  });
  let openCombobox = useEvent(() => {
    dispatch({ type: 0 /* OpenCombobox */ });
    defaultToFirstOption.current = true;
  });
  let closeCombobox = useEvent(() => {
    dispatch({ type: 1 /* CloseCombobox */ });
    defaultToFirstOption.current = false;
  });
  let goToOption = useEvent((focus, id2, trigger) => {
    defaultToFirstOption.current = false;
    if (focus === 4 /* Specific */) {
      return dispatch({ type: 2 /* GoToOption */, focus: 4 /* Specific */, id: id2, trigger });
    }
    return dispatch({ type: 2 /* GoToOption */, focus, trigger });
  });
  let registerOption = useEvent((id2, dataRef) => {
    dispatch({ type: 3 /* RegisterOption */, id: id2, dataRef });
    return () => dispatch({ type: 4 /* UnregisterOption */, id: id2 });
  });
  let registerLabel = useEvent((id2) => {
    dispatch({ type: 5 /* RegisterLabel */, id: id2 });
    return () => dispatch({ type: 5 /* RegisterLabel */, id: null });
  });
  let onChange = useEvent((value2) => {
    return match(data.mode, {
      [0 /* Single */]() {
        return theirOnChange == null ? void 0 : theirOnChange(value2);
      },
      [1 /* Multi */]() {
        let copy = data.value.slice();
        let idx = copy.findIndex((item) => compare(item, value2));
        if (idx === -1) {
          copy.push(value2);
        } else {
          copy.splice(idx, 1);
        }
        return theirOnChange == null ? void 0 : theirOnChange(copy);
      }
    });
  });
  let actions = (0, import_react18.useMemo)(() => ({
    onChange,
    registerOption,
    registerLabel,
    goToOption,
    closeCombobox,
    openCombobox,
    selectActiveOption,
    selectOption
  }), []);
  let ourProps = ref === null ? {} : { ref };
  let form = (0, import_react18.useRef)(null);
  let d = useDisposables();
  (0, import_react18.useEffect)(() => {
    if (!form.current)
      return;
    if (defaultValue === void 0)
      return;
    d.addEventListener(form.current, "reset", () => {
      onChange(defaultValue);
    });
  }, [form, onChange]);
  return /* @__PURE__ */ import_react18.default.createElement(ComboboxActionsContext.Provider, {
    value: actions
  }, /* @__PURE__ */ import_react18.default.createElement(ComboboxDataContext.Provider, {
    value: data
  }, /* @__PURE__ */ import_react18.default.createElement(OpenClosedProvider, {
    value: match(data.comboboxState, {
      [0 /* Open */]: 0 /* Open */,
      [1 /* Closed */]: 1 /* Closed */
    })
  }, name != null && value != null && objectToFormEntries({ [name]: value }).map(([name2, value2], idx) => /* @__PURE__ */ import_react18.default.createElement(Hidden, {
    features: 4 /* Hidden */,
    ref: idx === 0 ? (element) => {
      var _a2;
      form.current = (_a2 = element == null ? void 0 : element.closest("form")) != null ? _a2 : null;
    } : void 0,
    ...compact({
      key: name2,
      as: "input",
      type: "hidden",
      hidden: true,
      readOnly: true,
      name: name2,
      value: value2
    })
  })), render({
    ourProps,
    theirProps,
    slot,
    defaultTag: DEFAULT_COMBOBOX_TAG,
    name: "Combobox"
  }))));
}
var ComboboxRoot = forwardRefWithAs(ComboboxFn);
var DEFAULT_INPUT_TAG = "input";
var Input = forwardRefWithAs(function Input2(props, ref) {
  var _a2, _b, _c, _d;
  let internalId = useId();
  let {
    id: id2 = `headlessui-combobox-input-${internalId}`,
    onChange,
    displayValue,
    type = "text",
    ...theirProps
  } = props;
  let data = useData("Combobox.Input");
  let actions = useActions("Combobox.Input");
  let inputRef = useSyncRefs(data.inputRef, ref);
  let isTyping = (0, import_react18.useRef)(false);
  let d = useDisposables();
  let currentDisplayValue = function() {
    var _a3;
    if (typeof displayValue === "function" && data.value !== void 0) {
      return (_a3 = displayValue(data.value)) != null ? _a3 : "";
    } else if (typeof data.value === "string") {
      return data.value;
    } else {
      return "";
    }
  }();
  useWatch(([currentDisplayValue2, state2], [oldCurrentDisplayValue, oldState]) => {
    if (isTyping.current)
      return;
    if (!data.inputRef.current)
      return;
    if (oldState === 0 /* Open */ && state2 === 1 /* Closed */) {
      data.inputRef.current.value = currentDisplayValue2;
    } else if (currentDisplayValue2 !== oldCurrentDisplayValue) {
      data.inputRef.current.value = currentDisplayValue2;
    }
  }, [currentDisplayValue, data.comboboxState]);
  let isComposing = (0, import_react18.useRef)(false);
  let handleCompositionStart = useEvent(() => {
    isComposing.current = true;
  });
  let handleCompositionEnd = useEvent(() => {
    setTimeout(() => {
      isComposing.current = false;
    });
  });
  let handleKeyDown = useEvent((event) => {
    isTyping.current = true;
    switch (event.key) {
      case "Backspace" /* Backspace */:
      case "Delete" /* Delete */:
        if (data.mode !== 0 /* Single */)
          return;
        if (!data.nullable)
          return;
        let input = event.currentTarget;
        d.requestAnimationFrame(() => {
          if (input.value === "") {
            actions.onChange(null);
            if (data.optionsRef.current) {
              data.optionsRef.current.scrollTop = 0;
            }
            actions.goToOption(5 /* Nothing */);
          }
        });
        break;
      case "Enter" /* Enter */:
        isTyping.current = false;
        if (data.comboboxState !== 0 /* Open */)
          return;
        if (isComposing.current)
          return;
        event.preventDefault();
        event.stopPropagation();
        if (data.activeOptionIndex === null) {
          actions.closeCombobox();
          return;
        }
        actions.selectActiveOption();
        if (data.mode === 0 /* Single */) {
          actions.closeCombobox();
        }
        break;
      case "ArrowDown" /* ArrowDown */:
        isTyping.current = false;
        event.preventDefault();
        event.stopPropagation();
        return match(data.comboboxState, {
          [0 /* Open */]: () => {
            actions.goToOption(2 /* Next */);
          },
          [1 /* Closed */]: () => {
            actions.openCombobox();
          }
        });
      case "ArrowUp" /* ArrowUp */:
        isTyping.current = false;
        event.preventDefault();
        event.stopPropagation();
        return match(data.comboboxState, {
          [0 /* Open */]: () => {
            actions.goToOption(1 /* Previous */);
          },
          [1 /* Closed */]: () => {
            actions.openCombobox();
            d.nextFrame(() => {
              if (!data.value) {
                actions.goToOption(3 /* Last */);
              }
            });
          }
        });
      case "Home" /* Home */:
        if (event.shiftKey) {
          break;
        }
        isTyping.current = false;
        event.preventDefault();
        event.stopPropagation();
        return actions.goToOption(0 /* First */);
      case "PageUp" /* PageUp */:
        isTyping.current = false;
        event.preventDefault();
        event.stopPropagation();
        return actions.goToOption(0 /* First */);
      case "End" /* End */:
        if (event.shiftKey) {
          break;
        }
        isTyping.current = false;
        event.preventDefault();
        event.stopPropagation();
        return actions.goToOption(3 /* Last */);
      case "PageDown" /* PageDown */:
        isTyping.current = false;
        event.preventDefault();
        event.stopPropagation();
        return actions.goToOption(3 /* Last */);
      case "Escape" /* Escape */:
        isTyping.current = false;
        if (data.comboboxState !== 0 /* Open */)
          return;
        event.preventDefault();
        if (data.optionsRef.current && !data.optionsPropsRef.current.static) {
          event.stopPropagation();
        }
        return actions.closeCombobox();
      case "Tab" /* Tab */:
        isTyping.current = false;
        if (data.comboboxState !== 0 /* Open */)
          return;
        if (data.mode === 0 /* Single */)
          actions.selectActiveOption();
        actions.closeCombobox();
        break;
    }
  });
  let handleChange = useEvent((event) => {
    actions.openCombobox();
    onChange == null ? void 0 : onChange(event);
  });
  let handleBlur = useEvent(() => {
    isTyping.current = false;
  });
  let labelledby = useComputed(() => {
    if (!data.labelId)
      return void 0;
    return [data.labelId].join(" ");
  }, [data.labelId]);
  let slot = (0, import_react18.useMemo)(() => ({ open: data.comboboxState === 0 /* Open */, disabled: data.disabled }), [data]);
  let ourProps = {
    ref: inputRef,
    id: id2,
    role: "combobox",
    type,
    "aria-controls": (_a2 = data.optionsRef.current) == null ? void 0 : _a2.id,
    "aria-expanded": data.disabled ? void 0 : data.comboboxState === 0 /* Open */,
    "aria-activedescendant": data.activeOptionIndex === null ? void 0 : (_b = data.options[data.activeOptionIndex]) == null ? void 0 : _b.id,
    "aria-multiselectable": data.mode === 1 /* Multi */ ? true : void 0,
    "aria-labelledby": labelledby,
    defaultValue: (_d = (_c = props.defaultValue) != null ? _c : data.defaultValue !== void 0 ? displayValue == null ? void 0 : displayValue(data.defaultValue) : null) != null ? _d : data.defaultValue,
    disabled: data.disabled,
    onCompositionStart: handleCompositionStart,
    onCompositionEnd: handleCompositionEnd,
    onKeyDown: handleKeyDown,
    onChange: handleChange,
    onBlur: handleBlur
  };
  return render({
    ourProps,
    theirProps,
    slot,
    defaultTag: DEFAULT_INPUT_TAG,
    name: "Combobox.Input"
  });
});
var DEFAULT_BUTTON_TAG = "button";
var Button = forwardRefWithAs(function Button2(props, ref) {
  var _a2;
  let data = useData("Combobox.Button");
  let actions = useActions("Combobox.Button");
  let buttonRef = useSyncRefs(data.buttonRef, ref);
  let internalId = useId();
  let { id: id2 = `headlessui-combobox-button-${internalId}`, ...theirProps } = props;
  let d = useDisposables();
  let handleKeyDown = useEvent((event) => {
    switch (event.key) {
      case "ArrowDown" /* ArrowDown */:
        event.preventDefault();
        event.stopPropagation();
        if (data.comboboxState === 1 /* Closed */) {
          actions.openCombobox();
        }
        return d.nextFrame(() => {
          var _a3;
          return (_a3 = data.inputRef.current) == null ? void 0 : _a3.focus({ preventScroll: true });
        });
      case "ArrowUp" /* ArrowUp */:
        event.preventDefault();
        event.stopPropagation();
        if (data.comboboxState === 1 /* Closed */) {
          actions.openCombobox();
          d.nextFrame(() => {
            if (!data.value) {
              actions.goToOption(3 /* Last */);
            }
          });
        }
        return d.nextFrame(() => {
          var _a3;
          return (_a3 = data.inputRef.current) == null ? void 0 : _a3.focus({ preventScroll: true });
        });
      case "Escape" /* Escape */:
        if (data.comboboxState !== 0 /* Open */)
          return;
        event.preventDefault();
        if (data.optionsRef.current && !data.optionsPropsRef.current.static) {
          event.stopPropagation();
        }
        actions.closeCombobox();
        return d.nextFrame(() => {
          var _a3;
          return (_a3 = data.inputRef.current) == null ? void 0 : _a3.focus({ preventScroll: true });
        });
      default:
        return;
    }
  });
  let handleClick = useEvent((event) => {
    if (isDisabledReactIssue7711(event.currentTarget))
      return event.preventDefault();
    if (data.comboboxState === 0 /* Open */) {
      actions.closeCombobox();
    } else {
      event.preventDefault();
      actions.openCombobox();
    }
    d.nextFrame(() => {
      var _a3;
      return (_a3 = data.inputRef.current) == null ? void 0 : _a3.focus({ preventScroll: true });
    });
  });
  let labelledby = useComputed(() => {
    if (!data.labelId)
      return void 0;
    return [data.labelId, id2].join(" ");
  }, [data.labelId, id2]);
  let slot = (0, import_react18.useMemo)(() => ({
    open: data.comboboxState === 0 /* Open */,
    disabled: data.disabled,
    value: data.value
  }), [data]);
  let ourProps = {
    ref: buttonRef,
    id: id2,
    type: useResolveButtonType(props, data.buttonRef),
    tabIndex: -1,
    "aria-haspopup": "listbox",
    "aria-controls": (_a2 = data.optionsRef.current) == null ? void 0 : _a2.id,
    "aria-expanded": data.disabled ? void 0 : data.comboboxState === 0 /* Open */,
    "aria-labelledby": labelledby,
    disabled: data.disabled,
    onClick: handleClick,
    onKeyDown: handleKeyDown
  };
  return render({
    ourProps,
    theirProps,
    slot,
    defaultTag: DEFAULT_BUTTON_TAG,
    name: "Combobox.Button"
  });
});
var DEFAULT_LABEL_TAG = "label";
var Label = forwardRefWithAs(function Label2(props, ref) {
  let internalId = useId();
  let { id: id2 = `headlessui-combobox-label-${internalId}`, ...theirProps } = props;
  let data = useData("Combobox.Label");
  let actions = useActions("Combobox.Label");
  let labelRef = useSyncRefs(data.labelRef, ref);
  useIsoMorphicEffect(() => actions.registerLabel(id2), [id2]);
  let handleClick = useEvent(() => {
    var _a2;
    return (_a2 = data.inputRef.current) == null ? void 0 : _a2.focus({ preventScroll: true });
  });
  let slot = (0, import_react18.useMemo)(() => ({ open: data.comboboxState === 0 /* Open */, disabled: data.disabled }), [data]);
  let ourProps = { ref: labelRef, id: id2, onClick: handleClick };
  return render({
    ourProps,
    theirProps,
    slot,
    defaultTag: DEFAULT_LABEL_TAG,
    name: "Combobox.Label"
  });
});
var DEFAULT_OPTIONS_TAG = "ul";
var OptionsRenderFeatures = 1 /* RenderStrategy */ | 2 /* Static */;
var Options = forwardRefWithAs(function Options2(props, ref) {
  var _a2;
  let internalId = useId();
  let { id: id2 = `headlessui-combobox-options-${internalId}`, hold = false, ...theirProps } = props;
  let data = useData("Combobox.Options");
  let optionsRef = useSyncRefs(data.optionsRef, ref);
  let usesOpenClosedState = useOpenClosed();
  let visible = (() => {
    if (usesOpenClosedState !== null) {
      return usesOpenClosedState === 0 /* Open */;
    }
    return data.comboboxState === 0 /* Open */;
  })();
  useIsoMorphicEffect(() => {
    var _a3;
    data.optionsPropsRef.current.static = (_a3 = props.static) != null ? _a3 : false;
  }, [data.optionsPropsRef, props.static]);
  useIsoMorphicEffect(() => {
    data.optionsPropsRef.current.hold = hold;
  }, [data.optionsPropsRef, hold]);
  useTreeWalker({
    container: data.optionsRef.current,
    enabled: data.comboboxState === 0 /* Open */,
    accept(node) {
      if (node.getAttribute("role") === "option")
        return NodeFilter.FILTER_REJECT;
      if (node.hasAttribute("role"))
        return NodeFilter.FILTER_SKIP;
      return NodeFilter.FILTER_ACCEPT;
    },
    walk(node) {
      node.setAttribute("role", "none");
    }
  });
  let labelledby = useComputed(() => {
    var _a3, _b;
    return (_b = data.labelId) != null ? _b : (_a3 = data.buttonRef.current) == null ? void 0 : _a3.id;
  }, [data.labelId, data.buttonRef.current]);
  let slot = (0, import_react18.useMemo)(() => ({ open: data.comboboxState === 0 /* Open */ }), [data]);
  let ourProps = {
    "aria-activedescendant": data.activeOptionIndex === null ? void 0 : (_a2 = data.options[data.activeOptionIndex]) == null ? void 0 : _a2.id,
    "aria-labelledby": labelledby,
    role: "listbox",
    id: id2,
    ref: optionsRef
  };
  return render({
    ourProps,
    theirProps,
    slot,
    defaultTag: DEFAULT_OPTIONS_TAG,
    features: OptionsRenderFeatures,
    visible,
    name: "Combobox.Options"
  });
});
var DEFAULT_OPTION_TAG = "li";
var Option = forwardRefWithAs(function Option2(props, ref) {
  var _a2, _b;
  let internalId = useId();
  let {
    id: id2 = `headlessui-combobox-option-${internalId}`,
    disabled = false,
    value,
    ...theirProps
  } = props;
  let data = useData("Combobox.Option");
  let actions = useActions("Combobox.Option");
  let active = data.activeOptionIndex !== null ? data.options[data.activeOptionIndex].id === id2 : false;
  let selected = data.isSelected(value);
  let internalOptionRef = (0, import_react18.useRef)(null);
  let bag = useLatestValue({
    disabled,
    value,
    domRef: internalOptionRef,
    textValue: (_b = (_a2 = internalOptionRef.current) == null ? void 0 : _a2.textContent) == null ? void 0 : _b.toLowerCase()
  });
  let optionRef = useSyncRefs(ref, internalOptionRef);
  let select = useEvent(() => actions.selectOption(id2));
  useIsoMorphicEffect(() => actions.registerOption(id2, bag), [bag, id2]);
  let enableScrollIntoView = (0, import_react18.useRef)(data.__demoMode ? false : true);
  useIsoMorphicEffect(() => {
    if (!data.__demoMode)
      return;
    let d = disposables();
    d.requestAnimationFrame(() => {
      enableScrollIntoView.current = true;
    });
    return d.dispose;
  }, []);
  useIsoMorphicEffect(() => {
    if (data.comboboxState !== 0 /* Open */)
      return;
    if (!active)
      return;
    if (!enableScrollIntoView.current)
      return;
    if (data.activationTrigger === 0 /* Pointer */)
      return;
    let d = disposables();
    d.requestAnimationFrame(() => {
      var _a3, _b2;
      (_b2 = (_a3 = internalOptionRef.current) == null ? void 0 : _a3.scrollIntoView) == null ? void 0 : _b2.call(_a3, { block: "nearest" });
    });
    return d.dispose;
  }, [internalOptionRef, active, data.comboboxState, data.activationTrigger, data.activeOptionIndex]);
  let handleClick = useEvent((event) => {
    if (disabled)
      return event.preventDefault();
    select();
    if (data.mode === 0 /* Single */) {
      actions.closeCombobox();
    }
  });
  let handleFocus = useEvent(() => {
    if (disabled)
      return actions.goToOption(5 /* Nothing */);
    actions.goToOption(4 /* Specific */, id2);
  });
  let pointer = useTrackedPointer();
  let handleEnter = useEvent((evt) => pointer.update(evt));
  let handleMove = useEvent((evt) => {
    if (!pointer.wasMoved(evt))
      return;
    if (disabled)
      return;
    if (active)
      return;
    actions.goToOption(4 /* Specific */, id2, 0 /* Pointer */);
  });
  let handleLeave = useEvent((evt) => {
    if (!pointer.wasMoved(evt))
      return;
    if (disabled)
      return;
    if (!active)
      return;
    if (data.optionsPropsRef.current.hold)
      return;
    actions.goToOption(5 /* Nothing */);
  });
  let slot = (0, import_react18.useMemo)(() => ({ active, selected, disabled }), [active, selected, disabled]);
  let ourProps = {
    id: id2,
    ref: optionRef,
    role: "option",
    tabIndex: disabled === true ? void 0 : -1,
    "aria-disabled": disabled === true ? true : void 0,
    "aria-selected": selected,
    disabled: void 0,
    onClick: handleClick,
    onFocus: handleFocus,
    onPointerEnter: handleEnter,
    onMouseEnter: handleEnter,
    onPointerMove: handleMove,
    onMouseMove: handleMove,
    onPointerLeave: handleLeave,
    onMouseLeave: handleLeave
  };
  return render({
    ourProps,
    theirProps,
    slot,
    defaultTag: DEFAULT_OPTION_TAG,
    name: "Combobox.Option"
  });
});
var Combobox = Object.assign(ComboboxRoot, { Input, Button, Label, Options, Option });

// src/components/dialog/dialog.tsx
var import_react29 = __toESM(require("react"), 1);

// src/components/focus-trap/focus-trap.tsx
var import_react24 = __toESM(require("react"), 1);

// src/hooks/use-tab-direction.ts
var import_react20 = require("react");

// src/hooks/use-window-event.ts
var import_react19 = require("react");
function useWindowEvent(type, listener, options) {
  let listenerRef = useLatestValue(listener);
  (0, import_react19.useEffect)(() => {
    function handler(event) {
      listenerRef.current(event);
    }
    window.addEventListener(type, handler, options);
    return () => window.removeEventListener(type, handler, options);
  }, [type, options]);
}

// src/hooks/use-tab-direction.ts
function useTabDirection() {
  let direction = (0, import_react20.useRef)(0 /* Forwards */);
  useWindowEvent("keydown", (event) => {
    if (event.key === "Tab") {
      direction.current = event.shiftKey ? 1 /* Backwards */ : 0 /* Forwards */;
    }
  }, true);
  return direction;
}

// src/hooks/use-is-mounted.ts
var import_react21 = require("react");
function useIsMounted() {
  let mounted = (0, import_react21.useRef)(false);
  useIsoMorphicEffect(() => {
    mounted.current = true;
    return () => {
      mounted.current = false;
    };
  }, []);
  return mounted;
}

// src/hooks/use-owner.ts
var import_react22 = require("react");
function useOwnerDocument(...args) {
  return (0, import_react22.useMemo)(() => getOwnerDocument(...args), [...args]);
}

// src/hooks/use-event-listener.ts
var import_react23 = require("react");
function useEventListener(element, type, listener, options) {
  let listenerRef = useLatestValue(listener);
  (0, import_react23.useEffect)(() => {
    element = element != null ? element : window;
    function handler(event) {
      listenerRef.current(event);
    }
    element.addEventListener(type, handler, options);
    return () => element.removeEventListener(type, handler, options);
  }, [element, type, options]);
}

// src/components/focus-trap/focus-trap.tsx
var DEFAULT_FOCUS_TRAP_TAG = "div";
var Features3 = /* @__PURE__ */ ((Features4) => {
  Features4[Features4["None"] = 1] = "None";
  Features4[Features4["InitialFocus"] = 2] = "InitialFocus";
  Features4[Features4["TabLock"] = 4] = "TabLock";
  Features4[Features4["FocusLock"] = 8] = "FocusLock";
  Features4[Features4["RestoreFocus"] = 16] = "RestoreFocus";
  Features4[Features4["All"] = 30] = "All";
  return Features4;
})(Features3 || {});
var FocusTrap = Object.assign(forwardRefWithAs(function FocusTrap2(props, ref) {
  let container = (0, import_react24.useRef)(null);
  let focusTrapRef = useSyncRefs(container, ref);
  let { initialFocus, containers, features = 30 /* All */, ...theirProps } = props;
  if (!useServerHandoffComplete()) {
    features = 1 /* None */;
  }
  let ownerDocument = useOwnerDocument(container);
  useRestoreFocus({ ownerDocument }, Boolean(features & 16 /* RestoreFocus */));
  let previousActiveElement = useInitialFocus({ ownerDocument, container, initialFocus }, Boolean(features & 2 /* InitialFocus */));
  useFocusLock({ ownerDocument, container, containers, previousActiveElement }, Boolean(features & 8 /* FocusLock */));
  let direction = useTabDirection();
  let handleFocus = useEvent((e) => {
    let el = container.current;
    if (!el)
      return;
    let wrapper = false ? microTask : (cb) => cb();
    wrapper(() => {
      match(direction.current, {
        [0 /* Forwards */]: () => focusIn(el, 1 /* First */, { skipElements: [e.relatedTarget] }),
        [1 /* Backwards */]: () => focusIn(el, 8 /* Last */, { skipElements: [e.relatedTarget] })
      });
    });
  });
  let d = useDisposables();
  let recentlyUsedTabKey = (0, import_react24.useRef)(false);
  let ourProps = {
    ref: focusTrapRef,
    onKeyDown(e) {
      if (e.key == "Tab") {
        recentlyUsedTabKey.current = true;
        d.requestAnimationFrame(() => {
          recentlyUsedTabKey.current = false;
        });
      }
    },
    onBlur(e) {
      let allContainers = new Set(containers == null ? void 0 : containers.current);
      allContainers.add(container);
      let relatedTarget = e.relatedTarget;
      if (!relatedTarget)
        return;
      if (relatedTarget.dataset.headlessuiFocusGuard === "true") {
        return;
      }
      if (!contains(allContainers, relatedTarget)) {
        if (recentlyUsedTabKey.current) {
          focusIn(container.current, match(direction.current, {
            [0 /* Forwards */]: () => 4 /* Next */,
            [1 /* Backwards */]: () => 2 /* Previous */
          }) | 16 /* WrapAround */, { relativeTo: e.target });
        } else if (e.target instanceof HTMLElement) {
          focusElement(e.target);
        }
      }
    }
  };
  return /* @__PURE__ */ import_react24.default.createElement(import_react24.default.Fragment, null, Boolean(features & 4 /* TabLock */) && /* @__PURE__ */ import_react24.default.createElement(Hidden, {
    as: "button",
    type: "button",
    "data-headlessui-focus-guard": true,
    onFocus: handleFocus,
    features: 2 /* Focusable */
  }), render({
    ourProps,
    theirProps,
    defaultTag: DEFAULT_FOCUS_TRAP_TAG,
    name: "FocusTrap"
  }), Boolean(features & 4 /* TabLock */) && /* @__PURE__ */ import_react24.default.createElement(Hidden, {
    as: "button",
    type: "button",
    "data-headlessui-focus-guard": true,
    onFocus: handleFocus,
    features: 2 /* Focusable */
  }));
}), { features: Features3 });
function useRestoreFocus({ ownerDocument }, enabled) {
  let restoreElement = (0, import_react24.useRef)(null);
  useEventListener(ownerDocument == null ? void 0 : ownerDocument.defaultView, "focusout", (event) => {
    if (!enabled)
      return;
    if (restoreElement.current)
      return;
    restoreElement.current = event.target;
  }, true);
  useWatch(() => {
    if (enabled)
      return;
    if ((ownerDocument == null ? void 0 : ownerDocument.activeElement) === (ownerDocument == null ? void 0 : ownerDocument.body)) {
      focusElement(restoreElement.current);
    }
    restoreElement.current = null;
  }, [enabled]);
  let trulyUnmounted = (0, import_react24.useRef)(false);
  (0, import_react24.useEffect)(() => {
    trulyUnmounted.current = false;
    return () => {
      trulyUnmounted.current = true;
      microTask(() => {
        if (!trulyUnmounted.current)
          return;
        focusElement(restoreElement.current);
        restoreElement.current = null;
      });
    };
  }, []);
}
function useInitialFocus({
  ownerDocument,
  container,
  initialFocus
}, enabled) {
  let previousActiveElement = (0, import_react24.useRef)(null);
  let mounted = useIsMounted();
  useWatch(() => {
    if (!enabled)
      return;
    let containerElement = container.current;
    if (!containerElement)
      return;
    microTask(() => {
      if (!mounted.current) {
        return;
      }
      let activeElement = ownerDocument == null ? void 0 : ownerDocument.activeElement;
      if (initialFocus == null ? void 0 : initialFocus.current) {
        if ((initialFocus == null ? void 0 : initialFocus.current) === activeElement) {
          previousActiveElement.current = activeElement;
          return;
        }
      } else if (containerElement.contains(activeElement)) {
        previousActiveElement.current = activeElement;
        return;
      }
      if (initialFocus == null ? void 0 : initialFocus.current) {
        focusElement(initialFocus.current);
      } else {
        if (focusIn(containerElement, 1 /* First */) === 0 /* Error */) {
          console.warn("There are no focusable elements inside the <FocusTrap />");
        }
      }
      previousActiveElement.current = ownerDocument == null ? void 0 : ownerDocument.activeElement;
    });
  }, [enabled]);
  return previousActiveElement;
}
function useFocusLock({
  ownerDocument,
  container,
  containers,
  previousActiveElement
}, enabled) {
  let mounted = useIsMounted();
  useEventListener(ownerDocument == null ? void 0 : ownerDocument.defaultView, "focus", (event) => {
    if (!enabled)
      return;
    if (!mounted.current)
      return;
    let allContainers = new Set(containers == null ? void 0 : containers.current);
    allContainers.add(container);
    let previous = previousActiveElement.current;
    if (!previous)
      return;
    let toElement = event.target;
    if (toElement && toElement instanceof HTMLElement) {
      if (!contains(allContainers, toElement)) {
        event.preventDefault();
        event.stopPropagation();
        focusElement(previous);
      } else {
        previousActiveElement.current = toElement;
        focusElement(toElement);
      }
    } else {
      focusElement(previousActiveElement.current);
    }
  }, true);
}
function contains(containers, element) {
  var _a2;
  for (let container of containers) {
    if ((_a2 = container.current) == null ? void 0 : _a2.contains(element))
      return true;
  }
  return false;
}

// src/hooks/use-inert-others.ts
var interactables = /* @__PURE__ */ new Set();
var originals = /* @__PURE__ */ new Map();
function inert(element) {
  element.setAttribute("aria-hidden", "true");
  element.inert = true;
}
function restore(element) {
  let original = originals.get(element);
  if (!original)
    return;
  if (original["aria-hidden"] === null)
    element.removeAttribute("aria-hidden");
  else
    element.setAttribute("aria-hidden", original["aria-hidden"]);
  element.inert = original.inert;
}
function useInertOthers(container, enabled = true) {
  useIsoMorphicEffect(() => {
    if (!enabled)
      return;
    if (!container.current)
      return;
    let element = container.current;
    let ownerDocument = getOwnerDocument(element);
    if (!ownerDocument)
      return;
    interactables.add(element);
    for (let original of originals.keys()) {
      if (original.contains(element)) {
        restore(original);
        originals.delete(original);
      }
    }
    ownerDocument.querySelectorAll("body > *").forEach((child) => {
      if (!(child instanceof HTMLElement))
        return;
      for (let interactable of interactables) {
        if (child.contains(interactable))
          return;
      }
      if (interactables.size === 1) {
        originals.set(child, {
          "aria-hidden": child.getAttribute("aria-hidden"),
          inert: child.inert
        });
        inert(child);
      }
    });
    return () => {
      interactables.delete(element);
      if (interactables.size > 0) {
        ownerDocument.querySelectorAll("body > *").forEach((child) => {
          if (!(child instanceof HTMLElement))
            return;
          if (originals.has(child))
            return;
          for (let interactable of interactables) {
            if (child.contains(interactable))
              return;
          }
          originals.set(child, {
            "aria-hidden": child.getAttribute("aria-hidden"),
            inert: child.inert
          });
          inert(child);
        });
      } else {
        for (let element2 of originals.keys()) {
          restore(element2);
          originals.delete(element2);
        }
      }
    };
  }, [enabled]);
}

// src/components/portal/portal.tsx
var import_react26 = __toESM(require("react"), 1);
var import_react_dom = require("react-dom");

// src/internal/portal-force-root.tsx
var import_react25 = __toESM(require("react"), 1);
var ForcePortalRootContext = (0, import_react25.createContext)(false);
function usePortalRoot() {
  return (0, import_react25.useContext)(ForcePortalRootContext);
}
function ForcePortalRoot(props) {
  return /* @__PURE__ */ import_react25.default.createElement(ForcePortalRootContext.Provider, {
    value: props.force
  }, props.children);
}

// src/components/portal/portal.tsx
function usePortalTarget(ref) {
  let forceInRoot = usePortalRoot();
  let groupTarget = (0, import_react26.useContext)(PortalGroupContext);
  let ownerDocument = useOwnerDocument(ref);
  let [target, setTarget] = (0, import_react26.useState)(() => {
    if (!forceInRoot && groupTarget !== null)
      return null;
    if (isServer)
      return null;
    let existingRoot = ownerDocument == null ? void 0 : ownerDocument.getElementById("headlessui-portal-root");
    if (existingRoot)
      return existingRoot;
    if (ownerDocument === null)
      return null;
    let root = ownerDocument.createElement("div");
    root.setAttribute("id", "headlessui-portal-root");
    return ownerDocument.body.appendChild(root);
  });
  (0, import_react26.useEffect)(() => {
    if (target === null)
      return;
    if (!(ownerDocument == null ? void 0 : ownerDocument.body.contains(target))) {
      ownerDocument == null ? void 0 : ownerDocument.body.appendChild(target);
    }
  }, [target, ownerDocument]);
  (0, import_react26.useEffect)(() => {
    if (forceInRoot)
      return;
    if (groupTarget === null)
      return;
    setTarget(groupTarget.current);
  }, [groupTarget, setTarget, forceInRoot]);
  return target;
}
var DEFAULT_PORTAL_TAG = import_react26.Fragment;
var PortalRoot = forwardRefWithAs(function Portal(props, ref) {
  let theirProps = props;
  let internalPortalRootRef = (0, import_react26.useRef)(null);
  let portalRef = useSyncRefs(optionalRef((ref2) => {
    internalPortalRootRef.current = ref2;
  }), ref);
  let ownerDocument = useOwnerDocument(internalPortalRootRef);
  let target = usePortalTarget(internalPortalRootRef);
  let [element] = (0, import_react26.useState)(() => {
    var _a2;
    return isServer ? null : (_a2 = ownerDocument == null ? void 0 : ownerDocument.createElement("div")) != null ? _a2 : null;
  });
  let ready = useServerHandoffComplete();
  let trulyUnmounted = (0, import_react26.useRef)(false);
  useIsoMorphicEffect(() => {
    trulyUnmounted.current = false;
    if (!target || !element)
      return;
    if (!target.contains(element)) {
      element.setAttribute("data-headlessui-portal", "");
      target.appendChild(element);
    }
    return () => {
      trulyUnmounted.current = true;
      microTask(() => {
        var _a2;
        if (!trulyUnmounted.current)
          return;
        if (!target || !element)
          return;
        target.removeChild(element);
        if (target.childNodes.length <= 0) {
          (_a2 = target.parentElement) == null ? void 0 : _a2.removeChild(target);
        }
      });
    };
  }, [target, element]);
  if (!ready)
    return null;
  let ourProps = { ref: portalRef };
  return !target || !element ? null : (0, import_react_dom.createPortal)(render({
    ourProps,
    theirProps,
    defaultTag: DEFAULT_PORTAL_TAG,
    name: "Portal"
  }), element);
});
var DEFAULT_GROUP_TAG = import_react26.Fragment;
var PortalGroupContext = (0, import_react26.createContext)(null);
var Group = forwardRefWithAs(function Group2(props, ref) {
  let { target, ...theirProps } = props;
  let groupRef = useSyncRefs(ref);
  let ourProps = { ref: groupRef };
  return /* @__PURE__ */ import_react26.default.createElement(PortalGroupContext.Provider, {
    value: target
  }, render({
    ourProps,
    theirProps,
    defaultTag: DEFAULT_GROUP_TAG,
    name: "Popover.Group"
  }));
});
var Portal2 = Object.assign(PortalRoot, { Group });

// src/components/description/description.tsx
var import_react27 = __toESM(require("react"), 1);
var DescriptionContext = (0, import_react27.createContext)(null);
function useDescriptionContext() {
  let context = (0, import_react27.useContext)(DescriptionContext);
  if (context === null) {
    let err = new Error("You used a <Description /> component, but it is not inside a relevant parent.");
    if (Error.captureStackTrace)
      Error.captureStackTrace(err, useDescriptionContext);
    throw err;
  }
  return context;
}
function useDescriptions() {
  let [descriptionIds, setDescriptionIds] = (0, import_react27.useState)([]);
  return [
    descriptionIds.length > 0 ? descriptionIds.join(" ") : void 0,
    (0, import_react27.useMemo)(() => {
      return function DescriptionProvider(props) {
        let register = useEvent((value) => {
          setDescriptionIds((existing) => [...existing, value]);
          return () => setDescriptionIds((existing) => {
            let clone = existing.slice();
            let idx = clone.indexOf(value);
            if (idx !== -1)
              clone.splice(idx, 1);
            return clone;
          });
        });
        let contextBag = (0, import_react27.useMemo)(() => ({ register, slot: props.slot, name: props.name, props: props.props }), [register, props.slot, props.name, props.props]);
        return /* @__PURE__ */ import_react27.default.createElement(DescriptionContext.Provider, {
          value: contextBag
        }, props.children);
      };
    }, [setDescriptionIds])
  ];
}
var DEFAULT_DESCRIPTION_TAG = "p";
var Description = forwardRefWithAs(function Description2(props, ref) {
  let internalId = useId();
  let { id: id2 = `headlessui-description-${internalId}`, ...theirProps } = props;
  let context = useDescriptionContext();
  let descriptionRef = useSyncRefs(ref);
  useIsoMorphicEffect(() => context.register(id2), [id2, context.register]);
  let ourProps = { ref: descriptionRef, ...context.props, id: id2 };
  return render({
    ourProps,
    theirProps,
    slot: context.slot || {},
    defaultTag: DEFAULT_DESCRIPTION_TAG,
    name: context.name || "Description"
  });
});

// src/internal/stack-context.tsx
var import_react28 = __toESM(require("react"), 1);
var StackContext = (0, import_react28.createContext)(() => {
});
StackContext.displayName = "StackContext";
function useStackContext() {
  return (0, import_react28.useContext)(StackContext);
}
function StackProvider({
  children,
  onUpdate,
  type,
  element,
  enabled
}) {
  let parentUpdate = useStackContext();
  let notify = useEvent((...args) => {
    onUpdate == null ? void 0 : onUpdate(...args);
    parentUpdate(...args);
  });
  useIsoMorphicEffect(() => {
    let shouldNotify = enabled === void 0 || enabled === true;
    shouldNotify && notify(0 /* Add */, type, element);
    return () => {
      shouldNotify && notify(1 /* Remove */, type, element);
    };
  }, [notify, type, element, enabled]);
  return /* @__PURE__ */ import_react28.default.createElement(StackContext.Provider, {
    value: notify
  }, children);
}

// src/utils/platform.ts
function isIOS() {
  return /iPhone/gi.test(window.navigator.platform) || /Mac/gi.test(window.navigator.platform) && window.navigator.maxTouchPoints > 0;
}

// src/components/dialog/dialog.tsx
var reducers2 = {
  [0 /* SetTitleId */](state2, action) {
    if (state2.titleId === action.id)
      return state2;
    return { ...state2, titleId: action.id };
  }
};
var DialogContext = (0, import_react29.createContext)(null);
DialogContext.displayName = "DialogContext";
function useDialogContext(component) {
  let context = (0, import_react29.useContext)(DialogContext);
  if (context === null) {
    let err = new Error(`<${component} /> is missing a parent <Dialog /> component.`);
    if (Error.captureStackTrace)
      Error.captureStackTrace(err, useDialogContext);
    throw err;
  }
  return context;
}
function useScrollLock(ownerDocument, enabled, resolveAllowedContainers = () => [document.body]) {
  (0, import_react29.useEffect)(() => {
    var _a2;
    if (!enabled)
      return;
    if (!ownerDocument)
      return;
    let d = disposables();
    let scrollPosition = window.pageYOffset;
    function style(node, property, value) {
      let previous = node.style.getPropertyValue(property);
      Object.assign(node.style, { [property]: value });
      return d.add(() => {
        Object.assign(node.style, { [property]: previous });
      });
    }
    let documentElement = ownerDocument.documentElement;
    let ownerWindow = (_a2 = ownerDocument.defaultView) != null ? _a2 : window;
    let scrollbarWidthBefore = ownerWindow.innerWidth - documentElement.clientWidth;
    style(documentElement, "overflow", "hidden");
    if (scrollbarWidthBefore > 0) {
      let scrollbarWidthAfter = documentElement.clientWidth - documentElement.offsetWidth;
      let scrollbarWidth = scrollbarWidthBefore - scrollbarWidthAfter;
      style(documentElement, "paddingRight", `${scrollbarWidth}px`);
    }
    if (isIOS()) {
      style(ownerDocument.body, "marginTop", `-${scrollPosition}px`);
      window.scrollTo(0, 0);
      let scrollToElement = null;
      d.addEventListener(ownerDocument, "click", (e) => {
        if (e.target instanceof HTMLElement) {
          try {
            let anchor = e.target.closest("a");
            if (!anchor)
              return;
            let { hash } = new URL(anchor.href);
            let el = ownerDocument.querySelector(hash);
            if (el && !resolveAllowedContainers().some((container) => container.contains(el))) {
              scrollToElement = el;
            }
          } catch (err) {
          }
        }
      }, true);
      d.addEventListener(ownerDocument, "touchmove", (e) => {
        if (e.target instanceof HTMLElement && !resolveAllowedContainers().some((container) => container.contains(e.target))) {
          e.preventDefault();
        }
      }, { passive: false });
      d.add(() => {
        window.scrollTo(0, window.pageYOffset + scrollPosition);
        if (scrollToElement && scrollToElement.isConnected) {
          scrollToElement.scrollIntoView({ block: "nearest" });
          scrollToElement = null;
        }
      });
    }
    return d.dispose;
  }, [ownerDocument, enabled]);
}
function stateReducer2(state2, action) {
  return match(action.type, reducers2, state2, action);
}
var DEFAULT_DIALOG_TAG = "div";
var DialogRenderFeatures = 1 /* RenderStrategy */ | 2 /* Static */;
var DialogRoot = forwardRefWithAs(function Dialog(props, ref) {
  let internalId = useId();
  let {
    id: id2 = `headlessui-dialog-${internalId}`,
    open,
    onClose,
    initialFocus,
    __demoMode = false,
    ...theirProps
  } = props;
  let [nestedDialogCount, setNestedDialogCount] = (0, import_react29.useState)(0);
  let usesOpenClosedState = useOpenClosed();
  if (open === void 0 && usesOpenClosedState !== null) {
    open = match(usesOpenClosedState, {
      [0 /* Open */]: true,
      [1 /* Closed */]: false
    });
  }
  let containers = (0, import_react29.useRef)(/* @__PURE__ */ new Set());
  let internalDialogRef = (0, import_react29.useRef)(null);
  let dialogRef = useSyncRefs(internalDialogRef, ref);
  let mainTreeNode = (0, import_react29.useRef)(null);
  let ownerDocument = useOwnerDocument(internalDialogRef);
  let hasOpen = props.hasOwnProperty("open") || usesOpenClosedState !== null;
  let hasOnClose = props.hasOwnProperty("onClose");
  if (!hasOpen && !hasOnClose) {
    throw new Error(`You have to provide an \`open\` and an \`onClose\` prop to the \`Dialog\` component.`);
  }
  if (!hasOpen) {
    throw new Error(`You provided an \`onClose\` prop to the \`Dialog\`, but forgot an \`open\` prop.`);
  }
  if (!hasOnClose) {
    throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but forgot an \`onClose\` prop.`);
  }
  if (typeof open !== "boolean") {
    throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${open}`);
  }
  if (typeof onClose !== "function") {
    throw new Error(`You provided an \`onClose\` prop to the \`Dialog\`, but the value is not a function. Received: ${onClose}`);
  }
  let dialogState = open ? 0 /* Open */ : 1 /* Closed */;
  let [state2, dispatch] = (0, import_react29.useReducer)(stateReducer2, {
    titleId: null,
    descriptionId: null,
    panelRef: (0, import_react29.createRef)()
  });
  let close = useEvent(() => onClose(false));
  let setTitleId = useEvent((id3) => dispatch({ type: 0 /* SetTitleId */, id: id3 }));
  let ready = useServerHandoffComplete();
  let enabled = ready ? __demoMode ? false : dialogState === 0 /* Open */ : false;
  let hasNestedDialogs = nestedDialogCount > 1;
  let hasParentDialog = (0, import_react29.useContext)(DialogContext) !== null;
  let position = !hasNestedDialogs ? "leaf" : "parent";
  useInertOthers(internalDialogRef, hasNestedDialogs ? enabled : false);
  let resolveContainers = useEvent(() => {
    var _a2, _b;
    let rootContainers = Array.from((_a2 = ownerDocument == null ? void 0 : ownerDocument.querySelectorAll("body > *, [data-headlessui-portal]")) != null ? _a2 : []).filter((container) => {
      if (!(container instanceof HTMLElement))
        return false;
      if (container.contains(mainTreeNode.current))
        return false;
      if (state2.panelRef.current && container.contains(state2.panelRef.current))
        return false;
      return true;
    });
    return [...rootContainers, (_b = state2.panelRef.current) != null ? _b : internalDialogRef.current];
  });
  useOutsideClick(() => resolveContainers(), close, enabled && !hasNestedDialogs);
  useEventListener(ownerDocument == null ? void 0 : ownerDocument.defaultView, "keydown", (event) => {
    if (event.defaultPrevented)
      return;
    if (event.key !== "Escape" /* Escape */)
      return;
    if (dialogState !== 0 /* Open */)
      return;
    if (hasNestedDialogs)
      return;
    event.preventDefault();
    event.stopPropagation();
    close();
  });
  useScrollLock(ownerDocument, dialogState === 0 /* Open */ && !hasParentDialog, resolveContainers);
  (0, import_react29.useEffect)(() => {
    if (dialogState !== 0 /* Open */)
      return;
    if (!internalDialogRef.current)
      return;
    let observer = new IntersectionObserver((entries) => {
      for (let entry of entries) {
        if (entry.boundingClientRect.x === 0 && entry.boundingClientRect.y === 0 && entry.boundingClientRect.width === 0 && entry.boundingClientRect.height === 0) {
          close();
        }
      }
    });
    observer.observe(internalDialogRef.current);
    return () => observer.disconnect();
  }, [dialogState, internalDialogRef, close]);
  let [describedby, DescriptionProvider] = useDescriptions();
  let contextBag = (0, import_react29.useMemo)(() => [{ dialogState, close, setTitleId }, state2], [dialogState, state2, close, setTitleId]);
  let slot = (0, import_react29.useMemo)(() => ({ open: dialogState === 0 /* Open */ }), [dialogState]);
  let ourProps = {
    ref: dialogRef,
    id: id2,
    role: "dialog",
    "aria-modal": dialogState === 0 /* Open */ ? true : void 0,
    "aria-labelledby": state2.titleId,
    "aria-describedby": describedby
  };
  return /* @__PURE__ */ import_react29.default.createElement(StackProvider, {
    type: "Dialog",
    enabled: dialogState === 0 /* Open */,
    element: internalDialogRef,
    onUpdate: useEvent((message, type, element) => {
      if (type !== "Dialog")
        return;
      match(message, {
        [0 /* Add */]() {
          containers.current.add(element);
          setNestedDialogCount((count) => count + 1);
        },
        [1 /* Remove */]() {
          containers.current.add(element);
          setNestedDialogCount((count) => count - 1);
        }
      });
    })
  }, /* @__PURE__ */ import_react29.default.createElement(ForcePortalRoot, {
    force: true
  }, /* @__PURE__ */ import_react29.default.createElement(Portal2, null, /* @__PURE__ */ import_react29.default.createElement(DialogContext.Provider, {
    value: contextBag
  }, /* @__PURE__ */ import_react29.default.createElement(Portal2.Group, {
    target: internalDialogRef
  }, /* @__PURE__ */ import_react29.default.createElement(ForcePortalRoot, {
    force: false
  }, /* @__PURE__ */ import_react29.default.createElement(DescriptionProvider, {
    slot,
    name: "Dialog.Description"
  }, /* @__PURE__ */ import_react29.default.createElement(FocusTrap, {
    initialFocus,
    containers,
    features: enabled ? match(position, {
      parent: FocusTrap.features.RestoreFocus,
      leaf: FocusTrap.features.All & ~FocusTrap.features.FocusLock
    }) : FocusTrap.features.None
  }, render({
    ourProps,
    theirProps,
    slot,
    defaultTag: DEFAULT_DIALOG_TAG,
    features: DialogRenderFeatures,
    visible: dialogState === 0 /* Open */,
    name: "Dialog"
  })))))))), /* @__PURE__ */ import_react29.default.createElement(Hidden, {
    features: 4 /* Hidden */,
    ref: mainTreeNode
  }));
});
var DEFAULT_OVERLAY_TAG = "div";
var Overlay = forwardRefWithAs(function Overlay2(props, ref) {
  let internalId = useId();
  let { id: id2 = `headlessui-dialog-overlay-${internalId}`, ...theirProps } = props;
  let [{ dialogState, close }] = useDialogContext("Dialog.Overlay");
  let overlayRef = useSyncRefs(ref);
  let handleClick = useEvent((event) => {
    if (event.target !== event.currentTarget)
      return;
    if (isDisabledReactIssue7711(event.currentTarget))
      return event.preventDefault();
    event.preventDefault();
    event.stopPropagation();
    close();
  });
  let slot = (0, import_react29.useMemo)(() => ({ open: dialogState === 0 /* Open */ }), [dialogState]);
  let ourProps = {
    ref: overlayRef,
    id: id2,
    "aria-hidden": true,
    onClick: handleClick
  };
  return render({
    ourProps,
    theirProps,
    slot,
    defaultTag: DEFAULT_OVERLAY_TAG,
    name: "Dialog.Overlay"
  });
});
var DEFAULT_BACKDROP_TAG = "div";
var Backdrop = forwardRefWithAs(function Backdrop2(props, ref) {
  let internalId = useId();
  let { id: id2 = `headlessui-dialog-backdrop-${internalId}`, ...theirProps } = props;
  let [{ dialogState }, state2] = useDialogContext("Dialog.Backdrop");
  let backdropRef = useSyncRefs(ref);
  (0, import_react29.useEffect)(() => {
    if (state2.panelRef.current === null) {
      throw new Error(`A <Dialog.Backdrop /> component is being used, but a <Dialog.Panel /> component is missing.`);
    }
  }, [state2.panelRef]);
  let slot = (0, import_react29.useMemo)(() => ({ open: dialogState === 0 /* Open */ }), [dialogState]);
  let ourProps = {
    ref: backdropRef,
    id: id2,
    "aria-hidden": true
  };
  return /* @__PURE__ */ import_react29.default.createElement(ForcePortalRoot, {
    force: true
  }, /* @__PURE__ */ import_react29.default.createElement(Portal2, null, render({
    ourProps,
    theirProps,
    slot,
    defaultTag: DEFAULT_BACKDROP_TAG,
    name: "Dialog.Backdrop"
  })));
});
var DEFAULT_PANEL_TAG = "div";
var Panel = forwardRefWithAs(function Panel2(props, ref) {
  let internalId = useId();
  let { id: id2 = `headlessui-dialog-panel-${internalId}`, ...theirProps } = props;
  let [{ dialogState }, state2] = useDialogContext("Dialog.Panel");
  let panelRef = useSyncRefs(ref, state2.panelRef);
  let slot = (0, import_react29.useMemo)(() => ({ open: dialogState === 0 /* Open */ }), [dialogState]);
  let handleClick = useEvent((event) => {
    event.stopPropagation();
  });
  let ourProps = {
    ref: panelRef,
    id: id2,
    onClick: handleClick
  };
  return render({
    ourProps,
    theirProps,
    slot,
    defaultTag: DEFAULT_PANEL_TAG,
    name: "Dialog.Panel"
  });
});
var DEFAULT_TITLE_TAG = "h2";
var Title = forwardRefWithAs(function Title2(props, ref) {
  let internalId = useId();
  let { id: id2 = `headlessui-dialog-title-${internalId}`, ...theirProps } = props;
  let [{ dialogState, setTitleId }] = useDialogContext("Dialog.Title");
  let titleRef = useSyncRefs(ref);
  (0, import_react29.useEffect)(() => {
    setTitleId(id2);
    return () => setTitleId(null);
  }, [id2, setTitleId]);
  let slot = (0, import_react29.useMemo)(() => ({ open: dialogState === 0 /* Open */ }), [dialogState]);
  let ourProps = { ref: titleRef, id: id2 };
  return render({
    ourProps,
    theirProps,
    slot,
    defaultTag: DEFAULT_TITLE_TAG,
    name: "Dialog.Title"
  });
});
var Dialog2 = Object.assign(DialogRoot, { Backdrop, Panel, Overlay, Title, Description });

// src/components/disclosure/disclosure.tsx
var import_react30 = __toESM(require("react"), 1);
var reducers3 = {
  [0 /* ToggleDisclosure */]: (state2) => ({
    ...state2,
    disclosureState: match(state2.disclosureState, {
      [0 /* Open */]: 1 /* Closed */,
      [1 /* Closed */]: 0 /* Open */
    })
  }),
  [1 /* CloseDisclosure */]: (state2) => {
    if (state2.disclosureState === 1 /* Closed */)
      return state2;
    return { ...state2, disclosureState: 1 /* Closed */ };
  },
  [4 /* LinkPanel */](state2) {
    if (state2.linkedPanel === true)
      return state2;
    return { ...state2, linkedPanel: true };
  },
  [5 /* UnlinkPanel */](state2) {
    if (state2.linkedPanel === false)
      return state2;
    return { ...state2, linkedPanel: false };
  },
  [2 /* SetButtonId */](state2, action) {
    if (state2.buttonId === action.buttonId)
      return state2;
    return { ...state2, buttonId: action.buttonId };
  },
  [3 /* SetPanelId */](state2, action) {
    if (state2.panelId === action.panelId)
      return state2;
    return { ...state2, panelId: action.panelId };
  }
};
var DisclosureContext = (0, import_react30.createContext)(null);
DisclosureContext.displayName = "DisclosureContext";
function useDisclosureContext(component) {
  let context = (0, import_react30.useContext)(DisclosureContext);
  if (context === null) {
    let err = new Error(`<${component} /> is missing a parent <Disclosure /> component.`);
    if (Error.captureStackTrace)
      Error.captureStackTrace(err, useDisclosureContext);
    throw err;
  }
  return context;
}
var DisclosureAPIContext = (0, import_react30.createContext)(null);
DisclosureAPIContext.displayName = "DisclosureAPIContext";
function useDisclosureAPIContext(component) {
  let context = (0, import_react30.useContext)(DisclosureAPIContext);
  if (context === null) {
    let err = new Error(`<${component} /> is missing a parent <Disclosure /> component.`);
    if (Error.captureStackTrace)
      Error.captureStackTrace(err, useDisclosureAPIContext);
    throw err;
  }
  return context;
}
var DisclosurePanelContext = (0, import_react30.createContext)(null);
DisclosurePanelContext.displayName = "DisclosurePanelContext";
function useDisclosurePanelContext() {
  return (0, import_react30.useContext)(DisclosurePanelContext);
}
function stateReducer3(state2, action) {
  return match(action.type, reducers3, state2, action);
}
var DEFAULT_DISCLOSURE_TAG = import_react30.Fragment;
var DisclosureRoot = forwardRefWithAs(function Disclosure(props, ref) {
  let { defaultOpen = false, ...theirProps } = props;
  let internalDisclosureRef = (0, import_react30.useRef)(null);
  let disclosureRef = useSyncRefs(ref, optionalRef((ref2) => {
    internalDisclosureRef.current = ref2;
  }, props.as === void 0 || props.as === import_react30.Fragment));
  let panelRef = (0, import_react30.useRef)(null);
  let buttonRef = (0, import_react30.useRef)(null);
  let reducerBag = (0, import_react30.useReducer)(stateReducer3, {
    disclosureState: defaultOpen ? 0 /* Open */ : 1 /* Closed */,
    linkedPanel: false,
    buttonRef,
    panelRef,
    buttonId: null,
    panelId: null
  });
  let [{ disclosureState, buttonId }, dispatch] = reducerBag;
  let close = useEvent((focusableElement) => {
    dispatch({ type: 1 /* CloseDisclosure */ });
    let ownerDocument = getOwnerDocument(internalDisclosureRef);
    if (!ownerDocument)
      return;
    if (!buttonId)
      return;
    let restoreElement = (() => {
      if (!focusableElement)
        return ownerDocument.getElementById(buttonId);
      if (focusableElement instanceof HTMLElement)
        return focusableElement;
      if (focusableElement.current instanceof HTMLElement)
        return focusableElement.current;
      return ownerDocument.getElementById(buttonId);
    })();
    restoreElement == null ? void 0 : restoreElement.focus();
  });
  let api = (0, import_react30.useMemo)(() => ({ close }), [close]);
  let slot = (0, import_react30.useMemo)(() => ({ open: disclosureState === 0 /* Open */, close }), [disclosureState, close]);
  let ourProps = {
    ref: disclosureRef
  };
  return /* @__PURE__ */ import_react30.default.createElement(DisclosureContext.Provider, {
    value: reducerBag
  }, /* @__PURE__ */ import_react30.default.createElement(DisclosureAPIContext.Provider, {
    value: api
  }, /* @__PURE__ */ import_react30.default.createElement(OpenClosedProvider, {
    value: match(disclosureState, {
      [0 /* Open */]: 0 /* Open */,
      [1 /* Closed */]: 1 /* Closed */
    })
  }, render({
    ourProps,
    theirProps,
    slot,
    defaultTag: DEFAULT_DISCLOSURE_TAG,
    name: "Disclosure"
  }))));
});
var DEFAULT_BUTTON_TAG2 = "button";
var Button3 = forwardRefWithAs(function Button4(props, ref) {
  let internalId = useId();
  let { id: id2 = `headlessui-disclosure-button-${internalId}`, ...theirProps } = props;
  let [state2, dispatch] = useDisclosureContext("Disclosure.Button");
  let panelContext = useDisclosurePanelContext();
  let isWithinPanel = panelContext === null ? false : panelContext === state2.panelId;
  let internalButtonRef = (0, import_react30.useRef)(null);
  let buttonRef = useSyncRefs(internalButtonRef, ref, !isWithinPanel ? state2.buttonRef : null);
  (0, import_react30.useEffect)(() => {
    if (isWithinPanel)
      return;
    dispatch({ type: 2 /* SetButtonId */, buttonId: id2 });
    return () => {
      dispatch({ type: 2 /* SetButtonId */, buttonId: null });
    };
  }, [id2, dispatch, isWithinPanel]);
  let handleKeyDown = useEvent((event) => {
    var _a2;
    if (isWithinPanel) {
      if (state2.disclosureState === 1 /* Closed */)
        return;
      switch (event.key) {
        case " " /* Space */:
        case "Enter" /* Enter */:
          event.preventDefault();
          event.stopPropagation();
          dispatch({ type: 0 /* ToggleDisclosure */ });
          (_a2 = state2.buttonRef.current) == null ? void 0 : _a2.focus();
          break;
      }
    } else {
      switch (event.key) {
        case " " /* Space */:
        case "Enter" /* Enter */:
          event.preventDefault();
          event.stopPropagation();
          dispatch({ type: 0 /* ToggleDisclosure */ });
          break;
      }
    }
  });
  let handleKeyUp = useEvent((event) => {
    switch (event.key) {
      case " " /* Space */:
        event.preventDefault();
        break;
    }
  });
  let handleClick = useEvent((event) => {
    var _a2;
    if (isDisabledReactIssue7711(event.currentTarget))
      return;
    if (props.disabled)
      return;
    if (isWithinPanel) {
      dispatch({ type: 0 /* ToggleDisclosure */ });
      (_a2 = state2.buttonRef.current) == null ? void 0 : _a2.focus();
    } else {
      dispatch({ type: 0 /* ToggleDisclosure */ });
    }
  });
  let slot = (0, import_react30.useMemo)(() => ({ open: state2.disclosureState === 0 /* Open */ }), [state2]);
  let type = useResolveButtonType(props, internalButtonRef);
  let ourProps = isWithinPanel ? { ref: buttonRef, type, onKeyDown: handleKeyDown, onClick: handleClick } : {
    ref: buttonRef,
    id: id2,
    type,
    "aria-expanded": props.disabled ? void 0 : state2.disclosureState === 0 /* Open */,
    "aria-controls": state2.linkedPanel ? state2.panelId : void 0,
    onKeyDown: handleKeyDown,
    onKeyUp: handleKeyUp,
    onClick: handleClick
  };
  return render({
    ourProps,
    theirProps,
    slot,
    defaultTag: DEFAULT_BUTTON_TAG2,
    name: "Disclosure.Button"
  });
});
var DEFAULT_PANEL_TAG2 = "div";
var PanelRenderFeatures = 1 /* RenderStrategy */ | 2 /* Static */;
var Panel3 = forwardRefWithAs(function Panel4(props, ref) {
  let internalId = useId();
  let { id: id2 = `headlessui-disclosure-panel-${internalId}`, ...theirProps } = props;
  let [state2, dispatch] = useDisclosureContext("Disclosure.Panel");
  let { close } = useDisclosureAPIContext("Disclosure.Panel");
  let panelRef = useSyncRefs(ref, state2.panelRef, (el) => {
    dispatch({ type: el ? 4 /* LinkPanel */ : 5 /* UnlinkPanel */ });
  });
  (0, import_react30.useEffect)(() => {
    dispatch({ type: 3 /* SetPanelId */, panelId: id2 });
    return () => {
      dispatch({ type: 3 /* SetPanelId */, panelId: null });
    };
  }, [id2, dispatch]);
  let usesOpenClosedState = useOpenClosed();
  let visible = (() => {
    if (usesOpenClosedState !== null) {
      return usesOpenClosedState === 0 /* Open */;
    }
    return state2.disclosureState === 0 /* Open */;
  })();
  let slot = (0, import_react30.useMemo)(() => ({ open: state2.disclosureState === 0 /* Open */, close }), [state2, close]);
  let ourProps = {
    ref: panelRef,
    id: id2
  };
  return /* @__PURE__ */ import_react30.default.createElement(DisclosurePanelContext.Provider, {
    value: state2.panelId
  }, render({
    ourProps,
    theirProps,
    slot,
    defaultTag: DEFAULT_PANEL_TAG2,
    features: PanelRenderFeatures,
    visible,
    name: "Disclosure.Panel"
  }));
});
var Disclosure2 = Object.assign(DisclosureRoot, { Button: Button3, Panel: Panel3 });

// src/components/listbox/listbox.tsx
var import_react31 = __toESM(require("react"), 1);
function adjustOrderedState2(state2, adjustment = (i) => i) {
  let currentActiveOption = state2.activeOptionIndex !== null ? state2.options[state2.activeOptionIndex] : null;
  let sortedOptions = sortByDomNode(adjustment(state2.options.slice()), (option) => option.dataRef.current.domRef.current);
  let adjustedActiveOptionIndex = currentActiveOption ? sortedOptions.indexOf(currentActiveOption) : null;
  if (adjustedActiveOptionIndex === -1) {
    adjustedActiveOptionIndex = null;
  }
  return {
    options: sortedOptions,
    activeOptionIndex: adjustedActiveOptionIndex
  };
}
var reducers4 = {
  [1 /* CloseListbox */](state2) {
    if (state2.dataRef.current.disabled)
      return state2;
    if (state2.listboxState === 1 /* Closed */)
      return state2;
    return { ...state2, activeOptionIndex: null, listboxState: 1 /* Closed */ };
  },
  [0 /* OpenListbox */](state2) {
    if (state2.dataRef.current.disabled)
      return state2;
    if (state2.listboxState === 0 /* Open */)
      return state2;
    let activeOptionIndex = state2.activeOptionIndex;
    let { isSelected } = state2.dataRef.current;
    let optionIdx = state2.options.findIndex((option) => isSelected(option.dataRef.current.value));
    if (optionIdx !== -1) {
      activeOptionIndex = optionIdx;
    }
    return { ...state2, listboxState: 0 /* Open */, activeOptionIndex };
  },
  [2 /* GoToOption */](state2, action) {
    var _a2;
    if (state2.dataRef.current.disabled)
      return state2;
    if (state2.listboxState === 1 /* Closed */)
      return state2;
    let adjustedState = adjustOrderedState2(state2);
    let activeOptionIndex = calculateActiveIndex(action, {
      resolveItems: () => adjustedState.options,
      resolveActiveIndex: () => adjustedState.activeOptionIndex,
      resolveId: (option) => option.id,
      resolveDisabled: (option) => option.dataRef.current.disabled
    });
    return {
      ...state2,
      ...adjustedState,
      searchQuery: "",
      activeOptionIndex,
      activationTrigger: (_a2 = action.trigger) != null ? _a2 : 1 /* Other */
    };
  },
  [3 /* Search */]: (state2, action) => {
    if (state2.dataRef.current.disabled)
      return state2;
    if (state2.listboxState === 1 /* Closed */)
      return state2;
    let wasAlreadySearching = state2.searchQuery !== "";
    let offset = wasAlreadySearching ? 0 : 1;
    let searchQuery = state2.searchQuery + action.value.toLowerCase();
    let reOrderedOptions = state2.activeOptionIndex !== null ? state2.options.slice(state2.activeOptionIndex + offset).concat(state2.options.slice(0, state2.activeOptionIndex + offset)) : state2.options;
    let matchingOption = reOrderedOptions.find((option) => {
      var _a2;
      return !option.dataRef.current.disabled && ((_a2 = option.dataRef.current.textValue) == null ? void 0 : _a2.startsWith(searchQuery));
    });
    let matchIdx = matchingOption ? state2.options.indexOf(matchingOption) : -1;
    if (matchIdx === -1 || matchIdx === state2.activeOptionIndex)
      return { ...state2, searchQuery };
    return {
      ...state2,
      searchQuery,
      activeOptionIndex: matchIdx,
      activationTrigger: 1 /* Other */
    };
  },
  [4 /* ClearSearch */](state2) {
    if (state2.dataRef.current.disabled)
      return state2;
    if (state2.listboxState === 1 /* Closed */)
      return state2;
    if (state2.searchQuery === "")
      return state2;
    return { ...state2, searchQuery: "" };
  },
  [5 /* RegisterOption */]: (state2, action) => {
    let option = { id: action.id, dataRef: action.dataRef };
    let adjustedState = adjustOrderedState2(state2, (options) => [...options, option]);
    if (state2.activeOptionIndex === null) {
      if (state2.dataRef.current.isSelected(action.dataRef.current.value)) {
        adjustedState.activeOptionIndex = adjustedState.options.indexOf(option);
      }
    }
    return { ...state2, ...adjustedState };
  },
  [6 /* UnregisterOption */]: (state2, action) => {
    let adjustedState = adjustOrderedState2(state2, (options) => {
      let idx = options.findIndex((a) => a.id === action.id);
      if (idx !== -1)
        options.splice(idx, 1);
      return options;
    });
    return {
      ...state2,
      ...adjustedState,
      activationTrigger: 1 /* Other */
    };
  },
  [7 /* RegisterLabel */]: (state2, action) => {
    return {
      ...state2,
      labelId: action.id
    };
  }
};
var ListboxActionsContext = (0, import_react31.createContext)(null);
ListboxActionsContext.displayName = "ListboxActionsContext";
function useActions2(component) {
  let context = (0, import_react31.useContext)(ListboxActionsContext);
  if (context === null) {
    let err = new Error(`<${component} /> is missing a parent <Listbox /> component.`);
    if (Error.captureStackTrace)
      Error.captureStackTrace(err, useActions2);
    throw err;
  }
  return context;
}
var ListboxDataContext = (0, import_react31.createContext)(null);
ListboxDataContext.displayName = "ListboxDataContext";
function useData2(component) {
  let context = (0, import_react31.useContext)(ListboxDataContext);
  if (context === null) {
    let err = new Error(`<${component} /> is missing a parent <Listbox /> component.`);
    if (Error.captureStackTrace)
      Error.captureStackTrace(err, useData2);
    throw err;
  }
  return context;
}
function stateReducer4(state2, action) {
  return match(action.type, reducers4, state2, action);
}
var DEFAULT_LISTBOX_TAG = import_react31.Fragment;
var ListboxRoot = forwardRefWithAs(function Listbox(props, ref) {
  let {
    value: controlledValue,
    defaultValue,
    name,
    onChange: controlledOnChange,
    by = (a, z) => a === z,
    disabled = false,
    horizontal = false,
    multiple = false,
    ...theirProps
  } = props;
  const orientation = horizontal ? "horizontal" : "vertical";
  let listboxRef = useSyncRefs(ref);
  let [value = multiple ? [] : void 0, theirOnChange] = useControllable(controlledValue, controlledOnChange, defaultValue);
  let [state2, dispatch] = (0, import_react31.useReducer)(stateReducer4, {
    dataRef: (0, import_react31.createRef)(),
    listboxState: 1 /* Closed */,
    options: [],
    searchQuery: "",
    labelId: null,
    activeOptionIndex: null,
    activationTrigger: 1 /* Other */
  });
  let optionsPropsRef = (0, import_react31.useRef)({ static: false, hold: false });
  let labelRef = (0, import_react31.useRef)(null);
  let buttonRef = (0, import_react31.useRef)(null);
  let optionsRef = (0, import_react31.useRef)(null);
  let compare = useEvent(typeof by === "string" ? (a, z) => {
    let property = by;
    return (a == null ? void 0 : a[property]) === (z == null ? void 0 : z[property]);
  } : by);
  let isSelected = (0, import_react31.useCallback)((compareValue) => match(data.mode, {
    [1 /* Multi */]: () => value.some((option) => compare(option, compareValue)),
    [0 /* Single */]: () => compare(value, compareValue)
  }), [value]);
  let data = (0, import_react31.useMemo)(() => ({
    ...state2,
    value,
    disabled,
    mode: multiple ? 1 /* Multi */ : 0 /* Single */,
    orientation,
    compare,
    isSelected,
    optionsPropsRef,
    labelRef,
    buttonRef,
    optionsRef
  }), [value, disabled, multiple, state2]);
  useIsoMorphicEffect(() => {
    state2.dataRef.current = data;
  }, [data]);
  useOutsideClick([data.buttonRef, data.optionsRef], (event, target) => {
    var _a2;
    dispatch({ type: 1 /* CloseListbox */ });
    if (!isFocusableElement(target, 1 /* Loose */)) {
      event.preventDefault();
      (_a2 = data.buttonRef.current) == null ? void 0 : _a2.focus();
    }
  }, data.listboxState === 0 /* Open */);
  let slot = (0, import_react31.useMemo)(() => ({ open: data.listboxState === 0 /* Open */, disabled, value }), [data, disabled, value]);
  let selectOption = useEvent((id2) => {
    let option = data.options.find((item) => item.id === id2);
    if (!option)
      return;
    onChange(option.dataRef.current.value);
  });
  let selectActiveOption = useEvent(() => {
    if (data.activeOptionIndex !== null) {
      let { dataRef, id: id2 } = data.options[data.activeOptionIndex];
      onChange(dataRef.current.value);
      dispatch({ type: 2 /* GoToOption */, focus: 4 /* Specific */, id: id2 });
    }
  });
  let openListbox = useEvent(() => dispatch({ type: 0 /* OpenListbox */ }));
  let closeListbox = useEvent(() => dispatch({ type: 1 /* CloseListbox */ }));
  let goToOption = useEvent((focus, id2, trigger) => {
    if (focus === 4 /* Specific */) {
      return dispatch({ type: 2 /* GoToOption */, focus: 4 /* Specific */, id: id2, trigger });
    }
    return dispatch({ type: 2 /* GoToOption */, focus, trigger });
  });
  let registerOption = useEvent((id2, dataRef) => {
    dispatch({ type: 5 /* RegisterOption */, id: id2, dataRef });
    return () => dispatch({ type: 6 /* UnregisterOption */, id: id2 });
  });
  let registerLabel = useEvent((id2) => {
    dispatch({ type: 7 /* RegisterLabel */, id: id2 });
    return () => dispatch({ type: 7 /* RegisterLabel */, id: null });
  });
  let onChange = useEvent((value2) => {
    return match(data.mode, {
      [0 /* Single */]() {
        return theirOnChange == null ? void 0 : theirOnChange(value2);
      },
      [1 /* Multi */]() {
        let copy = data.value.slice();
        let idx = copy.findIndex((item) => compare(item, value2));
        if (idx === -1) {
          copy.push(value2);
        } else {
          copy.splice(idx, 1);
        }
        return theirOnChange == null ? void 0 : theirOnChange(copy);
      }
    });
  });
  let search = useEvent((value2) => dispatch({ type: 3 /* Search */, value: value2 }));
  let clearSearch = useEvent(() => dispatch({ type: 4 /* ClearSearch */ }));
  let actions = (0, import_react31.useMemo)(() => ({
    onChange,
    registerOption,
    registerLabel,
    goToOption,
    closeListbox,
    openListbox,
    selectActiveOption,
    selectOption,
    search,
    clearSearch
  }), []);
  let ourProps = { ref: listboxRef };
  let form = (0, import_react31.useRef)(null);
  let d = useDisposables();
  (0, import_react31.useEffect)(() => {
    if (!form.current)
      return;
    if (defaultValue === void 0)
      return;
    d.addEventListener(form.current, "reset", () => {
      onChange(defaultValue);
    });
  }, [form, onChange]);
  return /* @__PURE__ */ import_react31.default.createElement(ListboxActionsContext.Provider, {
    value: actions
  }, /* @__PURE__ */ import_react31.default.createElement(ListboxDataContext.Provider, {
    value: data
  }, /* @__PURE__ */ import_react31.default.createElement(OpenClosedProvider, {
    value: match(data.listboxState, {
      [0 /* Open */]: 0 /* Open */,
      [1 /* Closed */]: 1 /* Closed */
    })
  }, name != null && value != null && objectToFormEntries({ [name]: value }).map(([name2, value2], idx) => /* @__PURE__ */ import_react31.default.createElement(Hidden, {
    features: 4 /* Hidden */,
    ref: idx === 0 ? (element) => {
      var _a2;
      form.current = (_a2 = element == null ? void 0 : element.closest("form")) != null ? _a2 : null;
    } : void 0,
    ...compact({
      key: name2,
      as: "input",
      type: "hidden",
      hidden: true,
      readOnly: true,
      name: name2,
      value: value2
    })
  })), render({ ourProps, theirProps, slot, defaultTag: DEFAULT_LISTBOX_TAG, name: "Listbox" }))));
});
var DEFAULT_BUTTON_TAG3 = "button";
var Button5 = forwardRefWithAs(function Button6(props, ref) {
  var _a2;
  let internalId = useId();
  let { id: id2 = `headlessui-listbox-button-${internalId}`, ...theirProps } = props;
  let data = useData2("Listbox.Button");
  let actions = useActions2("Listbox.Button");
  let buttonRef = useSyncRefs(data.buttonRef, ref);
  let d = useDisposables();
  let handleKeyDown = useEvent((event) => {
    switch (event.key) {
      case " " /* Space */:
      case "Enter" /* Enter */:
      case "ArrowDown" /* ArrowDown */:
        event.preventDefault();
        actions.openListbox();
        d.nextFrame(() => {
          if (!data.value)
            actions.goToOption(0 /* First */);
        });
        break;
      case "ArrowUp" /* ArrowUp */:
        event.preventDefault();
        actions.openListbox();
        d.nextFrame(() => {
          if (!data.value)
            actions.goToOption(3 /* Last */);
        });
        break;
    }
  });
  let handleKeyUp = useEvent((event) => {
    switch (event.key) {
      case " " /* Space */:
        event.preventDefault();
        break;
    }
  });
  let handleClick = useEvent((event) => {
    if (isDisabledReactIssue7711(event.currentTarget))
      return event.preventDefault();
    if (data.listboxState === 0 /* Open */) {
      actions.closeListbox();
      d.nextFrame(() => {
        var _a3;
        return (_a3 = data.buttonRef.current) == null ? void 0 : _a3.focus({ preventScroll: true });
      });
    } else {
      event.preventDefault();
      actions.openListbox();
    }
  });
  let labelledby = useComputed(() => {
    if (!data.labelId)
      return void 0;
    return [data.labelId, id2].join(" ");
  }, [data.labelId, id2]);
  let slot = (0, import_react31.useMemo)(() => ({
    open: data.listboxState === 0 /* Open */,
    disabled: data.disabled,
    value: data.value
  }), [data]);
  let ourProps = {
    ref: buttonRef,
    id: id2,
    type: useResolveButtonType(props, data.buttonRef),
    "aria-haspopup": "listbox",
    "aria-controls": (_a2 = data.optionsRef.current) == null ? void 0 : _a2.id,
    "aria-expanded": data.disabled ? void 0 : data.listboxState === 0 /* Open */,
    "aria-labelledby": labelledby,
    disabled: data.disabled,
    onKeyDown: handleKeyDown,
    onKeyUp: handleKeyUp,
    onClick: handleClick
  };
  return render({
    ourProps,
    theirProps,
    slot,
    defaultTag: DEFAULT_BUTTON_TAG3,
    name: "Listbox.Button"
  });
});
var DEFAULT_LABEL_TAG2 = "label";
var Label3 = forwardRefWithAs(function Label4(props, ref) {
  let internalId = useId();
  let { id: id2 = `headlessui-listbox-label-${internalId}`, ...theirProps } = props;
  let data = useData2("Listbox.Label");
  let actions = useActions2("Listbox.Label");
  let labelRef = useSyncRefs(data.labelRef, ref);
  useIsoMorphicEffect(() => actions.registerLabel(id2), [id2]);
  let handleClick = useEvent(() => {
    var _a2;
    return (_a2 = data.buttonRef.current) == null ? void 0 : _a2.focus({ preventScroll: true });
  });
  let slot = (0, import_react31.useMemo)(() => ({ open: data.listboxState === 0 /* Open */, disabled: data.disabled }), [data]);
  let ourProps = { ref: labelRef, id: id2, onClick: handleClick };
  return render({
    ourProps,
    theirProps,
    slot,
    defaultTag: DEFAULT_LABEL_TAG2,
    name: "Listbox.Label"
  });
});
var DEFAULT_OPTIONS_TAG2 = "ul";
var OptionsRenderFeatures2 = 1 /* RenderStrategy */ | 2 /* Static */;
var Options3 = forwardRefWithAs(function Options4(props, ref) {
  var _a2;
  let internalId = useId();
  let { id: id2 = `headlessui-listbox-options-${internalId}`, ...theirProps } = props;
  let data = useData2("Listbox.Options");
  let actions = useActions2("Listbox.Options");
  let optionsRef = useSyncRefs(data.optionsRef, ref);
  let d = useDisposables();
  let searchDisposables = useDisposables();
  let usesOpenClosedState = useOpenClosed();
  let visible = (() => {
    if (usesOpenClosedState !== null) {
      return usesOpenClosedState === 0 /* Open */;
    }
    return data.listboxState === 0 /* Open */;
  })();
  (0, import_react31.useEffect)(() => {
    var _a3;
    let container = data.optionsRef.current;
    if (!container)
      return;
    if (data.listboxState !== 0 /* Open */)
      return;
    if (container === ((_a3 = getOwnerDocument(container)) == null ? void 0 : _a3.activeElement))
      return;
    container.focus({ preventScroll: true });
  }, [data.listboxState, data.optionsRef]);
  let handleKeyDown = useEvent((event) => {
    searchDisposables.dispose();
    switch (event.key) {
      case " " /* Space */:
        if (data.searchQuery !== "") {
          event.preventDefault();
          event.stopPropagation();
          return actions.search(event.key);
        }
      case "Enter" /* Enter */:
        event.preventDefault();
        event.stopPropagation();
        if (data.activeOptionIndex !== null) {
          let { dataRef } = data.options[data.activeOptionIndex];
          actions.onChange(dataRef.current.value);
        }
        if (data.mode === 0 /* Single */) {
          actions.closeListbox();
          disposables().nextFrame(() => {
            var _a3;
            return (_a3 = data.buttonRef.current) == null ? void 0 : _a3.focus({ preventScroll: true });
          });
        }
        break;
      case match(data.orientation, { vertical: "ArrowDown" /* ArrowDown */, horizontal: "ArrowRight" /* ArrowRight */ }):
        event.preventDefault();
        event.stopPropagation();
        return actions.goToOption(2 /* Next */);
      case match(data.orientation, { vertical: "ArrowUp" /* ArrowUp */, horizontal: "ArrowLeft" /* ArrowLeft */ }):
        event.preventDefault();
        event.stopPropagation();
        return actions.goToOption(1 /* Previous */);
      case "Home" /* Home */:
      case "PageUp" /* PageUp */:
        event.preventDefault();
        event.stopPropagation();
        return actions.goToOption(0 /* First */);
      case "End" /* End */:
      case "PageDown" /* PageDown */:
        event.preventDefault();
        event.stopPropagation();
        return actions.goToOption(3 /* Last */);
      case "Escape" /* Escape */:
        event.preventDefault();
        event.stopPropagation();
        actions.closeListbox();
        return d.nextFrame(() => {
          var _a3;
          return (_a3 = data.buttonRef.current) == null ? void 0 : _a3.focus({ preventScroll: true });
        });
      case "Tab" /* Tab */:
        event.preventDefault();
        event.stopPropagation();
        break;
      default:
        if (event.key.length === 1) {
          actions.search(event.key);
          searchDisposables.setTimeout(() => actions.clearSearch(), 350);
        }
        break;
    }
  });
  let labelledby = useComputed(() => {
    var _a3, _b, _c;
    return (_c = (_a3 = data.labelRef.current) == null ? void 0 : _a3.id) != null ? _c : (_b = data.buttonRef.current) == null ? void 0 : _b.id;
  }, [data.labelRef.current, data.buttonRef.current]);
  let slot = (0, import_react31.useMemo)(() => ({ open: data.listboxState === 0 /* Open */ }), [data]);
  let ourProps = {
    "aria-activedescendant": data.activeOptionIndex === null ? void 0 : (_a2 = data.options[data.activeOptionIndex]) == null ? void 0 : _a2.id,
    "aria-multiselectable": data.mode === 1 /* Multi */ ? true : void 0,
    "aria-labelledby": labelledby,
    "aria-orientation": data.orientation,
    id: id2,
    onKeyDown: handleKeyDown,
    role: "listbox",
    tabIndex: 0,
    ref: optionsRef
  };
  return render({
    ourProps,
    theirProps,
    slot,
    defaultTag: DEFAULT_OPTIONS_TAG2,
    features: OptionsRenderFeatures2,
    visible,
    name: "Listbox.Options"
  });
});
var DEFAULT_OPTION_TAG2 = "li";
var Option3 = forwardRefWithAs(function Option4(props, ref) {
  let internalId = useId();
  let {
    id: id2 = `headlessui-listbox-option-${internalId}`,
    disabled = false,
    value,
    ...theirProps
  } = props;
  let data = useData2("Listbox.Option");
  let actions = useActions2("Listbox.Option");
  let active = data.activeOptionIndex !== null ? data.options[data.activeOptionIndex].id === id2 : false;
  let selected = data.isSelected(value);
  let internalOptionRef = (0, import_react31.useRef)(null);
  let bag = useLatestValue({
    disabled,
    value,
    domRef: internalOptionRef,
    get textValue() {
      var _a2, _b;
      return (_b = (_a2 = internalOptionRef.current) == null ? void 0 : _a2.textContent) == null ? void 0 : _b.toLowerCase();
    }
  });
  let optionRef = useSyncRefs(ref, internalOptionRef);
  useIsoMorphicEffect(() => {
    if (data.listboxState !== 0 /* Open */)
      return;
    if (!active)
      return;
    if (data.activationTrigger === 0 /* Pointer */)
      return;
    let d = disposables();
    d.requestAnimationFrame(() => {
      var _a2, _b;
      (_b = (_a2 = internalOptionRef.current) == null ? void 0 : _a2.scrollIntoView) == null ? void 0 : _b.call(_a2, { block: "nearest" });
    });
    return d.dispose;
  }, [internalOptionRef, active, data.listboxState, data.activationTrigger, data.activeOptionIndex]);
  useIsoMorphicEffect(() => actions.registerOption(id2, bag), [bag, id2]);
  let handleClick = useEvent((event) => {
    if (disabled)
      return event.preventDefault();
    actions.onChange(value);
    if (data.mode === 0 /* Single */) {
      actions.closeListbox();
      disposables().nextFrame(() => {
        var _a2;
        return (_a2 = data.buttonRef.current) == null ? void 0 : _a2.focus({ preventScroll: true });
      });
    }
  });
  let handleFocus = useEvent(() => {
    if (disabled)
      return actions.goToOption(5 /* Nothing */);
    actions.goToOption(4 /* Specific */, id2);
  });
  let pointer = useTrackedPointer();
  let handleEnter = useEvent((evt) => pointer.update(evt));
  let handleMove = useEvent((evt) => {
    if (!pointer.wasMoved(evt))
      return;
    if (disabled)
      return;
    if (active)
      return;
    actions.goToOption(4 /* Specific */, id2, 0 /* Pointer */);
  });
  let handleLeave = useEvent((evt) => {
    if (!pointer.wasMoved(evt))
      return;
    if (disabled)
      return;
    if (!active)
      return;
    actions.goToOption(5 /* Nothing */);
  });
  let slot = (0, import_react31.useMemo)(() => ({ active, selected, disabled }), [active, selected, disabled]);
  let ourProps = {
    id: id2,
    ref: optionRef,
    role: "option",
    tabIndex: disabled === true ? void 0 : -1,
    "aria-disabled": disabled === true ? true : void 0,
    "aria-selected": selected,
    disabled: void 0,
    onClick: handleClick,
    onFocus: handleFocus,
    onPointerEnter: handleEnter,
    onMouseEnter: handleEnter,
    onPointerMove: handleMove,
    onMouseMove: handleMove,
    onPointerLeave: handleLeave,
    onMouseLeave: handleLeave
  };
  return render({
    ourProps,
    theirProps,
    slot,
    defaultTag: DEFAULT_OPTION_TAG2,
    name: "Listbox.Option"
  });
});
var Listbox2 = Object.assign(ListboxRoot, { Button: Button5, Label: Label3, Options: Options3, Option: Option3 });

// src/components/menu/menu.tsx
var import_react32 = __toESM(require("react"), 1);
function adjustOrderedState3(state2, adjustment = (i) => i) {
  let currentActiveItem = state2.activeItemIndex !== null ? state2.items[state2.activeItemIndex] : null;
  let sortedItems = sortByDomNode(adjustment(state2.items.slice()), (item) => item.dataRef.current.domRef.current);
  let adjustedActiveItemIndex = currentActiveItem ? sortedItems.indexOf(currentActiveItem) : null;
  if (adjustedActiveItemIndex === -1) {
    adjustedActiveItemIndex = null;
  }
  return {
    items: sortedItems,
    activeItemIndex: adjustedActiveItemIndex
  };
}
var reducers5 = {
  [1 /* CloseMenu */](state2) {
    if (state2.menuState === 1 /* Closed */)
      return state2;
    return { ...state2, activeItemIndex: null, menuState: 1 /* Closed */ };
  },
  [0 /* OpenMenu */](state2) {
    if (state2.menuState === 0 /* Open */)
      return state2;
    return { ...state2, menuState: 0 /* Open */ };
  },
  [2 /* GoToItem */]: (state2, action) => {
    var _a2;
    let adjustedState = adjustOrderedState3(state2);
    let activeItemIndex = calculateActiveIndex(action, {
      resolveItems: () => adjustedState.items,
      resolveActiveIndex: () => adjustedState.activeItemIndex,
      resolveId: (item) => item.id,
      resolveDisabled: (item) => item.dataRef.current.disabled
    });
    return {
      ...state2,
      ...adjustedState,
      searchQuery: "",
      activeItemIndex,
      activationTrigger: (_a2 = action.trigger) != null ? _a2 : 1 /* Other */
    };
  },
  [3 /* Search */]: (state2, action) => {
    let wasAlreadySearching = state2.searchQuery !== "";
    let offset = wasAlreadySearching ? 0 : 1;
    let searchQuery = state2.searchQuery + action.value.toLowerCase();
    let reOrderedItems = state2.activeItemIndex !== null ? state2.items.slice(state2.activeItemIndex + offset).concat(state2.items.slice(0, state2.activeItemIndex + offset)) : state2.items;
    let matchingItem = reOrderedItems.find((item) => {
      var _a2;
      return ((_a2 = item.dataRef.current.textValue) == null ? void 0 : _a2.startsWith(searchQuery)) && !item.dataRef.current.disabled;
    });
    let matchIdx = matchingItem ? state2.items.indexOf(matchingItem) : -1;
    if (matchIdx === -1 || matchIdx === state2.activeItemIndex)
      return { ...state2, searchQuery };
    return {
      ...state2,
      searchQuery,
      activeItemIndex: matchIdx,
      activationTrigger: 1 /* Other */
    };
  },
  [4 /* ClearSearch */](state2) {
    if (state2.searchQuery === "")
      return state2;
    return { ...state2, searchQuery: "", searchActiveItemIndex: null };
  },
  [5 /* RegisterItem */]: (state2, action) => {
    let adjustedState = adjustOrderedState3(state2, (items) => [
      ...items,
      { id: action.id, dataRef: action.dataRef }
    ]);
    return { ...state2, ...adjustedState };
  },
  [6 /* UnregisterItem */]: (state2, action) => {
    let adjustedState = adjustOrderedState3(state2, (items) => {
      let idx = items.findIndex((a) => a.id === action.id);
      if (idx !== -1)
        items.splice(idx, 1);
      return items;
    });
    return {
      ...state2,
      ...adjustedState,
      activationTrigger: 1 /* Other */
    };
  }
};
var MenuContext = (0, import_react32.createContext)(null);
MenuContext.displayName = "MenuContext";
function useMenuContext(component) {
  let context = (0, import_react32.useContext)(MenuContext);
  if (context === null) {
    let err = new Error(`<${component} /> is missing a parent <Menu /> component.`);
    if (Error.captureStackTrace)
      Error.captureStackTrace(err, useMenuContext);
    throw err;
  }
  return context;
}
function stateReducer5(state2, action) {
  return match(action.type, reducers5, state2, action);
}
var DEFAULT_MENU_TAG = import_react32.Fragment;
var MenuRoot = forwardRefWithAs(function Menu(props, ref) {
  let reducerBag = (0, import_react32.useReducer)(stateReducer5, {
    menuState: 1 /* Closed */,
    buttonRef: (0, import_react32.createRef)(),
    itemsRef: (0, import_react32.createRef)(),
    items: [],
    searchQuery: "",
    activeItemIndex: null,
    activationTrigger: 1 /* Other */
  });
  let [{ menuState, itemsRef, buttonRef }, dispatch] = reducerBag;
  let menuRef = useSyncRefs(ref);
  useOutsideClick([buttonRef, itemsRef], (event, target) => {
    var _a2;
    dispatch({ type: 1 /* CloseMenu */ });
    if (!isFocusableElement(target, 1 /* Loose */)) {
      event.preventDefault();
      (_a2 = buttonRef.current) == null ? void 0 : _a2.focus();
    }
  }, menuState === 0 /* Open */);
  let close = useEvent(() => {
    dispatch({ type: 1 /* CloseMenu */ });
  });
  let slot = (0, import_react32.useMemo)(() => ({ open: menuState === 0 /* Open */, close }), [menuState, close]);
  let theirProps = props;
  let ourProps = { ref: menuRef };
  return /* @__PURE__ */ import_react32.default.createElement(MenuContext.Provider, {
    value: reducerBag
  }, /* @__PURE__ */ import_react32.default.createElement(OpenClosedProvider, {
    value: match(menuState, {
      [0 /* Open */]: 0 /* Open */,
      [1 /* Closed */]: 1 /* Closed */
    })
  }, render({
    ourProps,
    theirProps,
    slot,
    defaultTag: DEFAULT_MENU_TAG,
    name: "Menu"
  })));
});
var DEFAULT_BUTTON_TAG4 = "button";
var Button7 = forwardRefWithAs(function Button8(props, ref) {
  var _a2;
  let internalId = useId();
  let { id: id2 = `headlessui-menu-button-${internalId}`, ...theirProps } = props;
  let [state2, dispatch] = useMenuContext("Menu.Button");
  let buttonRef = useSyncRefs(state2.buttonRef, ref);
  let d = useDisposables();
  let handleKeyDown = useEvent((event) => {
    switch (event.key) {
      case " " /* Space */:
      case "Enter" /* Enter */:
      case "ArrowDown" /* ArrowDown */:
        event.preventDefault();
        event.stopPropagation();
        dispatch({ type: 0 /* OpenMenu */ });
        d.nextFrame(() => dispatch({ type: 2 /* GoToItem */, focus: 0 /* First */ }));
        break;
      case "ArrowUp" /* ArrowUp */:
        event.preventDefault();
        event.stopPropagation();
        dispatch({ type: 0 /* OpenMenu */ });
        d.nextFrame(() => dispatch({ type: 2 /* GoToItem */, focus: 3 /* Last */ }));
        break;
    }
  });
  let handleKeyUp = useEvent((event) => {
    switch (event.key) {
      case " " /* Space */:
        event.preventDefault();
        break;
    }
  });
  let handleClick = useEvent((event) => {
    if (isDisabledReactIssue7711(event.currentTarget))
      return event.preventDefault();
    if (props.disabled)
      return;
    if (state2.menuState === 0 /* Open */) {
      dispatch({ type: 1 /* CloseMenu */ });
      d.nextFrame(() => {
        var _a3;
        return (_a3 = state2.buttonRef.current) == null ? void 0 : _a3.focus({ preventScroll: true });
      });
    } else {
      event.preventDefault();
      dispatch({ type: 0 /* OpenMenu */ });
    }
  });
  let slot = (0, import_react32.useMemo)(() => ({ open: state2.menuState === 0 /* Open */ }), [state2]);
  let ourProps = {
    ref: buttonRef,
    id: id2,
    type: useResolveButtonType(props, state2.buttonRef),
    "aria-haspopup": "menu",
    "aria-controls": (_a2 = state2.itemsRef.current) == null ? void 0 : _a2.id,
    "aria-expanded": props.disabled ? void 0 : state2.menuState === 0 /* Open */,
    onKeyDown: handleKeyDown,
    onKeyUp: handleKeyUp,
    onClick: handleClick
  };
  return render({
    ourProps,
    theirProps,
    slot,
    defaultTag: DEFAULT_BUTTON_TAG4,
    name: "Menu.Button"
  });
});
var DEFAULT_ITEMS_TAG = "div";
var ItemsRenderFeatures = 1 /* RenderStrategy */ | 2 /* Static */;
var Items = forwardRefWithAs(function Items2(props, ref) {
  var _a2, _b;
  let internalId = useId();
  let { id: id2 = `headlessui-menu-items-${internalId}`, ...theirProps } = props;
  let [state2, dispatch] = useMenuContext("Menu.Items");
  let itemsRef = useSyncRefs(state2.itemsRef, ref);
  let ownerDocument = useOwnerDocument(state2.itemsRef);
  let searchDisposables = useDisposables();
  let usesOpenClosedState = useOpenClosed();
  let visible = (() => {
    if (usesOpenClosedState !== null) {
      return usesOpenClosedState === 0 /* Open */;
    }
    return state2.menuState === 0 /* Open */;
  })();
  (0, import_react32.useEffect)(() => {
    let container = state2.itemsRef.current;
    if (!container)
      return;
    if (state2.menuState !== 0 /* Open */)
      return;
    if (container === (ownerDocument == null ? void 0 : ownerDocument.activeElement))
      return;
    container.focus({ preventScroll: true });
  }, [state2.menuState, state2.itemsRef, ownerDocument]);
  useTreeWalker({
    container: state2.itemsRef.current,
    enabled: state2.menuState === 0 /* Open */,
    accept(node) {
      if (node.getAttribute("role") === "menuitem")
        return NodeFilter.FILTER_REJECT;
      if (node.hasAttribute("role"))
        return NodeFilter.FILTER_SKIP;
      return NodeFilter.FILTER_ACCEPT;
    },
    walk(node) {
      node.setAttribute("role", "none");
    }
  });
  let handleKeyDown = useEvent((event) => {
    var _a3, _b2;
    searchDisposables.dispose();
    switch (event.key) {
      case " " /* Space */:
        if (state2.searchQuery !== "") {
          event.preventDefault();
          event.stopPropagation();
          return dispatch({ type: 3 /* Search */, value: event.key });
        }
      case "Enter" /* Enter */:
        event.preventDefault();
        event.stopPropagation();
        dispatch({ type: 1 /* CloseMenu */ });
        if (state2.activeItemIndex !== null) {
          let { dataRef } = state2.items[state2.activeItemIndex];
          (_b2 = (_a3 = dataRef.current) == null ? void 0 : _a3.domRef.current) == null ? void 0 : _b2.click();
        }
        restoreFocusIfNecessary(state2.buttonRef.current);
        break;
      case "ArrowDown" /* ArrowDown */:
        event.preventDefault();
        event.stopPropagation();
        return dispatch({ type: 2 /* GoToItem */, focus: 2 /* Next */ });
      case "ArrowUp" /* ArrowUp */:
        event.preventDefault();
        event.stopPropagation();
        return dispatch({ type: 2 /* GoToItem */, focus: 1 /* Previous */ });
      case "Home" /* Home */:
      case "PageUp" /* PageUp */:
        event.preventDefault();
        event.stopPropagation();
        return dispatch({ type: 2 /* GoToItem */, focus: 0 /* First */ });
      case "End" /* End */:
      case "PageDown" /* PageDown */:
        event.preventDefault();
        event.stopPropagation();
        return dispatch({ type: 2 /* GoToItem */, focus: 3 /* Last */ });
      case "Escape" /* Escape */:
        event.preventDefault();
        event.stopPropagation();
        dispatch({ type: 1 /* CloseMenu */ });
        disposables().nextFrame(() => {
          var _a4;
          return (_a4 = state2.buttonRef.current) == null ? void 0 : _a4.focus({ preventScroll: true });
        });
        break;
      case "Tab" /* Tab */:
        event.preventDefault();
        event.stopPropagation();
        dispatch({ type: 1 /* CloseMenu */ });
        disposables().nextFrame(() => {
          focusFrom(state2.buttonRef.current, event.shiftKey ? 2 /* Previous */ : 4 /* Next */);
        });
        break;
      default:
        if (event.key.length === 1) {
          dispatch({ type: 3 /* Search */, value: event.key });
          searchDisposables.setTimeout(() => dispatch({ type: 4 /* ClearSearch */ }), 350);
        }
        break;
    }
  });
  let handleKeyUp = useEvent((event) => {
    switch (event.key) {
      case " " /* Space */:
        event.preventDefault();
        break;
    }
  });
  let slot = (0, import_react32.useMemo)(() => ({ open: state2.menuState === 0 /* Open */ }), [state2]);
  let ourProps = {
    "aria-activedescendant": state2.activeItemIndex === null ? void 0 : (_a2 = state2.items[state2.activeItemIndex]) == null ? void 0 : _a2.id,
    "aria-labelledby": (_b = state2.buttonRef.current) == null ? void 0 : _b.id,
    id: id2,
    onKeyDown: handleKeyDown,
    onKeyUp: handleKeyUp,
    role: "menu",
    tabIndex: 0,
    ref: itemsRef
  };
  return render({
    ourProps,
    theirProps,
    slot,
    defaultTag: DEFAULT_ITEMS_TAG,
    features: ItemsRenderFeatures,
    visible,
    name: "Menu.Items"
  });
});
var DEFAULT_ITEM_TAG = import_react32.Fragment;
var Item = forwardRefWithAs(function Item2(props, ref) {
  let internalId = useId();
  let { id: id2 = `headlessui-menu-item-${internalId}`, disabled = false, ...theirProps } = props;
  let [state2, dispatch] = useMenuContext("Menu.Item");
  let active = state2.activeItemIndex !== null ? state2.items[state2.activeItemIndex].id === id2 : false;
  let internalItemRef = (0, import_react32.useRef)(null);
  let itemRef = useSyncRefs(ref, internalItemRef);
  useIsoMorphicEffect(() => {
    if (state2.menuState !== 0 /* Open */)
      return;
    if (!active)
      return;
    if (state2.activationTrigger === 0 /* Pointer */)
      return;
    let d = disposables();
    d.requestAnimationFrame(() => {
      var _a2, _b;
      (_b = (_a2 = internalItemRef.current) == null ? void 0 : _a2.scrollIntoView) == null ? void 0 : _b.call(_a2, { block: "nearest" });
    });
    return d.dispose;
  }, [internalItemRef, active, state2.menuState, state2.activationTrigger, state2.activeItemIndex]);
  let bag = (0, import_react32.useRef)({ disabled, domRef: internalItemRef });
  useIsoMorphicEffect(() => {
    bag.current.disabled = disabled;
  }, [bag, disabled]);
  useIsoMorphicEffect(() => {
    var _a2, _b;
    bag.current.textValue = (_b = (_a2 = internalItemRef.current) == null ? void 0 : _a2.textContent) == null ? void 0 : _b.toLowerCase();
  }, [bag, internalItemRef]);
  useIsoMorphicEffect(() => {
    dispatch({ type: 5 /* RegisterItem */, id: id2, dataRef: bag });
    return () => dispatch({ type: 6 /* UnregisterItem */, id: id2 });
  }, [bag, id2]);
  let close = useEvent(() => {
    dispatch({ type: 1 /* CloseMenu */ });
  });
  let handleClick = useEvent((event) => {
    if (disabled)
      return event.preventDefault();
    dispatch({ type: 1 /* CloseMenu */ });
    restoreFocusIfNecessary(state2.buttonRef.current);
  });
  let handleFocus = useEvent(() => {
    if (disabled)
      return dispatch({ type: 2 /* GoToItem */, focus: 5 /* Nothing */ });
    dispatch({ type: 2 /* GoToItem */, focus: 4 /* Specific */, id: id2 });
  });
  let pointer = useTrackedPointer();
  let handleEnter = useEvent((evt) => pointer.update(evt));
  let handleMove = useEvent((evt) => {
    if (!pointer.wasMoved(evt))
      return;
    if (disabled)
      return;
    if (active)
      return;
    dispatch({
      type: 2 /* GoToItem */,
      focus: 4 /* Specific */,
      id: id2,
      trigger: 0 /* Pointer */
    });
  });
  let handleLeave = useEvent((evt) => {
    if (!pointer.wasMoved(evt))
      return;
    if (disabled)
      return;
    if (!active)
      return;
    dispatch({ type: 2 /* GoToItem */, focus: 5 /* Nothing */ });
  });
  let slot = (0, import_react32.useMemo)(() => ({ active, disabled, close }), [active, disabled, close]);
  let ourProps = {
    id: id2,
    ref: itemRef,
    role: "menuitem",
    tabIndex: disabled === true ? void 0 : -1,
    "aria-disabled": disabled === true ? true : void 0,
    disabled: void 0,
    onClick: handleClick,
    onFocus: handleFocus,
    onPointerEnter: handleEnter,
    onMouseEnter: handleEnter,
    onPointerMove: handleMove,
    onMouseMove: handleMove,
    onPointerLeave: handleLeave,
    onMouseLeave: handleLeave
  };
  return render({
    ourProps,
    theirProps,
    slot,
    defaultTag: DEFAULT_ITEM_TAG,
    name: "Menu.Item"
  });
});
var Menu2 = Object.assign(MenuRoot, { Button: Button7, Items, Item });

// src/components/popover/popover.tsx
var import_react33 = __toESM(require("react"), 1);
var reducers6 = {
  [0 /* TogglePopover */]: (state2) => ({
    ...state2,
    popoverState: match(state2.popoverState, {
      [0 /* Open */]: 1 /* Closed */,
      [1 /* Closed */]: 0 /* Open */
    })
  }),
  [1 /* ClosePopover */](state2) {
    if (state2.popoverState === 1 /* Closed */)
      return state2;
    return { ...state2, popoverState: 1 /* Closed */ };
  },
  [2 /* SetButton */](state2, action) {
    if (state2.button === action.button)
      return state2;
    return { ...state2, button: action.button };
  },
  [3 /* SetButtonId */](state2, action) {
    if (state2.buttonId === action.buttonId)
      return state2;
    return { ...state2, buttonId: action.buttonId };
  },
  [4 /* SetPanel */](state2, action) {
    if (state2.panel === action.panel)
      return state2;
    return { ...state2, panel: action.panel };
  },
  [5 /* SetPanelId */](state2, action) {
    if (state2.panelId === action.panelId)
      return state2;
    return { ...state2, panelId: action.panelId };
  }
};
var PopoverContext = (0, import_react33.createContext)(null);
PopoverContext.displayName = "PopoverContext";
function usePopoverContext(component) {
  let context = (0, import_react33.useContext)(PopoverContext);
  if (context === null) {
    let err = new Error(`<${component} /> is missing a parent <Popover /> component.`);
    if (Error.captureStackTrace)
      Error.captureStackTrace(err, usePopoverContext);
    throw err;
  }
  return context;
}
var PopoverAPIContext = (0, import_react33.createContext)(null);
PopoverAPIContext.displayName = "PopoverAPIContext";
function usePopoverAPIContext(component) {
  let context = (0, import_react33.useContext)(PopoverAPIContext);
  if (context === null) {
    let err = new Error(`<${component} /> is missing a parent <Popover /> component.`);
    if (Error.captureStackTrace)
      Error.captureStackTrace(err, usePopoverAPIContext);
    throw err;
  }
  return context;
}
var PopoverGroupContext = (0, import_react33.createContext)(null);
PopoverGroupContext.displayName = "PopoverGroupContext";
function usePopoverGroupContext() {
  return (0, import_react33.useContext)(PopoverGroupContext);
}
var PopoverPanelContext = (0, import_react33.createContext)(null);
PopoverPanelContext.displayName = "PopoverPanelContext";
function usePopoverPanelContext() {
  return (0, import_react33.useContext)(PopoverPanelContext);
}
function stateReducer6(state2, action) {
  return match(action.type, reducers6, state2, action);
}
var DEFAULT_POPOVER_TAG = "div";
var PopoverRoot = forwardRefWithAs(function Popover(props, ref) {
  var _a2;
  let internalPopoverRef = (0, import_react33.useRef)(null);
  let popoverRef = useSyncRefs(ref, optionalRef((ref2) => {
    internalPopoverRef.current = ref2;
  }));
  let reducerBag = (0, import_react33.useReducer)(stateReducer6, {
    popoverState: 1 /* Closed */,
    buttons: [],
    button: null,
    buttonId: null,
    panel: null,
    panelId: null,
    beforePanelSentinel: (0, import_react33.createRef)(),
    afterPanelSentinel: (0, import_react33.createRef)()
  });
  let [
    { popoverState, button, buttonId, panel, panelId, beforePanelSentinel, afterPanelSentinel },
    dispatch
  ] = reducerBag;
  let ownerDocument = useOwnerDocument((_a2 = internalPopoverRef.current) != null ? _a2 : button);
  let isPortalled = (0, import_react33.useMemo)(() => {
    if (!button)
      return false;
    if (!panel)
      return false;
    for (let root of document.querySelectorAll("body > *")) {
      if (Number(root == null ? void 0 : root.contains(button)) ^ Number(root == null ? void 0 : root.contains(panel))) {
        return true;
      }
    }
    let elements = getFocusableElements();
    let buttonIdx = elements.indexOf(button);
    let beforeIdx = (buttonIdx + elements.length - 1) % elements.length;
    let afterIdx = (buttonIdx + 1) % elements.length;
    let beforeElement = elements[beforeIdx];
    let afterElement = elements[afterIdx];
    if (!panel.contains(beforeElement) && !panel.contains(afterElement)) {
      return true;
    }
    return false;
  }, [button, panel]);
  let buttonIdRef = useLatestValue(buttonId);
  let panelIdRef = useLatestValue(panelId);
  let registerBag = (0, import_react33.useMemo)(() => ({
    buttonId: buttonIdRef,
    panelId: panelIdRef,
    close: () => dispatch({ type: 1 /* ClosePopover */ })
  }), [buttonIdRef, panelIdRef, dispatch]);
  let groupContext = usePopoverGroupContext();
  let registerPopover = groupContext == null ? void 0 : groupContext.registerPopover;
  let isFocusWithinPopoverGroup = useEvent(() => {
    var _a3;
    return (_a3 = groupContext == null ? void 0 : groupContext.isFocusWithinPopoverGroup()) != null ? _a3 : (ownerDocument == null ? void 0 : ownerDocument.activeElement) && ((button == null ? void 0 : button.contains(ownerDocument.activeElement)) || (panel == null ? void 0 : panel.contains(ownerDocument.activeElement)));
  });
  (0, import_react33.useEffect)(() => registerPopover == null ? void 0 : registerPopover(registerBag), [registerPopover, registerBag]);
  useEventListener(ownerDocument == null ? void 0 : ownerDocument.defaultView, "focus", (event) => {
    var _a3, _b, _c, _d;
    if (popoverState !== 0 /* Open */)
      return;
    if (isFocusWithinPopoverGroup())
      return;
    if (!button)
      return;
    if (!panel)
      return;
    if (event.target === window)
      return;
    if ((_b = (_a3 = beforePanelSentinel.current) == null ? void 0 : _a3.contains) == null ? void 0 : _b.call(_a3, event.target))
      return;
    if ((_d = (_c = afterPanelSentinel.current) == null ? void 0 : _c.contains) == null ? void 0 : _d.call(_c, event.target))
      return;
    dispatch({ type: 1 /* ClosePopover */ });
  }, true);
  useOutsideClick([button, panel], (event, target) => {
    dispatch({ type: 1 /* ClosePopover */ });
    if (!isFocusableElement(target, 1 /* Loose */)) {
      event.preventDefault();
      button == null ? void 0 : button.focus();
    }
  }, popoverState === 0 /* Open */);
  let close = useEvent((focusableElement) => {
    dispatch({ type: 1 /* ClosePopover */ });
    let restoreElement = (() => {
      if (!focusableElement)
        return button;
      if (focusableElement instanceof HTMLElement)
        return focusableElement;
      if ("current" in focusableElement && focusableElement.current instanceof HTMLElement)
        return focusableElement.current;
      return button;
    })();
    restoreElement == null ? void 0 : restoreElement.focus();
  });
  let api = (0, import_react33.useMemo)(() => ({ close, isPortalled }), [close, isPortalled]);
  let slot = (0, import_react33.useMemo)(() => ({ open: popoverState === 0 /* Open */, close }), [popoverState, close]);
  let theirProps = props;
  let ourProps = { ref: popoverRef };
  return /* @__PURE__ */ import_react33.default.createElement(PopoverContext.Provider, {
    value: reducerBag
  }, /* @__PURE__ */ import_react33.default.createElement(PopoverAPIContext.Provider, {
    value: api
  }, /* @__PURE__ */ import_react33.default.createElement(OpenClosedProvider, {
    value: match(popoverState, {
      [0 /* Open */]: 0 /* Open */,
      [1 /* Closed */]: 1 /* Closed */
    })
  }, render({
    ourProps,
    theirProps,
    slot,
    defaultTag: DEFAULT_POPOVER_TAG,
    name: "Popover"
  }))));
});
var DEFAULT_BUTTON_TAG5 = "button";
var Button9 = forwardRefWithAs(function Button10(props, ref) {
  let internalId = useId();
  let { id: id2 = `headlessui-popover-button-${internalId}`, ...theirProps } = props;
  let [state2, dispatch] = usePopoverContext("Popover.Button");
  let { isPortalled } = usePopoverAPIContext("Popover.Button");
  let internalButtonRef = (0, import_react33.useRef)(null);
  let sentinelId = `headlessui-focus-sentinel-${useId()}`;
  let groupContext = usePopoverGroupContext();
  let closeOthers = groupContext == null ? void 0 : groupContext.closeOthers;
  let panelContext = usePopoverPanelContext();
  let isWithinPanel = panelContext === null ? false : panelContext === state2.panelId;
  (0, import_react33.useEffect)(() => {
    if (isWithinPanel)
      return;
    dispatch({ type: 3 /* SetButtonId */, buttonId: id2 });
    return () => {
      dispatch({ type: 3 /* SetButtonId */, buttonId: null });
    };
  }, [id2, dispatch]);
  let buttonRef = useSyncRefs(internalButtonRef, ref, isWithinPanel ? null : (button) => {
    if (button) {
      state2.buttons.push(id2);
    } else {
      let idx = state2.buttons.indexOf(id2);
      if (idx !== -1)
        state2.buttons.splice(idx, 1);
    }
    if (state2.buttons.length > 1) {
      console.warn("You are already using a <Popover.Button /> but only 1 <Popover.Button /> is supported.");
    }
    button && dispatch({ type: 2 /* SetButton */, button });
  });
  let withinPanelButtonRef = useSyncRefs(internalButtonRef, ref);
  let ownerDocument = useOwnerDocument(internalButtonRef);
  let handleKeyDown = useEvent((event) => {
    var _a2, _b, _c;
    if (isWithinPanel) {
      if (state2.popoverState === 1 /* Closed */)
        return;
      switch (event.key) {
        case " " /* Space */:
        case "Enter" /* Enter */:
          event.preventDefault();
          (_b = (_a2 = event.target).click) == null ? void 0 : _b.call(_a2);
          dispatch({ type: 1 /* ClosePopover */ });
          (_c = state2.button) == null ? void 0 : _c.focus();
          break;
      }
    } else {
      switch (event.key) {
        case " " /* Space */:
        case "Enter" /* Enter */:
          event.preventDefault();
          event.stopPropagation();
          if (state2.popoverState === 1 /* Closed */)
            closeOthers == null ? void 0 : closeOthers(state2.buttonId);
          dispatch({ type: 0 /* TogglePopover */ });
          break;
        case "Escape" /* Escape */:
          if (state2.popoverState !== 0 /* Open */)
            return closeOthers == null ? void 0 : closeOthers(state2.buttonId);
          if (!internalButtonRef.current)
            return;
          if ((ownerDocument == null ? void 0 : ownerDocument.activeElement) && !internalButtonRef.current.contains(ownerDocument.activeElement)) {
            return;
          }
          event.preventDefault();
          event.stopPropagation();
          dispatch({ type: 1 /* ClosePopover */ });
          break;
      }
    }
  });
  let handleKeyUp = useEvent((event) => {
    if (isWithinPanel)
      return;
    if (event.key === " " /* Space */) {
      event.preventDefault();
    }
  });
  let handleClick = useEvent((event) => {
    var _a2, _b;
    if (isDisabledReactIssue7711(event.currentTarget))
      return;
    if (props.disabled)
      return;
    if (isWithinPanel) {
      dispatch({ type: 1 /* ClosePopover */ });
      (_a2 = state2.button) == null ? void 0 : _a2.focus();
    } else {
      event.preventDefault();
      event.stopPropagation();
      if (state2.popoverState === 1 /* Closed */)
        closeOthers == null ? void 0 : closeOthers(state2.buttonId);
      dispatch({ type: 0 /* TogglePopover */ });
      (_b = state2.button) == null ? void 0 : _b.focus();
    }
  });
  let handleMouseDown = useEvent((event) => {
    event.preventDefault();
    event.stopPropagation();
  });
  let visible = state2.popoverState === 0 /* Open */;
  let slot = (0, import_react33.useMemo)(() => ({ open: visible }), [visible]);
  let type = useResolveButtonType(props, internalButtonRef);
  let ourProps = isWithinPanel ? {
    ref: withinPanelButtonRef,
    type,
    onKeyDown: handleKeyDown,
    onClick: handleClick
  } : {
    ref: buttonRef,
    id: state2.buttonId,
    type,
    "aria-expanded": props.disabled ? void 0 : state2.popoverState === 0 /* Open */,
    "aria-controls": state2.panel ? state2.panelId : void 0,
    onKeyDown: handleKeyDown,
    onKeyUp: handleKeyUp,
    onClick: handleClick,
    onMouseDown: handleMouseDown
  };
  let direction = useTabDirection();
  let handleFocus = useEvent(() => {
    let el = state2.panel;
    if (!el)
      return;
    function run() {
      match(direction.current, {
        [0 /* Forwards */]: () => focusIn(el, 1 /* First */),
        [1 /* Backwards */]: () => focusIn(el, 8 /* Last */)
      });
    }
    if (false) {
      microTask(run);
    } else {
      run();
    }
  });
  return /* @__PURE__ */ import_react33.default.createElement(import_react33.default.Fragment, null, render({
    ourProps,
    theirProps,
    slot,
    defaultTag: DEFAULT_BUTTON_TAG5,
    name: "Popover.Button"
  }), visible && !isWithinPanel && isPortalled && /* @__PURE__ */ import_react33.default.createElement(Hidden, {
    id: sentinelId,
    features: 2 /* Focusable */,
    as: "button",
    type: "button",
    onFocus: handleFocus
  }));
});
var DEFAULT_OVERLAY_TAG2 = "div";
var OverlayRenderFeatures = 1 /* RenderStrategy */ | 2 /* Static */;
var Overlay3 = forwardRefWithAs(function Overlay4(props, ref) {
  let internalId = useId();
  let { id: id2 = `headlessui-popover-overlay-${internalId}`, ...theirProps } = props;
  let [{ popoverState }, dispatch] = usePopoverContext("Popover.Overlay");
  let overlayRef = useSyncRefs(ref);
  let usesOpenClosedState = useOpenClosed();
  let visible = (() => {
    if (usesOpenClosedState !== null) {
      return usesOpenClosedState === 0 /* Open */;
    }
    return popoverState === 0 /* Open */;
  })();
  let handleClick = useEvent((event) => {
    if (isDisabledReactIssue7711(event.currentTarget))
      return event.preventDefault();
    dispatch({ type: 1 /* ClosePopover */ });
  });
  let slot = (0, import_react33.useMemo)(() => ({ open: popoverState === 0 /* Open */ }), [popoverState]);
  let ourProps = {
    ref: overlayRef,
    id: id2,
    "aria-hidden": true,
    onClick: handleClick
  };
  return render({
    ourProps,
    theirProps,
    slot,
    defaultTag: DEFAULT_OVERLAY_TAG2,
    features: OverlayRenderFeatures,
    visible,
    name: "Popover.Overlay"
  });
});
var DEFAULT_PANEL_TAG3 = "div";
var PanelRenderFeatures2 = 1 /* RenderStrategy */ | 2 /* Static */;
var Panel5 = forwardRefWithAs(function Panel6(props, ref) {
  let internalId = useId();
  let { id: id2 = `headlessui-popover-panel-${internalId}`, focus = false, ...theirProps } = props;
  let [state2, dispatch] = usePopoverContext("Popover.Panel");
  let { close, isPortalled } = usePopoverAPIContext("Popover.Panel");
  let beforePanelSentinelId = `headlessui-focus-sentinel-before-${useId()}`;
  let afterPanelSentinelId = `headlessui-focus-sentinel-after-${useId()}`;
  let internalPanelRef = (0, import_react33.useRef)(null);
  let panelRef = useSyncRefs(internalPanelRef, ref, (panel) => {
    dispatch({ type: 4 /* SetPanel */, panel });
  });
  let ownerDocument = useOwnerDocument(internalPanelRef);
  (0, import_react33.useEffect)(() => {
    dispatch({ type: 5 /* SetPanelId */, panelId: id2 });
    return () => {
      dispatch({ type: 5 /* SetPanelId */, panelId: null });
    };
  }, [id2, dispatch]);
  let usesOpenClosedState = useOpenClosed();
  let visible = (() => {
    if (usesOpenClosedState !== null) {
      return usesOpenClosedState === 0 /* Open */;
    }
    return state2.popoverState === 0 /* Open */;
  })();
  let handleKeyDown = useEvent((event) => {
    var _a2;
    switch (event.key) {
      case "Escape" /* Escape */:
        if (state2.popoverState !== 0 /* Open */)
          return;
        if (!internalPanelRef.current)
          return;
        if ((ownerDocument == null ? void 0 : ownerDocument.activeElement) && !internalPanelRef.current.contains(ownerDocument.activeElement)) {
          return;
        }
        event.preventDefault();
        event.stopPropagation();
        dispatch({ type: 1 /* ClosePopover */ });
        (_a2 = state2.button) == null ? void 0 : _a2.focus();
        break;
    }
  });
  (0, import_react33.useEffect)(() => {
    var _a2;
    if (props.static)
      return;
    if (state2.popoverState === 1 /* Closed */ && ((_a2 = props.unmount) != null ? _a2 : true)) {
      dispatch({ type: 4 /* SetPanel */, panel: null });
    }
  }, [state2.popoverState, props.unmount, props.static, dispatch]);
  (0, import_react33.useEffect)(() => {
    if (!focus)
      return;
    if (state2.popoverState !== 0 /* Open */)
      return;
    if (!internalPanelRef.current)
      return;
    let activeElement = ownerDocument == null ? void 0 : ownerDocument.activeElement;
    if (internalPanelRef.current.contains(activeElement))
      return;
    focusIn(internalPanelRef.current, 1 /* First */);
  }, [focus, internalPanelRef, state2.popoverState]);
  let slot = (0, import_react33.useMemo)(() => ({ open: state2.popoverState === 0 /* Open */, close }), [state2, close]);
  let ourProps = {
    ref: panelRef,
    id: state2.panelId,
    onKeyDown: handleKeyDown,
    onBlur: focus && state2.popoverState === 0 /* Open */ ? (event) => {
      var _a2, _b, _c, _d, _e;
      let el = event.relatedTarget;
      if (!el)
        return;
      if (!internalPanelRef.current)
        return;
      if ((_a2 = internalPanelRef.current) == null ? void 0 : _a2.contains(el))
        return;
      dispatch({ type: 1 /* ClosePopover */ });
      if (((_c = (_b = state2.beforePanelSentinel.current) == null ? void 0 : _b.contains) == null ? void 0 : _c.call(_b, el)) || ((_e = (_d = state2.afterPanelSentinel.current) == null ? void 0 : _d.contains) == null ? void 0 : _e.call(_d, el))) {
        el.focus({ preventScroll: true });
      }
    } : void 0,
    tabIndex: -1
  };
  let direction = useTabDirection();
  let handleBeforeFocus = useEvent(() => {
    let el = internalPanelRef.current;
    if (!el)
      return;
    function run() {
      match(direction.current, {
        [0 /* Forwards */]: () => {
          focusIn(el, 1 /* First */);
        },
        [1 /* Backwards */]: () => {
          var _a2;
          (_a2 = state2.button) == null ? void 0 : _a2.focus({ preventScroll: true });
        }
      });
    }
    if (false) {
      microTask(run);
    } else {
      run();
    }
  });
  let handleAfterFocus = useEvent(() => {
    let el = internalPanelRef.current;
    if (!el)
      return;
    function run() {
      match(direction.current, {
        [0 /* Forwards */]: () => {
          var _a2, _b, _c;
          if (!state2.button)
            return;
          let elements = getFocusableElements();
          let idx = elements.indexOf(state2.button);
          let before = elements.slice(0, idx + 1);
          let after = elements.slice(idx + 1);
          let combined = [...after, ...before];
          for (let element of combined.slice()) {
            if (((_b = (_a2 = element == null ? void 0 : element.id) == null ? void 0 : _a2.startsWith) == null ? void 0 : _b.call(_a2, "headlessui-focus-sentinel-")) || ((_c = state2.panel) == null ? void 0 : _c.contains(element))) {
              let idx2 = combined.indexOf(element);
              if (idx2 !== -1)
                combined.splice(idx2, 1);
            }
          }
          focusIn(combined, 1 /* First */, { sorted: false });
        },
        [1 /* Backwards */]: () => focusIn(el, 8 /* Last */)
      });
    }
    if (false) {
      microTask(run);
    } else {
      run();
    }
  });
  return /* @__PURE__ */ import_react33.default.createElement(PopoverPanelContext.Provider, {
    value: state2.panelId
  }, visible && isPortalled && /* @__PURE__ */ import_react33.default.createElement(Hidden, {
    id: beforePanelSentinelId,
    ref: state2.beforePanelSentinel,
    features: 2 /* Focusable */,
    as: "button",
    type: "button",
    onFocus: handleBeforeFocus
  }), render({
    ourProps,
    theirProps,
    slot,
    defaultTag: DEFAULT_PANEL_TAG3,
    features: PanelRenderFeatures2,
    visible,
    name: "Popover.Panel"
  }), visible && isPortalled && /* @__PURE__ */ import_react33.default.createElement(Hidden, {
    id: afterPanelSentinelId,
    ref: state2.afterPanelSentinel,
    features: 2 /* Focusable */,
    as: "button",
    type: "button",
    onFocus: handleAfterFocus
  }));
});
var DEFAULT_GROUP_TAG2 = "div";
var Group3 = forwardRefWithAs(function Group4(props, ref) {
  let internalGroupRef = (0, import_react33.useRef)(null);
  let groupRef = useSyncRefs(internalGroupRef, ref);
  let [popovers, setPopovers] = (0, import_react33.useState)([]);
  let unregisterPopover = useEvent((registerbag) => {
    setPopovers((existing) => {
      let idx = existing.indexOf(registerbag);
      if (idx !== -1) {
        let clone = existing.slice();
        clone.splice(idx, 1);
        return clone;
      }
      return existing;
    });
  });
  let registerPopover = useEvent((registerbag) => {
    setPopovers((existing) => [...existing, registerbag]);
    return () => unregisterPopover(registerbag);
  });
  let isFocusWithinPopoverGroup = useEvent(() => {
    var _a2;
    let ownerDocument = getOwnerDocument(internalGroupRef);
    if (!ownerDocument)
      return false;
    let element = ownerDocument.activeElement;
    if ((_a2 = internalGroupRef.current) == null ? void 0 : _a2.contains(element))
      return true;
    return popovers.some((bag) => {
      var _a3, _b;
      return ((_a3 = ownerDocument.getElementById(bag.buttonId.current)) == null ? void 0 : _a3.contains(element)) || ((_b = ownerDocument.getElementById(bag.panelId.current)) == null ? void 0 : _b.contains(element));
    });
  });
  let closeOthers = useEvent((buttonId) => {
    for (let popover of popovers) {
      if (popover.buttonId.current !== buttonId)
        popover.close();
    }
  });
  let contextBag = (0, import_react33.useMemo)(() => ({
    registerPopover,
    unregisterPopover,
    isFocusWithinPopoverGroup,
    closeOthers
  }), [registerPopover, unregisterPopover, isFocusWithinPopoverGroup, closeOthers]);
  let slot = (0, import_react33.useMemo)(() => ({}), []);
  let theirProps = props;
  let ourProps = { ref: groupRef };
  return /* @__PURE__ */ import_react33.default.createElement(PopoverGroupContext.Provider, {
    value: contextBag
  }, render({
    ourProps,
    theirProps,
    slot,
    defaultTag: DEFAULT_GROUP_TAG2,
    name: "Popover.Group"
  }));
});
var Popover2 = Object.assign(PopoverRoot, { Button: Button9, Overlay: Overlay3, Panel: Panel5, Group: Group3 });

// src/components/radio-group/radio-group.tsx
var import_react36 = __toESM(require("react"), 1);

// src/hooks/use-flags.ts
var import_react34 = require("react");
function useFlags(initialFlags = 0) {
  let [flags, setFlags] = (0, import_react34.useState)(initialFlags);
  let addFlag = (0, import_react34.useCallback)((flag) => setFlags((flags2) => flags2 | flag), [flags]);
  let hasFlag = (0, import_react34.useCallback)((flag) => Boolean(flags & flag), [flags]);
  let removeFlag = (0, import_react34.useCallback)((flag) => setFlags((flags2) => flags2 & ~flag), [setFlags]);
  let toggleFlag = (0, import_react34.useCallback)((flag) => setFlags((flags2) => flags2 ^ flag), [setFlags]);
  return { addFlag, hasFlag, removeFlag, toggleFlag };
}

// src/components/label/label.tsx
var import_react35 = __toESM(require("react"), 1);
var LabelContext = (0, import_react35.createContext)(null);
function useLabelContext() {
  let context = (0, import_react35.useContext)(LabelContext);
  if (context === null) {
    let err = new Error("You used a <Label /> component, but it is not inside a relevant parent.");
    if (Error.captureStackTrace)
      Error.captureStackTrace(err, useLabelContext);
    throw err;
  }
  return context;
}
function useLabels() {
  let [labelIds, setLabelIds] = (0, import_react35.useState)([]);
  return [
    labelIds.length > 0 ? labelIds.join(" ") : void 0,
    (0, import_react35.useMemo)(() => {
      return function LabelProvider(props) {
        let register = useEvent((value) => {
          setLabelIds((existing) => [...existing, value]);
          return () => setLabelIds((existing) => {
            let clone = existing.slice();
            let idx = clone.indexOf(value);
            if (idx !== -1)
              clone.splice(idx, 1);
            return clone;
          });
        });
        let contextBag = (0, import_react35.useMemo)(() => ({ register, slot: props.slot, name: props.name, props: props.props }), [register, props.slot, props.name, props.props]);
        return /* @__PURE__ */ import_react35.default.createElement(LabelContext.Provider, {
          value: contextBag
        }, props.children);
      };
    }, [setLabelIds])
  ];
}
var DEFAULT_LABEL_TAG3 = "label";
var Label5 = forwardRefWithAs(function Label6(props, ref) {
  let internalId = useId();
  let { id: id2 = `headlessui-label-${internalId}`, passive = false, ...theirProps } = props;
  let context = useLabelContext();
  let labelRef = useSyncRefs(ref);
  useIsoMorphicEffect(() => context.register(id2), [id2, context.register]);
  let ourProps = { ref: labelRef, ...context.props, id: id2 };
  if (passive) {
    if ("onClick" in ourProps) {
      delete ourProps["onClick"];
    }
    if ("onClick" in theirProps) {
      delete theirProps["onClick"];
    }
  }
  return render({
    ourProps,
    theirProps,
    slot: context.slot || {},
    defaultTag: DEFAULT_LABEL_TAG3,
    name: context.name || "Label"
  });
});

// src/components/radio-group/radio-group.tsx
var reducers7 = {
  [0 /* RegisterOption */](state2, action) {
    let nextOptions = [
      ...state2.options,
      { id: action.id, element: action.element, propsRef: action.propsRef }
    ];
    return {
      ...state2,
      options: sortByDomNode(nextOptions, (option) => option.element.current)
    };
  },
  [1 /* UnregisterOption */](state2, action) {
    let options = state2.options.slice();
    let idx = state2.options.findIndex((radio) => radio.id === action.id);
    if (idx === -1)
      return state2;
    options.splice(idx, 1);
    return { ...state2, options };
  }
};
var RadioGroupDataContext = (0, import_react36.createContext)(null);
RadioGroupDataContext.displayName = "RadioGroupDataContext";
function useData3(component) {
  let context = (0, import_react36.useContext)(RadioGroupDataContext);
  if (context === null) {
    let err = new Error(`<${component} /> is missing a parent <RadioGroup /> component.`);
    if (Error.captureStackTrace)
      Error.captureStackTrace(err, useData3);
    throw err;
  }
  return context;
}
var RadioGroupActionsContext = (0, import_react36.createContext)(null);
RadioGroupActionsContext.displayName = "RadioGroupActionsContext";
function useActions3(component) {
  let context = (0, import_react36.useContext)(RadioGroupActionsContext);
  if (context === null) {
    let err = new Error(`<${component} /> is missing a parent <RadioGroup /> component.`);
    if (Error.captureStackTrace)
      Error.captureStackTrace(err, useActions3);
    throw err;
  }
  return context;
}
function stateReducer7(state2, action) {
  return match(action.type, reducers7, state2, action);
}
var DEFAULT_RADIO_GROUP_TAG = "div";
var RadioGroupRoot = forwardRefWithAs(function RadioGroup(props, ref) {
  let internalId = useId();
  let {
    id: id2 = `headlessui-radiogroup-${internalId}`,
    value: controlledValue,
    defaultValue,
    name,
    onChange: controlledOnChange,
    by = (a, z) => a === z,
    disabled = false,
    ...theirProps
  } = props;
  let compare = useEvent(typeof by === "string" ? (a, z) => {
    let property = by;
    return (a == null ? void 0 : a[property]) === (z == null ? void 0 : z[property]);
  } : by);
  let [state2, dispatch] = (0, import_react36.useReducer)(stateReducer7, { options: [] });
  let options = state2.options;
  let [labelledby, LabelProvider] = useLabels();
  let [describedby, DescriptionProvider] = useDescriptions();
  let internalRadioGroupRef = (0, import_react36.useRef)(null);
  let radioGroupRef = useSyncRefs(internalRadioGroupRef, ref);
  let [value, onChange] = useControllable(controlledValue, controlledOnChange, defaultValue);
  let firstOption = (0, import_react36.useMemo)(() => options.find((option) => {
    if (option.propsRef.current.disabled)
      return false;
    return true;
  }), [options]);
  let containsCheckedOption = (0, import_react36.useMemo)(() => options.some((option) => compare(option.propsRef.current.value, value)), [options, value]);
  let triggerChange = useEvent((nextValue) => {
    var _a2;
    if (disabled)
      return false;
    if (compare(nextValue, value))
      return false;
    let nextOption = (_a2 = options.find((option) => compare(option.propsRef.current.value, nextValue))) == null ? void 0 : _a2.propsRef.current;
    if (nextOption == null ? void 0 : nextOption.disabled)
      return false;
    onChange == null ? void 0 : onChange(nextValue);
    return true;
  });
  useTreeWalker({
    container: internalRadioGroupRef.current,
    accept(node) {
      if (node.getAttribute("role") === "radio")
        return NodeFilter.FILTER_REJECT;
      if (node.hasAttribute("role"))
        return NodeFilter.FILTER_SKIP;
      return NodeFilter.FILTER_ACCEPT;
    },
    walk(node) {
      node.setAttribute("role", "none");
    }
  });
  let handleKeyDown = useEvent((event) => {
    let container = internalRadioGroupRef.current;
    if (!container)
      return;
    let ownerDocument = getOwnerDocument(container);
    let all = options.filter((option) => option.propsRef.current.disabled === false).map((radio) => radio.element.current);
    switch (event.key) {
      case "Enter" /* Enter */:
        attemptSubmit(event.currentTarget);
        break;
      case "ArrowLeft" /* ArrowLeft */:
      case "ArrowUp" /* ArrowUp */:
        {
          event.preventDefault();
          event.stopPropagation();
          let result = focusIn(all, 2 /* Previous */ | 16 /* WrapAround */);
          if (result === 2 /* Success */) {
            let activeOption = options.find((option) => option.element.current === (ownerDocument == null ? void 0 : ownerDocument.activeElement));
            if (activeOption)
              triggerChange(activeOption.propsRef.current.value);
          }
        }
        break;
      case "ArrowRight" /* ArrowRight */:
      case "ArrowDown" /* ArrowDown */:
        {
          event.preventDefault();
          event.stopPropagation();
          let result = focusIn(all, 4 /* Next */ | 16 /* WrapAround */);
          if (result === 2 /* Success */) {
            let activeOption = options.find((option) => option.element.current === (ownerDocument == null ? void 0 : ownerDocument.activeElement));
            if (activeOption)
              triggerChange(activeOption.propsRef.current.value);
          }
        }
        break;
      case " " /* Space */:
        {
          event.preventDefault();
          event.stopPropagation();
          let activeOption = options.find((option) => option.element.current === (ownerDocument == null ? void 0 : ownerDocument.activeElement));
          if (activeOption)
            triggerChange(activeOption.propsRef.current.value);
        }
        break;
    }
  });
  let registerOption = useEvent((option) => {
    dispatch({ type: 0 /* RegisterOption */, ...option });
    return () => dispatch({ type: 1 /* UnregisterOption */, id: option.id });
  });
  let radioGroupData = (0, import_react36.useMemo)(() => ({ value, firstOption, containsCheckedOption, disabled, compare, ...state2 }), [value, firstOption, containsCheckedOption, disabled, compare, state2]);
  let radioGroupActions = (0, import_react36.useMemo)(() => ({ registerOption, change: triggerChange }), [registerOption, triggerChange]);
  let ourProps = {
    ref: radioGroupRef,
    id: id2,
    role: "radiogroup",
    "aria-labelledby": labelledby,
    "aria-describedby": describedby,
    onKeyDown: handleKeyDown
  };
  let slot = (0, import_react36.useMemo)(() => ({ value }), [value]);
  let form = (0, import_react36.useRef)(null);
  let d = useDisposables();
  (0, import_react36.useEffect)(() => {
    if (!form.current)
      return;
    if (defaultValue === void 0)
      return;
    d.addEventListener(form.current, "reset", () => {
      triggerChange(defaultValue);
    });
  }, [form, triggerChange]);
  return /* @__PURE__ */ import_react36.default.createElement(DescriptionProvider, {
    name: "RadioGroup.Description"
  }, /* @__PURE__ */ import_react36.default.createElement(LabelProvider, {
    name: "RadioGroup.Label"
  }, /* @__PURE__ */ import_react36.default.createElement(RadioGroupActionsContext.Provider, {
    value: radioGroupActions
  }, /* @__PURE__ */ import_react36.default.createElement(RadioGroupDataContext.Provider, {
    value: radioGroupData
  }, name != null && value != null && objectToFormEntries({ [name]: value }).map(([name2, value2], idx) => /* @__PURE__ */ import_react36.default.createElement(Hidden, {
    features: 4 /* Hidden */,
    ref: idx === 0 ? (element) => {
      var _a2;
      form.current = (_a2 = element == null ? void 0 : element.closest("form")) != null ? _a2 : null;
    } : void 0,
    ...compact({
      key: name2,
      as: "input",
      type: "radio",
      checked: value2 != null,
      hidden: true,
      readOnly: true,
      name: name2,
      value: value2
    })
  })), render({
    ourProps,
    theirProps,
    slot,
    defaultTag: DEFAULT_RADIO_GROUP_TAG,
    name: "RadioGroup"
  })))));
});
var DEFAULT_OPTION_TAG3 = "div";
var Option5 = forwardRefWithAs(function Option6(props, ref) {
  var _a2;
  let internalId = useId();
  let {
    id: id2 = `headlessui-radiogroup-option-${internalId}`,
    value,
    disabled = false,
    ...theirProps
  } = props;
  let internalOptionRef = (0, import_react36.useRef)(null);
  let optionRef = useSyncRefs(internalOptionRef, ref);
  let [labelledby, LabelProvider] = useLabels();
  let [describedby, DescriptionProvider] = useDescriptions();
  let { addFlag, removeFlag, hasFlag } = useFlags(1 /* Empty */);
  let propsRef = useLatestValue({ value, disabled });
  let data = useData3("RadioGroup.Option");
  let actions = useActions3("RadioGroup.Option");
  useIsoMorphicEffect(() => actions.registerOption({ id: id2, element: internalOptionRef, propsRef }), [id2, actions, internalOptionRef, props]);
  let handleClick = useEvent((event) => {
    var _a3;
    if (isDisabledReactIssue7711(event.currentTarget))
      return event.preventDefault();
    if (!actions.change(value))
      return;
    addFlag(2 /* Active */);
    (_a3 = internalOptionRef.current) == null ? void 0 : _a3.focus();
  });
  let handleFocus = useEvent((event) => {
    if (isDisabledReactIssue7711(event.currentTarget))
      return event.preventDefault();
    addFlag(2 /* Active */);
  });
  let handleBlur = useEvent(() => removeFlag(2 /* Active */));
  let isFirstOption = ((_a2 = data.firstOption) == null ? void 0 : _a2.id) === id2;
  let isDisabled = data.disabled || disabled;
  let checked = data.compare(data.value, value);
  let ourProps = {
    ref: optionRef,
    id: id2,
    role: "radio",
    "aria-checked": checked ? "true" : "false",
    "aria-labelledby": labelledby,
    "aria-describedby": describedby,
    "aria-disabled": isDisabled ? true : void 0,
    tabIndex: (() => {
      if (isDisabled)
        return -1;
      if (checked)
        return 0;
      if (!data.containsCheckedOption && isFirstOption)
        return 0;
      return -1;
    })(),
    onClick: isDisabled ? void 0 : handleClick,
    onFocus: isDisabled ? void 0 : handleFocus,
    onBlur: isDisabled ? void 0 : handleBlur
  };
  let slot = (0, import_react36.useMemo)(() => ({ checked, disabled: isDisabled, active: hasFlag(2 /* Active */) }), [checked, isDisabled, hasFlag]);
  return /* @__PURE__ */ import_react36.default.createElement(DescriptionProvider, {
    name: "RadioGroup.Description"
  }, /* @__PURE__ */ import_react36.default.createElement(LabelProvider, {
    name: "RadioGroup.Label"
  }, render({
    ourProps,
    theirProps,
    slot,
    defaultTag: DEFAULT_OPTION_TAG3,
    name: "RadioGroup.Option"
  })));
});
var RadioGroup2 = Object.assign(RadioGroupRoot, { Option: Option5, Label: Label5, Description });

// src/components/switch/switch.tsx
var import_react37 = __toESM(require("react"), 1);
var GroupContext = (0, import_react37.createContext)(null);
GroupContext.displayName = "GroupContext";
var DEFAULT_GROUP_TAG3 = import_react37.Fragment;
function Group5(props) {
  let [switchElement, setSwitchElement] = (0, import_react37.useState)(null);
  let [labelledby, LabelProvider] = useLabels();
  let [describedby, DescriptionProvider] = useDescriptions();
  let context = (0, import_react37.useMemo)(() => ({ switch: switchElement, setSwitch: setSwitchElement, labelledby, describedby }), [switchElement, setSwitchElement, labelledby, describedby]);
  let ourProps = {};
  let theirProps = props;
  return /* @__PURE__ */ import_react37.default.createElement(DescriptionProvider, {
    name: "Switch.Description"
  }, /* @__PURE__ */ import_react37.default.createElement(LabelProvider, {
    name: "Switch.Label",
    props: {
      onClick() {
        if (!switchElement)
          return;
        switchElement.click();
        switchElement.focus({ preventScroll: true });
      }
    }
  }, /* @__PURE__ */ import_react37.default.createElement(GroupContext.Provider, {
    value: context
  }, render({
    ourProps,
    theirProps,
    defaultTag: DEFAULT_GROUP_TAG3,
    name: "Switch.Group"
  }))));
}
var DEFAULT_SWITCH_TAG = "button";
var SwitchRoot = forwardRefWithAs(function Switch(props, ref) {
  let internalId = useId();
  let {
    id: id2 = `headlessui-switch-${internalId}`,
    checked: controlledChecked,
    defaultChecked = false,
    onChange: controlledOnChange,
    name,
    value,
    ...theirProps
  } = props;
  let groupContext = (0, import_react37.useContext)(GroupContext);
  let internalSwitchRef = (0, import_react37.useRef)(null);
  let switchRef = useSyncRefs(internalSwitchRef, ref, groupContext === null ? null : groupContext.setSwitch);
  let [checked, onChange] = useControllable(controlledChecked, controlledOnChange, defaultChecked);
  let toggle = useEvent(() => onChange == null ? void 0 : onChange(!checked));
  let handleClick = useEvent((event) => {
    if (isDisabledReactIssue7711(event.currentTarget))
      return event.preventDefault();
    event.preventDefault();
    toggle();
  });
  let handleKeyUp = useEvent((event) => {
    if (event.key === " " /* Space */) {
      event.preventDefault();
      toggle();
    } else if (event.key === "Enter" /* Enter */) {
      attemptSubmit(event.currentTarget);
    }
  });
  let handleKeyPress = useEvent((event) => event.preventDefault());
  let slot = (0, import_react37.useMemo)(() => ({ checked }), [checked]);
  let ourProps = {
    id: id2,
    ref: switchRef,
    role: "switch",
    type: useResolveButtonType(props, internalSwitchRef),
    tabIndex: 0,
    "aria-checked": checked,
    "aria-labelledby": groupContext == null ? void 0 : groupContext.labelledby,
    "aria-describedby": groupContext == null ? void 0 : groupContext.describedby,
    onClick: handleClick,
    onKeyUp: handleKeyUp,
    onKeyPress: handleKeyPress
  };
  let d = useDisposables();
  (0, import_react37.useEffect)(() => {
    var _a2;
    let form = (_a2 = internalSwitchRef.current) == null ? void 0 : _a2.closest("form");
    if (!form)
      return;
    if (defaultChecked === void 0)
      return;
    d.addEventListener(form, "reset", () => {
      onChange(defaultChecked);
    });
  }, [internalSwitchRef, onChange]);
  return /* @__PURE__ */ import_react37.default.createElement(import_react37.default.Fragment, null, name != null && checked && /* @__PURE__ */ import_react37.default.createElement(Hidden, {
    features: 4 /* Hidden */,
    ...compact({
      as: "input",
      type: "checkbox",
      hidden: true,
      readOnly: true,
      checked,
      name,
      value
    })
  }), render({ ourProps, theirProps, slot, defaultTag: DEFAULT_SWITCH_TAG, name: "Switch" }));
});
var Switch2 = Object.assign(SwitchRoot, { Group: Group5, Label: Label5, Description });

// src/components/tabs/tabs.tsx
var import_react39 = __toESM(require("react"), 1);

// src/internal/focus-sentinel.tsx
var import_react38 = __toESM(require("react"), 1);
function FocusSentinel({ onFocus }) {
  let [enabled, setEnabled] = (0, import_react38.useState)(true);
  if (!enabled)
    return null;
  return /* @__PURE__ */ import_react38.default.createElement(Hidden, {
    as: "button",
    type: "button",
    features: 2 /* Focusable */,
    onFocus: (event) => {
      event.preventDefault();
      let frame;
      let tries = 50;
      function forwardFocus() {
        if (tries-- <= 0) {
          if (frame)
            cancelAnimationFrame(frame);
          return;
        }
        if (onFocus()) {
          setEnabled(false);
          cancelAnimationFrame(frame);
          return;
        }
        frame = requestAnimationFrame(forwardFocus);
      }
      frame = requestAnimationFrame(forwardFocus);
    }
  });
}

// src/components/tabs/tabs.tsx
var reducers8 = {
  [0 /* SetSelectedIndex */](state2, action) {
    let focusableTabs = state2.tabs.filter((tab) => {
      var _a2;
      return !((_a2 = tab.current) == null ? void 0 : _a2.hasAttribute("disabled"));
    });
    if (action.index < 0) {
      return { ...state2, selectedIndex: state2.tabs.indexOf(focusableTabs[0]) };
    } else if (action.index > state2.tabs.length) {
      return {
        ...state2,
        selectedIndex: state2.tabs.indexOf(focusableTabs[focusableTabs.length - 1])
      };
    }
    let before = state2.tabs.slice(0, action.index);
    let after = state2.tabs.slice(action.index);
    let next = [...after, ...before].find((tab) => focusableTabs.includes(tab));
    if (!next)
      return state2;
    return { ...state2, selectedIndex: state2.tabs.indexOf(next) };
  },
  [1 /* RegisterTab */](state2, action) {
    var _a2;
    if (state2.tabs.includes(action.tab))
      return state2;
    let activeTab = state2.tabs[state2.selectedIndex];
    let adjustedTabs = sortByDomNode([...state2.tabs, action.tab], (tab) => tab.current);
    let selectedIndex = (_a2 = adjustedTabs.indexOf(activeTab)) != null ? _a2 : state2.selectedIndex;
    if (selectedIndex === -1)
      selectedIndex = state2.selectedIndex;
    return { ...state2, tabs: adjustedTabs, selectedIndex };
  },
  [2 /* UnregisterTab */](state2, action) {
    return { ...state2, tabs: state2.tabs.filter((tab) => tab !== action.tab) };
  },
  [3 /* RegisterPanel */](state2, action) {
    if (state2.panels.includes(action.panel))
      return state2;
    return {
      ...state2,
      panels: sortByDomNode([...state2.panels, action.panel], (panel) => panel.current)
    };
  },
  [4 /* UnregisterPanel */](state2, action) {
    return { ...state2, panels: state2.panels.filter((panel) => panel !== action.panel) };
  }
};
var TabsSSRContext = (0, import_react39.createContext)(null);
TabsSSRContext.displayName = "TabsSSRContext";
function useSSRTabsCounter(component) {
  let context = (0, import_react39.useContext)(TabsSSRContext);
  if (context === null) {
    let err = new Error(`<${component} /> is missing a parent <Tab.Group /> component.`);
    if (Error.captureStackTrace)
      Error.captureStackTrace(err, useSSRTabsCounter);
    throw err;
  }
  return context;
}
var TabsDataContext = (0, import_react39.createContext)(null);
TabsDataContext.displayName = "TabsDataContext";
function useData4(component) {
  let context = (0, import_react39.useContext)(TabsDataContext);
  if (context === null) {
    let err = new Error(`<${component} /> is missing a parent <Tab.Group /> component.`);
    if (Error.captureStackTrace)
      Error.captureStackTrace(err, useData4);
    throw err;
  }
  return context;
}
var TabsActionsContext = (0, import_react39.createContext)(null);
TabsActionsContext.displayName = "TabsActionsContext";
function useActions4(component) {
  let context = (0, import_react39.useContext)(TabsActionsContext);
  if (context === null) {
    let err = new Error(`<${component} /> is missing a parent <Tab.Group /> component.`);
    if (Error.captureStackTrace)
      Error.captureStackTrace(err, useActions4);
    throw err;
  }
  return context;
}
function stateReducer8(state2, action) {
  return match(action.type, reducers8, state2, action);
}
var DEFAULT_TABS_TAG = import_react39.Fragment;
var Tabs = forwardRefWithAs(function Tabs2(props, ref) {
  let {
    defaultIndex = 0,
    vertical = false,
    manual = false,
    onChange,
    selectedIndex = null,
    ...theirProps
  } = props;
  const orientation = vertical ? "vertical" : "horizontal";
  const activation = manual ? "manual" : "auto";
  let isControlled = selectedIndex !== null;
  let tabsRef = useSyncRefs(ref);
  let [state2, dispatch] = (0, import_react39.useReducer)(stateReducer8, {
    selectedIndex: selectedIndex != null ? selectedIndex : defaultIndex,
    tabs: [],
    panels: []
  });
  let slot = (0, import_react39.useMemo)(() => ({ selectedIndex: state2.selectedIndex }), [state2.selectedIndex]);
  let onChangeRef = useLatestValue(onChange || (() => {
  }));
  let stableTabsRef = useLatestValue(state2.tabs);
  let tabsData = (0, import_react39.useMemo)(() => ({ orientation, activation, ...state2 }), [orientation, activation, state2]);
  let registerTab = useEvent((tab) => {
    dispatch({ type: 1 /* RegisterTab */, tab });
    return () => dispatch({ type: 2 /* UnregisterTab */, tab });
  });
  let registerPanel = useEvent((panel) => {
    dispatch({ type: 3 /* RegisterPanel */, panel });
    return () => dispatch({ type: 4 /* UnregisterPanel */, panel });
  });
  let change = useEvent((index) => {
    if (realSelectedIndex.current !== index) {
      onChangeRef.current(index);
    }
    if (!isControlled) {
      dispatch({ type: 0 /* SetSelectedIndex */, index });
    }
  });
  let realSelectedIndex = useLatestValue(isControlled ? props.selectedIndex : state2.selectedIndex);
  let tabsActions = (0, import_react39.useMemo)(() => ({ registerTab, registerPanel, change }), []);
  useIsoMorphicEffect(() => {
    dispatch({ type: 0 /* SetSelectedIndex */, index: selectedIndex != null ? selectedIndex : defaultIndex });
  }, [selectedIndex]);
  let SSRCounter = (0, import_react39.useRef)({ tabs: [], panels: [] });
  let ourProps = { ref: tabsRef };
  return /* @__PURE__ */ import_react39.default.createElement(TabsSSRContext.Provider, {
    value: SSRCounter
  }, /* @__PURE__ */ import_react39.default.createElement(TabsActionsContext.Provider, {
    value: tabsActions
  }, /* @__PURE__ */ import_react39.default.createElement(TabsDataContext.Provider, {
    value: tabsData
  }, tabsData.tabs.length <= 0 && /* @__PURE__ */ import_react39.default.createElement(FocusSentinel, {
    onFocus: () => {
      var _a2, _b;
      for (let tab of stableTabsRef.current) {
        if (((_a2 = tab.current) == null ? void 0 : _a2.tabIndex) === 0) {
          (_b = tab.current) == null ? void 0 : _b.focus();
          return true;
        }
      }
      return false;
    }
  }), render({
    ourProps,
    theirProps,
    slot,
    defaultTag: DEFAULT_TABS_TAG,
    name: "Tabs"
  }))));
});
var DEFAULT_LIST_TAG = "div";
var List = forwardRefWithAs(function List2(props, ref) {
  let { orientation, selectedIndex } = useData4("Tab.List");
  let listRef = useSyncRefs(ref);
  let slot = { selectedIndex };
  let theirProps = props;
  let ourProps = {
    ref: listRef,
    role: "tablist",
    "aria-orientation": orientation
  };
  return render({
    ourProps,
    theirProps,
    slot,
    defaultTag: DEFAULT_LIST_TAG,
    name: "Tabs.List"
  });
});
var DEFAULT_TAB_TAG = "button";
var TabRoot = forwardRefWithAs(function Tab(props, ref) {
  var _a2, _b;
  let internalId = useId();
  let { id: id2 = `headlessui-tabs-tab-${internalId}`, ...theirProps } = props;
  let { orientation, activation, selectedIndex, tabs, panels } = useData4("Tab");
  let actions = useActions4("Tab");
  let data = useData4("Tab");
  let SSRContext = useSSRTabsCounter("Tab");
  let internalTabRef = (0, import_react39.useRef)(null);
  let tabRef = useSyncRefs(internalTabRef, ref);
  useIsoMorphicEffect(() => actions.registerTab(internalTabRef), [actions, internalTabRef]);
  let mySSRIndex = SSRContext.current.tabs.indexOf(id2);
  if (mySSRIndex === -1)
    mySSRIndex = SSRContext.current.tabs.push(id2) - 1;
  let myIndex = tabs.indexOf(internalTabRef);
  if (myIndex === -1)
    myIndex = mySSRIndex;
  let selected = myIndex === selectedIndex;
  let activateUsing = useEvent((cb) => {
    var _a3;
    let result = cb();
    if (result === 2 /* Success */ && activation === "auto") {
      let newTab = (_a3 = getOwnerDocument(internalTabRef)) == null ? void 0 : _a3.activeElement;
      let idx = data.tabs.findIndex((tab) => tab.current === newTab);
      if (idx !== -1)
        actions.change(idx);
    }
    return result;
  });
  let handleKeyDown = useEvent((event) => {
    let list = tabs.map((tab) => tab.current).filter(Boolean);
    if (event.key === " " /* Space */ || event.key === "Enter" /* Enter */) {
      event.preventDefault();
      event.stopPropagation();
      actions.change(myIndex);
      return;
    }
    switch (event.key) {
      case "Home" /* Home */:
      case "PageUp" /* PageUp */:
        event.preventDefault();
        event.stopPropagation();
        return activateUsing(() => focusIn(list, 1 /* First */));
      case "End" /* End */:
      case "PageDown" /* PageDown */:
        event.preventDefault();
        event.stopPropagation();
        return activateUsing(() => focusIn(list, 8 /* Last */));
    }
    let result = activateUsing(() => {
      return match(orientation, {
        vertical() {
          if (event.key === "ArrowUp" /* ArrowUp */)
            return focusIn(list, 2 /* Previous */ | 16 /* WrapAround */);
          if (event.key === "ArrowDown" /* ArrowDown */)
            return focusIn(list, 4 /* Next */ | 16 /* WrapAround */);
          return 0 /* Error */;
        },
        horizontal() {
          if (event.key === "ArrowLeft" /* ArrowLeft */)
            return focusIn(list, 2 /* Previous */ | 16 /* WrapAround */);
          if (event.key === "ArrowRight" /* ArrowRight */)
            return focusIn(list, 4 /* Next */ | 16 /* WrapAround */);
          return 0 /* Error */;
        }
      });
    });
    if (result === 2 /* Success */) {
      return event.preventDefault();
    }
  });
  let ready = (0, import_react39.useRef)(false);
  let handleSelection = useEvent(() => {
    var _a3;
    if (ready.current)
      return;
    ready.current = true;
    (_a3 = internalTabRef.current) == null ? void 0 : _a3.focus();
    actions.change(myIndex);
    microTask(() => {
      ready.current = false;
    });
  });
  let handleMouseDown = useEvent((event) => {
    event.preventDefault();
  });
  let slot = (0, import_react39.useMemo)(() => ({ selected }), [selected]);
  let ourProps = {
    ref: tabRef,
    onKeyDown: handleKeyDown,
    onMouseDown: handleMouseDown,
    onClick: handleSelection,
    id: id2,
    role: "tab",
    type: useResolveButtonType(props, internalTabRef),
    "aria-controls": (_b = (_a2 = panels[myIndex]) == null ? void 0 : _a2.current) == null ? void 0 : _b.id,
    "aria-selected": selected,
    tabIndex: selected ? 0 : -1
  };
  return render({
    ourProps,
    theirProps,
    slot,
    defaultTag: DEFAULT_TAB_TAG,
    name: "Tabs.Tab"
  });
});
var DEFAULT_PANELS_TAG = "div";
var Panels = forwardRefWithAs(function Panels2(props, ref) {
  let { selectedIndex } = useData4("Tab.Panels");
  let panelsRef = useSyncRefs(ref);
  let slot = (0, import_react39.useMemo)(() => ({ selectedIndex }), [selectedIndex]);
  let theirProps = props;
  let ourProps = { ref: panelsRef };
  return render({
    ourProps,
    theirProps,
    slot,
    defaultTag: DEFAULT_PANELS_TAG,
    name: "Tabs.Panels"
  });
});
var DEFAULT_PANEL_TAG4 = "div";
var PanelRenderFeatures3 = 1 /* RenderStrategy */ | 2 /* Static */;
var Panel7 = forwardRefWithAs(function Panel8(props, ref) {
  var _a2, _b, _c, _d;
  let internalId = useId();
  let { id: id2 = `headlessui-tabs-panel-${internalId}`, ...theirProps } = props;
  let { selectedIndex, tabs, panels } = useData4("Tab.Panel");
  let actions = useActions4("Tab.Panel");
  let SSRContext = useSSRTabsCounter("Tab.Panel");
  let internalPanelRef = (0, import_react39.useRef)(null);
  let panelRef = useSyncRefs(internalPanelRef, ref);
  useIsoMorphicEffect(() => actions.registerPanel(internalPanelRef), [actions, internalPanelRef]);
  let mySSRIndex = SSRContext.current.panels.indexOf(id2);
  if (mySSRIndex === -1)
    mySSRIndex = SSRContext.current.panels.push(id2) - 1;
  let myIndex = panels.indexOf(internalPanelRef);
  if (myIndex === -1)
    myIndex = mySSRIndex;
  let selected = myIndex === selectedIndex;
  let slot = (0, import_react39.useMemo)(() => ({ selected }), [selected]);
  let ourProps = {
    ref: panelRef,
    id: id2,
    role: "tabpanel",
    "aria-labelledby": (_b = (_a2 = tabs[myIndex]) == null ? void 0 : _a2.current) == null ? void 0 : _b.id,
    tabIndex: selected ? 0 : -1
  };
  if (!selected && ((_c = theirProps.unmount) != null ? _c : true) && !((_d = theirProps.static) != null ? _d : false)) {
    return /* @__PURE__ */ import_react39.default.createElement(Hidden, {
      as: "span",
      ...ourProps
    });
  }
  return render({
    ourProps,
    theirProps,
    slot,
    defaultTag: DEFAULT_PANEL_TAG4,
    features: PanelRenderFeatures3,
    visible: selected,
    name: "Tabs.Panel"
  });
});
var Tab2 = Object.assign(TabRoot, { Group: Tabs, List, Panels, Panel: Panel7 });

// src/components/transitions/transition.tsx
var import_react40 = __toESM(require("react"), 1);

// src/utils/once.ts
function once(cb) {
  let state2 = { called: false };
  return (...args) => {
    if (state2.called)
      return;
    state2.called = true;
    return cb(...args);
  };
}

// src/components/transitions/utils/transition.ts
function addClasses(node, ...classes) {
  node && classes.length > 0 && node.classList.add(...classes);
}
function removeClasses(node, ...classes) {
  node && classes.length > 0 && node.classList.remove(...classes);
}
function waitForTransition(node, done) {
  let d = disposables();
  if (!node)
    return d.dispose;
  let { transitionDuration, transitionDelay } = getComputedStyle(node);
  let [durationMs, delayMs] = [transitionDuration, transitionDelay].map((value) => {
    let [resolvedValue = 0] = value.split(",").filter(Boolean).map((v) => v.includes("ms") ? parseFloat(v) : parseFloat(v) * 1e3).sort((a, z) => z - a);
    return resolvedValue;
  });
  let totalDuration = durationMs + delayMs;
  if (totalDuration !== 0) {
    if (false) {
      let dispose = d.setTimeout(() => {
        done();
        dispose();
      }, totalDuration);
    } else {
      let dispose = d.addEventListener(node, "transitionend", (event) => {
        if (event.target !== event.currentTarget)
          return;
        done();
        dispose();
      });
    }
  } else {
    done();
  }
  d.add(() => done());
  return d.dispose;
}
function transition(node, classes, show, done) {
  let direction = show ? "enter" : "leave";
  let d = disposables();
  let _done = done !== void 0 ? once(done) : () => {
  };
  if (direction === "enter") {
    node.removeAttribute("hidden");
    node.style.display = "";
  }
  let base = match(direction, {
    enter: () => classes.enter,
    leave: () => classes.leave
  });
  let to = match(direction, {
    enter: () => classes.enterTo,
    leave: () => classes.leaveTo
  });
  let from = match(direction, {
    enter: () => classes.enterFrom,
    leave: () => classes.leaveFrom
  });
  removeClasses(node, ...classes.enter, ...classes.enterTo, ...classes.enterFrom, ...classes.leave, ...classes.leaveFrom, ...classes.leaveTo, ...classes.entered);
  addClasses(node, ...base, ...from);
  d.nextFrame(() => {
    removeClasses(node, ...from);
    addClasses(node, ...to);
    waitForTransition(node, () => {
      removeClasses(node, ...base);
      addClasses(node, ...classes.entered);
      return _done();
    });
  });
  return d.dispose;
}

// src/hooks/use-transition.ts
function useTransition({ container, direction, classes, onStart, onStop }) {
  let mounted = useIsMounted();
  let d = useDisposables();
  let latestDirection = useLatestValue(direction);
  useIsoMorphicEffect(() => {
    let dd = disposables();
    d.add(dd.dispose);
    let node = container.current;
    if (!node)
      return;
    if (latestDirection.current === "idle")
      return;
    if (!mounted.current)
      return;
    dd.dispose();
    onStart.current(latestDirection.current);
    dd.add(transition(node, classes.current, latestDirection.current === "enter", () => {
      dd.dispose();
      onStop.current(latestDirection.current);
    }));
    return dd.dispose;
  }, [direction]);
}

// src/utils/class-names.ts
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

// src/components/transitions/transition.tsx
function splitClasses(classes = "") {
  return classes.split(" ").filter((className) => className.trim().length > 1);
}
var TransitionContext = (0, import_react40.createContext)(null);
TransitionContext.displayName = "TransitionContext";
function useTransitionContext() {
  let context = (0, import_react40.useContext)(TransitionContext);
  if (context === null) {
    throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");
  }
  return context;
}
function useParentNesting() {
  let context = (0, import_react40.useContext)(NestingContext);
  if (context === null) {
    throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");
  }
  return context;
}
var NestingContext = (0, import_react40.createContext)(null);
NestingContext.displayName = "NestingContext";
function hasChildren(bag) {
  if ("children" in bag)
    return hasChildren(bag.children);
  return bag.current.filter(({ el }) => el.current !== null).filter(({ state: state2 }) => state2 === "visible" /* Visible */).length > 0;
}
function useNesting(done, parent) {
  let doneRef = useLatestValue(done);
  let transitionableChildren = (0, import_react40.useRef)([]);
  let mounted = useIsMounted();
  let d = useDisposables();
  let unregister = useEvent((container, strategy = 1 /* Hidden */) => {
    let idx = transitionableChildren.current.findIndex(({ el }) => el === container);
    if (idx === -1)
      return;
    match(strategy, {
      [0 /* Unmount */]() {
        transitionableChildren.current.splice(idx, 1);
      },
      [1 /* Hidden */]() {
        transitionableChildren.current[idx].state = "hidden" /* Hidden */;
      }
    });
    d.microTask(() => {
      var _a2;
      if (!hasChildren(transitionableChildren) && mounted.current) {
        (_a2 = doneRef.current) == null ? void 0 : _a2.call(doneRef);
      }
    });
  });
  let register = useEvent((container) => {
    let child = transitionableChildren.current.find(({ el }) => el === container);
    if (!child) {
      transitionableChildren.current.push({ el: container, state: "visible" /* Visible */ });
    } else if (child.state !== "visible" /* Visible */) {
      child.state = "visible" /* Visible */;
    }
    return () => unregister(container, 0 /* Unmount */);
  });
  let todos = (0, import_react40.useRef)([]);
  let wait = (0, import_react40.useRef)(Promise.resolve());
  let chains = (0, import_react40.useRef)({
    enter: [],
    leave: [],
    idle: []
  });
  let onStart = useEvent((container, direction, cb) => {
    todos.current.splice(0);
    if (parent) {
      parent.chains.current[direction] = parent.chains.current[direction].filter(([containerInParent]) => containerInParent !== container);
    }
    parent == null ? void 0 : parent.chains.current[direction].push([
      container,
      new Promise((resolve) => {
        todos.current.push(resolve);
      })
    ]);
    parent == null ? void 0 : parent.chains.current[direction].push([
      container,
      new Promise((resolve) => {
        Promise.all(chains.current[direction].map(([_container, promise]) => promise)).then(() => resolve());
      })
    ]);
    if (direction === "enter") {
      wait.current = wait.current.then(() => parent == null ? void 0 : parent.wait.current).then(() => cb(direction));
    } else {
      cb(direction);
    }
  });
  let onStop = useEvent((_container, direction, cb) => {
    Promise.all(chains.current[direction].splice(0).map(([_container2, promise]) => promise)).then(() => {
      var _a2;
      (_a2 = todos.current.shift()) == null ? void 0 : _a2();
    }).then(() => cb(direction));
  });
  return (0, import_react40.useMemo)(() => ({
    children: transitionableChildren,
    register,
    unregister,
    onStart,
    onStop,
    wait,
    chains
  }), [register, unregister, transitionableChildren, onStart, onStop, chains, wait]);
}
function noop() {
}
var eventNames = ["beforeEnter", "afterEnter", "beforeLeave", "afterLeave"];
function ensureEventHooksExist(events) {
  var _a2;
  let result = {};
  for (let name of eventNames) {
    result[name] = (_a2 = events[name]) != null ? _a2 : noop;
  }
  return result;
}
function useEvents(events) {
  let eventsRef = (0, import_react40.useRef)(ensureEventHooksExist(events));
  (0, import_react40.useEffect)(() => {
    eventsRef.current = ensureEventHooksExist(events);
  }, [events]);
  return eventsRef;
}
var DEFAULT_TRANSITION_CHILD_TAG = "div";
var TransitionChildRenderFeatures = 1 /* RenderStrategy */;
var TransitionChild = forwardRefWithAs(function TransitionChild2(props, ref) {
  let {
    beforeEnter,
    afterEnter,
    beforeLeave,
    afterLeave,
    enter,
    enterFrom,
    enterTo,
    entered,
    leave,
    leaveFrom,
    leaveTo,
    ...rest
  } = props;
  let container = (0, import_react40.useRef)(null);
  let transitionRef = useSyncRefs(container, ref);
  let strategy = rest.unmount ? 0 /* Unmount */ : 1 /* Hidden */;
  let { show, appear, initial } = useTransitionContext();
  let [state2, setState] = (0, import_react40.useState)(show ? "visible" /* Visible */ : "hidden" /* Hidden */);
  let parentNesting = useParentNesting();
  let { register, unregister } = parentNesting;
  let prevShow = (0, import_react40.useRef)(null);
  (0, import_react40.useEffect)(() => register(container), [register, container]);
  (0, import_react40.useEffect)(() => {
    if (strategy !== 1 /* Hidden */)
      return;
    if (!container.current)
      return;
    if (show && state2 !== "visible" /* Visible */) {
      setState("visible" /* Visible */);
      return;
    }
    return match(state2, {
      ["hidden" /* Hidden */]: () => unregister(container),
      ["visible" /* Visible */]: () => register(container)
    });
  }, [state2, container, register, unregister, show, strategy]);
  let classes = useLatestValue({
    enter: splitClasses(enter),
    enterFrom: splitClasses(enterFrom),
    enterTo: splitClasses(enterTo),
    entered: splitClasses(entered),
    leave: splitClasses(leave),
    leaveFrom: splitClasses(leaveFrom),
    leaveTo: splitClasses(leaveTo)
  });
  let events = useEvents({
    beforeEnter,
    afterEnter,
    beforeLeave,
    afterLeave
  });
  let ready = useServerHandoffComplete();
  (0, import_react40.useEffect)(() => {
    if (ready && state2 === "visible" /* Visible */ && container.current === null) {
      throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?");
    }
  }, [container, state2, ready]);
  let skip = initial && !appear;
  let transitionDirection = (() => {
    if (!ready)
      return "idle";
    if (skip)
      return "idle";
    if (prevShow.current === show)
      return "idle";
    return show ? "enter" : "leave";
  })();
  let beforeEvent = useEvent((direction) => {
    return match(direction, {
      enter: () => events.current.beforeEnter(),
      leave: () => events.current.beforeLeave(),
      idle: () => {
      }
    });
  });
  let afterEvent = useEvent((direction) => {
    return match(direction, {
      enter: () => events.current.afterEnter(),
      leave: () => events.current.afterLeave(),
      idle: () => {
      }
    });
  });
  let nesting = useNesting(() => {
    setState("hidden" /* Hidden */);
    unregister(container);
  }, parentNesting);
  useTransition({
    container,
    classes,
    direction: transitionDirection,
    onStart: useLatestValue((direction) => {
      nesting.onStart(container, direction, beforeEvent);
    }),
    onStop: useLatestValue((direction) => {
      nesting.onStop(container, direction, afterEvent);
      if (direction === "leave" && !hasChildren(nesting)) {
        setState("hidden" /* Hidden */);
        unregister(container);
      }
    })
  });
  (0, import_react40.useEffect)(() => {
    if (!skip)
      return;
    if (strategy === 1 /* Hidden */) {
      prevShow.current = null;
    } else {
      prevShow.current = show;
    }
  }, [show, skip, state2]);
  let theirProps = rest;
  let ourProps = { ref: transitionRef };
  let isServer2 = typeof window === "undefined" || typeof document === "undefined";
  if (appear && show && isServer2) {
    theirProps = {
      ...theirProps,
      className: classNames(rest.className, ...classes.current.enter, ...classes.current.enterFrom)
    };
  }
  return /* @__PURE__ */ import_react40.default.createElement(NestingContext.Provider, {
    value: nesting
  }, /* @__PURE__ */ import_react40.default.createElement(OpenClosedProvider, {
    value: match(state2, {
      ["visible" /* Visible */]: 0 /* Open */,
      ["hidden" /* Hidden */]: 1 /* Closed */
    })
  }, render({
    ourProps,
    theirProps,
    defaultTag: DEFAULT_TRANSITION_CHILD_TAG,
    features: TransitionChildRenderFeatures,
    visible: state2 === "visible" /* Visible */,
    name: "Transition.Child"
  })));
});
var TransitionRoot = forwardRefWithAs(function Transition(props, ref) {
  let { show, appear = false, unmount, ...theirProps } = props;
  let internalTransitionRef = (0, import_react40.useRef)(null);
  let transitionRef = useSyncRefs(internalTransitionRef, ref);
  useServerHandoffComplete();
  let usesOpenClosedState = useOpenClosed();
  if (show === void 0 && usesOpenClosedState !== null) {
    show = match(usesOpenClosedState, {
      [0 /* Open */]: true,
      [1 /* Closed */]: false
    });
  }
  if (![true, false].includes(show)) {
    throw new Error("A <Transition /> is used but it is missing a `show={true | false}` prop.");
  }
  let [state2, setState] = (0, import_react40.useState)(show ? "visible" /* Visible */ : "hidden" /* Hidden */);
  let nestingBag = useNesting(() => {
    setState("hidden" /* Hidden */);
  });
  let [initial, setInitial] = (0, import_react40.useState)(true);
  let changes = (0, import_react40.useRef)([show]);
  useIsoMorphicEffect(() => {
    if (initial === false) {
      return;
    }
    if (changes.current[changes.current.length - 1] !== show) {
      changes.current.push(show);
      setInitial(false);
    }
  }, [changes, show]);
  let transitionBag = (0, import_react40.useMemo)(() => ({ show, appear, initial }), [show, appear, initial]);
  (0, import_react40.useEffect)(() => {
    if (show) {
      setState("visible" /* Visible */);
    } else if (!hasChildren(nestingBag)) {
      setState("hidden" /* Hidden */);
    } else if (true) {
      let node = internalTransitionRef.current;
      if (!node)
        return;
      let rect = node.getBoundingClientRect();
      if (rect.x === 0 && rect.y === 0 && rect.width === 0 && rect.height === 0) {
        setState("hidden" /* Hidden */);
      }
    }
  }, [show, nestingBag]);
  let sharedProps = { unmount };
  return /* @__PURE__ */ import_react40.default.createElement(NestingContext.Provider, {
    value: nestingBag
  }, /* @__PURE__ */ import_react40.default.createElement(TransitionContext.Provider, {
    value: transitionBag
  }, render({
    ourProps: {
      ...sharedProps,
      as: import_react40.Fragment,
      children: /* @__PURE__ */ import_react40.default.createElement(TransitionChild, {
        ref: transitionRef,
        ...sharedProps,
        ...theirProps
      })
    },
    theirProps: {},
    defaultTag: import_react40.Fragment,
    features: TransitionChildRenderFeatures,
    visible: state2 === "visible" /* Visible */,
    name: "Transition"
  })));
});
var Child = forwardRefWithAs(function Child2(props, ref) {
  let hasTransitionContext = (0, import_react40.useContext)(TransitionContext) !== null;
  let hasOpenClosedContext = useOpenClosed() !== null;
  return /* @__PURE__ */ import_react40.default.createElement(import_react40.default.Fragment, null, !hasTransitionContext && hasOpenClosedContext ? /* @__PURE__ */ import_react40.default.createElement(TransitionRoot, {
    ref,
    ...props
  }) : /* @__PURE__ */ import_react40.default.createElement(TransitionChild, {
    ref,
    ...props
  }));
});
var Transition2 = Object.assign(TransitionRoot, { Child, Root: TransitionRoot });
