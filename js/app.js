/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	//util
	var util = __webpack_require__(2);

	//util.log("ほげほげ");
	(function(angular) {
	    var MODULES = [
	        'ui.router',
	        'angularLocalStorage',
	        'ngResource',
	        'ngSanitize',
	        'ngAnimate',
	        'ngTouch',
	        'toaster'
	    ];
	    var MODULE_GROUP = [
	        'controllers'
	        ,'directives'
	        ,'filters'
	        ,'models'
	        ,'services'
	        ,'config'
	    ];
	    for (var i = 0, len = MODULE_GROUP.length; i < len; i++) angular.module(MODULE_GROUP[i],[]);
	    angular.module('offsideApp',MODULES.concat(MODULE_GROUP));
	})(angular);

	//ルーティング
	__webpack_require__(3);

	//コントローラー読み込み (./controllersフォルダ内の全て)
	var ctx = __webpack_require__(1),
	    map = ctx.keys(),
	    i = map.length;
	while (i--) ctx(map[i]);

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var map = {
		"./finishCtrl.js": 4,
		"./headCtrl.js": 5,
		"./mainCtrl.js": 6,
		"./playerCtrl.js": 7,
		"./readyCtrl.js": 8,
		"./roleCtrl.js": 9,
		"./signinCtrl.js": 10
	};
	function webpackContext(req) {
		return __webpack_require__(webpackContextResolve(req));
	};
	function webpackContextResolve(req) {
		return map[req] || (function() { throw new Error("Cannot find module '" + req + "'.") }());
	};
	webpackContext.keys = function webpackContextKeys() {
		return Object.keys(map);
	};
	webpackContext.resolve = webpackContextResolve;
	module.exports = webpackContext;
	webpackContext.id = 1;


