(function(app) {
    "use strict";

    app.factory("mxngNotificationService", mxngNotificationService);

    mxngNotificationService.$inject = ["toastr"];

    function mxngNotificationService(toastr) {
        function displaySuccess(message) {
            toastr.success(message);
        }

        function displayError(error) {
            if (Array.isArray(error)) {
                error.forEach(function(err) {
                    toastr.error(err);
                });
            } else {
                toastr.error(error, "Error");
            }
        }

        function displayWarning(message) {
            toastr.warning(message);
        }

        function displayInfo(message) {
            toastr.info(message);
        }

        function handleDataError(response) {
            console.log(response);

            if (!response.data)
                return displayError("Unable to connect to API server");

            var error = response.data.message || response.data.error_description;
            if (error)
                displayError(error);
            else
                displayError(response.statusText);
        }

        return {
            displaySuccess: displaySuccess,
            displayError: displayError,
            displayWarning: displayWarning,
            displayInfo: displayInfo,
            handleDataError: handleDataError
        };
    }

})(angular.module("mxngNotification"));