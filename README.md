# esformatter-couchapp

esformatter plugin to handle couchapp JS

couchapp allows CouchDB applications to be managed as regular files. The exported Javascript for 
views' map and reduce functions are typically of this form:

```javascript
function(doc) {
  if (doc.name) {
    emit(doc.name, null);
  }
}
```

Normally esformatter can't parse a plain anonymous function. This plugin enables esformatter to handle such files.

## Install

```shell
npm install --save-dev esformatter-couchapp
```

Then edit your package.json to include the plugin. The other lines are for illustration.

```json

   "esformatter" : {
      "indent" : {
         "alignComments" : true,
         "value" : "  "
      },
      "plugins" : [
         "esformatter-couchapp"
      ],
      "root" : true,
      "whiteSpace" : {
         "removeTrailing" : 1,
         "value" : " "
      }
   },
```
