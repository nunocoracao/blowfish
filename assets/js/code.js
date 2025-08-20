var scriptBundle = document.getElementById("script-bundle");
var copyText = scriptBundle?.getAttribute("data-copy") || "Copy";
var copiedText = scriptBundle?.getAttribute("data-copied") || "Copied";

function createCopyButton(highlightDiv) {
  const button = document.createElement("button");
  button.className = "copy-button";
  button.type = "button";
  button.ariaLabel = copyText;
  button.innerText = copyText;
  button.addEventListener("click", () => copyCodeToClipboard(button, highlightDiv));

  highlightDiv.insertBefore(button, highlightDiv.firstChild);
  const wrapper = document.createElement("div");
  wrapper.className = "highlight-wrapper";
  highlightDiv.parentNode.insertBefore(wrapper, highlightDiv);
  wrapper.appendChild(highlightDiv);
}

async function copyCodeToClipboard(button, highlightDiv) {
  const codeToCopy = getCodeText(highlightDiv);

  function fallback(codeToCopy, highlightDiv) {
    const textArea = document.createElement("textArea");
    textArea.contentEditable = "true";
    textArea.readOnly = "false";
    textArea.className = "copy-textarea";
    textArea.value = codeToCopy;
    highlightDiv.insertBefore(textArea, highlightDiv.firstChild);
    const range = document.createRange();
    range.selectNodeContents(textArea);
    const sel = window.getSelection();
    sel.removeAllRanges();
    sel.addRange(range);
    textArea.setSelectionRange(0, 999999);
    document.execCommand("copy");
    highlightDiv.removeChild(textArea);
  }

  try {
    result = await navigator.permissions.query({ name: "clipboard-write" });
    if (result.state == "granted" || result.state == "prompt") {
      await navigator.clipboard.writeText(codeToCopy);
    } else {
      fallback(codeToCopy, highlightDiv);
    }
  } catch (_) {
    fallback(codeToCopy, highlightDiv);
  } finally {
    button.blur();
    button.innerText = copiedText;
    setTimeout(function () {
      button.innerText = copyText;
    }, 2000);
  }
}

function getCodeText(highlightDiv) {
  const codeElement = highlightDiv.querySelector("code");
  if (!codeElement) return "";

  const contentElements = codeElement.querySelectorAll(".cl");

  if (contentElements.length > 0) {
    const lines = Array.from(contentElements).map((el) => el.textContent.replace(/\n$/, ""));
    return lines.join("\n");
  }

  const tableCell = highlightDiv.querySelector(".lntable .lntd:last-child code");
  if (tableCell) {
    return tableCell.textContent.trim();
  }

  return codeElement.textContent.trim();
}

window.addEventListener("DOMContentLoaded", (event) => {
  document.querySelectorAll(".highlight").forEach((highlightDiv) => createCopyButton(highlightDiv));
});
