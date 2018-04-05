(function() {
    var workComponent = {
      template: `
      <header ng-show="$ctrl.headerShow">
        <img src="images/TiBBS Logo white.png">
        <ul>
          <a href="#header"><li>COMPANY</li></a>
          <a href="#cases"><li>CASE STUDIES</li></a>
          <a href="#!/wor"><li>OUR WORK</li></a>
          <a href="#contact"><li>CONTACT</li></a>
          <li id="cancelButton"><i class="material-icons close" ng-click="$ctrl.closeNav()">close</i></li>
        </ul>
      </header>

      <div class="menuButtonDiv workPage" ng-show="$ctrl.buttonShow">
        <img src="images/TiBBS Logo.png" ng-show="$ctrl.buttonShow">
        <i id="workMenueBtn" class="material-icons close" ng-click="$ctrl.showNav()" ng-show="$ctrl.buttonShow">reorder</i>
      </div>

      <div class="graphicsDiv" ng-switch="$ctrl.switch">
        <div class="graphic" ng-switch-when="1">
          <img src="graphics/4.png">
        </div>
        <div class="graphic" ng-switch-when="2">
          <img src="graphics/6.png">
        </div>
        <div class="graphic" ng-switch-when="3">
          <img src="graphics/bot1render.png">
        </div>
      </div>
      <div class="arrowsDiv">
        <div class="back" ng-click="$ctrl.back()">
          <i class="material-icons">chevron_left</i>
        </div>
        <div class="forward" ng-click="$ctrl.next()">
          <i class="material-icons">chevron_right</i>
        </div>
      </div>

      `,
      controller: function() {
        var $ctrl = this;
        $ctrl.headerShow = false;
        $ctrl.buttonShow = true;
        $ctrl.switch = 1;

        $ctrl.closeNav = function(){
          $ctrl.headerShow = false;
          $ctrl.buttonShow = true;
        };

        $ctrl.showNav = function(){
          $ctrl.headerShow = true;
          $ctrl.buttonShow = false;
        };

        $ctrl.next = function(){
          if ($ctrl.switch > 0 && $ctrl.switch < 3)
            {$ctrl.switch += 1;
          }else {
            $ctrl.switch = 1;
          }
          console.log($ctrl.switch);
        }

        $ctrl.back = function(){
          if ($ctrl.switch > 1)
            {$ctrl.switch -= 1;
          }else {
            $ctrl.switch = 1;
          }
          console.log($ctrl.switch);
        }
      }
    };


    angular.module("app")
      .component("workComponent", workComponent)
  }());
