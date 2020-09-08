        /******************************  AJAX  *******************************/

        sabio.page.loggingout = (onSuccess, onError) => {
            let url = "https://pacoima-ypi.azurewebsites.net/api/users/logout";

            let settings = {
                cache: false,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                dataType: "json",
                xhrFields: {
                    withCredentials: true
                },
                type: "GET",
                success: onSuccess,
                error: onError
            };
            $.ajax(url, settings);
        };


        sabio.page.getFaq = (onSuccess, onError) => {
            let url = "https://pacoima-ypi.azurewebsites.net/api/faqcategories";

            let settings = {
                cache: false,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                dataType: "json",
                xhrFields: {
                    withCredentials: true
                },
                type: "GET",
                success: onSuccess,
                error: onError
            };
            $.ajax(url, settings);
        };


        sabio.page.postQuest = (questionData, onSuccess, onError) => {
            let url = "https://pacoima-ypi.azurewebsites.net/api/faqs";

            let settings = {
                cache: false,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                data: questionData,
                dataType: "json",
                xhrFields: {
                    withCredentials: true
                },
                type: "POST",
                success: onSuccess,
                error: onError
            };
            $.ajax(url, settings);
        };

      

