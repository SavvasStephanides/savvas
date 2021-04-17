import React from "react"

export default function Ad(){
    return <div className="ggl-ad" dangerouslySetInnerHTML={{__html: `<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
    <ins class="adsbygoogle"
        style="display:block"
        data-ad-client="ca-pub-2194018182042050"
        data-ad-slot="9821661269"
        data-ad-format="auto"
        data-full-width-responsive="true"></ins>
    <script>
        (adsbygoogle = window.adsbygoogle || []).push({});
    </script>`}}></div>
}