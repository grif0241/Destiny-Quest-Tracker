if(!self.define){let e,i={};const a=(a,o)=>(a=new URL(a+".js",o).href,i[a]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=i,document.head.appendChild(e)}else e=a,importScripts(a),i()})).then((()=>{let e=i[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(o,r)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(i[n])return;let d={};const s=e=>a(e,n),c={module:{uri:n},exports:d,require:s};i[n]=Promise.all(o.map((e=>c[e]||s(e)))).then((e=>(r(...e),d)))}}define(["./workbox-74f2ef77"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.clientsClaim(),e.precacheAndRoute([{url:"android-chrome-192x192.png",revision:"c11c182077b990fb742d92b0df137f88"},{url:"android-chrome-384x384.png",revision:"d546b4dad7b7923ff6099d8d51aebc79"},{url:"android/android-launchericon-144-144.png",revision:"e94c0f060b46253717de50b2ff37becc"},{url:"android/android-launchericon-192-192.png",revision:"f58614675f98f8622df970b643bfc0fe"},{url:"android/android-launchericon-48-48.png",revision:"5dad90e665ab9af1bd160ba4fee6b152"},{url:"android/android-launchericon-512-512.png",revision:"15e93034b5d96676ac7ba6b676518e52"},{url:"android/android-launchericon-72-72.png",revision:"3d96f471599a19d1c7492885655dcd46"},{url:"android/android-launchericon-96-96.png",revision:"15faab2bcd88219f118dd3c21aecd0f4"},{url:"apple-touch-icon.png",revision:"a76778e142f23fbbdfdcd9b357a84023"},{url:"assets/archer-Dd927_A-.png",revision:null},{url:"assets/battle-Cvang_h3.png",revision:null},{url:"assets/dice-1-DreO9oFw.png",revision:null},{url:"assets/dice-2-BSkrYNgV.png",revision:null},{url:"assets/dice-3-CJu_sqAv.png",revision:null},{url:"assets/dice-4-BjDg13lZ.png",revision:null},{url:"assets/dice-5-qSpvLrqL.png",revision:null},{url:"assets/dice-6-2cxlrV8v.png",revision:null},{url:"assets/dice-cube-C5MwA6ew.png",revision:null},{url:"assets/dice-cube-outline-RfxVszc5.png",revision:null},{url:"assets/index-BQLzfpZD.js",revision:null},{url:"assets/index-DoFGm8JO.css",revision:null},{url:"assets/mage-Bg4gCQLZ.png",revision:null},{url:"assets/villager-iGu_IwW_.png",revision:null},{url:"assets/warrior-6NlgQ4kb.png",revision:null},{url:"assets/workbox-window.prod.es5-B9K5rw8f.js",revision:null},{url:"DQ-ICON.png",revision:"74fccb197ea03810814821eace59842e"},{url:"favicon-16x16.png",revision:"8340a1e99580d1aff714575d63938c83"},{url:"favicon-32x32.png",revision:"c99cf61ee9cf8629b1aa8104880abe1c"},{url:"favicon.ico",revision:"3b4d05028611e437af65f2c511f0033c"},{url:"index.html",revision:"fb7fbe573f0f88fd3ee6df04404738c3"},{url:"ios/100.png",revision:"b84ee728f2fb93fe19e56503bbed0ff5"},{url:"ios/1024.png",revision:"d4671b1710c28aa6b3f6479d575cdbfe"},{url:"ios/114.png",revision:"83a3968b2ca2bb48fe6e60e59def55e5"},{url:"ios/120.png",revision:"20eea3c3f918c4f1e49f1d41b93e2348"},{url:"ios/128.png",revision:"de3dbd9cbb63cf21389ae07485a8541d"},{url:"ios/144.png",revision:"e94c0f060b46253717de50b2ff37becc"},{url:"ios/152.png",revision:"000e30916d2dd251898ebfc20c26f27a"},{url:"ios/16.png",revision:"a1cdbe875df4e4fb4b56398b3e418eff"},{url:"ios/167.png",revision:"96ff478af17250a17b9c2eed3c17ff8a"},{url:"ios/180.png",revision:"e8cd6916f6eeb3d053693d142193de91"},{url:"ios/192.png",revision:"f58614675f98f8622df970b643bfc0fe"},{url:"ios/20.png",revision:"797c4a64ff8eabbd3a619ff2950e8150"},{url:"ios/256.png",revision:"0fb116ec369502ef7cc8428c6a63f7e9"},{url:"ios/29.png",revision:"5ae83f9177457fccd9d9d8cd120350a2"},{url:"ios/32.png",revision:"b971f86cadc37e8f3a4f4a7d345de8f2"},{url:"ios/40.png",revision:"8475ac2a1049e2161e70c1490226533d"},{url:"ios/50.png",revision:"b3a36c52b0e8cba22c6c2f554402c6cc"},{url:"ios/512.png",revision:"15e93034b5d96676ac7ba6b676518e52"},{url:"ios/57.png",revision:"834b034254fb994fc747dd8de85249f5"},{url:"ios/58.png",revision:"e2e26df5c426b6b745801b8a0f9c0631"},{url:"ios/60.png",revision:"d4ec6c71dece86573174edd6f152966d"},{url:"ios/64.png",revision:"0c22f0bf95e93078d63411d16dc74d53"},{url:"ios/72.png",revision:"3d96f471599a19d1c7492885655dcd46"},{url:"ios/76.png",revision:"d3654a391d4b6437d4976bf5b3b2da20"},{url:"ios/80.png",revision:"28c1ac54d953e20b61daf119c728f841"},{url:"ios/87.png",revision:"66a26e6b72c7f1be2ad1da9f29857f5c"},{url:"manifest.webmanifest",revision:"2f26bba6c1540fcda7ba8291ed0e6540"},{url:"mstile-150x150.png",revision:"5e2d66f99fa4e898101dcf421b380be1"},{url:"safari-pinned-tab.svg",revision:"26aec62d5fb77d5eadf5c7779a38d2c5"},{url:"site.webmanifest",revision:"6ef7033817f800c521689d531455f9d7"},{url:"windows11/LargeTile.scale-100.png",revision:"50152d42e1f6d7a76ef65ac69efc2ad3"},{url:"windows11/LargeTile.scale-125.png",revision:"f6316194611ff9ac23b7ad47e1822b13"},{url:"windows11/LargeTile.scale-150.png",revision:"36e66c9a8de03f832f8903171b1ad787"},{url:"windows11/LargeTile.scale-200.png",revision:"2aa9f5c44db99fc5fe5f5844df398ca4"},{url:"windows11/LargeTile.scale-400.png",revision:"d1aea4215ba68c5684f49f781391e8c8"},{url:"windows11/SmallTile.scale-100.png",revision:"29e297ec13458e0e838ccdeeb395ef7c"},{url:"windows11/SmallTile.scale-125.png",revision:"14fc60fa328985d6856836614f5cd2d8"},{url:"windows11/SmallTile.scale-150.png",revision:"1724cda028fbeedcb032e1b45d540ac5"},{url:"windows11/SmallTile.scale-200.png",revision:"d4bf18b20e9bae1cb85dbcd8b04d0f88"},{url:"windows11/SmallTile.scale-400.png",revision:"3e8ed0a5bcd5a1ff2da04956db1a150c"},{url:"windows11/SplashScreen.scale-100.png",revision:"7ddd5d964fe5eb8bcabd31a074480b6a"},{url:"windows11/SplashScreen.scale-125.png",revision:"d7cd16537bd4d5fa38dc6a3f356fc95e"},{url:"windows11/SplashScreen.scale-150.png",revision:"30cf3c54be67040f3c2cd5609f0416e1"},{url:"windows11/SplashScreen.scale-200.png",revision:"dcf48c71b84e3b2a3322b7f118bfd003"},{url:"windows11/SplashScreen.scale-400.png",revision:"e5e2becd33061b4f4ec13741e2343ce7"},{url:"windows11/Square150x150Logo.scale-100.png",revision:"c978f6cea6c3ff6cc106bd2c6582d3c4"},{url:"windows11/Square150x150Logo.scale-125.png",revision:"ba0cc5a1ae41e8cb3e6438955c541d3d"},{url:"windows11/Square150x150Logo.scale-150.png",revision:"80a00720399805d3b041d5c6bd8e0634"},{url:"windows11/Square150x150Logo.scale-200.png",revision:"b4366202622230acca8479e3abb5436a"},{url:"windows11/Square150x150Logo.scale-400.png",revision:"9016fab9a1149f3ccb600c448792d1f0"},{url:"windows11/Square44x44Logo.altform-lightunplated_targetsize-16.png",revision:"69ed06fc92ec399bbbbf84f2671eb9ae"},{url:"windows11/Square44x44Logo.altform-lightunplated_targetsize-20.png",revision:"a77f7ac36398810cee8e85cf1629abeb"},{url:"windows11/Square44x44Logo.altform-lightunplated_targetsize-24.png",revision:"af37285a862f5465fe47cb0ff58d682b"},{url:"windows11/Square44x44Logo.altform-lightunplated_targetsize-256.png",revision:"d82c74cbf7adc00603abe1440bfd7466"},{url:"windows11/Square44x44Logo.altform-lightunplated_targetsize-30.png",revision:"e2ac51c1a78150c6cb73c38a3dac3268"},{url:"windows11/Square44x44Logo.altform-lightunplated_targetsize-32.png",revision:"c1cfb77d7a7b3516d0ce52c81a7e0de9"},{url:"windows11/Square44x44Logo.altform-lightunplated_targetsize-36.png",revision:"fc9192f5a6754b9e0c7c31b57c90ae57"},{url:"windows11/Square44x44Logo.altform-lightunplated_targetsize-40.png",revision:"5f063f3d3b25b0c9ebcd94ce5926df77"},{url:"windows11/Square44x44Logo.altform-lightunplated_targetsize-44.png",revision:"fa28f69d6c53879f2473edd4466ed4f9"},{url:"windows11/Square44x44Logo.altform-lightunplated_targetsize-48.png",revision:"55ed03e0d2022056e72d9cc97d2377e9"},{url:"windows11/Square44x44Logo.altform-lightunplated_targetsize-60.png",revision:"087e10dcaa5f3869a07fa06de67cb8df"},{url:"windows11/Square44x44Logo.altform-lightunplated_targetsize-64.png",revision:"12e26ada83c0b386b62bcc7b572025a2"},{url:"windows11/Square44x44Logo.altform-lightunplated_targetsize-72.png",revision:"57de9ddd4bf20e6dba5a6a710cbf610a"},{url:"windows11/Square44x44Logo.altform-lightunplated_targetsize-80.png",revision:"969e58b1d24bff5a75b8693b198e14bb"},{url:"windows11/Square44x44Logo.altform-lightunplated_targetsize-96.png",revision:"c0fd475555fd5e43600f8108966b6357"},{url:"windows11/Square44x44Logo.altform-unplated_targetsize-16.png",revision:"69ed06fc92ec399bbbbf84f2671eb9ae"},{url:"windows11/Square44x44Logo.altform-unplated_targetsize-20.png",revision:"a77f7ac36398810cee8e85cf1629abeb"},{url:"windows11/Square44x44Logo.altform-unplated_targetsize-24.png",revision:"af37285a862f5465fe47cb0ff58d682b"},{url:"windows11/Square44x44Logo.altform-unplated_targetsize-256.png",revision:"d82c74cbf7adc00603abe1440bfd7466"},{url:"windows11/Square44x44Logo.altform-unplated_targetsize-30.png",revision:"e2ac51c1a78150c6cb73c38a3dac3268"},{url:"windows11/Square44x44Logo.altform-unplated_targetsize-32.png",revision:"c1cfb77d7a7b3516d0ce52c81a7e0de9"},{url:"windows11/Square44x44Logo.altform-unplated_targetsize-36.png",revision:"fc9192f5a6754b9e0c7c31b57c90ae57"},{url:"windows11/Square44x44Logo.altform-unplated_targetsize-40.png",revision:"5f063f3d3b25b0c9ebcd94ce5926df77"},{url:"windows11/Square44x44Logo.altform-unplated_targetsize-44.png",revision:"fa28f69d6c53879f2473edd4466ed4f9"},{url:"windows11/Square44x44Logo.altform-unplated_targetsize-48.png",revision:"55ed03e0d2022056e72d9cc97d2377e9"},{url:"windows11/Square44x44Logo.altform-unplated_targetsize-60.png",revision:"087e10dcaa5f3869a07fa06de67cb8df"},{url:"windows11/Square44x44Logo.altform-unplated_targetsize-64.png",revision:"12e26ada83c0b386b62bcc7b572025a2"},{url:"windows11/Square44x44Logo.altform-unplated_targetsize-72.png",revision:"57de9ddd4bf20e6dba5a6a710cbf610a"},{url:"windows11/Square44x44Logo.altform-unplated_targetsize-80.png",revision:"969e58b1d24bff5a75b8693b198e14bb"},{url:"windows11/Square44x44Logo.altform-unplated_targetsize-96.png",revision:"c0fd475555fd5e43600f8108966b6357"},{url:"windows11/Square44x44Logo.scale-100.png",revision:"fa28f69d6c53879f2473edd4466ed4f9"},{url:"windows11/Square44x44Logo.scale-125.png",revision:"d8c8182908f8a4ef0484fab8b1f76dfb"},{url:"windows11/Square44x44Logo.scale-150.png",revision:"34783a4e3d2973f0bbebc7bfd381b0dd"},{url:"windows11/Square44x44Logo.scale-200.png",revision:"57905e5aa47c84355e946305e6c47187"},{url:"windows11/Square44x44Logo.scale-400.png",revision:"37c3b5881788a525223c2f3fdee9bf76"},{url:"windows11/Square44x44Logo.targetsize-16.png",revision:"69ed06fc92ec399bbbbf84f2671eb9ae"},{url:"windows11/Square44x44Logo.targetsize-20.png",revision:"a77f7ac36398810cee8e85cf1629abeb"},{url:"windows11/Square44x44Logo.targetsize-24.png",revision:"af37285a862f5465fe47cb0ff58d682b"},{url:"windows11/Square44x44Logo.targetsize-256.png",revision:"d82c74cbf7adc00603abe1440bfd7466"},{url:"windows11/Square44x44Logo.targetsize-30.png",revision:"e2ac51c1a78150c6cb73c38a3dac3268"},{url:"windows11/Square44x44Logo.targetsize-32.png",revision:"c1cfb77d7a7b3516d0ce52c81a7e0de9"},{url:"windows11/Square44x44Logo.targetsize-36.png",revision:"fc9192f5a6754b9e0c7c31b57c90ae57"},{url:"windows11/Square44x44Logo.targetsize-40.png",revision:"5f063f3d3b25b0c9ebcd94ce5926df77"},{url:"windows11/Square44x44Logo.targetsize-44.png",revision:"fa28f69d6c53879f2473edd4466ed4f9"},{url:"windows11/Square44x44Logo.targetsize-48.png",revision:"55ed03e0d2022056e72d9cc97d2377e9"},{url:"windows11/Square44x44Logo.targetsize-60.png",revision:"087e10dcaa5f3869a07fa06de67cb8df"},{url:"windows11/Square44x44Logo.targetsize-64.png",revision:"12e26ada83c0b386b62bcc7b572025a2"},{url:"windows11/Square44x44Logo.targetsize-72.png",revision:"57de9ddd4bf20e6dba5a6a710cbf610a"},{url:"windows11/Square44x44Logo.targetsize-80.png",revision:"969e58b1d24bff5a75b8693b198e14bb"},{url:"windows11/Square44x44Logo.targetsize-96.png",revision:"c0fd475555fd5e43600f8108966b6357"},{url:"windows11/StoreLogo.scale-100.png",revision:"b3a36c52b0e8cba22c6c2f554402c6cc"},{url:"windows11/StoreLogo.scale-125.png",revision:"5dbb4dbeb787a1fc2a48e7dbdc4db8f4"},{url:"windows11/StoreLogo.scale-150.png",revision:"cfec636b10bb6a29b078792cfd874da1"},{url:"windows11/StoreLogo.scale-200.png",revision:"b84ee728f2fb93fe19e56503bbed0ff5"},{url:"windows11/StoreLogo.scale-400.png",revision:"a97743bf2e76100b4fea7bb00681b9c3"},{url:"windows11/Wide310x150Logo.scale-100.png",revision:"2777c626befc7d7b1799bdfc1f32e958"},{url:"windows11/Wide310x150Logo.scale-125.png",revision:"f79fbf1af1ed51a47b384dd365befcbd"},{url:"windows11/Wide310x150Logo.scale-150.png",revision:"d668ba042262f376d6161fa0e59fd1f9"},{url:"windows11/Wide310x150Logo.scale-200.png",revision:"7ddd5d964fe5eb8bcabd31a074480b6a"},{url:"windows11/Wide310x150Logo.scale-400.png",revision:"dcf48c71b84e3b2a3322b7f118bfd003"},{url:"android/android-launchericon-144-144.png",revision:"e94c0f060b46253717de50b2ff37becc"},{url:"android/android-launchericon-192-192.png",revision:"f58614675f98f8622df970b643bfc0fe"},{url:"android/android-launchericon-48-48.png",revision:"5dad90e665ab9af1bd160ba4fee6b152"},{url:"android/android-launchericon-512-512.png",revision:"15e93034b5d96676ac7ba6b676518e52"},{url:"android/android-launchericon-72-72.png",revision:"3d96f471599a19d1c7492885655dcd46"},{url:"android/android-launchericon-96-96.png",revision:"15faab2bcd88219f118dd3c21aecd0f4"},{url:"ios/100.png",revision:"b84ee728f2fb93fe19e56503bbed0ff5"},{url:"ios/1024.png",revision:"d4671b1710c28aa6b3f6479d575cdbfe"},{url:"ios/114.png",revision:"83a3968b2ca2bb48fe6e60e59def55e5"},{url:"ios/120.png",revision:"20eea3c3f918c4f1e49f1d41b93e2348"},{url:"ios/128.png",revision:"de3dbd9cbb63cf21389ae07485a8541d"},{url:"ios/144.png",revision:"e94c0f060b46253717de50b2ff37becc"},{url:"ios/152.png",revision:"000e30916d2dd251898ebfc20c26f27a"},{url:"ios/16.png",revision:"a1cdbe875df4e4fb4b56398b3e418eff"},{url:"ios/167.png",revision:"96ff478af17250a17b9c2eed3c17ff8a"},{url:"ios/180.png",revision:"e8cd6916f6eeb3d053693d142193de91"},{url:"ios/192.png",revision:"f58614675f98f8622df970b643bfc0fe"},{url:"ios/20.png",revision:"797c4a64ff8eabbd3a619ff2950e8150"},{url:"ios/256.png",revision:"0fb116ec369502ef7cc8428c6a63f7e9"},{url:"ios/29.png",revision:"5ae83f9177457fccd9d9d8cd120350a2"},{url:"ios/32.png",revision:"b971f86cadc37e8f3a4f4a7d345de8f2"},{url:"ios/40.png",revision:"8475ac2a1049e2161e70c1490226533d"},{url:"ios/50.png",revision:"b3a36c52b0e8cba22c6c2f554402c6cc"},{url:"ios/512.png",revision:"15e93034b5d96676ac7ba6b676518e52"},{url:"ios/57.png",revision:"834b034254fb994fc747dd8de85249f5"},{url:"ios/58.png",revision:"e2e26df5c426b6b745801b8a0f9c0631"},{url:"ios/60.png",revision:"d4ec6c71dece86573174edd6f152966d"},{url:"ios/64.png",revision:"0c22f0bf95e93078d63411d16dc74d53"},{url:"ios/72.png",revision:"3d96f471599a19d1c7492885655dcd46"},{url:"ios/76.png",revision:"d3654a391d4b6437d4976bf5b3b2da20"},{url:"ios/80.png",revision:"28c1ac54d953e20b61daf119c728f841"},{url:"ios/87.png",revision:"66a26e6b72c7f1be2ad1da9f29857f5c"},{url:"windows11/LargeTile.scale-100.png",revision:"50152d42e1f6d7a76ef65ac69efc2ad3"},{url:"windows11/LargeTile.scale-125.png",revision:"f6316194611ff9ac23b7ad47e1822b13"},{url:"windows11/LargeTile.scale-150.png",revision:"36e66c9a8de03f832f8903171b1ad787"},{url:"windows11/LargeTile.scale-200.png",revision:"2aa9f5c44db99fc5fe5f5844df398ca4"},{url:"windows11/LargeTile.scale-400.png",revision:"d1aea4215ba68c5684f49f781391e8c8"},{url:"windows11/SmallTile.scale-100.png",revision:"29e297ec13458e0e838ccdeeb395ef7c"},{url:"windows11/SmallTile.scale-125.png",revision:"14fc60fa328985d6856836614f5cd2d8"},{url:"windows11/SmallTile.scale-150.png",revision:"1724cda028fbeedcb032e1b45d540ac5"},{url:"windows11/SmallTile.scale-200.png",revision:"d4bf18b20e9bae1cb85dbcd8b04d0f88"},{url:"windows11/SmallTile.scale-400.png",revision:"3e8ed0a5bcd5a1ff2da04956db1a150c"},{url:"windows11/SplashScreen.scale-100.png",revision:"7ddd5d964fe5eb8bcabd31a074480b6a"},{url:"windows11/SplashScreen.scale-125.png",revision:"d7cd16537bd4d5fa38dc6a3f356fc95e"},{url:"windows11/SplashScreen.scale-150.png",revision:"30cf3c54be67040f3c2cd5609f0416e1"},{url:"windows11/SplashScreen.scale-200.png",revision:"dcf48c71b84e3b2a3322b7f118bfd003"},{url:"windows11/SplashScreen.scale-400.png",revision:"e5e2becd33061b4f4ec13741e2343ce7"},{url:"windows11/Square150x150Logo.scale-100.png",revision:"c978f6cea6c3ff6cc106bd2c6582d3c4"},{url:"windows11/Square150x150Logo.scale-125.png",revision:"ba0cc5a1ae41e8cb3e6438955c541d3d"},{url:"windows11/Square150x150Logo.scale-150.png",revision:"80a00720399805d3b041d5c6bd8e0634"},{url:"windows11/Square150x150Logo.scale-200.png",revision:"b4366202622230acca8479e3abb5436a"},{url:"windows11/Square150x150Logo.scale-400.png",revision:"9016fab9a1149f3ccb600c448792d1f0"},{url:"windows11/Square44x44Logo.altform-lightunplated_targetsize-16.png",revision:"69ed06fc92ec399bbbbf84f2671eb9ae"},{url:"windows11/Square44x44Logo.altform-lightunplated_targetsize-20.png",revision:"a77f7ac36398810cee8e85cf1629abeb"},{url:"windows11/Square44x44Logo.altform-lightunplated_targetsize-24.png",revision:"af37285a862f5465fe47cb0ff58d682b"},{url:"windows11/Square44x44Logo.altform-lightunplated_targetsize-256.png",revision:"d82c74cbf7adc00603abe1440bfd7466"},{url:"windows11/Square44x44Logo.altform-lightunplated_targetsize-30.png",revision:"e2ac51c1a78150c6cb73c38a3dac3268"},{url:"windows11/Square44x44Logo.altform-lightunplated_targetsize-32.png",revision:"c1cfb77d7a7b3516d0ce52c81a7e0de9"},{url:"windows11/Square44x44Logo.altform-lightunplated_targetsize-36.png",revision:"fc9192f5a6754b9e0c7c31b57c90ae57"},{url:"windows11/Square44x44Logo.altform-lightunplated_targetsize-40.png",revision:"5f063f3d3b25b0c9ebcd94ce5926df77"},{url:"windows11/Square44x44Logo.altform-lightunplated_targetsize-44.png",revision:"fa28f69d6c53879f2473edd4466ed4f9"},{url:"windows11/Square44x44Logo.altform-lightunplated_targetsize-48.png",revision:"55ed03e0d2022056e72d9cc97d2377e9"},{url:"windows11/Square44x44Logo.altform-lightunplated_targetsize-60.png",revision:"087e10dcaa5f3869a07fa06de67cb8df"},{url:"windows11/Square44x44Logo.altform-lightunplated_targetsize-64.png",revision:"12e26ada83c0b386b62bcc7b572025a2"},{url:"windows11/Square44x44Logo.altform-lightunplated_targetsize-72.png",revision:"57de9ddd4bf20e6dba5a6a710cbf610a"},{url:"windows11/Square44x44Logo.altform-lightunplated_targetsize-80.png",revision:"969e58b1d24bff5a75b8693b198e14bb"},{url:"windows11/Square44x44Logo.altform-lightunplated_targetsize-96.png",revision:"c0fd475555fd5e43600f8108966b6357"},{url:"windows11/Square44x44Logo.altform-unplated_targetsize-16.png",revision:"69ed06fc92ec399bbbbf84f2671eb9ae"},{url:"windows11/Square44x44Logo.altform-unplated_targetsize-20.png",revision:"a77f7ac36398810cee8e85cf1629abeb"},{url:"windows11/Square44x44Logo.altform-unplated_targetsize-24.png",revision:"af37285a862f5465fe47cb0ff58d682b"},{url:"windows11/Square44x44Logo.altform-unplated_targetsize-256.png",revision:"d82c74cbf7adc00603abe1440bfd7466"},{url:"windows11/Square44x44Logo.altform-unplated_targetsize-30.png",revision:"e2ac51c1a78150c6cb73c38a3dac3268"},{url:"windows11/Square44x44Logo.altform-unplated_targetsize-32.png",revision:"c1cfb77d7a7b3516d0ce52c81a7e0de9"},{url:"windows11/Square44x44Logo.altform-unplated_targetsize-36.png",revision:"fc9192f5a6754b9e0c7c31b57c90ae57"},{url:"windows11/Square44x44Logo.altform-unplated_targetsize-40.png",revision:"5f063f3d3b25b0c9ebcd94ce5926df77"},{url:"windows11/Square44x44Logo.altform-unplated_targetsize-44.png",revision:"fa28f69d6c53879f2473edd4466ed4f9"},{url:"windows11/Square44x44Logo.altform-unplated_targetsize-48.png",revision:"55ed03e0d2022056e72d9cc97d2377e9"},{url:"windows11/Square44x44Logo.altform-unplated_targetsize-60.png",revision:"087e10dcaa5f3869a07fa06de67cb8df"},{url:"windows11/Square44x44Logo.altform-unplated_targetsize-64.png",revision:"12e26ada83c0b386b62bcc7b572025a2"},{url:"windows11/Square44x44Logo.altform-unplated_targetsize-72.png",revision:"57de9ddd4bf20e6dba5a6a710cbf610a"},{url:"windows11/Square44x44Logo.altform-unplated_targetsize-80.png",revision:"969e58b1d24bff5a75b8693b198e14bb"},{url:"windows11/Square44x44Logo.altform-unplated_targetsize-96.png",revision:"c0fd475555fd5e43600f8108966b6357"},{url:"windows11/Square44x44Logo.scale-100.png",revision:"fa28f69d6c53879f2473edd4466ed4f9"},{url:"windows11/Square44x44Logo.scale-125.png",revision:"d8c8182908f8a4ef0484fab8b1f76dfb"},{url:"windows11/Square44x44Logo.scale-150.png",revision:"34783a4e3d2973f0bbebc7bfd381b0dd"},{url:"windows11/Square44x44Logo.scale-200.png",revision:"57905e5aa47c84355e946305e6c47187"},{url:"windows11/Square44x44Logo.scale-400.png",revision:"37c3b5881788a525223c2f3fdee9bf76"},{url:"windows11/Square44x44Logo.targetsize-16.png",revision:"69ed06fc92ec399bbbbf84f2671eb9ae"},{url:"windows11/Square44x44Logo.targetsize-20.png",revision:"a77f7ac36398810cee8e85cf1629abeb"},{url:"windows11/Square44x44Logo.targetsize-24.png",revision:"af37285a862f5465fe47cb0ff58d682b"},{url:"windows11/Square44x44Logo.targetsize-256.png",revision:"d82c74cbf7adc00603abe1440bfd7466"},{url:"windows11/Square44x44Logo.targetsize-30.png",revision:"e2ac51c1a78150c6cb73c38a3dac3268"},{url:"windows11/Square44x44Logo.targetsize-32.png",revision:"c1cfb77d7a7b3516d0ce52c81a7e0de9"},{url:"windows11/Square44x44Logo.targetsize-36.png",revision:"fc9192f5a6754b9e0c7c31b57c90ae57"},{url:"windows11/Square44x44Logo.targetsize-40.png",revision:"5f063f3d3b25b0c9ebcd94ce5926df77"},{url:"windows11/Square44x44Logo.targetsize-44.png",revision:"fa28f69d6c53879f2473edd4466ed4f9"},{url:"windows11/Square44x44Logo.targetsize-48.png",revision:"55ed03e0d2022056e72d9cc97d2377e9"},{url:"windows11/Square44x44Logo.targetsize-60.png",revision:"087e10dcaa5f3869a07fa06de67cb8df"},{url:"windows11/Square44x44Logo.targetsize-64.png",revision:"12e26ada83c0b386b62bcc7b572025a2"},{url:"windows11/Square44x44Logo.targetsize-72.png",revision:"57de9ddd4bf20e6dba5a6a710cbf610a"},{url:"windows11/Square44x44Logo.targetsize-80.png",revision:"969e58b1d24bff5a75b8693b198e14bb"},{url:"windows11/Square44x44Logo.targetsize-96.png",revision:"c0fd475555fd5e43600f8108966b6357"},{url:"windows11/StoreLogo.scale-100.png",revision:"b3a36c52b0e8cba22c6c2f554402c6cc"},{url:"windows11/StoreLogo.scale-125.png",revision:"5dbb4dbeb787a1fc2a48e7dbdc4db8f4"},{url:"windows11/StoreLogo.scale-150.png",revision:"cfec636b10bb6a29b078792cfd874da1"},{url:"windows11/StoreLogo.scale-200.png",revision:"b84ee728f2fb93fe19e56503bbed0ff5"},{url:"windows11/StoreLogo.scale-400.png",revision:"a97743bf2e76100b4fea7bb00681b9c3"},{url:"windows11/Wide310x150Logo.scale-100.png",revision:"2777c626befc7d7b1799bdfc1f32e958"},{url:"windows11/Wide310x150Logo.scale-125.png",revision:"f79fbf1af1ed51a47b384dd365befcbd"},{url:"windows11/Wide310x150Logo.scale-150.png",revision:"d668ba042262f376d6161fa0e59fd1f9"},{url:"windows11/Wide310x150Logo.scale-200.png",revision:"7ddd5d964fe5eb8bcabd31a074480b6a"},{url:"windows11/Wide310x150Logo.scale-400.png",revision:"dcf48c71b84e3b2a3322b7f118bfd003"},{url:"manifest.webmanifest",revision:"2f26bba6c1540fcda7ba8291ed0e6540"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html"))),e.registerRoute(/\.(?:woff2?|ttf|eot)$/,new e.CacheFirst({cacheName:"fonts-cache",plugins:[new e.ExpirationPlugin({maxEntries:30,maxAgeSeconds:2592e3})]}),"GET")}));
