//String Manipulation

let str = "Properties,$a$set$of$immutable$values,$are$passed$to$a$component's$renderer$as$properties$in$its$HTML$tag.$A$component$cannot$directly$modify$any$properties$passed$to$it,$but$can$be$passed$callback$functions$that$do$modify$values.$This$mechanism's$promise$is$expressed$as$properties$flow$down;$actions$flow$up";

// Replace all '$' characters with a space
let newStr = str.replace(/\$/g, ' ');

console.log(newStr);
