var scriptBundle = document.getElementById("script-bundle");
var copyText = scriptBundle?.getAttribute("data-copy") || "Copy";
var copiedText = scriptBundle?.getAttribute("data-copied") || "Copied";

function createCopyButton(highlightWrapper) {
  const button = document.createElement("button");
  button.className = "copy-button";
  button.type = "button";
  button.ariaLabel = copyText;
  button.innerText = copyText;
  button.addEventListener("click", () => copyCodeToClipboard(button, highlightWrapper));
  highlightWrapper.insertBefore(button, highlightWrapper.firstChild);
}

async function copyCodeToClipboard(button, highlightWrapper) {
  const codeToCopy = getCodeText(highlightWrapper);

  function fallback(codeToCopy, highlightWrapper) {
    const textArea = document.createElement("textArea");
    textArea.contentEditable = "true";
    textArea.readOnly = "false";
    textArea.className = "copy-textarea";
    textArea.value = codeToCopy;
    highlightWrapper.insertBefore(textArea, highlightWrapper.firstChild);
    const range = document.createRange();
    range.selectNodeContents(textArea);
    const sel = window.getSelection();
    sel.removeAllRanges();
    sel.addRange(range);
    textArea.focus();
    textArea.setSelectionRange(0, 999999);
    document.execCommand("copy");
    highlightWrapper.removeChild(textArea);
  }

  try {
    result = await navigator.permissions.query({ name: "clipboard-write" });
    if (result.state == "granted" || result.state == "prompt") {
      await navigator.clipboard.writeText(codeToCopy);
    } else {
      fallback(codeToCopy, highlightWrapper);
    }
  } catch (_) {
    fallback(codeToCopy, highlightWrapper);
  } finally {
    button.blur();
    button.innerText = copiedText;
    setTimeout(function () {
      button.innerText = copyText;
    }, 2000);
  }
}

function getCodeText(highlightWrapper) {
  const highlightDiv = highlightWrapper.querySelector(".highlight");
  if (!highlightDiv) return "";

  const codeBlock = highlightDiv.querySelector("code");
  const inlineLines = codeBlock?.querySelectorAll(".cl"); // linenos=inline
  const tableCodeCell = highlightDiv?.querySelector(".lntable .lntd:last-child code"); // linenos=table

  if (!codeBlock) return "";

  if (inlineLines.length > 0) {
    const cleanedLines = Array.from(inlineLines).map((line) => line.textContent.replace(/\n$/, ""));
    return cleanedLines.join("\n");
  }

  if (tableCodeCell) {
    return tableCodeCell.textContent.trim();
  }

  return codeBlock.textContent.trim();
}

window.addEventListener("DOMContentLoaded", (event) => {
  document.querySelectorAll(".highlight-wrapper").forEach((highlightWrapper) => createCopyButton(highlightWrapper));
});
