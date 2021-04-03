function vb(file) {
  $.ajax({
    type: 'GET',
    url: 'https://cloud-api.yandex.net/v1/disk/public/resources/download?public_key='+file,
     contentType: 'application/json'
   }).done(function(data) {
     console.log(data);
     console.log('data called success');
     window.open(data['href']);
     //$('iframe').attr('src',data['href']);
   }).then(function () {

   });
}

// https://overcoder.net/q/2669577/%D0%BA%D0%B0%D0%BA-%D0%BF%D0%B5%D1%80%D0%B5%D0%B2%D0%B5%D1%81%D1%82%D0%B8-%D0%B7%D0%B0%D0%BF%D1%80%D0%BE%D1%81-curl-%D0%B2-%D0%B2%D1%8B%D0%B7%D0%BE%D0%B2-ajax-%D0%B1%D0%B5%D0%B7-%D0%BF%D0%BE%D0%BB%D1%83%D1%87%D0%B5%D0%BD%D0%B8%D1%8F-22-%D0%B4%D0%BB%D1%8F-%D0%BA%D0%B0%D0%B2%D1%8B%D1%87%D0%B5%D0%BA
// https://yandex.ru/dev/disk/poligon/#access_token=AQAAAAAUxGdhAADLWwWpnZaGBEBfubYtx8MX3n8&token_type=bearer&expires_in=31536000

/*<script src="https://unpkg.com/dropbox@9.4.0/dist/Dropbox-sdk.min.js" charset="utf-8"></script>
function vbDrop(file) {
      var ACCESS_TOKEN = '7mjKkw-iWSMAAAAAAAAAAUuR31HkpV6RdFSaoAffgg2gB6mmlVnPVC11rRCgLarp';
      var SHARED_LINK = 'https://www.dropbox.com/s/mx3vllouwtuo20j/Blue%20Trey%20RuCVC.rar?dl=0';
      var dbx = new Dropbox.Dropbox({ accessToken: ACCESS_TOKEN });
      dbx.sharingGetSharedLinkFile({url: SHARED_LINK})
        .then(function(data) {
          console.log(data);
          var downloadUrl = URL.createObjectURL(data.fileBlob);
          window.open(downloadUrl);
        })
        .catch(function(error) {
          console.error(error);
        });
      return false;
    }
*/
