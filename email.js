
  window.addEventListener("DOMContentLoaded", function() {

    // get the form elements defined in your form HTML above
    
    var form = document.getElementById("form");
    var button = document.getElementById("form-submit");
    // var status = document.getElementById("my-form-status");

    // Success and Error functions for after the form is submitted
    
    function success() {
      form.reset();
      button.classList.add('success');
      button.value = 'Success';
    //   status.innerHTML = "Thanks! your email has been sent";
    }

    
    var jsErrorMsg = document.createElement("P");
    jsErrorMsg.innerHTML = "**Sending failed, try refreshing or use other messaging app. Thanks";
    jsErrorMsg.style.color ="red";

    function error() {
        button.classList.add('failed');
        button.value = 'Error';
        form.appendChild(jsErrorMsg);
    }

    // handle the form submission event

    form.addEventListener("submit", function(ev) {
      ev.preventDefault();
      var data = new FormData(form);
      ajax(form.method, form.action, data, success, error);
    });
  });
  
  // helper function for sending an AJAX request

  function ajax(method, url, data, success, error) {
    var xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = function() {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        success(xhr.response, xhr.responseType);
      } else {
        error(xhr.status, xhr.response, xhr.responseType);
      }
    };
    xhr.send(data);
  }