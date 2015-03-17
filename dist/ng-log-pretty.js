(function () {
  "use strict";
  /* global vkbeautify */

  angular.module("ngLogPretty", [])
  .config(["$provide", function ($provide) {
    $provide.decorator("$log", ["$delegate", function ($delegate) {
      $delegate.pretty = function (input, opts) {
        var output;
        opts = opts || {};
        output = "\n\r";
        output += vkbeautify[(opts.type || "xml")](input);
        $delegate[(opts.output || "log")].call(null, output);
      };
      return $delegate;
    }]);
  }]);
}());
