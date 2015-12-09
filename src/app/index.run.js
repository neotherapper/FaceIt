(function() {
  'use strict';

  angular
    .module('faceIt')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('FaceIt App run');
  }

})();
