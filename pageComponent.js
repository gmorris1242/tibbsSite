(function() {
    var pageComponent = {
      template: `
      <header ng-show="$ctrl.headerShow">
        <img src="images/TiBBS Logo white.png">
        <ul>
          <a href="#header"><li>COMPANY</li></a>
          <a href="#cases"><li>CASE STUDIES</li></a>
          <a href="#!/work"><li>OUR WORK</li></a>
          <a href="#contact"><li>CONTACT</li></a>
          <li id="cancelButton"><i class="material-icons close" ng-click="$ctrl.closeNav()">close</i></li>
        </ul>
      </header>

      <div class="menuButtonDiv" ng-show="$ctrl.buttonShow">
        <img src="images/TiBBS Logo white.png" ng-show="$ctrl.buttonShow">
        <i id="homeMenueBtn" class="material-icons close" ng-click="$ctrl.showNav()" ng-show="$ctrl.buttonShow">reorder</i>
      </div>

      <div class="videoWrapper" id="header">
        <div class="titleVideo">
          <video src="videos/4X4_HERO_MAIN_EDIT_V5_16x9.mp4" autoplay repeat loop muted class="titleVideo"></video>
          <img class="title" src="images/TiBBS Logo white.png">
        </div>
      </div>

      <div class="cultureDiv">
        <h2>CULTURE</h2>
        <p>We are a nimble yet powerful team of directors, producers, cinematographers, and designers
          with the ability to scale to any project, large or small. We all share a common credo; story first.
          Whether we find those stories, or they find us, we sink our teeth in and bring them to life.
          <br><br>
          The goal is to engage. The challenge is to exceed expectations.</p>
      </div>

      <div class="caseStudyOne" id="cases">
        <h2>4X4 DAY | JEEP</h2>
        <p>CASE STUDY COMING SOON
        </p>
        <button>Case Study</button>
      </div>

      <div class="quote">
        <p>"Without a story worth telling, the most beautiful imagery becomes forgettable."</p>
      </div>

      <div class="caseStudyTwo">
        <h2>Mike The Barber</h2>
        <p>CASE STUDY COMMING SOON</p>
        <button>Case Study</button>
      </div>

      <div class="graphicsDiv" ng-switch="$ctrl.switch" ng-class="$ctrl.direction">
        <div class="graphic" ng-switch-when="1">
          <img src="graphics/4.png">
        </div>
        <div class="graphic" ng-switch-when="2">
          <img src="graphics/6.png">
        </div>
        <div class="graphic" ng-switch-when="3">
          <img src="graphics/bot1render.png">
        </div>
        <div class="arrowsDiv">
          <div class="back" ng-click="$ctrl.back()">
            <i class="material-icons">chevron_left</i>
          </div>
          <div class="forward" ng-click="$ctrl.next()">
            <i class="material-icons">chevron_right</i>
          </div>
        </div>
      </div>

      <div class="contactDiv" id="contact">
        <h2>CONTACT</h2>
        <p>72 Auburn Ave.<br>
          Pontiac MI 48342 <br>
          248.787.0728 <br>
          howdy@tibbsinc.com
        </p>
      </div>

      `,
      controller: function() {
        var $ctrl = this;
        $ctrl.headerShow = false;
        $ctrl.buttonShow = true;
        $ctrl.switch = 1;
        $ctrl.direction;

        $ctrl.closeNav = function(){
          $ctrl.headerShow = false;
          $ctrl.buttonShow = true;
        };

        $ctrl.showNav = function(){
          $ctrl.headerShow = true;
          $ctrl.buttonShow = false;
        };

        $ctrl.next = function(){
          $ctrl.direction = "forward";
          if ($ctrl.switch > 0 && $ctrl.switch < 3)
            {$ctrl.switch += 1;
          }else {
            $ctrl.switch = 1;
          }
          console.log($ctrl.switch);
        };

        $ctrl.back = function(){
          $ctrl.direction = "backward";
          if ($ctrl.switch > 1)
            {$ctrl.switch -= 1;
          }else {
            $ctrl.switch = 3;
          }
          console.log($ctrl.switch);
        };

      }
    };


    angular.module("app")
      .component("pageComponent", pageComponent)
  }());
