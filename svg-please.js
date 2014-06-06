(function() {
    if ( Modernizr.svg ) {
        var imgs = document.querySelectorAll( 'img.svg-please' ),
            i,
            j,
            icons = [],
            list = [
                {
                    name: 'plus',
                    viewBox: '0 0 5 5',
                    path: '<path d="M2 1 h1 v1 h1 v1 h-1 v1 h-1 v-1 h-1 v-1 h1 z"/>'
                },
                {
                    name: 'twitter',
                    viewBox: '0 0 273.39 222.178',
                    path: '<path d="M273.39,26.301c-10.059,4.461-20.868,7.477-32.215,8.832c11.581-6.941,20.475-17.934,24.662-31.031 C255,10.529,242.996,15.197,230.22,17.713C219.988,6.812,205.411,0,189.279,0c-30.978,0-56.091,25.113-56.091,56.088 c0,4.396,0.496,8.677,1.452,12.782C88.025,66.531,46.696,44.201,19.032,10.267c-4.828,8.284-7.594,17.919-7.594,28.198 c0,19.459,9.902,36.627,24.952,46.686c-9.194-0.291-17.843-2.814-25.405-7.016c-0.004,0.234-0.005,0.469-0.005,0.705 c0,27.176,19.334,49.846,44.993,54.999c-4.707,1.281-9.662,1.967-14.777,1.967c-3.614,0-7.128-0.352-10.553-1.006 c7.138,22.283,27.852,38.5,52.396,38.953c-19.196,15.043-43.381,24.01-69.659,24.01c-4.527,0-8.992-0.266-13.38-0.783 c24.822,15.914,54.305,25.199,85.979,25.199c103.169,0,159.585-85.467,159.585-159.586c0-2.432-0.055-4.851-0.162-7.256 C256.36,47.428,265.87,37.549,273.39,26.301z"/>'
                }
            ];

        function replaceImgs( imgs ) {
            for ( i = 0; i < imgs.length; i++ ) {
                icons.push({
                    name: imgs[i].getAttribute( 'src' ).replace( /\.[^/.]+$/, "" ).replace( 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/3174/', '' ), // Match app's path to icons (/img/icons/)
                    title: imgs[i].getAttribute( 'alt' )
                });

                for ( j = 0; j < list.length; j++ ) {
                    if ( icons[i].name === list[j].name ) {
                        icons[i].path = list[j].path;
                        icons[i].viewBox = list[j].viewBox;
                    }
                }

                imgs[i].outerHTML = '<svg class="icon  icon--' + icons[i].name + '" viewBox="' + icons[i].viewBox + '" xmlns="http://www.w3.org/2000/svg"><g><title>' + icons[i].title + '</title>' + icons[i].path + '</g></svg>';
            }
        }

        replaceImgs( imgs );
    }
})();