/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	   log: function(val){
	       console.log("debug",val);
	   }
	}

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict'

	angular.module('config').config(['$stateProvider','$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
	    $urlRouterProvider.otherwise('/');
	    $stateProvider
	        .state("/",{
	            url:"/",
	            template: __webpack_require__(18),
	            controller: "MainCtrl"
	        })

	        .state("/palyer",{
	            url:"/player",
	            template: __webpack_require__(19),
	            controller: 'PlayerCtrl'
	        })

	        .state("/role",{
	            url:"/role",
	            template: __webpack_require__(20),
	            controller: 'RoleCtrl'
	        })
	        .state("/ready",{
	            url:"/ready",
	            template: __webpack_require__(21),
	            controller: 'ReadyCtrl'
	        })

	        .state("/discuss",{
	            url:"/discuss",
	            template: __webpack_require__(22),
	            controller: 'ReadyCtrl'
	        })

	        .state("/finish",{
	            url:"/finish",
	            template: __webpack_require__(23),
	            controller: 'ReadyCtrl'
	        })

	        .state("/signin",{
	            url:"/signin",
	            template: __webpack_require__(24),
	            controller: 'SigninCtrl'
	        });
	}]);

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	angular.module('controllers').controller('FinishCtrl', [
	    '$scope',
	    'storage',

	    function ($scope, storage) {
	        var ROOM = 'ligroom1';
	        //部屋情報取得
	        var jinroData = {};
	        jinroDS.child(ROOM).get(function(data){
	            jinroData = data;
	            console.log(jinroData);
	        });

	        $scope.finish = function(){
	            $scope.open = 1;

	            var after = jinroData.after, tmp = [], result=[];

	            for(var i = 0, len = after.length; i < len; i++){
	                tmp[i] = after[i].split(":");
	                result[i] = {
	                    role: jinroData.role[tmp[i][0]].name,
	                    name: tmp[i][1]
	                };
	            }

	            $scope.friends = result;
	            console.log(result);
	        };
	    }
	]);

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	//ディレクティブ読み込み
	__webpack_require__(16);
	__webpack_require__(17);
	__webpack_require__(11);
	__webpack_require__(12);

	angular.module('controllers').controller('HeadCtrl', [
	    '$scope',
	    'storage',
	    'EventModel',
	    'LocalModel',
	    function ($scope, storage, EventModel, LocalModel) {

	        $scope.methodA = function(){
	            alert();
	        };

	        $scope.plusplus = function(){
	            $scope.ls += "a";
	            LocalModel.set('userName',$scope.ls);
	        };

	        $scope.ping = function(){
	            $scope.event = EventModel.query();
	            LocalModel.huga();
	        };

	        //初期実行
	        function init(){

	            // * defaultValue: デフォルト値
	            // * storeName: 変数名と異なる localStorage への保存 key を指定
	            storage.bind($scope, 'varName', {
	                defaultValue: 'n0bisuke',
	                storeName: 'userName'
	            });

	            $scope.ls = storage.get('userName');
	        }(init());

	    }
	]);

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(_) {'use strict';

	__webpack_require__(13);
	__webpack_require__(14);

	angular.module('controllers').controller('MainCtrl',[
	    '$scope',
	    'UserModel',
	    'RoomModel',
	    'storage',
	    'toaster',
	    '$timeout',

	    function ($scope, UserModel, RoomModel, storage, toaster, $timeout) {
	        var ROOM = 'ligroom1';

	        //部屋情報取得
	        var jinroData = {};
	        jinroDS.child(ROOM).get(function(data){
	            jinroData = data;

	            $scope.$apply(function(){
	               $scope.num = jinroData.count.num;
	                $scope.roomEx = jinroData.count.ex;
	            });

	        });

	        //部屋初期化
	        $scope.roomInit = function() {
	            if (!$scope.num) {
	                alert("人数を選択して下さい。");
	            } else {
	                $scope.roomEx = RoomModel.init(ROOM, $scope.num);
	                console.log("初期化しました");
	            }
	        };

	        //jinroDS.send({id:"せんど"});
	        //ユーザー追加
	        $scope.userInit = function(){

	            jinroDS.child(ROOM).get(function(data){
	                jinroData = data;
	            });

	            if(jinroData.users.length >= $scope.num){
	                alert("定員オーバーです");
	                return;
	            }

	            $scope.init = 1;

	            setTimeout(function(){
	                jinroData.users.push($scope.userName);
	                console.log(jinroData.users);
	                jinroDS.set(ROOM, {users:jinroData.users, page: 'intro'}); //サーバー上に保存
	                storage.set('jinroUser', $scope.userName); //ローカルに保存
	                $scope.friends = jinroData.users;
	            },1000);

	        };

	        $scope.userUpdate = function(){
	            $scope.friends = $scope.friends;
	            if($scope.friends.length === NUM){
	                $scope.enter = 1;
	            }
	        };


	        jinroDS.on('send', function(data){
	            console.log("げとせんd",data);
	        });

	        jinroDS.on('set', function(data) {
	            //イントロページ
	            if(data.value.page === 'intro') {
	                if (data.value.users[0]) { //自分以外
	                    console.log('setted!', data.value.users);
	                    var new_arr = _.union($scope.friends, data.value.users);

	                    $scope.$apply(function(){
	                        $scope.friends = data.value.users;
	                        if($scope.friends.length === $scope.num) $scope.enter = 1;
	                    });

	                }
	                else {//誰かが初期化を実行
	                    console.log('初期化');
	                }
	            }

	            //配役ページ
	            else if(data.value.page === 'role')
	            {

	            }



	        });


	        //
	        //$scope.name = 'hokaccha';
	        //$scope.$on('change:filter', function (evt, filter) {
	        //    $scope.currentFilter = filter;
	        //});));
	        //

	    }
	]);
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(25)))

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(13);
	__webpack_require__(15);

	angular.module('controllers').controller('PlayerCtrl', [
	    '$scope',
	    'UserModel',
	    'MilkModel',

	    function ($scope, UserModel, MilkModel) {
	        //var ROOM = 'ligroom1';
	        //var roomDS = jinroDS.child(ROOM);
	        //var jinroData = {};
	        //roomDS.get(function(data){
	        //    jinroData = data;
	        //});
	        //$scope.member = [];

	        //$scope.getRole = function(){
	        //    UserModel.role(ROOM, function (role, data) {
	        //        console.log(ROOM, data);
	        //        //LocalModel.set('jinro_all',data);
	        //    });
	        //
	        //    //var jinro = LocalModel.get('jinro_all');
	        //    //jinro.userName = $scope.userName;//ユーザー名
	        //    //
	        //    //if(jinro.name) {
	        //    //    $scope.role = jinro.name;
	        //    //    $scope.ex = jinro.ex;
	        //    //    UserModel.roleUpdate(ROOM, jinro);
	        //    //}else{
	        //    //    alert("定員オーバーです。");
	        //    //}
	        //};



	        $scope.userInit = function(){
	            $scope.init = 1; //確定ボタンを消す

	            UserModel.addUser();
	            //jinroDS.set(ROOM, jinroData); //更新

	            console.log($scope.userName);
	            //jinroData.users.push($scope.userName);
	            //$scope.init = 1; //確定ボタンを消す
	            //
	            //jinroDS.send({user: $scope.userName}); //ユーザー名
	            //
	            //console.log(jinroData.users);


	            //roomDS.child(ROOM).get(function(data){
	            //    //jinroSet(data);
	            //
	            //    jinroDS.push({"aaa": 111},function(data){
	            //        console.log("送信完了!", data);
	            //    });
	            //
	            //});
	            //
	            //function jinroSet(data){
	            //    jinroDS.child(ROOM).set(data);
	            //}
	        };



	        //jinroDS.on('send',function(data) {
	        //
	        //    //console.log("取得", data);
	        //    //data.push(data.value.user);
	        //
	        //    //$scope.list
	        //    console.log("取得", data.value.user);
	        //    //console.log("取得", data.users);
	        //    $scope.member.push(data.value.user);
	        //
	        //    console.log('push',$scope.member);
	        //
	        //});
	        //
	        ////jinroDataStore.on(event, callback)
	        //
	        //
	        //$scope.$watch(function() {
	        //    return $scope.member;
	        //}, function() {
	        //    console.log("監視");
	        //    // $location の path が変わった時
	        //});

	        /*
	         jinroDataStore.on('send',function(data){
	         var friends = $scope.friends;
	         console.log("取得",data);
	         console.log("fりえんd",friends);
	         friends.push(data.value.new_user);
	         console.log(friends);

	         });

	         $scope.$watch('friends', function() {
	         // scope の name が変わった時
	         console.log("監視");
	         $scope.friends = friends;
	         });*/

	    }
	]);

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(13);

	angular.module('controllers').controller('ReadyCtrl', [
	    '$scope',
	    'UserModel',
	    'storage',

	    function ($scope, UserModel, storage) {
	        var ROOM = 'ligroom1';
	        var jinroRole = storage.get('jinroRole');
	        $scope.ex =  jinroRole.ex;
	        $scope.role =  jinroRole.name;
	        $scope.userName =  storage.get('jinroUser');
	        $scope.type =  jinroRole.role;
	        $scope.partner = 1;
	        //部屋情報取得
	        var jinroData = {};
	        jinroDS.child(ROOM).get(function(data){
	            jinroData = data;
	        });

	        $scope.action = function(){
	            $scope.actionBtn = 1;
	            $scope.partner = storage.get('partner');

	            if($scope.type === 'wizard' || $scope.type === 'thief'){
	                var action = jinroData.action;
	                var tmp = [];
	                for(var i = 0, len = action.length; i < len; i++){
	                    tmp[i] = action[i].split(":");
	                }
	                $scope.friends = tmp;
	            }
	        };

	        //人狼と狂人
	        if($scope.type === 'wolf' || $scope.type === 'crazy') {
	            UserModel.getPlayer(ROOM, function (data) {
	                $scope.friends = data;
	                console.log("aaa", data);
	                var target = '';

	                if ($scope.type == 'wolf') {
	                    for (var i = 0, len = data.length; i < len; i++) {
	                        if (data[i].match(/crazy/)) {
	                            target = data[i];
	                        }
	                    }
	                } else if ($scope.type == 'crazy') {
	                    for (var i = 0, len = data.length; i < len; i++) {
	                        if (data[i].match(/wolf/)) {
	                            target = data[i];
	                        }
	                    }
	                }

	                storage.set('partner', parse(target));
	            });
	        }
	        //怪盗
	        else if($scope.type === 'thief'){

	        }
	        //魔法使い
	        else if($scope.type === 'wizard'){
	            console.log(jinroData);

	            $scope.friends = jinroData.action;
	        }
	        //一般人
	        else if($scope.type === 'general'){

	        }

	        //
	        $scope.getRole = function(index){
	            console.log($scope.friends[index]);
	            var role = $scope.friends[index][0];
	            var name = jinroData.role[role].name;
	            var user = $scope.friends[index][1];

	            console.log(name);
	            if($scope.type === 'wizard') {
	                $scope.message = user + "さんは" + name + "です";
	            }else{
	                $scope.message = user + "さんは" + name + "です。" + user + 'さんの' + name + 'と怪盗を交換しました。';
	                jinroDS.set(ROOM, {after:change(jinroData, role)});
	            }
	        };

	    }
	]);

	//役職パーサー
	function parse(item){
	    var tmp = item.split(':');
	    return tmp[1];
	}

	//役職交代
	function change(jinroData, role){
	    console.log("でーた",jinroData);
	    var action = jinroData.action;
	    var after = [];
	    var tmp = [];
	    var thief = "", target = "";

	    for(var i = 0, len = action.length; i < len; i++){
	        tmp[i] = action[i].split(":");
	        if(tmp[i][0] === 'thief')thief = tmp[i]; //自分
	        if(tmp[i][0] === role)target = tmp[i]; //交換対称
	    }
	    for(var i = 0, len = action.length; i < len; i++){
	        tmp[i] = action[i].split(":");
	        if(tmp[i][0] === 'thief'){
	            after[i] = target[0]+":"+thief[1];
	        }else if(tmp[i][0] === role){
	            after[i] = thief[0]+":"+target[1];
	        }else{
	            after[i] = action[i];
	        }
	    }

	    return after;
	}

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(13);

	angular.module('controllers').controller('RoleCtrl', [
	    '$scope',
	    'UserModel',
	    'LocalModel',
	    'storage',

	    function ($scope, UserModel, LocalModel, storage) {
	        var ROOM = 'ligroom1';
	        $scope.userName = storage.get('jinroUser');
	        //部屋情報取得
	        var jinroData = {};
	        jinroDS.child(ROOM).get(function(data){
	            jinroData = data;
	        });

	        $scope.getRole = function(){
	            var role = jinroData.current.shift();
	            var action = role+':'+$scope.userName;
	            var member = jinroData.action;
	            member.push(action);

	            console.log("役", role);
	            console.log("れじすと", action, member.length);
	            console.log("もと", jinroData.current);

	            if(member.length === 5){
	                //全員
	            }

	            jinroDS.set(ROOM, {current:jinroData.current, action:member});
	            storage.set("jinroRole", jinroData.role[role]);

	            $scope.role = jinroData.role[role].name;
	            $scope.ex = jinroData.role[role].ex;

	        };

	    }
	]);

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	angular.module('controllers').controller('SigninCtrl', ['$scope', function ($scope) {
	    $scope.auth = function(){

	        alert();
	    }
	}]);

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	angular.module('services').factory('EventModel', [
	    '$resource',

	    function ($resource) {
	        var portals = $resource('js/testdata/event.json' ,{
	            id: '@id'
	        }, {
	            'save': {
	                method: 'POST'
	            },
	            'get': {
	                method: 'GET',
	                cache: true
	            },
	            'query': {
	                method: 'GET',
	                cache: true,
	                isArray: true
	            },
	            'update': {
	                method: 'PUT',
	                isArray: false
	            }
	        });
	        return portals;
	    }
	]);

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	angular.module('services').factory('LocalModel', [
	    'storage',

	    function (storage) {
	        var portals = {
	            //init: function(){
	            //    storage.bind($scope, 'varName', {
	            //        defaultValue: 'n0bisuke',
	            //        storeName: 'userName'
	            //    });
	            //},

	            set: function(key, val){
	                storage.set(key,val);
	            },

	            get: function(key){
	                return storage.get(key);
	            },

	            huga: function(){
	                console.log("ほげほげ");
	            }
	        };

	        return portals;
	    }
	]);

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	angular.module('services').factory('UserModel', [
	    'storage',
	    'MilkModel',

	    function (storage, MilkModel) {
	        var portals = {

	            //部屋があるかどうか確認する
	            ping: function(room_name){
	                jinroDataStore.child(room_name).get(getdata);
	                function getdata(data){
	                    if (!data) {
	                        console.log("へやなし");
	                        return false;
	                    } else {
	                        console.log(data);
	                        return true;
	                    }
	                }

	            },
	            addUser: function(){

	                var roomRef = new Firebase('https://ngjinro.firebaseio.com/room1');

	                var hoge = [1];
	                roomRef.set({users: hoge});


	                console.log("usr",roomRef);

	            },
	            //配役
	            role: function(room_name, cb){
	                MilkModel.get(room_name, function(data){
	                    var init_data = data;
	                    var role = init_data.current.shift();

	                    console.log(role, init_data.current);
	                    cb(role, init_data);

	                });
	                //jinroDataStore.child(room_name).get(function(data){
	                //    var rnd = Math.floor(Math.random() * data.current.length);
	                //    var current_role = data.current[rnd];
	                //    var result = {
	                //        name: data.role[current_role].name,
	                //        ex: data.role[current_role].ex,
	                //        role: current_role,
	                //        main: data
	                //    };
	                //
	                //    cb(result);
	                //});
	            },

	            //サーバー上の配役管理
	            roleUp: function(room_name, data){
	                MilkModel.set(room_name, data); //状態を保存
	                storage('jinro_all', data); //ローカル保存
	            },


	            //部屋削除
	            remove: function(room_name){
	                jinroDataStore.remove(room_name);
	            },

	            //役職
	            roleUpdate: function(room_name, jinro){
	                var current = jinro.main.current;
	                var role = jinro.role;

	                //配列から削除
	                for(var i = 0, len = current.length; i < len; i++){
	                    if(current[i] == role){
	                        current.splice(i, 1);
	                        break;
	                    }
	                }

	                //usersとcurrentを更新
	                jinroDataStore.child(room_name).get(function(data){
	                    var users = data.users;
	                    users.push(role+':'+jinro.userName);
	                    jinroDataStore.set(room_name, {current: current, users: users});
	                    jinroDataStore.send({new_user: jinro.userName});
	                });

	            },

	            //参加者情報
	            getPlayer: function(room_name, cb){
	                jinroDS.child(room_name).get(function(data){
	                    cb(data.action);
	                });
	            },

	            getPlayerName: function(room_name, cb){
	                jinroDataStore.child(room_name).get(function(data){
	                    cb(data.users);
	                });
	            },

	            set: function(room_name){
	                jinroDataStore.send({message : "from angular"},function(data){
	                    console.log("送信完了!");
	                });
	            },
	            huga: function(){
	                console.log("ほげほげ");
	            }
	        };

	        return portals;
	    }
	]);

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	angular.module('services').factory('RoomModel', [
	    'storage',

	    function (storage) {
	        return {
	            //部屋の初期化
	            init: function(room_name, num){
	                var casting = [];
	                var mes = '';

	                if(num === 1){//人数
	                    casting = ['general', 'wizard', 'thief', 'crazy', 'wolf'];
	                    mes = "役職は村人,怪盗,占い師,人狼,狂人です。";
	                }else if(num === 3){
	                    casting = ['general', 'thief', 'wolf'];
	                    mes = "役職は村人,占い師,人狼です。";
	                }else if(num === 4){
	                    casting = ['wizard', 'thief', 'crazy', 'wolf'];
	                    mes = "役職は怪盗,占い師,人狼,狂人です。";
	                }else if(num === 5){
	                    casting = ['general', 'wizard', 'thief', 'crazy', 'wolf'];
	                    mes = "役職は村人,怪盗,占い師,人狼,狂人です。";
	                }else if(num === 6){
	                    casting = ['general', 'general', 'wizard', 'thief', 'crazy', 'wolf'];
	                    mes = "役職は村人(2),怪盗,占い師,人狼,狂人です。";
	                }else if(num === 7){
	                    casting = ['general', 'general', 'wizard', 'thief', 'crazy', 'wolf', 'fox'];
	                    mes = "役職は村人(2),怪盗,占い師,人狼,狂人,妖狐です。";
	                }else if(num === 8){
	                    casting = ['general', 'general', 'general', 'wizard', 'thief', 'crazy', 'wolf', 'fox'];
	                    mes = "役職は村人(3),怪盗,占い師,人狼,狂人,妖狐です。";
	                }

	                var init_data = __webpack_require__(26)(room_name, casting, mes);
	                shuffle(init_data.current); //シャッフル
	                jinroDS.set(room_name, init_data);

	                return mes;
	            },

	            set: function(){

	            },

	            getAll: function(){
	                //jinroDataStore.child({}).get(function(data){
	                //    return data;
	                //});
	            }
	        };

	    }
	]);

	//配列のシャッフル
	function shuffle(a){
	    var n = a.length;
	    for(var i = n - 1; i > 0; i--) {
	        var j = Math.floor(Math.random() * (i + 1));
	        var tmp = a[i];
	        a[i] = a[j];
	        a[j] = tmp;
	    }

	    return a;
	}

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	angular.module('services').factory('MilkModel', [
	    'storage',

	    function (storage) {

	        return {
	            set: function(id, data){
	                jinroDS.set(id,data);
	            },

	            get: function(id, cb){
	                jinroDS.child(id).get(function(data, cb){
	                    cb(data);
	                });
	            },

	            getAll: function(cb){
	                jinroDS.child({}).get(function(data){
	                    cb(data);
	                });
	            }

	        };

	    }
	]);

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	angular.module('directives').directive('navBtn', function() {
	    return {
	        template: __webpack_require__(27)
	    };
	});

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	angular.module('directives').directive('navBtn2', function() {
	    return {
	        template: __webpack_require__(28)
	    };
	});

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = "<div ng-controller=\"MainCtrl\">\n\n    <toaster-container toaster-options=\"{'position-class': 'toast-top-full-width'}\"></toaster-container>\n\n    <div ng-hide=\"init\">\n        <label>プレイヤー名を入力してください。</label>\n        <input type=\"text\" placeholder=\"例:のびすけ\" ng-model=\"userName\" required />\n    </div>\n\n    <!--ユーザー名入力後-->\n    <div class=\"callout panel\" ng-if=\"userName != null\" ng-hide=\"init\">\n        <p>ユーザー名は{{userName}}でよろしいですか?</p>\n        <button ng-click=\"userInit()\">確定</button>\n    </div>\n\n    <div class=\"large-12 columns\" ng-show=\"init\">\n        <p>あなたのユーザー名は<strong>{{userName}}</strong>です。</p>\n\n        <div class=\"callout panel\">\n            <p>参加者が{{num}}人になったら開始します。</p>\n            <p>現在の参加者は<strong>{{friends.length}}</strong>名です。</p>\n            <p class=\"secondary round label\" ng-repeat=\"friend in friends\" >{{friend}}</p>\n        </div>\n\n        <a href=\"#/role\" class=\"laerge success button\" ng-show=\"enter\">入室</a>\n    </div>\n\n    <!--<div class=\"large-6 medium-6 small-6 columns\" ng-show=\"init\">-->\n        <!--<button ng-click=\"userCheck()\">ユーザー確認</button>-->\n    <!--</div>-->\n\n    <!--<div class=\"large-6 medium-6 small-6 columns\">-->\n    <!--<select>-->\n    <!--<option value=\"husker\" ng-repeat=\"room in rooms\">{{room}}</option>-->\n    <!--</select>-->\n    <!--</div>-->\n\n    <div class=\"large-12 columns\" ng-hide=\"init\">\n\n        <!--<div>-->\n            <!--<label for=\"room\">部屋を作成する場合は部屋名を入力してください。</label>-->\n            <!--<input type=\"text\" id=\"room\" placeholder=\"例:のびすけRoom\" ng-model=\"roomName\" required>-->\n        <!--</div>-->\n\n        <!--<button class=\"laerge round button\" ng-show=\"roomName\">-->\n            <!--部屋作成-->\n        <!--</button>-->\n\n        <div class=\"panel\">\n            <h3>{{num}}人ゲームです。</h3>\n            <p>{{roomEx}}</p>\n\n            <div class=\"row\">\n                <div class=\"large-4 medium-4 columns\">\n                    <p>by <a href=\"http://qiita.com/n0bisuke\">@n0bisuke </a></p>\n                </div>\n            </div>\n\n        </div>\n\n        <hr/>\n\n        人数\n\n        <div ng-init=\"hoge = [3,4,5,6,7,8]\"></div>\n        <select ng-model=\"num\" ng-options=\"c for c in hoge\">\n        </select><br/>\n\n        <button class=\"laerge alert button\" ng-click=\"roomInit()\">初期化</button>\n\n    </div>\n\n</div>";

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = "<div class=\"large-12 columns\" ng-controller=\"PlayerCtrl\">\n\n    <div ng-hide=\"init\">\n        <label>プレイヤー名を入力してください。</label>\n        <input type=\"text\" placeholder=\"例:のびすけ\" ng-model=\"userName\" required>\n    </div>\n\n    <!--ユーザー名入力後-->\n    <div class=\"callout panel\" ng-show=\"userName\">\n        <p>ユーザー名は{{userName}}になります。</p>\n        <button ng-click=\"userInit()\" ng-hide=\"init\">確定</button>\n    </div>\n\n    <ul>\n        <li ng-repeat=\"friend in member\">{{friend}}</li>\n    </ul>\n\n</div>";

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = "<div class=\"large-12 columns\" ng-controller=\"RoleCtrl\">\n\n    <!--ユーザー名入力後-->\n    <div class=\"callout panel\">\n        <p>{{userName}}さんの役職は...\n            <strong>{{role}}</strong>\n            です。\n        </p>\n    </div>\n\n    <div ng-hide=\"role\">\n        <button class=\"laerge round button\" ng-click=\"getRole()\" ng-show=\"userName\">\n            役職を決める\n        </button>\n    </div>\n\n    <!--配役後-->\n    <div class=\"panel\" ng-show=\"role\">\n        <h3>役職解説</h3>\n        <p>{{ex}}</p>\n    </div>\n\n    <a href=\"#/ready\" class=\"laerge round button\" ng-show=\"role\">\n        ゲームを始める\n    </a>\n\n    <!--<div ng-init=\"friends = ['まろ','のび','りょうちん']\">-->\n    <!--<span class=\"label\" ng-repeat=\"friend in friends\">-->\n        <!--{{friend}}-->\n    <!--</span>-->\n\n</div>\n\n";

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = "<div class=\"large-12 columns\" ng-controller=\"ReadyCtrl\">\n\n    <!--<div ng-hide=\"ready\">-->\n        <!--ほげほげ-->\n    <!--</div>-->\n\n    <div>\n\n        <div class=\"callout panel\">\n            <p>夜が来ました。役職にあったアクションをしてください。</p>\n        </div>\n\n        <div class=\"panel\">\n            <h3>役職解説: <strong>{{role}}</strong>{{userName}}</h3>\n            <p>{{ex}}</p>\n        </div>\n\n        <div ng-show=\"actionBtn\">\n\n            <div ng-if=\"type === 'thief'\">\n                交換する相手を選んでください。\n                <button class=\"laerge round button\" ng-repeat=\"friend in friends\" ng-click=\"getRole($index)\" ng-hide=\"message\">\n                    {{friend[1]}}\n                </button>\n                <hr/>\n                <p>{{message}}</p>\n            </div>\n\n            <div ng-if=\"type === 'general'\">特にアクションはありません。</div>\n\n            <div ng-if=\"type === 'wizard'\">\n                見る相手を選んでください。\n                <button class=\"laerge round button\" ng-repeat=\"friend in friends\" ng-click=\"getRole($index)\" ng-hide=\"message\">\n                    {{friend[1]}}\n                </button>\n                <hr/>\n                <p>{{message}}</p>\n            </div>\n\n            <div ng-if=\"type === 'crazy'\">\n                人狼は{{partner}}さんです。\n            </div>\n\n            <div ng-if=\"type === 'wolf'\">\n                <p ng-if=\"partner !== undefined\">狂人は{{partner}}さんです。</p>\n                <p ng-if=\"partner === false\">このゲームでは狂人はいません。</p>\n            </div>\n\n        </div>\n\n        <br/>\n\n        <button class=\"laerge success button\" ng-hide=\"actionBtn\" ng-click=\"action()\">\n            アクションを起こす。\n        </button>\n\n        <a href=\"#/finish\" class=\"laerge alert button\" ng-if=\"actionBtn === 1\">\n            アクションを完了する。\n        </a>\n\n    </div>\n\n</div>\n\n";

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = "";

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = "<div class=\"large-12 columns\" ng-controller=\"FinishCtrl\">\n    <button ng-click=\"finish()\">答えあわせ</button>\n\n    <ul ng-show=\"open\">\n        <li ng-repeat=\"friend in friends\" >{{friend.name}} : {{friend.role}}</li>\n    </ul>\n\n    <a href=\"#/\" class=\"laerge success button\" ng-show=\"open\">topにもどる</a>\n\n</div>";

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = "<div ng-controller=\"SigninCtrl\">\n    <input type=\"text\"/>\n    <button ng-click=\"auth()\">そうしんsss</button>\n    ほげほげほげ<br />\n    あああああああ<br />\n    ほげほげ<br />\n    ほげほげ\n</div>";

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;//     Underscore.js 1.7.0
	//     http://underscorejs.org
	//     (c) 2009-2014 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	//     Underscore may be freely distributed under the MIT license.

	(function() {

	  // Baseline setup
	  // --------------

	  // Establish the root object, `window` in the browser, or `exports` on the server.
	  var root = this;

	  // Save the previous value of the `_` variable.
	  var previousUnderscore = root._;

	  // Save bytes in the minified (but not gzipped) version:
	  var ArrayProto = Array.prototype, ObjProto = Object.prototype, FuncProto = Function.prototype;

	  // Create quick reference variables for speed access to core prototypes.
	  var
	    push             = ArrayProto.push,
	    slice            = ArrayProto.slice,
	    concat           = ArrayProto.concat,
	    toString         = ObjProto.toString,
	    hasOwnProperty   = ObjProto.hasOwnProperty;

	  // All **ECMAScript 5** native function implementations that we hope to use
	  // are declared here.
	  var
	    nativeIsArray      = Array.isArray,
	    nativeKeys         = Object.keys,
	    nativeBind         = FuncProto.bind;

	  // Create a safe reference to the Underscore object for use below.
	  var _ = function(obj) {
	    if (obj instanceof _) return obj;
	    if (!(this instanceof _)) return new _(obj);
	    this._wrapped = obj;
	  };

	  // Export the Underscore object for **Node.js**, with
	  // backwards-compatibility for the old `require()` API. If we're in
	  // the browser, add `_` as a global object.
	  if (true) {
	    if (typeof module !== 'undefined' && module.exports) {
	      exports = module.exports = _;
	    }
	    exports._ = _;
	  } else {
	    root._ = _;
	  }

	  // Current version.
	  _.VERSION = '1.7.0';

	  // Internal function that returns an efficient (for current engines) version
	  // of the passed-in callback, to be repeatedly applied in other Underscore
	  // functions.
	  var createCallback = function(func, context, argCount) {
	    if (context === void 0) return func;
	    switch (argCount == null ? 3 : argCount) {
	      case 1: return function(value) {
	        return func.call(context, value);
	      };
	      case 2: return function(value, other) {
	        return func.call(context, value, other);
	      };
	      case 3: return function(value, index, collection) {
	        return func.call(context, value, index, collection);
	      };
	      case 4: return function(accumulator, value, index, collection) {
	        return func.call(context, accumulator, value, index, collection);
	      };
	    }
	    return function() {
	      return func.apply(context, arguments);
	    };
	  };

	  // A mostly-internal function to generate callbacks that can be applied
	  // to each element in a collection, returning the desired result — either
	  // identity, an arbitrary callback, a property matcher, or a property accessor.
	  _.iteratee = function(value, context, argCount) {
	    if (value == null) return _.identity;
	    if (_.isFunction(value)) return createCallback(value, context, argCount);
	    if (_.isObject(value)) return _.matches(value);
	    return _.property(value);
	  };

	  // Collection Functions
	  // --------------------

	  // The cornerstone, an `each` implementation, aka `forEach`.
	  // Handles raw objects in addition to array-likes. Treats all
	  // sparse array-likes as if they were dense.
	  _.each = _.forEach = function(obj, iteratee, context) {
	    if (obj == null) return obj;
	    iteratee = createCallback(iteratee, context);
	    var i, length = obj.length;
	    if (length === +length) {
	      for (i = 0; i < length; i++) {
	        iteratee(obj[i], i, obj);
	      }
	    } else {
	      var keys = _.keys(obj);
	      for (i = 0, length = keys.length; i < length; i++) {
	        iteratee(obj[keys[i]], keys[i], obj);
	      }
	    }
	    return obj;
	  };

	  // Return the results of applying the iteratee to each element.
	  _.map = _.collect = function(obj, iteratee, context) {
	    if (obj == null) return [];
	    iteratee = _.iteratee(iteratee, context);
	    var keys = obj.length !== +obj.length && _.keys(obj),
	        length = (keys || obj).length,
	        results = Array(length),
	        currentKey;
	    for (var index = 0; index < length; index++) {
	      currentKey = keys ? keys[index] : index;
	      results[index] = iteratee(obj[currentKey], currentKey, obj);
	    }
	    return results;
	  };

	  var reduceError = 'Reduce of empty array with no initial value';

	  // **Reduce** builds up a single result from a list of values, aka `inject`,
	  // or `foldl`.
	  _.reduce = _.foldl = _.inject = function(obj, iteratee, memo, context) {
	    if (obj == null) obj = [];
	    iteratee = createCallback(iteratee, context, 4);
	    var keys = obj.length !== +obj.length && _.keys(obj),
	        length = (keys || obj).length,
	        index = 0, currentKey;
	    if (arguments.length < 3) {
	      if (!length) throw new TypeError(reduceError);
	      memo = obj[keys ? keys[index++] : index++];
	    }
	    for (; index < length; index++) {
	      currentKey = keys ? keys[index] : index;
	      memo = iteratee(memo, obj[currentKey], currentKey, obj);
	    }
	    return memo;
	  };

	  // The right-associative version of reduce, also known as `foldr`.
	  _.reduceRight = _.foldr = function(obj, iteratee, memo, context) {
	    if (obj == null) obj = [];
	    iteratee = createCallback(iteratee, context, 4);
	    var keys = obj.length !== + obj.length && _.keys(obj),
	        index = (keys || obj).length,
	        currentKey;
	    if (arguments.length < 3) {
	      if (!index) throw new TypeError(reduceError);
	      memo = obj[keys ? keys[--index] : --index];
	    }
	    while (index--) {
	      currentKey = keys ? keys[index] : index;
	      memo = iteratee(memo, obj[currentKey], currentKey, obj);
	    }
	    return memo;
	  };

	  // Return the first value which passes a truth test. Aliased as `detect`.
	  _.find = _.detect = function(obj, predicate, context) {
	    var result;
	    predicate = _.iteratee(predicate, context);
	    _.some(obj, function(value, index, list) {
	      if (predicate(value, index, list)) {
	        result = value;
	        return true;
	      }
	    });
	    return result;
	  };

	  // Return all the elements that pass a truth test.
	  // Aliased as `select`.
	  _.filter = _.select = function(obj, predicate, context) {
	    var results = [];
	    if (obj == null) return results;
	    predicate = _.iteratee(predicate, context);
	    _.each(obj, function(value, index, list) {
	      if (predicate(value, index, list)) results.push(value);
	    });
	    return results;
	  };

	  // Return all the elements for which a truth test fails.
	  _.reject = function(obj, predicate, context) {
	    return _.filter(obj, _.negate(_.iteratee(predicate)), context);
	  };

	  // Determine whether all of the elements match a truth test.
	  // Aliased as `all`.
	  _.every = _.all = function(obj, predicate, context) {
	    if (obj == null) return true;
	    predicate = _.iteratee(predicate, context);
	    var keys = obj.length !== +obj.length && _.keys(obj),
	        length = (keys || obj).length,
	        index, currentKey;
	    for (index = 0; index < length; index++) {
	      currentKey = keys ? keys[index] : index;
	      if (!predicate(obj[currentKey], currentKey, obj)) return false;
	    }
	    return true;
	  };

	  // Determine if at least one element in the object matches a truth test.
	  // Aliased as `any`.
	  _.some = _.any = function(obj, predicate, context) {
	    if (obj == null) return false;
	    predicate = _.iteratee(predicate, context);
	    var keys = obj.length !== +obj.length && _.keys(obj),
	        length = (keys || obj).length,
	        index, currentKey;
	    for (index = 0; index < length; index++) {
	      currentKey = keys ? keys[index] : index;
	      if (predicate(obj[currentKey], currentKey, obj)) return true;
	    }
	    return false;
	  };

	  // Determine if the array or object contains a given value (using `===`).
	  // Aliased as `include`.
	  _.contains = _.include = function(obj, target) {
	    if (obj == null) return false;
	    if (obj.length !== +obj.length) obj = _.values(obj);
	    return _.indexOf(obj, target) >= 0;
	  };

	  // Invoke a method (with arguments) on every item in a collection.
	  _.invoke = function(obj, method) {
	    var args = slice.call(arguments, 2);
	    var isFunc = _.isFunction(method);
	    return _.map(obj, function(value) {
	      return (isFunc ? method : value[method]).apply(value, args);
	    });
	  };

	  // Convenience version of a common use case of `map`: fetching a property.
	  _.pluck = function(obj, key) {
	    return _.map(obj, _.property(key));
	  };

	  // Convenience version of a common use case of `filter`: selecting only objects
	  // containing specific `key:value` pairs.
	  _.where = function(obj, attrs) {
	    return _.filter(obj, _.matches(attrs));
	  };

	  // Convenience version of a common use case of `find`: getting the first object
	  // containing specific `key:value` pairs.
	  _.findWhere = function(obj, attrs) {
	    return _.find(obj, _.matches(attrs));
	  };

	  // Return the maximum element (or element-based computation).
	  _.max = function(obj, iteratee, context) {
	    var result = -Infinity, lastComputed = -Infinity,
	        value, computed;
	    if (iteratee == null && obj != null) {
	      obj = obj.length === +obj.length ? obj : _.values(obj);
	      for (var i = 0, length = obj.length; i < length; i++) {
	        value = obj[i];
	        if (value > result) {
	          result = value;
	        }
	      }
	    } else {
	      iteratee = _.iteratee(iteratee, context);
	      _.each(obj, function(value, index, list) {
	        computed = iteratee(value, index, list);
	        if (computed > lastComputed || computed === -Infinity && result === -Infinity) {
	          result = value;
	          lastComputed = computed;
	        }
	      });
	    }
	    return result;
	  };

	  // Return the minimum element (or element-based computation).
	  _.min = function(obj, iteratee, context) {
	    var result = Infinity, lastComputed = Infinity,
	        value, computed;
	    if (iteratee == null && obj != null) {
	      obj = obj.length === +obj.length ? obj : _.values(obj);
	      for (var i = 0, length = obj.length; i < length; i++) {
	        value = obj[i];
	        if (value < result) {
	          result = value;
	        }
	      }
	    } else {
	      iteratee = _.iteratee(iteratee, context);
	      _.each(obj, function(value, index, list) {
	        computed = iteratee(value, index, list);
	        if (computed < lastComputed || computed === Infinity && result === Infinity) {
	          result = value;
	          lastComputed = computed;
	        }
	      });
	    }
	    return result;
	  };

	  // Shuffle a collection, using the modern version of the
	  // [Fisher-Yates shuffle](http://en.wikipedia.org/wiki/Fisher–Yates_shuffle).
	  _.shuffle = function(obj) {
	    var set = obj && obj.length === +obj.length ? obj : _.values(obj);
	    var length = set.length;
	    var shuffled = Array(length);
	    for (var index = 0, rand; index < length; index++) {
	      rand = _.random(0, index);
	      if (rand !== index) shuffled[index] = shuffled[rand];
	      shuffled[rand] = set[index];
	    }
	    return shuffled;
	  };

	  // Sample **n** random values from a collection.
	  // If **n** is not specified, returns a single random element.
	  // The internal `guard` argument allows it to work with `map`.
	  _.sample = function(obj, n, guard) {
	    if (n == null || guard) {
	      if (obj.length !== +obj.length) obj = _.values(obj);
	      return obj[_.random(obj.length - 1)];
	    }
	    return _.shuffle(obj).slice(0, Math.max(0, n));
	  };

	  // Sort the object's values by a criterion produced by an iteratee.
	  _.sortBy = function(obj, iteratee, context) {
	    iteratee = _.iteratee(iteratee, context);
	    return _.pluck(_.map(obj, function(value, index, list) {
	      return {
	        value: value,
	        index: index,
	        criteria: iteratee(value, index, list)
	      };
	    }).sort(function(left, right) {
	      var a = left.criteria;
	      var b = right.criteria;
	      if (a !== b) {
	        if (a > b || a === void 0) return 1;
	        if (a < b || b === void 0) return -1;
	      }
	      return left.index - right.index;
	    }), 'value');
	  };

	  // An internal function used for aggregate "group by" operations.
	  var group = function(behavior) {
	    return function(obj, iteratee, context) {
	      var result = {};
	      iteratee = _.iteratee(iteratee, context);
	      _.each(obj, function(value, index) {
	        var key = iteratee(value, index, obj);
	        behavior(result, value, key);
	      });
	      return result;
	    };
	  };

	  // Groups the object's values by a criterion. Pass either a string attribute
	  // to group by, or a function that returns the criterion.
	  _.groupBy = group(function(result, value, key) {
	    if (_.has(result, key)) result[key].push(value); else result[key] = [value];
	  });

	  // Indexes the object's values by a criterion, similar to `groupBy`, but for
	  // when you know that your index values will be unique.
	  _.indexBy = group(function(result, value, key) {
	    result[key] = value;
	  });

	  // Counts instances of an object that group by a certain criterion. Pass
	  // either a string attribute to count by, or a function that returns the
	  // criterion.
	  _.countBy = group(function(result, value, key) {
	    if (_.has(result, key)) result[key]++; else result[key] = 1;
	  });

	  // Use a comparator function to figure out the smallest index at which
	  // an object should be inserted so as to maintain order. Uses binary search.
	  _.sortedIndex = function(array, obj, iteratee, context) {
	    iteratee = _.iteratee(iteratee, context, 1);
	    var value = iteratee(obj);
	    var low = 0, high = array.length;
	    while (low < high) {
	      var mid = low + high >>> 1;
	      if (iteratee(array[mid]) < value) low = mid + 1; else high = mid;
	    }
	    return low;
	  };

	  // Safely create a real, live array from anything iterable.
	  _.toArray = function(obj) {
	    if (!obj) return [];
	    if (_.isArray(obj)) return slice.call(obj);
	    if (obj.length === +obj.length) return _.map(obj, _.identity);
	    return _.values(obj);
	  };

	  // Return the number of elements in an object.
	  _.size = function(obj) {
	    if (obj == null) return 0;
	    return obj.length === +obj.length ? obj.length : _.keys(obj).length;
	  };

	  // Split a collection into two arrays: one whose elements all satisfy the given
	  // predicate, and one whose elements all do not satisfy the predicate.
	  _.partition = function(obj, predicate, context) {
	    predicate = _.iteratee(predicate, context);
	    var pass = [], fail = [];
	    _.each(obj, function(value, key, obj) {
	      (predicate(value, key, obj) ? pass : fail).push(value);
	    });
	    return [pass, fail];
	  };

	  // Array Functions
	  // ---------------

	  // Get the first element of an array. Passing **n** will return the first N
	  // values in the array. Aliased as `head` and `take`. The **guard** check
	  // allows it to work with `_.map`.
	  _.first = _.head = _.take = function(array, n, guard) {
	    if (array == null) return void 0;
	    if (n == null || guard) return array[0];
	    if (n < 0) return [];
	    return slice.call(array, 0, n);
	  };

	  // Returns everything but the last entry of the array. Especially useful on
	  // the arguments object. Passing **n** will return all the values in
	  // the array, excluding the last N. The **guard** check allows it to work with
	  // `_.map`.
	  _.initial = function(array, n, guard) {
	    return slice.call(array, 0, Math.max(0, array.length - (n == null || guard ? 1 : n)));
	  };

	  // Get the last element of an array. Passing **n** will return the last N
	  // values in the array. The **guard** check allows it to work with `_.map`.
	  _.last = function(array, n, guard) {
	    if (array == null) return void 0;
	    if (n == null || guard) return array[array.length - 1];
	    return slice.call(array, Math.max(array.length - n, 0));
	  };

	  // Returns everything but the first entry of the array. Aliased as `tail` and `drop`.
	  // Especially useful on the arguments object. Passing an **n** will return
	  // the rest N values in the array. The **guard**
	  // check allows it to work with `_.map`.
	  _.rest = _.tail = _.drop = function(array, n, guard) {
	    return slice.call(array, n == null || guard ? 1 : n);
	  };

	  // Trim out all falsy values from an array.
	  _.compact = function(array) {
	    return _.filter(array, _.identity);
	  };

	  // Internal implementation of a recursive `flatten` function.
	  var flatten = function(input, shallow, strict, output) {
	    if (shallow && _.every(input, _.isArray)) {
	      return concat.apply(output, input);
	    }
	    for (var i = 0, length = input.length; i < length; i++) {
	      var value = input[i];
	      if (!_.isArray(value) && !_.isArguments(value)) {
	        if (!strict) output.push(value);
	      } else if (shallow) {
	        push.apply(output, value);
	      } else {
	        flatten(value, shallow, strict, output);
	      }
	    }
	    return output;
	  };

	  // Flatten out an array, either recursively (by default), or just one level.
	  _.flatten = function(array, shallow) {
	    return flatten(array, shallow, false, []);
	  };

	  // Return a version of the array that does not contain the specified value(s).
	  _.without = function(array) {
	    return _.difference(array, slice.call(arguments, 1));
	  };

	  // Produce a duplicate-free version of the array. If the array has already
	  // been sorted, you have the option of using a faster algorithm.
	  // Aliased as `unique`.
	  _.uniq = _.unique = function(array, isSorted, iteratee, context) {
	    if (array == null) return [];
	    if (!_.isBoolean(isSorted)) {
	      context = iteratee;
	      iteratee = isSorted;
	      isSorted = false;
	    }
	    if (iteratee != null) iteratee = _.iteratee(iteratee, context);
	    var result = [];
	    var seen = [];
	    for (var i = 0, length = array.length; i < length; i++) {
	      var value = array[i];
	      if (isSorted) {
	        if (!i || seen !== value) result.push(value);
	        seen = value;
	      } else if (iteratee) {
	        var computed = iteratee(value, i, array);
	        if (_.indexOf(seen, computed) < 0) {
	          seen.push(computed);
	          result.push(value);
	        }
	      } else if (_.indexOf(result, value) < 0) {
	        result.push(value);
	      }
	    }
	    return result;
	  };

	  // Produce an array that contains the union: each distinct element from all of
	  // the passed-in arrays.
	  _.union = function() {
	    return _.uniq(flatten(arguments, true, true, []));
	  };

	  // Produce an array that contains every item shared between all the
	  // passed-in arrays.
	  _.intersection = function(array) {
	    if (array == null) return [];
	    var result = [];
	    var argsLength = arguments.length;
	    for (var i = 0, length = array.length; i < length; i++) {
	      var item = array[i];
	      if (_.contains(result, item)) continue;
	      for (var j = 1; j < argsLength; j++) {
	        if (!_.contains(arguments[j], item)) break;
	      }
	      if (j === argsLength) result.push(item);
	    }
	    return result;
	  };

	  // Take the difference between one array and a number of other arrays.
	  // Only the elements present in just the first array will remain.
	  _.difference = function(array) {
	    var rest = flatten(slice.call(arguments, 1), true, true, []);
	    return _.filter(array, function(value){
	      return !_.contains(rest, value);
	    });
	  };

	  // Zip together multiple lists into a single array -- elements that share
	  // an index go together.
	  _.zip = function(array) {
	    if (array == null) return [];
	    var length = _.max(arguments, 'length').length;
	    var results = Array(length);
	    for (var i = 0; i < length; i++) {
	      results[i] = _.pluck(arguments, i);
	    }
	    return results;
	  };

	  // Converts lists into objects. Pass either a single array of `[key, value]`
	  // pairs, or two parallel arrays of the same length -- one of keys, and one of
	  // the corresponding values.
	  _.object = function(list, values) {
	    if (list == null) return {};
	    var result = {};
	    for (var i = 0, length = list.length; i < length; i++) {
	      if (values) {
	        result[list[i]] = values[i];
	      } else {
	        result[list[i][0]] = list[i][1];
	      }
	    }
	    return result;
	  };

	  // Return the position of the first occurrence of an item in an array,
	  // or -1 if the item is not included in the array.
	  // If the array is large and already in sort order, pass `true`
	  // for **isSorted** to use binary search.
	  _.indexOf = function(array, item, isSorted) {
	    if (array == null) return -1;
	    var i = 0, length = array.length;
	    if (isSorted) {
	      if (typeof isSorted == 'number') {
	        i = isSorted < 0 ? Math.max(0, length + isSorted) : isSorted;
	      } else {
	        i = _.sortedIndex(array, item);
	        return array[i] === item ? i : -1;
	      }
	    }
	    for (; i < length; i++) if (array[i] === item) return i;
	    return -1;
	  };

	  _.lastIndexOf = function(array, item, from) {
	    if (array == null) return -1;
	    var idx = array.length;
	    if (typeof from == 'number') {
	      idx = from < 0 ? idx + from + 1 : Math.min(idx, from + 1);
	    }
	    while (--idx >= 0) if (array[idx] === item) return idx;
	    return -1;
	  };

	  // Generate an integer Array containing an arithmetic progression. A port of
	  // the native Python `range()` function. See
	  // [the Python documentation](http://docs.python.org/library/functions.html#range).
	  _.range = function(start, stop, step) {
	    if (arguments.length <= 1) {
	      stop = start || 0;
	      start = 0;
	    }
	    step = step || 1;

	    var length = Math.max(Math.ceil((stop - start) / step), 0);
	    var range = Array(length);

	    for (var idx = 0; idx < length; idx++, start += step) {
	      range[idx] = start;
	    }

	    return range;
	  };

	  // Function (ahem) Functions
	  // ------------------

	  // Reusable constructor function for prototype setting.
	  var Ctor = function(){};

	  // Create a function bound to a given object (assigning `this`, and arguments,
	  // optionally). Delegates to **ECMAScript 5**'s native `Function.bind` if
	  // available.
	  _.bind = function(func, context) {
	    var args, bound;
	    if (nativeBind && func.bind === nativeBind) return nativeBind.apply(func, slice.call(arguments, 1));
	    if (!_.isFunction(func)) throw new TypeError('Bind must be called on a function');
	    args = slice.call(arguments, 2);
	    bound = function() {
	      if (!(this instanceof bound)) return func.apply(context, args.concat(slice.call(arguments)));
	      Ctor.prototype = func.prototype;
	      var self = new Ctor;
	      Ctor.prototype = null;
	      var result = func.apply(self, args.concat(slice.call(arguments)));
	      if (_.isObject(result)) return result;
	      return self;
	    };
	    return bound;
	  };

	  // Partially apply a function by creating a version that has had some of its
	  // arguments pre-filled, without changing its dynamic `this` context. _ acts
	  // as a placeholder, allowing any combination of arguments to be pre-filled.
	  _.partial = function(func) {
	    var boundArgs = slice.call(arguments, 1);
	    return function() {
	      var position = 0;
	      var args = boundArgs.slice();
	      for (var i = 0, length = args.length; i < length; i++) {
	        if (args[i] === _) args[i] = arguments[position++];
	      }
	      while (position < arguments.length) args.push(arguments[position++]);
	      return func.apply(this, args);
	    };
	  };

	  // Bind a number of an object's methods to that object. Remaining arguments
	  // are the method names to be bound. Useful for ensuring that all callbacks
	  // defined on an object belong to it.
	  _.bindAll = function(obj) {
	    var i, length = arguments.length, key;
	    if (length <= 1) throw new Error('bindAll must be passed function names');
	    for (i = 1; i < length; i++) {
	      key = arguments[i];
	      obj[key] = _.bind(obj[key], obj);
	    }
	    return obj;
	  };

	  // Memoize an expensive function by storing its results.
	  _.memoize = function(func, hasher) {
	    var memoize = function(key) {
	      var cache = memoize.cache;
	      var address = hasher ? hasher.apply(this, arguments) : key;
	      if (!_.has(cache, address)) cache[address] = func.apply(this, arguments);
	      return cache[address];
	    };
	    memoize.cache = {};
	    return memoize;
	  };

	  // Delays a function for the given number of milliseconds, and then calls
	  // it with the arguments supplied.
	  _.delay = function(func, wait) {
	    var args = slice.call(arguments, 2);
	    return setTimeout(function(){
	      return func.apply(null, args);
	    }, wait);
	  };

	  // Defers a function, scheduling it to run after the current call stack has
	  // cleared.
	  _.defer = function(func) {
	    return _.delay.apply(_, [func, 1].concat(slice.call(arguments, 1)));
	  };

	  // Returns a function, that, when invoked, will only be triggered at most once
	  // during a given window of time. Normally, the throttled function will run
	  // as much as it can, without ever going more than once per `wait` duration;
	  // but if you'd like to disable the execution on the leading edge, pass
	  // `{leading: false}`. To disable execution on the trailing edge, ditto.
	  _.throttle = function(func, wait, options) {
	    var context, args, result;
	    var timeout = null;
	    var previous = 0;
	    if (!options) options = {};
	    var later = function() {
	      previous = options.leading === false ? 0 : _.now();
	      timeout = null;
	      result = func.apply(context, args);
	      if (!timeout) context = args = null;
	    };
	    return function() {
	      var now = _.now();
	      if (!previous && options.leading === false) previous = now;
	      var remaining = wait - (now - previous);
	      context = this;
	      args = arguments;
	      if (remaining <= 0 || remaining > wait) {
	        clearTimeout(timeout);
	        timeout = null;
	        previous = now;
	        result = func.apply(context, args);
	        if (!timeout) context = args = null;
	      } else if (!timeout && options.trailing !== false) {
	        timeout = setTimeout(later, remaining);
	      }
	      return result;
	    };
	  };

	  // Returns a function, that, as long as it continues to be invoked, will not
	  // be triggered. The function will be called after it stops being called for
	  // N milliseconds. If `immediate` is passed, trigger the function on the
	  // leading edge, instead of the trailing.
	  _.debounce = function(func, wait, immediate) {
	    var timeout, args, context, timestamp, result;

	    var later = function() {
	      var last = _.now() - timestamp;

	      if (last < wait && last > 0) {
	        timeout = setTimeout(later, wait - last);
	      } else {
	        timeout = null;
	        if (!immediate) {
	          result = func.apply(context, args);
	          if (!timeout) context = args = null;
	        }
	      }
	    };

	    return function() {
	      context = this;
	      args = arguments;
	      timestamp = _.now();
	      var callNow = immediate && !timeout;
	      if (!timeout) timeout = setTimeout(later, wait);
	      if (callNow) {
	        result = func.apply(context, args);
	        context = args = null;
	      }

	      return result;
	    };
	  };

	  // Returns the first function passed as an argument to the second,
	  // allowing you to adjust arguments, run code before and after, and
	  // conditionally execute the original function.
	  _.wrap = function(func, wrapper) {
	    return _.partial(wrapper, func);
	  };

	  // Returns a negated version of the passed-in predicate.
	  _.negate = function(predicate) {
	    return function() {
	      return !predicate.apply(this, arguments);
	    };
	  };

	  // Returns a function that is the composition of a list of functions, each
	  // consuming the return value of the function that follows.
	  _.compose = function() {
	    var args = arguments;
	    var start = args.length - 1;
	    return function() {
	      var i = start;
	      var result = args[start].apply(this, arguments);
	      while (i--) result = args[i].call(this, result);
	      return result;
	    };
	  };

	  // Returns a function that will only be executed after being called N times.
	  _.after = function(times, func) {
	    return function() {
	      if (--times < 1) {
	        return func.apply(this, arguments);
	      }
	    };
	  };

	  // Returns a function that will only be executed before being called N times.
	  _.before = function(times, func) {
	    var memo;
	    return function() {
	      if (--times > 0) {
	        memo = func.apply(this, arguments);
	      } else {
	        func = null;
	      }
	      return memo;
	    };
	  };

	  // Returns a function that will be executed at most one time, no matter how
	  // often you call it. Useful for lazy initialization.
	  _.once = _.partial(_.before, 2);

	  // Object Functions
	  // ----------------

	  // Retrieve the names of an object's properties.
	  // Delegates to **ECMAScript 5**'s native `Object.keys`
	  _.keys = function(obj) {
	    if (!_.isObject(obj)) return [];
	    if (nativeKeys) return nativeKeys(obj);
	    var keys = [];
	    for (var key in obj) if (_.has(obj, key)) keys.push(key);
	    return keys;
	  };

	  // Retrieve the values of an object's properties.
	  _.values = function(obj) {
	    var keys = _.keys(obj);
	    var length = keys.length;
	    var values = Array(length);
	    for (var i = 0; i < length; i++) {
	      values[i] = obj[keys[i]];
	    }
	    return values;
	  };

	  // Convert an object into a list of `[key, value]` pairs.
	  _.pairs = function(obj) {
	    var keys = _.keys(obj);
	    var length = keys.length;
	    var pairs = Array(length);
	    for (var i = 0; i < length; i++) {
	      pairs[i] = [keys[i], obj[keys[i]]];
	    }
	    return pairs;
	  };

	  // Invert the keys and values of an object. The values must be serializable.
	  _.invert = function(obj) {
	    var result = {};
	    var keys = _.keys(obj);
	    for (var i = 0, length = keys.length; i < length; i++) {
	      result[obj[keys[i]]] = keys[i];
	    }
	    return result;
	  };

	  // Return a sorted list of the function names available on the object.
	  // Aliased as `methods`
	  _.functions = _.methods = function(obj) {
	    var names = [];
	    for (var key in obj) {
	      if (_.isFunction(obj[key])) names.push(key);
	    }
	    return names.sort();
	  };

	  // Extend a given object with all the properties in passed-in object(s).
	  _.extend = function(obj) {
	    if (!_.isObject(obj)) return obj;
	    var source, prop;
	    for (var i = 1, length = arguments.length; i < length; i++) {
	      source = arguments[i];
	      for (prop in source) {
	        if (hasOwnProperty.call(source, prop)) {
	            obj[prop] = source[prop];
	        }
	      }
	    }
	    return obj;
	  };

	  // Return a copy of the object only containing the whitelisted properties.
	  _.pick = function(obj, iteratee, context) {
	    var result = {}, key;
	    if (obj == null) return result;
	    if (_.isFunction(iteratee)) {
	      iteratee = createCallback(iteratee, context);
	      for (key in obj) {
	        var value = obj[key];
	        if (iteratee(value, key, obj)) result[key] = value;
	      }
	    } else {
	      var keys = concat.apply([], slice.call(arguments, 1));
	      obj = new Object(obj);
	      for (var i = 0, length = keys.length; i < length; i++) {
	        key = keys[i];
	        if (key in obj) result[key] = obj[key];
	      }
	    }
	    return result;
	  };

	   // Return a copy of the object without the blacklisted properties.
	  _.omit = function(obj, iteratee, context) {
	    if (_.isFunction(iteratee)) {
	      iteratee = _.negate(iteratee);
	    } else {
	      var keys = _.map(concat.apply([], slice.call(arguments, 1)), String);
	      iteratee = function(value, key) {
	        return !_.contains(keys, key);
	      };
	    }
	    return _.pick(obj, iteratee, context);
	  };

	  // Fill in a given object with default properties.
	  _.defaults = function(obj) {
	    if (!_.isObject(obj)) return obj;
	    for (var i = 1, length = arguments.length; i < length; i++) {
	      var source = arguments[i];
	      for (var prop in source) {
	        if (obj[prop] === void 0) obj[prop] = source[prop];
	      }
	    }
	    return obj;
	  };

	  // Create a (shallow-cloned) duplicate of an object.
	  _.clone = function(obj) {
	    if (!_.isObject(obj)) return obj;
	    return _.isArray(obj) ? obj.slice() : _.extend({}, obj);
	  };

	  // Invokes interceptor with the obj, and then returns obj.
	  // The primary purpose of this method is to "tap into" a method chain, in
	  // order to perform operations on intermediate results within the chain.
	  _.tap = function(obj, interceptor) {
	    interceptor(obj);
	    return obj;
	  };

	  // Internal recursive comparison function for `isEqual`.
	  var eq = function(a, b, aStack, bStack) {
	    // Identical objects are equal. `0 === -0`, but they aren't identical.
	    // See the [Harmony `egal` proposal](http://wiki.ecmascript.org/doku.php?id=harmony:egal).
	    if (a === b) return a !== 0 || 1 / a === 1 / b;
	    // A strict comparison is necessary because `null == undefined`.
	    if (a == null || b == null) return a === b;
	    // Unwrap any wrapped objects.
	    if (a instanceof _) a = a._wrapped;
	    if (b instanceof _) b = b._wrapped;
	    // Compare `[[Class]]` names.
	    var className = toString.call(a);
	    if (className !== toString.call(b)) return false;
	    switch (className) {
	      // Strings, numbers, regular expressions, dates, and booleans are compared by value.
	      case '[object RegExp]':
	      // RegExps are coerced to strings for comparison (Note: '' + /a/i === '/a/i')
	      case '[object String]':
	        // Primitives and their corresponding object wrappers are equivalent; thus, `"5"` is
	        // equivalent to `new String("5")`.
	        return '' + a === '' + b;
	      case '[object Number]':
	        // `NaN`s are equivalent, but non-reflexive.
	        // Object(NaN) is equivalent to NaN
	        if (+a !== +a) return +b !== +b;
	        // An `egal` comparison is performed for other numeric values.
	        return +a === 0 ? 1 / +a === 1 / b : +a === +b;
	      case '[object Date]':
	      case '[object Boolean]':
	        // Coerce dates and booleans to numeric primitive values. Dates are compared by their
	        // millisecond representations. Note that invalid dates with millisecond representations
	        // of `NaN` are not equivalent.
	        return +a === +b;
	    }
	    if (typeof a != 'object' || typeof b != 'object') return false;
	    // Assume equality for cyclic structures. The algorithm for detecting cyclic
	    // structures is adapted from ES 5.1 section 15.12.3, abstract operation `JO`.
	    var length = aStack.length;
	    while (length--) {
	      // Linear search. Performance is inversely proportional to the number of
	      // unique nested structures.
	      if (aStack[length] === a) return bStack[length] === b;
	    }
	    // Objects with different constructors are not equivalent, but `Object`s
	    // from different frames are.
	    var aCtor = a.constructor, bCtor = b.constructor;
	    if (
	      aCtor !== bCtor &&
	      // Handle Object.create(x) cases
	      'constructor' in a && 'constructor' in b &&
	      !(_.isFunction(aCtor) && aCtor instanceof aCtor &&
	        _.isFunction(bCtor) && bCtor instanceof bCtor)
	    ) {
	      return false;
	    }
	    // Add the first object to the stack of traversed objects.
	    aStack.push(a);
	    bStack.push(b);
	    var size, result;
	    // Recursively compare objects and arrays.
	    if (className === '[object Array]') {
	      // Compare array lengths to determine if a deep comparison is necessary.
	      size = a.length;
	      result = size === b.length;
	      if (result) {
	        // Deep compare the contents, ignoring non-numeric properties.
	        while (size--) {
	          if (!(result = eq(a[size], b[size], aStack, bStack))) break;
	        }
	      }
	    } else {
	      // Deep compare objects.
	      var keys = _.keys(a), key;
	      size = keys.length;
	      // Ensure that both objects contain the same number of properties before comparing deep equality.
	      result = _.keys(b).length === size;
	      if (result) {
	        while (size--) {
	          // Deep compare each member
	          key = keys[size];
	          if (!(result = _.has(b, key) && eq(a[key], b[key], aStack, bStack))) break;
	        }
	      }
	    }
	    // Remove the first object from the stack of traversed objects.
	    aStack.pop();
	    bStack.pop();
	    return result;
	  };

	  // Perform a deep comparison to check if two objects are equal.
	  _.isEqual = function(a, b) {
	    return eq(a, b, [], []);
	  };

	  // Is a given array, string, or object empty?
	  // An "empty" object has no enumerable own-properties.
	  _.isEmpty = function(obj) {
	    if (obj == null) return true;
	    if (_.isArray(obj) || _.isString(obj) || _.isArguments(obj)) return obj.length === 0;
	    for (var key in obj) if (_.has(obj, key)) return false;
	    return true;
	  };

	  // Is a given value a DOM element?
	  _.isElement = function(obj) {
	    return !!(obj && obj.nodeType === 1);
	  };

	  // Is a given value an array?
	  // Delegates to ECMA5's native Array.isArray
	  _.isArray = nativeIsArray || function(obj) {
	    return toString.call(obj) === '[object Array]';
	  };

	  // Is a given variable an object?
	  _.isObject = function(obj) {
	    var type = typeof obj;
	    return type === 'function' || type === 'object' && !!obj;
	  };

	  // Add some isType methods: isArguments, isFunction, isString, isNumber, isDate, isRegExp.
	  _.each(['Arguments', 'Function', 'String', 'Number', 'Date', 'RegExp'], function(name) {
	    _['is' + name] = function(obj) {
	      return toString.call(obj) === '[object ' + name + ']';
	    };
	  });

	  // Define a fallback version of the method in browsers (ahem, IE), where
	  // there isn't any inspectable "Arguments" type.
	  if (!_.isArguments(arguments)) {
	    _.isArguments = function(obj) {
	      return _.has(obj, 'callee');
	    };
	  }

	  // Optimize `isFunction` if appropriate. Work around an IE 11 bug.
	  if (true) {
	    _.isFunction = function(obj) {
	      return typeof obj == 'function' || false;
	    };
	  }

	  // Is a given object a finite number?
	  _.isFinite = function(obj) {
	    return isFinite(obj) && !isNaN(parseFloat(obj));
	  };

	  // Is the given value `NaN`? (NaN is the only number which does not equal itself).
	  _.isNaN = function(obj) {
	    return _.isNumber(obj) && obj !== +obj;
	  };

	  // Is a given value a boolean?
	  _.isBoolean = function(obj) {
	    return obj === true || obj === false || toString.call(obj) === '[object Boolean]';
	  };

	  // Is a given value equal to null?
	  _.isNull = function(obj) {
	    return obj === null;
	  };

	  // Is a given variable undefined?
	  _.isUndefined = function(obj) {
	    return obj === void 0;
	  };

	  // Shortcut function for checking if an object has a given property directly
	  // on itself (in other words, not on a prototype).
	  _.has = function(obj, key) {
	    return obj != null && hasOwnProperty.call(obj, key);
	  };

	  // Utility Functions
	  // -----------------

	  // Run Underscore.js in *noConflict* mode, returning the `_` variable to its
	  // previous owner. Returns a reference to the Underscore object.
	  _.noConflict = function() {
	    root._ = previousUnderscore;
	    return this;
	  };

	  // Keep the identity function around for default iteratees.
	  _.identity = function(value) {
	    return value;
	  };

	  _.constant = function(value) {
	    return function() {
	      return value;
	    };
	  };

	  _.noop = function(){};

	  _.property = function(key) {
	    return function(obj) {
	      return obj[key];
	    };
	  };

	  // Returns a predicate for checking whether an object has a given set of `key:value` pairs.
	  _.matches = function(attrs) {
	    var pairs = _.pairs(attrs), length = pairs.length;
	    return function(obj) {
	      if (obj == null) return !length;
	      obj = new Object(obj);
	      for (var i = 0; i < length; i++) {
	        var pair = pairs[i], key = pair[0];
	        if (pair[1] !== obj[key] || !(key in obj)) return false;
	      }
	      return true;
	    };
	  };

	  // Run a function **n** times.
	  _.times = function(n, iteratee, context) {
	    var accum = Array(Math.max(0, n));
	    iteratee = createCallback(iteratee, context, 1);
	    for (var i = 0; i < n; i++) accum[i] = iteratee(i);
	    return accum;
	  };

	  // Return a random integer between min and max (inclusive).
	  _.random = function(min, max) {
	    if (max == null) {
	      max = min;
	      min = 0;
	    }
	    return min + Math.floor(Math.random() * (max - min + 1));
	  };

	  // A (possibly faster) way to get the current timestamp as an integer.
	  _.now = Date.now || function() {
	    return new Date().getTime();
	  };

	   // List of HTML entities for escaping.
	  var escapeMap = {
	    '&': '&amp;',
	    '<': '&lt;',
	    '>': '&gt;',
	    '"': '&quot;',
	    "'": '&#x27;',
	    '`': '&#x60;'
	  };
	  var unescapeMap = _.invert(escapeMap);

	  // Functions for escaping and unescaping strings to/from HTML interpolation.
	  var createEscaper = function(map) {
	    var escaper = function(match) {
	      return map[match];
	    };
	    // Regexes for identifying a key that needs to be escaped
	    var source = '(?:' + _.keys(map).join('|') + ')';
	    var testRegexp = RegExp(source);
	    var replaceRegexp = RegExp(source, 'g');
	    return function(string) {
	      string = string == null ? '' : '' + string;
	      return testRegexp.test(string) ? string.replace(replaceRegexp, escaper) : string;
	    };
	  };
	  _.escape = createEscaper(escapeMap);
	  _.unescape = createEscaper(unescapeMap);

	  // If the value of the named `property` is a function then invoke it with the
	  // `object` as context; otherwise, return it.
	  _.result = function(object, property) {
	    if (object == null) return void 0;
	    var value = object[property];
	    return _.isFunction(value) ? object[property]() : value;
	  };

	  // Generate a unique integer id (unique within the entire client session).
	  // Useful for temporary DOM ids.
	  var idCounter = 0;
	  _.uniqueId = function(prefix) {
	    var id = ++idCounter + '';
	    return prefix ? prefix + id : id;
	  };

	  // By default, Underscore uses ERB-style template delimiters, change the
	  // following template settings to use alternative delimiters.
	  _.templateSettings = {
	    evaluate    : /<%([\s\S]+?)%>/g,
	    interpolate : /<%=([\s\S]+?)%>/g,
	    escape      : /<%-([\s\S]+?)%>/g
	  };

	  // When customizing `templateSettings`, if you don't want to define an
	  // interpolation, evaluation or escaping regex, we need one that is
	  // guaranteed not to match.
	  var noMatch = /(.)^/;

	  // Certain characters need to be escaped so that they can be put into a
	  // string literal.
	  var escapes = {
	    "'":      "'",
	    '\\':     '\\',
	    '\r':     'r',
	    '\n':     'n',
	    '\u2028': 'u2028',
	    '\u2029': 'u2029'
	  };

	  var escaper = /\\|'|\r|\n|\u2028|\u2029/g;

	  var escapeChar = function(match) {
	    return '\\' + escapes[match];
	  };

	  // JavaScript micro-templating, similar to John Resig's implementation.
	  // Underscore templating handles arbitrary delimiters, preserves whitespace,
	  // and correctly escapes quotes within interpolated code.
	  // NB: `oldSettings` only exists for backwards compatibility.
	  _.template = function(text, settings, oldSettings) {
	    if (!settings && oldSettings) settings = oldSettings;
	    settings = _.defaults({}, settings, _.templateSettings);

	    // Combine delimiters into one regular expression via alternation.
	    var matcher = RegExp([
	      (settings.escape || noMatch).source,
	      (settings.interpolate || noMatch).source,
	      (settings.evaluate || noMatch).source
	    ].join('|') + '|$', 'g');

	    // Compile the template source, escaping string literals appropriately.
	    var index = 0;
	    var source = "__p+='";
	    text.replace(matcher, function(match, escape, interpolate, evaluate, offset) {
	      source += text.slice(index, offset).replace(escaper, escapeChar);
	      index = offset + match.length;

	      if (escape) {
	        source += "'+\n((__t=(" + escape + "))==null?'':_.escape(__t))+\n'";
	      } else if (interpolate) {
	        source += "'+\n((__t=(" + interpolate + "))==null?'':__t)+\n'";
	      } else if (evaluate) {
	        source += "';\n" + evaluate + "\n__p+='";
	      }

	      // Adobe VMs need the match returned to produce the correct offest.
	      return match;
	    });
	    source += "';\n";

	    // If a variable is not specified, place data values in local scope.
	    if (!settings.variable) source = 'with(obj||{}){\n' + source + '}\n';

	    source = "var __t,__p='',__j=Array.prototype.join," +
	      "print=function(){__p+=__j.call(arguments,'');};\n" +
	      source + 'return __p;\n';

	    try {
	      var render = new Function(settings.variable || 'obj', '_', source);
	    } catch (e) {
	      e.source = source;
	      throw e;
	    }

	    var template = function(data) {
	      return render.call(this, data, _);
	    };

	    // Provide the compiled source as a convenience for precompilation.
	    var argument = settings.variable || 'obj';
	    template.source = 'function(' + argument + '){\n' + source + '}';

	    return template;
	  };

	  // Add a "chain" function. Start chaining a wrapped Underscore object.
	  _.chain = function(obj) {
	    var instance = _(obj);
	    instance._chain = true;
	    return instance;
	  };

	  // OOP
	  // ---------------
	  // If Underscore is called as a function, it returns a wrapped object that
	  // can be used OO-style. This wrapper holds altered versions of all the
	  // underscore functions. Wrapped objects may be chained.

	  // Helper function to continue chaining intermediate results.
	  var result = function(obj) {
	    return this._chain ? _(obj).chain() : obj;
	  };

	  // Add your own custom functions to the Underscore object.
	  _.mixin = function(obj) {
	    _.each(_.functions(obj), function(name) {
	      var func = _[name] = obj[name];
	      _.prototype[name] = function() {
	        var args = [this._wrapped];
	        push.apply(args, arguments);
	        return result.call(this, func.apply(_, args));
	      };
	    });
	  };

	  // Add all of the Underscore functions to the wrapper object.
	  _.mixin(_);

	  // Add all mutator Array functions to the wrapper.
	  _.each(['pop', 'push', 'reverse', 'shift', 'sort', 'splice', 'unshift'], function(name) {
	    var method = ArrayProto[name];
	    _.prototype[name] = function() {
	      var obj = this._wrapped;
	      method.apply(obj, arguments);
	      if ((name === 'shift' || name === 'splice') && obj.length === 0) delete obj[0];
	      return result.call(this, obj);
	    };
	  });

	  // Add all accessor Array functions to the wrapper.
	  _.each(['concat', 'join', 'slice'], function(name) {
	    var method = ArrayProto[name];
	    _.prototype[name] = function() {
	      return result.call(this, method.apply(this._wrapped, arguments));
	    };
	  });

	  // Extracts the result from a wrapped and chained object.
	  _.prototype.value = function() {
	    return this._wrapped;
	  };

	  // AMD registration happens at the end for compatibility with AMD loaders
	  // that may not enforce next-turn semantics on modules. Even though general
	  // practice for AMD registration is to be anonymous, underscore registers
	  // as a named module because, like jQuery, it is a base library that is
	  // popular enough to be bundled in a third party lib, but not be part of
	  // an AMD load request. Those cases could generate an error when an
	  // anonymous define() is called outside of a loader request.
	  if (true) {
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function() {
	      return _;
	    }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  }
	}.call(this));


