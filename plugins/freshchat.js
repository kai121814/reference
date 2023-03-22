export default  function (context) {
  if (context.store.getters.IsPremium || context.route.fullPath == "/premium"){
    function initFreshChat() {
        window.fcWidget.init({
        token: "cf73c9ac-14cf-4d27-80f1-05098199e0e8",
        host: "https://wchat.freshchat.com"
        });
        // To set user name
        if (context.store.getters.isAuthenticated){
            window.fcWidget.user.setFirstName(context.store.getters.loggedInUser.first_name +" " + context.store.getters.loggedInUser.last_name);

            // To set user email
            window.fcWidget.user.setEmail(context.store.getters.loggedInUser.first_name);

            // To set user properties
            window.fcWidget.user.setProperties({
            IsPremium: context.store.getters.loggedInUser.IsPremium
            });
    }
    }
    function initialize(i,t){var e;i.getElementById(t)?initFreshChat():((e=i.createElement("script")).id=t,e.async=!0,e.src="https://wchat.freshchat.com/js/widget.js",e.onload=initFreshChat,i.head.appendChild(e))}function initiateCall(){initialize(document,"Freshdesk Messaging-js-sdk")}window.addEventListener?window.addEventListener("load",initiateCall,!1):window.attachEvent("load",initiateCall,!1);
    }
}