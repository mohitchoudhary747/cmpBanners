const PUB = window.postMessage;
const SUB = window.addEventListener;

const LOCATIONS = {
  'IN': 'India',
  'default': 'Default',
  'AU': 'Australia',
  "FR": 'France',
  "SG": 'Singapore',
  "BR": 'Brazil'
}

const TOAST_MESSAGES = {
  'INVALID_CONFIG': {
    type: 'error',
    message: 'Invalid Config'
  },
  'FAILED_TO_LOAD_PREFERENCE_CENTER': {
    type: 'error',
    message: 'Failed to load preference center config'
  },
  'PREFERENCE_CENTER_LOADED': {
    type: 'success',
    message: 'Preference center loaded'
  },
  'CONSENTS_PROVIDED': {
    type: 'success',
    message: ""
  },
  'CONSENTS_RECORDED': {
    type: 'success',
    message: 'Consents recorded successfully'
  },
  'CONSENTS_FAILED_TO_RECORD': {
    type: 'error',
    message: 'Consents failed to record'
  }
}

const CREDENTIALS = {
  tenantId: "ba6693e4-a295-4a84-8e07-22718cafe743",
  preferenceCenterId: "c0c094d2-9b31-49af-909f-4fedfd20b720",
  primaryIdentifier: '',
  locationCode: 'IN',
  languageCode: 'fr',
  logLevel: 'error',
  implicitFlow: true,
  implicitRecordConsents: false
};



(function () {
  console.log("[workday]: Parent window script loaded");
  let preferenceRef;

  // Extract the location from url.
  const url = new URL(window.location.href);
  let selectedLocation = url.searchParams.get("loc") || 'default';

  //? STEP 1: subscribe to window events
  SUB("message", handleWindowEvents);

  //? STEP 2: Get the iframe ref and add an onload event listener.
  // As and when iframe loaded(i.e, preference center) workday can send the information that iframe needs
  // in order to load the consents.
  const preferenceIframeRef = document.getElementById("preferenceIframe");
  preferenceIframeRef.addEventListener("load", (ev) => {
    //? STEP 3: Load the config into iframe/sdk.
    loadConfigIntoIframe();

    //? OPTIONAL STEP: If they want to override the styles of iframe.
    // insertStylesheetIntoIframe(ev, window.origin + "/workday.css");
  });


  //? STEP 3: Attach a listener to the primary identifier and let the iframe know about the change.
  const primaryIdentifierRef = document.getElementById('email');
  primaryIdentifierRef.addEventListener('input', handlePrimaryIdChange);
  if(CREDENTIALS.primaryIdentifier) {
    primaryIdentifierRef.value = CREDENTIALS.primaryIdentifier;
  }
  if(CREDENTIALS.languageCode) {
    CREDENTIALS.languageCode = CREDENTIALS.languageCode.toLowerCase();
  }

  function loadConfigIntoIframe() {
    CREDENTIALS.locationCode = selectedLocation;
    //CREDENTIALS.locationCode && CREDENTIALS.locationCode != 'default'
    console.log("[workday] Config sending from workday: ", CREDENTIALS);
    //? Step 2: Load Credentials into sdk to get a reference.
    PUB(
      {
        type: "INIT_PREFERENCE_CENTER",
        config: CREDENTIALS
      },
      '*'
    );
  }

  function handleWindowEvents(evt) {
    const evtType = getEventType(evt);
    console.log("[workday] event type: ", evtType);

    const toastInfo = TOAST_MESSAGES[evtType.toUpperCase()] || '';

    if(toastInfo) {
      showToastMessage(toastInfo);
    }
    // FORM_SUBMIT EVENT
    if(evtType.toUpperCase() === 'CONSENTS_PROVIDED') {
      console.group("[Workday]:: CONSENTS_PROVIDED event");
      console.log("user consents:: ", evt.data.consents);
      console.groupEnd();

      PUB({
        type: "RECORD_CONSENTS",
        value: true
      }, '*');
    }
  }

  function handlePrimaryIdChange(ev) {
    const value = ev.target.value;
    PUB({
      type: 'SET_PRIMARY_IDENTIFIER',
      value: value
    }, '*')
  }

  /** OPTIONAL STEPS */
  function insertStylesheetIntoIframe(evRef, styleSheePath) {
    const stylesheet = document.createElement("link");
    stylesheet.setAttribute("rel", "stylesheet");
    stylesheet.setAttribute("href", styleSheePath);

    if (evRef && evRef.target && evRef.target.contentDocument) {
      evRef.target.contentDocument.head.appendChild(stylesheet);
    }
  }

  function unsubscribeWindowEvents() {
    window.removeEventListener('message', handleWindowEvents);
  }
  /** END OF OPTIONAL STEPS */

  function getEventType(evt) {
    return evt.data.type || "UNKNOWN";
  }

  function showToastMessage(toastInfo) {
    const toastRef = document.getElementById('toast');
    if(toastRef) {
      toastRef.textContent = toastInfo.message;
      
      if(toastInfo.type === 'success' && !toastRef.classList.contains('toast-success')) {
        toastRef.classList.add('toast-success');
      }else if(toastInfo.type === 'error' && toastRef.classList.contains('toast-success')) {
        toastRef.classList.remove('toast-success');
      }
      clearToastAfter();
    }
  }

  function clearToastAfter(delay = 5) {
    const timer = setTimeout(() => {
      const toastRef = document.getElementById('toast');
      toastRef.textContent = '';
      clearTimeout(timer);
    }, delay * 1000);
  }


  // Clear the toast
  clearToastAfter(0);

  // Location change functionality
  const locationDropdownRef = document.querySelector('#filter select');
  if(locationDropdownRef) {
    locationDropdownRef.innerHTML = '';
    Object.keys(LOCATIONS || {}).forEach(location => {
      locationDropdownRef.innerHTML += `<option value=${location}>${LOCATIONS[location]}</option>`;
    })

    locationDropdownRef.value = selectedLocation;
    locationDropdownRef.addEventListener('change', (ev) => {
      console.log("location changed: ", ev.target.value);
      selectedLocation = ev.target.value;
    })
  }
  const renderFormBtnRef = document.getElementById('renderForm');
  if(renderFormBtnRef) {
    renderFormBtnRef.addEventListener('click', () => {
      const url = window.location.href.split('?');
      window.location.href = url[0] + (selectedLocation ? '?loc=' + selectedLocation : '')
    })
  }
})();


/**
 * 
 *  CRUD - Builder
 * 
 *  Table/Collection => Create
 *  
 *  authentication => cookie/session - v2
 *  
 *  name, childs, 
 * 
 *  ER-Diagrams => Tables generation
 *  
 *  Entity form 
 *    - Table Name
 *    - Add Fields
 *      - Field Name, type (limit), defaultValue, index, required
 *    - Add Relations
 *      - Table Name + relation
 *  ER - Diagram & build tables
 * 
 *  
 */