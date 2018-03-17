//META{"name":"comicsans_discord"}*//
var comicsans_discord = function() {
    this.getName = function () { return 'Comic Sans Discord'; }
    this.getDescription = function() { return "Makes font Comic Sans."; }
    this.getVersion = function() { return "0.0.1"; }
    this.getAuthor = function() { return "AtomicCoding"; }

    this.load = function() {}
    this.on = function() {
        console.log("RAINBOW ENABLED")
        bdPluginStorage.set('Comic Sans Discord', 'rainbow', true);
        BdApi.getPlugin('Comic Sans Discord').rainbow();
    }
    this.off  = function() {
        console.log("RAINBOW DISABLED")
        bdPluginStorage.set('Comic Sans Discord', 'rainbow', false);
        BdApi.getPlugin('Comic Sans Discord').normal();
    }
    this.getSettingsPanel = function() {
        var string = "<h3 style='font-family:\"Comic Sans MS\" !important;'>Comic Sans Settings Screen</h3>";
        string += '<style type="text/css"> .btn { position: relative; display: block; margin: 30px auto; padding: 0; overflow: hidden; border-width: 0; outline: none; border-radius: 2px; box-shadow: 0 1px 4px rgba(0, 0, 0, .6); background-color: #2ecc71; color: #ecf0f1; transition: background-color .3s; } .btn:hover, .btn:focus { background-color: #27ae60; } .btn > * { position: relative; } .btn span { display: block; padding: 12px 24px; } .btn:before { content: ""; position: absolute; top: 50%; left: 50%; display: block; width: 0; padding-top: 0; border-radius: 100%; background-color: rgba(236, 240, 241, .3); -webkit-transform: translate(-50%, -50%); -moz-transform: translate(-50%, -50%); -ms-transform: translate(-50%, -50%); -o-transform: translate(-50%, -50%); transform: translate(-50%, -50%); } .btn:active:before { width: 120%; padding-top: 120%; transition: width .2s ease-out, padding-top .2s ease-out; } .btn.orange { background-color: #e67e22; } .btn.orange:hover, .btn.orange:focus { background-color: #d35400; } .btn.red { background-color: #e74c3c; } .btn.red:hover, .btn.red:focus { background-color: #c0392b; } </style>'
        string += "<button class='btn' style='padding: 1%;' onclick='BdApi.getPlugin(\"Comic Sans Discord\").on();'>Enable Rainbow</button>";
        string += "<button class='btn' style='padding: 1%;' onclick='BdApi.getPlugin(\"Comic Sans Discord\").off();'>Disable Rainbow</button>";
        return string;
    }
    this.stop = function() {
    	console.log("GOODBYE DEAR WORLD")
        try {
        document.getElementById("comicsansstyle").remove();
        }
        catch(err) {

        }
    }
    this.normal = function() {
         console.log("BORING NORMAL HAS BEEN UNLEASHED")
         try {
             document.getElementById("comicsansstyle").remove();
         }
         catch(err) {}
            BdApi.injectCSS('comicsansstyle', '*{font-family:"Comic Sans MS" !important;}');
    }
    this.rainbow = function() {
        console.log("RAINBOW HAS BEEN UNLEASHED")
        try {
            document.getElementById("comicsansstyle").remove();
        }
        catch(err) {}
        BdApi.injectCSS('comicsansstyle', '*{font-family:"Comic Sans MS" !important; } strong, span, div .markup { background-image: -webkit-gradient( linear, left top, right top, color-stop(0, #f22), color-stop(0.15, #f2f), color-stop(0.3, #22f), color-stop(0.45, #2ff), color-stop(0.6, #2f2),color-stop(0.75, #2f2), color-stop(0.9, #ff2), color-stop(1, #f22) ); background-image: gradient( linear, left top, right top, color-stop(0, #f22), color-stop(0.15, #f2f), color-stop(0.3, #22f), color-stop(0.45, #2ff), color-stop(0.6, #2f2),color-stop(0.75, #2f2), color-stop(0.9, #ff2), color-stop(1, #f22) ); color:transparent; -webkit-background-clip: text; background-clip: text;}');

    }
    this.start = function() {
	   console.log("COMIC SANS DISCORD ONLINE KIDS");
       try {
        console.log("EXTRACTING...");
        var extract = bdPluginStorage.get('Comic Sans Discord', 'rainbow');
        if (extract == null) {
            console.log("ERROR KID");
            bdPluginStorage.set('Comic Sans Discord', 'rainbow', false);
            console.log("MAKING JSON...");
            var extract = bdPluginStorage.get('Comic Sans Discord', 'rainbow');
            console.log("EXTRACTED JSON...");
        }
        console.log("FOUND JSON");
      }
       catch(err) {
            console.log("ERROR KID");
            bdPluginStorage.set('Comic Sans Discord', 'rainbow', false);
            console.log("MAKING JSON...");
            var extract = bdPluginStorage.get('Comic Sans Discord', '"rainbow"');
            console.log("EXTRACTED JSON...");
        }
        console.log(extract);
       if (extract == false); {
        BdApi.getPlugin('Comic Sans Discord').normal();
       }
       if (extract == true); {
        BdApi.getPlugin('Comic Sans Discord').rainbow();
       }
    }
}