/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function(room_name, casting, roomEx){
	  return {
	      room_id : room_name,
	      role : {
	          general: {
	              name: '村人',
	              ex: '特に能力は何も出来ません。画面を操作するフリをしてください。',
	              team: 'human',
	              role: 'general'
	          },
	          wizard:  {
	              name: '魔法使い',
	              ex: '魔法で1人だけ正体を知ることが出来ます。',
	              team: 'human',
	              role: 'wizard'
	          },
	          thief:  {
	              name: '怪盗',
	              ex: '指名した１人と自分の役職を交換します。',
	              team: 'human',
	              role: 'thief'
	          },
	          crazy:  {
	              name: '狂人',
	              ex: '人間ですが、人狼の味方です。人狼と手を組み、人狼が人間側にばれないようにしましょう。',
	              team: 'wolf',
	              role: 'crazy'
	          },
	          wolf: {
	              name: '人狼',
	              ex: '人狼です。狂人と手を組んで人間側にばれないようにしましょう。',
	              team: 'wolf',
	              role: 'wolf'
	          },
	          fox: {
	              name: '妖狐',
	              ex: '妖狐は人狼側でも人間側でも無い第３勢力です。人狼と疑われて処刑対称になれば妖狐の勝ちです。',
	              team: 'fox',
	              role: 'fox'
	          }
	      },
	      users : [],
	      page: '',
	      count: {
	          num: casting.length,
	          ex: roomEx
	      },
	      current : casting,
	      action: [],
	      after: []
	  };
	};

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = "<p>ほげほげ</p>\n<p>ほげほげ</p>\n<p>ほげほげ</p>\n<p>ほげほげ</p>";

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = "<p>aaa</p>\n<p>aaa</p>\n";

/***/ }
/******/ ])