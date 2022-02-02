var callbackQueue = new Array()
var scriptCounter = 0
var scriptList = {}

class ReactJSMPA {

    static processScriptQueue(scriptID) {

        scriptCounter--

        if (scriptCounter == 0) {
            callbackQueue.forEach((callbackFunc) => {
                callbackFunc()
            })
        }

    }

    static waitForScripts(callback) {
        callbackQueue.push(callback)
    }

    static loadScript(src) {

        if (scriptList[src]) {
            return
        }

        scriptList[src] = true

        const script = document.createElement("script")
        script.type = "text/javascript"
        script.src = src

        scriptCounter++

        if (script.readyState) {
            script.onreadystatechange = function () {
                if (script.readyState === "loaded" || script.readyState === "complete") {
                    script.onreadystatechange = null;
                    ReactJSMPA.processScriptQueue(script.id)
                }
            };
        } else {
            script.onload = function() {
                ReactJSMPA.processScriptQueue(script.id)
            }
        }

        document.head.appendChild(script)

    }
}