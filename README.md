# pyRevit-ESM

The **pyRevit Extensions Settings Manager (ESM)** is a GUI utility webapp that can be used to simplify the management of the [pyRevit](https://github.com/eirannejad/pyRevit) [Extensions](https://www.notion.so/Manage-pyRevit-extensions-fa853768e94240b5b59803e5d7171be3#9cac13d1144d4fd082b0da3e5cb394f3) json settings modification & creation.

## Roadmap, Notes & References

### Roadmap:

#### initial prototype

- [ ] build the interface skeleton (bootstrap?)
- [ ] add _upload json button_ option || _paste the json_ in the browser.
- [ ] dynamically build & display the json properties as html elements and containers
- [ ] add the properties values inside the containers as html elements
- [ ] display all available pyrevit Extension Settings options to be added and removed by the user
- [ ] display & set default values as the settings objects gets added, and restrict the data types entries
- [ ] add functionality to support external resources (GET request, csv upload,..etc) for some of the options (like the "authusers")
- [ ] add support for search through the external imported data, and support for regex matching.
- [ ] support for website caching & webapp data (the json string) in the browserStorage (to prevent accidental loss of data/work).
- [ ] provide download json file for the latest modified version.

#### future features

- [ ] support for Array of multiple extensions settings at once (options like propagate data across multiple extensions, and selection of each extension individually (drop down?) )
- [ ] add user profiles signups & Authentication (save data to databases, or to users personal cloud storage: google drive, dropbox, onedrive, ..etc).
- [ ] add support to modify and commit changes to the json files in git repos (getting github, bitbucket,..etc accounts linked to the signed up users).

---

### notes:

> Here is the example of the dictionary key to control user access to your extensions (add it inside your own pyRevit extension definition file - watch the video if you don’t know how):

```
# add as many users as need access to this extension
# the usernames are Revit usernames (not necessarily/always the machine user name)
"authusers": ["username1", "username2", "username3"]
```

---

### references:

- [Managing pyRevit Extensions](https://www.notion.so/Managing-pyRevit-Extensions-42ca2b68ef9c48b685f027647ca14a60)
- [JSON Editor](https://github.com/json-editor/json-editor). **npm library** JSON Editor takes a JSON Schema and uses it to generate an HTML form.
  
  `npm install @json-editor/json-editor`
