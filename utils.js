var translateObject= function (obj) {
        var translate = function (obj) {
            Ext.iterate(obj, function (key, value) {
                if (typeof value == 'string') {
                    var r = Ext.data.JsonP.request({
                        url: 'https://translate.yandex.net/api/v1.5/tr.json/translate',
                        params: {
                            lang: 'en',
                            text: value,
                            key: 'trnsl.1.1.20150722T063823Z.0e932788b802a20f.02bb1904cf8f4149158a1a67457c23f2b37049b9'
                        },

                        success: function (data) {
                            obj[key] = data.text[0];
                        }
                    });

                    console.log(r);
                } else {
                    translate(value);
                }

            });
        };

        translate(obj);

    };