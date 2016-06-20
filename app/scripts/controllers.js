angular.module('TicketTrackerApp')
        .controller('IndexController', ['$scope', 'menuFactory', 'corporateFactory', function ($scope, menuFactory, corporateFactory) {
            $scope.showDish = false;
            $scope.message = "Loading ...";

            $scope.firstDish = menuFactory.getResult().get({ id: 0 })
            .$promise.then(
                function (response) {
                    $scope.firstDish = response;
                    $scope.showDish = true;
                },
                function (response) {
                    $scope.message = "Error: " + response.status + " " + response.statusText;
                }
            );

            //menuFactory.getDish(0)
            //.then(
            //    function (response) {
            //        $scope.firstDish = response.data;
            //        $scope.showDish = true;
            //    },
            //    function (response) {
            //        $scope.message = "Error: " + response.status + " " + response.statusText;
            //    }
            //);

            //$scope.firstDish = {};
            //menuFactory.getDish(0)
            //.then(
            //    function (response) {
            //        $scope.firstDish = response.data;
            //        $scope.showDish = true;
            //    }
            //);

            $scope.promotion = menuFactory.getPromotion(0);
            $scope.chef = corporateFactory.getLeader(3);

        }])
        .controller('MenuController', ['$scope', 'menuFactory', function ($scope, menuFactory) {
            $scope.showMenu = false;
            $scope.message = "Loading ...";

            menuFactory.getResult().query(
                function (response) {
                    $scope.dishes = response;
                    $scope.showMenu = true;
                },
                function (response) {
                    $scope.message = "Error: " + response.status + " " + response.statusText;
                });


            //menuFactory.getDishes()
            //.then(
            //    function (response) {
            //        $scope.dishes = response.data;
            //        $scope.showMenu = true;
            //    },
            //    function (response) {
            //    $scope.message = "Error: " + response.status + " " + response.statusText;
            //    }
            //);

            $scope.showDetails = false;

            //$scope.dishes = [];
            //menuFactory.getDishes()
            //.then(
            //    function (response) {
            //        $scope.dishes = response.data;
            //    }
            //);

            $scope.tab = 1;
            $scope.filtText = '';
            $scope.isSelected = function (checkTab) {
                return ($scope.tab === checkTab);
            };

            $scope.select = function (setTab) {
                $scope.tab = setTab;
                if (setTab === 2) {
                    $scope.filtText = "appetizer";
                }
                else if (setTab === 3) {
                    $scope.filtText = "mains";
                }
                else if (setTab === 4) {
                    $scope.filtText = "dessert";
                }
                else {
                    $scope.filtText = "";
                }
            };

            $scope.toggleDetails = function () {
                $scope.showDetails = !$scope.showDetails;
            };
        }])
        .controller('ContactController', ['$scope', function ($scope) {

        }])
        .controller('SearchController', ['$scope', 'searchFactory', '$http', function ($scope, searchFactory, $http) {
            $scope.onewayClick = function ($event) {
                if ($event)
                    $scope.search.returnDate = '';
            }

            $scope.loading = false;

            $scope.myDate = new Date();

            var defaultForm = {
                oneway: false,
                from: '',
                to: '',
                fromDate: '',
                returnDate: ''
            };

            $scope.search = angular.copy(defaultForm);
            
            $scope.results = [];
            
            $scope.sendSearch = function () {
                console.log($scope.search);
                if (!$scope.search.oneway && ($scope.search.returnDate == "")) {
                    alert('err');
                    $scope.invalidSearchForm = true;
                    console.log('incorrect');
                }
                else
                {                    
                    $scope.loading = true;
                    searchFactory.getFlightResults()
                        .then(function (data) {
                            //$("#result").empty().append(data.trips.tripOption[0].saleTotal);
                            //$scope.results = data;

                            for (var i = 0; i < data.trips.tripOption.length; i++)
                            {
                                var result =
                                    {
                                        price: data.trips.tripOption[i].saleTotal,
                                        departure : data.trips.tripOption[i].slice[0].segment[0].leg[0].departureTime,
                                        arrival : data.trips.tripOption[i].slice[0].segment[data.trips.tripOption[i].slice[0].segment.length-1].leg[0].arrivalTime,
                                        duration : data.trips.tripOption[i].slice[0].duration,
                                        returnDeparture : data.trips.tripOption[i].slice[1].segment[0].leg[0].departureTime,
                                        returnArrival : data.trips.tripOption[i].slice[1].segment[data.trips.tripOption[i].slice[1].segment.length-1].leg[0].arrivalTime,
                                        returnDuration: data.trips.tripOption[i].slice[1].duration,
                                        airline :data.trips.tripOption[i].slice[0].segment[0].flight.carrier,
                                        tracked : false
                                    };

                                $scope.results.push(result);
                            }


                            $scope.loading = false;
                        }, function (error) {
                            // promise rejected, could log the error with: console.log('error', error);
                            $scope.loading = false;
                            alert(data);
                        });

                    //$scope.showMessage = true;
                    //$scope.message = 'loading...';
                    $scope.invalidSearchForm = false;
                    ////$scope.search = {mychannel:"", firstName:"", lastName:"", agree:false, email:"" };
                    ////$scope.search.mychannel="";
                    //$scope.results = searchFactory.getResults();
                    //$scope.showMessage = false;
                    $scope.searchForm.$setPristine();
                    $scope.search = angular.copy(defaultForm);
                    console.log($scope.search);
                }
            };
        }])
        .controller('DishDetailController', ['$scope', '$stateParams', 'menuFactory', function ($scope, $stateParams, menuFactory) {

            $scope.showDish = false;
            $scope.message = "Loading ...";

            $scope.dish = menuFactory.getResult().get({ id: parseInt($stateParams.id, 10) })
            .$promise.then(
                function (response) {
                    $scope.dish = response;
                    $scope.showDish = true;
                },
                function (response) {
                    $scope.message = "Error: " + response.status + " " + response.statusText;
                }
);


            //menuFactory.getDish(parseInt($stateParams.id, 10))
            //.then(
            //    function (response) {
            //        $scope.dish = response.data;
            //        $scope.showDish = true;
            //    },
            //    function (response) {
            //        $scope.message = "Error: " + response.status + " " + response.statusText;
            //    }
            //);


            //$scope.dish = {};
            //menuFactory.getDish(parseInt($stateParams.id, 10))
            //            .then(function (response) {
            //                $scope.dish = response.data;
            //                $scope.showDish = true;
            //            });


            //$scope.dish = menuFactory.getDish(3);
            $scope.oderText = '';
        }])

        .controller('DishCommentController', ['$scope', 'menuFactory', function ($scope, menuFactory) {

            //Step 1: Create a JavaScript object to hold the comment from the form            
            $scope.commentContent = { author: "", rating: 5, date: "", comment: "" };
            $scope.rateOption = [1, 2, 3, 4, 5];

            $scope.submitComment = function () {
                $scope.commentContent.date = new Date().toISOString();
                console.log($scope.commentContent);
                $scope.dish.comments.push($scope.commentContent);

                menuFactory.getDishes().update({ id: $scope.dish.id }, $scope.dish);
                $scope.commentForm.$setPristine();
                $scope.commentContent = { rating: 5, comment: "", author: "", date: "" };
            }


            //$scope.submitComment = function () {                
            //    //Step 2: This is how you record the date
            //    //"The date property of your JavaScript object holding the comment" = new Date().toISOString();
            //    $scope.commentContent.date = new Date().toISOString();                    
            //    // Step 3: Push your comment into the dish's comment array
            //    $scope.dish.comments.push($scope.commentContent);                
            //    //Step 4: reset your form to pristine
            //    //Step 5: reset your JavaScript object that holds your comment
            //    $scope.commentContent ={author:"", rating:5, date :"", comment:""};

            //    $scope.commentForm.$setPristine();
            //    console.log($scope.commentContent);
            //};
        }])
        .controller('AboutController', ['$scope', 'corporateFactory', function ($scope, corporateFactory) {
            $scope.leaderShips = corporateFactory.getLeaders();

        }])
;
