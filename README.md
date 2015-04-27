# Angular Pretty Log

A decorator for Angular's `$log` service that creates a `pretty` method for generating formatted output.

## Usage

First, add both ng-log-pretty and [vkbeautify]() to your application:

```html
<!-- index.html -->
<script src="/bower_components/ng-log-pretty/dist/vkbeautify.min.js"></script>
<script src="/bower_components/ng-log-pretty/dist/ng-log-pretty.min.js"></script>
```

Then call it from within your application:

```javascript
var app = angular
  .module("myApp", ["ng-log-pretty"])
  .run(function ($log) {
    $log.pretty("<div><h1>Hello world</h1></div>");
  });
  // >>
  // <div>
  //   <h1>Hello world</h1>
  // </div>
```

## Options

* output: (String) The type of `$log` output to be used. Default: `log`. Available options: `log`, `info`, `debug`, `warn`, `error`
    Example: `$log.pretty("<p>Info output</p>", {output: "info"});`
* type: (String) The type of string to be processed. Default: `xml`. Available options: `xml`, `json`,  `sql`, `css`
    Example: `$log.pretty("{\"test\": \"json\"}", type: "json");`
