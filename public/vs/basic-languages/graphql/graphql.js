"use strict";/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.38.0(0e330ae453813de4e6cf272460fb79c7117073d0)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/define("vs/basic-languages/graphql/graphql",["require","require"],e=>(()=>{var e=Object.defineProperty,t=Object.getOwnPropertyDescriptor,n=Object.getOwnPropertyNames,o=Object.prototype.hasOwnProperty,r={};((t,n)=>{for(var o in n)e(t,o,{get:n[o],enumerable:!0})})(r,{conf:()=>s,language:()=>i});var s={comments:{lineComment:"#"},brackets:[["{","}"],["[","]"],["(",")"]],autoClosingPairs:[{open:"{",close:"}"},{open:"[",close:"]"},{open:"(",close:")"},{open:'"""',close:'"""',notIn:["string","comment"]},{open:'"',close:'"',notIn:["string","comment"]}],surroundingPairs:[{open:"{",close:"}"},{open:"[",close:"]"},{open:"(",close:")"},{open:'"""',close:'"""'},{open:'"',close:'"'}],folding:{offSide:!0}},i={defaultToken:"invalid",tokenPostfix:".gql",keywords:["null","true","false","query","mutation","subscription","extend","schema","directive","scalar","type","interface","union","enum","input","implements","fragment","on"],typeKeywords:["Int","Float","String","Boolean","ID"],directiveLocations:["SCHEMA","SCALAR","OBJECT","FIELD_DEFINITION","ARGUMENT_DEFINITION","INTERFACE","UNION","ENUM","ENUM_VALUE","INPUT_OBJECT","INPUT_FIELD_DEFINITION","QUERY","MUTATION","SUBSCRIPTION","FIELD","FRAGMENT_DEFINITION","FRAGMENT_SPREAD","INLINE_FRAGMENT","VARIABLE_DEFINITION"],operators:["=","!","?",":","&","|"],symbols:/[=!?:&|]+/,escapes:/\\(?:["\\\/bfnrt]|u[0-9A-Fa-f]{4})/,tokenizer:{root:[[/[a-z_][\w$]*/,{cases:{"@keywords":"keyword","@default":"key.identifier"}}],[/[$][\w$]*/,{cases:{"@keywords":"keyword","@default":"argument.identifier"}}],[/[A-Z][\w\$]*/,{cases:{"@typeKeywords":"keyword","@default":"type.identifier"}}],{include:"@whitespace"},[/[{}()\[\]]/,"@brackets"],[/@symbols/,{cases:{"@operators":"operator","@default":""}}],[/@\s*[a-zA-Z_\$][\w\$]*/,{token:"annotation",log:"annotation token: $0"}],[/\d*\.\d+([eE][\-+]?\d+)?/,"number.float"],[/0[xX][0-9a-fA-F]+/,"number.hex"],[/\d+/,"number"],[/[;,.]/,"delimiter"],[/"""/,{token:"string",next:"@mlstring",nextEmbedded:"markdown"}],[/"([^"\\]|\\.)*$/,"string.invalid"],[/"/,{token:"string.quote",bracket:"@open",next:"@string"}]],mlstring:[[/[^"]+/,"string"],['"""',{token:"string",next:"@pop",nextEmbedded:"@pop"}]],string:[[/[^\\"]+/,"string"],[/@escapes/,"string.escape"],[/\\./,"string.escape.invalid"],[/"/,{token:"string.quote",bracket:"@close",next:"@pop"}]],whitespace:[[/[ \t\r\n]+/,""],[/#.*$/,"comment"]]}};return((r,s,i,a)=>{if(s&&"object"==typeof s||"function"==typeof s)for(let i of n(s))o.call(r,i)||void 0===i||e(r,i,{get:()=>s[i],enumerable:!(a=t(s,i))||a.enumerable});return r})(e({},"__esModule",{value:!0}),r)})());