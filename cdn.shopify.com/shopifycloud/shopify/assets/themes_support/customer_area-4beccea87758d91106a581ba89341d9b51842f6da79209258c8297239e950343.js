Shopify.CustomerAddress={toggleForm:function(e){var t=document.getElementById("edit_address_"+e),s=document.getElementById("view_address_"+e);return t.style.display="none"==t.style.display?"":"none",s.style.display="none"==s.style.display?"":"none",!1},toggleNewForm:function(){var e=document.getElementById("add_address");return e.style.display="none"==e.style.display?"":"none",!1},destroy:function(e,t){confirm(t||"Are you sure you wish to delete this address?")&&Shopify.postLink("/account/addresses/"+e,{parameters:{_method:"delete"}})}};