(function () {
  "use strict";

  describe("ngLogPretty", function () {
    var $log;

    beforeEach(function () {
      module("ngLogPretty");

      inject(function (_$injector_) {
        $log = _$injector_.get("$log");
      });
    });

    it("should add a 'pretty' method to the $log service", function () {
      expect($log.pretty).toBeDefined();
      expect(angular.isFunction($log.pretty)).toBe(true);
    });

    describe("log types", function () {
      beforeEach(function () {
        spyOn($log, "log").and.callThrough();
        spyOn($log, "info").and.callThrough();
        spyOn($log, "debug").and.callThrough();
        spyOn($log, "warn").and.callThrough();
        spyOn($log, "error").and.callThrough();
      });

      it("should default to log", function () {
        $log.pretty("test");
        expect($log.log).toHaveBeenCalled();
      });

      it("should be able to call info", function () {
        $log.pretty("test", {output: "info"});
        expect($log.info).toHaveBeenCalled();
      });

      it("should be able to call debug", function () {
        $log.pretty("test", {output: "debug"});
        expect($log.debug).toHaveBeenCalled();
      });

      it("should be able to call warn", function () {
        $log.pretty("test", {output: "warn"});
        expect($log.warn).toHaveBeenCalled();
      });

      it("should be able to call error", function () {
        $log.pretty("test", {output: "error"});
        expect($log.error).toHaveBeenCalled();
      });
    });

    describe("vkbeautify output", function () {
      beforeEach(function () {
        spyOn(vkbeautify, "xml");
        spyOn(vkbeautify, "json");
        spyOn(vkbeautify, "sql");
        spyOn(vkbeautify, "css");
      });

      it("should default to xml", function () {
        $log.pretty("test");
        expect(vkbeautify.xml).toHaveBeenCalled();
      });

      it("should be able to call json", function () {
        $log.pretty("test", {type: "json"});
        expect(vkbeautify.json).toHaveBeenCalled();
      });

      it("should be able to call sql", function () {
        $log.pretty("test", {type: "sql"});
        expect(vkbeautify.sql).toHaveBeenCalled();
      });

      it("should be able to call css", function () {
        $log.pretty("test", {type: "css"});
        expect(vkbeautify.css).toHaveBeenCalled();
      });
    });
  });
}());
