// stays the same
const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA

// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
    // pseudocode
    // 1. defer the prompt
    // 2. toggle the button to install - hide

    // Store the triggered events
    window.deferredPrompt = event;

    // Remove the hidden class from the button.
    butInstall.classList.toggle('hidden', false);
});

// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
    // pseudocode
    // defer the prompt (line 29)
    // if there is no prompt event,  (31)
    // do nothing
    // no else. just the if statement
    // Create a prompt on that prompt event. (promptEvent.prompt()) 39
    // Prompt event: "Do you want to install XYZ?"
    // Reset the deferred prompt.
    // Toggle the install button again to hide it. 

    const promptEvent = window.deferredPrompt;

    if (!promptEvent) {
        // return - exits the function
        return;
    }

    // Show prompt
    promptEvent.prompt();

    // Reset the deferred prompt variable, it can only be used once.
    window.deferredPrompt = null;

    // Toggle button in HTML - Affect the class list on the HTML element.
    // set hidden property of button to true.
    butInstall.classList.toggle('hidden', true);
});

// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
    // Pseudocode
    // Reset the deferred prompt.

    // Clear prompt
    // property on the window object.
    // the window is the browser.
    window.deferredPrompt = null;
});


