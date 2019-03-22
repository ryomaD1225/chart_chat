var s = window.screen;
        var c = document.getElementById("c");   //getElementByIdメソッドでHTMLと関連づけて、
        var ctx = c.getContext("2d");           //getContextメソッドで描画機能を有効にする。

        var width = c.width = s.width;
        
        var height = c.height = s.height;

        var matrix = "ABCDEFGHIGKFKPLFJ@;:>?$#%&g198276453田由甲申甴电甶男甸甹町画甼甽甾甿畀畁и畂畃Ф畄Ш畅畆畇畈畉畊畋界畍畎畏畐畑";

        matrix = matrix.split("");  // " "で区切って分割してそれぞれを変数 matrix へ入れ直している。

        var font_size = 10;

        var columns = c.width / font_size;

        var drops = [];//空の配列を作成
        
        
        
        for (var x = 0; x < columns; x++)     // for 文でぶん回して、
            drops[x] = 1;
        

        function draw()
        {            //関数を作成


            ctx.fillStyle = "rgba(0, 0, 0, 0.04)";  //図形を塗りつブス色を指定。あくまで指定。
            ctx.fillRect(0, 0, c.width, c.height);  //canvas上の指定の矩形を現在の塗りつぶしスタイルを使って塗りつぶし実行。
            ctx.fillStyle = "#0F0";                 //図形を塗りつぶす色を指定。あくまでね。
            ctx.font = font_size + "px arial";

            for( var i = 0; i < drops.length; i++)
            {
                var text = matrix[Math.floor( Math.random() * matrix.length)];

                ctx.fillText(text, i * font_size, drops[i] * font_size);



                if( drops[i] * font_size > c.height && Math.random() > 0.975)
                        drops[i] = 0;
                drops[i]++;
            }
        }

        setInterval( draw, 35);