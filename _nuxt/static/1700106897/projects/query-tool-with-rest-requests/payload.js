__NUXT_JSONP__("/projects/query-tool-with-rest-requests", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,_,$,aa,ab,ac,ad,ae,af,ag,ah,ai,aj,ak,al,am,an,ao,ap,aq,ar,as,at,au,av,aw,ax,ay,az,aA,aB,aC,aD,aE,aF,aG,aH,aI,aJ,aK,aL,aM,aN,aO,aP,aQ,aR,aS,aT,aU,aV,aW){return {data:[{project:{slug:"query-tool-with-rest-requests",description:"This is simple web tool utilizing Scryfall's free API to query cards of value for the popular card game, Magic: The Gathering (often abbreviated with MTG).",createdAt:"2022-03-09T16:34:00.000Z",title:"Web-Based Query Tool with REST Requests",descriptionInArticle:M,image:"mtgQueryScryfall.png",imageAlt:"Screenshot of the final web tool with the corner peeled up to reveal the Scryfall logo.",tags:[{text:"Vue",show:M},{text:"Vue 3",show:P},{text:"JS",show:M},{text:"JavaScript",show:M},{text:"Bootstrap",show:M},{text:"Bootstrap 5",show:P},{text:"Sass",show:P},{text:"GitHub Pages",show:P}],toc:[{id:ae,depth:T,text:af},{id:ag,depth:U,text:ah},{id:ai,depth:T,text:aj},{id:ak,depth:U,text:al},{id:am,depth:U,text:an},{id:ao,depth:T,text:ap}],body:{type:aq,children:[{type:b,tag:h,props:{},children:[{type:a,value:ar},{type:b,tag:i,props:{href:V,rel:[p,q,r],target:s},children:[{type:a,value:as}]},{type:a,value:at},{type:b,tag:i,props:{href:Q,rel:[p,q,r],target:s},children:[{type:a,value:W}]},{type:a,value:au},{type:b,tag:i,props:{href:av,rel:[p,q,r],target:s},children:[{type:a,value:aw}]},{type:a,value:ax},{type:b,tag:i,props:{href:ay,rel:[p,q,r],target:s},children:[{type:a,value:az}]},{type:a,value:aA}]},{type:a,value:f},{type:a,value:f},{type:b,tag:h,props:{},children:[{type:a,value:"Unlike my personal site, however, this query tool utilizes REST API calls to the Scryfall database.\r\nThese are primarily "},{type:b,tag:m,props:{},children:[{type:a,value:"GET"}]},{type:a,value:" requests for either currently known sets in the game or cards that were released in a particular set."}]},{type:a,value:f},{type:b,tag:X,props:{className:[Y,"mx-auto","mt-4","mb-2",aB],w:"50%",r:"50rem",src:"logos\u002FScryfall.jpg",alt:"Scryfall logo",href:"https:\u002F\u002Fscryfall.com\u002F"},children:[{type:a,value:f}]},{type:a,value:f},{type:b,tag:Z,props:{id:ae},children:[{type:b,tag:i,props:{href:"#background",ariaHidden:G,tabIndex:H},children:[{type:b,tag:c,props:{className:[I,J]},children:[]}]},{type:a,value:af}]},{type:a,value:f},{type:b,tag:h,props:{},children:[{type:a,value:"\"Why sets?\" you may be asking.\r\nI've had my whole collection organized into sets for years and until recently, I thought that's how they would stay.\r\nI had this ambition of having a four copies of every card from each set. While ambitious, it was a reasonable goal for a while, until sets starting coming out with alternate prints and more and more sets were being released every year.\r\nI finally realized that what I cared about what not being a completionist, but being able to play whatever deck I wanted.\r\nAll that meant was having a play set of each oracle card."}]},{type:a,value:f},{type:b,tag:h,props:{},children:[{type:a,value:"That's where this tool comes in.\r\nIt allows me to pull up any set in Magic's history and determine if the cards printed in them are valued for either their rarity or power in the game.\r\nGranted, there's no concrete way of knowing this, but a good estimate can be made based on whether "},{type:b,tag:"em",props:{},children:[{type:a,value:"all"}]},{type:a,value:" printings of a card share a similar price or just the printings of a particular set."}]},{type:a,value:f},{type:b,tag:_,props:{id:ag},children:[{type:b,tag:i,props:{href:"#disclaimers",ariaHidden:G,tabIndex:H},children:[{type:b,tag:c,props:{className:[I,J]},children:[]}]},{type:a,value:ah}]},{type:a,value:f},{type:b,tag:h,props:{},children:[{type:a,value:"I do have to explicitly mention that the only part of this site that is truly mine is the site logo and over-all construction and design itself. Even the site code was constructed with some assistance from web searches. Even so, this tool was designed for personal use and is only publicly available for ease of use."}]},{type:a,value:f},{type:b,tag:h,props:{},children:[{type:b,tag:i,props:{href:Q,rel:[p,q,r],target:s},children:[{type:a,value:W}]},{type:a,value:", game data, and iconography are copyright "},{type:b,tag:i,props:{href:"https:\u002F\u002Fcompany.wizards.com\u002F",rel:[p,q,r],target:s},children:[{type:a,value:"Wizards of the Coast LLC"}]},{type:a,value:", a subsidiary of "},{type:b,tag:i,props:{href:aC,rel:[p,q,r],target:s},children:[{type:a,value:"Hasbro, Inc"}]},{type:a,value:k}]},{type:a,value:f},{type:b,tag:$,props:{className:["d-flex","mt-2","mb-4"]},children:[{type:a,value:t},{type:b,tag:X,props:{className:[Y,"ms-auto","me-2","px-3","py-3","my-3",aB,"bg-black"],w:"75%",src:"https:\u002F\u002Fimages.ctfassets.net\u002Fs5n2t79q9icq\u002F3dB5uyWzUH95O1ZPBNNUX5\u002F6cff7c65a809285755ea24b164b6ac65\u002Fmagic-logo.png?fm=webp",alt:"Magic: The Gathering logo",href:Q},children:[]},{type:a,value:t},{type:b,tag:X,props:{className:[Y,"ms-5","me-auto"],w:"125%",src:"https:\u002F\u002Fcorporate.hasbro.com\u002Fimages\u002Fnewcorporate\u002Fhasbro_logo.png",alt:"Hasbro logo",href:aC},children:[]},{type:a,value:f}]},{type:a,value:f},{type:b,tag:h,props:{},children:[{type:a,value:"Data is collected from the publicly available "},{type:b,tag:i,props:{href:V,rel:[p,q,r],target:s},children:[{type:a,value:"Scryfall API"}]},{type:a,value:" and is copyright Scryfall, LLC. with no affiliation to this site or the query tool. This service is currently free, so there are delays added into the API requests in an attempt to limit its overuse."}]},{type:a,value:f},{type:b,tag:Z,props:{id:ai},children:[{type:b,tag:i,props:{href:"#components",ariaHidden:G,tabIndex:H},children:[{type:b,tag:c,props:{className:[I,J]},children:[]}]},{type:a,value:aj}]},{type:a,value:f},{type:b,tag:h,props:{},children:[{type:a,value:"This tool is pretty small, so really there's only a couple of components worth mentioning here. Just a reminder that this is a Vue 3 site, so all the content for a single component appears in the same file."}]},{type:a,value:f},{type:b,tag:_,props:{id:ak},children:[{type:b,tag:i,props:{href:"#set-filter",ariaHidden:G,tabIndex:H},children:[{type:b,tag:c,props:{className:[I,J]},children:[]}]},{type:a,value:al}]},{type:a,value:f},{type:b,tag:h,props:{},children:[{type:a,value:"The set filter was probably the most difficult to set-up.\r\nI had a few issues I had to overcome with it.\r\nThe first is that I wanted to be able to use and see the set icons in the select option list.\r\nI'm a visual person, ad seeing that icon is much faster for me than trying to remember what the name of the set was.\r\nThis guaranteed that I could not use some simple bootstrap styling to make my dropdown menu.\r\nInstead, I had to construct one from scratch."}]},{type:a,value:f},{type:b,tag:h,props:{},children:[{type:a,value:"First I needed the data from the Scryfall API.\r\nThe line highlighted below returns a list of JSON objects that contains all the MTG sets.\r\nAll the data I needed for this component comes from this call, including the URLs for the icon SVGs."}]},{type:a,value:f},{type:b,tag:$,props:{className:[aD]},children:[{type:b,tag:c,props:{className:[aE]},children:[{type:a,value:aF}]},{type:b,tag:aG,props:{className:[aH,aI],dataLine:"3"},children:[{type:b,tag:m,props:{},children:[{type:a,value:aJ},{type:b,tag:c,props:{className:[d,u]},children:[{type:a,value:R}]},{type:a,value:t},{type:b,tag:c,props:{className:[d,E]},children:[{type:a,value:"created"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:x}]},{type:a,value:z},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:"this"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,K,E,l]},children:[{type:a,value:"fetchData"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:b,tag:c,props:{className:[d,aK]},children:[{type:a,value:"'https:\u002F\u002Fapi.scryfall.com\u002Fsets'"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:a,value:z},{type:b,tag:c,props:{className:[d,u]},children:[{type:a,value:R}]},{type:a,value:t},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:y}]},{type:a,value:t},{type:b,tag:c,props:{className:[d,u]},children:[{type:a,value:R}]},{type:a,value:f}]}]}]},{type:a,value:f},{type:b,tag:h,props:{},children:[{type:a,value:"Next, I needed to decide exactly how many of the sets I was going to display.\r\nIronically, even though the set icons are used to help identify what sets certain cards belonged to, the same icon is sometimes used for multiple sets or sub-sets.\r\nAs far as Scryfall is concerned, the promotional cards or tokens from any given set actually belong to their own sub-set.\r\nI didn't exactly agree with this categorization, so I went through the effort to undo this splitting."}]},{type:a,value:f},{type:b,tag:$,props:{className:[aD]},children:[{type:b,tag:c,props:{className:[aE]},children:[{type:a,value:aF}]},{type:b,tag:aG,props:{className:[aH,aI]},children:[{type:b,tag:m,props:{},children:[{type:a,value:aJ},{type:b,tag:c,props:{className:[d,u]},children:[{type:a,value:"\u002F\u002F Look through all of the available set codes."}]},{type:a,value:t},{type:b,tag:c,props:{className:[d,j,A]},children:[{type:a,value:aL}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:aa}]},{type:a,value:" d "},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:"of"}]},{type:a,value:" data"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:x}]},{type:a,value:z},{type:b,tag:c,props:{className:[d,u]},children:[{type:a,value:"\u002F\u002F If the set has a parent code, don't include it in the set list."}]},{type:a,value:z},{type:b,tag:c,props:{className:[d,j,A]},children:[{type:a,value:ab}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:b,tag:c,props:{className:[d,aK]},children:[{type:a,value:"'parent_set_code'"}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:ac}]},{type:a,value:aM},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:x}]},{type:a,value:B},{type:b,tag:c,props:{className:[d,u]},children:[{type:a,value:"\u002F\u002F Instead, add it to a list related to that original set."}]},{type:a,value:B},{type:b,tag:c,props:{className:[d,j,A]},children:[{type:a,value:ab}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:a,value:F},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:S}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:ac}]},{type:a,value:N},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:x}]},{type:a,value:ad},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:v}]},{type:a,value:F},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:S}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:w}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,K,E,l]},children:[{type:a,value:"push"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:a,value:F},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:m}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:C}]},{type:a,value:B},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:y}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,j,A]},children:[{type:a,value:aN}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:x}]},{type:a,value:ad},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:v}]},{type:a,value:F},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:S}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:w}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,D]},children:[{type:a,value:L}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:v}]},{type:a,value:F},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:m}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:w}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:C}]},{type:a,value:B},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:y}]},{type:a,value:B},{type:b,tag:c,props:{className:[d,u]},children:[{type:a,value:"\u002F\u002F Save some lookup data for later."}]},{type:a,value:"\n         parentLookup"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:v}]},{type:a,value:F},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:m}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:w}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,D]},children:[{type:a,value:L}]},{type:a,value:aM},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:S}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:C}]},{type:a,value:z},{type:b,tag:c,props:{className:[d,u]},children:[{type:a,value:"\u002F\u002F Otherwise, the set should be a \"base\" set and should be included."}]},{type:a,value:z},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:y}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,j,A]},children:[{type:a,value:aN}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:x}]},{type:a,value:"\n         sets"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:v}]},{type:a,value:F},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:m}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:w}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,D]},children:[{type:a,value:L}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:x}]},{type:a,value:aO},{type:b,tag:c,props:{className:[d,u]},children:[{type:a,value:R}]},{type:a,value:B},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:y}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:C}]},{type:a,value:z},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:y}]},{type:a,value:t},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:y}]},{type:a,value:t},{type:b,tag:c,props:{className:[d,u]},children:[{type:a,value:"\u002F\u002F Then it's possible for the sub codes to be chained together."}]},{type:a,value:t},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:aa}]},{type:a,value:" tempCodes "},{type:b,tag:c,props:{className:[d,D]},children:[{type:a,value:L}]},{type:a,value:N},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:C}]},{type:a,value:t},{type:b,tag:c,props:{className:[d,j,A]},children:[{type:a,value:"do"}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:x}]},{type:a,value:z},{type:b,tag:c,props:{className:[d,j,A]},children:[{type:a,value:aL}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:aa}]},{type:a,value:" s "},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:ac}]},{type:a,value:" tempCodes"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:x}]},{type:a,value:B},{type:b,tag:c,props:{className:[d,u]},children:[{type:a,value:"\u002F\u002F If the key is not a base set, then append it to it's own base."}]},{type:a,value:B},{type:b,tag:c,props:{className:[d,j,A]},children:[{type:a,value:ab}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:b,tag:c,props:{className:[d,D]},children:[{type:a,value:"!"}]},{type:a,value:"sets"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,K,E,l]},children:[{type:a,value:"hasOwnProperty"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:a,value:O},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:x}]},{type:a,value:ad},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:v}]},{type:a,value:aP},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:v}]},{type:a,value:O},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:w}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:w}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,D]},children:[{type:a,value:L}]},{type:a,value:N},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:v}]},{type:a,value:aP},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:v}]},{type:a,value:O},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:w}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:w}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,K,E,l]},children:[{type:a,value:"concat"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:a,value:aQ},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:v}]},{type:a,value:O},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:w}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:C}]},{type:a,value:aO},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:"delete"}]},{type:a,value:N},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:v}]},{type:a,value:O},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:w}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:C}]},{type:a,value:B},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:y}]},{type:a,value:z},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:y}]},{type:a,value:"\n      tempCodes "},{type:b,tag:c,props:{className:[d,D]},children:[{type:a,value:L}]},{type:a,value:N},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:C}]},{type:a,value:t},{type:b,tag:c,props:{className:[d,u]},children:[{type:a,value:"\u002F\u002F Repeat this process until the number of lists stops changing."}]},{type:a,value:t},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:y}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,j,A]},children:[{type:a,value:"while"}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:b,tag:c,props:{className:[d,aR,aS]},children:[{type:a,value:aT}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,K,E,l]},children:[{type:a,value:aU}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:a,value:"tempCodes"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:aV}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,D]},children:[{type:a,value:"!="}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,aR,aS]},children:[{type:a,value:aT}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,K,E,l]},children:[{type:a,value:aU}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:a,value:aQ},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:aV}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:C}]},{type:a,value:f}]}]}]},{type:a,value:f},{type:b,tag:h,props:{},children:[{type:a,value:"It's not the most elegant solution, since it requires looping an indefinite amount of times, but this block only gets run a single time for when the user loads the page.\r\nThis additional work actually turns out to be useful in later queries to Scryfall as well.\r\nSince Scryfall has all these cards divided, I save these codes together for later to ensure all cards from a related set appear together."}]},{type:a,value:f},{type:b,tag:h,props:{},children:[{type:a,value:"The images are then set inside of a "},{type:b,tag:m,props:{},children:[{type:a,value:c}]},{type:a,value:" element, in front of any related text as their own "},{type:b,tag:m,props:{},children:[{type:a,value:aW}]},{type:a,value:" components.\r\nThe selected option is actually a "},{type:b,tag:m,props:{},children:[{type:a,value:"button"}]},{type:a,value:" element. When clicked, it produces an unordered list element of "},{type:b,tag:m,props:{},children:[{type:a,value:aW}]},{type:a,value:" components that is hidden once a selection is made.\r\nThis was possible with Bootstrap's "},{type:b,tag:m,props:{},children:[{type:a,value:"dropdown-toggle"}]},{type:a,value:", "},{type:b,tag:m,props:{},children:[{type:a,value:"dropdown-menu"}]},{type:a,value:", and "},{type:b,tag:m,props:{},children:[{type:a,value:"dropdown-item"}]},{type:a,value:" classes.\r\nTogether, these three make for customizable menus that can look similar to select option elements."}]},{type:a,value:f},{type:b,tag:_,props:{id:am},children:[{type:b,tag:i,props:{href:"#data-tables",ariaHidden:G,tabIndex:H},children:[{type:b,tag:c,props:{className:[I,J]},children:[]}]},{type:a,value:an}]},{type:a,value:f},{type:b,tag:h,props:{},children:[{type:a,value:"Once the data is queried for the set (and all of it's sub-sets), they are displayed across three different tables."}]},{type:a,value:f},{type:b,tag:h,props:{},children:[{type:a,value:"The first table pulls printings with the lowest market value. This helps determine if the card is valued for its mechanics.\r\nCards like basic lands, although valuable depending on the art, are so common that it's possible to purchase them for pennies on the dollar.\r\nBasic lands will never show up in this table.\r\nOther cards that are similarly useful but common also won't appear here.\r\nAs I go through my own cards, ones I find that appear in this table (even if it's a different printing) are separated out as first picks to add to new decks."}]},{type:a,value:f},{type:b,tag:h,props:{},children:[{type:a,value:"The second table is filled with specific prints from the set that are independently valuable.\r\nThese are cards that are purchased for their rarity or their specific art.\r\nThe chances of these cards being valued for their playability is lower.\r\nIn my collection, these are the first to sell or exchange for cards still needed."}]},{type:a,value:f},{type:b,tag:h,props:{},children:[{type:a,value:"The last table shows cards whose foil value is higher than the specific price queried for but the non-foil versions are valued below that threshold.\r\nThese cards are also good choices for sale or trade.\r\nSome cards have foil prices that are significantly higher than their non-foil counterparts.\r\nSince I'm more concerned with playability, there is less personal value in these prints."}]},{type:a,value:f},{type:b,tag:Z,props:{id:ao},children:[{type:b,tag:i,props:{href:"#final-remarks",ariaHidden:G,tabIndex:H},children:[{type:b,tag:c,props:{className:[I,J]},children:[]}]},{type:a,value:ap}]},{type:a,value:f},{type:b,tag:h,props:{},children:[{type:a,value:"This was a fairly straight-forward project using Vue 3 to build a static web-tool.\r\nVue 3 made it easy to construct components in an object-oriented style and will likely be the basis of future projects."}]}]},excerpt:{type:aq,children:[{type:b,tag:h,props:{},children:[{type:a,value:ar},{type:b,tag:i,props:{href:V,rel:[p,q,r],target:s},children:[{type:a,value:as}]},{type:a,value:at},{type:b,tag:i,props:{href:Q,rel:[p,q,r],target:s},children:[{type:a,value:W}]},{type:a,value:au},{type:b,tag:i,props:{href:av,rel:[p,q,r],target:s},children:[{type:a,value:aw}]},{type:a,value:ax},{type:b,tag:i,props:{href:ay,rel:[p,q,r],target:s},children:[{type:a,value:az}]},{type:a,value:aA}]}]},dir:"\u002Fprojects",path:"\u002Fprojects\u002Fquery-tool-with-rest-requests",extension:".md",updatedAt:"2023-11-16T03:54:22.119Z"}}],fetch:{},mutations:void 0}}("text","element","span","token","punctuation","\n"," ","p","a","keyword",".","property-access","code","(",")","nofollow","noopener","noreferrer","_blank","\n   ","comment","[","]","{","}","\n      ","control-flow","\n         ",";","operator","function","d","true",-1,"icon","icon-link","method","=",false," subCodes","s",true,"https:\u002F\u002Fmagic.wizards.com\u002F","\u002F\u002F ...","parent_set_code",2,3,"https:\u002F\u002Fscryfall.com\u002Fdocs\u002Fapi","Magic: The Gathering","markdown-image","d-block","h2","h3","div","let","if","in","\n            subCodes","background","Background","disclaimers","Disclaimers","components","Components","set-filter","Set Filter","data-tables","Data Tables","final-remarks","Final Remarks","root","This is simple web tool utilizing ","Scryfall's"," free API to query cards of value for the popular card game, "," (often abbreviated with MTG).\r\nThe finished tool can be found ","https:\u002F\u002Fdanielrunningen.github.io\u002Fmtg-query\u002F","here",".\r\nLike my ","http:\u002F\u002Fwww.danielrunningen.com\u002Fprojects\u002Fnuxt-js-personal-website","personal website",", this query tool is a static Vue website hosted off of GitHub Pages.","rounded-pill","https:\u002F\u002Fcorporate.hasbro.com\u002F","nuxt-content-highlight","filename","SetFilter.vue","pre","language-js","line-numbers","   ","string","for"," d","else","\n            ","parentLookup","subCodes","known-class-name","class-name","Object","keys","length","Set")));