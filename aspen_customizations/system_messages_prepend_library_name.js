/*
The purpose of this jQuery is to take the logged in library name from the page's metadata and force it into the title of a system message so that NEKLS staff can more easily identify which library a message has been created for.

Aspen URL: http://YOUR_ASPEN_DOMAIN/Admin/SystemMessages
Breadcrumbs:  Home >  Browse > Administration Home > Local Enrichment > SystemMessages
Page title: SystemMessages
Option name: Title (not shown)

How to get there
Go to: Aspen Discovery Administration
  then go to: Local Catalog Enrichment
    then go to: SystemMessages
      Select the row you wish to edit (or select "Add new")							
        then go to:  Title (not shown)
*/

<script>
$(document).ready(function () {
  
  //Aspen > Home > Browse > Administration Home > Local Enrichment > SystemMessages
  //(/Admin/SystemMessages?objectAction=edit&id=[MESSAGE_ID])

    //Get URL and library name
      let system_message_url = $(location).attr('href');
      let library_name = $('head meta[property="og:site_name"]').attr('content');

    //If URL contains string 'SystemMessages' and you are not at NEKLS
      if ( (system_message_url.indexOf('SystemMessages') > -1) && (library_name != 'Northeast Kansas Library System')) {

        //Run script on blur
          $('#title').blur(function () {

            //Defines the input to modify - in this case the message title
              let input = $('#title').val();

            //Gets the library name from the pages metadata and adds a dash at the end
              let prefix = (library_name + ' - ');

            //If the message title doesn't already start with the library name, add it
              if (!input.startsWith(prefix)) {
                $('#title').val(function (index, val) {
                  return prefix + val;
                });
              }
          });
      }
  
});
</script>