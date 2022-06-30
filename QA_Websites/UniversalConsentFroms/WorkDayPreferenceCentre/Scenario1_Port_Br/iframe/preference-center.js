const PUB = window.parent.postMessage;
const SUB = window.parent.addEventListener;

const userConsents = {
  //  1: {
  //   "processing_purpose_id": 1,
  //   "consented_items": [
  //      {
  //       "consent_purpose_id": 1,
  //       "granted": true
  //     },
  //     {
  //       "consent_purpose_id": 4,
  //       "granted": true
  //     },
  //     {
  //       "consent_purpose_id": 3,
  //       "granted": true
  //     }
  //   ]
  // }
  };



  


(function() {
  let preferenceRef;

  subscribeEvents();

  function subscribeEvents() {
      SUB('message', async (evt) => {
          // logEvent(evt);

          // init-config event.
          if(isInitConfigEvent(evt)) {
            await initSDKConfig(evt.data.config);
          } else if(isSetPrimaryIdentifierEvent(evt)) {
            primaryIdentifier = evt.data.value || '';
            
            if(preferenceRef) {
              preferenceRef.setPrimaryIdentifier(primaryIdentifier);
            }
          } else if(isRecordConsentsEvent(evt)) {
            preferenceRef.recordConsents();
          }
      })
  }

  async function initSDKConfig(config) {
    // If preference already loaded
    // then return the existing ref.
    if (preferenceRef) {
      return;
    }

    console.groupCollapsed("[IFrame]: init-preference-center");
    console.log("config received from parent window: ", config);
    console.groupEnd();

    preferenceRef = PreferenceCenterSDK.initialize(config);
    
    if(!preferenceRef || !Object.keys(preferenceRef).length) return;
    
    // Subscribe to preference center events.
    console.log("Subscribing sdk events in iframe");
    subscribeSdkEvents();

    // Load user consents
    if(!!userConsents && Object.keys(userConsents).length) {
      preferenceRef.loadUserConsents(userConsents);
    }

    console.groupCollapsed("[IFrame]: initialized sdk with config");
    console.groupEnd();
  }

  function subscribeSdkEvents() {
    if(!preferenceRef || !preferenceRef.events) {
      return;
    }

    const eventsToSubscribe = [
      'INVALID_CONFIG',
      'PREFERENCE_CENTER_LOADED',
      'FAILED_TO_LOAD_PREFERENCE_CENTER',
      'CONSENTS_PROVIDED',
      'CONSENTS_RECORDED',
      'CONSENTS_FAILED_TO_RECORD'
    ]

    // eventsToSubscribe.forEach(evt => PreferenceCenterSDK && PreferenceCenterSDK.events && PreferenceCenterSDK.events.on(evt, sendEvent.bind(this, evt)));
    eventsToSubscribe.forEach(evt => preferenceRef.events.on(evt, sendEvent.bind(this, evt)));

    // If implicitFlow is false we should enable this.
    // preferenceRef.events.on('PREFERENCE_CENTER_CONFIG_LOADED', () => {
    //   preferenceRef.loadPreferenceCenter('#consents');
    // })
  }

  function sendEvent(type, data) {
    PUB({
      type, data
    }, window.parent.origin)
  }

  //* Utility methods
  function getEventType(evt) {
    return evt.data.type || 'UNKNOWN';
  }

  function isRecordConsentsEvent(evt) {
    const eventType = getEventType(evt);
    return eventType.toUpperCase() === 'RECORD_CONSENTS';
  }

  function isInitConfigEvent(evt) {
    // Get the event type
    const eventType = getEventType(evt);

    return eventType.toUpperCase() === 'INIT_PREFERENCE_CENTER';
  }

  function isSetPrimaryIdentifierEvent(evt) {
    // get the event type
    const eventType = getEventType(evt);
    return eventType.toUpperCase() === 'SET_PRIMARY_IDENTIFIER';
  }

  //! Only for testing purpose
  function logEvent(evt) {
    console.groupCollapsed("[IFrame]: Event info");
    // console.log("Source:: ", evt.source);
    // console.log("Target:: ", evt.target);
    console.log("Origin:: ", evt.origin);
    console.log("Data:: ", evt.data);
    console.log("Event Type:: ", getEventType(evt));
    console.groupEnd();
  }

})();


// Workday => get_user_consents 
// workday => load_user_consents 